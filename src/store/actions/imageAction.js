import { OPEN_ITEM } from "../types";

export const openImage = (image) => ({
    type: OPEN_ITEM,
    payload: image
})