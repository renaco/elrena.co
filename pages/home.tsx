import type { NextPage } from "next";
import styled from "styled-components";
import Card from "../components/card";

const VideoContent = styled.div`
  width: 100%;
  height: 100%;
  iframe {
    /* TODO: Need a invisible border */
    border: solid 1px;
    width: 100%;
    height: calc((100vw * 9) / 16);
  }
`;

const Divider = () => {
  return (
    <div className="custom-shape-divider-top-1669966286">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          className="shape-fill"
        ></path>
      </svg>
    </div>
  );
};

const HomePage: NextPage = () => {
  return (
    <VideoContent>
      <iframe
        src="https://www.youtube.com/embed/G9s87L0ZLgY?autoplay=1&amp;mute=1&amp;controls=0&amp;loop=1&amp;playlist=G9s87L0ZLgY&amp;enablejsapi=1&amp;showinfo=0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
      <Divider />
      <Card />
    </VideoContent>
  );
};

export default HomePage;
