import { faFacebookF, faInstagram, faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainGrid from "./mainGrid";

const Main = () => {
    return (
        <div className={`main`}>
            <div className="main__background">
                <img src="https://dnepr.info/wp-content/uploads/2020/03/les.jpg" />
                <img src="https://wallpaperaccess.com/full/1687008.jpg" />
            </div>
            <div className="main__action-box">
                <div className="main__action-box__title">
                    Brand.Gallery
                </div>
                <div className="main__action-box__share-links">
                    <div className="share-links__title">
                        Share links
                    </div>
                    <div className="share-links__sub-title">
                        Send your jobs here:
                    </div>
                    <div className="share-links__icons">
                        <div className="vk-box icon-box">
                            <FontAwesomeIcon icon={faVk} />
                        </div>
                        <div className="facebook-box icon-box">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                        <div className="instagram-box icon-box">
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <div className="telegram-box icon-box">
                            <FontAwesomeIcon icon={faTelegram} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;