# Realtime Voting Application in Angular

This repository contains a complete realtime voting application. Check out the source code, customise it and make it your own!

The realtime messaging leverages [Ably's realtime infrastructure](https://www.ably.io/documentation/realtime/) and also uses [Ably's History API](https://www.ably.io/documentation/realtime/history) to manage votes' history across multiple connected clients.

Check out the [functional demo](https://ably-voting-app.herokuapp.com) to try out the realtime voting app yourself.

<img width="1426" alt="Screenshot 2020-11-10 at 17 22 50" src="https://user-images.githubusercontent.com/5900152/98709930-eaf77400-237a-11eb-9d4e-395e1b3c3628.png">


## Tech stack

### Framework/Languages

- [Angular](https://angular.io)
- [Node.js](https://nodejs.org)

### Libraries

- [Ably Realtime](https://ably.io)
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

> Notice the `Ably connection status` at the top right corner? That shows if the application is connected successfully to Ably. Make sure it's green as per below:

### Connection Color Code

- **Yellow** - connecting
- **Red** - disconnected (Ably could not connect or connected but lost connectivity) or failed (never connected)
- **Green** - successfully connection

---

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

### Understanding what's in which file

#### Environment

**`environment.ts` && `environment.prod.ts`**
This file stores environment variables. You'll have to add your `ABLY_API_KEY` in both files. Update the `.prod` file when you're ready to deploy to production.

#### App component

**`app.*.ts`**: This is the main entry point for your application. In the `app.module.ts` file, you load all application components i.e. the voting component and the ballot component. External libraries like `angular-material` also load its module importation in this file.

**`app.component.ts`**: This is where we initialize the application. In this project, we initialize the `connection state` of Ably here in the `ngOnInit` function.

**`app.component.html`**: This is the application's `HTML` semantics root file. As you get familiar with the project, you'll notice every other component's `.html` gets called in this file.

#### **The ballot folder (component)**: 

This is the ballot component that handles all the voting events i.e. the click events on `yes`, `no` or `maybe`. The ballot component also takes care of publishing votes to an [Ably channel](https://www.ably.io/documentation/core-features/channels) that later appears in the voting chart component.

**`ballot.component.ts`**: You can consider this the ballot's component controller file. This component handles the interactive button clicks leading to publishing of the votes to an Ably channel.

**`ballot.component.html`**: This is the presentation layer of the ballot component. The HTML semantics and connecting controller events get handled here.

#### **The vote-chart folder (component)**: 

The `vote-chart` component handles the graphical representation of the on-going votes. The `vote-chart` component also subscribes to the Ably channel publishing the votes, as mentioned in ballot component above.

**`vote-chart.component.ts`**: Generally, most Angular developers consider the `*.component.ts` as the 'Controller' file (if you're thinking from an MVC - model view controller point of view) and the `*.component.html` as the 'View' file. The `vote-chart.component.ts` file handles subscribing to the voting channel and continuously listen for when there's a new vote and adjust the graph accordingly.

**`vote-chart.component.html`**: This the presentation layer of the chart component. You can read up on [Chart.js](http://chartjs.org) to understand the graph implementation in this file.

#### Finally, `ably.ts` in the **util** folder: 
The `util` folder holds the `ably.ts` file which contains essential assets. The `ably.ts` file contains some Ably abstraction to ease the implementation across other components.

---

## Load tests and limits

- All of Ably's messaging limits, broken down by package can be found in a [support article](https://support.ably.com/support/solutions/articles/3000053845-do-you-have-any-connection-message-rate-or-other-limits-on-accounts-).

- We are currently performing load and performance tests on this framework and will update this guide with that info when it's available. If this is important to you, please reach out to Ably's support at [support@ably.com](mailto:support@ably.com)
