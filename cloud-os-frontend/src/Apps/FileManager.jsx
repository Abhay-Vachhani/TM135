import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Input } from 'antd';

const FileManager = () => {
    const [currentPath, setCurrentPath] = useState('/home')
    const [cnt, setCnt] = useState(0)
    const [fileAndFolders, setFileAndFolders] = useState([])
    const uploadFile = useRef()

    useEffect(() => {
        fetch(`http://localhost:8000/list-files?path=${currentPath}`)
            .then(response => {
                if (!response.ok) {
                    alert('Error while fetching data')
                }
                return response.json()
            })
            .then(data => {
                setFileAndFolders(data.sort((a, b) => (a.is_dir === b.is_dir) ? 0 : a.is_dir ? -1 : 1))
            })
            .catch(error => alert('Error while fetching data'))
    }, [currentPath, cnt])

    const handleFileChange = async (event) => {
        const files = event.target.files;
        const formData = new FormData();

        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }
        formData.append('path', currentPath);

        try {
            const response = await fetch('http://localhost:8000/upload', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('Files uploaded successfully');
                setCnt(cnt + 1)
            } else {
                alert('Error uploading files');
            }
        } catch (error) {
            alert('Error uploading files');
        } finally {
            uploadFile.current.value = ''
        }
    }

    return (
        <div style={{ height: '100%' }}>
            <div>
                <Input.Search placeholder="Search files here" onSearch={(query) => {
                    console.log('Searched:', query)
                }} enterButton style={{ width: '50%' }} />
            </div>
            <Row style={{ height: '90%' }}>
                <Col md={5} className={'border'}>
                    <div className={'border border-2 rounded m-2 p-1 fs-5'}>Recent</div>
                    <div className={'border border-2 rounded m-2 p-1 fs-5'}>Home</div>
                    <div className={'border border-2 rounded m-2 p-1 fs-5'}>Trash</div>
                    <div className={'border border-2 rounded m-2 p-1 fs-5'}>Other Locations</div>
                </Col>
                <Col md={19} className={'border p-2'}>
                    <div className={'d-flex justify-content-between'}>
                        <span>{currentPath}</span>
                        <form enctype="multipart/form-data">
                            <input ref={uploadFile} type='file' name='upload_file' onChange={handleFileChange} multiple hidden />
                        </form>
                        <span><img type='button' src={'/images/upload2.png'} height={35} className={'border rounded'} onClick={
                            () => {
                                uploadFile.current.click()
                            }
                        } /></span>
                    </div>
                    <Row>
                        {
                            currentPath != '/' && <Col span={3} onClick={
                                () => {
                                    setCurrentPath(currentPath.split('/').slice(0, -1).join('/') || '/')
                                }
                            } className={'m-2'}>
                                <img src={'/images/folder.png'} className={'mx-3'} style={{ height: '100px' }} alt="Folder Icon" />
                                <div className={'fs-5'} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '125px', textAlign: 'center' }}>..</div>
                            </Col>
                        }

                        {
                            fileAndFolders.map((file, index) => (
                                file.is_dir ?
                                    <Col span={3} key={index} onClick={
                                        () => {
                                            setCurrentPath(file.path)
                                        }
                                    } className={'m-2'}>
                                        <img src={'/images/folder.png'} className={'mx-3'} style={{ height: '100px' }} alt="Folder Icon" />
                                        <div className={'fs-5'} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '125px', textAlign: 'center' }}>{file.name}</div>
                                    </Col>
                                    :
                                    <Col span={3} key={index} className={'m-2'}>
                                        <img src={'/images/simple-file.png'} className={'mx-3'} style={{ height: '100px' }} alt="File Icon" />
                                        <div className={'fs-5'} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '150px' }}>{file.name}</div>
                                    </Col>
                            ))
                        }
                    </Row>
                </Col>
            </Row >
        </div >
    );
}

export default FileManager;
