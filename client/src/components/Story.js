import React, { useState, useEffect } from 'react'
import { getStory } from "../services/hnApi";
import { mapTime } from "../mappers/mapTime";

// Importing Style Component from styles folder
import { StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement } from "../styles/StoryStyles";


export const Story = ({ storyId }) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);


    return story && story.url ? (
        <>
        <StoryWrapper data-testid="story">
            <StoryTitle>
                <a href={story.url}>
                    {story.title}
                </a>
            </StoryTitle>
            
            {/* {story.title ? 
            <a href="JJLKJ">hkjhk</a>
            : "ds" } */}

            <StoryMeta>
                <span className="story__by" data-testid="story__by">
                    <StoryMetaElement color="#000">By: </StoryMetaElement> {story.by}
                </span>
                <span className="story__time" data-testid="story__time">
                    <StoryMetaElement color="#000">Posted: </StoryMetaElement> {` `}
                    {mapTime(story.time)}
                </span>
            </StoryMeta>
        </StoryWrapper>

        </>
    ) : null;
}
