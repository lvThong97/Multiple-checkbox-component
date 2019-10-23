import { SHOW_DATA, SEARCH_DATA, RESET_DATA} from '../Actions/actionTypes';
const initialState = [  { name: 'Draft', check: true },
{ name: 'With_pickup', check: true },
{ name: 'Printed', check: true },
{ name: 'Cancelle', check: false },];
const Reducers = (state = initialState, action) =>{
    switch (action.type) {
        case SHOW_DATA:
            return ;
        case SEARCH_DATA:
            return ;
        case RESET_DATA:
            state = [...initialState];
            return state;
        default: 
            return state;
    }
}
export default Reducers;