import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { openImage } from "../../store/actions/imageAction";

const Header = () => {
     const dispatch = useDispatch();
     const items = useSelector(state => state.imageReducer.activeImage);

    return (
        <div className="header">
            <div className="header__background">
                <img src="https://wallpaperaccess.com/full/130061.png" />
            </div>
            <NavLink to={'/react-gallery'}>
                <div className="header__logo" onClick={() => {dispatch(openImage(''))}}>
                    <div className="header__logo__image">
                        <div className="spinner"></div>
                    </div>
                    <div className="header__logo__title">
                        Brand.
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default Header;