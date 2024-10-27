import React, { useState, useEffect } from 'react';
import PollWidget from '../../components/PollWidget/PollWidget';
import AnswerDisplayer from '../../components/AnswerDisplayer/AnswerDisplayer';
import { getPollWidgetDataFromLocalStorage } from '../../GlobalUtils';

const ProfessionalKeyConstant = "professionalPollAnswers";

const setPollWidgetDataToLocalStorage = (obj) => {
  localStorage.setItem(ProfessionalKeyConstant, JSON.stringify(obj));
}

const Professional = (props) => {
  const { data = [] } = props
  const [professionalPollData, setProfessionalPollData] = useState({});

  useEffect(()=>{
    setTimeout(()=>{
      const localStorageObj = getPollWidgetDataFromLocalStorage(ProfessionalKeyConstant)
      if(Object.keys(localStorageObj).length > 0){
        setProfessionalPollData(localStorageObj)
      }
    })
  },[])
 
  return <>{data.map((element, idx) => {
    return <PollWidget key={idx} item={element} selectedAnswer={professionalPollData[element.question] ?? ""} getSelectedData={(selectedValue) => {
      const obj = {
        ...professionalPollData,
        [selectedValue.question]: selectedValue?.answer
      }
      setProfessionalPollData(obj)
      setPollWidgetDataToLocalStorage(obj)
    }} />
  })}   {Object.keys(professionalPollData).length > 0 && <AnswerDisplayer data={professionalPollData} />} </>


}

export default Professional