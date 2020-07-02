export interface FeedState {
    isFetching: boolean;
    activeFeedType: feedTypes;
    feeds: Feed[];
}

export interface Feed {
    id: number,
    accountName: string,
    accountAvatar: string,
    caption: string,
    song: string,
    like: number,
    comment: number,
    share: number
    videoUrl: string
}

export const FOLLOWING_FEEDS = "following_feeds";
export const RECOMMEND_FEEDS = "recommend_feeds";
export type feedTypes = typeof FOLLOWING_FEEDS | typeof RECOMMEND_FEEDS | undefined;

export const REQUEST_FEEDS = "REQUEST_FEEDS";
export const RECEIVE_FEEDS = "RECEIVE_FEEDS";

interface RequestFeedsAction {
    type: typeof REQUEST_FEEDS;
    feedType: feedTypes
}
interface ReceiveFeedsAction {
    type: typeof RECEIVE_FEEDS;
    data: Feed[]
}

export type FeedActionTypes = RequestFeedsAction | ReceiveFeedsAction; 