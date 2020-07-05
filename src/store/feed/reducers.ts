import { FeedActionTypes, FeedState, LOVE_FEED, RECEIVE_FEEDS, REQUEST_FEEDS } from "./types";

const initialState: FeedState = {
    isFetching: false,
    activeFeedType: undefined,
    feeds: []
};

export const feedReducer = (state = initialState, action: FeedActionTypes): FeedState => {
    switch (action.type) {
        case REQUEST_FEEDS: {
            return {
                ...state,
                isFetching: true,
                activeFeedType: action.feedType
            };
        }
        case RECEIVE_FEEDS: {
            console.log("LOL");
            return {
                ...state,
                isFetching: false,
                feeds: action.data
            };
        }
        case LOVE_FEED: {
            return {
                ...state,
                feeds: action.data
            }
        }
        default:
            return state;
    }
}
