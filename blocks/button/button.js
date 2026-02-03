export default function decorate(block) {
    const p = block.querySelector('p');
    if (!p) return;
  
    const text = p.textContent.trim();
  
    const button = document.createElement('button');
    button.className = 'eds-button';
    button.textContent = text;
  
    // Click event
    button.addEventListener('click', () => {
      showWelcomePopup();
    });
  
    block.textContent = '';
    block.append(button);
  }
  
  /* Popup creator */
  function showWelcomePopup() {
    // Prevent multiple popups
    if (document.querySelector('.welcome-overlay')) return;
  
    const overlay = document.createElement('div');
    overlay.className = 'welcome-overlay';
  
    overlay.innerHTML = `
      <div class="welcome-popup">
        <h3>Welcome 🎉</h3>
        <p>Glad to have you here!</p>
        <button class="close-btn">Close</button>
      </div>
    `;
  
    document.body.append(overlay);
  
    overlay.querySelector('.close-btn').addEventListener('click', () => {
      overlay.remove();
    });
  
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });
  }
  