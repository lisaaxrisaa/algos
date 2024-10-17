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
