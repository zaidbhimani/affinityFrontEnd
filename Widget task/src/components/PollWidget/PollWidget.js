import React, { useState, useEffect } from 'react';
import styles from "./PollWidget.module.scss"

const PollWidget = (props) => {
  const { getSelectedData = () => { }, item , selectedAnswer } = props
  const { id, question, answers = [] } = item

  const [selectedOption, setSelectedOption] = useState({})

  useEffect(() => {
    if (selectedAnswer !== "") {
      setSelectedOption({
        question,
        answer: selectedAnswer
      })
    }
  }, [selectedAnswer])

  const setOption = (question, element) => {
    setSelectedOption(
      {
        question,
        answer: element
      }
    )
    getSelectedData({
      question,
      answer: element
    })
  }

  return <div className={styles.pollWidgetWrapper}>
    <div className={styles.question}>{question}</div>
    <div className={styles.radio_group}>
      {
        answers.map((element, idx) => {
          return <div key={idx} className={`${styles.poll_option} ${selectedOption?.answer === element && styles.poll_option_active}`} onClick={() => {
            setOption(question, element)
          }}>
            <label className={styles.radio_button_container} disabled>
              {element}
              <input type="radio" checked={selectedOption?.answer === element ? "checked" : ""} name={`${question}_radio`} onChange={() => { }} />
              <span className={styles.checkmark}></span>
            </label>
          </div>
        })
      }
    </div>
  </div>
}

export default PollWidget