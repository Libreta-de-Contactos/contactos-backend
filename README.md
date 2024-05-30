# contact-book

This project is the API-REST for the project found in "contactos-fronted". Remember to download and run said project to visualize the project.


## Project Setup

```sh
npm install
```

```sh
run in your data base the setupDb.sql script found in the /migrations 
```

```sh
create a file '.env'  and add : 

PORT=3002

DATABASE_URI=mysql://'you-user':'you-password'@localhost:'port-of-your-Db'/contact_book_db

DATABASE_URI_PLANE=mysql://'you-user':'you-password'@localhost:'port-of-your-Db'

JWT_SECRET_KEY='choose a secret key'
```

### Compile and Run

```sh
npm run dev
```


