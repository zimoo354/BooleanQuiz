import React, { useState } from 'react';
import Question from '../Question';

const Questionnaire = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const answerQuestion = (answer) => {
    const as = answers;
    as[currentQuestion] = answer;
    setAnswers(as);
    setCurrentQuestion(currentQuestion + 1);
    console.log(answers);
  }

  return (
    <>
      <Question 
        text={questions[currentQuestion]}
        onChange={answerQuestion}
      />
      {
        (answers.length === questions.length) &&
          <table>
            <tr>
              <th>Question</th>
              <th>Your response</th>
            </tr>
            {
              answers.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item ? 'T' : 'F'}</td>
                </tr>
              ))
            }
          </table>
      }
    </>
  );
};

export default Questionnaire;