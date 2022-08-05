import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header'
import Charts from './Pages/Charts';
import Home from './Pages/Home';
import Records from './Pages/Records';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/records" element={<Records />} />
            </Routes>
            <Routes>
                <Route path="/charts" element={<Charts />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Rotas; 