import Header from '~/layouts/component/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((routes, index) => {
                        const Page = routes.component;
                        return <Route key={index} path={routes.path} element={/>
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
