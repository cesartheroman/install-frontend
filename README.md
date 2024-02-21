# Running INSTALL Frontend App with Docker Compose

## Prerequisites

Make sure you have [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine.

## Cloning Repo

Once you have Docker and Docker-Compose installed, make sure to clone this GitHub repo by selecting the green "Code" button above and select either HTTPS or SSH, whichever you prefer. Copy the URL, open your terminal and run `git clone <copied-URL>` in whichever directory you'd like.

## Running App (First time)

Once you have cloned the repo, cd into `install-frontend/` and in your terminal run `docker-compose up --build`. This will start up Docker to pull/create the image, and run it. From there go to [localhost:8081](http://localhost:8081/) to run the app! Hit Control + C to kill the app in this first run.

## Running App (After first run)

Once you've succesfully been able to build and run the app the first time (within the `install-frontend`), you can simply use `docker-compose up -d` to run the container in detached mode. If you want to then kill the app use `docker-compose down`.

Make sure to always `git pull` for latest code changes before running `docker-compose up` to make sure you have the latest version of the app.
