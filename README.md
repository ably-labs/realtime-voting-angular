# Realtime Voting Application - Powered by Ably Real-time

Hey! Welcome. This repository contains a complete real-time voting application that you can also use its source code to build a custom voting app.

The real-time messaging leverages Ably's real-time infrastructure and also uses Ably's history to manage voting history across multiple connected clients.

Check out the [functional demo](https://ably-voting-app.herokuapp.com) for the real-time voting app.

## Tech stack

### Framework/Languages

- [Angular](https://angular.io)
- [Node.js](https://nodejs.org)

### Libraries

- [Ably Real-time](https://ably.io)
- [Express](https://expressjs.com)
- [ChartJS](https://chartjs.org)

## How to run this project locally

1. Clone this repository

```shell
  git clone https://github.com/Srushtika/realtime-voting.git
```

2. Change directory to project directory

```shell
  cd realtime-voting
```

3. Install dependencies

```shell
   npm i
```

4. Create a free account with [Ably Realtime](https://ably.io) to get your Ably API KEY. 
   Replace the placeholder with your API Key in your `environment.prod.ts` and `environment.ts`.

5. Run the application:
   1. Run `ng serve` to run using angular server or
   2. Run `node server.js` to run using a custom nodejs server.

Open option `i` on [localhost:4200](http://localhost:4200) and option `ii` on [localhost://9000](http://localhost:9000)

_Voila! your application is up and running!_

> Notice `Ably connection status` at the top right corner? That shows if the application connected successfully to Ably.

## Connection Color Code

- **Yellow** - connecting
- **Red** - disconnected (Ably could not connect or connected but lost connectivity) or failed (never connected)
- **Green** - successfully connection

## Folder structure

```
  realtime-voting
      |_src
        |_assets
        |_environments
        |  |_environment.prod.ts
        |  |_environment.ts
        |_app
          |_app.component.ts
          |_app.module.ts
          |_app.component.html
          |_ ballot
          |   |_ballot.component.ts
          |   |_ballot.component.html
          |_ util
          |  |_ably.ts
          |_ vote-chart
            |_vote-chart.component.ts
            |_vote-chart.component.html
```

You can read up on how the [angular project file structure](https://angular.io/guide/file-structure#workspace-configuration-files) to gain granular of the entire project.
