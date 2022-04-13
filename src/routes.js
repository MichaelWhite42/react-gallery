import { Route, Routes } from "react-router";
import { Home } from "./pages/home";
import { ImagePage } from "./pages/images";

export const RoutesComponent = () => {
    return (
        <Routes>
            <Route path={'/react-gallery'} element={(<Home />)}/>
            <Route path={'/react-gallery/:item'} element={(<ImagePage />)} />
        </Routes>
    )
}