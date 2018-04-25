import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const title = 'My Minimal React Webpack Babel Setup';
const Home = () => (
    <div>
        <h3>Home</h3>
    </div>
)
const Users = ({ id }) => (
    <div>
        <h3>Users</h3>
    </div>
)

const Menu = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul>
            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
        </div>
    </Router>
)

ReactDOM.render(
    <div className="teste-class">
        <Menu />
    </div>,
    document.getElementById('app')
);