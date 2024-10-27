import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { questionArray } from "../../Constants";

import PollWidget from "./PollWidget";

describe("PollWidget", () => {
  test("When user click on option THEN option click will be selected", async () => {
    const getSelectedData = jest.fn();

    render(
      <PollWidget
        item={questionArray.personal[0]}
        selectedAnswer={""}
        getSelectedData={getSelectedData}
      />
    );

    expect(screen.getByLabelText(/chinese/i)).not.toBeChecked();

    userEvent.click(screen.getByLabelText(/chinese/i));

    expect(screen.getByLabelText(/chinese/i)).toBeChecked();

    expect(getSelectedData).toHaveBeenCalledWith({
      answer: "Chinese",
      question: "Your favourite food?",
    });
  });



  test("WHEN user click on option pre selected And user click on it THEN option will get de selected", async () => {
    const getSelectedData = jest.fn();

    render(
      <PollWidget
        item={questionArray.personal[0]}
        selectedAnswer={"Chinese"}
        getSelectedData={getSelectedData}
      />
    );

    expect(screen.getByLabelText(/chinese/i)).toBeChecked();

    userEvent.click(screen.getByLabelText(/biryani/i));

    expect(screen.getByLabelText(/biryani/i)).toBeChecked();
    expect(screen.getByLabelText(/chinese/i)).not.toBeChecked();

    expect(getSelectedData).toHaveBeenCalledWith({
      answer: "Biryani",
      question: "Your favourite food?",
    });

    expect(getSelectedData).toHaveBeenCalledTimes(1);
  });
});
