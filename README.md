# AppUsers

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# User Management App

This is a simple Angular application for managing users. The app uses Angular 18, Akita for state management, RxJS for reactive programming, and SCSS for styling.

## Features

1. **User Table**: Displays a list of users with the following columns:
   - `id`: Unique identifier for each user
   - `name`: User's name
   - `active`: A button to toggle the active state (default: `false`)

2. **Initial Data**: The app initializes the user store with a few pre-defined users.

3. **Add User**: 
   - The "Add User" button opens a modal with a form to add a new user.
   - The form includes fields for `name` (which is required) and `active` (default is `false`).

4. **Async Validator**:
   - An async validator checks if the user name is unique.

5. **Create Button**: The "Create" button is only enabled when:
   - The form is valid.
   - The async validator confirms the name is unique.

6. **Add User Button**:
   - The "Add User" button is only enabled if:
     - All users are active.
     - There are less than 5 users.

## Technologies Used

- **Angular 18**
- **Akita** (state management)
- **RxJS**
- **SCSS**
- **Node.js 18.19.1** (for backend simulation)

## Setup

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the app: `ng serve`
