# Yelp Restaurant Finder

Yelp Restaurant Finder is a React application that helps you search and find restaurants in any location using the Yelp API. Whether you're looking for a cozy cafe or a fancy restaurant, this app makes it easy to discover the perfect spot.

## Features

- **Search Restaurants**: Find restaurants by searching with a location and a keyword (e.g., "pizza", "sushi").
- **Filter Results**: Filter search results based on ratings, distance, and other criteria.
- **Detailed Restaurant Info**: View detailed information about each restaurant, including ratings, reviews, and more.
- **Responsive Design**: Enjoy a seamless experience across all devices with a fully responsive design.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Ensure that you have the following installed on your machine:

- Node.js (v14.x or later)
- Yarn (v1.x or later)

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/yelp-restaurant-finder.git
    cd yelp-restaurant-finder
    ```

2. **Install dependencies**:

    ```bash
    yarn install
    ```

3. **Set up environment variables**:

    - Create a `.env` file in the root directory.
    - Add your Yelp API Key to the `.env` file:

    ```plaintext
    REACT_APP_YELP_API_KEY=your-yelp-api-key
    ```

## Running the App

You can run the app in development mode with the following command:

```bash
yarn run dev
