## Design Doc

### Purpose

Create a whole web by copyign a platform I know very well.

### Description

Create basic features of Meetup. Groups, Events, Members, and Calendar.

### Goals

- Create UI from screen shots
- Create basic functionality by observing use cases
- Create back end in PHP and Symfony
- Complete large project based via tickets and PRs

### Don't

- Upgrade features
- Improve UI

### Milestones

- Create Groups page
  - UI and Front end
  - Backend
  - Databse
- Create Event page
  - Same
- Create User pages
  - Same
- Create home page
  - Create each feature in solation

### Features

**We are listing basic features for now and will update as each of the sub-features needs to be better fleshed out**

- Home page
- Groups you organize
- Next event your hostign
- Calendar wiht dot for event
- Scroll of evnets
  - Your group events
  - Sujested events
- Groups you are a part of
- Your interests

- Groups
- Tabs: About, Events, Memberrs, Photos, Discussions, More
- “What we’re about”
- Social media share buttons
- Members list
- Upcoming events scroll

- Events
- Title
- Picture
- Description
- Attendees
- Photos
- Organizer Tools drop down
- Attend bottom bar

- User profile
  - GROUP profile:
    - Title
    - Message
    - Location
    - Joined group
    - Shared groups
    - Intro
    - Age
    - Activity interests
  - FULL profile:
    - Name
    - Title
    - Location
    - Member since
    - Age
    - Activty interest
    - Introduction
    - Member of groups

### UI

- Homepage: 
![Screen Shot 2023-02-07 at 1 51 12 PM](https://user-images.githubusercontent.com/11698908/217375968-615398d9-c62b-49d3-b8b6-b1c9483cf842.png)

- Group page: 
![Screen Shot 2023-02-07 at 1 52 53 PM](https://user-images.githubusercontent.com/11698908/217376056-03f790e6-19cb-4833-84f4-a10677bed2cf.png)

- Event page: 
![Screen Shot 2023-02-07 at 1 53 06 PM](https://user-images.githubusercontent.com/11698908/217376122-0bd7b48e-0cc9-4a05-9172-2e1e719c4f6e.png)

- User profile: 
![Screen Shot 2023-02-07 at 1 53 18 PM](https://user-images.githubusercontent.com/11698908/217376191-1a4ddb8e-a596-4608-aaaf-090d50ad8626.png)
![Screen Shot 2023-02-07 at 1 53 26 PM](https://user-images.githubusercontent.com/11698908/217376227-3fe64884-fec0-49c7-a858-4c74ce4adc72.png)


### Frontend

- What: React
- Why: I want to learn react again. I'm looking for a job. Most of these feature can be helped wiht react plusins
- What: Tailwind 
- Why: I want to USE my skills to create an exact copy and Tailwind offers gradular controls

### Backend

- What: PHP/Symfony
- Why: There are many PHP jobs. Also I want to master Symfony more

### Database

- todo: Should I just use MongoDB because I'm already learning it?
- todo: MySQL: does this use case fit this? 
  - Answer: It can be used for this.
- todo: MongoDB: does this use case fit this?
  - Answer: Aggregating all the events on the home page is good use case.
- todo: What does meetup actually use?
  - Answer: MySQL. I think its just because the company is old.

- todo: Redis:
  - Can that help it laod faster?
  - How much work will it be?
