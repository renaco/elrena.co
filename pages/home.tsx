import type { NextPage } from 'next'
import styled from 'styled-components'

const VideoContent = styled.div`
  width: 100%;
  height: 100%;
  iframe {
    width: 100%;
    height: calc((100vw*9)/16);
  }
`

const HomePage: NextPage = () => {
  return (
    <VideoContent>
      <iframe src='https://www.youtube.com/embed/G9s87L0ZLgY?autoplay=1&mute=1&controls=0&loop=1&player=""'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
      />
    </VideoContent>
  )
}

export default HomePage