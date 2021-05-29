import React from "react";
import {
  VideoSectionArea,
  WavyDiv,
  VideoInner,
  InnerimgDiv,
  InnerTxt,
  CircleMonsterSm,
} from "site-settings/site-style/home/video-section.style";
import { WaveLine } from "assets/icons/WayLine";
import VedioImage from "assets/images/home/video.jpg";
import Container from "components/Container/container";
import Video from "components/Video/video";
export default function SplitChekSection() {
  return (
    <VideoSectionArea>
      <Container>
        <WavyDiv>
          <WaveLine />
        </WavyDiv>
        <VideoInner>
          <InnerTxt>
            <h2 className="title">Find the right gift in just a few clicks</h2>
            <p>
              Discover how easy it is to use SplitChek to find and buy the
              perfect gift for your loved ones in the video below.
            </p>
          </InnerTxt>
          <InnerimgDiv>
            <Video
              src="https://vimeo.com/459184049"
              image={VedioImage}
              title="vedio-image"
            />
            {/* <video
              style={{ width: "100%", height: "100%", borderRadius: "60px" }}
              src={
                "https://cms-cdn.goat.com/1cb29574411a-8498-be11-b8ab-0056f3fa.mp4"
              }
            ></video> */}
          </InnerimgDiv>
        </VideoInner>
        <CircleMonsterSm className="circle" />
      </Container>
    </VideoSectionArea>
  );
}
