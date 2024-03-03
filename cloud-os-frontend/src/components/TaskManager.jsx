import React from 'react';
import { Card } from 'antd';

const TaskManager = () => {
    return (
        <Card title={<span className="text-secondary">Task Manager</span>} className="system-status-card h-100 overflow-y-scroll">

            <table className="simple-table" style={{ border: '1px solid #000', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #000', padding: '8px', margin: '0' }}>Apps</th>
                        <th style={{ border: '1px solid #000', padding: '8px', margin: '0' }}>CPU</th>
                        <th style={{ border: '1px solid #000', padding: '8px', margin: '0' }}>Memory</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid #000', padding: '8px', margin: '0' }}>Firefox</td>
                        <td style={{ border: '1px solid #000', padding: '8px', margin: '0' }}>0.2%</td>
                        <td style={{ border: '1px solid #000', padding: '8px', margin: '0' }}>56.5 MB</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #000', padding: '8px', margin: '0' }}>Google Chrome</td>
                        <td style={{ border: '1px solid #000', padding: '8px', margin: '0' }}>1.9%</td>
                        <td style={{ border: '1px solid #000', padding: '8px', margin: '0' }}>156.5 MB</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #000', padding: '8px', margin: '0' }}>Visual Studio Code</td>
                        <td style={{ border: '1px solid #000', padding: '8px', margin: '0' }}>3.2%</td>
                        <td style={{ border: '1px solid #000', padding: '8px', margin: '0' }}>399.5 MB</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #000', padding: '8px', margin: '0' }}>AnyDesk</td>
                        <td style={{ border: '1px solid #000', padding: '8px', margin: '0' }}>0%</td>
                        <td style={{ border: '1px solid #000', padding: '8px', margin: '0' }}>1.6 MB</td>
                    </tr>
                </tbody>
            </table>
        </Card>
    );
}

export default TaskManager
