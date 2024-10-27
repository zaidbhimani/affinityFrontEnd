import React, { useState, useEffect } from 'react';
import s from "./PollWidget.module.scss"

const PollWidget = (props) => {
  const { callBack = () => { } } = props
  const { id, question, answers = [] } = props.item
  const selectedAnswer = props.selectedAnswer

  const [selectedOption, setSelectedOption] = useState({})

  useEffect(()=>{
    if(selectedAnswer != ""){
      setSelectedOption({
        question,
        answer:selectedAnswer
      })
    }
  },[selectedAnswer])

  return <div className={s.pollWidgetWrapper}>
    <div className={s.question}>{question}</div>
    <div className={s.radio_group}>
      {
        answers.map((element, idx) => {
          return <div key={idx} className={`${s.poll_option} ${selectedOption?.answer === element && s.poll_option_active}`} onClick={() => {
            setSelectedOption(
              {
                question,
                answer: element
              }
            )
            callBack({
              question,
              answer: element
            })
          }}>
            <label className={s.radio_button_container} disabled>
              {element}
              <input type="radio" checked={selectedOption?.answer === element ? "checked" : ""} name={`${question}_radio`} onChange={()=>{}}/>
              <span className={s.checkmark}></span>
            </label>
          </div>
        })
      }
    </div>
  </div>



}

export default PollWidget