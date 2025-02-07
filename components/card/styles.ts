import styled from "styled-components";

export const CardStyle = styled.aside`
  display: grid;
  padding: 15px;
  gap: 5px;
  position: absolute;
  color: #fff;
  background-color: #ff2224;
  top: 50%;
  width: 320px;
  left: 50%;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  p {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 0 10px;
  }

  h1 {
    font-weight: 900;
    font-size: 4.5rem;
  }

  i {
    display: block;
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 30px solid #fff;
    margin: 0 auto -2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    top: -10px;
    left: 0;
  }
`;
