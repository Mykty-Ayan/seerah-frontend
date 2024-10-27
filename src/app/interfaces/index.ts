export interface IChapter {
  id: number;
  part: string;
  title: string;
  lessons: ILesson[];
}

export interface IChapterLesson {
  lessons: IChapter[];
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

export interface ISignUpRequest {
  username: string;
  password: string;
}

export interface ISignInRequest {
  user_id: string;
  fcm_token: string;
}

export interface IJwtAuthenticationResponse {
  type: string;
  access: string;
}

export interface IUserResponse {
  id: string;
  username: string;
}

export interface SignUpResponse {
  user: IUserResponse;
  token: IJwtAuthenticationResponse;
}

export interface IRefreshTokenRequest {
  user_id: string;
}
