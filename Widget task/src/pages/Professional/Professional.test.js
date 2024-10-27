import { render, screen, within } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import Professional from "./Professional";

import { questionArray } from "../../Constants";

describe("Given Professional Form Page ", () => {

  test("When user load for first time THEN user should see Poll Widget with Question and Answers AND Result section will not be visible", async () => {

    render(<Professional data={questionArray.professional} />);

    const fieldSet = screen.getByRole('group', {
      name: /your favourite Framework\?/i
    });

    const {getByText} = within(fieldSet);

    expect(getByText(/react/i)).toBeInTheDocument();
    expect(getByText(/Angular/i)).toBeInTheDocument();
  });

  test("When User should be select answer THEN selected option should be displayed in results section", async () => {
    render(<Professional data={questionArray.professional} />);

    expect(screen.queryByText(/Results/i)).toBeNull();

    userEvents.click(screen.getByLabelText(/react/i));

    expect(screen.getByLabelText(/react/i)).toBeChecked();

    await screen.findByText(/Results/i);

    expect(screen.getByText(/Results/i)).toBeInTheDocument();
  });
});
