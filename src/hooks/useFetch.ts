import { useState } from "react";
import { FormValues } from "../types/FormValues";

export const useFetch = () => {
  const [sendMessage, setSendMessage] = useState("");
  const [isSendError, setIsSendError] = useState<boolean>(false);
  const [isSendSuccess, seIsSendSuccess] = useState<null | boolean>(null);
  const [isLoading, setIsLoading] = useState<null | boolean>(null);

  async function sendData(url: string, formData: FormValues) {
    setIsLoading(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    };

    try {
      const res = await fetch(url, requestOptions);
      const dataFetch = await res.json();
      console.log(dataFetch);
      setSendMessage("Data has been sent!");
      setIsSendError(false);
      seIsSendSuccess(true);
    } catch {
      setSendMessage("An error has occurred!");
      setIsSendError(true);
      seIsSendSuccess(false);
    } finally {
      setIsLoading(false);
    }
  }

  return { sendData, sendMessage, isSendError, isSendSuccess, isLoading };
};
