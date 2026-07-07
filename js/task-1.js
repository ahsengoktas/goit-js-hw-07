const categories = document.querySelectorAll('#categories > li.item');

console.log('Categories count:', categories.length);

categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const itemCount = category.querySelectorAll('ul > li').length;
  console.log(`${title}: ${itemCount} items`);
});