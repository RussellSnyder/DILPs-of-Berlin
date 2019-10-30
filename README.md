https://www.programwitherik.com/how-to-setup-your-ember-project-with-mongo-and-node/


## To Run

### Install packages

backend
```
cd backend && npm i
```

frontend
```
cd frontend && npm i
```

for mongodb, follow https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

### Run stuff

db
```
brew services start mongodb-community@4.2
```

backend
```
node server.js
```

frontend
```
ember server --proxy http://127.0.0.1:3000
```

## Future Plans

- Containerize and put on Docker hub

