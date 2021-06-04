import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import commentImage from "assets/images/home/image14.png";

import likeSvg from "assets/images/home/like.svg";
import heartSvg from "assets/images/home/heart.svg";
import joySvg from "assets/images/home/joy.svg";
import wowSvg from "assets/images/home/wow.svg";
import angrySvg from "assets/images/home/angry.svg";

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const CommentNumberImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;
  margin-bottom: 4px;

  & img {
    min-width: 50px;
    height: 22px;
    cursor: pointer;
  }
  & p {
    padding-top: 2px;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #36558f;
    margin-left: 6px;
    margin-bottom: 0px;
  }
`;

export const CommentImageArea = styled.div`
  position: relative;
`;

export const CommentText = styled.div`
  text-align: right;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #7a8698;
`;

type StyledNoneActiveProps = {
  hide: boolean;
};

export const CommentReactionContainer = styled.div<StyledNoneActiveProps>`
  padding: 12px 10px;
  background: #ffffff;

  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  position: absolute;
  z-index: 110;
  top: 28px;
  right: -10px;
  margin-left: -60px;

  display: ${({ hide }) => (hide ? "block" : "none")};

  &::after {
    content: "";
    position: absolute;
    bottom: 100%;
    right: 32px;
    margin-left: -7px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }

  & ul {
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & li {
      margin-left: 8px;
    }
  }
`;

export const EmotionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & img {
    min-width: 30px;
    height: 34px;
    margin-bottom: 4px;
  }
  & p {
    font-weight: 500;
    color: #434343;
    margin-bottom: 4px;
  }
  & span {
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    text-align: center;
    color: #434343;
  }
`;

const Emotion = ({ src, title, number }) => {
  return (
    <EmotionContainer>
      <img src={src}></img>
      <p>{title}</p>
      <span>{number}</span>
    </EmotionContainer>
  );
};

const Reaction = ({ comments }) => {
  const [hide, setHide] = useState(false);
  return (
    <CommentImageArea>
      <CommentNumberImage>
        <img
          src={commentImage}
          onMouseEnter={() => setHide(!hide)}
          onMouseLeave={() => setHide(!hide)}
        />
        <p>{comments}</p>
      </CommentNumberImage>
      <CommentText>Comments {comments}</CommentText>
      <CommentReactionContainer hide={hide}>
        <ul>
          <li>
            <Emotion src={likeSvg} title="like" number={200}></Emotion>
          </li>
          <li>
            <Emotion src={heartSvg} title="Love" number={170}></Emotion>
          </li>
          <li>
            <Emotion src={joySvg} title="joy" number={2}></Emotion>
          </li>
          <li>
            <Emotion src={wowSvg} title="wow" number={65}></Emotion>
          </li>
          <li>
            <Emotion src={angrySvg} title="angry" number={0}></Emotion>
          </li>
        </ul>
      </CommentReactionContainer>
    </CommentImageArea>
  );
};

export default Reaction;
