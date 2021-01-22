import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";
import { act } from "react-dom/test-utils";

test("renders ContactForm", () => {
	render(<ContactForm />);
});

test("can fill in form and display", async () => {
	const promise = Promise.resolve();
	const handleUpdateForm = jest.fn(() => promise);
	render(<ContactForm updateForm={handleUpdateForm} />);

	// userEvent.type(screen.getByLabelText(/first name/i), "Nick");

	const firstNameInput = screen.getByLabelText(/first name/i);
	const lastNameInput = screen.getByLabelText(/last name/i);
	const emailInput = screen.getByLabelText(/email/i);
	const messageInput = screen.getByLabelText(/message/i);
	const button = screen.getByRole("button");

	userEvent.type(firstNameInput, "Nick");
	userEvent.type(lastNameInput, "Watson");
	userEvent.type(emailInput, "ngwatson@email.com");
	userEvent.type(messageInput, "Hi, this is a message");
	userEvent.click(button);

	expect(firstNameInput).toHaveValue("Nick");
	expect(lastNameInput).toHaveValue("Watson");
	expect(emailInput).toHaveValue("ngwatson@email.com");
	expect(messageInput).toHaveValue("Hi, this is a message");

	await act(() => promise);
});
