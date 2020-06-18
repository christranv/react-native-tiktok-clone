import { ADD_FEED, REMOVE_FEED, FeedState, FeedActionTypes } from "./types";

const initialState: FeedState = {
    feeds: new Array(
        {
            id: 1,
            accountName: "msquynhthie",
            caption: "This this caption this this caption this this caption",
            song: "Play Date - Melanie Martine",
            like: "250.4",
            comment: 1191,
            share: 2976
        },
        {
            id: 2,
            accountName: "kingbach",
            caption: "Nigga whatcha!!!!!!!",
            song: "Banana - Conkarah (feat. Shaggy)",
            like: "500.4",
            comment: 5665,
            share: 3211
        }
    ),
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
            console.log("OKkkkkk");
            return state;
    }
}
