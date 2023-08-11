import { createStore } from "redux";
const initialState = {
    reviewList : []
};
const reviewReducer = (state = initialState, action) => {
    if (action.type === 'create')
    {
        const newReview = {
            title: action.item.title,
            content: action.item.content,
            id:'',
        }
        return {
            reviewList: [
                ...state.reviewList , newReview
            ],
        }
    }
    return state;
}
export default reviewReducer;
