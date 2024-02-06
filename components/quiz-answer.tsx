import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";

const QuizAnswer = ({option} : {option: any}) => {
  return (
    <>
      <Card className="hover:scale-110 hover:shadow-md max-w-lg rounded-lg h-fit min-h-fit hover:cursor-pointer">
        <CardContent className="px-0 rounded-lg w-full">
          <Image className="rounded-t-lg w-full h-auto"
          src={option.img} width={200} height={75} objectFit="contain" alt="answer option image"/>
        </CardContent>
        <CardFooter className="flex justify-between">
          {option.answer}
        </CardFooter>
      </Card>
    </>
  )
}

export default QuizAnswer;