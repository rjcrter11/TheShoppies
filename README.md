# TheShoppies

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e52b59851b8d46bdaa38c0e30685e37f)](https://app.codacy.com/gh/rjcrter11/TheShoppies?utm_source=github.com&utm_medium=referral&utm_content=rjcrter11/TheShoppies&utm_campaign=Badge_Grade)

![GitHub deployments](https://img.shields.io/github/deployments/rjcrter11/TheShoppies/production?label=Vercel&logo=vercel&style=flat-square)
![License](https://img.shields.io/github/license/rjcrter11/TheShoppies?style=flat-square)

The Shoppies is an application for users to search their favorite movie titles and nominate up to five movies for the Shoppies awards.

## Live Project
[TheShoppies](https://the-shoppies-vert.vercel.app/)
## Project Overview 
The Shoppies is a single page web application build with React and styled with Sass. Movie data is supplied by the OMDb API and is managed through React's context API. 
Animations are handled with React Transitions Group for nomination animations on entering and exiting. 

### Key Features
- Search the Open Movie Database for movies
- Add and remove movies to nominations list, which are saved to local storage
- Scroll through all available movies with pagination
- Switch between light and dark mode

## Build and Installation

### Scripts 

| npm run | Description                                                                                                                                                                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| start   | Runs the app in development mode. Open http://localhost:3000 to view it in the browser. The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.                      |
| test    | Runs the test watcher in an interactive mode. By default, runs tests related to files changed since the last commit.                                                                                                                             |
| build   | Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed. |

This application uses [Create-React-App](https://github.com/facebook/create-react-app) and runs all build utils through react-scripts.

## State Management 
This project uses React's Context API to provide nomination data throughout the app. 
Context provides a way to pass data through the component tree without having to pass props down manually at every level.
In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
You can find an in depth rundown on how to use Context [here](https://reactjs.org/docs/context.html)

## Styling 

This project uses Sass for styling. Each stylesheet is located in the matching the component and imported in said component.
You can find the documentation for Sass [here](https://sass-lang.com/documentation)

## Animations 
Animations for the nominations list are handled by React Transitions Group. 
React Transitions Group exposes simple components useful for defining entering and exiting transitions. React Transition Group is not an animation library like React-Motion, it does not animate styles by itself. Instead it exposes transition stages, manages classes and group elements and manipulates the DOM in useful ways, making the implementation of actual visual transitions much easier.
Documentation can be found [here](https://reactcommunity.org/react-transition-group/)

## Todos for Future Iterations
- Add testing
- Add user registration/login/authentication
- Add an onClick method to posters to see more movie info 
- Add hyper links for movies in the nominations list to that movie's url
## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owner of this repository before making a change.


### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

I would love to hear from you about new features which would improve this app and further the aims of this project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developer first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).