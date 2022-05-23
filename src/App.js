import React from 'react'
import { HashRouter as Router,Routes,Route} from 'react-router-dom'


import Home from './components/home/Home'
import Navigation from './components/home/Home'
import Chart from './components/chart/Chart'
import './App.scss'

const App = () => {
	return (

		<Router>
			<div className="app">
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/chart" element={<Chart/>}/>
				</Routes>

				
			</div>
		</Router>
	)
}

export default App
