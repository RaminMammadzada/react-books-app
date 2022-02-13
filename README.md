# Books Frontend App with Google Books API.


This repository is for book application to search for books using Google Books API and bookmark the books wanted. It is a single-page application to present a user authentication with JWT and CRUD skills using React. In order to get the data from backend API you need to run the backend server separately. The backend application that is designed with NodeJS can be found in [this](https://github.com/RaminMammadzada/nodejs-books-app) link.


## Built with the following tech stack

- [Node.js](www.nodejs.org)
- [npm](https://www.npmjs.com/)
- [TyepScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [React-DOM](https://reactjs.org/docs/react-dom.html)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [create-react-app](https://github.com/facebook/create-react-app)
- [React-Redux](https://github.com/reduxjs/react-redux)
- [Redux](https://github.com/reduxjs/redux)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)
- [react-bootstrap](https://react-bootstrap.netlify.app/)
- SCSS/CSS

### Prerequisites
You will need to have the following tech stack installed in your local environment.

- NodeJS v14.18.x
- npm v6.14.x

### Setup

Important!
Before following steps below, please go to this backend repository and follow all steps in that README file to set up and run backend application first. If you did it already, then you are ready to go.

Clone the repo by typing

```
git clone https://github.com/RaminMammadzada/react-books-app.git
```

Cd indo the project

```
cd react-books-app
```

Install packages with

```
  npm install
```

Start server with:

```
  npm run start
```

It will start running in PORT 3000.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Unit tests

Unit tests not implemented yet.

## Author

👤 **Ramin Mammadzada**

- Github: [@raminmammadzada](https://github.com/raminmammadzada)
- Twitter: [@raminmammadzada](https://twitter.com/raminmammadzada)
- Linkedin: [Ramin Mammadzada](https://www.linkedin.com/in/raminmammadzada/)

### Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/RaminMammadzada/react-books-app/issues)

### Show your support

Give a star if you like this project!







## Tasks to do:
- set up empty project and clean up the unimportant files
- add routes
- create presentational and container components
    - presentational:
        - homepage component
        - login component
        - register component
        - books component
        - bookmarks component
    - container components
        - book component
        - bookmark component
        - search component     
- add simple authorization and authentication logic 
- setup redux in project
- add reducers and actions for redux
- add search logic
- add authorization and authentication funcionality with API


The task is to create a simple book search and bookmarking application where users can search for any related books by title, author or keywords by using Google Books API.
