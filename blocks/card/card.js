export default function decorate(block) {
  
    // STEP 1: Find all the pieces of content
    // (AEM already converted your table rows into divs)
    
    const title = block.querySelector('div:nth-child(1)');       // Find row 1 (title)
    const description = block.querySelector('div:nth-child(2)'); // Find row 2 (description)
    const image = block.querySelector('img');                    // Find the image
    const link = block.querySelector('a');                       // Find the link
    
    
    // STEP 2: Add CSS class names to each piece
    // (So your CSS file knows how to style them)
    
    if (title) {
      title.classList.add('card-title');  // Add class="card-title" to title
    }
    
    if (description) {
      description.classList.add('card-description');  // Add class="card-description"
    }
    
    if (image) {
      image.parentElement.classList.add('card-image');  // Add class to image's wrapper div
    }
    
    if (link) {
      link.classList.add('card-link');  // Add class="card-link" to link
      
      // If link text is empty or just a URL, change it to "Learn More"
      if (!link.textContent.trim() || link.textContent === link.href) {
        link.textContent = 'Learn More';
      }
    }
  }