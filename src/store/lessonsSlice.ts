import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IChapter, ILessonFinishedPayload } from '../interfaces';

interface IInitialState {
  lessons: IChapter[]
}

const initialState: IInitialState = {
  lessons: [
    {
      id: 1,
      part: '1-ТАРАУ',
      title: 'ХАЗІРЕТ МҰХАММЕДТІҢ (ﷺ) ДҮНИЕГЕ КЕЛУІ және БАЛАЛЫҚ ШАҒЫ',
      lessons: [
        {
          id: 1,
          isFinished: true,
          name: 'Кіріспе',
          description: 'Lesson 1 description',
          leftOffset: 25,
          extendedDescription: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          summary: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          questions: [
            {
              id: 1,
              questionText: 'Question 1 text',
              isMultipleAnswers: false,
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
              isMultipleAnswers: false,
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
              isMultipleAnswers: false,
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
          name: 'Пайғамбарымыздың (ﷺ) шежіресі',
          description: 'Lesson 2 description',
          leftOffset: 17,
          extendedDescription: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          summary: `Алланың қалауымен, бүгінгі күннен бастап Пайғамбарымыздың (ﷺ) сирасын бөлімдерге бөліп баяндауды бастаймыз. Қасиетті Рамазан айының қарсаңында екі дүние сардары, адамзат баласының ең асылы, адамдарды надандықтың түнегінен ақиқат пен бірқұдайылықтың жарығына шығарған осынау таңғаларлық адамды - біздің сүйікті Пайғамбарымыз Мұхаммедті  (ﷺ)  бізге сыйлай отырып, Алла Тағаланың  қандай рақымшылық танытқанын еске түсіру өте маңызды.

Осы рақымшылық үшін Аллаға разылығымызды әртүрлі жолдармен көрсетуге болады. Өкінішке орай, қазіргі таңда қоғамда орын алып отырған коронавирус індетіне байланысты үстіміздегі жылда Рамазан айы ерекше болайын деп тұр. Әр істе бір хайыр бар дегендей, карантинде отырып-ақ Алла разылығы үшін оразамызды ұстап, Алла Тағаламызға мадақ айтып,  Алла Елшісіне (ﷺ) салауатымызды лайықты түрде үзбей айтып жүреміз, бірақ бұл разылықтың тек қана сыртқы жора болмауы елеулі. Пайғамбарымыздың (ﷺ) шариғатқа енгізгенін және пәк сүннетін ұстануды ішкі жан-дүниемен шексіз қастерлеу әлдеқайда маңыздырақ.  Пайғамбарымыздың (ﷺ) сирасын – өмірбаянын толықтай үйренбей сүннетті ұстану мүмкін емес. Шейх Мұхаммад Таки Усмани былай жазған: «Негізінде Мәртебелі Пайғамбарымызға (ﷺ)қатысты маңыздысы, — біріншіден, оның үйреткенін ұстану, ал екіншіден, оның игі сирасын әрбір мұсылманға, ерте балалық кезден мұсылмандардың жүректерінде сақталуына жеткізу, жанұя мүшелерінің өмірін оған сәйкестіріп құруларын әрі оны әлем тарихындағы адамзат тәлімінің аса көрнекті мысалы ретінде қастерлеуге үйрету — және осының бәрі  ең үлкен сүйіспеншілік әрі дәріптеумен, әлдебір ресми жоралармен емес, нағыз сүннетті ұстану арқылы жеткізілуі тиіс.  Бұл әлдебір ресми шеру не болмаса басылымдар шығару арқылы іске аспауы керек. Бұл тұрақты және жүйелі жігерді, мақсатты бағытталған оқу бағдарламасы мен дайындықты талап етеді»[1].`,
          questions: [
            {
              id: 1,
              questionText: 'Question 1 text',
              isMultipleAnswers: false,
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
              isMultipleAnswers: false,
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
              isMultipleAnswers: true,
              answerOptions: [
                {
                  id: 1,
                  answerText: 'Answer 1',
                  isRight: true,
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
          name: 'Хазірет Мұхаммедтің (ﷺ) дүниеге келуі',
          description: 'Lesson 3 description',
          leftOffset: 12,
          extendedDescription: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          summary: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          questions: [
            {
              id: 1,
              questionText: 'Question 1 text',
              isMultipleAnswers: false,
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
              isMultipleAnswers: false,
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
              isMultipleAnswers: false,
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
          name: 'Алла елшісінің (ﷺ) балалық шағы',
          description: 'Lesson 4 description',
          leftOffset: 19,
          extendedDescription: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          summary: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          questions: [
            {
              id: 1,
              questionText: 'Question 1 text',
              isMultipleAnswers: false,
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
              isMultipleAnswers: false,
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
              isMultipleAnswers: false,
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
          name: 'Піл оқиғасы',
          description: 'Lesson 5 description',
          leftOffset: 24,
          extendedDescription: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          summary: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          questions: [
            {
              id: 1,
              questionText: 'Question 1 text',
              isMultipleAnswers: false,
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
              isMultipleAnswers: false,
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
              isMultipleAnswers: false,
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
      part: '2-ТАРАУ',
      title: 'АЛЛА ЕЛШІСІНІҢ (ﷺ) ЖАСТЫҚ ШАҒЫ ЖӘНЕ ҮЙЛЕНУІ',
      lessons: [
        {
          id: 1,
          isFinished: true,
          name: 'Хиджаздан тыс сапарлар',
          description: 'Lesson 1 description',
          leftOffset: 10,
          extendedDescription: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          summary: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          questions: [
            {
              id: 1,
              questionText: 'Question 1 text',
              isMultipleAnswers: false,
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
              isMultipleAnswers: false,
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
              isMultipleAnswers: false,
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
          name: 'Оның (ﷺ) сауда операциялары',
          description: 'Lesson 2 description',
          leftOffset: 19,
          extendedDescription: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          summary: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          questions: [
            {
              id: 1,
              questionText: 'Question 1 text',
              isMultipleAnswers: false,
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
              isMultipleAnswers: false,
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
              isMultipleAnswers: false,
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
          name: 'Мұхаммед (ﷺ) пен Хадиджаның (Алла оған разы болсын) некесі',
          description: 'Lesson 3 description',
          leftOffset: 24,
          extendedDescription: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          summary: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          questions: [
            {
              id: 1,
              questionText: 'Question 1 text',
              isMultipleAnswers: false,
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
              isMultipleAnswers: false,
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
              isMultipleAnswers: false,
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
          name: 'Қағбаны қайта құру кезіндегі дау',
          description: 'Lesson 4 description',
          leftOffset: 18,
          extendedDescription: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          summary: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          questions: [
            {
              id: 1,
              questionText: 'Question 1 text',
              isMultipleAnswers: false,
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
              isMultipleAnswers: false,
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
              isMultipleAnswers: false,
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
          name: 'Піл оқиғасы',
          description: 'Lesson 5 description',
          leftOffset: 9,
          extendedDescription: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          summary: 'Lorem ipsum dolor sit amet consectetur. Nec enim neque at massa amet mattis mi diam. Velit eu viverra odio nunc. Eu dignissim id consectetur ac nulla.',
          questions: [
            {
              id: 1,
              questionText: 'Question 1 text',
              isMultipleAnswers: false,
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
              isMultipleAnswers: false,
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
              isMultipleAnswers: false,
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