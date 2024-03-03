import React from 'react'
import Login from './auth/Login'
import Home from './dashboard/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App