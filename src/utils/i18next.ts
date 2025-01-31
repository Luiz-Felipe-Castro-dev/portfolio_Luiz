import i18n from "i18next";
import { initReactI18next } from "react-i18next";



i18n
  .use(initReactI18next)
  .init({

    lng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    resources: {
      en: {
        translation: {
          home: {
            description: 'Hello! Welcome to my portfolio! See below links to external web sites and see above the website sections.',
            description2: 'To contact me send me an email at ',

          },
          navbar: {
            home: 'Home',
            about: 'About me',
            projects: 'Projects'
          },
          projects: {
            timerDescription: "This project is a timer designed to let you easily count how long you've been doing a given task.",
            rocketFoodDescription: 'This projects is is an on-line food store.',
            customCountdownDescription: 'This project counts down to a date inserted by the user.',
            spaceCreamDescription: 'This projects is a basic static website for an ice cream store.'
          },
          aboutMe:{
            description:"I'm a developer in constant development. My talents are many. I know react, typescript, node.js , html , css and javascript. I have over a year of experience  in software engineering as a full stack developer.",
            description2:"I'm always looking for growth, both personal and profesional. After all, the only limits in life are the ones you impose on yourself!"
          }
        }
      },
      es: {
        translation: {
          home: {
            description: 'Hola! bien venido a my portfolio! Abajo se tiene los enlaces externos, y arriba se tiene las secciones de la pagina web.',
            description2: 'Para contactar conmigo envía un correo electrónico a ',
          },
          navbar: {
            home: 'Home',
            about: 'Sobre mi',
            projects: 'Proyectos'
          },
          projects: {
            timerDescription: 'Este proyecto es un timer que puede facilmente contar el tiempo de una actividad usted',
            rocketFoodDescription: 'Este proyecto es una tienda de comida para la web.',
            customCountdownDescription: 'Este proyecto possibilita ver cuanto tiempo queda para una fecha que se puede elegir.',
            spaceCreamDescription: 'Este proyecto es una pagina básica de una tienda de helados.',
          },
          aboutMe:{
            description:"Soy un desarrolador en desarrollo. Mis talentos son muchos. Yo sé react, typescript, node.js , html , css , javascript. Tengo mas de un año de experiencia en desarrollo de software como un desarrollador fullstack.",
            description2:"Estoy siempre buscando crescimento, tanto personal cuanto profesional. Los únicos límites que existen en tu vida son los que te impontes a ti mismo!"
          }
        }
      },
      pt: {
        translation: {
          home: {
            description: 'Ola! Bem vindo a meu portfolio! Abaixo temos links externos e acima temos seções do site.',
            description2: 'Para me contactar mande um email para ',
          },
          navbar: {
            home: 'Home',
            about: 'Sobre mim',
            projects: 'Projetos'
          },
          projects: {
            timerDescription: 'Este Projeto é um timer que pode facilmente contar o tempo de uma atividade para você.',
            rocketFoodDescription: 'Este Projeto é uma loja de comida para web.',
            customCountdownDescription: 'Este projeto possibilita ver quanto tempo falta para um certa data.',
            spaceCreamDescription: 'Este projeto é uma pagina básica de uma loja de sorvetes.',
          },
          aboutMe:{
            description:"Sou um desenvolvedor em desenvolvimento. Meus talentos são muitos, sei react, typescript, node.js , html , css , javascript.Tenho mais de 1 ano de experiência em desenvolvimento de software tanto como desenvolvedor back end quanto desenvolvedor front end.",
            description2:"Estou sempre buscando desenvolvimento tanto profissional quanto pessoal, afinal os únicos limites da vida são os que você impõe sobre si mesmo!"
          }
        }
      }
    }
  });

export default i18n;