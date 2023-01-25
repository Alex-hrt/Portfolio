# Portfolio Website

This project is a fullstack web development portfolio website built using ReactJS, SASS and Sanity CMS. It is designed to showcase my skills and previous projects as a web developer, as well as my past jobs and experience. The website is designed to be user-friendly and easy to navigate, making it easy for potential clients and employers to learn more about my skills and experience. The site is also fully responsive, ensuring that it looks great on any device, from desktop computers to mobile devices. If you're a web developer looking to build a professional, effective portfolio website, this project is a great starting point.

Check out the live version on my website: [alexheritier.dev](https://www.alexheritier.dev)

## Screenshots

![App Screenshot](https://s3.eu-west-1.amazonaws.com/github.photos/alexheritier.dev.PNG)

## Tech Stack

**Client:** React, SASS

**Server:** Sanity, AWS

## Features

-   Clean and modern design
-   Optimized for both desktop and mobile devices
-   Easily modifiable thanks to the Sanity CMS
-   Styling with SASS
-   Easy navigation to view portfolio, learn more about my background and experiences, and contact me.

## File Structure

### Backend

The backend files are located in the `backend_sanity` folder. This folder contains all the necessary files for the Sanity CMS.

The schemas include:

-   About
-   Brands
-   Contact
-   Experiences
-   Skills
-   Testimonials
-   Work

All these files are `.js` files, and they contain all the fields and types of data that will be used in the website.

### Frontend

The frontend files are located in the `frontend_react` folder.

The src folder contains all the necessary files for the website including:

-   Assets folder: where all the images and svg are stored
-   Components folder: where the navbar, navigation dots and social medias are coded
-   Constants folder: to link all assets in one file
-   Container folder: where the "About", "Footer", "Header", "Skills", "Testimonial" and "Work" sections are coded

Each sections in the container folder include their respective `.jsx` and `.scss` file to be edited as you wish.

## Run Locally

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Clone the project

```bash
  git clone https://github.com/Alex-hrt/Portfolio.git
```

### Frontend

Go to the project directory

```bash
  cd frontend_react
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

The website will be available at http://localhost:3000

### Backend

The website uses Sanity as the content management system. You will need to have a Sanity account and create a new project. Once the project is created, you can import the schema and data to your local environment.

Go to the project directory

```bash
  cd backend_sanity
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

The Sanity Studio will be available at http://localhost:3333
