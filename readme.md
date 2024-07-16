You can now test your endpoints using Postman or any other API testing tool.

Register Endpoint:
URL: http://localhost:5000/api/auth/register
Method: POST
Body:
json
Copy code
{
  "username": "testuser",
  "email": "testuser@example.com",
  "password": "password123",
  "role": "admin"
}
Login Endpoint:
URL: http://localhost:5000/api/auth/login
Method: POST
Body:
json
Copy code
{
  "email": "testuser@example.com",
  "password": "password123"
}
Product CRUD Endpoints:
Create Product (Admin Only):

URL: http://localhost:5000/api/products
Method: POST
Headers: Authorization: Bearer <JWT_TOKEN>
Body:
json
Copy code
{
  "title": "Product 1",
  "description": "Description 1",
  "inventoryCount": 10
}
Get Products (Admin and Manager Only):

URL: http://localhost:5000/api/products
Method: GET
Headers: Authorization: Bearer <JWT_TOKEN>
Update Product (Admin and Manager Only):

URL: http://localhost:5000/api/products/:id
Method: PUT
Headers: Authorization: Bearer <JWT_TOKEN>
Body:
json
Copy code
{
  "title": "Updated Product",
  "description": "Updated Description",
  "inventoryCount": 20
}
Delete Product (Admin Only):

URL: http://localhost:5000/api/products/:id
Method: DELETE
Headers: Authorization: Bearer <JWT_TOKEN>