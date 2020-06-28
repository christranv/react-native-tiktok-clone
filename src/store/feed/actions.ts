import { Dispatch } from "react";
import firebase from "../../firebase";
import 'firebase/firestore';
import { Feed, REQUEST_FEEDS, RECEIVE_FEEDS, FeedActionTypes } from "./types";

function requestFeeds(): FeedActionTypes {
  return {
    type: REQUEST_FEEDS,
  };
}

function receiveFeeds(feeds: Feed[]): FeedActionTypes {
  return {
    type: RECEIVE_FEEDS,
    data: feeds
  };
}

export function fetchFeeds() {
  return (dispatch: Dispatch<FeedActionTypes>) => {
    dispatch(requestFeeds());
    firebase.firestore().collection('following_feeds').get().then((doc: any) => {
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
