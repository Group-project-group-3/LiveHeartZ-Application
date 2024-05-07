# LiveHeartZ-Application
Blood Bank and Donation Management System
A brief description of what this project does and who it's for

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed the latest version of [Node.js](https://nodejs.org/)
* You have a [MongoDB](https://www.mongodb.com/) database running locally or remotely
* You have npm installed (npm is distributed with Node.js - which means that when you download Node.js, you automatically get npm installed on your computer)

## Installing LiveHeartZ-Application

To install LiveHeartZ-Application, follow these steps:

### Linux and macOS:
`git clone https://github.com/yourusername/LiveHeartZ-Application.git`

`cd LiveHeartZ-Application`

`npm install`


### Windows:
`git clone https://github.com/yourusername/LiveHeartZ-Application.git`

`cd LiveHeartZ-Application`

`npm install`

## Configuring MongoDB

1. Make sure MongoDB is running on your machine or use a remote MongoDB server.
2. Configure your MongoDB URI in the `index.js` file or as an environment variable:

   DB_URI=mongodb://yourMongoDBUriHere

## Running LiveHeartZ-Application

To run LiveHeartZ-Application, follow these steps:

1.Open a terminal window.
2.Navigate to the LiveHeartZ-Application directory:

`cd LiveHeartZ-Application`

3.Start the backend server:

`cd Backend`

`npm start`

4.Open another terminal window (or tab).
5.Navigate to the frontend React application directory:

`cd LiveHeartZ-Application/Frontend/blood_bank`

6.Start the frontend React application:

`npm run dev`

This will start the backend server on [http://localhost:5000](http://localhost:5000) and the frontend React application on [http://localhost:3000](http://localhost:3000).


## Using LiveHeartZ-Application

Now that your application is running, you can access the front end in a web browser at `http://localhost:3000`.
The backend API can be accessed at `http://localhost:5000/api`.

## Contributing to LiveHeartZ-Application

To contribute to LiveHeartZ-Application, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contact

If you have any questions, you can reach me at [nufla2017@gmail.com](mailto:nufla2017@gmail.com).

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

