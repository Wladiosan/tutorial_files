import React from 'react'
import AnswerList from './AnswersList/AnswersList'
import classes from './ActiveQuiz.module.css'

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>

            {/*Номер текущего вопроса*/}
            <span>
                <strong>{props.answerNumber}&#046;&#032;</strong>&nbsp;
                {props.question}
            </span>

            {/*Счетчик к-во вопросов всего*/}
            <span>
                <strong>{props.answerNumber} of {props.quizLength}</strong>
            </span>
        </p>

        {/*Компонент всех вариантов ответов*/}
        <AnswerList
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
            state={props.state}
        />
    </div>
)


export default ActiveQuiz
