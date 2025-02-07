# My Fertility Journey

[![Node Version](https://img.shields.io/badge/node-v22.8.0-brightgreen.svg)](https://nodejs.org/)
[![npm Version](https://img.shields.io/badge/npm-v10.98.2-blue.svg)](https://www.npmjs.com/)
[![React Native Version](https://img.shields.io/badge/react_native-v0.76.6-blue.svg)](https://reactnative.dev/)
[![Expo Version](https://img.shields.io/badge/expo-v52.0.28-blue.svg)](https://expo.dev/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

A **React Native & Expo** project designed to manage fertility tracking, appointments, and patient management.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Design Decisions & Trade-offs](#design-decisions--trade-offs)
- [Testing](#testing)
- [Known Issues](#known-issues)
- [License](#license)

---

## Installation

To install and run **My Fertility Journey** locally, follow these steps:

1. **Clone the repository:**

   ```
   git clone https://github.com/Poolchaos/my-fertility-journey.git
   ```

2. **Navigate to the project directory:**

   ```
   cd my-fertility-journey
   ```

3. **Install the required dependencies:**

   ```
   npm install
   ```

4. **Run the development server:**

   ```
   npm run start
   ```

5. **Run on different platforms:**

   - **Android:** `npm run android`
   - **iOS:** `npm run ios` (untested)
   - **Web:** `npm run web` (untested)

---

## Usage

Once the app is running, you can navigate through different sections:

- **Dashboard**: Overview of key metrics and patient data.
- **Patients**: Not content yet.
- **Users**: Not content yet.
- **Logs**: Not content yet.
- **Profile**: Not content yet.

---

## Design Decisions & Trade-offs

### 1. **React Native + Expo**

- **Reasoning**: Expo provides a streamlined workflow for developing, building, and deploying React Native apps with minimal setup.
- **Trade-offs**: Expo simplifies many processes but can have limitations with native modules compared to pure React Native CLI.

### 2. **State Management with Context API**

- **Reasoning**: The Context API was chosen over Redux or Zustand for simplicity and built-in support.
- **Trade-offs**: For larger applications, Redux or Zustand may offer better scalability.

### 3. **Navigation with Expo Router**

- **Reasoning**: Expo Router offers a file-based approach to routing, simplifying navigation.
- **Trade-offs**: This structure might not be as flexible as React Navigation for more complex navigation needs.

### 4. **Tailwind CSS for Styling**

- **Reasoning**: Tailwind was used for rapid development and consistent styling.
- **Trade-offs**: Tailwind requires preprocessing in React Native (`tailwind-rn`), which has some limitations.

### 5. **Mock API Data Instead of Full API Integration**

- **Reasoning**: Due to time constraints, mock data is imported from constants instead of dynamically fetched.
- **Trade-offs**: While this provides structure for real API integration, it doesn't simulate network latency or server behavior.

---

## Testing

Unit tests were implemented using **Jest** and **React Native Testing Library**.

To run tests, use:

```
npm run test
```

### Current Test Coverage

- **Navbar Component**: Tested for rendering, dropdown interactions, and snapshot testing.
- **DashboardWidgets**: Incomplete tests.
- **NewestPractices**: Incomplete tests.
- **StatusOverview**: Incomplete tests.
- **PieChart**: Incomplete tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
