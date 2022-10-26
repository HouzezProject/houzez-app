import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmailVerificationPage from "./email-verification";

describe("<EmailVerificationPage />", () => {
  it("button should be disabled when clicked", async () => {
    render(<EmailVerificationPage />);
    await userEvent.click(screen.getByTitle("resendBtn"));
    expect(await screen.getByTitle("resendBtn")).toBeDisabled();
  });

  it("button should start countdown after clicked", () => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
    jest.spyOn(global, "setInterval");
    render(<EmailVerificationPage />);
    userEvent.click(screen.getByTitle("resendBtn"));
    expect(setTimeout).toHaveBeenCalled();
    jest.runAllTimers();
    // expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 60000);
    // expect(setInterval).toHaveBeenCalledTimes(0);
    expect(screen.getByTitle("resendBtn")).not.toBeDisabled();
  });
});
