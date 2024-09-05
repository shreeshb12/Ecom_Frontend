# E-commerce Product Listing and Cart System

This is a simple e-commerce application built with React and Material-UI that allows users to browse a list of products, add them to a shopping cart, and view the cart.

## Live Demo

Check out the live version of the application [here](https://ecommerce-eight-dusky-76.vercel.app/).

## Features

- **Product List Page**: Displays a list of products with basic details (e.g., title, image, price, and description). Each product has an "Add to Cart" button.
- **Product Details Page**: Shows additional information about a product when clicked, with an option to add it to the cart.
- **Shopping Cart**: Users can view the items added to the cart, along with the total cost.
- **Persistent Cart**: The cart data persists even after refreshing the page using Redux for state management.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management.
- **Material-UI**: For UI components and styling.
- **React Router**: For routing between pages.
- **FakeStore API**: Used to fetch product data.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ecommerce-app.git
   cd ecommerce-app

2. **Install the dependencies**:

    ```bash
    npm install
    ```

3. **Start the development server**:

    ```bash
    npm start
    ```

4. **Open your browser** and go to `http://localhost:3000` to see the application in action.

## Project Structure

```plaintext
ecommerce-app/
│
├── public/                     # Public assets
├── src/
│   ├── components/             # React components (ProductList, Cart, Navbar, etc.)
│   ├── redux/                  # Redux state management files (cartSlice, store, etc.)
│   ├── pages/                  # Pages (ProductDetails, CartPage, etc.)
│   ├── App.js                  # Main application component
│   ├── index.js                # Entry point
│   └── ...                     # Other necessary files
│
├── package.json                # npm scripts and dependencies
└── README.md                   # This file
```
## Usage

- **Browse the product list** on the homepage.
- **Click on a product** to view its details.
- **Add products to the cart** by clicking the "Add to Cart" button.
- **Click on the cart icon** in the navbar to view the cart items and total cost.