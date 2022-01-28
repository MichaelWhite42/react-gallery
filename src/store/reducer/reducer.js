import { INIT_ITEMS } from "../types"

const initialState = {
    items: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_ITEMS:
            const items = action.payload;
            return items
        default:
            return {
                ...state
            }
    }
}