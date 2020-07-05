export interface FeedState {
    isFetching: boolean;
    activeFeedType: FeedTypes;
    feeds: Feed[];
}

export interface Feed {
    id: string,
    accountName: string,
    accountAvatar: string,
    videoUrl: string
    caption: string,
    song: string,
    love: number,
    comment: number,
    share: number
    isLoved: boolean
}

// FeedTypes
export const FOLLOWING_FEEDS = "following_feeds";
export const RECOMMEND_FEEDS = "recommend_feeds";
export type FeedTypes = typeof FOLLOWING_FEEDS | typeof RECOMMEND_FEEDS | typeof undefined;

// Action love
export const LOVE_FEED = "LOVE_FEED";

export const REQUEST_FEEDS = "REQUEST_FEEDS";
export const RECEIVE_FEEDS = "RECEIVE_FEEDS";

interface RequestFeedsAction {
    type: typeof REQUEST_FEEDS;
    feedType: FeedTypes
}
interface ReceiveFeedsAction {
    type: typeof RECEIVE_FEEDS;
    data: Feed[]
}
interface LoveFeedAction {
    type: typeof LOVE_FEED;
    data: Feed[]
}

export type FeedActionTypes = RequestFeedsAction | ReceiveFeedsAction | LoveFeedAction; 