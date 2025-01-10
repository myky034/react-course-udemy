import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTION from "../questions";

export default function Summary({ userAnswer }) {
  const skippedAnswers = userAnswer.filter((answer) => answer === null);
  const correctAnswers = userAnswer.filter(
    (answer, index) => answer === QUESTION[index].answers[0]
  );
  const skippedAnswerShare = Math.round(
    (skippedAnswers.length / userAnswer.length) * 100
  );
  const correctAnswerShare = Math.round(
    (correctAnswers.length / userAnswer.length) * 100
  );
  const wrongAnswerShare = 100 - skippedAnswerShare - correctAnswerShare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Quiz completed" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswerShare}%</span>
          <span className="text">answer incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswer.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTION[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={answer}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTION[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
