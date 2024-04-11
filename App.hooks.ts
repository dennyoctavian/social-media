import {useEffect, useState} from 'react';
import {userStories} from './src/data/static/users_stories';
import {userPosts} from './src/data/static/users_posts';

export const useApp = () => {
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState<
    Array<any>
  >([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState<
    Array<any>
  >([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (
    database: Array<any>,
    currentPage: number,
    pageSize: number,
  ) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPost = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPost);
    setIsLoadingUserPosts(false);
  }, []);

  function loadMoreStory() {
    if (isLoadingUserStories) {
      return;
    }
    setIsLoadingUserStories(true);
    const newPage = userStoriesCurrentPage + 1;
    const newData = pagination(userStories, newPage, userStoriesPageSize);
    setUserStoriesCurrentPage(newPage);
    setUserStoriesRenderedData([...userStoriesRenderedData, ...newData]);
    setIsLoadingUserStories(false);
  }

  function loadMorePost() {
    if (isLoadingUserPosts) {
      return;
    }
    setIsLoadingUserPosts(true);
    const newPage = userPostsCurrentPage + 1;
    const newData = pagination(userPosts, newPage, userPostsPageSize);
    setUserPostsCurrentPage(newPage);
    setUserPostsRenderedData([...userPostsRenderedData, ...newData]);
    setIsLoadingUserPosts(false);
  }

  return {
    userStoriesRenderedData,
    userPostsRenderedData,
    loadMoreStory,
    loadMorePost,
  };
};
