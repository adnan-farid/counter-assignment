// Counter.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

let getByTestId, getByText;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
  getByText = component.getByText;
});

test('renders counter message', () => {
  const counter = document.querySelector("h2");
  expect(counter).toHaveTextContent("Counter")
});

test('should render initial count with value of 0', () => {
  const count = getByTestId("count");
  expect(count.textContent).toBe("0");
});

test('clicking + increments the count', () => {
  const increment = getByText("+");
  fireEvent.click(increment);
  const count = getByTestId("count");
  expect(count).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  const decrement = getByText("-");
  fireEvent.click(decrement);
  const count = getByTestId("count");
  expect(count).toHaveTextContent("-1");
});
