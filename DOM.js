// Start with an empty <ul> on the page and a button that says "Add Item". Every time you click the button, a new <li> should be added to the list with the text "Item X", where X is the number of the item (starting from 1).
const list = document.createElement('ul');
const button = document.createElement('button');
button.textContent = 'Add Item';
document.body.append(list, button);

button.addEventListener('click', () => {
  const newList = document.createElement('li');
  newList.textContent = 'Item X';
  list.append(newList);
});

// Create a <div> with some text inside and a button that says "Hide". When the button is clicked, the text inside the <div> should be hidden, and the button's text should change to "Show". If the button is clicked again, the text should reappear, and the button's text should change back to "Hide".

const init = () => {
  const div = document.createElement('div');
  const button = document.createElement('button');
  button.textContent = 'Hide';
  document.body.append(div, button);

  button.addEventListener('click', () => {
    if (button.textContent === 'Hide') {
      document.body.removeChild(div);
      button.textContent = 'Show';
    } else if (button.textContent === 'Show') {
      document.body.append(div);
      document.textContent = 'Hide';
    }
  });
};

init();

// Create three buttons, each with a different color (e.g., red, blue, green). Below the buttons, have a paragraph. When you click on one of the buttons, the paragraph's text color should change to match the color of the button.
const init = () => {
  const redButton = document.createElement('button');
  const blueButton = document.createElement('button');
  const greenButton = document.createElement('button');
  const para = document.createElement('p');
  para.textContent = 'Some text';
  document.body.append(redButton, blueButton, greenButton, para);

  redButton.addEventListener('click', () => {
    para.style.color = 'red';
  });

  blueButton.addEventListener('click', () => {
    para.style.color = 'blue';
  });

  greenButton.addEventListener('click', () => {
    para.style.color = 'green';
  });
};

init();

// Create a button that says "Click Me". Below the button, display a number starting from 0. Every time the button is clicked, increment the number by 1.

const init = () => {
  const clickButton = document.createElement('button');
  clickButton.textContent = 'Click Me';
  const displayNum = document.createElement('p');
  displayNum.textContent = 0;
  document.body.append(clickButton, displayNum);

  clickButton.addEventListener('click', () => {
    displayNum.textContent = Number(displayNum.textContent) + 1;
  });
};

init();

// Create a button that, when clicked, toggles the visibility of a paragraph. If the paragraph is visible, it should become hidden, and if it is hidden, it should become visible.

const init = () => {
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Hide';
  const para = document.createElement('p');
  para.textContent = 'Show Text Here';
  document.body.append(toggleButton, para);

  toggleButton.addEventListener('click', () => {
    if (toggleButton.textContent === 'Hide') {
      para.style.display = 'none';
      toggleButton.textContent = 'Show';
    } else if (toggleButton.textContent === 'Show') {
      para.style.display = 'block';
      toggleButton.textContent = 'Hide';
    }
  });
};

init();

// Create a "Toggle Dark Mode" button that changes the background color of the page between white and black, and changes the text color to the opposite.

const init = () => {
  const toggleLight = document.createElement('button');
  toggleLight.innerText = 'Toggle Light Mode';
  document.body.style.backgroundColor = 'black';
  document.body.append(toggleLight);

  toggleLight.addEventListener('click', () => {
    if (document.body.style.backgroundColor === 'black') {
      document.body.style.backgroundColor = 'white';
      toggleLight.innerText = 'Toggle Dark Mode';
    } else {
      document.body.style.backgroundColor = 'black';
      toggleLight.innerText = 'Toggle Light Mode';
    }
  });
};

init();
