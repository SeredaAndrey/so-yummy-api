Registartion
POST: /api/auth/reg body:{"email":"", "password":""}

Verification
GET: /api/auth/verify/:vCode body:{"email":""}

Auntentification
POST: /api/auth/login body:{"email":"", "password":""}
GET: /api/auth/logout heder:Autorization: Bearer token

Getting user data
GET: /api/user heder:Autorization: Bearer token

Patching user data
PATCH: /api/user/patchName body:{"name":""}, heder:Autorization: Bearer token

Subscribe to recent
GET: /api/subscribe body:{"email":""}
