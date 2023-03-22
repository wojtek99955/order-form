import styled from "styled-components";

const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 4px solid;
    border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25)
      rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <span></span>
    </LoaderContainer>
  );
};

export default Loader;
