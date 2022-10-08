import axiosClient from "../../utils/axios";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUpInfo from "./SignUpInfo";

describe("<SignUpInfo />", () => {
  it("should post user's input to backend", async () => {
    render(<SignUpInfo />);
    userEvent.click(screen.getByRole("button", { name: "Create account" }));
    jest.spyOn(axiosClient, "post").mockResolvedValue({ status: 201 });
    expect(axiosClient.post).toHaveBeenCalled();
  });
});
