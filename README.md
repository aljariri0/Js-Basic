# Library System

This is a simple web-based library system script.

## Included Files

- `index.html` (EX1)
- `index.html` (EX2)
- `index.html` (EX3)

## How It Works (EX1: `index.html`)

When you open `index.html` in a web browser, the application runs the following sequence:

- Prompts the user to enter their name and membership type (Student, Regular).
- Displays a welcome alert containing the user's name and membership.
- Prompts the user for their preferred book type (Fiction or Non-fiction) and the name of the book they want to borrow.
- Shows an alert stating that the book is being reserved.
- Logs the user's name and the requested book name directly to the browser's console.

## Updates in EX2 (`index.html`)

The second version introduces logic and structure improvements:

- Organizes the prompt sequence into distinct functions (`validate_data` and `collect_all_user_data`).
- Adds a validation loop that requires the user to input exactly "student" or "regular" for their membership before the script continues.
- Collects all the user data (name, membership, book type, and book name) and stores it within a single array.
- Uses a `for` loop to iterate through the array and log all collected information to the console.

## Updates in EX3 (`index.html`)

The third version builds on the previous files by adding discounts and genre management:

- Introduces an `applyDiscount` function that appends a "20% Discount" to the user's data array if they are a "student", or "No Discount" if they are "regular".

- Implements an `availableGenres` array to store different book categories.

- Adds `addNewGenre` and `displayGenres` functions to allow adding new genres to the array and printing the available list to the console.

- Evaluates the discount during data collection and logs the fully updated user data array to the console.
