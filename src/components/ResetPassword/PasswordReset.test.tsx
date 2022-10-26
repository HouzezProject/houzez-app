import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AxiosError, AxiosResponse } from "axios";
import * as nextRouter from "next/router";
import axiosClient from "../../utils/axios";
import PasswordReset from "./PasswordReset";

describe("<PasswordReset />", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("should patch user's input to backend", async () => {
    const mockPush = jest.fn();
    const mockQuery = jest.spyOn(nextRouter, "useRouter");

    mockQuery.mockReturnValue({
      push: mockPush,
      query: {
        code: "eyJhbGciOiJIUzM4NCJ9.eyJlbWFpbCI6InRlc3QxQG"
      } as any
    } as any);

    jest.spyOn(axiosClient, "patch").mockResolvedValue({ status: 201 });

    render(<PasswordReset />);
    await userEvent.type(screen.getByPlaceholderText("Password"), "a@QA1212123");
    await userEvent.click(screen.getByRole("button", { name: "Change Password" }));

    await waitFor(() => expect(mockQuery).toBeCalled());
    await waitFor(() =>
      expect(axiosClient.patch).toBeCalledWith("/agents/reset-password", {
        password: "a@QA1212123",
        token: "eyJhbGciOiJIUzM4NCJ9.eyJlbWFpbCI6InRlc3QxQG"
      })
    );

    await waitFor(() => expect(mockPush).toBeCalledWith("/reset-password-success"));
  });

  it("should respond the error message to user", async () => {
    const mockQuery = jest.spyOn(nextRouter, "useRouter");

    mockQuery.mockReturnValue({
      query: {
        code: "eyJhbGciOiJIUzM4NCJ9.eyJlbWFpbCI6InRlc3QxQG"
      } as any
    } as any);

    jest.spyOn(axiosClient, "patch").mockRejectedValue(
      new AxiosError(undefined, undefined, undefined, undefined, {
        status: 400,
        data: { details: "error message" }
      } as AxiosResponse)
    );
    render(<PasswordReset />);

    await userEvent.type(screen.getByPlaceholderText("Password"), "a@QA1212123");
    await userEvent.click(screen.getByRole("button", { name: "Change Password" }));

    expect(await screen.findByText("error message")).toBeInTheDocument();
  });
});
