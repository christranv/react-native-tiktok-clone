import 'firebase/firestore';
import { Dispatch } from "react";
import { store } from "..";
import firebase from "../../firebase";
import { Feed, FeedActionTypes, FeedTypes, LOVE_FEED, RECEIVE_FEEDS, REQUEST_FEEDS } from "./types";

const requestFeeds = (feedType: FeedTypes): FeedActionTypes => ({
  type: REQUEST_FEEDS,
  feedType: feedType
});

const receiveFeeds = (feeds: Feed[]): FeedActionTypes => ({
  type: RECEIVE_FEEDS,
  data: feeds
});

export const fetchFeeds = (feedType: FeedTypes) =>
  (dispatch: Dispatch<FeedActionTypes>) => {
    if (store.getState().feed.activeFeedType == feedType) return;
    dispatch(requestFeeds(feedType));
    firebase.firestore().collection(<string>feedType).get().then((doc: any) => {
      let feeds: Feed[] = [];
      doc.forEach((doc: any) => {
        let feed: Feed = <Feed>doc.data();
        feed.id = doc.id;
        feeds.push(feed);
      });
      dispatch(receiveFeeds(feeds));
    });
  };

export const loveFeed = (feedId: string): FeedActionTypes => {
  let feeds: Feed[] = store.getState().feed.feeds.slice();
  let index = feeds.findIndex(feed => feed.id == feedId);
  feeds[index].isLoved = !feeds[index].isLoved;
  return {
    type: LOVE_FEED,
    data: feeds
  }
}