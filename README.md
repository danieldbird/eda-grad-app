# EDA Grad Helper: Multi-day project for Kahikatea 2022

## General idea
The purpose of this app is to help new grads from EDA stay in touch, work together, and navigate the post-bootcamp environment.

(But really, it's a way of having a modular multi-day project with infinite scope for expansion, so cohort members can 'hop in and out' when they have the time or want to pair program.)

## Getting set up
- Clone down the repo
- Run `npm i`
- (When we have the db set up - not yet) Run `knex migrate:latest`, then `knex seed:run`
- Run `npm start` to see the app in development mode and `npm run build` to see it in production mode
- Look through the [existing issues](https://github.com/danieldbird/eda-grad-app/issues) and find one you want to work on (or submit a new one). Make sure you assign yourself to the issue to avoid doubling up. At the moment, these issues are mostly big 'idea-type' things to work on, so you might want to create a smaller, bite-sized issue first.
- Check out a feature branch with the issue number and a descriptive name (like `#1-auth0-setup`, or `#23-add-chat-unit-tests`), then create your code.
- Create a test for your code.
- Run `npm test` and make sure nothing is broken.
- Create a pull request to `main`.
