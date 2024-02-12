import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IChapter, ILessonFinishedPayload } from '../interfaces';

interface IInitialState {
  lessons: IChapter[]
}

const initialState: IInitialState = {
  lessons: [
    {
      id: 1,
      part: 'Тарау 1, бөлім 1',
      title: 'ХАЗІРЕТ МҰХАММЕДТІҢ (ﷺ) ДҮНИЕГЕ КЕЛУІ',
      lessons: [
        {
          id: 1,
          isFinished: true,
          name: 'Піл оқиғасы',
          description: 'Піл оқиғасы – Мекке қаласының қасиеттілігінің дәлелі ретінде Құран сүресінде арнайы баяндалған хикая...',
          leftOffset: 45,
          extendedDescription: 'Піл оқиғасы – Мекке қаласының қасиеттілігінің дәлелі ретінде Құран сүресінде арнайы баяндалған хикая...',
          summary: 'Бұл дәрісте Пайғамбар Мұхаммедтің (с.а.с) пайғамбарлық кезеңінен бұрынғы уақыттағы Мекке қаласының өмірі баяндалады. Мекке, саудагерлердің және Қағбаға тәуап етушілердің орталығы ретінде өркендеген...',
          questions: [
            {
              id: 1,
              questionText: 'Піл оқиғасы қай жылы болды?',
              answerOptions: [
                {
                  id: 1,
                  answerText: '570 жылы',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: '572 жылы',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: '573 жылы',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: '571 жылы',
                  isRight: true,
                },
                {
                  id: 5,
                  answerText: '569 жылы',
                  isRight: false,
                }
              ]
            },
            {
              id: 2,
              questionText: 'Пайғамбар Мұхаммедтің (с.а.с) әкесінің аты',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Абдуллах',
                  isRight: true,
                },
                {
                  id: 2,
                  answerText: 'Абдульмутталиб',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Абу Талиб',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Хамза',
                  isRight: false,
                },
                {
                  id: 5,
                  answerText: 'Абуль Хакам',
                  isRight: false,
                }
              ]
            },
            // {
            //   id: 3,
            //   questionText: 'Question 3 text',
            //   answerOptions: [
            //     {
            //       id: 1,
            //       answerText: 'Answer 1',
            //       isRight: false,
            //     },
            //     {
            //       id: 2,
            //       answerText: 'Answer 2',
            //       isRight: false,
            //     },
            //     {
            //       id: 3,
            //       answerText: 'Answer 3',
            //       isRight: false,
            //     },
            //     {
            //       id: 4,
            //       answerText: 'Answer 4',
            //       isRight: false,
            //     },
            //     {
            //       id: 5,
            //       answerText: 'Answer 5',
            //       isRight: true,
            //     }
            //   ]
            // }
          ]
        },
        {
          id: 2,
          isFinished: false,
          name: 'ХАЗІРЕТ МҰХАММЕДТІҢ (ﷺ) БАЛАЛЫҚ ШАҒЫ',
          description: 'Lesson 2 description',
          leftOffset: 37,
          extendedDescription: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          summary: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          questions: [
            {
              id: 1,
              questionText: 'Question 1 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: true,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: false,
                }
              ]
            },
            {
              id: 2,
              questionText: 'Question 2 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: false,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: true,
                }
              ]
            },
            {
              id: 3,
              questionText: 'Question 3 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: false,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: true,
                }
              ]
            }
          ]
        },
        {
          id: 3,
          isFinished: false,
          name: 'Lesson 3 name',
          description: 'Lesson 3 description',
          leftOffset: 29,
          extendedDescription: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          summary: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          questions: [
            {
              id: 1,
              questionText: 'Question 1 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: true,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: false,
                }
              ]
            },
            {
              id: 2,
              questionText: 'Question 2 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: false,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: true,
                }
              ]
            },
            {
              id: 3,
              questionText: 'Question 3 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: false,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: true,
                }
              ]
            }
          ]
        },
        {
          id: 4,
          isFinished: false,
          name: 'Lesson 4 name',
          description: 'Lesson 4 description',
          leftOffset: 37,
          extendedDescription: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          summary: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          questions: [
            {
              id: 1,
              questionText: 'Question 1 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: true,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: false,
                }
              ]
            },
            {
              id: 2,
              questionText: 'Question 2 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: false,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: true,
                }
              ]
            },
            {
              id: 3,
              questionText: 'Question 3 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: false,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: true,
                }
              ]
            }
          ]
        },
        {
          id: 5,
          isFinished: false,
          name: 'Lesson 5 name',
          description: 'Lesson 5 description',
          leftOffset: 45,
          extendedDescription: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          summary: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          questions: [
            {
              id: 1,
              questionText: 'Question 1 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: true,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: false,
                }
              ]
            },
            {
              id: 2,
              questionText: 'Question 2 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: false,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: true,
                }
              ]
            },
            {
              id: 3,
              questionText: 'Question 3 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: false,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: true,
                }
              ]
            }
          ]
        },
      ]
    },
    {
      id: 2,
      part: 'Тарау 1, бөлім 2',
      title: 'ХАЗІРЕТ МҰХАММЕДТІҢ (ﷺ) БАЛАЛЫҚ ШАҒЫ',
      lessons: [
        {
          id: 1,
          isFinished: true,
          name: 'Lesson 1 name',
          description: 'Lesson 1 description',
          leftOffset: 45,
          extendedDescription: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          summary: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          questions: [
            {
              id: 1,
              questionText: 'Question 1 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: true,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: false,
                }
              ]
            },
            {
              id: 2,
              questionText: 'Question 2 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: false,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: true,
                }
              ]
            },
            {
              id: 3,
              questionText: 'Question 3 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: false,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: true,
                }
              ]
            }
          ]
        },
        {
          id: 2,
          isFinished: false,
          name: 'Lesson 2 name',
          description: 'Lesson 2 description',
          leftOffset: 52,
          extendedDescription: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          summary: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          questions: [
            {
              id: 1,
              questionText: 'Question 1 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: true,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: false,
                }
              ]
            },
            {
              id: 2,
              questionText: 'Question 2 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: false,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: true,
                }
              ]
            },
            {
              id: 3,
              questionText: 'Question 3 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: false,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: true,
                }
              ]
            }
          ]
        },
        {
          id: 3,
          isFinished: false,
          name: 'Lesson 3 name',
          description: 'Lesson 3 description',
          leftOffset: 59,
          extendedDescription: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          summary: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          questions: [
            {
              id: 1,
              questionText: 'Question 1 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: true,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: false,
                }
              ]
            },
            {
              id: 2,
              questionText: 'Question 2 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: false,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: true,
                }
              ]
            },
            {
              id: 3,
              questionText: 'Question 3 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: false,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: true,
                }
              ]
            }
          ]
        },
        {
          id: 4,
          isFinished: false,
          name: 'Lesson 4 name',
          description: 'Lesson 4 description',
          leftOffset: 52,
          extendedDescription: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          summary: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          questions: [
            {
              id: 1,
              questionText: 'Question 1 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: true,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: false,
                }
              ]
            },
            {
              id: 2,
              questionText: 'Question 2 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: false,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: true,
                }
              ]
            },
            {
              id: 3,
              questionText: 'Question 3 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: false,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: true,
                }
              ]
            }
          ]
        },
        {
          id: 5,
          isFinished: false,
          name: 'Lesson 5 name',
          description: 'Lesson 5 description',
          leftOffset: 45,
          extendedDescription: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          summary: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          questions: [
            {
              id: 1,
              questionText: 'Question 1 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: true,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: false,
                }
              ]
            },
            {
              id: 2,
              questionText: 'Question 2 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: false,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: true,
                }
              ]
            },
            {
              id: 3,
              questionText: 'Question 3 text',
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: false,
                },
                {
                  id: 2,
                  answerText: 'Answer 2',
                  isRight: false,
                },
                {
                  id: 3,
                  answerText: 'Answer 3',
                  isRight: false,
                },
                {
                  id: 4,
                  answerText: 'Answer 4',
                  isRight: false,
                },
                {
                  id: 5,
                  answerText: 'Answer 5',
                  isRight: true,
                }
              ]
            }
          ]
        },
      ]
    },
  ]
};

