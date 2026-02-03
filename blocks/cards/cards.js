export default function decorate(block) {
  // Each row in your table becomes a card
  const rows = [...block.children];
  
  // Loop through each row and style it as a card
  rows.forEach((row) => {
    row.classList.add('card-item');
    
    // Get the columns in each row
    const cols = [...row.children];
    
    // Column 1: Title
    if (cols[0]) cols[0].classList.add('card-title');
    
    // Column 2: Description
    if (cols[1]) cols[1].classList.add('card-description');
    
    // Column 3: Link
    const link = cols[2]?.querySelector('a');
    if (link) {
      link.classList.add('card-link');
      link.textContent = link.textContent || 'Learn More';
    }
    
    // Find image (can be in any column)
    const image = row.querySelector('img');
    if (image) {
      image.parentElement.classList.add('card-image');
    }
  });
}