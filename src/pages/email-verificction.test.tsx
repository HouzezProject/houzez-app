import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmailVerificationPage from "./email-verification";

describe("<EmailVerificationPage />", () => {
  it("button should be disabled when clicked", () => {
    render(<EmailVerificationPage />);
    userEvent.click(screen.getByRole("button", { name: "Resend verification email" }));
    // eslint-disable-next-line jest/valid-expect
    expect(screen.getByText("Resend verification email").closest("button")).toBeDisabled();
  });
});
