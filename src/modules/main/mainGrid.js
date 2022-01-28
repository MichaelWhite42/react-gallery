import { Fragment } from "react";
import { useSelector } from "react-redux"

const MainGrid = () => {
    const items = useSelector(state => state.reducer.items);
    const data = [...items];
    return (
        <div className="main__grid">
            <div className="main__grid__column">
                {data.map((item) => {
                    return (
                        <Fragment key={item.key}>
                            {item.grid === '1' ? (<div className={item.class}><img src={item.img} /></div>) : ''}
                        </Fragment>
                    )
                })}
            </div>
            <div className="main__grid__column">
                {data.map((item) => {
                    return (
                        <Fragment key={item.key}>
                            {item.grid === '2' ? (<div className={item.class}><img src={item.img} /></div>) : ''}
                        </Fragment>
                    )
                })}
            </div>
            <div className="main__grid__column">
                {data.map((item) => {
                    return (
                        <Fragment key={item.key}>
                            {item.grid === '3' ? (<div className={item.class}><img src={item.img} /></div>) : ''}
                        </Fragment>
                    )
                })}
            </div>
            <div className="main__grid__column">
                {data.map((item) => {
                    return (
                        <Fragment key={item.key}>
                            {item.grid === '4' ? (<div className={item.class}><img src={item.img} /></div>) : ''}
                        </Fragment>
                    )
                })}
            </div>
            <div className="main__grid__column">
                {data.map((item) => {
                    return (
                        <Fragment key={item.key}>
                            {item.grid === '5' ? (<div className={item.class}><img src={item.img} /></div>) : ''}
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default MainGrid;