import React from 'react'
import { Row, Col } from 'antd'
import DateAndTime from '../components/DateAndTime'
import SystemStatus from '../components/SystemStatus'
import StorageStatus from '../components/StorageStatus'
import CommandCenter from '../components/CommandCenter'
import TaskManager from '../components/TaskManager'
import Apps from '../components/Apps'

const Home = () => {
    return (
        <>
            <Row style={{ height: '100vh' }}>
                <Col className={'py-2 ps-2 pe-1'} span={6}>
                    <Row style={{ height: '97%' }}>
                        <Col span={24} className={'rounded m-1 border border-2'} style={{ height: '20%' }}>
                            <DateAndTime />
                        </Col>
                        <Col span={24} className={'rounded m-1 border border-2'} style={{ height: '40%' }}>
                            <SystemStatus />
                        </Col>
                        <Col span={24} className={'rounded m-1 border border-2'} style={{ height: '40%' }}>
                            <StorageStatus />
                        </Col>
                    </Row>
                </Col>
                <Col span={18} className={'py-2 ps-1 pe-3'} style={{ height: '100%' }}>
                    <Row style={{ height: '97%' }}>
                        <Col span={24} className={'rounded m-1'} style={{ height: '33%' }}>
                            <Row style={{ height: '100%' }}>
                                <Col className={'rounded me-1 border border-2'} style={{ height: '100%', width: '49.5%' }} >
                                    <TaskManager />
                                </Col>
                                <Col className={'rounded ms-1 border border-2'} style={{ height: '100%', width: '49.5%' }} >
                                    <CommandCenter />
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24} className={'rounded m-1 border border-2'} style={{ height: '68%' }}>
                            <Apps />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Home