import { Card } from 'antd';
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import FileManager from '../Apps/FileManager';

const Apps = () => {
    const defaultModalStatus = {
        isOpen: false,
        label: '',
        component: () => { }
    }

    const [appModal, setAppModal] = useState(defaultModalStatus)

    return (
        <>
            <Card title={<span className="text-secondary">Apps</span>} className="system-status-card h-100 overflow-y-scroll">
                <div style={{ display: 'flex' }}>
                    <div onClick={() => {
                        setAppModal({
                            isOpen: true,
                            label: 'App Store',
                            component: ''
                        })
                    }} style={{ padding: '15px', textAlign: 'center', cursor: 'pointer' }}>
                        <img src='/images/apps.png' alt='' style={{ height: '50px' }} />
                        <h6 style={{ paddingTop: '20px' }}>Apps Store</h6>
                    </div>
                    <div onClick={() => {
                        setAppModal({
                            isOpen: true,
                            label: 'File Manager',
                            component: FileManager
                        })
                    }} style={{ padding: '15px', textAlign: 'center', cursor: 'pointer' }}>
                        <img src='/images/file.png' alt='' style={{ height: '50px' }} />
                        <h6 style={{ paddingTop: '20px' }}>Files</h6>
                    </div>
                    <div onClick={() => {
                        setAppModal({
                            isOpen: true,
                            label: 'Text Editor',
                            component: ''
                        })
                    }} style={{ padding: '15px', textAlign: 'center', cursor: 'pointer' }}>
                        <img src='/images/TextEditor.png' alt='' style={{ height: '50px' }} />
                        <h6 style={{ paddingTop: '20px' }}>Text Editor</h6>
                    </div>
                    <div onClick={() => {
                        setAppModal({
                            isOpen: true,
                            label: 'Calculator',
                            component: ''
                        })
                    }} style={{ padding: '15px', textAlign: 'center', cursor: 'pointer' }}>
                        <img src='/images/calculator.png' alt='' style={{ height: '50px' }} />
                        <h6 style={{ paddingTop: '20px' }}>Calculator</h6>
                    </div>

                    <div onClick={() => {
                        setAppModal({
                            isOpen: true,
                            label: 'Terminal',
                            component: ''
                        })
                    }} style={{ padding: '15px', textAlign: 'center', cursor: 'pointer' }}>
                        <img src='/images/terminal.png' alt='' style={{ height: '50px' }} />
                        <h6 style={{ paddingTop: '20px' }}>Terminal</h6>
                    </div>
                    <div onClick={() => {
                        setAppModal({
                            isOpen: true,
                            label: 'Settings',
                            component: ''
                        })
                    }} style={{ padding: '15px', textAlign: 'center', cursor: 'pointer' }}>
                        <img src='/images/setting.png' alt='' style={{ height: '50px' }} />
                        <h6 style={{ paddingTop: '20px' }}>Settings</h6>
                    </div>
                    <div onClick={() => {
                        setAppModal({
                            isOpen: true,
                            label: 'Media Player',
                            component: ''
                        })
                    }} style={{ padding: '15px', textAlign: 'center', cursor: 'pointer' }}>
                        <img src='/images/mediaPlayer.png' alt='' style={{ height: '50px' }} />
                        <h6 style={{ paddingTop: '20px' }}>Video Player</h6>
                    </div>
                </div>
            </Card>

            <Modal
                title={appModal.label}
                open={appModal.isOpen}
                width={'100%'}
                bodyStyle={{ height: '85vh', overflowY: 'hidden' }}
                style={{ top: 16 }}
                footer={null}
                onCancel={() => {
                    setAppModal(defaultModalStatus)
                }}
                keyboard={false}
            >
                <appModal.component />
            </Modal>
        </>
    );
};

export default Apps;
