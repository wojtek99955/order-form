import styled from "styled-components";
import { BsSendCheck } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";

export const FormContainer = styled.main`
  background-color: white;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 2rem;
  overflow: hidden;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  label {
    color: #2f4858;
  }

  select {
    display: block;
    background-color: #f5f8f9;
    border: 2px solid #f5f8f9;
    font-size: 1rem;
    padding: 0.5rem;
    width: 15rem;
    border-radius: 6px;
    outline: none;
    color: #2f4858;
    &:focus {
      border: 2px solid #d9e5e8;
    }
  }

  button {
    border: none;
    border-radius: 12px;
    padding: 0.8rem 2.6rem;
    background-color: #24af6b;
    font-size: 1rem;
    color: white;
    margin-left: auto;
    display: block;
    cursor: pointer;
    position: relative;
    min-width: 8rem;
    min-height: 3rem;
    &:hover {
      background-color: #209d60;
    }
    &:active {
      background-color: #1d8c56;
      top: 0.1rem;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.2rem;
  gap: 2rem;
`;

export const Input = styled.input`
  background-color: #f5f8f9;
  border: 2px solid #f5f8f9;
  border-radius: 6px;
  padding: 0.5rem;
  font-size: 1rem;
  width: 15rem;
  outline: none;
  color: #2f4858;

  &:focus {
    border: 2px solid #d9e5e8;
  }

  ::placeholder {
    color: #dde8ea;
    opacity: 1;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SendSuccess = styled.div`
  color: #24af6b;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const SendError = styled.div`
  color: #ff6152;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SuccessIcon = styled(BsSendCheck)`
  color: #24af6b;
  font-size: 1.5rem;
`;

export const ErrorIcon = styled(BiErrorCircle)`
  color: #ff6152;
  font-size: 1.5rem;
`;
