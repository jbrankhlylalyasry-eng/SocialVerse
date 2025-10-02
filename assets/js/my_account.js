// بيانات المستخدم
        const userData = {
            name: "أحمد محمد",
            username: "@ahmedmohamed",
            bio: "مطور واجهات مستخدم، مهتم بالتقنية والتصميم. أحب مشاركة المعرفة والتعلم المستمر.",
            stats: {
                realms: 12,
                followers: "1.2K",
                following: 856
            }
        };

        // بيانات العوالم
        const myRealms = [
            {
                id: 1,
                title: "عالم البرمجة",
                icon: "fa-laptop-code",
                description: "مجتمع للمبرمجين والمطورين لمشاركة المعرفة والخبرات في مجال البرمجة.",
                members: "3.2K",
                online: "456",
                isActive: true
            },
            {
                id: 2,
                title: "التصميم الإبداعي",
                icon: "fa-palette",
                description: "مكان للفنانين والمصممين لعرض أعمالهم ومناقشة أحدث trends.",
                members: "1.8K",
                online: "234",
                isActive: true
            },
            {
                id: 3,
                title: "ريادة الأعمال",
                icon: "fa-chart-line",
                description: "نقاشات حول ريادة الأعمال، الاستثمار، وتطوير المشاريع الناشئة.",
                members: "2.1K",
                online: "189",
                isActive: false
            }
        ];

        // بيانات الإنجازات
        const achievements = [
            {
                id: 1,
                title: "المؤسس الأول",
                description: "إنشاء أول عالم تفاعلي خاص بك",
                icon: "fa-crown",
                progress: 100,
                completed: true
            },
            {
                id: 2,
                title: "القائد النشط",
                description: "إدارة 5 عوالم تفاعلية بنشاط",
                icon: "fa-trophy",
                progress: 80,
                completed: false
            },
            {
                id: 3,
                title: "المتفاعل المميز",
                description: "الحصول على 1000 تفاعل في منشوراتك",
                icon: "fa-star",
                progress: 65,
                completed: false
            },
            {
                id: 4,
                title: "المساهم الفعال",
                description: "المشاركة في 50 مناقشة مختلفة",
                icon: "fa-comments",
                progress: 100,
                completed: true
            }
        ];

        // بيانات النشاط
        const activityData = [
            {
                id: 1,
                type: "post",
                title: "شاركت منشوراً جديداً",
                description: "في عالم البرمجة",
                time: "قبل ساعتين",
                icon: "fa-edit"
            },
            {
                id: 2,
                type: "comment",
                title: "علقت على منشور",
                description: "في عالم التصميم الإبداعي",
                time: "قبل 5 ساعات",
                icon: "fa-comment"
            },
            {
                id: 3,
                type: "join",
                title: "انضممت إلى عالم جديد",
                description: "عالم ريادة الأعمال",
                time: "قبل يوم",
                icon: "fa-user-plus"
            },
            {
                id: 4,
                type: "create",
                title: "أنشأت عالم جديد",
                description: "عالم التقنية المتقدمة",
                time: "قبل 3 أيام",
                icon: "fa-plus"
            }
        ];

        // تهيئة الصفحة
        document.addEventListener('DOMContentLoaded', function() {
            initializeProfilePage();
        });

        function initializeProfilePage() {
            loadUserInfo();
            loadMyRealms();
            loadAchievements();
            loadActivity();
            setupEventListeners();
        }

        function loadUserInfo() {
            // تحميل معلومات المستخدم
            document.querySelector('.profile-name').textContent = userData.name;
            document.querySelector('.profile-username').textContent = userData.username;
            document.querySelector('.profile-bio').textContent = userData.bio;
            
            // تحميل الإحصائيات
            document.querySelectorAll('.stat-number')[0].textContent = userData.stats.realms;
            document.querySelectorAll('.stat-number')[1].textContent = userData.stats.followers;
            document.querySelectorAll('.stat-number')[2].textContent = userData.stats.following;
        }

        function loadMyRealms() {
            const container = document.getElementById('myRealmsGrid');
            container.innerHTML = '';

            myRealms.forEach(realm => {
                const realmCard = createRealmCard(realm);
                container.appendChild(realmCard);
            });
        }

        function loadAchievements() {
            const container = document.getElementById('achievementsGrid');
            container.innerHTML = '';

            achievements.forEach(achievement => {
                const achievementCard = createAchievementCard(achievement);
                container.appendChild(achievementCard);
            });
        }

        function loadActivity() {
            const container = document.getElementById('activityGrid');
            container.innerHTML = '';

            activityData.forEach(activity => {
                const activityCard = createActivityCard(activity);
                container.appendChild(activityCard);
            });
        }

        function createRealmCard(realm) {
            const card = document.createElement('div');
            card.className = 'realm-card';
            card.innerHTML = `
                <div class="realm-header">
                    <div class="realm-icon">
                        <i class="fas ${realm.icon}"></i>
                    </div>
                    <div class="realm-info">
                        <div class="realm-title">${realm.title}</div>
                        <div class="realm-stats">
                            <span>${realm.members} عضو • ${realm.online} متواجد</span>
                        </div>
                    </div>
                </div>
                <div class="realm-content">
                    <div class="realm-description">${realm.description}</div>
                    <div class="realm-actions">
                        <button class="realm-action-btn">
                            <i class="fas fa-users"></i>
                            <span>إدارة</span>
                        </button>
                        <button class="realm-action-btn">
                            <i class="fas fa-chart-bar"></i>
                            <span>إحصائيات</span>
                        </button>
                        <button class="realm-action-btn">
                            <i class="fas fa-edit"></i>
                            <span>تعديل</span>
                        </button>
                    </div>
                </div>
            `;
            return card;
        }

        function createAchievementCard(achievement) {
            const card = document.createElement('div');
            card.className = 'achievement-card';
            card.innerHTML = `
                <div class="achievement-icon">
                    <i class="fas ${achievement.icon}"></i>
                </div>
                <div class="achievement-info">
                    <div class="achievement-title">${achievement.title}</div>
                    <div class="achievement-description">${achievement.description}</div>
                    <div class="achievement-progress">
                        <div class="achievement-progress-bar" style="width: ${achievement.progress}%"></div>
                    </div>
                </div>
                ${achievement.completed ? '<div style="color: #10b981; font-size: 20px;"><i class="fas fa-check-circle"></i></div>' : ''}
            `;
            return card;
        }

        function createActivityCard(activity) {
            const card = document.createElement('div');
            card.className = 'realm-card';
            card.innerHTML = `
                <div class="realm-header">
                    <div class="realm-icon">
                        <i class="fas ${activity.icon}"></i>
                    </div>
                    <div class="realm-info">
                        <div class="realm-title">${activity.title}</div>
                        <div class="realm-stats">
                            <span>${activity.time}</span>
                        </div>
                    </div>
                </div>
                <div class="realm-content">
                    <div class="realm-description">${activity.description}</div>
                </div>
            `;
            return card;
        }

        function setupEventListeners() {
            // تبويبات الملف الشخصي
            const profileTabs = document.querySelectorAll('.profile-tab');
            profileTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const targetTab = this.dataset.tab;
                    
                    // إزالة النشاط من جميع التبويبات
                    profileTabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // إخفاء جميع الأقسام
                    document.querySelectorAll('.content-section').forEach(section => {
                        section.classList.remove('active');
                    });
                    
                    // إظهار القسم المحدد
                    document.getElementById(`${targetTab}-content`).classList.add('active');
                });
            });

            // فلتر الأقسام
            const filterBtns = document.querySelectorAll('.filter-btn');
            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const parent = this.closest('.section-actions');
                    if (parent) {
                        parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                        this.classList.add('active');
                    }
                });
            });

            // زر العودة
            document.getElementById('backBtn').addEventListener('click', function() {
                window.history.back();
            });

            // زر تعديل الملف
            document.getElementById('editProfileBtn').addEventListener('click', function() {
                showNotification('فتح نافذة تعديل الملف الشخصي...');
            });

            // إعدادات الحساب
            const settingsItems = document.querySelectorAll('.settings-item');
            settingsItems.forEach(item => {
                item.addEventListener('click', function() {
                    const setting = this.dataset.setting;
                    showNotification(`فتح إعدادات ${getSettingName(setting)}`);
                });
            });

            // تفاعل الأزرار
            document.addEventListener('click', function(e) {
                if (e.target.closest('.realm-action-btn')) {
                    const btn = e.target.closest('.realm-action-btn');
                    const action = btn.querySelector('span').textContent;
                    showNotification(`جاري ${action}...`);
                }
            });
        }

        function getSettingName(setting) {
            const settingsNames = {
                'account': 'الحساب',
                'privacy': 'الخصوصية',
                'notifications': 'الإشعارات',
                'appearance': 'المظهر',
                'language': 'اللغة',
                'help': 'المساعدة',
                'about': 'عن التطبيق'
            };
            return settingsNames[setting] || setting;
        }

        function showNotification(message) {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                left: 50%;
                transform: translateX(-50%);
                background: var(--gradient-primary);
                color: white;
                padding: 12px 20px;
                border-radius: var(--radius-md);
                z-index: 3000;
                font-size: 14px;
                font-weight: 600;
                box-shadow: var(--shadow-lg);
            `;
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }