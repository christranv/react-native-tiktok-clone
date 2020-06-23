export interface FeedState {
    feeds: Feed[];
}

export interface Feed {
    id: number,
    accountName: string,
    caption: string,
    song: string,
    like: number,
    comment: number,
    share: number
    videoSource: any
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