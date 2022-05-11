import { faFacebookF, faInstagram, faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

export const ImagePage = () => {
    const items = useSelector(state => state.reducer.items);
    const data = [...items];

    return (
        <div>
            Test
        </div>
    )
}