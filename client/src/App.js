import './App.css';
import {
	BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';
import HomePage from './components/Home';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
