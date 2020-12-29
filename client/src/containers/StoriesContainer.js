import React, {useEffect, useState, memo} from 'react';
import { getStoryIds } from "../services/hnApi";
import { Story } from "../components/Story";
import { GlobalStyle, StoriesContainerWrpper } from "../styles/StoriesContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export const StoriesContainer = () => {
    // For making the scrolling
    const { count } = useInfiniteScroll();

    const [storyIds, setStoryIds] = useState([]);


    useEffect(() => {
      getStoryIds().then(data => setStoryIds(data));
    }, []);
  
    return (
      <div className="App">
        <GlobalStyle />
          <StoriesContainerWrpper data-test-id="stories-container">
          <h1>Hacker News Stories</h1>
          {/* slice(0, count) for making the scrolling */}
          {storyIds.slice(0, count).map(storyId => (
            <Story key={storyId} storyId={storyId} />
          ))}
          </StoriesContainerWrpper>
      </div>
    );
}
