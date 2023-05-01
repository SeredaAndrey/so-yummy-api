## Base URL "https://so-yummy-api-jvk2.onrender.com"

## -Getting recipe category list-------------------------------------------------

# metod: GET

# rout: /api/recipes/category-list

heder: Autorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU5MjUsImV4cCI6MTY4NDA4NTUyNX0.uwIZwcXZhoD8ftJTS1sadKpGb_muVko0KAC2YENIB2Q"

# valid answer: status 200

{
"message": "getting category list success",
"code": 200,
"categories": [...]
}

# invalid answer: status 404

{
"message": "category list not found"
}

## -Getting recipe for main page-------------------------------------------------

# metod: GET

# rout: /api/recipes/main-page

params query:{ "page":"1", "limit":"4" }(defoult page=1, limit=4)

heder: Autorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU5MjUsImV4cCI6MTY4NDA4NTUyNX0.uwIZwcXZhoD8ftJTS1sadKpGb_muVko0KAC2YENIB2Q"

# valid answer: status 200

{
"message": "getting recipes for main page success",
"code": 200,
"recipes": [
{
"category": "Beef",
"recipes": [...]
},
...
{
"category": "Vegetarian",
"recipes": [...]
}
]
}

# invalid answer: status 400

{
"message": "Errore of validation params querry"
}

## -Getting recipe by category-------------------------------------------------

# metod: GET

# rout: /api/recipes/category/:category

params: "category"\*\*, query:{ "page":"", "limit":"" }(defoult page=1, limit=8)

heder: Autorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU5MjUsImV4cCI6MTY4NDA4NTUyNX0.uwIZwcXZhoD8ftJTS1sadKpGb_muVko0KAC2YENIB2Q"

# valid answer: status 200

{
"message": "getting recipes by category success",
"code": 200,
"category": "Beef",
"data": [...],
"count": 1,
"countPage": 1,
"page": 1,
"limit": 8
}

# invalid answer: status 404

{
"message": "Recipes not foundy"
}

# invalid answer: status 400

{
"message": "Errore of validation querry"
}

# invalid answer: status 400

{
"message": "Errore of validation params "
}

## -Getting recipe by id-------------------------------------------------

# metod: GET

# rout: /api/recipes/:idResipie

params: "idResipie"\*\*

heder: Autorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU5MjUsImV4cCI6MTY4NDA4NTUyNX0.uwIZwcXZhoD8ftJTS1sadKpGb_muVko0KAC2YENIB2Q"

# valid answer: status 200

{
"message": "getting single recipie by id success",
"code": 200,
"data": {...}
}

# invalid answer: status 404

{
"message": "Recipe not foundy"
}

## -Search recipe by title-------------------------------------------------

# metod: GET

# rout: /api/search/

params query:{ "title:"qwe"\*\*, "page":"", "limit":"" }(defoult page=1, limit=8)

heder: Autorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU5MjUsImV4cCI6MTY4NDA4NTUyNX0.uwIZwcXZhoD8ftJTS1sadKpGb_muVko0KAC2YENIB2Q"

# valid answer: status 200

{
"message": "getting recipes by querry <olli> is success",
"code": 200,
"data": [...],
"count": 1,
"countPage": 1,
"page": 1,
"limit": 12
}

# invalid answer: status 404

{
"message": "Recipe not found"
}

# invalid answer: status 400

{
"message": "Errore of validation querry"
}

## -Search recipe by ingredient-------------------------------------------------

# metod: GET

# rout: /api/ingredients/

params query:{ "ingredient:"qwe"\*\*, "page":"", "limit":"" }(defoult page=1, limit=8)

heder: Autorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU5MjUsImV4cCI6MTY4NDA4NTUyNX0.uwIZwcXZhoD8ftJTS1sadKpGb_muVko0KAC2YENIB2Q"

# valid answer: status 200

{
"message": "getting recipes by query <ol> is success",
"code": 200,
"data": [...],
"count": 124,
"countPage": 12,
"page": 1,
"limit": 12
}

# invalid answer: status 404

{
"message": "ingredients list not found"
}

# invalid answer: status 404

{
"message": "recipes not found"
}

# invalid answer: status 400

{
"message": "Errore of validation querry"
}

## -Getting ingredient list-------------------------------------------------

# metod: GET

# rout: /api/ingredients/list

heder: Autorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlYTExYmJjNTc1ZTUyODNmZDBiMGYiLCJpYXQiOjE2ODI4NzU5MjUsImV4cCI6MTY4NDA4NTUyNX0.uwIZwcXZhoD8ftJTS1sadKpGb_muVko0KAC2YENIB2Q"

# valid answer: status 200

{
"message": "getting ingredients list success",
"code": 200,
"data": [...]
}

# invalid answer: status 404

{
"message": "ingredients list not found"
}
