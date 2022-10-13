import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as nextRouter from "next/router";
import { AxiosError, AxiosResponse } from "axios";
import axiosClient from "../../utils/axios";
import SignUpInfo from "./SignUpInfo";

describe("<SignUpInfo />", () => {
  it("should show email already exits when user type a registed email", async () => {
    jest.spyOn(axiosClient, "head").mockResolvedValue({ status: 200 });
    render(<SignUpInfo />);

    await userEvent.type(screen.getByPlaceholderText("Email address"), "a@gmail.com");
    await userEvent.tab();

    expect(await screen.findByText("The email already exists...")).toBeInTheDocument();
  });
  it("should post user's input to backend", async () => {
    jest.spyOn(axiosClient, "post").mockResolvedValue({ status: 201 });
    jest
      .spyOn(axiosClient, "head")
      .mockRejectedValue(new AxiosError(undefined, undefined, undefined, undefined, { status: 404 } as AxiosResponse));
    const mockPush = jest.fn();
    jest.spyOn(nextRouter, "useRouter").mockReturnValue({ push: mockPush } as any);
    render(<SignUpInfo />);

    await userEvent.type(screen.getByPlaceholderText("Email address"), "a@gmail.com");
    await userEvent.type(screen.getByPlaceholderText("Password"), "a@QA1212123");
    await userEvent.click(screen.getByRole("button", { name: "Create account" }));

    expect(axiosClient.post).toBeCalledWith("/agents", { email: "a@gmail.com", password: "a@QA1212123" });
    expect(mockPush).toBeCalledWith("/email-verification");
  });
});
