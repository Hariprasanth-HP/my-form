import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./index";

test("rendering and submitting a basic Formik form", async () => {
  const handleSubmit = jest.fn();
  render(<App />);
  const user = userEvent.setup();
  // const name = (screen.getByLabelText(/name/i), "John");
  // const email = (screen.getByLabelText(/email/i), "john.dee@someemail.com");

  const submit = screen.getByRole("button", { name: /submit/i });

  await user.type(screen.getByLabelText(/name/i), "John");
  await user.type(screen.getByLabelText(/email/i), "john.dee@someemail.com");

  await user.click(screen.getByRole("button", { name: /submit/i }));

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      name: "John",
      email: "john.dee@someemail.com",
    })
  );
});
