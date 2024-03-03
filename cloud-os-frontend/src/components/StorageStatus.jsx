import React, { useState, useEffect } from 'react';
import { Card, Progress } from 'antd';

const StorageStatus = () => {
    const [drives, setdrives] = useState([])

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8000/ws/disks_info/')

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data)
            setdrives(data)
        }

        return () => {
            socket.close()
        }
    }, [])

    const getStrokeColor = (usage, total) => {
        const usagePercentage = (usage / total) * 100;
        return usagePercentage > 90 ? '#ff8080' : '#5bc0de';
    };

    return (
        <div className="h-100">
            <Card title={<span className="text-secondary">Storage</span>} className="system-status-card h-100 overflow-y-scroll">
                <div className="card-body">
                    {drives.map((drive, index) => (
                        <div key={index} className="drive-wrapper mb-3" style={{ border: '1px solid #ccc', padding: '10px 15px' }}>
                            <div className="d-flex align-items-center">
                                <img src="/images/hard-drive.png" alt="Hard Drive" style={{ width: '50px', marginRight: '10px' }} />
                                <div className="flex-grow-1">
                                    <p style={{ marginBottom: '0px' }}>{drive.mount}</p>
                                    <Progress percent={(drive.percentage) * 100} strokeColor={getStrokeColor(drive.usage, drive.total)} />
                                    <p className="mb-0">{(drive.total - drive.usage).toFixed(2)} GB / {drive.total} GB available</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}

export default StorageStatus;
