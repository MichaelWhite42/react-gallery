import { getAllItems } from "../API/API"
import { INIT_ITEMS } from "./types"

export const getItems = () => {
    return (dispatch) => {
        getAllItems()
            .then((item) => {
                dispatch({
                    type: INIT_ITEMS,
                    payload: item
                })
            })
    }
}