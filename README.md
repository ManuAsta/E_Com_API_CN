# E_Com_API_CN
 E commerce api for product management





# Setup

Libraries used:

	• express Js
	• dotenv
	• mongoose
    • nodemon

Application used:
    Postman


# Project Folder Structure

- /models
        - product.js
- /controllers
    - api
        - productController.js
- /routes
    - index.js
    - /api
        - index.js
        - /products
            - productRoutes.js
- /config
    - mongoose.js
- .env
- index.js
- README.md


# Checks

=> Separate api folder for managing apis
=> For every request, show the corresponding status code accurately
=> For adding a product, the post request can be raw JSON or urlencoded
=> Used express.json() for parsing raw JSON data
=> For deleting a product, it will show an extra message, if the product doesn't exist, so that we know we are trying with the wrong id
=> For updating a product, a check is added to show a message if the product exists or not


