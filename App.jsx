// Create a simple React component called Greeting that takes a name as a prop and displays a greeting message. For example, if name is "Lisa", the component should display "Hello, Lisa!".

function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

function App() {
  return (
    <div>
      <Greeting name="Lisa" />
    </div>
  );
}

export default App;

// Create a component called Counter with two buttons: "Increment" and "Decrement". Clicking the buttons should increase or decrease a number displayed in the component.

import {useState} from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
    <button onClick={() => setCounter(counter + 1)}>Increment</button>
    <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    <p>Current Count: {counter}</p>
  </>
  );
}

export default Counter;

// Create a component called LoginStatus. It should have a button that toggles between "Login" and "Logout". When the user is logged in, it should display "Welcome, User!" and when logged out, it should display "Please log in."

import { useState } from 'react';

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Initialize to false (logged out)

  return (
    <>
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
      <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      
      {isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in.</p>}
    </>
  );
}

export default LoginStatus;

// Create a component called FruitList that takes an array of fruit names and displays each one in a list (<ul>). For example, if the array is ["Apple", "Banana", "Orange"], the component should display them as a list of items.

import {fruitNames} from './index.js'
import {useState} from 'react'

function FruitList () {
  const[fruit, fruitType] = useState(fruitNames);

return (
  <>
  <div>
    <h1>Fruit Names</h1>
    <ul>
      <li>{fruitType}</li>
    </ul>
  </div>
  </>
)
}

// Create two components: Parent and Child. The Parent component should pass a message prop to the Child component, and the Child component should display that message.

function FruitList() {
  const fruitNames = ['Apple', 'Banana', 'Orange'];  // Just use const, no need for useState

  return (
    <div>
      <h1>Fruit Names</h1>
      <ul>
        {fruitNames.map((fruitItem, index) => (
          <li key={index}>{fruitItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;


// Create a Form component with an input field where the user can type their name. Display the name below the input field as they type. (Use the useState hook to capture the input value.)

function Form () {
  const[]
}

// Create a Timer component that starts counting up (in seconds) as soon as the component mounts. Use the useEffect hook to set up a timer that increments the count every second.

// Create a component called PuppyList that fetches a list of puppies (you can use the puppyList array from your previous examples as mock data). Display each puppy's name and age in a list, and add a "Details" button next to each puppy to show more information (like email and tricks) when clicked.

// Create a ToggleSwitch component with a button that toggles between "On" and "Off". When the button is clicked, the displayed text should change to show the current state ("On" or "Off").

// Create a simple TodoList component where the user can add new tasks to a list. It should display the tasks as a list, and allow the user to remove a task by clicking a "Remove" button next to it.


