import axiosClient from "../../utils/axios";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUpInfo from "./SignUpInfo";

describe("<SignUpInfo />", () => {
  it("should post user's input to backend", async () => {
    jest.spyOn(axiosClient, "post").mockResolvedValue({ status: 201 });
    render(<SignUpInfo />);

    await userEvent.type(screen.getByRole("textbox", { name: "Email address" }), "a@gmail.com");
    await userEvent.type(screen.getByRole("password").querySelector("input") as HTMLInputElement, "a@QA1212123");
    await userEvent.click(screen.getByRole("button", { name: "Create account" }));

    await waitFor(() => {
      expect(axiosClient.post).toBeCalled();
    });
  });
});
