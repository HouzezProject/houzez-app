import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AxiosError, AxiosResponse } from "axios";
import axiosClient from "../../utils/axios";
import ForgetPasswordPage from "../../pages/forgot-password";

describe("<ForgetPasswordPage />", () => {
  it("should show Email sent please verify your mail when user type a correct email", async () => {
    jest.spyOn(axiosClient, "post").mockResolvedValue({ status: 200 });
    render(<ForgetPasswordPage />);
    await userEvent.type(screen.getByPlaceholderText("Email address"), "jessie.houjinzhi@gmail.com");
    await userEvent.click(screen.getByRole("button", { name: "Reset my password" }));
    expect(await screen.findByText("Email sent, please check your email.")).toBeInTheDocument();
    expect(axiosClient.post).toBeCalledWith("/agents/forget-password?email=jessie.houjinzhi@gmail.com");
  });
  it("should show Not Correct Email  when user type a not correct email", async () => {
    jest
      .spyOn(axiosClient, "post")
      .mockRejectedValue(new AxiosError(undefined, undefined, undefined, undefined, { status: 400 } as AxiosResponse));
    render(<ForgetPasswordPage />);
    await userEvent.type(screen.getByPlaceholderText("Email address"), "test1@gmail.com");
    await userEvent.click(screen.getByRole("button", { name: "Reset my password" }));
    expect(await screen.findByText("Email not correct.")).toBeInTheDocument();
    expect(axiosClient.post).toBeCalledWith("/agents/forget-password?email=test1@gmail.com");
  });
});
