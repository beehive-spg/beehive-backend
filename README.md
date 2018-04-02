# Beehive Webapp Backend
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

<img src="https://i.imgur.com/VnKmMI0.png" width="20%">

beehive-backend acts as the backend part of the beehive webapp. It connects the
[frontend](https://github.com/beehive-spg/beehive-frontend) to all other parts of the project, such
as the [database](https://github.com/beehive-spg/beehive-database) and [routing
buffer](https://github.com/beehive-spg/beehive-routing-buffer). Communication between these parts is
either done via a REST service or RabbitMQ.

## Motivation
Currently this is a diploma-project of a team of four students, the other project repositories can 
be found [here](https://github.com/beehive-spg).

## Development

### Tech/Frameworks used
* [Koa](http://koajs.com)
* [Apollo Server](https://github.com/apollographql/apollo-server)
* [rabbot](https://github.com/arobson/rabbot)

### Prerequisites
For easier package handling it is advised to use [yarn](https://yarnpkg.com/en/). Also don't forget
to ```yarn install```.

## Usage
To get up and running execute ```yarn start``` which will start up a development server on port
8080. 

To execute GraphQL queries go to [http://localhost:8080/graphiql](http://localhost:8080/graphiql).
