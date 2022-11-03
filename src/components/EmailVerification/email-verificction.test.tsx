import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmailVerificationPage from "../../pages/email-verification";
import axiosClient from "../../utils/axios";
import * as nextRouter from "next/router";

describe("<EmailVerificationPage />", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("button should be disabled when clicked", async () => {
    const mockPush = jest.fn();
    const mockQuery = jest.spyOn(nextRouter, "useRouter");
    mockQuery.mockReturnValue({
      push: mockPush,
      query: {
        email: "a@gmail.com"
      } as any
    } as any);
    render(<EmailVerificationPage />);
    await userEvent.click(screen.getByTitle("resendBtn"));
    expect(await screen.getByTitle("resendBtn")).toBeDisabled();
  });

  it("button should start countdown after clicked", () => {
    const mockPush = jest.fn();
    const mockQuery = jest.spyOn(nextRouter, "useRouter");
    mockQuery.mockReturnValue({
      push: mockPush,
      query: {
        email: "a@gmail.com"
      } as any
    } as any);
    render(<EmailVerificationPage />);
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
    jest.spyOn(global, "setInterval");
    userEvent.click(screen.getByTitle("resendBtn"));
    jest.runAllTimers();
    expect(screen.getByTitle("resendBtn")).not.toBeDisabled();
  });

  it("should post user's email to backend", async () => {
    const mockPush = jest.fn();
    const mockQuery = jest.spyOn(nextRouter, "useRouter");
    mockQuery.mockReturnValue({
      push: mockPush,
      query: {
        email: "a@gmail.com"
      } as any
    } as any);
    jest.spyOn(axiosClient, "post").mockResolvedValue({ status: 200 });
    render(<EmailVerificationPage />);
    await userEvent.click(screen.getByTitle("resendBtn"));
    await waitFor(() => expect(axiosClient.post).toBeCalledWith("/agents/resend-email", { email: "a@gmail.com" }));
  });
});
