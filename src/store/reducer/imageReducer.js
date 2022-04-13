import { OPEN_ITEM } from "../types";

const defaultState = {
    activeImage: ''
};

export const imageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case OPEN_ITEM:
            return {...state, activeImage: action.payload}
        default:
            return {
                ...state
            }
    }
}