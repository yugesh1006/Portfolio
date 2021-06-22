import movieApp from "../img/know your show.jpg";
import covidApp from "../img/Capture.jpg";
import rockApp from "../img/rock.jpg";

const data ={
    projects:[
       {
           id:'1',
           title:'Know Your Show',
           description:[' A better way to make your binge watch more fun and entertaining is by picking a perfect show to watch with family and friends.','"Perfect movie Better the Fun"'],
           image: movieApp,
           gitHub:'https://github.com/yugesh1006/Know_Your_Show',
           websiteLink:"https://yugesh1006.github.io/Know_Your_Show/",
       },
       {
           id:'2',
            title:'Covid Tracker',
            description:['A chart to analayse the current situation of your State and Country in clean and faster way.','"Stay Safe ,Get Vaccinated"'],
            image: covidApp,
            gitHub:'https://github.com/yugesh1006/Covid_tracker',
            websiteLink:' https://yugesh1006.github.io/Covid_tracker/'
        },
        {
            id:'3',
            title:'Rock Paper Scissors',
            description:['You might have won in Rock Paper Scissors many times try to win it now.A Game where a an input is given and is evaluated with the random input genrate and the winner is decide.','"Rock-Papper🗞️-Scissors✂️"'],
            image: rockApp,
            gitHub:'https://github.com/yugesh1006/rock-paper-scissors',
            websiteLink:'https://yugesh1006.github.io/rock-paper-scissors/'
        }       
    ],
    socailHandles:{
        email:"yugeshmessi999@gmail.com",
        insta:'https://www.instagram.com/my_r3ign/',
        linkedIn:"https://www.linkedin.com/in/yugesh-eathalapaka-b681aa194/",
        dribble:"https://dribbble.com/Yugesh1999",
        gitHub:"https://github.com/yugesh1006"
    }
} 

export default data;