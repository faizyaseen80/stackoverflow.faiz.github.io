import moment from "moment";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import Avatar from "../../components/Avatar/Avatar";
import { deleteAnswer } from "../../actions/question"

const DisplayAnswer = ({ question, handleShare }) => {

    const dispatch = useDispatch();
    const User = useSelector((state) => (state.currentUserReducer))
    const { id } = useParams()

    const handleDelete = (answerId, noOfAnswers) => {
        dispatch(deleteAnswer( id, answerId, noOfAnswers - 1 ))
    }

  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className="question-actions-user">
            <div>
              <button type="button" onClick={handleShare}>
                Share
              </button>
              {User?.result?._id === ans?.userId && (
                <button type="button" onClick={() => handleDelete(ans._id, question.noOfAnswers)}>Delete</button>
              )}
            </div>
            <div>
              <p style={{ marginBottom: "3px" }}>
                answered {moment(ans.answeredOn).fromNow()}
              </p>
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to={`/Users/${ans.userId}`}
                className="user-link"
              >
                <Avatar
                  backgroundColor="green"
                  width="20px"
                  px="8px"
                  py="4px"
                  borderRadius="5px"
                  fontSize="18px"
                >
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
                <div style={{ color: "rgb(0, 134, 216)" }}>
                  {ans.userAnswered}
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
