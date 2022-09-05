import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import {DefaultLayout} from '~/components/Layout';

function App() {
    return (
        <Router basename='/home'>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        const Layout = DefaultLayout;
                        return <Route key={index} path={route.path} element={
                          <Layout>
                            <Page />
                          </Layout>
                        } />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;