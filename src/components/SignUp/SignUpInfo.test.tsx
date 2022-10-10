import axiosClient from "../../utils/axios";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUpInfo from "./SignUpInfo";

describe("<SignUpInfo />", () => {
  it("should post user's input to backend", () => {
    jest.spyOn(axiosClient, "post").mockResolvedValue({ status: 201 });
    render(<SignUpInfo />);

    userEvent.type(screen.getByRole("textbox", { name: "Email address" }), "a@gmail.com");
    userEvent.type(screen.getByRole("password", { name: "" }), "a@QA1212123");
    userEvent.click(screen.getByRole("button", { name: "Create account" }));
    waitFor(() => {
      expect(axiosClient.post).toHaveBeenCalled();
    });
  });
});
