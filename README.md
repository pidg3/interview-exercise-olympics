#  Olympics Medal Explorer

## Background

This project is designed to be used during an interview for a front end, back end (Node) or full stack engineering role. 

It isn't designed to represent 'perfect' code!

During the interview, we'll ask you to build on this basic app and add a few new features, along with a little bit of refactoring. We will also ask you to review a Pull Request.

Prep required: 
- Clone the repo onto the device you'll be bringing to the interview. (If you're not able to bring a laptop to the interview, it isn't a problem - just let us know and we'll make arrangements for you to borrow a MacBook).
- Follow the instructions below to spin up the app.
- Make sure you understand the basics of the core technologies used: particularly React for FE, Koa for BE. 
- Have a look through the code and gain an understanding of how the app hangs together. 
- Have a think about code quality: what does this skeleton app get right, and what would you be been to refactor if you inherited the project in real life? 

## About the App

- Skeleton application for a service designed to search Olympics medal data since 1945. Currently just gives first 10 entries
- Front and back end are tightly coupled (although can be tested independently). Located in subdirectories: `/frontend` and `/backend`.
- Node 12.14.0 used
- Prettier script defined at top level, to run: `npm run prettify`

### Frontend

- Built with create-react-app
- To set up: `cd frontend`, `npm i`
- To run: `npm start`. Runs on `localhost:3000`
- To test: `npm run test`

### Backend

- Koa/Koa-router used
- To set up: `cd backend`, `npm i`
- To run: `npm run dev`. Runs on `localhost:4000`
- To test: `npm run test` (nb - no proper tests at the moment, framework stubbed out)
- Single endpoint defined: `/medals`
  - Returns an array of medal winners
  - No auth requirements yet
  - Pagination is support via `limit` and `offset` query parameters

## FOR DIEGO/RUSSELL

### PR

For the Pull Request. I'd probably expect people to pick up on most of the following: 

- Good to refactor to use async/await, but there is a major design change here in that we parse the csv each time a request is made, as opposed to loading into memory when app first loaded. Have we considered performance implications of this? 
- Tests: good coverage however this is based on the same data source used for the actual app. Might want to consider mocking out sample data instead. 
- The way we do the filtering in app.js. We might want to break this out into a separate business logic file. Also we can do this as a `filter` rather than `forEach`. 
- The filtering requires an exact rather than partial match, and is case sensitive. Have we checked this with the PO? 
- Commit messages: helpful to add more description as opposed to 'wip'. 
- We don't handle `reject` on the promise in parser.js. Need to add try/catch. 

I'm sure there will be other (unintentional) stuff too 😉 It will also be interesting to see the tone of their feedback, and whether they mention they would normally speak to the dev in person. 

### Exercises

Possible exercises we could get people to do. We'd probably tweak these on the hoof depending on the candidate's experience. Full stack will be some combination of the two. 

FE only:
  - Add pagination to the table
  - Add filtering by Name/Event/Year to the table (after merging in PR)
  - Add error handling to API call
  - Relace the 'Gold/Silver/Gold' copy with icons

BE only:
  - Add the actual country to the response. The data required for this is in the 'fixtures' folder.
  - Add a new endpoint to expose country/NOC data
  - Add a basic caching layer
  - Add proper error handling and logging
  - Implement any suggested changes from PR review
