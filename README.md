# Frontend CRUD App: Player Management App

It is a single-page frontend application to show the CRUD skills in React

## Built with the following tech stack

- [Node.js](www.nodejs.org)
- [npm](https://www.npmjs.com/)
- [ES6](http://es6-features.org/)
- [React](https://reactjs.org/)
- [React-DOM](https://reactjs.org/docs/react-dom.html)
- [create-react-app](https://github.com/facebook/create-react-app)
- [React-Redux](https://github.com/reduxjs/react-redux)
- [Redux](https://github.com/reduxjs/redux)
- [Redux-thunk](https://github.com/reduxjs/redux-thunk)
- [PropTypes](https://www.npmjs.com/package/prop-types)
- webpack (create-react-app uses it, didn't set it manually)
- ESLint
  - eslint:recommended
  - plugin:react/recommended,
  - plugin:prettier/recommended
- Stylelint
- Pure CSS
- [react-bootstrap](https://react-bootstrap.netlify.app/)
- [boostrap](https://getbootstrap.com/)

### Prerequisites:

Run the API server by cloning the [API server](https://github.com/g-loot/frontend-assignment). It must start running in [http://localhost:3000](http://localhost:3000) in the your local machine.

**IMPORTANT NOTE!**
The following line must be added to the CORS Policy generator in API. The following lines of code in index.js file in API must be updated.

**As Is:**

```
/* Add CORS-headers to every request */
function allowCorsMiddleware(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}
```

**To Be:**

```
/* Add CORS-headers to every request */
function allowCorsMiddleware(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}
```

### Setup

Clone the repo by typing

```
git clone https://github.com/RaminMammadzada/frontend-app.git
```

Install packages with

```
  npm install
```

Start server with:

```
  npm start
```

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

### Unit tests

Testing is not done yet for the project, though after it is done you can type the following command to test.

```
npm run test

```

## Author

👤 **Ramin Mammadzada**

- Github: [@raminmammadzada](https://github.com/raminmammadzada)
- Twitter: [@raminmammadzada](https://twitter.com/raminmammadzada)
- Linkedin: [Ramin Mammadzada](https://www.linkedin.com/in/raminmammadzada/)

### Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/RaminMammadzada/react-redux-SpaceX/issues)

### Show your support

Give a star if you like this project!
