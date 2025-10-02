// بيانات المستخدم واهتماماته
        const userProfile = {
            id: 1,
            name: "أحمد محمد",
            interests: ["technology", "education", "programming", "design", "business"],
            location: {
                lat: 24.7136,
                lng: 46.6753
            },
            behavior: {
                likes: [101, 105, 110, 115],
                saved: [102, 108],
                joined: [103, 107]
            }
        };

        // بيانات المحتوى
        const exploreContent = {
            recommended: [
                {
                    id: 101,
                    title: "عالم الذكاء الاصطناعي",
                    description: "استكشف أحدث التطورات في الذكاء الاصطناعي وتعلم كيفية تطبيقه في مشاريعك",
                    category: "technology",
                    level: "intermediate",
                    language: "arabic",
                    activity: "active",
                    image: "https://via.placeholder.com/400x200/6366f1/ffffff?text=AI+World",
                    tags: ["AI", "Machine Learning", "Python"],
                    stats: {
                        members: "12.5K",
                        online: "2.4K",
                        rating: "4.8"
                    },
                    match: 95,
                    location: {
                        lat: 24.7136,
                        lng: 46.6753
                    }
                },
                {
                    id: 102,
                    title: "تعلم البرمجة من الصفر",
                    description: "رحلة شاملة لتعلم البرمجة بدءاً من الأساسيات وحتى المستوى المتقدم",
                    category: "education",
                    level: "beginner",
                    language: "arabic",
                    activity: "active",
                    image: "https://via.placeholder.com/400x200/10b981/ffffff?text=Programming",
                    tags: ["Programming", "Web Development", "JavaScript"],
                    stats: {
                        members: "8.7K",
                        online: "1.2K",
                        rating: "4.9"
                    },
                    match: 88,
                    location: {
                        lat: 24.7536,
                        lng: 46.6953
                    }
                },
                {
                    id: 103,
                    title: "ريادة الأعمال الرقمية",
                    description: "انطلق في رحلة ريادة الأعمال مع خبراء الصناعة وأصحاب المشاريع الناجحة",
                    category: "business",
                    level: "intermediate",
                    language: "arabic",
                    activity: "active",
                    image: "https://via.placeholder.com/400x200/f59e0b/ffffff?text=Entrepreneurship",
                    tags: ["Business", "Startup", "Marketing"],
                    stats: {
                        members: "5.3K",
                        online: "856",
                        rating: "4.7"
                    },
                    match: 82,
                    location: {
                        lat: 24.7336,
                        lng: 46.6853
                    }
                },
                {
                    id: 104,
                    title: "التصميم الجرافيكي المتقدم",
                    description: "أتقن فن التصميم الجرافيكي باستخدام أحدث الأدوات والتقنيات",
                    category: "arts",
                    level: "advanced",
                    language: "arabic",
                    activity: "active",
                    image: "https://via.placeholder.com/400x200/ec4899/ffffff?text=Graphic+Design",
                    tags: ["Design", "Adobe", "Creative"],
                    stats: {
                        members: "6.8K",
                        online: "1.1K",
                        rating: "4.6"
                    },
                    match: 78,
                    location: {
                        lat: 24.7236,
                        lng: 46.6653
                    }
                }
            ],
            trending: [
                {
                    id: 201,
                    title: "تحدي البرمجة الأسبوعي",
                    description: "انضم إلى تحدي البرمجة الأسبوعي واربح جوائز قيمة",
                    category: "technology",
                    level: "intermediate",
                    language: "arabic",
                    activity: "live",
                    image: "https://via.placeholder.com/400x200/8b5cf6/ffffff?text=Coding+Challenge",
                    tags: ["Challenge", "Competition", "Programming"],
                    stats: {
                        members: "15.2K",
                        online: "3.8K",
                        rating: "4.9"
                    },
                    trending: true
                },
                {
                    id: 202,
                    title: "الطبخ العالمي الحي",
                    description: "تعلم طبخ أطباق من مختلف الثقافات مع طهاة محترفين",
                    category: "entertainment",
                    level: "beginner",
                    language: "arabic",
                    activity: "live",
                    image: "https://via.placeholder.com/400x200/ef4444/ffffff?text=Cooking+Live",
                    tags: ["Cooking", "Live", "International"],
                    stats: {
                        members: "9.4K",
                        online: "2.1K",
                        rating: "4.8"
                    },
                    trending: true
                },
                {
                    id: 203,
                    title: "لياقة البيت الذكية",
                    description: "تمارين لياقة يمكن ممارستها في المنزل مع مدربين محترفين",
                    category: "sports",
                    level: "beginner",
                    language: "arabic",
                    activity: "active",
                    image: "https://via.placeholder.com/400x200/10b981/ffffff?text=Home+Fitness",
                    tags: ["Fitness", "Home Workout", "Health"],
                    stats: {
                        members: "12.7K",
                        online: "2.9K",
                        rating: "4.7"
                    },
                    trending: true
                }
            ],
            categories: [
                {
                    id: 301,
                    title: "التقنية والبرمجة",
                    description: "استكشف أحدث التقنيات وتعلم البرمجة بمختلف لغاتها",
                    category: "technology",
                    image: "https://via.placeholder.com/400x200/6366f1/ffffff?text=Technology",
                    count: "125 عالم"
                },
                {
                    id: 302,
                    title: "التعليم والتعلم",
                    description: "طور مهاراتك ومعرفتك في مختلف المجالات التعليمية",
                    category: "education",
                    image: "https://via.placeholder.com/400x200/10b981/ffffff?text=Education",
                    count: "89 عالم"
                },
                {
                    id: 303,
                    title: "الفنون والإبداع",
                    description: "أطلق العنان لإبداعك في عالم الفنون والتصميم",
                    category: "arts",
                    image: "https://via.placeholder.com/400x200/ec4899/ffffff?text=Arts",
                    count: "67 عالم"
                },
                {
                    id: 304,
                    title: "الرياضة واللياقة",
                    description: "انضم إلى مجتمع اللياقة والرياضة وحافظ على صحتك",
                    category: "sports",
                    image: "https://via.placeholder.com/400x200/f59e0b/ffffff?text=Sports",
                    count: "54 عالم"
                },
                {
                    id: 305,
                    title: "الأعمال والاستثمار",
                    description: "طور مشروعك وتعلم أسرار النجاح في عالم الأعمال",
                    category: "business",
                    image: "https://via.placeholder.com/400x200/8b5cf6/ffffff?text=Business",
                    count: "72 عالم"
                },
                {
                    id: 306,
                    title: "الترفيه والألعاب",
                    description: "استمتع بأجواء الترفيه والألعاب مع مجتمع نشط",
                    category: "entertainment",
                    image: "https://via.placeholder.com/400x200/ef4444/ffffff?text=Entertainment",
                    count: "93 عالم"
                }
            ]
        };

        // خريطة العوالم
        const worldRealms = [
            { id: 1, name: "الرياض التقني", x: 65, y: 45, type: "technology", users: 2400 },
            { id: 2, name: "جدة الإبداعية", x: 55, y: 40, type: "arts", users: 1800 },
            { id: 3, name: "دبي الرقمية", x: 70, y: 35, type: "business", users: 3200 },
            { id: 4, name: "القاهرة التعليمية", x: 45, y: 30, type: "education", users: 2100 },
            { id: 5, name: "الدار البيضاء الفنية", x: 35, y: 35, type: "arts", users: 1500 },
            { id: 6, name: "الدوحة الرياضية", x: 60, y: 30, type: "sports", users: 1200 },
            { id: 7, name: "المنامة التجارية", x: 65, y: 25, type: "business", users: 900 },
            { id: 8, name: "الكويت الترفيهية", x: 70, y: 20, type: "entertainment", users: 1700 }
        ];

        // حالة التطبيق
        let currentState = {
            activeTab: 'recommended',
            filters: {
                category: '',
                level: '',
                language: '',
                activity: '',
                tag: 'recommended'
            },
            searchQuery: '',
            map: null,
            mapZoom: 1
        };

        // تهيئة الصفحة
        document.addEventListener('DOMContentLoaded', function() {
            initializeExplorePage();
        });

        function initializeExplorePage() {
            loadPersonalizedContent();
            setupEventListeners();
            initializeMap();
            initializeWorldMap();
            simulateAIRecommendations();
        }

        function loadPersonalizedContent() {
            loadPersonalRecommendations();
            loadInterestBasedContent();
            loadTrendingContent();
            loadCategoriesContent();
        }

        function loadPersonalRecommendations() {
            const container = document.getElementById('personalRecommendations');
            container.innerHTML = '';
            
            exploreContent.recommended.forEach(item => {
                const recommendation = createRecommendationCard(item);
                container.appendChild(recommendation);
            });
        }

        function loadInterestBasedContent() {
            const container = document.getElementById('interestBasedContent');
            container.innerHTML = '';
            
            // تصفية المحتوى بناءً على اهتمامات المستخدم
            const interestBased = exploreContent.recommended.filter(item => 
                userProfile.interests.includes(item.category)
            );
            
            interestBased.forEach(item => {
                const card = createContentCard(item);
                container.appendChild(card);
            });
        }

        function loadTrendingContent() {
            const container = document.getElementById('trendingContent');
            container.innerHTML = '';
            
            exploreContent.trending.forEach(item => {
                const card = createContentCard(item);
                container.appendChild(card);
            });
        }

        function loadCategoriesContent() {
            const container = document.getElementById('categoriesContent');
            container.innerHTML = '';
            
            exploreContent.categories.forEach(category => {
                const card = createCategoryCard(category);
                container.appendChild(card);
            });
        }

        function createRecommendationCard(item) {
            const card = document.createElement('div');
            card.className = 'recommendation-card';
            card.innerHTML = `
                <div class="recommendation-icon">
                    <i class="fas fa-star"></i>
                </div>
                <div class="recommendation-content">
                    <div class="recommendation-title">${item.title}</div>
                    <div class="recommendation-description">${item.description}</div>
                    <div class="recommendation-meta">
                        <span>${item.stats.members} عضو</span>
                        <span>${item.stats.online} متواجد</span>
                        <span class="match-percentage">${item.match}% تطابق</span>
                    </div>
                </div>
            `;
            
            card.addEventListener('click', () => {
                showNotification(`جاري الانتقال إلى ${item.title}`);
                // هنا سيتم الانتقال إلى صفحة العالم
            });
            
            return card;
        }

        function createContentCard(item) {
            const card = document.createElement('div');
            card.className = 'content-card';
            card.innerHTML = `
                <div class="card-header">
                    <img src="${item.image}" class="card-image" alt="${item.title}">
                    <div class="card-badge">${getActivityBadge(item.activity)}</div>
                    <div class="card-overlay">
                        <div class="card-title">${item.title}</div>
                        <div class="card-stats">
                            <span>${item.stats.members} عضو</span>
                            <span>${item.stats.online} متواجد</span>
                            <span>⭐ ${item.stats.rating}</span>
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <div class="card-description">${item.description}</div>
                    <div class="card-tags">
                        ${item.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="card-actions">
                        <button class="card-btn">استكشاف العالم</button>
                        <button class="save-btn">
                            <i class="fas fa-bookmark"></i>
                        </button>
                    </div>
                </div>
            `;
            
            // تفعيل زر الحفظ
            const saveBtn = card.querySelector('.save-btn');
            saveBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                this.classList.toggle('active');
                showNotification(this.classList.contains('active') ? 'تم الإضافة إلى المحفوظات' : 'تم الإزالة من المحفوظات');
            });
            
            card.addEventListener('click', () => {
                showNotification(`جاري الانتقال إلى ${item.title}`);
                // هنا سيتم الانتقال إلى صفحة العالم
            });
            
            return card;
        }

        function createCategoryCard(category) {
            const card = document.createElement('div');
            card.className = 'content-card';
            card.innerHTML = `
                <div class="card-header">
                    <img src="${category.image}" class="card-image" alt="${category.title}">
                    <div class="card-overlay">
                        <div class="card-title">${category.title}</div>
                        <div class="card-stats">
                            <span>${category.count}</span>
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <div class="card-description">${category.description}</div>
                    <div class="card-actions">
                        <button class="card-btn">استكشاف الفئة</button>
                    </div>
                </div>
            `;
            
            card.addEventListener('click', () => {
                showNotification(`جاري فتح فئة ${category.title}`);
                // هنا سيتم فتح صفحة الفئة
            });
            
            return card;
        }

        function getActivityBadge(activity) {
            const badges = {
                'live': 'مباشر الآن',
                'active': 'نشط',
                'popular': 'شائع',
                'new': 'جديد'
            };
            return badges[activity] || 'نشط';
        }

        function initializeMap() {
            // تهيئة خريطة Leaflet
            const map = L.map('exploreMap').setView([userProfile.location.lat, userProfile.location.lng], 12);
            
            // إضافة طبقة الخريطة (استخدام خريطة مظلمة)
            L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            
            // إضافة علامة موقع المستخدم
            L.marker([userProfile.location.lat, userProfile.location.lng])
                .addTo(map)
                .bindPopup('موقعك الحالي')
                .openPopup();
            
            // إضافة عوالم قريبة
            exploreContent.recommended.forEach(realm => {
                L.marker([realm.location.lat, realm.location.lng])
                    .addTo(map)
                    .bindPopup(`
                        <b>${realm.title}</b><br>
                        ${realm.stats.online} متواجد<br>
                        ${realm.stats.rating} ⭐
                    `);
            });
            
            currentState.map = map;
        }

        function initializeWorldMap() {
            const mapContainer = document.getElementById('worldMap');
            const tooltip = document.getElementById('mapTooltip');
            
            // إضافة نقاط العوالم إلى الخريطة
            worldRealms.forEach(realm => {
                const point = document.createElement('div');
                point.className = 'map-point';
                point.style.left = `${realm.x}%`;
                point.style.top = `${realm.y}%`;
                point.dataset.id = realm.id;
                
                point.addEventListener('mouseenter', function() {
                    // إظهار التلميح
                    const realmData = worldRealms.find(r => r.id === realm.id);
                    tooltip.innerHTML = `
                        <div><strong>${realmData.name}</strong></div>
                        <div>${realmData.users} مستخدم</div>
                        <div>${getRealmType(realmData.type)}</div>
                    `;
                    tooltip.style.display = 'block';
                    tooltip.style.left = `${realm.x}%`;
                    tooltip.style.top = `${realm.y - 10}%`;
                    
                    // تمييز النقطة
                    this.classList.add('active');
                });
                
                point.addEventListener('mouseleave', function() {
                    tooltip.style.display = 'none';
                    this.classList.remove('active');
                });
                
                point.addEventListener('click', function() {
                    const realmData = worldRealms.find(r => r.id === realm.id);
                    showNotification(`جاري الانتقال إلى ${realmData.name}`);
                    // هنا سيتم الانتقال إلى العالم
                });
                
                mapContainer.appendChild(point);
            });
            
            // عناصر التحكم في التكبير
            document.getElementById('zoomIn').addEventListener('click', function() {
                currentState.mapZoom = Math.min(currentState.mapZoom + 0.1, 1.5);
                updateMapZoom();
            });
            
            document.getElementById('zoomOut').addEventListener('click', function() {
                currentState.mapZoom = Math.max(currentState.mapZoom - 0.1, 0.5);
                updateMapZoom();
            });
        }

        function updateMapZoom() {
            const mapContainer = document.getElementById('worldMap');
            mapContainer.style.transform = `scale(${currentState.mapZoom})`;
        }

        function getRealmType(type) {
            const types = {
                'technology': 'تقنية',
                'arts': 'فنون',
                'business': 'أعمال',
                'education': 'تعليم',
                'sports': 'رياضة',
                'entertainment': 'ترفيه'
            };
            return types[type] || type;
        }

        function setupEventListeners() {
            // تبويبات المحتوى
            const contentTabs = document.querySelectorAll('.content-tab');
            contentTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const targetTab = this.dataset.tab;
                    
                    // إزالة النشاط من جميع التبويبات
                    contentTabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // إخفاء جميع الأقسام
                    document.querySelectorAll('.content-section').forEach(section => {
                        section.classList.remove('active');
                    });
                    
                    // إظهار القسم المحدد
                    document.getElementById(`${targetTab}-content`).classList.add('active');
                    
                    // تحديث حالة التطبيق
                    currentState.activeTab = targetTab;
                });
            });
            
            // فلاتر الوسوم
            const filterTags = document.querySelectorAll('.filter-tag');
            filterTags.forEach(tag => {
                tag.addEventListener('click', function() {
                    // إزالة النشاط من جميع الوسوم
                    filterTags.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // تحديث الفلتر
                    currentState.filters.tag = this.dataset.filter;
                    applyFilters();
                });
            });
            
            // فلاتر التحديد
            const selectFilters = document.querySelectorAll('.filter-select');
            selectFilters.forEach(select => {
                select.addEventListener('change', function() {
                    const filterType = this.id.replace('Filter', '');
                    currentState.filters[filterType] = this.value;
                    applyFilters();
                });
            });
            
            // البحث
            const searchInput = document.getElementById('mainSearchInput');
            let searchTimeout;
            searchInput.addEventListener('input', function() {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    currentState.searchQuery = this.value;
                    performSearch();
                }, 500);
            });
            
            // زر العودة
            document.getElementById('backBtn').addEventListener('click', function() {
                window.history.back();
            });
        }

        function applyFilters() {
            // محاكاة تطبيق الفلاتر
            showNotification('جاري تطبيق الفلاتر...');
            
            // هنا سيتم تصفية المحتوى بناءً على الفلاتر
            setTimeout(() => {
                showNotification('تم تطبيق الفلاتر بنجاح');
            }, 1000);
        }

        function performSearch() {
            if (currentState.searchQuery.length > 2) {
                showNotification(`جاري البحث عن "${currentState.searchQuery}"...`);
                
                // محاكاة البحث
                setTimeout(() => {
                    showNotification(`تم العثور على 24 نتيجة لـ "${currentState.searchQuery}"`);
                }, 1500);
            }
        }

        function simulateAIRecommendations() {
            // محاكاة تحديثات الذكاء الاصطناعي في الوقت الحقيقي
            setInterval(() => {
                // تحديث محتوى موصى به بشكل عشوائي
                if (Math.random() > 0.7) {
                    const randomIndex = Math.floor(Math.random() * exploreContent.recommended.length);
                    const updatedItem = {...exploreContent.recommended[randomIndex]};
                    updatedItem.match = Math.min(updatedItem.match + 5, 99);
                    
                    // تحديث الواجهة إذا كان القسم نشطاً
                    if (currentState.activeTab === 'recommended') {
                        loadPersonalRecommendations();
                        showNotification('تم تحديث التوصيات بناءً على نشاطك الجديد', 'info');
                    }
                }
            }, 15000); // كل 15 ثانية
        }

        function showNotification(message, type = 'success') {
            // إنشاء إشعار مؤقت
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 100px;
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
            `;
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        // محاكاة تحميل البيانات من API
        function fetchExploreData(filters) {
            // محاكاة اتصال API
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(exploreContent);
                }, 1000);
            });
        }

        // دالة للربط مع الواجهة الخلفية
        async function loadExploreDataFromAPI(filters = {}) {
            try {
                // محاكاة اتصال API حقيقي
                const response = await fetchExploreData(filters);
                return response;
            } catch (error) {
                console.error('Error fetching explore data:', error);
                showNotification('حدث خطأ في تحميل البيانات', 'error');
                return exploreContent; // البيانات الافتراضية في حالة الخطأ
            }
        }