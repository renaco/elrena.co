import type { NextPage } from "next";
import styled from "styled-components";
import Card from "../components/card";
import { useEffect } from "react";
import { Divider } from "../components/divider";
import ExperienceList from "../components/portfolio";
import Header from "../components/portfolio/Header";

const VideoContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  iframe {
    /* TODO: Need a invisible border */
    /* border: solid 1px; */
    width: 100%;
    height: calc((100vw * 9) / 16);
  }
`;

const HomePage: NextPage = () => {
  const videoId = "G9s87L0ZLgY";

  const loadFonts = () => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  };

  const loadStyles = () => {
    const style = document.createElement("style");
    style.innerHTML = `
      body {
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  };

  useEffect(() => {
    loadFonts();
    loadStyles();
  }, []);

  return (
    <>
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
      <Header />
      <ExperienceList />
    </>
  );
};

export default HomePage;
