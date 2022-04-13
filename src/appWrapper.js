import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getItems } from "./store/thunk";
import Header from './modules/header/header';
import { BrowserRouter as Router } from "react-router-dom";
import { RoutesComponent } from "./routes";

const AppWrapper = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getItems())
    }, []);

    return (
        <div className="App">
            <Router>
                <Header />
                <RoutesComponent />
            </Router>
        </div>
    )
}

export default AppWrapper;