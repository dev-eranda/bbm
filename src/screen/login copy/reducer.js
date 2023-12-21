export default function  reducer(state={
    list:[],            
},action){
    switch(action.type){        
        case "STORE_CONTACTS":{
            return{...state,list:action.contacts}
        }
        case "SHOW_CONTACT":{
            return{...state,showContact:action.contactId}
        }
        case "LOADED_CONTACT":{
            return{...state,loadedContact:action.contact}
        }
        
    }
    return state;
}