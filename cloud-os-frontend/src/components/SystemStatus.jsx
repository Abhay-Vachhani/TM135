import React, { useState, useEffect } from 'react';
import { Card, Progress } from 'antd';

const SystemStatus = () => {
    const [systemInfo, setSystemInfo] = useState({
        cpu: 0,
        memory: 0
    })


    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8000/ws/system_info/')

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data)
            setSystemInfo(data)
        }

        return () => {
            socket.close()
        }
    }, [])

    const interpolateColor = (color1, color2, percent) => {
        const factor = percent / 100;
        const result = color1.map((channel, i) => {
            const delta = channel - color2[i];
            return Math.round(channel - delta * factor);
        });
        return `rgb(${result.join(',')})`;
    };

    const getStrokeColor = (percent) => {
        const lightGreen = [82, 196, 26];
        const lightRed = [255, 77, 79];
        return interpolateColor(lightGreen, lightRed, percent);
    };

    return (
        <div className="h-100">
            <Card title={<span className="text-secondary">System Status</span>} className="system-status-card h-100">
                <div className="card-body d-flex flex-column h-100">
                    <div className="row">
                        <div className="col">
                            <div className="d-flex flex-column align-items-center">
                                <Progress type="dashboard" percent={systemInfo.cpu} format={() => <span style={{ color: getStrokeColor(systemInfo.cpu) }}>{systemInfo.cpu}%</span>} size={120} strokeColor={getStrokeColor(systemInfo.cpu)} />
                                <p className="mb-0 mt-2 small text-center">CPU</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex flex-column align-items-center">
                                <Progress type="dashboard" percent={systemInfo.memory} format={() => <span style={{ color: getStrokeColor(systemInfo.memory) }}>{systemInfo.memory}%</span>} size={120} strokeColor={getStrokeColor(systemInfo.memory)} />
                                <p className="mb-0 mt-2 small text-center">RAM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default SystemStatus;
