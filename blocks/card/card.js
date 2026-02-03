export default function decorate(block) {
    // Get the content from the block
    const title = block.querySelector('div:nth-child(1)');
    const description = block.querySelector('div:nth-child(2)');
    const link = block.querySelector('div:nth-child(3) a');
  
    // Add CSS classes for styling
    if (title) title.classList.add('card-title');
    if (description) description.classList.add('card-description');
    if (link) {
      link.classList.add('card-link');
      link.textContent = link.textContent || 'Learn More';
    }
  }