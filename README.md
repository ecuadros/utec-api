# API Demo

This repo is a simple example of "How create a API with node.js"


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Ubuntu: sudo apt-get install nodejs
Option 2: wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
nvm install 8.9.1
```
### clonar repositorio
git clone https://github.com/ecuadros/rest-api-demo.git

### Installing libraries

```
sudo apt install net-tools
# npm looks for package.json
npm install
npm install nodemon -g
```

### Killing existing tasks
```
netstat -tulpn
kill -9 pID
```
## Exponiendo variables
export PDFS_PATH='/abc/Articles/Curricula/Curricula.out/pdfs/.'

## Running apis

1. Api hello world

This api expose 2 endpoints

Launch **01-hello-world.js** execute :

```
node 01-hello-world.js
nodemon 01-hello-world.js # hot deployment
```

If no errors in log, go to your browser and type :

```
http://localhost:8080/
http://localhost:8080/register
```

## Versioning

1.0.0

## Authors

* **Ernesto Cuadros**
* **Richard Leon Ingaruca** - *Initial work* - [Jrichardsz](https://github.com/jrichardsz)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
