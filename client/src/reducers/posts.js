export default (posts = [], action) => {
    switch (action.type) {
        //here we hanlde the logic of fetching all posts
        case 'FETCH_ALL':  
            return action.payload;
            case 'CREATE':
                return posts;
        default:
            return posts;
    }
}