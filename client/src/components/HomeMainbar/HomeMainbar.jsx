import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

  const location = useLocation()
  const user = 1;
  const navigate = useNavigate();

  const checkAuth = () => {
    if(user === null){
      alert("login or signup to ask a question")
      navigate('/Auth')
    }else{
      navigate('/AskQuestion')
    }
  }

  const questionsList = useSelector( state => state.questionsReducer)
  // console.log(questionsList)

  // var questionsList = [{
  //   _id: 1,
  //   upVotes: 4,
  //   downVotes: 0,
  //   votes: 3,
  //   noOfAnswers: 2,
  //   QuestionTitle: "What is a function?",
  //   QuestionBody: "It want to be",
  //   QuestionTags: ['java', 'node js', 'react js', 'mongoose', 'JavaScript'],
  //   userPosted: 'Faiz',
  //   askedOn: 'jan 1',
  //   userId: 1,
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: "Faiz",
  //     answeredOn: "jan 2",
  //     userId:2
  //   }]
  // },
  // {
  //   _id: 2,
  //   upVotes: 4,
  //   downVotes: 0,
  //   votes: 0,
  //   noOfAnswers: 25,
  //   QuestionTitle: "What is a class?",
  //   QuestionBody: "It want to be",
  //   QuestionTags: ['java', 'node js', 'react js', 'mongoose', 'JavaScript'],
  //   userPosted: 'Faiz',
  //   askedOn: 'jan 1',
  //   userId: 1,
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: "Faiz",
  //     answeredOn: "jan 2",
  //     userId:2
  //   }]
  // },
  // {
  //   _id: 3,
  //   upVotes: 4,
  //   downVotes: 0,
  //   votes: 1,
  //   noOfAnswers: 0,
  //   QuestionTitle: "What is a function?",
  //   QuestionBody: "It want to be",
  //   QuestionTags: ['css', 'react js', 'HTML5', 'JavaScript'],
  //   userPosted: 'Faiz',
  //   askedOn: 'jan 1',
  //   userId: 1,
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: "Faiz",
  //     answeredOn: "jan 2",
  //     userId:2
  //   }]
  // },
  // {
  //   _id: 4,
  //   upVotes: 4,
  //   downVotes: 0,
  //   votes: 4,
  //   noOfAnswers: 4,
  //   QuestionTitle: "What is a function?",
  //   QuestionBody: "It want to be",
  //   QuestionTags: ['java', 'node js', 'react js', 'mongoose', 'JavaScript'],
  //   userPosted: 'Faiz',
  //   askedOn: 'jan 1',
  //   userId: 1,
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: "Faiz",
  //     answeredOn: "jan 2",
  //     userId:2
  //   }]
  // },
  // {
  //   _id: 5,
  //   upVotes: 4,
  //   downVotes: 0,
  //   votes: 3,
  //   noOfAnswers: 2,
  //   QuestionTitle: "What is a function?",
  //   QuestionBody: "It want to be",
  //   QuestionTags: ['java', 'node js', 'react js', 'mongoose', 'JavaScript'],
  //   userPosted: 'Faiz',
  //   askedOn: 'jan 1',
  //   userId: 1,
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: "Faiz",
  //     answeredOn: "jan 2",
  //     userId:2
  //   }]
  // }]

  

  return (
    <div className='main-bar'>
      <div className="main-bar-header">
      {
        location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
      }

      <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      {
        questionsList.data === null ? 
        <h1>Loading...</h1> :
        <>
        <p>{questionsList.data.length } questions</p>
        <QuestionList questionsList={questionsList.data}/>
        </>
      }
    </div>
  )
}

export default HomeMainbar