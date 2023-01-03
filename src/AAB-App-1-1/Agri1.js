import { BrowserRouter as Router, Link, useRoutes } from 'react-router-dom';
import { Col, Row, } from 'reactstrap';
import App10 from '../App-28-12/App10';
import App1 from '../Form-16-12/App1'
import AgriComp from '../AAB-App-2-1/AgriComp';
const AppRoutes = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <div> <AgriComp /></div>
        },
        {
            path: "/home",
            element: <div><App10 /></div>
        },
        {
            path: "/fetch",
            element: <div><App1 /></div>
        }
    ]);

    return routes;
}


function Agri1() {
    return (
        <Router>
            <Row>
                <Col md={3}>
                    <ul
                        style={{ backgroundColor: "lightgrey", height: window.innerHeight }}>
                        <li><Link to={"/"}>Log in</Link></li>
                        <li><Link to={"/home"}>HOME</Link></li>
                        <li><Link to={"/fetch"}>fetch</Link></li>
                    </ul>
                </Col>
                <Col md={9}> <AppRoutes /></Col>
            </Row>
        </Router>
    )
}

export default Agri1;