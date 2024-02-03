import self from "../img/self.jpg"
import Projet7 from "../img/Projet7.jpg"
import kasa from '../img/kasa.png'
import bookie from '../img/bookie.png'
import sophieBluel from '../img/Sophie Bluel.png'
import ninaCarducci from '../img/nina carducci.png'

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Mahaut",
    lastName: "Windal",
    initials: "mw", 
    position: "a junior Full Stack Developer and a Business Analyst",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by chocolate'
        },
        {
            emoji: '🌎',
            text: 'based in the French Riviera'
        },
        {
            emoji: "💼",
            text: "Business Analyst at Urssaf Caisse Nationale"
        },
        {
            emoji: "📧",
            text: "mwindal@hotmail.com"
        },
        {
            emoji: "🗣",
            text: "I speak French German and English"
        },
        {
            emoji: "👩‍👦",
            text: "Mom of a teenager"
        }
        
    ],
    socials: [
        {
            link: "https://github.com/mahaut1",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/mahaut-windal-76591b271/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
      


    ],
    bio: "Bonjour, moi c'est Mahaut! J'ai 34 ans et j'habite à Biot dans le Sud de la France. Après 7 ans dans l'Education Nationale en tant que professeure d'allemand, j'ai décidé de changer de voie et de me tourner vers le monde de l'informatique et du développement web. A la suite d'une formation de 6 mois dans le langage PHP et SQL, j'ai réussi à trouver une alternance en tant qu'analyste fonctionnelle au sein de l'Urssaf Caisse Nationale en rentrant en Bachelor 3 à Ynov Sophia Antipolis. Je passe également le titre RNCP V Dévelopeur web avec Openclassroom en parallèle. Disons que mes journées et mes week-ends sont pour l'instant très chargés! Je suis travailleuse et l'univers du développement web sous toutes ses formes me passionne.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'PHP','nodeJS','APIplateform','Symfony','SQL'],
            exposedTo: ['python', 'GO','Django','']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
    ],
    portfolio: [ 
       
        {
            title: "Projet kasa ",
            live: "https://kasa-ruby.vercel.app/",
            source: "https://github.com/mahaut1/kasa",
            image: kasa,
            description:"Ce site à été créé avec React. Compétences travaillées: Configurer la navigation entre les pages de l'application avec React Router, Initialiser une application avec Create React App, développer des éléments de l'interface d'un site web grâce à des composants React. "
            
        },
        {
            title: "Projet Au vieux grimmoire",
            live: "https://au-vieux-grimmoire2.vercel.app/", 
            source: "https://github.com/mahaut1/AuVieuxGrimmoire", 
            image: Projet7,
            description: "Site réalisé en node JS avec Express et MongoDB. Compétences travaillées: "
        },
        {
            title: "Projet Nina Carducci",
            live: "https://nina-carducci-eta.vercel.app/",
            source: "https://github.com/mahaut1/Nina_Carducci",
            image: ninaCarducci
        },
        {
            title: "Projet Sophie Bluel",
            live: "https://sophie-bluel-kx69lvu18-mahaut-windals-projects.vercel.app/",
            source: "https://github.com/mahaut1/Sophie-Bluel",
            image: sophieBluel
        },
      
        {
            title: "Projet Bookie",
            live: "https://projet-booki-omega.vercel.app/",
            source: "https://github.com/mahaut1/Projet-Booki",
            image: bookie
        },

    ]
}