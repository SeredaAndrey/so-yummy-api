Base URL "https://so-yummy-api.herokuapp.com"

---Registartion----------------------------------------ready for testing-----------------------
POST: /api/auth/registration body:{"email":"", "password":""}

---Verification----------------------------------------ready for testing-----------------------
GET: /api/auth/verify/:vCode body:{"email":""}

---Auntentification------------------------------------ready for testing-----------------------
POST: /api/auth/login body:{"email":"", "password":""}
GET: /api/auth/logout heder:Autorization: Bearer token

---Getting user data-----------------------------------ready for testing-----------------------
GET: /api/user heder:Autorization: Bearer token

---Patching user data----------------------------------ready for testing-----------------------
PATCH: /api/user body:{"name":""}, heder:Autorization: Bearer token

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
