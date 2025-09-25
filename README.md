Task Manager App 
A simple and intuitive task management application built with React Native. Keep track of your daily tasks with ease!

Features : 
Add Tasks: Create new tasks with title and description
Edit Tasks: Update existing tasks anytime
Search: Find tasks quickly with built-in search
Offline Storage: All data stored locally using SQLite
Clean UI: Simple and user-friendly interface

Tech Stack 🛠️
React Native - Cross-platform mobile development
Redux Toolkit - State management
SQLite - Local database storage
React Navigation - Screen navigation

Getting Started 🚀
Prerequisites
Node.js (v14 or higher)
React Native CLI
Android Studio (for Android development)\
Xcode (for iOS development)

cd task-manager-app
Install dependencies :

npm install
# or
yarn install

cd ios && pod install && cd ..
Start the Metro bundler :
npx react-native start 

# For Android
npx react-native run-android

# For iOS
npx react-native run-ios

Task Storage: Tasks are stored locally in SQLite database

State Management: Redux Toolkit manages app state and a