import React from 'react';
import s from "./AnswerDisplayer.module.scss";


const AnswerDisplayer = (props) => {
    const { data = {} } = props

    return <div className={s.container}>
        <div className={s.results}>Results:-</div>
        {
            Object.keys(data).map((element, idx) => {
                return <div className={s.wrapper} key={idx}>
                    <div className={s.questionWrapper}><span>Question :</span> {element}</div>
                    <div className={s.answerWrapper}><span>Answer :</span> {data[element]}</div>
                </div>
            })
        }</div>
}

export default AnswerDisplayer