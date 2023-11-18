[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/xhlg1JLx)

# Demo
- [Link to Demo](https://youtu.be/OeKsvSf3R64)

# App Overview
Final Product: Website to track workouts. The web app will allow users to save their progress (weight and reps) for each exercise they complete every workout. Users will also be able to build templates for each day of the workout split, consisting of the exercising they choose.

Current Version: Due to time limitations, not all features were implemented. In this version, users can create different exercises and create sets for each exercise. Template and workout features are not implemented.

## The components and technologies utilized for this app are as follows:
- Frontend: Frontend will be built with React to provide a flexible user interface. It will allow users to update and view information, through the backend, saved in the database.
- Backend: Backend will be built with the Flask microframework. It will respond to requests from front end to query or input data into database.
- Database: A mySQL database will be setup to store all user data. It is hosted on [Planet Scale](https://www.planetscale.com)

## Overview of Mechanics
- The database will consist of a number of workout exercise entries with:
    - exercise name and up to N sets of weight: workout pairs
- Exercise entries will be assigned to particular workouts, as indicated by user


# Running the webapp

## Requirements
- must have python3 installed. This project was built in python version 3.10.12
- must have node.js installed on the system. This project was built in node version 8.19.2
- run `sudo apt-get install python3-dev default-libmysqlclient-dev build-essential ` to install mysqldb package

## Setup
- Create the file `backend/.env` and add the line `DATABASE_URI='mysql://username:password@hostname/workout-db'` where "username" and "password" are used to log in to a mysql server being hosted by "hostname".
- Before running this app for the first time, initialize the database. Run the following commands
    ```
    cd backend
    python3 -m venv env
    source env/bin/activate
    pip3 install -r requirements.txt
    env/bin/flask shell
    >>> db.create_all()
    ```

## Start the Server
- Run the start script with `./run_app.py` to start the gunicorn flask server and to serve the static react build

## Stop the Server
- To stop the React process, hit `^C` on the shell running `./run_app.py`
- To stop the Flask server, stop the gunicorn process by finding its pid or running the command `pkill gunicorn`.


# Usage
- After starting the app, it will be available at [http://localhost:3000](http://localhost:3000)
- Click the "Create new exercise" button to create a new exercise
- Hover over the "Choose an exercise" button to choose from a scrollable list of exercises
- Click the "New Set" button to record a new set for the currently selected exercise
