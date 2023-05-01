import './App.css';
import '../src/assets/style/style.css'
import {
	BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';
import HomePage from './components/Home';
import Result from './components/result';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/result/:id" element={<Result />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
