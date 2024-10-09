User Management Dashboard
Project Description
The User Management Dashboard is a React.js and TypeScript-based application for managing a list of users. It allows you to fetch a list of users from an external API, display them in a paginated table, and add new users locally (without persisting them to the API). This project demonstrates key concepts like state management, API handling, form validation, and responsiveness using Material-UI (MUI) for styling and layout.

Features
Fetch user data from an external API (JSONPlaceholder).
Display users in a table with sticky headers and pagination.
Add new users to the list using a local state (without sending the data to an API).
Mobile-responsive design using Material-UI.
Error handling and loading states during data fetching.
Project Setup and Running Instructions
Prerequisites
Node.js (>= 14.x.x)
npm or yarn package manager
Setup Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/GDR2252/user-management-dashboard.git
cd user-management-dashboard
Install dependencies: If you are using npm:

bash
Copy code
npm install
Or if you prefer yarn:

bash
Copy code
yarn install
Start the development server: If using npm:

bash
Copy code
npm start
Or with yarn:

bash
Copy code
yarn start
The project will start at http://localhost:3000 by default. You can view the user management dashboard in the browser.

Build for production: To create a production build, run:

bash
Copy code
npm run build
This will generate a build folder with all the necessary production assets.

Components Overview
1. App.tsx
The main component that initializes and renders the user management dashboard. It integrates the form for adding users and the user list table. It also handles the loading and error states when fetching users.

2. components/UserList.tsx
This component is responsible for displaying the list of users in a table format with sticky headers and pagination. It fetches the users from the provided API and allows you to scroll through the data in a mobile-responsive way.

Key Features:

Sticky headers for the table.
Pagination using Material-UI's TablePagination.
Responsive design for different screen sizes.
3. components/AddUserForm.tsx
This component provides a form for adding new users. The form includes fields for name, email, and phone number, and validates the inputs before adding a user to the list.

Key Features:

Validates form input fields.
Adds the new user locally without interacting with the API.
Updates the user list dynamically.
4. services/useService.ts
This file contains the logic for managing user data:

Fetches users from the API using axios.
Handles local state management for adding users.
Includes error handling and loading states.
5. types.ts
Contains the TypeScript interfaces used in the project. The User interface defines the structure of user data used throughout the app.

6. index.tsx and App.tsx
The entry point of the application, where the main App component is rendered to the DOM. It wraps the application with Material-UI's theme provider and ensures the app is rendered correctly.

Technologies Used
React.js: A JavaScript library for building user interfaces.
TypeScript: A strongly typed programming language that builds on JavaScript.
Axios: A promise-based HTTP client for the browser and Node.js, used for API requests.
Material-UI (MUI): A popular React UI framework for building responsive, accessible, and elegant designs.
CSS/SCSS: For styling the application and making it mobile-responsive.
