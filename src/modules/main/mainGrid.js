import axios from "axios";
import fileDownload from "js-file-download";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { openImage } from "../../store/actions/imageAction";

const MainGrid = () => {
    const items = useSelector(state => state.reducer.items);
    const activeItems = useSelector(state => state.imageReducer.activeImage);
    const dispatch = useDispatch();
    const data = [...items];

    const handleClick = (url, filename) => {
        axios.get(url, {
          responseType: 'blob',
        })
        .then((res) => {
          fileDownload(res, filename)
        })
    }
    
    return (
        <div className={`main__grid`}>
            <div className="main__grid__column">
                {data.map((item) => {
                    return (
                        <Fragment key={item.key}>
                            {item.grid === '1' ? (
                                <NavLink to={'/react-gallery/:item' + item.key} key={item.key} >
                                <div className={`${item.class}`} onClick={() => {dispatch(openImage(item.img)); console.log(openImage(item.key))}}>
                                    <div className={`${item.class} flex-box`}>
                                        <img src={item.img} />
                                    </div>
                                </div>
                                </NavLink>
                            ) : ''}
                        </Fragment>
                    )
                })}
            </div>
            <div className="main__grid__column">
                {data.map((item) => {
                    return (
                        <Fragment key={item.key}>
                            {item.grid === '2' ? (
                                <NavLink to={'/react-gallery/:item' + item.key} key={item.key}>
                                <div className={`${item.class}`} onClick={() => {dispatch(openImage(item.img))}}>
                                    <div className={`${item.class} flex-box`}>
                                        <img src={item.img} />
                                    </div>
                                </div>
                                </NavLink>
                            ) : ''}
                        </Fragment>
                    )
                })}
            </div>
            <div className="main__grid__column">
                {data.map((item) => {
                    return (
                        <Fragment key={item.key}>
                            {item.grid === '3' ? (
                                <NavLink to={'/react-gallery/:item' + item.key} key={item.key}>
                                <div className={`${item.class}`} onClick={() => {dispatch(openImage(item.img))}}>
                                    <div className={`${item.class} flex-box`}>
                                        <img src={item.img} />
                                    </div>
                                </div>
                                </NavLink>
                            ) : ''}
                        </Fragment>
                    )
                })}
            </div>
            <div className="main__grid__column">
                {data.map((item) => {
                    return (
                        <Fragment key={item.key}>
                            {item.grid === '4' ? (
                                <NavLink to={'/react-gallery/:item' + item.key} key={item.key}>
                                <div className={`${item.class}`} onClick={() => {dispatch(openImage(item.img))}}>
                                    <div className={`${item.class} flex-box`}>
                                        <img src={item.img} />
                                    </div>
                                </div>
                                </NavLink>
                            ) : ''}
                        </Fragment>
                    )
                })}
            </div>
            <div className="main__grid__column">
                {data.map((item) => {
                    return (
                        <Fragment key={item.key}>
                            {item.grid === '5' ? (
                                <NavLink to={'/react-gallery/:item' + item.key} key={item.key}>
                                <div className={`${item.class}`} onClick={() => {dispatch(openImage(item.img))}}>
                                    <div className={`${item.class} flex-box`}>
                                        <img src={item.img} />
                                    </div>
                                </div>
                                </NavLink>
                            ) : ''}
                        </Fragment>
                    )
                })}
            </div>
            <div className="main__grid__column">
                {data.map((item) => {
                    return (
                        <Fragment key={item.key}>
                            {item.grid === '6' ? (
                                <NavLink to={'/react-gallery/:item' + item.key} key={item.key}>
                                <div className={`${item.class}`} onClick={() => {dispatch(openImage(item.img))}}>
                                    <div className={`${item.class} flex-box`}>
                                        <img src={item.img} />
                                    </div>
                                </div>
                                </NavLink>
                            ) : ''}
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default MainGrid;