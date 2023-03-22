import Form from "./Form";
import { describe, expect, it, beforeEach } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";

interface Inp {
  input: HTMLInputElement;
}
describe("form tests", () => {
  beforeEach(() => {
    render(<Form />);
  });
  it("show pizza options", () => {
    const selectType: HTMLSelectElement = screen.getByTestId("select");
    fireEvent.change(selectType, { target: { value: "pizza" } });
    expect(screen.getAllByPlaceholderText("number of slices")).toBeTruthy();
    expect(screen.getAllByPlaceholderText("diameter")).toBeTruthy();
  });

  it("show pizza options", () => {
    const selectType: HTMLSelectElement = screen.getByTestId("select");
    fireEvent.change(selectType, { target: { value: "soup" } });
    expect(screen.getAllByPlaceholderText("spiciness scale")).toBeTruthy();
  });

  it("show sandwich options", () => {
    const selectType: HTMLSelectElement = screen.getByTestId("select");
    fireEvent.change(selectType, { target: { value: "sandwitch" } });
    expect(screen.getAllByPlaceholderText("slices of bread")).toBeTruthy();
  });
});
