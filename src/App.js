import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./Components/Shared/ScrollToTop";
import Home from "./Components/Index";
import SignUp from "./Components/SignUp";
import SignupConfirm from './Components/Auth/SignupConfirm';
import EmailVerification from "./Components/Auth/emailVerification";
import Dashboard from "./Components/Dashboard/Index";
import './App.css';

function App() {
    return (
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signup-confirm" component={SignupConfirm} />
                    <Route path="/activate/:email_hash/:hash_string" component={EmailVerification} />
                    <Route path="/user" component={Dashboard} />
                </Switch>
            </ScrollToTop>
        </Router>
    );
}

export default App;
