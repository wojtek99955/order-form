import { useForm } from "react-hook-form";
import { ErrorMessage } from "../../assets/ErrorMessage";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormContainer,
  InputWrapper,
  InputContainer,
  Input,
  BottomSection,
  SendSuccess,
  SendError,
  SuccessIcon,
  ErrorIcon,
} from "./FormStyle";
import { schema } from "../../assets/formSchema";
import ConditionField from "./ConditionField";
import { FormValues } from "../../types/FormValues";
import { usePost } from "../../hooks/usePost";
import Loader from "../../assets/Loader";
import { registerTypeInputs } from "../../helpers/registerTypeInputs";

const Form = () => {
  const {
    register,
    handleSubmit,
    unregister,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const watchType = watch("type");

  registerTypeInputs(watchType, register, unregister);

  const { sendData, isSendError, isLoading, isSendSuccess, sendMessage } =
    usePost();

  const onSubmit = (data: FormValues) => {
    sendData(
      "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/",
      data
    );
    console.log(data);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <InputContainer>
            <label htmlFor="name">name</label>
            <InputWrapper>
              <Input {...register("name")} placeholder="dish name" id="name" />
              <ErrorMessage>{errors?.name?.message?.toString()}</ErrorMessage>
            </InputWrapper>
          </InputContainer>
          <InputContainer>
            <label htmlFor="preparation_time">preparation time</label>
            <InputWrapper>
              <Input
                {...register("preparation_time")}
                id="preparation_time"
                type="time"
                step="1"
              />
              <ErrorMessage>
                {errors?.preparation_time?.message?.toString()}
              </ErrorMessage>
            </InputWrapper>
          </InputContainer>
          <InputContainer>
            <label htmlFor="type">type</label>
            <InputWrapper>
              <select {...register("type")} id="type" data-testid="select">
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
                <option value="sandwitch">sandwitch</option>
              </select>
              {errors.type && <ErrorMessage>required</ErrorMessage>}
            </InputWrapper>
          </InputContainer>
          <ConditionField
            errors={errors}
            register={register}
            watchType={watchType}
          />
          <BottomSection>
            {isSendError && (
              <SendError>
                <ErrorIcon />
                {sendMessage}
              </SendError>
            )}
            {isSendSuccess && (
              <SendSuccess>
                <SuccessIcon />
                {sendMessage}
              </SendSuccess>
            )}
            <button type="submit">{isLoading ? <Loader /> : "Send"}</button>
          </BottomSection>
        </div>
      </form>
    </FormContainer>
  );
};

export default Form;
