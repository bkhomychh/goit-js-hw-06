const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListRef = document.querySelector('#ingredients');

const createListItems = list => {
  const items = list.map(text => {
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.textContent = text;

    return newItem;
  });

  ingredientsListRef.append(...items);
};

createListItems(ingredients);