// const initialState: IInitialState = {
//   lessons: [
//     {
//       id: 1,
//       isFinished: true,
//       name: 'Lesson 1 name',
//       description: 'Lesson 1 description',
//       leftOffset: 45,
//       extendedDescription: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
//       summary: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
//       questions: [
//         {
//           id: 1,
//           questionText: 'Question 1 text',
//           answerOptions: [
//             {
//               id: 1,
//               answerText: 'Answer 1',
//               isRight: false,
//             },
//             {
//               id: 2,
//               answerText: 'Answer 2',
//               isRight: false,
//             },
//             {
//               id: 3,
//               answerText: 'Answer 3',
//               isRight: false,
//             },
//             {
//               id: 4,
//               answerText: 'Answer 4',
//               isRight: true,
//             },
//             {
//               id: 5,
//               answerText: 'Answer 5',
//               isRight: false,
//             }
//           ]
//         },
//         {
//           id: 2,
//           questionText: 'Question 2 text',
//           answerOptions: [
//             {
//               id: 1,
//               answerText: 'Answer 1',
//               isRight: false,
//             },
//             {
//               id: 2,
//               answerText: 'Answer 2',
//               isRight: false,
//             },
//             {
//               id: 3,
//               answerText: 'Answer 3',
//               isRight: false,
//             },
//             {
//               id: 4,
//               answerText: 'Answer 4',
//               isRight: false,
//             },
//             {
//               id: 5,
//               answerText: 'Answer 5',
//               isRight: true,
//             }
//           ]
//         },
//         {
//           id: 3,
//           questionText: 'Question 3 text',
//           answerOptions: [
//             {
//               id: 1,
//               answerText: 'Answer 1',
//               isRight: false,
//             },
//             {
//               id: 2,
//               answerText: 'Answer 2',
//               isRight: false,
//             },
//             {
//               id: 3,
//               answerText: 'Answer 3',
//               isRight: false,
//             },
//             {
//               id: 4,
//               answerText: 'Answer 4',
//               isRight: false,
//             },
//             {
//               id: 5,
//               answerText: 'Answer 5',
//               isRight: true,
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: 2,
//       isFinished: false,
//       name: 'Lesson 2 name',
//       description: 'Lesson 2 description',
//       leftOffset: 37,
//       extendedDescription: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
//       summary: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
//       questions: [
//         {
//           id: 1,
//           questionText: 'Question 1 text',
//           answerOptions: [
//             {
//               id: 1,
//               answerText: 'Answer 1',
//               isRight: false,
//             },
//             {
//               id: 2,
//               answerText: 'Answer 2',
//               isRight: true,
//             },
//             {
//               id: 3,
//               answerText: 'Answer 3',
//               isRight: false,
//             },
//             {
//               id: 4,
//               answerText: 'Answer 4',
//               isRight: false,
//             },
//             {
//               id: 5,
//               answerText: 'Answer 5',
//               isRight: false,
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: 3,
//       isFinished: false,
//       name: 'Lesson 3 name',
//       description: 'Lesson 3 description',
//       leftOffset: 29,
//       extendedDescription: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
//       summary: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
//       questions: [
//         {
//           id: 1,
//           questionText: 'Question 1 text',
//           answerOptions: [
//             {
//               id: 1,
//               answerText: 'Answer 1',
//               isRight: false,
//             },
//             {
//               id: 2,
//               answerText: 'Answer 2',
//               isRight: false,
//             },
//             {
//               id: 3,
//               answerText: 'Answer 3',
//               isRight: false,
//             },
//             {
//               id: 4,
//               answerText: 'Answer 4',
//               isRight: false,
//             },
//             {
//               id: 5,
//               answerText: 'Answer 5',
//               isRight: true,
//             }
//           ]
//         }
//       ]
//     },
//   ],
// }

export const lessonsSlice = createSlice({
  name: 'lessons',
  initialState: initialState,
  reducers: {
    markLessonAsFinished: (state, action: PayloadAction<ILessonFinishedPayload>) => {
      const chapterInd = state.lessons.findIndex((storeChapter) => storeChapter.id === action.payload.chapterId);
      if (chapterInd !== -1) {
        const lessonInd = state.lessons[chapterInd].lessons.findIndex((storeLesson) => storeLesson.id === action.payload.lessonId);
        if (lessonInd !== -1) {
          state.lessons[chapterInd].lessons[lessonInd].isFinished = true;
        }
      }
    },
  }
});

export const { markLessonAsFinished } = lessonsSlice.actions;

export default lessonsSlice.reducer;