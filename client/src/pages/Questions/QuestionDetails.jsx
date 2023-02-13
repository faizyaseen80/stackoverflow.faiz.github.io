import React, { useState } from 'react';
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import copy from 'copy-to-clipboard'

import up from '../../assest/up.svg';
import down from '../../assest/down.svg';
import './Questions.css';
import Avatar from '../../components/Avatar/Avatar';
import DisplayAnswer from './DisplayAnswer';
import { deleteQuestion, postAnswer, voteQuestion } from '../../actions/question';

const QuestionDetails = () => {

  const { id } = useParams()
  const questionsList = useSelector( state => state.questionsReducer)

  const [Answer, setAnswer] = useState("")
  const User = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const url = 'https://stack-overflow-faizan.netlify.app'

  const handlePostAns = (e, answerLength) => {
    e.preventDefault()
    if (User === null) {
      alert("Login or Signup to answer a question")
      navigate('/Auth')
    }else{
      if (Answer === "") {
        alert("Enter an anser before submitted")
      }else{
        dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id }))
      }
    }
  }

  const handleShare = () => {
   copy(url+location.pathname)
    alert('Copied url: ' + url+location.pathname)
  }

  const handleDelete = () => {
    dispatch(deleteQuestion(id, navigate))
  }

  const handleUpVotes = () => {
    dispatch(voteQuestion(id, 'upVote', User.result._id))
  }
  const handleDownVotes = () => {
    dispatch(voteQuestion(id, 'downVote', User.result._id))
  }

  return (
    <div className='question-details-page'>
      {
        questionsList.data === null ? 
        <h1>Loading...</h1> :
        <>
        {
          questionsList.data.filter(question => question._id === id).map(question => (
            <div key={question._id}>
              <section className="question-details-container">
                <h1>{question.questionTitle}</h1>
                <div className="question-details-container-2">
                  <div className="question-votes">
                    <img src={up} alt="Up-votes" width='18px' className='votes-icon' onClick={handleUpVotes}/>
                    <p>{ question.upVote.length - question.downVote.length }</p>
                    <img src={down} alt="down-votes" width='18px' className='votes-icon' onClick={handleDownVotes}/>
                  </div>
                  <div style={{ width:'100%'}}>
                      <div className=".question-body">
                        {question.questionBody}
                      </div>
                      <div className="question-details-tags">{
                        question.questionTags.map((tag) =>(
                          <p key={tag}>{tag}</p>
                        ))
                      }</div>
                      <div className='question-actions-user'>
                        <div>
                        <button type='button' onClick={handleShare}>Share</button>
                        {
                          User?.result?._id === question?.userId && (
                            <button type='button' onClick={handleDelete}>Delete</button>
                          )
                        }
                        </div>
                      <div>
                        <p style={{marginBottom: "3px"}}>asked {moment(question.askedOn).fromNow()}</p>
                        <Link style={{textDecoration: 'none', color:'#000'}} to={`/Users/${question.userId}`} className='user-link'><Avatar backgroundColor='orange' width='20px' px='8px' py='4px' borderRadius='5px' fontSize='18px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                      <div style={{color: "rgb(0, 134, 216)"}}>
                        {question.userPosted}
                      </div>
                        </Link>
                      </div>
                      </div>
                  </div>
                </div>
              </section>
              {
                question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} Answer</h3>
                    <DisplayAnswer key={question._id} question={question} handleShare={handleShare} handleDelete={handleDelete}/>
                  </section>
                )
              }
              <section className='post-ans-container'>
                <h3>Your Answer</h3>
                <form onSubmit={(e) => {handlePostAns(e, question.answer.length)}}>
                <textarea name="" id="" cols="30" rows="10" onChange={e => setAnswer(e.target.value)}></textarea><br/>
                <input type="submit" className='post-ans-btn' value='Post Your Answer' />
                </form>
                <p>
                Browse other questions tagged 
                {
                  question.questionTags.map((tag) => (
                    <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                    
                  ))
                }or
                <Link to='/AskQuestion' style={{textDecoration: 'none', color: '#009dff'}}> ask your own question</Link>
                </p>
              </section>
            </div>
          ))
        }
        </>
      }
        
    </div>
  )
}

export default QuestionDetails