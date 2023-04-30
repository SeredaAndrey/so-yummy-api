## Base URL "https://so-yummy-api-jvk2.onrender.com"

## -Getting user data-------------------------------------------------

# metod: GET

# rout: /api/user/

heder: Autorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU5MjUsImV4cCI6MTY4NDA4NTUyNX0.uwIZwcXZhoD8ftJTS1sadKpGb_muVko0KAC2YENIB2Q"

# valid answer: status 200

{
"message": "User found success",
"code": 200,
"user": {
"\_id": "644ea11bbc575e5283fd0b0f",
"email": "qwe@qwe.net",
"loggedIn": true,
"avatarUrl": null,
"verify": true,
"name": "Name",
"createdAt": "2023-04-30T17:10:51.043Z",
"updatedAt": "2023-04-30T17:32:05.425Z",
"\_\_v": 0
}
}

# invalid answer: status 404

{
"message": "User not found"
}

## -Getting user info-------------------------------------------------

# metod: GET

# rout: /api/user/info

heder: Autorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU5MjUsImV4cCI6MTY4NDA4NTUyNX0.uwIZwcXZhoD8ftJTS1sadKpGb_muVko0KAC2YENIB2Q"

# valid answer: status 200

{
"message": "Getting user information success",
"code": 200,
"infoUser": {
"countToFavorite": 1,
"countUserRecipe": 1,
"dayInPortal": 6
}
}

# invalid answer: status 404

{
"message": "user information not found"
}

## -Patching user data-------------------------------------------------

# metod: PATCH

# rout: /api/user

PATCH: /api/user

body: {
"name":"Name",
"image":file}

heder: Autorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU5MjUsImV4cCI6MTY4NDA4NTUyNX0.uwIZwcXZhoD8ftJTS1sadKpGb_muVko0KAC2YENIB2Q"

# valid answer: status 200

{
"message": "User patch data success",
"code": 200,
"user": {
"\_id": "6446a5552a890ad70c29fa67",
"email": "qwe@qwe.net",
"loggedIn": true,
"avatarUrl": "https://res.cloudinary.com/dstqmfnbk/image/upload/v1682842937/avatars/xys9irjnjmjdvvoso03l.jpg",
"verify": true,
"name": "Name",
"createdAt": "2023-04-24T15:50:45.971Z",
"updatedAt": "2023-04-30T08:22:17.940Z",
"\_\_v": 0
}
}

# invalid answer: status 404

{
"message": "Logined user not found"
}

# invalid answer: status 400

{
"message": "ValidationError: \"email\" must be a valid email"
}

## -Subscribe to recent-------------------------------------------------

# metod: POST

# rout: /api/subscribe

body: {
"email":"qwe@qwe.net",
}

# invalid answer: status 400

{
"message": "ValidationError: \"email\" must be a valid email"
}
