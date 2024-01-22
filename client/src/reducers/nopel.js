export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return state
        case 'CREATE':
            return [...state, action.payload]
        case 'UPDATE':
            return state
        case 'DELETE':
            return state
        default:
            return state
    }
};