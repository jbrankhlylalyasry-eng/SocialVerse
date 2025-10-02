// بيانات العوالم
        const realmsData = [
            {
                id: 1,
                title: "عالم الطبخ",
                icon: "fa-utensils",
                description: "تعلم الطبخ مع أشهر الطهاة، شارك في تحديات الطهي المباشر وابدأ رحلتك الطهوية",
                tags: ["طبخ مباشر", "تحديات", "تعليمي"],
                stats: { online: "2.4K", followers: "12.5K" },
                isLive: true,
                isNew: true,
                isFavorite: false
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
                isFavorite: true
            },
            {
                id: 3,
                title: "عالم اللياقة",
                icon: "fa-dumbbell",
                description: "تمارين مباشرة، نصائح تغذية، تحديات لياقة ومجتمع داعم لتحقيق أهدافك",
                tags: ["تمارين", "تغذية", "تحديات"],
                stats: { online: "1.8K", followers: "9.7K" },
                isLive: false,
                isNew: true,
                isFavorite: false
            },
            {
                id: 4,
                title: "عالم الإبداع",
                icon: "fa-palette",
                description: "رسم مباشر، تصميم جرافيك، تصوير فوتوغرافي وورش عمل إبداعية مع فنانين محترفين",
                tags: ["فن", "تصميم", "إبداع"],
                stats: { online: "1.2K", followers: "7.3K" },
                isLive: true,
                isNew: false,
                isFavorite: false
            },
            {
                id: 5,
                title: "عالم الألعاب",
                icon: "fa-gamepad",
                description: "منافسات ألعاب مباشرة، شروحات، تقنيات لعب ومجتمع من اللاعبين المحترفين",
                tags: ["ألعاب", "منافسات", "ترفيه"],
                stats: { online: "4.2K", followers: "22.1K" },
                isLive: true,
                isNew: false,
                isFavorite: true
            },
            {
                id: 6,
                title: "عالم السفر",
                icon: "fa-globe-asia",
                description: "جولات افتراضية، نصائح سفر، تجارب ثقافية واستكشاف العالم من منزلك",
                tags: ["سفر", "ثقافة", "استكشاف"],
                stats: { online: "0.9K", followers: "5.4K" },
                isLive: false,
                isNew: true,
                isFavorite: false
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
            },
            {
                id: 3,
                title: "تمارين كارديو مكثفة",
                host: "مع مدرب لياقة",
                thumbnail: "تمرين مباشر",
                viewers: "0.8K"
            },
            {
                id: 4,
                title: "رسم بورتريه رقمي",
                host: "مع فنان تشكيلي",
                thumbnail: "رسم حي",
                viewers: "1.5K"
            }
        ];

        // تهيئة التطبيق
        document.addEventListener('DOMContentLoaded', function() {
            initializeApp();
        });

        function initializeApp() {
            renderRealms();
            renderLiveRealms();
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

        function setupEventListeners() {
            // التبويبات
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    tabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    // هنا يمكن إضافة تغيير المحتوى حسب التبويب
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
                    // هنا يمكن إضافة فلترة العوالم
                });
            });

            // أزرار الانضمام للعوالم
            document.addEventListener('click', function(e) {
                if (e.target.closest('.join-btn')) {
                    const realmId = e.target.closest('.join-btn').dataset.realmId;
                    const realm = realmsData.find(r => r.id == realmId);
                    openRealmInterface(realm);
                }

                if (e.target.closest('.favorite-btn')) {
                    const btn = e.target.closest('.favorite-btn');
                    const realmId = btn.dataset.realmId;
                    toggleFavorite(realmId, btn);
                }

                if (e.target.closest('.live-card')) {
                    const liveCard = e.target.closest('.live-card');
                    const title = liveCard.querySelector('.live-title').textContent;
                    openRealmInterface({ title: title });
                }
            });

            // إنشاء عالم جديد
            document.getElementById('createRealmBtn').addEventListener('click', function() {
                alert('🎉 ميزة إنشاء عالم جديد قريباً!');
            });

            // إغلاق واجهة العالم
            document.getElementById('closeRealm').addEventListener('click', closeRealmInterface);

            // إرسال رسالة في المحادثة
            document.getElementById('sendMessage').addEventListener('click', sendMessage);
            document.getElementById('chatInput').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
        }

        function openRealmInterface(realm) {
            document.getElementById('realmInterfaceTitle').textContent = realm.title;
            document.getElementById('realmOverlay').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        function closeRealmInterface() {
            document.getElementById('realmOverlay').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        function toggleFavorite(realmId, btn) {
            const realm = realmsData.find(r => r.id == realmId);
            realm.isFavorite = !realm.isFavorite;
            btn.classList.toggle('active');
            
            if (realm.isFavorite) {
                showNotification(`تم إضافة "${realm.title}" إلى المفضلة`);
            } else {
                showNotification(`تم إزالة "${realm.title}" من المفضلة`);
            }
        }

        function sendMessage() {
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            
            if (message) {
                const chatMessages = document.getElementById('chatMessages');
                const messageElement = document.createElement('div');
                messageElement.className = 'message';
                messageElement.textContent = message;
                chatMessages.appendChild(messageElement);
                
                input.value = '';
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
                // محاكاة رد تلقائي
                setTimeout(() => {
                    const autoReply = document.createElement('div');
                    autoReply.className = 'message';
                    autoReply.textContent = 'شكراً على مشاركتك! 🎉';
                    chatMessages.appendChild(autoReply);
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1000);
            }
        }

        function showNotification(message) {
            // إنشاء إشعار بسيط
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 120px;
                left: 50%;
                transform: translateX(-50%);
                background: var(--accent-1);
                color: white;
                padding: 12px 20px;
                border-radius: var(--radius-md);
                z-index: 3000;
                font-size: 14px;
                box-shadow: var(--shadow-lg);
            `;
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }
