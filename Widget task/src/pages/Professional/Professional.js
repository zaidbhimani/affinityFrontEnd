import React, { useState, useEffect } from 'react';
import PollWidget from '../../components/PollWidget/PollWidget';
import AnswerDisplayer from '../../components/AnswerDisplayer/AnswerDisplayer';

const Professional = (props) => {
  const { data = [] } = props
  const [savedData, setSavedData] = useState({});

  useEffect(()=>{
    setTimeout(()=>{
      const localStorageObj = localStorage.getItem('professionalPollAnswers') ? JSON.parse(localStorage.getItem('professionalPollAnswers')) :{};
      if(Object.keys(localStorageObj)?.length > 0){
        setSavedData(localStorageObj)
      }
    })
  },[])
 
  return <>{data.map((element, idx) => {
    return <PollWidget key={idx} item={element} selectedAnswer={savedData[element.question] ?? ""} callBack={(selectedValue) => {
      const obj = {
        ...savedData,
        [selectedValue.question]: selectedValue?.answer
      }
      setSavedData(obj)
      localStorage.setItem('professionalPollAnswers', JSON.stringify(obj));
    }} />
  })}   {Object.keys(savedData).length > 0 && <AnswerDisplayer data={savedData} />} </>


}

export default Professional