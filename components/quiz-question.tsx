import QuizAnswer from "./quiz-answer";
import Heading2 from "./ui/heading2";

const QuizQuestion = ({quiz}: {quiz: any}) => {

  return (
    <div className="mt-4">
      <Heading2 text={quiz.Question} />
      <div className="grid grid-cols-2 gap-4 mt-8">
        {quiz.Option.map((option: any) => {
          return <QuizAnswer key={"option"} option={option} />
        })}
      </div>
    </div>
  )
}

export default QuizQuestion;