# Elofy Interview

## TODO

- [x] Create a palindrome checker. EX: ['Arara', 'Racecar' 'Anilina', 'Esse']
- [x] Create a login page that validate password input (must contain at least 6 characters), and send an api request to login.
- [ ] Backend, validate user and password.
- [ ]

---

## Set up

This repo was created using mainly [Laravel](https://laravel.com/docs/9.x/installation) and [React](https://reactjs.org), on the `backend` and `frontend` folders respectivly.

### Dependencies

To run this project, we need [PHP](https://www.php.net/downloads.php) [Node.JS](https://nodejs.org/en/download/) and [MySQL](https://www.mysql.com/downloads/) installed. PHP and MySQL can be installed with [XAMPP](https://www.apachefriends.org/download.html).

Create a database and change the name on the `.\backend\.env` file.

### Start servers

Open two terminals in the root folder of this repo.

To start the server run these commands:

```ps
~ cd backend
~ php artisan serve
```

By default the server will run in the :8000 port.

For the client terminal run the following:

```ps
~ cd frontend
~ npm run start
```

With everything running you can access the [frontend](http://localhost:3000)
