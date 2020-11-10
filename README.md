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

#### Environment
**`environment.ts` && `environment.prod.ts`**
This file store environment variables. You'll also have to add your `ABLY_API_KEY` in both files. Update `.prod` when you're all good and ready to deploy to production.

#### App component
**`app.*.ts`**: This the main entry point for your application. Everything starts here. In `app.module.ts` file, you load all application components such as the voting component and ballot component. External libraries like `angular-material` also load its module importation in the file.

**`app.component.ts`**: initialise the application. For example, in this project, we initialised the `connection state` of Ably here in the `ngOnInit` function.

**`app.component.html`**: this is the application's `HTML` semantics root file. As you get familiar with the project, you'll notice every other component's `.html` gets called in this file.

#### **The ballot folder (component)**: 
this is the ballot component that handles all voting events. Such as click on `yes`, `no` or `maybe`. The ballot component also takes care of publishing votes to an Ably channel that laters appears in the voting chart component.

**`ballot.component.ts`**: You can consider this the ballot's component controller file. From interactive button clicks to publishing votes to the Ably channel is handled here.

**`ballot.component.html`**: this the presentation layer of the ballot component. HTML semantics and connecting controller events get handled here.

#### **The vote-chart folder (component)**: 
the `vote-chart` component handles the graphical representation of on-going votes. The `vote-chart` component also subscribes to the Ably channel publishing votes, as earlier mentioned in ballot component above.

**`vote-chart.component.ts`**: Generally, most angular developers considers the `*.component.ts` the Controller file, (if you're thinking from an MVC (model view controller) point of view) and the `*.component.html` the View file. The `vote-chart.component.ts` file handles subscribing gracefully to the channel and continuously listen for when there's a new vote and then adjust the graph accordingly.

**`vote-chart.component.html`**: this the presentation layer of the chart component. You can read up on [chart.js](http://chartjs.org) to understand the graph implementation in this file.

#### Finally, `ably.ts` in the **util** folder: 
The util is Not a component. However, the `util` folder holds `ably.ts` - an essential assets file. `ably.ts` implementations some Ably abstraction to ease implementation across other components.
