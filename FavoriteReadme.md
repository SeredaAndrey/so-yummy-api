## Base URL "https://so-yummy-api-jvk2.onrender.com"

## -Getting favorite recipes-------------------------------------------------

# method: GET

# rout: /api/favorite

params query:{ "page":"1", "limit":"4" }(default page=1, limit=4)

heder: Autorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU5MjUsImV4cCI6MTY4NDA4NTUyNX0.uwIZwcXZhoD8ftJTS1sadKpGb_muVko0KAC2YENIB2Q"

# valid answer: status 200

{
"message": "getting recipe favorite is success",
"code": 200,
"data": [...],
"count": 1,
"countPage": 1,
"page": 1,
"limit": 4
}

# invalid answer: status 404

{
"message": "Recipe not found"
}

# invalid answer: status 400

{
"message": "Error of validation query"
}

## -Add/delete favorite recipe-------------------------------------------------

# method: PATCH

# rout: /api/favorite/:idRecipes

params:"idRecipes"

heder: Autorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU5MjUsImV4cCI6MTY4NDA4NTUyNX0.uwIZwcXZhoD8ftJTS1sadKpGb_muVko0KAC2YENIB2Q"

# valid answer: status 200

{
"message": "add to favorite success",
"code": 200,
"data": {...}
}

# valid answer: status 200

{
"message": "delete from favorite success",
"code": 200,
"data": {...}
}

# invalid answer: status 404

{
"message": "recipe not found"
}

## -Getting popular recipes-------------------------------------------------

# method: GET

# rout: /api/popular-recipe

params query:{ "page":"1", "limit":"4" }(default page=1, limit=4)

heder: Autorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU5MjUsImV4cCI6MTY4NDA4NTUyNX0.uwIZwcXZhoD8ftJTS1sadKpGb_muVko0KAC2YENIB2Q"

# valid answer: status 200

{
"message": "getting popular recipes success",
"code": 200,
"data": [...],
"page": 1,
"limit": 4
}

# invalid answer: status 404

{
"message": "Recipes not found"
}

# invalid answer: status 400

{
"message": "Error of validation query"
}
