# User API – Express
This project is a simple REST API built with Express.js to manage users in memory.
Users are stored in a list sorted by username, and usernames must be unique.
The API was tested manually using Postman.
---
## Requirements
- Node.js (version 16 or higher)
- npm
- Postman
---
## Installation
Clone the repository and install dependencies:
npm install
---
## Run the application
Start the server with:
npm start
The API will be available at:
http://localhost:3000
You can verify that the API is running using:
GET /health
---
## Testing with Postman
All endpoints were tested manually using Postman.
Below are example requests and test data for each endpoint.
---
### 1. Create a user
**POST /users**
Body (JSON):
```json
{
  "id": "user003",
  "username": "testuser",
  "age": 22
}
```
Validations:
- age must be greater than or equal to 18
- id must be unique
- username must be unique
Possible responses:
- 201 Created → user successfully created
- 400 Bad Request → 'L utilisateur doit avoir au moins 18 ans (majeur).'
- 400 Bad Request → 'Le nom de l utilisateur doit être unique.'
- 400 Bad Request → 'L identifiant de l utilisateur doit être unique.'
---
### 2. Get user by ID
**GET /userByID/:id**
Example:
```bash
GET http://localhost:3000/userByID/user001
```
Possible responses:
- 200 OK → user found and returned
- 404 Not Found → 'Utilisateur introuvable!'
---
### 3. Get user by username
**GET /userByUsername/:username**
Example:
```bash
GET http://localhost:3000/userByUsername/aitbrahim
```
Possible responses:
- 200 OK → user found and returned
- 404 Not Found → 'Utilisateur introuvable!'
---
### 4. Update user by ID
**PUT /users/:id**
Example:
```bash
PUT http://localhost:3000/users/user001
```
Body (JSON):
```json
{
  "username": "aitbrahim_updated",
  "age": 23
}
```
Validations:
- user must exist
- new username must be unique (if provided)
- age must be greater than or equal to 18 (if provided)
Possible responses:
- 200 OK → user successfully updated
- 400 Bad Request → 'Le nom de l utilisateur doit être unique.'
- 400 Bad Request → 'L utilisateur doit avoir au moins 18 ans (majeur).'
- 404 Not Found → 'Utilisateur introuvable!'
---
### 5. Delete user
**DELETE /users/:id**
Example:
```bash
DELETE http://localhost:3000/users/user002
```
Possible responses:
- 204 No Content → user successfully deleted
- 404 Not Found → 'Utilisateur introuvable!'
---
### 6. Get all users
**GET /AllUsers**
Example:
```bash
GET http://localhost:3000/AllUsers
```
Description:
- Returns all users stored in memory
- Users are sorted by username
Possible responses:
- 200 OK → list of users
---
### 7. Filter users by age
**GET /AgeFilteredUsers/:minAge/:maxAge**
Example:
```bash
GET /AgeFilteredUsers/20/25
```
Description:
- Returns users whose age is between minAge and maxAge (inclusive)
Possible responses:
- 200 OK → filtered list of users
