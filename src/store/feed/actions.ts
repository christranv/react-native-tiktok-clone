import { Feed, ADD_FEED, REMOVE_FEED } from "./types";

export function addFeed(feed: Feed) {
  return {
    type: ADD_FEED,
    payload: feed
  };
}