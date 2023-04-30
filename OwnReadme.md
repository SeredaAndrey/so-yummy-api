## Base URL "https://so-yummy-api-jvk2.onrender.com"

## -Getting owner recipes-------------------------------------------------

# metod: GET

# rout: /api/ownRecipes

params query:{ "page":"1", "limit":"4" }(defoult page=1, limit=4)

heder: Autorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU5MjUsImV4cCI6MTY4NDA4NTUyNX0.uwIZwcXZhoD8ftJTS1sadKpGb_muVko0KAC2YENIB2Q"

# valid answer: status 200

{
"message": "getting owner recipes is success",
"code": 200,
"data": [...],
"count": 1,
"countPage": 1,
"page": 1,
"limit": 4
}

# invalid answer: status 404

{
"message": "Recipes not found"
}

# invalid answer: status 400

{
"message": "Errore of validation querry"
}

## -Post new owner recipe-------------------------------------------------

# metod: POST

# rout: /api/ownRecipes

body:{
"title": "anithing"**,
"category": "anithing"**,
"area": "anithing",
"thumb": image,
"preview": "Url"**,
"tags": "anithing",
"ingredients": [...],
"instructions": "anithing"**,
"description": "anithing"**,
"time": "45min"**,
"youtube": "Url",
}

heder: Autorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU5MjUsImV4cCI6MTY4NDA4NTUyNX0.uwIZwcXZhoD8ftJTS1sadKpGb_muVko0KAC2YENIB2Q"

# valid answer: status 201

{
"message": "create recipe success",
"code": 201,
"recipe": {...}
}

# invalid answer: status 400

{
"message": "Errore of validation params body"
}

## -Path owner recipe-------------------------------------------------

# metod: PATCH

# rout: /api/ownRecipes/:idRecipes

params:"idRecipes
"
body:{
"title": "anithing",
"category": "anithing",
"area": "anithing",
"thumb": image,
"preview": "Url",
"tags": "anithing",
"ingredients": [...],
"instructions": "anithing",
"description": "anithing",
"time": "45min",
"youtube": "Url",
}

heder: Autorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU5MjUsImV4cCI6MTY4NDA4NTUyNX0.uwIZwcXZhoD8ftJTS1sadKpGb_muVko0KAC2YENIB2Q"

# valid answer: status 200

{
"message": "patch owner recipe success",
"code": 200,
"recipe": {...}
}

# invalid answer: status 400

{
"message": "Errore of validation params body"
}

# invalid answer: status 404

{
"message": "recipe not found"
}

## -Delete owner recipe-------------------------------------------------

# metod: DELETE

# rout: /api/ownRecipes/:idRecipes

params:"idRecipes

heder: Autorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU5MjUsImV4cCI6MTY4NDA4NTUyNX0.uwIZwcXZhoD8ftJTS1sadKpGb_muVko0KAC2YENIB2Q"

# valid answer: status 200

{
"message": "delete owner recipe success",
"code": 200,
"data": {...}
}

# invalid answer: status 404

{
"message": "recipe not found"
}
