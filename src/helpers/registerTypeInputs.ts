import { useEffect } from "react";
import { FormValues } from "../types/FormValues";
import { UseFormRegister, UseFormUnregister } from "react-hook-form";

export const registerTypeInputs = (
  watchType: "pizza" | "soup" | "sandwitch",
  register: UseFormRegister<FormValues>,
  unregister: UseFormUnregister<FormValues>
) => {
  useEffect(() => {
    if (watchType === "pizza") {
      register("no_of_slices");
      register("diameter");
    } else {
      unregister("no_of_slices");
      unregister("diameter");
    }
    if (watchType === "soup") {
      register("spiciness_scale");
    } else {
      unregister("spiciness_scale");
    }

    if (watchType === "sandwitch") {
      register("slices_of_bread");
    } else {
      unregister("slices_of_bread");
    }
  }, [register, unregister, watchType]);
};
