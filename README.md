## Explication du projet

### Docker
Notre projet est un projet dockerizer avec nest js. 
Un docker-compose adapter à la production, qui va se baser sur un dockerfile pour construire l'image custom de notre application.


### Arborecence
```sh
    auth-api/ # Notre application pour l'autentification"
    ├── migrations/  
    ├── modules
    │   ├── app.module.ts
    │   ├── common/  # The common module contains pipes, guards, service and provider used in the whole application
    │   ├── passenger/  # A module example that manages "passenger" resources
    │   │   ├── controller/
    │   │   │   └── passenger.controller.ts
    │   │   ├── flow/  # The "flow" directory contains the pipes, interceptors and everything that may change the request or response flow
    │   │   │   └── passenger.pipe.ts
    │   │   ├── model/
    │   │   │   ├── passenger.data.ts  # The model that will be returned in the response
    │   │   │   ├── passenger.entity.ts  # The actual TypeORM entity
    │   │   │   └── passenger.input.ts  # The model that is used in the request
    │   │   ├── passenger.module.ts
    │   │   ├── service/
    │   │   │   └── passenger.service.ts
    │   │   └── spec/
    │   └── tokens.ts
    └── server.ts
    |── migrations/  # TypeORM migrations created using "npm run migration:create"
    ├── modules
    │   ├── app.module.ts
    │   ├── common/  # The common module contains pipes, guards, service and provider used in the whole application
    │   ├── passenger/  # A module example that manages "passenger" resources
    │   │   ├── controller/
    │   │   │   └── passenger.controller.ts
    │   │   ├── flow/  # The "flow" directory contains the pipes, interceptors and everything that may change the request or response flow
    │   │   │   └── passenger.pipe.ts
    │   │   ├── model/
    │   │   │   ├── passenger.data.ts  # The model that will be returned in the response
    │   │   │   ├── passenger.entity.ts  # The actual TypeORM entity
    │   │   │   └── passenger.input.ts  # The model that is used in the request
    │   │   ├── passenger.module.ts
    │   │   ├── service/
    │   │   │   └── passenger.service.ts
    │   │   └── spec/
    │   └── tokens.ts
    └── server.ts
```

