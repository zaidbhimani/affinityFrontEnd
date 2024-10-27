import { render, screen, within } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import Personal from "./Personal";

import { questionArray } from "../../Constants";

describe("Given Personal Form Page ", () => {

  test("When user load for first time THEN user should see Poll Widget with Question and Answers AND Result section will not be visible", async () => {

    render(<Personal data={questionArray.personal} />);

    const fieldSet = screen.getByRole('group', {
      name: /your favourite food\?/i
    });

    const {getByText} = within(fieldSet);

    expect(getByText(/biryani/i)).toBeInTheDocument();
    expect(getByText(/chinese/i)).toBeInTheDocument();
  });

  test("When User should be select answer THEN selected option should be displayed in results section", async () => {
    render(<Personal data={questionArray.personal} />);

    expect(screen.queryByText(/Results/i)).toBeNull();

    userEvents.click(screen.getByLabelText(/chinese/i));

    expect(screen.getByLabelText(/chinese/i)).toBeChecked();

    await screen.findByText(/Results/i);

    expect(screen.getByText(/Results/i)).toBeInTheDocument();
  });
});
