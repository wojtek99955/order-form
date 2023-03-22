import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffd500;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  h1 {
    color: #2f4858;
    font-size: 2rem;
  }
`;

export const SvgContainer = styled.div`
  max-width: 200px;
`;
