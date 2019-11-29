[![Build Status](https://travis-ci.org/Emmyn5600/BroadCaster013.svg?branch=develop)](https://travis-ci.org/Emmyn5600/BroadCaster013)
[![Coverage Status](https://coveralls.io/repos/github/Emmyn5600/BroadCaster013/badge.svg?branch=develop)](https://coveralls.io/github/Emmyn5600/BroadCaster013?branch=develop)

# Broadcaster App
Broadcaster enables any/every one to share any incident related to corruption to be resolved and even to intervene with the governemt as long as you get any information related to bad roads section, floods and etc to be checked and solved.

# Features
- user can first interact with home page before using other pages
- User can sign up
- User can sign in
- user can contact us
- User can create a red-flag records
- User can retrive all his/her red-flag records
- User can retrieve a specified red-flag records
- User can update a comment of a red-flag records
- User can update a location of ared-flag records
- User can delete a his or her red-flag records

## Getting Started
To get started with this app you should have to follow all the instruction that are below carefully and implement it.

## Prerequisites
First all of, Install the softwares on your local machine
- Install `NodeJS` [NodeJs](https://nodejs.org/en/download/)
- Install `Git` [Git](https://git-scm.com/)
- install `Visual code`[VC](https://code.visualstudio.com/)

## Installing the App
Make sure that you have cloned this Repo to your local machine
- By running `git clone`
- or download the Ziped folder on `GitHub`
- Then after run `cd Broadcaster-013` to open the folder or simplly double on the downloaded folder
- To install all dependencies locally run this command `npm i` or `npm install` in terminal

### Scripts to use
- run `npm run dev-start` to start server
- run `npm run test` to run tests
- run `npm run coverage` to run and view test coverages

## API endpoints

**API endpoints with no authentication**
- POST `api/v1/auth/signup` User Sign up.
- POST  `api/v1/auth/signin` User Sign in.

**API endpoints with no authentication**
- POST `api/v1/red-flags` Create a red-flag
- GET `api/v1/red-flags` View all red-flag
- GET `api/v1/red-flags/:red-flag-id` Get a specific red-flag
- PATCH `api/v1/red-flags/:red-flag-id/comment` Modify a red-flag's comment
- PATCH `api/v1/red-flags/:red-flag-id/location` Modify a red-flag's location
- DELETE `api/v1/red-flags/:red-flag-id` Delete a red-flag

## GitHub Pages
- link [Broadcaster web](https://emmyn5600.github.io/BroadCaster013/UI/pages/)

### UI pages for a User Panel
- Home page for sign-up or sign-in [link](https://emmyn5600.github.io/BroadCaster013/UI/pages/index.html)
- Once the user logs-out, he or she will redict to the home page[link](https://emmyn5600.github.io/BroadCaster013/UI/pages/index.html)
- Create a Red-flag [link](https://emmyn5600.github.io/BroadCaster013/UI/pages/create.html)
- Create an Intervention [link](https://emmyn5600.github.io/BroadCaster013/UI/pages/create2.html)
- List of Red-flag or Intervention [link](https://emmyn5600.github.io/BroadCaster013/UI/pages/list.html)

### UI pages for an Admin Panel:
- Admin Sign-in [link](https://emmyn5600.github.io/BroadCaster013/UI/pages/login-2.html)
- List of available records to be investigated on, about Red-flag or Intervention [link](https://emmyn5600.github.io/BroadCaster013/UI/pages/admin.html)
- List of records in the process, about Red-flag or Intervention [link](https://emmyn5600.github.io/BroadCaster013/UI/pages/admin.html)
- List of all records, about Red-flag or Intervention [link](https://emmyn5600.github.io/BroadCaster013/UI/pages/admin.html)

## Tools Used

### Back End
* Node JS
* Express (Framework)

### Front End
* HTML
* CSS
* Javascript

## Heroku Deployment
- link [Broadcaster-app](https://broadcaster-013.herokuapp.com/)

## DOCUMENTATION
  link: [API documentation with POSTMAN](https://www.getpostman.com/api-documentation-generator)
  
  link: [API documentation with Swagger-UI]()

## Pivot Tracker Stories
[Project Stories](https://www.pivotaltracker.com/n/projects/2410642)

## Author
- NSABIMANA Emmanuel <emmy66418@gmail.com>
---

## Copyright
Copyright (c) Emmanuel NSABIMANA, Software Developer
