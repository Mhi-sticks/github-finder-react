const githubReducer = (state, action) => {
    switch(action.type) {
        case 'GET_USERS':
        return {
            ...state,
            users: action.payload ,
            loading:false
        }
        case 'GET_USER_AND_REPOS':
        return {
            ...state,
            user: action.payload.user,
            repos: action.payload.repos,
            loading:false
        }
         case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
         case 'CLEAR_USERS':
            return {
                ...state,
                users: []
            }
            case 'LOAD_TRUE': 
            return {
                ...state,
                loading: true
            }
        case 'LOAD_FALSE': 
            return {
                ...state,
                loading: false
            }
        case 'CLEAR': 
            return {
                ...state,
                loading: false,
                users: [],
            }

        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case 'GET_REPOS':
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
            
        default:
            return state
    }
}

export default githubReducer