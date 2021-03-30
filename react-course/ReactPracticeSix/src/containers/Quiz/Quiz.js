import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz"
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import axios from "../../axios/axios-quiz";
import Loader from "../../components/UI/Loader/Loader"

class Quiz extends Component {

    state = {
        quiz: [],
        activeQuestion: 0,
        answerState: null, // { [id]: 'success', 'error' }
        isFinished: false,
        results: {}, // { [id]: 'success', 'error' }
        loading: true
    }

    onAnswerClickHandler = (answerId) => {
        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        console.log(this.state.quiz)
        // Проверка совпадение правильного ответа с переходом и задержкой на новый вопрос
        if (question.rightAnswerId === answerId) {

            // Проверка допущении ошибки при ответе на вопрос
            if (!results[question.id]) {
                results[question.id] = 'success' // Если с первой попытки попадаем на правильный то результат в конце будет положителен
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results: results
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({isFinished: true})
                    console.log('Finished is', this.state.isFinished)
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            results[question.id] = 'error' // Если при первой попытки ответ не правильный результат будет ошибочный
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })
        }

        // Фикс бага двойной клик по правильному ответу, что приводит к переносу второго клика на новый (второй) вопрос
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }
    }

    // Проверка количества вопросов из всего, return (true or false)
    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    // Функция обнуление данных для прохождение теста заново
    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    async componentDidMount() {
        try {
            /*const response = await axios.get(`quiz/${this.props.match.params.id}.json`)*/
            const response = await axios.get(`quiz/${this.props.match.params.id}.json`)
            const quiz = response.data
            this.setState({
                quiz,
                loading: false
            })
        } catch (e) {
            console.log(e)
        }

        // отображение id в адресной строке QuizList
        /*console.log('Quiz ID = ', this.props.match.params.id)*/
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.state.loading
                            ? <Loader/> :
                            this.state.isFinished
                                ? <FinishedQuiz
                                    results={this.state.results}
                                    quiz={this.state.quiz}
                                    onRetry={this.retryHandler}
                                /> :
                                <ActiveQuiz
                                    answers={this.state.quiz[this.state.activeQuestion].answers}
                                    question={this.state.quiz[this.state.activeQuestion].question}
                                    onAnswerClick={this.onAnswerClickHandler}
                                    quizLength={this.state.quiz.length}
                                    answerNumber={this.state.activeQuestion + 1}
                                    state={this.state.answerState}
                                />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz

/*
*/

/*
*/
