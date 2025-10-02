// بيانات العوالم
        const realmsData = [
            {
                id: 1,
                name: "عالم البرمجة",
                admin: "أحمد محمد",
                members: 1248,
                activity: "مرتفع",
                status: "active"
            },
            {
                id: 2,
                name: "عالم التقنية",
                admin: "فاطمة أحمد",
                members: 892,
                activity: "متوسط",
                status: "active"
            },
            {
                id: 3,
                name: "عالم الفنون",
                admin: "محمد الخالد",
                members: 567,
                activity: "منخفض",
                status: "pending"
            },
            {
                id: 4,
                name: "عالم الرياضة",
                admin: "خالد العتيبي",
                members: 734,
                activity: "مرتفع",
                status: "active"
            },
            {
                id: 5,
                name: "عالم السفر",
                admin: "سارة القحطاني",
                members: 421,
                activity: "متوسط",
                status: "active"
            }
        ];

        // بيانات النشاط
        const activitiesData = [
            {
                type: "user",
                text: "محمد العلي انضم إلى النظام",
                time: "منذ 5 دقائق",
                icon: "fa-user-plus"
            },
            {
                type: "realm",
                text: "تم إنشاء عالم جديد التصميم الجرافيكي",
                time: "منذ ساعة",
                icon: "fa-globe"
            },
            {
                type: "content",
                text: "نورة السعد نشرت منشوراً جديداً",
                time: "منذ 3 ساعات",
                icon: "fa-file-alt"
            },
            {
                type: "system",
                text: "تم تحديث إعدادات النظام",
                time: "منذ 6 ساعات",
                icon: "fa-cog"
            },
            {
                type: "user",
                text: "عبدالله السبيعي قام بتحديث ملفه الشخصي",
                time: "منذ يوم",
                icon: "fa-user-edit"
            }
        ];

        // بيانات الرسم البياني
        const chartData = {
            labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
            datasets: [
                {
                    label: 'المستخدمين الجدد',
                    data: [65, 59, 80, 81, 56, 55],
                    backgroundColor: 'rgba(99, 102, 241, 0.2)',
                    borderColor: 'rgba(99, 102, 241, 1)',
                    borderWidth: 2,
                    tension: 0.4
                },
                {
                    label: 'النشاط',
                    data: [28, 48, 40, 19, 86, 27],
                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                    borderColor: 'rgba(16, 185, 129, 1)',
                    borderWidth: 2,
                    tension: 0.4
                }
            ]
        };

        // تهيئة اللوحة
        document.addEventListener('DOMContentLoaded', function() {
            initializeDashboard();
        });

        function initializeDashboard() {
            setupEventListeners();
            loadDashboardData();
            renderRealmsTable();
            renderActivityList();
            initializeChart();
        }

        function setupEventListeners() {
            // تبديل الشريط الجانبي
            document.getElementById('toggleSidebar').addEventListener('click', toggleSidebar);
            
            // قائمة الموبايل
            document.getElementById('mobileMenuBtn').addEventListener('click', toggleMobileMenu);
            
            // عناصر التنقل
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                item.addEventListener('click', function() {
                    // إزالة النشاط من جميع العناصر
                    navItems.forEach(nav => nav.classList.remove('active'));
                    // إضافة النشاط للعنصر المحدد
                    this.classList.add('active');
                    
                    const page = this.dataset.page;
                    loadPage(page);
                });
            });
            
            // أزرار الإجراءات
            document.addEventListener('click', function(e) {
                if (e.target.closest('.table-btn')) {
                    const btn = e.target.closest('.table-btn');
                    const action = btn.querySelector('i').className;
                    handleAction(action, btn.closest('tr'));
                }
                
                if (e.target.closest('.card-btn')) {
                    const btn = e.target.closest('.card-btn');
                    if (btn.id === 'exportBtn') {
                        exportData();
                    } else {
                        handleCardAction(btn.textContent.trim());
                    }
                }
            });
            
            // البحث مع Debounce
            const searchInput = document.querySelector('.search-input');
            let searchTimeout;
            searchInput.addEventListener('input', function() {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    performSearch(this.value);
                }, 500);
            });
            
            // الفلترة
            document.getElementById('statusFilter').addEventListener('change', filterTable);
            document.getElementById('sortFilter').addEventListener('change', sortTable);
        }

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const mainContent = document.getElementById('mainContent');
            const toggleIcon = document.getElementById('toggleSidebar').querySelector('i');
            
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');
            
            if (sidebar.classList.contains('collapsed')) {
                toggleIcon.className = 'fas fa-chevron-left';
            } else {
                toggleIcon.className = 'fas fa-chevron-right';
            }
        }

        function toggleMobileMenu() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('mobile-open');
        }

        function loadPage(page) {
            showLoading();
            // هنا يمكن تحميل محتوى الصفحة المحددة
            showNotification(`جاري تحميل ${getPageTitle(page)}...`, 'info');
            
            // محاكاة تحميل المحتوى
            setTimeout(() => {
                updatePageTitle(page);
                loadPageContent(page);
                hideLoading();
            }, 1000);
        }

        function getPageTitle(page) {
            const titles = {
                'overview': 'نظرة عامة',
                'analytics': 'التحليلات',
                'realms': 'العوالم',
                'posts': 'المنشورات',
                'comments': 'التعليقات',
                'users': 'المستخدمين',
                'moderation': 'المراقبة',
                'reports': 'التقارير',
                'settings': 'الإعدادات',
                'notifications': 'الإشعارات',
                'security': 'الأمان'
            };
            return titles[page] || 'الصفحة';
        }

        function updatePageTitle(page) {
            const pageTitle = document.querySelector('.page-info h1');
            pageTitle.textContent = getPageTitle(page);
        }

        function loadPageContent(page) {
            // هنا يمكن تحميل محتوى مختلف لكل صفحة
            // للتبسيط، سنقوم فقط بتحديث الإشعار
            showNotification(`تم تحميل ${getPageTitle(page)} بنجاح`);
        }

        function loadDashboardData() {
            // تحميل البيانات الأولية للوحة
            console.log('جاري تحميل بيانات اللوحة...');
        }

        function renderRealmsTable() {
            const tableBody = document.getElementById('realmsTableBody');
            tableBody.innerHTML = '';
            
            realmsData.forEach(realm => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>
                        <div class="user-cell">
                            <div class="user-avatar-sm" style="background: ${getGradientForRealm(realm.id)};">${realm.name.charAt(0)}</div>
                            <div>${realm.name}</div>
                        </div>
                    </td>
                    <td>${realm.admin}</td>
                    <td>${realm.members.toLocaleString()}</td>
                    <td>${realm.activity}</td>
                    <td><span class="status-badge status-${realm.status}">${getStatusText(realm.status)}</span></td>
                    <td>
                        <div class="action-cell">
                            <button class="table-btn btn-edit"><i class="fas fa-edit"></i></button>
                            <button class="table-btn btn-view"><i class="fas fa-eye"></i></button>
                            <button class="table-btn btn-delete"><i class="fas fa-trash"></i></button>
                        </div>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        }

        function renderActivityList() {
            const activityList = document.getElementById('activityList');
            activityList.innerHTML = '';
            
            activitiesData.forEach(activity => {
                const item = document.createElement('div');
                item.className = 'activity-item';
                item.innerHTML = `
                    <div class="activity-icon activity-${activity.type}">
                        <i class="fas ${activity.icon}"></i>
                    </div>
                    <div class="activity-content">
                        <div class="activity-text">${activity.text}</div>
                        <div class="activity-time">${activity.time}</div>
                    </div>
                `;
                activityList.appendChild(item);
            });
        }

        function initializeChart() {
            const ctx = document.getElementById('activityChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: chartData,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                            rtl: true,
                            labels: {
                                color: '#fff',
                                font: {
                                    family: 'system-ui'
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: '#fff'
                            }
                        },
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: '#fff'
                            }
                        }
                    }
                }
            });
        }

        function performSearch(query) {
            if (query.length > 2) {
                // محاكاة البحث
                setTimeout(() => {
                    const results = realmsData.filter(realm => 
                        realm.name.includes(query) || 
                        realm.admin.includes(query)
                    );
                    console.log('نتائج البحث:', results);
                    showNotification(`تم العثور على ${results.length} نتيجة`);
                }, 300);
            }
        }

        function filterTable() {
            const statusFilter = document.getElementById('statusFilter').value;
            const rows = document.querySelectorAll('#realmsTableBody tr');
            
            rows.forEach(row => {
                const status = row.querySelector('.status-badge').className.includes(statusFilter);
                if (statusFilter === '' || status) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        }

        function sortTable() {
            const sortFilter = document.getElementById('sortFilter').value;
            // هنا يمكن تطبيق خوارزمية الترتيب
            showNotification(`تم ترتيب البيانات حسب ${sortFilter === 'newest' ? 'الأحدث' : sortFilter === 'oldest' ? 'الأقدم' : 'الأكثر نشاطاً'}`);
        }

        function exportData() {
            showLoading();
            // محاكاة تصدير البيانات
            setTimeout(() => {
                hideLoading();
                showNotification('تم تصدير البيانات بنجاح');
            }, 1500);
        }

        function handleAction(action, context) {
            const actions = {
                'fa-edit': 'تعديل',
                'fa-eye': 'عرض',
                'fa-trash': 'حذف'
            };
            
            const actionName = Object.entries(actions).find(([key, value]) => 
                action.includes(key)
            )?.[1] || 'إجراء';
            
            showNotification(`جاري ${actionName}...`, 'info');
        }

        function handleCardAction(action) {
            showNotification(`جاري ${action}...`, 'info');
        }

        function showNotification(message, type = 'success') {
            // إزالة أي إشعارات سابقة
            const existingNotification = document.querySelector('.notification');
            if (existingNotification) {
                existingNotification.remove();
            }
            
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideUp 0.3s ease';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, 3000);
        }

        function showLoading() {
            document.getElementById('loadingOverlay').classList.add('active');
        }

        function hideLoading() {
            document.getElementById('loadingOverlay').classList.remove('active');
        }

        function getGradientForRealm(id) {
            const gradients = [
                'var(--gradient-primary)',
                'var(--gradient-secondary)',
                'var(--gradient-success)',
                'var(--gradient-warning)',
                'var(--gradient-danger)'
            ];
            return gradients[id % gradients.length];
        }

        function getStatusText(status) {
            const statusTexts = {
                'active': 'نشط',
                'pending': 'قيد المراجعة',
                'banned': 'محظور'
            };
            return statusTexts[status] || status;
        }

        // إغلاق الشريط الجانبي عند النقر خارجيه (للموبايل)
        document.addEventListener('click', function(e) {
            const sidebar = document.getElementById('sidebar');
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            
            if (sidebar.classList.contains('mobile-open') && 
                !sidebar.contains(e.target) && 
                !mobileMenuBtn.contains(e.target)) {
                sidebar.classList.remove('mobile-open');
            }
        });