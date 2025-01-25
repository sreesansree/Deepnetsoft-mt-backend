# Backend for Menu Management Application

This backend provides a RESTful API to manage menus and menu items, allowing users to create, view, and manage menus and their associated items. It is built using TypeScript, Express, and MongoDB.

---

## Features
- Create menus with unique names and descriptions.
- Add menu items with unique names, descriptions, and prices.
- Associate menu items with specific menus.
- Retrieve menus and their associated menu items.

---

## Tech Stack
- **Framework:** Express
- **Language:** TypeScript
- **Database:** MongoDB

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   MONGO_URI=<Your MongoDB connection string>
   PORT=<Port number (default: 5000)>
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

---

## API Endpoints

### Menu Endpoints

#### Create a Menu
**POST** `/menus`
- **Request Body:**
  ```json
  {
    "name": "Drinks",
    "description": "A variety of beverages."
  }
  ```
- **Response:**
  ```json
  {
    "_id": "64b5f85c2c294c001ff29b92",
    "name": "Drinks",
    "description": "A variety of beverages."
  }
  ```

#### Get All Menus
**GET** `/menus`
- **Response:**
  ```json
  [
    {
      "_id": "64b5f85c2c294c001ff29b92",
      "name": "Drinks",
      "description": "A variety of beverages."
    }
  ]
  ```

### Menu Item Endpoints

#### Create a Menu Item
**POST** `/menu-items`
- **Request Body:**
  ```json
  {
    "menuId": "64b5f85c2c294c001ff29b92",
    "name": "Coke",
    "description": "A refreshing drink.",
    "price": 2.5
  }
  ```
- **Response:**
  ```json
  {
    "_id": "64b5f85c2c294c001ff29b93",
    "menuId": "64b5f85c2c294c001ff29b92",
    "name": "Coke",
    "description": "A refreshing drink.",
    "price": 2.5
  }
  ```

#### Get Menu Items by Menu
**GET** `/menus/:menuId/items`
- **Response:**
  ```json
  [
    {
      "_id": "64b5f85c2c294c001ff29b93",
      "name": "Coke",
      "description": "A refreshing drink.",
      "price": 2.5
    }
  ]
  ```

---

## Folder Structure
```
src/
├── config/            # Database configuration
├── controllers/       # API controllers
├── models/            # Mongoose models
├── routes/            # Route definitions
├── app.ts             # Express application setup
├── server.ts          # Server entry point
```

---

## Scripts

- **Development:**
  ```bash
  npm run dev
  ```

- **Build:**
  ```bash
  npm run build
  ```

- **Production Start:**
  ```bash
  npm start
  ```

---

## Deployment
1. Ensure your MongoDB instance is accessible.
2. Set up the `.env` file with appropriate values for `MONGO_URI` and `PORT`.
3. Build the project:
   ```bash
   npm run build
   ```
4. Start the production server:
   ```bash
   npm start
   ```

---

## Notes
- **Unique Constraints:**
  - Menu names must be unique.
  - Menu item names must be unique within the same menu.
- **Validation:** All input fields are validated for presence, length, and uniqueness where applicable.

---


## Contact
For questions or feedback, please contact Sreesankarp at psreesan@gmail.com .

