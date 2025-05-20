const filterButtons = document.querySelectorAll('.filter-btn');
const perfumeCards = document.querySelectorAll('.perfume-card');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active styling and aria-pressed
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');
    const filter = button.getAttribute('data-filter');
    perfumeCards.forEach(card => {
      if(filter === 'all' || card.getAttribute('data-category') === filter){
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
