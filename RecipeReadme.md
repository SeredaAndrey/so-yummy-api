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
