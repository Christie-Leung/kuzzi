"use client"

import { useState } from "react";
import { Progress } from "./ui/progress";
import Heading1 from "./ui/heading1";
import { quizQuestions } from "../public/text.json"
import QuizQuestion from "./quiz-question";

const QuizForm = () => {

  const [qIndex, setQIndex] = useState(0);

  return (
    <div className="absolute w-full px-28 items-center justify-center mx-auto flex flex-col overflow-x-hidden mt-6">
      <Progress className="max-w-[800px]"value={qIndex} />
      <div className="flex flex-col mt-10">
        <QuizQuestion key={"question"} quiz={quizQuestions[qIndex]} />
      </div>
    </div>
  )

}

export default QuizForm;