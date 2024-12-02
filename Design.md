# Introduction
The app I've designed is a prototype storefront that sells Magic: The Gathering cards. It is inspired by websites such as https://www.cardmarket.com/en/Magic. 
It follows a very simple architecture model, where there are three components in a line.
Frontend <-> Backend <-> Database
Where the bidirectional arrows indicate communication going in two ways.

## The Database
I designed this first. I chose to use MongoDB because it's incredibly scalable, and probably what Cardmarket uses. It is dockerized from the official mongo image.
It stores each card's name and price. In a realistic situation, it should also have to store the user who uploaded the item for sale. It is set up to store the files locally on your machine parallell to the docker files so that added cards are retained between restarts.

## The Backend
I designed this second. It uses Node.js and Express to communicate with the backend using REST API. It is dockerized from the official node image.
I used Curl commands in my CLI to help me figure out if my backend was working or not.
I implemented basic GET and POST requests, which allow me to (GET) see all cards in the database and to (POST) add a new card to the database.

## The Frontend
This came last. I started with the default React app and then made a very basic storefront. I used the Node Alpine image because I was having memory issues specifically with the frontend.
It makes calls to the backend to see all the cards in stock and add new ones.

# Architecture Principles
I've built the app up using three separate microservices, each in their own container, that speak to each other using REST API. This makes the app modular, scalable, and standardized to other web services. If I wanted to add another feature, e.g. pull card images from one of Magic's official card databases, I could do that using REST API.
