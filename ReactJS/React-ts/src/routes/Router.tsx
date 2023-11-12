import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login';
import About from '../pages/About';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    );
}

export default Router;