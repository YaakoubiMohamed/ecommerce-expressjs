module.exports = {
    "database":{
        "host": "localhost", //127.0.0.1
        "port": 3306,
        "user": "root",
        "password": "",
        "database": "e-commerce"
    },
    "pool":{
        "max": 5, // nombre max de connexion ouverts en meme temps
        "min": 0, //  nombre min de connexions ouvertes (connexions vides)
        "acquire": 30000,  // Temps maximum en millisecondes pendant la quel pool essayer de faire une connexion avant de renvoyer une erreur
        "idle": 10000 //  Temps d'inactivité avant que la connexion ne soit fermée
    }
}