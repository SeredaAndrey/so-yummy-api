## Base URL "https://so-yummy-api-jvk2.onrender.com"

##--------------------------------------------------
---Registartion---
metod: POST
rout: /api/auth/registration
body: {
"email":"qwe@qwe.net",
"password":"qweqwe123",
"name":"Name"
}
valid answer: status 201
{
"message": "created",
"code": 201,
"user": {
"\_id": "644ea11bbc575e5283fd0b0f",
"email": "qwe@qwe.net",
"loggedIn": false,
"avatarUrl": null,
"verify": false,
"name": "Name",
"createdAt": "2023-04-30T17:10:51.043Z",
"updatedAt": "2023-04-30T17:10:51.043Z"
}
}
invalid answer: status 400
{
"message": "ValidationError: \"email\" must be a valid email"
}
invalid answer: status 404
{
"message": "Email is already in use"
}
##--------------------------------------------------
---Verification---
metod: POST
rout: /api/auth/verify/:vCode
body: {
"email":"qwe@qwe.net",
}
params: {
"vCode":"00ae10174638160d4240de22c91405638fecff110d05352ee4c760201516f491"
}
valid answer: status 200
{
"message": "verification successful",
"code": 200,
"data": {
"user": {
"\_id": "644ea11bbc575e5283fd0b0f",
"email": "qwe@qwe.net",
"loggedIn": true,
"avatarUrl": null,
"verify": true,
"name": "Name",
"createdAt": "2023-04-30T17:10:51.043Z",
"updatedAt": "2023-04-30T17:24:05.937Z"
},
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU0NDUsImV4cCI6MTY4NDA4NTA0NX0.XDRzk3NR9ZptxKaFS4FzeQLBMOpK0mpZhd9wxlXgYgI"
}
}
invalid answer: status 401
{
"message": "email or verification code is wrong"
}
##--------------------------------------------------
---Login---
metod: POST
rout: /api/auth/login
body:{
"email":"qwe@qwe.net",
"password":"qweqwe123"
}
valid answer: status 200
{
"message": "logged successful",
"code": 200,
"data": {
"user": {
"\_id": "644ea11bbc575e5283fd0b0f",
"email": "qwe@qwe.net",
"loggedIn": true,
"avatarUrl": null,
"verify": true,
"name": "Name",
"createdAt": "2023-04-30T17:10:51.043Z",
"updatedAt": "2023-04-30T17:32:05.425Z"
},
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU5MjUsImV4cCI6MTY4NDA4NTUyNX0.uwIZwcXZhoD8ftJTS1sadKpGb_muVko0KAC2YENIB2Q"
}
}
invalid answer: status 401
{
"message": "email or password is wrong"
}
invalid answer: status 400
{
"message": "ValidationError: \"email\" must be a valid email"
}
##--------------------------------------------------
---Logout---
metod: GET
rout: /api/auth/logout
heder:Autorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU5MjUsImV4cCI6MTY4NDA4NTUyNX0.uwIZwcXZhoD8ftJTS1sadKpGb_muVko0KAC2YENIB2Q"
valid answer: status 200
{
"message": "logout successful",
"code": 204,
}
invalid answer: status 401
{
"message": "Logined user not found"
}

GET: /api/auth/logout heder:Autorization: Bearer token

---Getting user data-----------------------------------ready for testing-----------------------
GET: /api/user heder:Autorization: Bearer token

---Patching user data----------------------------------ready for testing-----------------------
PATCH: /api/user body:{"name":"","image":file}, heder:Autorization: Bearer token

---Subscribe to recent---------------------------------ready for testing-----------------------
GET: /api/subscribe body:{"email":""}

---Getting recipes-------------------------------------ready for testing-----------------------
GET: /api/recipes/category-list heder:Autorization: Bearer token
GET: /api/recipes/main-page heder:Autorization: Bearer token, query:{ "page":"", "limit":"" }(defoult page=1, limit=4)
GET: /api/recipes/category/:category heder:Autorization: Bearer token, query:{ "page":"", "limit":"" }(defoult page=1, limit=8)
GET: /api/recipes/:id heder:Autorization: Bearer token

---Search recipes-------------------------------------------------------------
GET: /api/search heder:Autorization: Bearer token (correcting)

---Getting ingredients--------------------------------------------------------
GET: /api/ingredients/list heder:Autorization: Bearer token (correcting)
GET: /api/ingredients heder:Autorization: Bearer token (correcting)

---Adding and patching owner recipes------------------------------------------
GET: /api/ownRecipes heder:Autorization: Bearer token
POST: /api/ownRecipes heder:Autorization: Bearer token
DELETE: /api/ownRecipes/:id heder:Autorization: Bearer token
PATCH: /api/ownRecipes/:id heder:Autorization: Bearer token

---Adding recipies to favorite------------------------------------------------
PATCH: /api/favorite/:id heder:Autorization: Bearer token (correcting)
GET: /api/favorite heder:Autorization: Bearer token (correcting)

---Getting popular recipe----------------------------------------------------
GET: /api/popular-recipe heder:Autorization: Bearer token (correcting)

---Shopping list-------------------------------------------------------------
.
.
.
.
