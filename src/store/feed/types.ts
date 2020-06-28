export interface FeedState {
    isFetching: boolean;
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
    videoUrl: string
}

export const REQUEST_FEEDS = "REQUEST_FEEDS";
export const RECEIVE_FEEDS = "RECEIVE_FEEDS";

interface RequestFeedsAction {
    type: typeof REQUEST_FEEDS;
}

interface ReceiveFeedsAction {
    type: typeof RECEIVE_FEEDS;
    data: Feed[]
}

export type FeedActionTypes = RequestFeedsAction | ReceiveFeedsAction; 