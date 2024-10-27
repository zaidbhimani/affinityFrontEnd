import React from 'react';
import styles from "./AnswerDisplayer.module.scss";


const AnswerDisplayer = (props) => {
    const { data = {} } = props

    return <div className={styles.container}>
        <div className={styles.results}>Results:-</div>
        {
            Object.keys(data).map((element, idx) => {
                return <div className={styles.wrapper} key={idx}>
                    <div className={styles.questionWrapper}><span>Question :</span> {element}</div>
                    <div className={styles.answerWrapper}><span>Answer :</span> {data[element]}</div>
                </div>
            })
        }</div>
}

export default AnswerDisplayer