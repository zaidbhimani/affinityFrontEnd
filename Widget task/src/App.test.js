import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const renderApp = () => {
  return render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

describe("App", () => {
  test("WHen user navigate to / rout then personal page should be displayed", async () => {
    renderApp();

    expect(screen.getByText(/Your favourite food?/)).toBeInTheDocument();

    await screen.findByText(/Your favourite food?/);
  });

  test("WHen professional route is shown then professional component should be rendered", () => {
    renderApp();
    const professionalLink = screen.getByRole("link", {
      name: /professional/i,
    });

    userEvent.click(professionalLink);

    expect(screen.getByText(/your favourite framework\?/i)).toBeInTheDocument();
  });
});
