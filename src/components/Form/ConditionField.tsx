import { InputContainer, InputWrapper, Input } from "./FormStyle";
import { ErrorMessage } from "../../assets/ErrorMessage";
import { FormValues } from "../../types/FormValues";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
  errors: FieldErrors<FormValues>;
  register: UseFormRegister<FormValues>;
  watchType: "pizza" | "soup" | "sandwitch";
}
const ConditionField = ({ errors, register, watchType }: Props) => {
  let content;

  if (watchType === "pizza") {
    content = (
      <>
        <InputContainer>
          <label htmlFor="no_of_slices">number of slices</label>
          <InputWrapper>
            <Input
              {...register("no_of_slices")}
              id="no_of_slices"
              placeholder="number of slices"
              type="number"
            />
            <ErrorMessage>
              {errors?.no_of_slices?.message?.toString()}
            </ErrorMessage>
          </InputWrapper>
        </InputContainer>
        <InputContainer>
          <label htmlFor="diameter">diameter</label>
          <InputWrapper>
            <Input
              {...register("diameter")}
              id="diameter"
              placeholder="diameter"
              step="0.01"
              type="number"
            />
            <ErrorMessage>{errors?.diameter?.message?.toString()}</ErrorMessage>
          </InputWrapper>
        </InputContainer>
      </>
    );
  }

  if (watchType === "soup") {
    content = (
      <InputContainer>
        <label htmlFor="spiciness_scale">spiciness scale</label>
        <InputWrapper>
          <Input
            {...register("spiciness_scale")}
            placeholder="spiciness scale"
            id="spiciness_scale"
            type="number"
          />
          <ErrorMessage>
            {errors?.spiciness_scale?.message?.toString()}
          </ErrorMessage>
        </InputWrapper>
      </InputContainer>
    );
  }

  if (watchType === "sandwitch") {
    content = (
      <InputContainer>
        <label htmlFor="slices_of_bread">slices of bread</label>
        <InputWrapper>
          <Input
            {...register("slices_of_bread", {})}
            placeholder="slices of bread"
            id="slices_of_bread"
            type="number"
          />
          <ErrorMessage>
            {errors?.slices_of_bread?.message?.toString()}
          </ErrorMessage>
        </InputWrapper>
      </InputContainer>
    );
  }
  return <>{content}</>;
};

export default ConditionField;
