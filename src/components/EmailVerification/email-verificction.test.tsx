import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmailVerificationPage from "../../pages/email-verification";

describe("<EmailVerificationPage />", () => {
  it("button should be disabled when clicked", async () => {
    render(<EmailVerificationPage />);
    await userEvent.click(screen.getByTitle("resendBtn"));
    expect(await screen.getByTitle("resendBtn")).toBeDisabled();
  });

  it("button should start countdown after clicked", () => {
    render(<EmailVerificationPage />);
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
    jest.spyOn(global, "setInterval");
    userEvent.click(screen.getByTitle("resendBtn"));
    jest.runAllTimers();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    // expect(setInterval).toHaveBeenCalledTimes(1);
    expect(screen.getByTitle("resendBtn")).not.toBeDisabled();
  });
});
