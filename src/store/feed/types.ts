export interface FeedState {
    feeds: Array<Feed>;
}

export interface Feed {
    accountName: String,
    caption: String,
    song: String, 
    like: String,
    comment: number,
    share: number
}

export const ADD_FEED = "ADD_FEED";
export const REMOVE_FEED = "REMOVE_FEED";

interface AddFeedAction {
    type: typeof ADD_FEED;
    payload: Feed;
}

interface RemoveFeedAction {
    type: typeof REMOVE_FEED;
}

export type FeedActionTypes = AddFeedAction | RemoveFeedAction; 