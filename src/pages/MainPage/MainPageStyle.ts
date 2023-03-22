import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 16px;
`;
