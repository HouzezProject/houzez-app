import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmailVerificationPage from "./email-verification";

// eslint-disable-next-line jest/valid-describe-callback
describe("<EmailVerificationPage />", () => {
  it("button should be disabled when clicked", async () => {
    render(<EmailVerificationPage />);
    userEvent.click(screen.getByTitle("resendBtn"));
    // eslint-disable-next-line jest/valid-expect
    await waitFor(() => {
      expect(screen.getByTitle("resendBtn")).toBeDisabled();
    });
  });
});
