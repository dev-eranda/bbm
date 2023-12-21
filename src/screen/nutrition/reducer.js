// export default function  reducer(state={
//     menustate:false,
//     checkin:false  

// },action){
//     switch(action.type){        
//         case "MENU_TOGGLE": {
//             return { ...state, menustate: action.row }
//             }

//     }
//     return state;
// }
export default function reducer(state = {

    menustate: false


}, action) {

    switch (action.type) {



        case "MENU_TOGGLE": {
            return { ...state, menustate: action.row }
        }



        default:
            break
    }
    return state
}