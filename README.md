# Microservice API d'analyseur d'en-tête de requête
Microservice avec npm, Node et Espress



## Utilisation

1.  Le point de terminaison de l'API est GET /api/whoami.
2.  L'API renvoie un JSON ayant la structure `{"ipaddress": , "language": , "software": }`.
    Par exemple `{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5", "software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}`.



## Exemples

-   Entrée

    [/api/whoami](../api/whoami)


* * *


-  Sortie

    `{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5",`
   `"software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}`

