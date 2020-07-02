import { Dispatch } from "react";
import firebase from "../../firebase";
import 'firebase/firestore';
import { Feed, REQUEST_FEEDS, RECEIVE_FEEDS, FeedActionTypes, feedTypes } from "./types";
import { store } from "..";

function requestFeeds(feedType: feedTypes): FeedActionTypes {
  return {
    type: REQUEST_FEEDS,
    feedType: feedType
  };
}

function receiveFeeds(feeds: Feed[]): FeedActionTypes {
  return {
    type: RECEIVE_FEEDS,
    data: feeds
  };
}

export function fetchFeeds(feedType:feedTypes) {
  return (dispatch: Dispatch<FeedActionTypes>) => {
    if(store.getState().feed.activeFeedType==feedType) return;
    dispatch(requestFeeds(feedType));
    firebase.firestore().collection(feedType).get().then((doc: any) => {
      let feeds: Feed[] = [];
      doc.forEach((doc: any) => {
        let feed: Feed = <Feed>doc.data();
        feed.id = doc.id;
        feeds.push(feed);
      });
      dispatch(receiveFeeds(feeds));
    });
  }
};
