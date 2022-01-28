import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getItems } from "./store/thunk";
import Header from './modules/header/header';
import Main from './modules/main/main';
import MainGrid from "./modules/main/mainGrid";

const AppWrapper = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getItems())
    }, []);

    return (
        <div className="App">
            <Header />
            <Main />
        </div>
    )
}

export default AppWrapper;