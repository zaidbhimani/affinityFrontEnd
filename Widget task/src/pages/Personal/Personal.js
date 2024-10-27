import React, { useState, useEffect } from 'react';
import PollWidget from '../../components/PollWidget/PollWidget';
import AnswerDisplayer from '../../components/AnswerDisplayer/AnswerDisplayer';

const Personal = (props) => {
  const { data = [] } = props
  const [savedData, setSavedData] = useState({});
  const [selectedQuestion, setSelectedQuestion] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      const localStorageObj = localStorage.getItem('personalPollAnswers') ? JSON.parse(localStorage.getItem('personalPollAnswers')) : {};
      if (Object.keys(localStorageObj)?.length > 0) {
        setSavedData(localStorageObj)
      }
    })
  }, [])

  return <>{
    data.map((element, idx) => {
      return <PollWidget key={idx} item={element} selectedAnswer={savedData[element.question] ?? ""} callBack={(selectedValue) => {
        const obj = {
          ...savedData,
          [selectedValue.question]: selectedValue?.answer
        }
        setSavedData(obj)
        localStorage.setItem('personalPollAnswers', JSON.stringify(obj));
        
      }} />
    })
    
  }
    {Object.keys(savedData).length > 0 && <AnswerDisplayer data={savedData} />}
  </>
}

export default Personal