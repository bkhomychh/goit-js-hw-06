const categoriesRef = document.querySelector('#categories');
const itemArray = [...categoriesRef.children];

console.log('Number of categories: ' + itemArray.length);

itemArray.forEach(item => {
  console.log('Category: ' + item.querySelector('h2').textContent);
  console.log('Elements: ' + item.querySelector('ul').children.length);
});
