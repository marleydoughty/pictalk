# PicTalk

A full stack JavaScript web application designed to help speech-impaired users communicate.

This project was inspired by my experiences working with children with disabilities and being a big proponent for accessibility and equity.

### Live Demo

Take a look for yourself and let me know your thoughts! [https://pic-talk.herokuapp.com](https://pic-talk.herokuapp.com)

### Technologies Used

- React.js
- Webpack
- Node.js
- Express
- PostgreSQL
- SQL
- Babel
- HTML5
- CSS3
- Heroku

### Preview


### Features

- Users can create an account
- Users can touch icons to add to the sentence strip
- Users can delete icons from the sentence strip
- Users can play a constructed sentence
- Users can view a 'Folders' page that organizes icons by category
- Users can view a settings page that gives account info and logout abilities

### Proposed features

- Users can upload/create customized icons
- Users can save frequently-used sentences/phrases

### System Requirements

- Node.js 10 or higher
- NPM 6 or higher
- Postgres

### Getting Started

1. Clone the repository
    ```shell
    git clone https://github.com/marleydoughty/pictalk
    cd pictalk
    ```
3. Install all dependencies with NPM
    ```shell
    npm install
    ```
5. Make a copy of the .env.example file
   ```shell
   cp .env.example .env
   ```
7. Start postgreSQL
   ```shell
   sudo service postgresql start
   ```
9. Create a new database
   ```shell
   createdb pictalk
   ```
11. Import the database into postgreSQL
    ```shell
    npm run db:import
    ```
13. Start the project. Once started you can view the application by opening http://localhost:3000 in your browser.
    ```shell
    npm run dev
    ```
