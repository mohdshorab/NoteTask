Task Manager App

A simple and intuitive task management application built with React Native. Keep track of your daily tasks with ease.

Features : 
- Add Tasks: Create new tasks with title and description
- Edit Tasks: Update existing tasks anytime
- Search: Find tasks quickly with built-in search
- Offline Storage: All data stored locally using SQLite

Clean UI: Simple and user-friendly interface

Push Notifications: Receive reminders and updates using Firebase Cloud Messaging (FCM)

Tech Stack :
- React Native – Cross-platform mobile development
- Redux Toolkit – State management
- SQLite – Local database storage
- React Navigation – Screen navigation
- Firebase – Push notifications and messaging

Getting Started
Prerequisites

- Node.js (v14 or higher)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

Setup
# Clone the project
git clone <your-repo-url>
cd task-manager-app

# Install dependencies
npm install
# or
yarn install

# Install iOS pods (if using iOS)
cd ios && pod install && cd ..

# Start Metro bundler
npx react-native start

Running the App
# For Android
npx react-native run-android

# For iOS
npx react-native run-ios

App Details

- Task Storage: Tasks are stored locally in SQLite database
- State Management: Redux Toolkit manages app state
- Push Notifications: Firebase Cloud Messaging handles task reminders and notifications
