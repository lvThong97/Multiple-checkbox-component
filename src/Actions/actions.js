import { types } from "@babel/core"


export const showData = ()=> {
    type: types.SHOW_DATA
}
export const searchData = ()=> {
    type: types.SEARCH_DATA
}
export const resetData = () => {
    type: types.RESET_DATA
}