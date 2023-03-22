import * as yup from "yup";

export const schema = yup
  .object({
    name: yup
      .string()
      .transform((value, originalValue) => {
        return originalValue === "" ? undefined : value;
      })
      .min(3, "3 characters minimum")
      .matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        "only Latin letters allowed"
      )
      .required("required"),
    preparation_time: yup
      .string()
      .required("required")
      .transform((value, originalValue) => {
        return originalValue === "" ? undefined : value;
      })
      .matches(/^\d+:\d{2}:\d{2}$/, "invalid time format"),
    type: yup.string().required("required"),
    diameter: yup
      .number()
      .transform((value, originalValue) => {
        return originalValue === "" ? undefined : value;
      })
      .when("type", {
        is: "pizza",
        then: (schema) => schema.required("required").typeError("only numbers"),
      }),
    no_of_slices: yup
      .number()
      .transform((value, originalValue) => {
        return originalValue === "" ? undefined : value;
      })
      .min(1, "1 is a minimum value")
      .when("type", {
        is: "pizza",
        then: (schema) => schema.required("required").typeError("only numbers"),
      }),
    spiciness_scale: yup
      .number()
      .transform((value, originalValue) => {
        return originalValue === "" ? undefined : value;
      })
      .min(1, "1 is a minimum value")
      .max(10, "10 is a maximum value")
      .when("type", {
        is: "soup",
        then: (schema) =>
          schema
            .required("required")
            .typeError("only numbers")
            .integer("must be an integer"),
      }),

    slices_of_bread: yup
      .number()
      .transform((value, originalValue) => {
        return originalValue === "" ? undefined : value;
      })
      .min(1, "1 is a minimum value")
      .typeError("only numbers")
      .when("type", {
        is: "sandwitch",
        then: (schema) =>
          schema.required("required").integer("must be an integer"),
      }),
  })
  .required();
