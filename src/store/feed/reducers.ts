import { ADD_FEED, REMOVE_FEED, FeedState, FeedActionTypes } from "./types";

const initialState: FeedState = {
    feeds: [
        {
            id: 123,
            accountName: "msquynhthie",
            caption: "This this caption this this caption this this caption This this caption this this caption this this caption",
            song: "Play Date - Melanie Martine",
            like: 250.4,
            comment: 1191,
            share: 2976,
            videoSource: require('../../assets/sample_videos/video1.mp4')
        },
        {
            id: 2233,
            accountName: "kingbach",
            caption: "Nigga whatcha!!!!!!!",
            song: "Banana - Conkarah (feat. Shaggy)",
            like: 500.4,
            comment: 5665,
            share: 3211,
            videoSource: require('../../assets/sample_videos/video2.mp4')
        },
        {
            id: 312323,
            accountName: "anwar",
            caption: "",
            song: "Banana - Conkarah (feat. Shaggy)",
            like: 1,
            comment: 1,
            share: 1,
            videoSource: require('../../assets/sample_videos/video1.mp4')
        }
    ]
};

export function feedReducer(
    state = initialState,
    action: FeedActionTypes
): FeedState {
    switch (action.type) {
        case ADD_FEED: {
            return {
                ...state,
                feeds: [...state.feeds, action.payload]
            };
        }
        case REMOVE_FEED: {
            return {
                ...state,
                feeds: []
            };
        }
        default:
            return state;
    }
}
