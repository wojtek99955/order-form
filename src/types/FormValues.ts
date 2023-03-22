export interface FormValues {
  name: string;
  preparation_time: string;
  type: "pizza" | "soup" | "sandwitch";
  no_of_slices: number;
  diameter: number;
  spiciness_scale: number;
  slices_of_bread: number;
}
