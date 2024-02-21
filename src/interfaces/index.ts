export interface IChapter {
  id: number;
  part: string;
  title: string;
  lessons: ILesson[];
}

export interface ILesson {
  id: number;
  isFinished: boolean;
  name: string;
  description: string;
  leftOffset: number;
  extendedDescription: string;
  summary: string;
  questions: IQuestion[];
}

export interface IQuestion {
  id: number;
  questionText: string;
  answerOptions: IAnswerOption[];
  isMultipleAnswers: boolean;
}

export interface IAnswerOption {
  id: number;
  answerText: string;
  isRight: boolean;
}

export interface ILessonFinishedPayload {
  lessonId: number;
  chapterId: number;
}