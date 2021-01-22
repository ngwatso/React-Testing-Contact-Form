import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";

test("renders ContactForm", () => {
	render(<ContactForm />);
});

test("can fill in form and display", () => {
	render(<ContactForm />);

	const firstNameInput = screen.getByLabelText(/first name/i);
	const lastNameInput = screen.getByLabelText(/last name/i);
	const emailInput = screen.getByLabelText(/email/i);
	const messageInput = screen.getByLabelText(/message/i);

	userEvent.type(firstNameInput, "Nick");
	userEvent.type(lastNameInput, "Watson");
	userEvent.type(emailInput, "ngwatson@email.com");
	userEvent.type(messageInput, "Hi, this is a message");

	expect(firstNameInput).toHaveValue("Nick");
	expect(lastNameInput).toHaveValue("Watson");
	expect(emailInput).toHaveValue("ngwatson@email.com");
	expect(messageInput).toHaveValue("Hi, this is a message");

	const button = screen.getByRole("button");

	userEvent.click(button);
});
