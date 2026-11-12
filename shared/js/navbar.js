/**
 * شريط التنقل الموحد لمشروع TeamWork
 * يعمل تلقائياً بالمسارات النسبية سواء على الموقع الرئيسي أو داخل مجلدات المعاينة (/pr-X/)
 */
(function () {
  const currentSection = document.body.getAttribute('data-section') || 'home';
  const rootPrefix = document.body.getAttribute('data-root') || '../../';

  const navItems = [
    { id: 'home', label: '🏠 الرئيسية (Home)', path: `${rootPrefix}sections/home/index.html` },
    { id: 'team', label: '👥 الفريق (Team)', path: `${rootPrefix}sections/team/index.html` },
    { id: 'services', label: '🛠️ الخدمات (Services)', path: `${rootPrefix}sections/services/index.html` },
    { id: 'contact', label: '📞 التواصل (Contact)', path: `${rootPrefix}sections/contact/index.html` },
    { id: 'guide', label: '📖 دليل المدير (مرجع GitHub)', path: `${rootPrefix}sections/guide/index.html` }
  ];

  // فحص ما إذا كنا داخل رابط معاينة PR
  const pathMatch = window.location.pathname.match(/\/(pr-\d+)\//);
  const environmentBadge = pathMatch
    ? `<span class="tw-brand-badge" style="background:rgba(245,158,11,0.18);color:#f59e0b;border-color:rgba(245,158,11,0.4);">🔍 نسخة معاينة (${pathMatch[1].toUpperCase()})</span>`
    : `<span class="tw-brand-badge">Production • معتمد</span>`;

  const header = document.createElement('header');
  header.className = 'tw-navbar';
  header.innerHTML = `
    <div class="tw-navbar-container">
      <a href="${rootPrefix}sections/home/index.html" class="tw-brand">
        <span>مشروع TeamWork</span>
        ${environmentBadge}
      </a>
      <nav>
        <ul class="tw-nav-links">
          ${navItems
            .map(
              (item) => `
            <li>
              <a href="${item.path}" class="${item.id === currentSection ? 'active' : ''}">
                ${item.label}
              </a>
            </li>
          `
            )
            .join('')}
        </ul>
      </nav>
    </div>
  `;

  document.body.prepend(header);

  const footer = document.createElement('footer');
  footer.className = 'tw-footer';
  footer.innerHTML = `
    <div>
      نظام إدارة فريق التطوير عن بُعد عبر GitHub (نموذج تجريبي قبل التوسع إلى <strong>ComeHere</strong>) — بإشراف المسؤول العام <code>@mazinjb</code>
    </div>
  `;
  document.body.appendChild(footer);
})();
