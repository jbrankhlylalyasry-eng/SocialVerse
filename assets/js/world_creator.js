// بيانات العوالم
        let realmsData = [
            {
                id: 1,
                title: "عالم الطبخ",
                icon: "fa-utensils",
                description: "تعلم الطبخ مع أشهر الطهاة، شارك في تحديات الطهي المباشر وابدأ رحلتك الطهوية",
                tags: ["طبخ مباشر", "تحديات", "تعليمي"],
                stats: { online: "2.4K", followers: "12.5K" },
                isLive: true,
                isNew: true,
                isFavorite: false,
                privacy: "public",
                color: "gradient-realm"
            },
            {
                id: 2,
                title: "عالم التقنية",
                icon: "fa-laptop-code",
                description: "أحدث التقنيات، برمجة حية، مراجعات أجهزة، ومناقشات مع خبراء التكنولوجيا",
                tags: ["برمجة", "مراجعات", "تقنية"],
                stats: { online: "3.1K", followers: "18.2K" },
                isLive: true,
                isNew: false,
                isFavorite: true,
                privacy: "public",
                color: "gradient-realm"
            }
        ];

        // بيانات العوالم المباشرة
        const liveRealmsData = [
            {
                id: 1,
                title: "تحدي الطبخ الإيطالي",
                host: "مع الشيف أحمد",
                thumbnail: "طهو حي",
                viewers: "1.2K"
            },
            {
                id: 2,
                title: "بناء موقع بتقنية AI",
                host: "مع مبرمج مبدع",
                thumbnail: "برمجة مباشرة",
                viewers: "2.4K"
            }
        ];

        // بيانات التهيئة
        const availableIcons = [
            "fa-utensils", "fa-laptop-code", "fa-dumbbell", "fa-palette",
            "fa-gamepad", "fa-globe-asia", "fa-music", "fa-camera",
            "fa-book", "fa-microphone", "fa-video", "fa-robot",
            "fa-heart", "fa-star", "fa-lightbulb", "fa-graduation-cap"
        ];

        const availableCategories = [
            "تعليمي", "ترفيهي", "تقني", "رياضي", "فني", "طبخ",
            "سفر", "ألعاب", "موسيقى", "تصميم", "برمجة", "تطوير ذاتي"
        ];

        // حالة إنشاء العالم
        let createRealmState = {
            name: "",
            description: "",
            icon: "",
            categories: [],
            privacy: "public",
            color: "gradient-realm"
        };

        // تهيئة التطبيق
        document.addEventListener('DOMContentLoaded', function() {
            initializeApp();
        });

        function initializeApp() {
            renderRealms();
            renderLiveRealms();
            setupCreateRealmForm();
            setupEventListeners();
        }

        function renderRealms() {
            const container = document.getElementById('realmsContainer');
            container.innerHTML = '';

            realmsData.forEach(realm => {
                const realmCard = createRealmCard(realm);
                container.appendChild(realmCard);
            });
        }

        function renderLiveRealms() {
            const container = document.getElementById('liveRealmsContainer');
            container.innerHTML = '';

            liveRealmsData.forEach(liveRealm => {
                const liveCard = createLiveCard(liveRealm);
                container.appendChild(liveCard);
            });
        }

        function createRealmCard(realm) {
            const card = document.createElement('div');
            card.className = 'realm-card';
            card.style.background = `var(--${realm.color})`;
            card.innerHTML = `
                ${realm.isNew ? '<div class="realm-badge">جديد</div>' : ''}
                <div class="realm-header">
                    <div class="realm-icon">
                        <i class="fas ${realm.icon}"></i>
                    </div>
                    <div class="realm-title">${realm.title}</div>
                    <div class="realm-stats">
                        <span>🔥 ${realm.stats.online} متواجدين</span>
                        <span>👑 ${realm.stats.followers} متابع</span>
                    </div>
                </div>
                <div class="realm-content">
                    <div class="realm-description">${realm.description}</div>
                    <div class="realm-tags">
                        ${realm.tags.map(tag => `<span class="realm-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="realm-actions">
                        <button class="join-btn" data-realm-id="${realm.id}">انضم الآن</button>
                        <button class="favorite-btn ${realm.isFavorite ? 'active' : ''}" data-realm-id="${realm.id}">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            `;
            return card;
        }

        function createLiveCard(liveRealm) {
            const card = document.createElement('div');
            card.className = 'live-card';
            card.innerHTML = `
                <div class="live-badge">مباشر • ${liveRealm.viewers}</div>
                <div class="live-thumbnail" style="background: linear-gradient(135deg, #${Math.floor(Math.random()*16777215).toString(16)}, #${Math.floor(Math.random()*16777215).toString(16)}); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
                    ${liveRealm.thumbnail}
                </div>
                <div class="live-info">
                    <div class="live-title">${liveRealm.title}</div>
                    <div class="live-host">${liveRealm.host}</div>
                </div>
            `;
            return card;
        }

        function setupCreateRealmForm() {
            // إضافة الأيقونات
            const iconContainer = document.getElementById('iconSelection');
            availableIcons.forEach(icon => {
                const iconOption = document.createElement('div');
                iconOption.className = 'icon-option';
                iconOption.innerHTML = `<i class="fas ${icon}"></i>`;
                iconOption.dataset.icon = icon;
                iconOption.addEventListener('click', () => selectIcon(iconOption));
                iconContainer.appendChild(iconOption);
            });

            // إضافة التصنيفات
            const categoriesContainer = document.getElementById('categoriesSelection');
            availableCategories.forEach(category => {
                const categoryOption = document.createElement('div');
                categoryOption.className = 'category-option';
                categoryOption.textContent = category;
                categoryOption.dataset.category = category;
                categoryOption.addEventListener('click', () => toggleCategory(categoryOption));
                categoriesContainer.appendChild(categoryOption);
            });

            // إعدادات الخصوصية
            const privacyOptions = document.querySelectorAll('.privacy-option');
            privacyOptions.forEach(option => {
                option.addEventListener('click', () => selectPrivacy(option));
            });

            // تحديث حالة زر الإنشاء
            document.getElementById('realmName').addEventListener('input', updateCreateButton);
            document.getElementById('realmDescription').addEventListener('input', updateCreateButton);
        }

        function setupEventListeners() {
            // التبويبات
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    tabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                });
            });

            // التنقل السفلي
            const navItems = document.querySelectorAll('.nav-item-new');
            navItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    navItems.forEach(i => i.classList.remove('active'));
                    this.classList.add('active');
                });
            });

            // فلتر العوالم
            const filterBtns = document.querySelectorAll('.filter-btn');
            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                });
            });

            // فتح نافذة الإنشاء
            document.getElementById('createRealmBtn').addEventListener('click', openCreateRealm);

            // إغلاق نافذة الإنشاء
            document.getElementById('closeCreateRealm').addEventListener('click', closeCreateRealm);
            document.getElementById('cancelCreateRealm').addEventListener('click', closeCreateRealm);

            // تقديم النموذج
            document.getElementById('createRealmForm').addEventListener('submit', handleCreateRealm);

            // اختيار اللون
            document.getElementById('realmColor').addEventListener('change', function() {
                createRealmState.color = this.value;
            });
        }

        function openCreateRealm() {
            document.getElementById('createRealmOverlay').style.display = 'flex';
            document.body.style.overflow = 'hidden';
            resetCreateRealmForm();
        }

        function closeCreateRealm() {
            document.getElementById('createRealmOverlay').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        function resetCreateRealmForm() {
            createRealmState = {
                name: "",
                description: "",
                icon: "",
                categories: [],
                privacy: "public",
                color: "gradient-realm"
            };

            document.getElementById('realmName').value = "";
            document.getElementById('realmDescription').value = "";
            document.getElementById('realmColor').value = "gradient-realm";

            // إعادة تعيين الأيقونات
            document.querySelectorAll('.icon-option').forEach(icon => {
                icon.classList.remove('selected');
            });

            // إعادة تعيين التصنيفات
            document.querySelectorAll('.category-option').forEach(category => {
                category.classList.remove('selected');
            });

            // إعادة تعيين الخصوصية
            document.querySelectorAll('.privacy-option').forEach(option => {
                option.classList.remove('selected');
            });
            document.querySelector('.privacy-option[data-value="public"]').classList.add('selected');

            updateCreateButton();
        }

        function selectIcon(iconElement) {
            document.querySelectorAll('.icon-option').forEach(icon => {
                icon.classList.remove('selected');
            });
            iconElement.classList.add('selected');
            createRealmState.icon = iconElement.dataset.icon;
            updateCreateButton();
        }

        function toggleCategory(categoryElement) {
            categoryElement.classList.toggle('selected');
            const category = categoryElement.dataset.category;
            
            if (categoryElement.classList.contains('selected')) {
                if (!createRealmState.categories.includes(category)) {
                    createRealmState.categories.push(category);
                }
            } else {
                createRealmState.categories = createRealmState.categories.filter(c => c !== category);
            }
            
            updateCreateButton();
        }

        function selectPrivacy(privacyElement) {
            document.querySelectorAll('.privacy-option').forEach(option => {
                option.classList.remove('selected');
            });
            privacyElement.classList.add('selected');
            createRealmState.privacy = privacyElement.dataset.value;
        }

        function updateCreateButton() {
            const name = document.getElementById('realmName').value.trim();
            const description = document.getElementById('realmDescription').value.trim();
            const isValid = name.length > 0 && description.length > 0 && createRealmState.icon !== "" && createRealmState.categories.length > 0;
            
            document.getElementById('submitCreateRealm').disabled = !isValid;
        }

        function handleCreateRealm(e) {
            e.preventDefault();
            
            const newRealm = {
                id: Date.now(), // استخدام الطابع الزمني كمعرف فريد
                title: document.getElementById('realmName').value.trim(),
                description: document.getElementById('realmDescription').value.trim(),
                icon: createRealmState.icon,
                tags: createRealmState.categories,
                stats: { online: "0", followers: "1" },
                isLive: false,
                isNew: true,
                isFavorite: true,
                privacy: createRealmState.privacy,
                color: createRealmState.color
            };

            // إضافة العالم الجديد
            realmsData.unshift(newRealm);
            
            // إعادة عرض العوالم
            renderRealms();
            
            // إغلاق النافذة
            closeCreateRealm();
            
            // عرض رسالة نجاح
            showNotification(`تم إنشاء العالم "${newRealm.title}" بنجاح! 🎉`, 'success');
            
            // تمرير إلى العالم الجديد
            setTimeout(() => {
                const newRealmCard = document.querySelector(`.join-btn[data-realm-id="${newRealm.id}"]`);
                if (newRealmCard) {
                    newRealmCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    newRealmCard.style.animation = 'pulse 2s infinite';
                    setTimeout(() => {
                        newRealmCard.style.animation = '';
                    }, 2000);
                }
            }, 500);
        }

        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 120px;
                left: 50%;
                transform: translateX(-50%);
                background: ${type === 'success' ? 'var(--gradient-success)' : 'var(--gradient-primary)'};
                color: white;
                padding: 12px 20px;
                border-radius: var(--radius-md);
                z-index: 3000;
                font-size: 14px;
                font-weight: 600;
                box-shadow: var(--shadow-lg);
                animation: slideDown 0.3s ease;
            `;
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideUp 0.3s ease';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, 3000);
        }

        // إضافة أنيميشن للإشعارات
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideDown {
                from { transform: translateX(-50%) translateY(-20px); opacity: 0; }
                to { transform: translateX(-50%) translateY(0); opacity: 1; }
            }
            @keyframes slideUp {
                from { transform: translateX(-50%) translateY(0); opacity: 1; }
                to { transform: translateX(-50%) translateY(-20px); opacity: 0; }
            }
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);