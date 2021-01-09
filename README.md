# Whatch

Many users of streaming services struggle to find interesting content to watch with friends or partners, and beyond that, finding a show that interests everyone in the group can be challenging. Whatch is a responsive application that allows friends to create groups and swipe right or left on series/movies of their liking, creating a list and notifying group members when there’s a match.

## Demo

![](https://media.giphy.com/media/MffasupZc3u4R16zkV/giphy.gif)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. This application is *not* ready for production.

### Prerequisites

1. Install PostgreSQL 
2. My database is named `watching`
3. Run the migrations and seeds using the command `sequelize db:migrate` and `sequelize db:seed:all`


### Installing

Install `node_modules` in the *server* and *client* folders. The below command will install all dependencies at the version listed in the package-lock.json file.

1. `cd server` then `npm ci`
2. `cd client` then `npm ci`


### Running
To bring this application online, use the following commands in the order that they are listed.
1. `cd client` then `npm start`
2. `cd server` then `npm run dev`


## Built With

* [ReactJS](https://reactjs.org/) - The JS library used for this project, bootstrapped with create-react-app
* [Node](https://nodejs.org/en/) - Backend of this application, built with Express and Sequelize
* [Sass](https://sass-lang.com/) - CSS preprocessor 

## Authors

* **Bibiana Souza** - [bibschan](https://github.com/bibschan)

## Acknowledgments

* *Carolina Darski* - [caroldarski](https://github.com/caroldarski) - A HUGE thank you to my amazing mentor, who helped me architect and brainstorm this project from start to finish. 
