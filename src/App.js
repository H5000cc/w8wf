import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import Extra from './pages/Extra';
import Nav from './components/Nav';
import './App.css';

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/extra' component={Extra} />
            </Routes>
        </Router>
    );
}

export default App;