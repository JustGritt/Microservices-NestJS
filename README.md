## Explication du projet

### Docker
Notre projet est un projet dockerizer avec nest js. 
Un docker-compose adapter à la production, qui va se baser sur un dockerfile pour construire l'image custom de notre application.

### Nest js
Nous avons trois microservices qui sont :
- auth-service
- product-service
- payment-service

Ces trois communiquent entre eux via GRPC.
le product-service et le payment-service demande une authentification pour pouvoir sauvegarder les requetes.

#### Auth-service
C'est le service d'authentification, il permet de créer un utilisateur et de se connecter avec un utilisateur existant.
- Il utilise une base de données mongo pour stocker les utilisateurs.
- Il utilise un service jwt pour générer des tokens.
- Il contient un handler GRPC pour permettre aux autres services de vérifier les tokens.
- Il réunit à lui seul du REST et du GRPC. (pour en l'occurence la création d'utilisateur et la connexion, et aussi la vérification de token)
- `http://localhost:3004/api/auth/login` pour se connecter
payload:
```json
    {
        "email": "john@doe.com",
        "password": "password"
    }
```

- `http://localhost:3004/api/auth/register` pour créer un utilisateur
payload:
```json
    {
        "email": "test@test.fr",
        "lastname": "qqsqsqs",
        "firstname": "sqsqs",
        "password": "fdhgh"
    }
```

#### Product-service
C'est le service qui permet de gérer les produits.
- Il utilise une base de données mariadb pour stocker les produits.
- Il communique avec le `auth-service` pour vérifier les tokens.

`http://localhost:3002` pour créer un produit
| Cette route est protégée |
| --- |
| il faut donc se connecter pour pouvoir l'utiliser. Un `bearer token` fera l'affaire |


payload:
```json
    {
        "name": "test",
        "price": 10
    }
```

#### Payment-service
C'est le service qui permet de gérer les paiements.
- Il utilise une base de données mongo pour stocker les paiements.
- Il communique avec le `auth-service` pour vérifier les tokens.

`http://localhost:3000/payment` pour créer un payment
payload:
```json
    {
        "products": [
            {
                "id": 0
            },
            {
                "id": 1
            }
        ],
        "card": "4539981107142377"
    }
```

| Cette route est protégée |
| --- |
| il faut donc se connecter pour pouvoir l'utiliser. Un `bearer token` fera l'affaire |


Les ids des produits sont ceux qui sont dans la base de données du service `product-api`. Créez des produits avec le product-service pour avoir des `ids` à renseigner.





