## Base URL "https://so-yummy-api-jvk2.onrender.com"

## -Getting shopping list-------------------------------------------------

# method: GET

# rout: /api/shopping-list

heder: Autorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU5MjUsImV4cCI6MTY4NDA4NTUyNX0.uwIZwcXZhoD8ftJTS1sadKpGb_muVko0KAC2YENIB2Q"

# valid answer: status 200

{
"message": "getting shopping list success",
"code": 200,
"data": [...],
}

# invalid answer: status 404

{
"message": "Shopping list not found"
}

## -Add ingredient to shopping list-------------------------------------------------

# method: POST

# rout: /api/shopping-list/

body:{
id: "640c2dd963a319ea671e36ff"**,
measure: "300ml"**
}
heder: Autorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU5MjUsImV4cCI6MTY4NDA4NTUyNX0.uwIZwcXZhoD8ftJTS1sadKpGb_muVko0KAC2YENIB2Q"

# valid answer: status 200

{
"message": "add to shoppinglist success",
"code": 200,
"data": {
"\_id": "6446cb6c24f2de229a75e51e",
"owner": "6446a5552a890ad70c29fa67",
"ingredients": [...],
"createdAt": "2023-04-24T18:33:16.370Z",
"updatedAt": "2023-05-01T06:43:37.885Z",
"\_\_v": 0
}
}

# invalid answer: status 404

{
"message": "Shopping list not found"
}

# invalid answer: status 400

{
"message": "Error of validation body"
}

## -Delete ingredient from shopping list-------------------------------------------------

# method: PATCH

# rout: /api/shopping-list/:idIngredientSL

params:"idIngredientSL"\*\*

heder: Autorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU5MjUsImV4cCI6MTY4NDA4NTUyNX0.uwIZwcXZhoD8ftJTS1sadKpGb_muVko0KAC2YENIB2Q"

# valid answer: status 200

{
"message": "remove ingridient from shoppinglist success",
"code": 200,
"data": {
"\_id": "6446cb6c24f2de229a75e51e",
"owner": "6446a5552a890ad70c29fa67",
"ingredients": [...],
"createdAt": "2023-04-24T18:33:16.370Z",
"updatedAt": "2023-05-01T06:49:44.098Z",
"\_\_v": 0
}
}

# invalid answer: status 404

{
"message": "Shopping list not found"
}
