// بيانات العالم الحالي
        const currentRealm = {
            id: 1,
            title: "عالم الطبخ",
            icon: "fa-utensils",
            description: "تعلم الطبخ مع أشهر الطهاة، شارك في تحديات الطهي المباشر وابدأ رحلتك الطهوية مع مجتمع من عشاق الطبخ",
            tags: ["طبخ مباشر", "تحديات", "تعليمي", "وصفات", "مطبخ عالمي"],
            stats: {
                members: "12.5K",
                online: "2.4K",
                rating: "4.8"
            }
        };

        // بيانات المحتوى
        const realmContent = {
            all: [
                {
                    type: "challenge",
                    id: 1,
                    user: { name: "الشيف نورة", avatar: "👩‍🍳" },
                    time: "قبل ساعتين",
                    title: "تحدي الطبخ الإيطالي",
                    description: "شارك في تحضير أفضل طبق باستخدام المكونات الإيطالية الأساسية. التحدي ينتهي بعد 3 أيام!",
                    tags: ["تحدي", "إيطالي", "مسابقة"],
                    progress: 65,
                    participants: "1.2K",
                    prize: "500 نقطة",
                    likes: 245,
                    comments: 89
                },
                {
                    type: "education",
                    id: 2,
                    user: { name: "الشيف أحمد", avatar: "👨‍🍳" },
                    time: "قبل 5 ساعات",
                    title: "دورة أساسيات الخبز",
                    description: "تعلم فن الخبز من الصفر مع هذا الدرس الشامل الذي يغطي جميع التقنيات الأساسية.",
                    tags: ["تعليمي", "خبز", "للمبتدئين"],
                    duration: "45 دقيقة",
                    level: "مبتدئ",
                    students: "3.4K",
                    likes: 512,
                    comments: 134
                },
                {
                    type: "discussion",
                    id: 3,
                    user: { name: "محمد العتيبي", avatar: "👤" },
                    time: "قبل يوم",
                    title: "أفضل أنواع الزيوت للطهي",
                    description: "ما هي أنواع الزيوت التي تنصحون بها للطهي الصحي؟ شاركونا تجاربكم ونصائحكم.",
                    tags: ["مناقشة", "صحة", "نصائح"],
                    replies: 156,
                    views: "2.3K",
                    likes: 189,
                    comments: 45
                },
                {
                    type: "live",
                    id: 4,
                    user: { name: "الشيف سارة", avatar: "👩‍🍳" },
                    time: "مباشر الآن",
                    title: "طبخ حي: أطباق عربية تقليدية",
                    description: "انضموا إلي في تحضير أشهى الأطباق العربية التقليدية مع نصائح وحيل احترافية.",
                    tags: ["مباشر", "عربي", "تقليدي"],
                    viewers: "1.8K",
                    duration: "ساعة",
                    likes: 892,
                    comments: 267
                },
                {
                    type: "media",
                    id: 5,
                    user: { name: "فاطمة القحطاني", avatar: "👤" },
                    time: "قبل 3 أيام",
                    title: "كعكة الشوكولاتة اللذيذة",
                    description: "شاركتكم وصفة كعكة الشوكولاتة التي حضرتها اليوم. النتيجة مذهلة!",
                    tags: ["صورة", "حلويات", "وصفة"],
                    mediaType: "image",
                    likes: 324,
                    comments: 78
                }
            ],
            challenges: [
                {
                    id: 1,
                    user: { name: "الشيف نورة", avatar: "👩‍🍳" },
                    time: "قبل ساعتين",
                    title: "تحدي الطبخ الإيطالي",
                    description: "شارك في تحضير أفضل طبق باستخدام المكونات الإيطالية الأساسية.",
                    progress: 65,
                    participants: "1.2K",
                    prize: "500 نقطة",
                    deadline: "3 أيام متبقية"
                },
                {
                    id: 2,
                    user: { name: "مطعم إيطاليا", avatar: "🏪" },
                    time: "قبل أسبوع",
                    title: "تحدي البيتزا الإيطالية",
                    description: "اصنع أفضل بيتزا إيطالية تقليدية واربح وجبة مجانية في مطعمنا!",
                    progress: 42,
                    participants: "856",
                    prize: "وجبة مجانية",
                    deadline: "أسبوع متبقي"
                }
            ],
            education: [
                {
                    id: 1,
                    user: { name: "الشيف أحمد", avatar: "👨‍🍳" },
                    time: "قبل 5 ساعات",
                    title: "دورة أساسيات الخبز",
                    description: "تعلم فن الخبز من الصفر مع هذا الدرس الشامل.",
                    duration: "45 دقيقة",
                    level: "مبتدئ",
                    students: "3.4K"
                },
                {
                    id: 2,
                    user: { name: "الشيفة لمياء", avatar: "👩‍🍳" },
                    time: "قبل يومين",
                    title: "تقنيات التقطيع الاحترافية",
                    description: "إتقان مهارات التقطيع المختلفة بأمان وكفاءة.",
                    duration: "30 دقيقة",
                    level: "متوسط",
                    students: "2.1K"
                }
            ],
            discussions: [
                {
                    id: 1,
                    user: { name: "محمد العتيبي", avatar: "👤" },
                    time: "قبل يوم",
                    title: "أفضل أنواع الزيوت للطهي",
                    description: "ما هي أنواع الزيوت التي تنصحون بها للطهي الصحي؟",
                    replies: 156,
                    views: "2.3K"
                },
                {
                    id: 2,
                    user: { name: "نورة السعد", avatar: "👤" },
                    time: "قبل 3 أيام",
                    title: "نصائح لتنظيم المطبخ",
                    description: "كيف تنظمون مطابخكم لتكون عملية وجميلة؟",
                    replies: 89,
                    views: "1.5K"
                }
            ],
            live: [
                {
                    id: 1,
                    user: { name: "الشيف سارة", avatar: "👩‍🍳" },
                    time: "مباشر الآن",
                    title: "طبخ حي: أطباق عربية تقليدية",
                    description: "انضموا إلي في تحضير أشهى الأطباق العربية.",
                    viewers: "1.8K",
                    duration: "ساعة"
                }
            ],
            media: [
                {
                    id: 1,
                    user: { name: "فاطمة القحطاني", avatar: "👤" },
                    time: "قبل 3 أيام",
                    title: "كعكة الشوكولاتة اللذيذة",
                    description: "شاركتكم وصفة كعكة الشوكولاتة التي حضرتها اليوم.",
                    mediaType: "image"
                }
            ]
        };

        // تهيئة الصفحة
        document.addEventListener('DOMContentLoaded', function() {
            initializeRealmPage();
        });

        function initializeRealmPage() {
            loadRealmInfo();
            loadContent();
            setupEventListeners();
        }

        function loadRealmInfo() {
            // تحميل معلومات العالم
            document.getElementById('realmTitle').textContent = currentRealm.title;
            document.getElementById('realmIcon').className = `fas ${currentRealm.icon}`;
            document.getElementById('realmDescription').textContent = currentRealm.description;
            document.getElementById('membersCount').textContent = `${currentRealm.stats.members} عضو`;
            document.getElementById('onlineCount').textContent = `${currentRealm.stats.online} متواجد`;
            document.getElementById('rating').textContent = `${currentRealm.stats.rating}/5`;

            // إضافة الوسوم
            const tagsContainer = document.getElementById('realmTags');
            currentRealm.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.className = 'realm-tag';
                tagElement.textContent = tag;
                tagsContainer.appendChild(tagElement);
            });
        }

        function loadContent() {
            loadAllContent();
            loadChallenges();
            loadEducation();
            loadDiscussions();
            loadLive();
            loadMedia();
        }

        function loadAllContent() {
            const container = document.getElementById('allContentGrid');
            container.innerHTML = '';

            realmContent.all.forEach(content => {
                const contentCard = createContentCard(content);
                container.appendChild(contentCard);
            });
        }

        function loadChallenges() {
            const container = document.getElementById('challengesGrid');
            container.innerHTML = '';

            realmContent.challenges.forEach(challenge => {
                const challengeCard = createChallengeCard(challenge);
                container.appendChild(challengeCard);
            });
        }

        function loadEducation() {
            const container = document.getElementById('educationGrid');
            container.innerHTML = '';

            realmContent.education.forEach(education => {
                const educationCard = createEducationCard(education);
                container.appendChild(educationCard);
            });
        }

        function loadDiscussions() {
            const container = document.getElementById('discussionsGrid');
            container.innerHTML = '';

            realmContent.discussions.forEach(discussion => {
                const discussionCard = createDiscussionCard(discussion);
                container.appendChild(discussionCard);
            });
        }

        function loadLive() {
            const container = document.getElementById('liveGrid');
            container.innerHTML = '';

            realmContent.live.forEach(live => {
                const liveCard = createLiveCard(live);
                container.appendChild(liveCard);
            });
        }

        function loadMedia() {
            const container = document.getElementById('mediaGrid');
            container.innerHTML = '';

            realmContent.media.forEach(media => {
                const mediaCard = createMediaCard(media);
                container.appendChild(mediaCard);
            });
        }

        function createContentCard(content) {
            const card = document.createElement('div');
            card.className = `content-card ${content.type}-card`;
            
            let specificContent = '';
            
            if (content.type === 'challenge') {
                specificContent = `
                    <div class="challenge-badge">تحدي نشط</div>
                    <div class="challenge-stats">
                        <span>${content.participants} مشارك</span>
                        <span>الجائزة: ${content.prize}</span>
                    </div>
                    <div class="challenge-progress">
                        <div class="challenge-progress-bar" style="width: ${content.progress}%"></div>
                    </div>
                `;
            } else if (content.type === 'education') {
                specificContent = `
                    <div class="education-badge">درس تعليمي</div>
                    <div class="lesson-info">
                        <div class="lesson-duration">
                            <i class="fas fa-clock"></i>
                            <span>${content.duration}</span>
                        </div>
                        <div class="lesson-level">
                            <i class="fas fa-signal"></i>
                            <span>${content.level}</span>
                        </div>
                    </div>
                `;
            } else if (content.type === 'discussion') {
                specificContent = `
                    <div class="discussion-badge">مناقشة</div>
                    <div class="discussion-stats">
                        <span>${content.replies} رد</span>
                        <span>${content.views} مشاهدة</span>
                    </div>
                `;
            } else if (content.type === 'live') {
                specificContent = `
                    <div class="live-badge">مباشر • ${content.viewers}</div>
                `;
            }
            
            card.innerHTML = `
                <div class="content-card-header">
                    <div class="content-avatar">${content.user.avatar}</div>
                    <div class="content-user-info">
                        <div class="content-user-name">${content.user.name}</div>
                        <div class="content-time">${content.time}</div>
                    </div>
                </div>
                <div class="content-card-body">
                    <div class="content-text">
                        <h3>${content.title}</h3>
                        <p>${content.description}</p>
                    </div>
                    ${specificContent}
                    <div class="content-tags">
                        ${content.tags.map(tag => `<span class="content-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="content-actions">
                        <div class="action-buttons">
                            <button class="action-btn">
                                <i class="fas fa-heart"></i>
                                <span>${content.likes || 0}</span>
                            </button>
                            <button class="action-btn">
                                <i class="fas fa-comment"></i>
                                <span>${content.comments || 0}</span>
                            </button>
                            <button class="action-btn">
                                <i class="fas fa-share"></i>
                            </button>
                        </div>
                        <button class="action-btn">
                            <i class="fas fa-bookmark"></i>
                        </button>
                    </div>
                </div>
            `;
            
            return card;
        }

        function createChallengeCard(challenge) {
            const card = document.createElement('div');
            card.className = 'content-card challenge-card';
            card.innerHTML = `
                <div class="content-card-header">
                    <div class="content-avatar">${challenge.user.avatar}</div>
                    <div class="content-user-info">
                        <div class="content-user-name">${challenge.user.name}</div>
                        <div class="content-time">${challenge.time}</div>
                    </div>
                </div>
                <div class="content-card-body">
                    <div class="content-text">
                        <h3>${challenge.title}</h3>
                        <p>${challenge.description}</p>
                    </div>
                    <div class="challenge-badge">تحدي نشط</div>
                    <div class="challenge-stats">
                        <span>${challenge.participants} مشارك</span>
                        <span>الجائزة: ${challenge.prize}</span>
                        <span>${challenge.deadline}</span>
                    </div>
                    <div class="challenge-progress">
                        <div class="challenge-progress-bar" style="width: ${challenge.progress}%"></div>
                    </div>
                    <div class="content-actions">
                        <button class="action-btn">
                            <i class="fas fa-users"></i>
                            <span>${challenge.participants}</span>
                        </button>
                        <button class="join-btn" style="padding: 8px 16px; background: var(--gradient-challenge); border: none; border-radius: var(--radius-md); color: white; font-weight: 600; cursor: pointer;">
                            انضم للتحدي
                        </button>
                    </div>
                </div>
            `;
            return card;
        }

        function createEducationCard(education) {
            const card = document.createElement('div');
            card.className = 'content-card education-card';
            card.innerHTML = `
                <div class="content-card-header">
                    <div class="content-avatar">${education.user.avatar}</div>
                    <div class="content-user-info">
                        <div class="content-user-name">${education.user.name}</div>
                        <div class="content-time">${education.time}</div>
                    </div>
                </div>
                <div class="content-card-body">
                    <div class="content-text">
                        <h3>${education.title}</h3>
                        <p>${education.description}</p>
                    </div>
                    <div class="education-badge">درس تعليمي</div>
                    <div class="lesson-info">
                        <div class="lesson-duration">
                            <i class="fas fa-clock"></i>
                            <span>${education.duration}</span>
                        </div>
                        <div class="lesson-level">
                            <i class="fas fa-signal"></i>
                            <span>${education.level}</span>
                        </div>
                        <div class="lesson-students">
                            <i class="fas fa-users"></i>
                            <span>${education.students}</span>
                        </div>
                    </div>
                    <div class="content-actions">
                        <button class="action-btn">
                            <i class="fas fa-play-circle"></i>
                            <span>ابدأ التعلم</span>
                        </button>
                        <button class="action-btn">
                            <i class="fas fa-bookmark"></i>
                        </button>
                    </div>
                </div>
            `;
            return card;
        }

        function createDiscussionCard(discussion) {
            const card = document.createElement('div');
            card.className = 'content-card discussion-card';
            card.innerHTML = `
                <div class="content-card-header">
                    <div class="content-avatar">${discussion.user.avatar}</div>
                    <div class="content-user-info">
                        <div class="content-user-name">${discussion.user.name}</div>
                        <div class="content-time">${discussion.time}</div>
                    </div>
                </div>
                <div class="content-card-body">
                    <div class="content-text">
                        <h3>${discussion.title}</h3>
                        <p>${discussion.description}</p>
                    </div>
                    <div class="discussion-badge">مناقشة</div>
                    <div class="discussion-stats">
                        <span>${discussion.replies} رد</span>
                        <span>${discussion.views} مشاهدة</span>
                    </div>
                    <div class="content-actions">
                        <button class="action-btn">
                            <i class="fas fa-comment"></i>
                            <span>شارك بالرد</span>
                        </button>
                        <button class="action-btn">
                            <i class="fas fa-share"></i>
                        </button>
                    </div>
                </div>
            `;
            return card;
        }

        function createLiveCard(live) {
            const card = document.createElement('div');
            card.className = 'content-card live-stream-card';
            card.innerHTML = `
                <div class="content-card-header">
                    <div class="content-avatar">${live.user.avatar}</div>
                    <div class="content-user-info">
                        <div class="content-user-name">${live.user.name}</div>
                        <div class="content-time">${live.time}</div>
                    </div>
                </div>
                <div class="content-card-body">
                    <div class="live-badge">مباشر • ${live.viewers}</div>
                    <div class="content-text">
                        <h3>${live.title}</h3>
                        <p>${live.description}</p>
                    </div>
                    <div style="background: #000; height: 200px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: white; margin: 15px 0; font-weight: bold;">
                        📹 البث المباشر - ${live.viewers} مشاهد
                    </div>
                    <div class="content-actions">
                        <button class="action-btn" style="background: var(--accent-1); color: white; padding: 10px 20px; border-radius: var(--radius-md);">
                            <i class="fas fa-play"></i>
                            <span>انضم للمشاهدة</span>
                        </button>
                    </div>
                </div>
            `;
            return card;
        }

        function createMediaCard(media) {
            const card = document.createElement('div');
            card.className = 'content-card';
            card.innerHTML = `
                <div class="content-card-header">
                    <div class="content-avatar">${media.user.avatar}</div>
                    <div class="content-user-info">
                        <div class="content-user-name">${media.user.name}</div>
                        <div class="content-time">${media.time}</div>
                    </div>
                </div>
                <div class="content-card-body">
                    <div class="content-text">
                        <h3>${media.title}</h3>
                        <p>${media.description}</p>
                    </div>
                    <div style="background: linear-gradient(135deg, #${Math.floor(Math.random()*16777215).toString(16)}, #${Math.floor(Math.random()*16777215).toString(16)}); height: 200px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: white; margin: 15px 0; font-weight: bold;">
                        🖼️ ${media.mediaType === 'image' ? 'صورة' : 'فيديو'}
                    </div>
                    <div class="content-actions">
                        <button class="action-btn">
                            <i class="fas fa-heart"></i>
                            <span>124</span>
                        </button>
                        <button class="action-btn">
                            <i class="fas fa-comment"></i>
                            <span>32</span>
                        </button>
                        <button class="action-btn">
                            <i class="fas fa-share"></i>
                        </button>
                    </div>
                </div>
            `;
            return card;
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
                });
            });

            // فلتر الأقسام
            const filterBtns = document.querySelectorAll('.filter-btn');
            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const parent = this.closest('.section-actions');
                    parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    // هنا يمكن إضافة فلترة المحتوى
                });
            });

            // زر العودة
            document.getElementById('backBtn').addEventListener('click', function() {
                window.history.back();
            });

            // زر إنشاء محتوى جديد
            document.getElementById('createContentBtn').addEventListener('click', function() {
                alert('🎉 سيتم فتح نافذة إنشاء محتوى جديد!');
                // هنا سيتم فتح نافذة إنشاء محتوى
            });

            // تفاعل الأزرار
            document.addEventListener('click', function(e) {
                if (e.target.closest('.join-btn')) {
                    const card = e.target.closest('.content-card');
                    const title = card.querySelector('h3').textContent;
                    showNotification(`انضممت إلى "${title}" بنجاح! 🎯`);
                }

                if (e.target.closest('.action-btn')) {
                    const btn = e.target.closest('.action-btn');
                    btn.classList.toggle('active');
                }
            });
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