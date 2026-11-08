// ملف البرمجة الخاص بمطور قسم التواصل (Contact) فقط
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (form && feedback) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName').value;
      feedback.hidden = false;
      feedback.textContent = `شكراً لك يا ${name}! تم استلام رسالتك التجريبية بنجاح في قسم التواصل.`;
      form.reset();
    });
  }
});
