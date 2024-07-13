# React Native Project

Welcome to the React Native project! This document will guide you through setting up the project, understanding its structure, and getting started with development.

## Prerequisites

Before you begin, ensure you have the following installed:
1. Node.js (preferably the latest LTS version)
2. npm or yarn (for managing dependencies)
3. React Native CLI
4. Android Studio and/or Xcode (for running the app on an emulator or device)

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
Install Dependencies:

bash
Copy code
npm install
# or
yarn install
Run the App:

iOS:
bash
Copy code
npx pod-install
npx react-native run-ios
Android:
bash
Copy code
npx react-native run-android
2. **Project Structure:**
The project is organized as follows:

root
│
├── app.tsx                # Root of the application
└── src
    ├── Route.tsx          # Defines the navigation routes using React Navigation
    ├── TabView.tsx        # Contains the bottom tab bar and the views for each tab
    ├── hooks              # Custom hooks for data fetching and other logic
    │   └── useFetchPackages.ts  # Example hook for fetching packages using Tanstack Query
    ├── components         # Common components used across the app
    │   ├── Home           # Components specific to the Home screen
    │   │   ├── HomeHeader.tsx
    │   │   └── HomeList.tsx
    │   └── ...            # Other shared components
    ├── config             # Configuration files
    │   ├── appStyles.ts   # Styles and colors
    │   └── navigationTypes.ts # Types related to navigation
    └── screens            # Main screens of the application
        ├── Home Folder├── Home.tsx
        └── ...            # Other screens folder
        
3. **File and Folder Details:**
app.tsx:

The entry point of the application. It initializes the navigation and renders the root component.
src/Route.tsx:

Defines the navigation routes using React Navigation. This includes stack navigators, tab navigators, etc.
src/TabView.tsx:

Contains the bottom tab bar and the views associated with each tab. This is where you define the different screens accessible via the tab bar.
src/hooks:

Contains custom hooks for various functionalities, such as data fetching using Tanstack Query.
Example: useFetchPackages.ts fetches package data and can be used across different components.
src/components:

Contains reusable components that are used throughout the app.
It also includes screen-specific components organized in folders named after the screens (e.g., Home folder for Home screen components).
src/config:

Contains configuration files, such as:
appStyles.ts for styling and color definitions.
navigationTypes.ts for type definitions related to navigation.
src/screens:

Contains the main screens of the application. Each screen corresponds to a major section of the app (e.g., HomeScreen.tsx for the Home screen).

4.**Development Workflow:**
Running the App:

Use the commands mentioned above to run the app on iOS or Android.
Make sure to start the Metro bundler:
bash
Copy code
npx react-native start
Adding a New Screen:

Create a new screen component in the screens folder.
If the screen requires specific components, create a new folder in the components folder and add the components there.
Define the screen in Route.tsx and link it to the appropriate navigator (stack or tab).
Creating a Custom Hook:

Define the hook in the hooks folder.
Ensure it follows the naming convention use<Functionality>.ts (e.g., useFetchPackages.ts).
Import and use the hook in your components.
Styling and Theming:

Use appStyles.ts in the config folder for consistent styling and colors.
Import styles from appStyles.ts into your components to maintain a consistent look and feel across the app.
