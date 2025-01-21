document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.wand-cursor');
    cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;

    // Add glow effect on movement
    cursor.classList.add('glow');
    
    // Remove glow effect after a short delay
    clearTimeout(cursor.glowTimeout);
    cursor.glowTimeout = setTimeout(() => {
        cursor.classList.remove('glow');
    }, 200); // Adjust timing as needed
});
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.wand-cursor');
    cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;
  
    // Add glow effect on movement
    cursor.classList.add('glow');
    
    // Remove glow effect after a short delay
    clearTimeout(cursor.glowTimeout);
    cursor.glowTimeout = setTimeout(() => {
      cursor.classList.remove('glow');
    }, 200); // Adjust timing as needed
  });
  