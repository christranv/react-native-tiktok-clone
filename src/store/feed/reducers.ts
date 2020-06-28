import { FeedActionTypes, FeedState, RECEIVE_FEEDS, REQUEST_FEEDS, Feed } from "./types";

const initialState: FeedState = {
    isFetching: false,
    feeds: []
};

export function feedReducer(
    state = initialState,
    action: FeedActionTypes
): FeedState {
    switch (action.type) {
        case REQUEST_FEEDS: {
            return {
                ...state,
                isFetching: true
            };
        }
        case RECEIVE_FEEDS: {
            return {
                ...state,
                isFetching: false,
                feeds: action.data
            };
        }
        default:
            return state;
    }
}
