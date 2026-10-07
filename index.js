document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('navbar');

  function applyScrollEffect(scrollTop) {
    if (scrollTop > 200) {
      nav.classList.add('bg-black/20', 'backdrop-blur-sm', 'my-5','rounded-4xl', 'mx-10', 'py-0');
    } else {
      nav.classList.remove('bg-black/20', 'backdrop-blur-sm', 'my-5','rounded-4xl', 'mx-10', 'py-0');
    }
  }

  // 1. التمرير على مستوى الشاشة/النافذة الرئيسية
  window.addEventListener('scroll', () => {
    console.log("Scroll Window:", window.scrollY);
    applyScrollEffect(window.scrollY);
  });

  // 2. التمرير في حال كان داخل Div رئيسي محدد بـ overflow
  document.addEventListener('scroll', (e) => {
    const target = e.target;
    if (target.scrollTop !== undefined) {
      console.log("Scroll Element:", target.scrollTop);
      applyScrollEffect(target.scrollTop);
    }
  }, true);
});

document.addEventListener('DOMContentLoaded', () => {
  let cartCount = 0;

  const cartBadge = document.getElementById('cart-count');
  const buyButtons = document.querySelectorAll('.buy-btn');

  buyButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (!cartBadge) return;

      // 1. حساب موقع الزر وموقع العداد
      const buttonRect = e.target.getBoundingClientRect();
      const cartRect = cartBadge.getBoundingClientRect();

      // 2. إنشاء الدائرة الطائرة بـ Tailwind
      const flyer = document.createElement('div');
      flyer.className = 'fixed z-50 w-4 h-4 bg-red-500 rounded-full pointer-events-none transition-all duration-700 ease-out opacity-100';

      // النقطة البدائية
      flyer.style.left = `${buttonRect.left + buttonRect.width / 2 - 8}px`;
      flyer.style.top = `${buttonRect.top + buttonRect.height / 2 - 8}px`;

      document.body.appendChild(flyer);

      // 3. الطيران نحو السلة
      requestAnimationFrame(() => {
        flyer.style.left = `${cartRect.left + cartRect.width / 2 - 8}px`;
        flyer.style.top = `${cartRect.top + cartRect.height / 2 - 8}px`;
        flyer.classList.add('scale-50', 'opacity-20');
      });

      // 4. عند الوصول: زيادة الرقم وإزالة العنصر
      setTimeout(() => {
        flyer.remove();

        cartCount++;
        cartBadge.textContent = cartCount;

        // تكبير سريع للعداد
        cartBadge.classList.add('scale-125');
        setTimeout(() => {
          cartBadge.classList.remove('scale-125');
        }, 200);
      }, 700);
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // البحث عن أي رابط يتجه إلى #products
  const productsLink = document.querySelector('a[href="#products"]');
  const productsSection = document.getElementById('products');
  const nav = document.getElementById('navbar');

  if (productsLink && productsSection) {
    productsLink.addEventListener('click', (e) => {
      e.preventDefault(); // منع القفز المباشر الافتراضي

      // حساب ارتفاع النافبار مع إضافة مسافة إضافية بسيطة (20px)
      const navHeight = nav ? nav.offsetHeight : 80;
      const extraSpace = 10;

      // حساب الموقع المطلوب بالظبط
      const targetPosition = productsSection.getBoundingClientRect().top + window.scrollY - (navHeight + extraSpace);

      // التمرير السلس إلى الموقع
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // البحث عن أي رابط يتجه إلى #products
  const productsLink = document.querySelector('a[href="#services"]');
  const productsSection = document.getElementById('services');
  const nav = document.getElementById('navbar');

  if (productsLink && productsSection) {
    productsLink.addEventListener('click', (e) => {
      e.preventDefault(); // منع القفز المباشر الافتراضي

      // حساب ارتفاع النافبار مع إضافة مسافة إضافية بسيطة (20px)
      const navHeight = nav ? nav.offsetHeight : 50;
      const extraSpace = 10;

      // حساب الموقع المطلوب بالظبط
      const targetPosition = productsSection.getBoundingClientRect().top + window.scrollY - (navHeight + extraSpace);

      // التمرير السلس إلى الموقع
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  }
});