import { Progress, Switch } from 'antd';
import React, { useState } from 'react';
import { MdBattery2Bar } from 'react-icons/md';
import { FaVolumeUp } from 'react-icons/fa';
import { IoWifi } from 'react-icons/io5';
import { FaBluetooth } from 'react-icons/fa';
import { FaPowerOff } from 'react-icons/fa6';


const CommandCenter = () => {
	const [bluetoothEnabled, setBluetoothEnabled] = useState(false);
	const [volumeLevel, setVolumeLevel] = useState(50);
	const handleVolumeChange = (percent) => {
		setVolumeLevel(percent);
	};

	const toggleBluetooth = (checked) => {
		setBluetoothEnabled(checked);
	};
	const iconStyle = {

		alignItems: 'center',
		fontSize: '27px',
		color: 'black',
		marginLeft: '12px', // Add left margin here


	};



	return (
		<>

			<div className={'my-1'} style={iconStyle}>

				<MdBattery2Bar />
				<span style={{ fontSize: '15px', marginLeft: '8px' }}>53% (Ac Power)</span>
			</div>



			<div style={iconStyle}>

				<FaVolumeUp />
				{/* <Progress percent={40} style={{ marginLeft: '12px', height: '30px', width: '200px' }} /> */}
				<Progress
					percent={volumeLevel}
					size="small"
					style={{ marginLeft: '12px', width: '200px' }}
					onChange={handleVolumeChange}
				/>

			</div>
			<div style={iconStyle}>
				<IoWifi />
				<span style={{ fontSize: '15px', marginLeft: '8px' }}>Atmiya</span>
			</div>
			<div style={iconStyle}>
				<FaBluetooth />
				<Switch checked={bluetoothEnabled} onChange={toggleBluetooth} style={{ marginLeft: '12px' }} />
			</div>
			<div style={iconStyle}>
				<FaPowerOff />
				<span style={{ fontSize: '15px', marginLeft: '8px' }}> Logout</span>

			</div>

		</>
	);
};

export default CommandCenter;
