document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('addToCartBtn');

  if (btn) {
    btn.addEventListener('click', () => {
      const originalText = btn.innerHTML;
      btn.innerHTML = '<span>Added to Cart ✓</span>';
      btn.style.backgroundColor = '#2d5f4c';

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.backgroundColor = '';
      }, 2000);
    });
  }
});
