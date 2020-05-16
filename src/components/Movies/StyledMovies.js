import family from "../../assets/SVG/family.svg";
import camera from "../../assets/SVG/video-camera.svg";

import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 0 5rem;

  @media (max-width: 55em) {
    padding: 0 1.5rem;
  }
`;

export const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  min-height: 90vh;
  margin: 0 auto;
  background-color: rgba(245, 246, 250, 1);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
`;

export const Card = styled.div`
  perspective: 120rem;
  position: relative;
  width: 21%;
  height: calc(22vw / 3 * 4);
  margin: 2%;
  text-align: center;

  @media (max-width: 48em) {
    width: 42%;
    height: calc(43vw / 3 * 4);
    margin: 4%;
  }

  & > div {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 3px;
    backface-visibility: hidden;
    transition: all 0.8s ease;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
  }

  &:hover .front {
    transform: rotateY(-180deg);
  }

  &:hover .back,
  &:hover .wrapper {
    transform: rotateY(0);
  }

  .front {
    background-image: ${(props) =>
      `linear-gradient(170deg, rgba(53, 59, 72, 0.98) 0%, rgba(53, 59, 72, 0.98) 8%, transparent 23%), url(http://image.tmdb.org/t/p/w200/${props.res.poster_path})`};
    background-size: cover;
    transform: rotateY(0);
  }

  .ratingFront {
    color: white;
    font-size: calc(2.5vw);

    @media (max-width: 48em) {
      font-size: calc(5vw);
    }
    font-weight: 400;
    position: absolute;
    left: 2%;
    opacity: 0.4;
  }

  .movieTittle {
    color: black;
    font-size: calc(2.5vw);

    @media (max-width: 48em) {
      font-size: calc(5vw);
    }

    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .noPoster {
    text-align: center;
    font-size: calc(0.8vw);

    @media (max-width: 48em) {
      font-size: calc(1.6vw);
    }
    font-weight: 400;
  }

  .back {
    color: #fff;
    background-image: linear-gradient(
      to right bottom,
      rgba(0, 151, 230, 1),
      rgba(220, 221, 225, 1)
    );
    transform: rotateY(180deg);
    overflow: hidden;

    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      bottom: -0.7rem;
      left: 0.2rem;
      background-image: url(${camera});
      background-size: cover;
      width: 6rem;
      height: 6rem;
      z-index: 15;
      opacity: 0.25;

      @supports (mask-size: cover) {
        background-color: #f5f6fa;
        mask-image: url(${camera});
        mask-size: cover;
        background-image: none;
      }
    }

    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      right: 0.2rem;
      background-image: url(${family});
      background-size: cover;
      width: 2.7rem;
      height: 2.7rem;
      z-index: 25;

      @supports (mask-size: cover) {
        background-color: #f5f6fa;
        mask-image: url(${family});
        mask-size: cover;
        background-image: none;
      }
    }

    .title {
      font-size: 2.3rem;

      @media (max-width: 48em) {
        font-size: 4rem;
        line-height: 3.85rem;
        height: 19rem;
      }

      font-family: "Lato";
      padding: 3rem 1rem 0 1rem;
      font-weight: 400;
      letter-spacing: 2px;
      line-height: 1.95rem;
      height: 9rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      &::after {
        content: "";
        display: inline-block;
        position: absolute;
        top: -1rem;
        right: -1rem;
        background-color: #fcd057;
        background-size: cover;
        width: 7.1rem;
        height: 7.1rem;
        clip-path: polygon(100% 0, 0 0, 100% 100%);
      }
    }

    .rating {
      font-size: calc(5vw);

      @media (max-width: 48em) {
        font-size: calc(10vw);
      }
      font-weight: 400;
    }

    .voteCount {
      font-size: calc(0.9vw);

      @media (max-width: 48em) {
        font-size: calc(1.8w);
      }
      letter-spacing: 2px;
      font-weight: 300;
    }

    .language {
      position: absolute;
      left: -15%;
      margin-top: 2.4rem;
      text-transform: uppercase;
      position: relative;
      font-size: calc(1.3vw);

      @media (max-width: 48em) {
        font-size: calc(2.6vw);
      }
    }

    .releaseDate {
      position: absolute;
      display: inline-block;
      left: 19%;
      margin-top: 2.4rem;
      text-transform: uppercase;
      position: relative;
      font-size: calc(1.3vw);

      @media (max-width: 48em) {
        font-size: calc(2.6vw);
      }
    }

    .fontawasomeIcons {
      margin-right: 0.5rem;
    }

    .btn {
      position: absolute;
      left: 34%;
      bottom: 8%;
      padding: 0.9rem 1.6rem;
      border-radius: 0.2rem;
      transition: all 0.2s;
      border: none;
      color: inherit;
      background-color: #192a56;
      letter-spacing: 2px;
      cursor: pointer;
      backface-visibility: hidden;

      .btnText {
        font-size: calc(1.3vw);

        @media (max-width: 48em) {
          font-size: calc(2.6vw);
        }
        font-family: "Lato", sans-serif;
        font-weight: 300;
        display: inline-block;
      }

      &::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        position: absolute;
        background-color: #192a56;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
        transition: all 0.4s;
      }

      &:hover {
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);

        &::after {
          transform: translateX(-50%) scaleX(1.2) scaleY(1.3);
          opacity: 0;
        }
      }

      &:active,
      &:focus {
        outline: none;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

export const PaginationDiv = styled.div`
  width: 100%;
  margin-top: auto;
  margin-bottom: 2rem;
  padding-top: 1.5rem;

  & > nav > ul {
    width: fit-content;
    margin: 0 auto;
  }

  & > nav > ul > li > button {
    color: black;
    font-size: calc(1.4vw);

    @media (max-width: 48em) {
      font-size: calc(2.8vw);
    }
    font-weight: 300;
    &:hover {
      background-color: rgba(47, 54, 64, 0.9);
      color: white;
    }
  }

  & > nav > ul > li > .Mui-selected {
    color: white;
    background-color: rgba(47, 54, 64, 0.9);

    &:hover {
      background-color: rgba(47, 54, 64, 0.9);
      color: white;
    }
  }
`;

export default StyledContainer;
