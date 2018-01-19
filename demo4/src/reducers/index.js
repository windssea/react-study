export default(state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log(action.payload.staff.name);
            return state + 1;
        case 'DECREMENT':
            console.log(action.payload.staff.name);
            return state - 1;
        default:
            return state;
    }
};
