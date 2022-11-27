# Development

### Link to Deployed Website
`https://chubbypenguin000.github.io/development`

### Goal and Value of the Application
The goal of this application is to allow people to shop plants by browing through the catalog (and being able to filter by plant type and sort by price), and see the total value in the cart.

### Usability Principles Considered
The usability principles for the layout and hierarchy are as follows: each plant has its own card, where the plant type, pot size, and cost are displayed next to the image of the plant. Each card also has an add and remove button for easy access. The filtering/sorting/cart bar is located on the right, and is always viewable by the user.

### Organization of Components
There are two components: cart and card. Each plant has its own card, to which is created using a map function. (The data is retrieved from plants.js.) Upon passing in all the necessary values of each plant, the Card.js file displays the respective qualities. This also includes functionality for adding and removing to the cart.

Cart.js handles the cart functionality, where I pass in the cartItems and total. This will update the cart based on its current items, display the total, and manage adding and removing from the cart.

### How Data is Passed Down Through Components
The dataset is stored in plants.js, where App.js uses to pass information into Cart.js in order to display each plant. Once the button is clicked to add or remove, this will trigger the cartItems and total, which will update what is displayed.

For filtering/sorting, I use a checkbox. onChange, I update update a boolean, using setState, then use useEffect to first filter by the plant type, then sort by what is left. I use .map and .filter to accomplish this.

### How the User Triggers State Changes
The user triggers state changes in 2 ways: adding and removing from cart, and filtering and sorting. Once the user clicks add or remove on the Card display, the onAdd and onRemove functions will each either increment/decrement the quantity or display that the cart is empty (if it decreases from 0 to 1).

For the sorting/filtering, I useState to update each of their booleans. Then, useEffect watches these useStates, which will then select the plants based on the booleans, and finally filter by price.

There is also a reset button, which will trigger handleReset(), which will set all the booleans, arrays, etc. to its default value and uncheck all the checkboxes.