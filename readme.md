---Registartion---------------------------------------------------------------
POST: /api/auth/reg body:{"email":"", "password":""}

---Verification---------------------------------------------------------------
GET: /api/auth/verify/:vCode body:{"email":""}

---Auntentification-----------------------------------------------------------
POST: /api/auth/login body:{"email":"", "password":""}
GET: /api/auth/logout heder:Autorization: Bearer token

---Getting user data----------------------------------------------------------
GET: /api/user heder:Autorization: Bearer token

---Patching user data---------------------------------------------------------
PATCH: /api/user/patchName body:{"name":""}, heder:Autorization: Bearer token

---Subscribe to recent--------------------------------------------------------
GET: /api/subscribe body:{"email":""}

---Getting recipes------------------------------------------------------------
GET: /api/recipes/main-page heder:Autorization: Bearer token (correcting)
GET: /api/recipes/:category heder:Autorization: Bearer token (correcting)
GET: /api/recipes/:id heder:Autorization: Bearer token (correcting)

---Search recipes-------------------------------------------------------------
GET: /api/search heder:Autorization: Bearer token (correcting)

---Getting ingredients--------------------------------------------------------
GET: /api/ingredients/list heder:Autorization: Bearer token (correcting)
GET: /api/ingredients heder:Autorization: Bearer token (correcting)

---Adding and patching owner recipes------------------------------------------
GET: /api/ownRecipes heder:Autorization: Bearer token (correcting)
POST: /api/ownRecipes heder:Autorization: Bearer token (correcting)
DELETE: /api/ownRecipes/:id heder:Autorization: Bearer token (correcting)
PATCH: /api/ownRecipes/:id heder:Autorization: Bearer token (correcting)

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
