import React, { useState, useEffect } from "react";
import PollWidget from "../../components/PollWidget/PollWidget";
import AnswerDisplayer from "../../components/AnswerDisplayer/AnswerDisplayer";
import { getPollWidgetDataFromLocalStorage } from "../../GlobalUtils";

const PersonalKeyConstant = "personalPollAnswers";

const setPollWidgetDataToLocalStorage = (obj) => {
  localStorage.setItem(PersonalKeyConstant, JSON.stringify(obj));
};

const Personal = (props) => {
  const { data = [] } = props;
  const [personalPollData, setPersonalPollData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      const localStorageObj = getPollWidgetDataFromLocalStorage(
        PersonalKeyConstant
      );
      if (Object.keys(localStorageObj).length > 0) {
        setPersonalPollData(localStorageObj);
      }
    });
  }, []);

  const setSelectedAnswer = (selectedValue) => {
    const obj = {
      ...personalPollData,
      [selectedValue.question]: selectedValue?.answer,
    };
    setPersonalPollData(obj);
    setPollWidgetDataToLocalStorage(obj);
  };

  return (
    <section>
      <form>
        {data.map((element, idx) => {
          return (
            <PollWidget
              key={idx}
              item={element}
              selectedAnswer={personalPollData[element.question] ?? ""}
              getSelectedData={setSelectedAnswer}
            />
          );
        })}
      </form>
      {Object.keys(personalPollData).length > 0 && (
        <AnswerDisplayer data={personalPollData} />
      )}
    </section>
  );
};

export default Personal;
