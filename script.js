// Mobile nav toggle
document.getElementById('navToggle').onclick = function() {
    document.querySelector('.nav-links').classList.toggle('open');
  };

  const shoptenaTestimonials = [
    {
      quote: "ShopTena made my gift shopping so easy! The deals are amazing and delivery is always on time.",
      user: "— Emily N., Nairobi",
      color: "mint-green"
    },
    {
      quote: "I love how ShopTena recommends products just for me. The customer support is top-notch!",
      user: "— James O., Kisumu",
      color: "vivid-orange"
    },
    {
      quote: "The checkout process is super smooth and I always find what I need. Highly recommended.",
      user: "— Amina S., Mombasa",
      color: "white"
    },
    {
      quote: "ShopTena's daily deals help me save money every week. I tell all my friends about it!",
      user: "— Brian K., Eldoret",
      color: "mint-green"
    }
  ];
  
  let testimonialIndex = 0;
  
  // Show 2 cards on desktop, 1 on mobile/tablet
  function renderTestimonials() {
    const container = document.getElementById('testimonialsCards');
    let cardsToShow = 2;
    if (window.innerWidth < 900) cardsToShow = 1;
    let html = '';
    for (let i = 0; i < cardsToShow; i++) {
      const idx = (testimonialIndex + i) % shoptenaTestimonials.length;
      const t = shoptenaTestimonials[idx];
      let cardClass = "testimonial-card";
      if (t.color === "vivid-orange") cardClass += " testimonial-card--orange";
      else if (t.color === "white") cardClass += " testimonial-card--white";
      html += `
        <div class="${cardClass}">
          <div class="testimonial-card__quote">"${t.quote}"</div>
          <div class="testimonial-card__user">${t.user}</div>
        </div>
      `;
    }
    container.innerHTML = html;
  }
  
  function changeTestimonial(direction) {
    testimonialIndex += direction;
    if (testimonialIndex < 0) testimonialIndex = shoptenaTestimonials.length - 1;
    if (testimonialIndex >= shoptenaTestimonials.length) testimonialIndex = 0;
    renderTestimonials();
  }
  
  window.addEventListener('resize', renderTestimonials);
  document.addEventListener('DOMContentLoaded', function() {
    renderTestimonials();
    document.getElementById('arrowLeft').onclick = () => changeTestimonial(-1);
    document.getElementById('arrowRight').onclick = () => changeTestimonial(1);
  });
  

 



  const faqData = [
    {
      q: "How do I place an order on ShopTena?",
      a: "Simply browse our products, add items to your cart, and proceed to checkout. You'll receive a confirmation email once your order is placed."
    },
    {
      q: "Can I track my order?",
      a: "Yes! You can track your order status in your ShopTena account dashboard under 'My Orders'."
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept Mpesa, Visa, Mastercard, and other secure payment options for your convenience."
    },
    {
      q: "How do I return or exchange a product?",
      a: "Go to your order history, select the item, and click 'Return/Exchange'. Follow the prompts to complete your request."
    },
    {
      q: "Is my personal information safe on ShopTena?",
      a: "Absolutely. We use SSL encryption and never share your data with third parties."
    },
    {
      q: "How do I contact customer support?",
      a: "Our support team is available 24/7 via live chat, email, or phone. Visit our 'Contact Us' page for more details."
    }
  ];
  
  function renderFaq() {
    const container = document.getElementById('faqAccordion');
    container.innerHTML = faqData.map((item, idx) => `
      <div class="faq-item${idx === 0 ? ' open' : ''}">
        <button class="faq-question" onclick="toggleFaq(${idx})" aria-expanded="${idx === 0}">
          <span>${item.q}</span>
          <span class="faq-plus">${idx === 0 ? '−' : '+'}</span>
        </button>
        <div class="faq-answer">${item.a}</div>
      </div>
    `).join('');
  }
  
  function toggleFaq(idx) {
    const items = document.querySelectorAll('.faq-item');
    items.forEach((item, i) => {
      if (i === idx) {
        const isOpen = item.classList.contains('open');
        item.classList.toggle('open');
        item.querySelector('.faq-plus').textContent = isOpen ? '+' : '−';
        item.querySelector('.faq-question').setAttribute('aria-expanded', !isOpen);
      } else {
        item.classList.remove('open');
        item.querySelector('.faq-plus').textContent = '+';
        item.querySelector('.faq-question').setAttribute('aria-expanded', false);
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', renderFaq);
  