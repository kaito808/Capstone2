import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NewsList from "./NewsList";

test("renders NewsList component without errors", () => {
  render(<NewsList />);
});

test('displays the "Explore News" title', () => {
  render(<NewsList />);
  const titleElement = screen.getByText(/Explore News/i);
  expect(titleElement).toBeInTheDocument();
});

test('displays the "Toggle" button', () => {
  render(<NewsList />);
  const toggleButton = screen.getByText(/Toggle/i);
  expect(toggleButton).toBeInTheDocument();
});

test('handles the "Toggle" button click', () => {
  render(<NewsList />);
  const toggleButton = screen.getByText(/Toggle/i);
  fireEvent.click(toggleButton);
});
