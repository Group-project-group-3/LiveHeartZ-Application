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

### Linux and macOS and Windows:

```bash
git clone https://github.com/yourusername/LiveHeartZ-Application.git
cd LiveHeartZ-Application
npm install
```

## Configuring MongoDB , MongoDB Compass Setup Instructions

### 1. Install MongoDB Compass

If you haven't already installed MongoDB Compass, you can download it from the MongoDB website and install it on your computer.

[Download MongoDB Compass](https://www.mongodb.com/try/download/compass)

### 2. Open MongoDB Compass

Once MongoDB Compass is installed, open the application on your computer.

### 3. Connect to MongoDB

- Launch MongoDB Compass and click on the "New Connection" button to create a new connection.

- In the "New Connection" window:
  - Paste the provided MongoDB URI into the "Connection String" field:
    ```
    mongodb+srv://nufla2017:Qy3CtKmGYrgLnTd1@cluster0.y4rjeoz.mongodb.net/LiveHeartz
    ```

  - You don't need to enter a username or password separately since they are already included in the URI.

  - Optionally, enter a name for this connection in the "Name" field to identify it in MongoDB Compass.

- Click on the "Connect" button to initiate the connection.

### 4. Verify Connection

MongoDB Compass will attempt to connect to the MongoDB server using the provided URI. If the connection is successful, you will see your MongoDB databases and collections listed in MongoDB Compass. You can then start interacting with your MongoDB databases using the GUI provided by MongoDB Compass.

## Running LiveHeartZ-Application

To run LiveHeartZ-Application, follow these steps:

1.Open a terminal window.

2.Navigate to the LiveHeartZ-Application directory:

`cd LiveHeartZ-Application`

3.Start the backend server:

`cd Backend`

`npm install`

4.Start the frontend React application:

`npm start`

5.Open another terminal window (or tab).

6.Navigate to the frontend React application directory:

`cd LiveHeartZ-Application/Frontend/blood_bank`

`npm install`

7.Start the frontend React application:

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

