import { FeedActionTypes, FeedState, RECEIVE_FEEDS, REQUEST_FEEDS } from "./types";

const initialState: FeedState = {
    isFetching: false,
    activeFeedType: undefined,
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
                isFetching: true,
                activeFeedType: action.feedType
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
