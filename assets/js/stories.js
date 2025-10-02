// بيانات القصص
        const storiesData = {
            currentUser: {
                id: 1,
                name: "أحمد محمد",
                avatar: "أ",
                stories: [
                    {
                        id: 101,
                        type: "image",
                        content: "🌟",
                        duration: 4, // ساعات
                        createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
                        views: 124,
                        reactions: [
                            { type: "like", count: 45 },
                            { type: "love", count: 23 },
                            { type: "laugh", count: 12 }
                        ]
                    },
                    {
                        id: 102,
                        type: "image",
                        content: "🎉",
                        duration: 8,
                        createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
                        views: 89,
                        reactions: [
                            { type: "like", count: 32 },
                            { type: "love", count: 15 }
                        ]
                    }
                ]
            },
            users: [
                {
                    id: 2,
                    name: "فاطمة علي",
                    avatar: "ف",
                    hasNewStories: true,
                    stories: [
                        {
                            id: 201,
                            type: "image",
                            content: "🌅",
                            duration: 2,
                            createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
                            views: 156,
                            reactions: [
                                { type: "like", count: 67 },
                                { type: "love", count: 34 },
                                { type: "wow", count: 8 }
                            ]
                        },
                        {
                            id: 202,
                            type: "text",
                            content: "أحب مشاركة إنجازاتي معكم! 🎯",
                            backgroundColor: "#6366f1",
                            duration: 5,
                            createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
                            views: 203,
                            reactions: [
                                { type: "like", count: 89 },
                                { type: "love", count: 45 },
                                { type: "laugh", count: 12 }
                            ]
                        }
                    ]
                },
                {
                    id: 3,
                    name: "خالد السعد",
                    avatar: "خ",
                    hasNewStories: false,
                    stories: [
                        {
                            id: 301,
                            type: "image",
                            content: "🏆",
                            duration: 6,
                            createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
                            views: 98,
                            reactions: [
                                { type: "like", count: 42 },
                                { type: "love", count: 18 }
                            ]
                        }
                    ]
                },
                {
                    id: 4,
                    name: "نورة القحطاني",
                    avatar: "ن",
                    hasNewStories: true,
                    stories: [
                        {
                            id: 401,
                            type: "text",
                            content: "صباح الخير! ☀️ يوم جديد، فرص جديدة",
                            backgroundColor: "#f59e0b",
                            duration: 3,
                            createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
                            views: 178,
                            reactions: [
                                { type: "like", count: 76 },
                                { type: "love", count: 32 },
                                { type: "wow", count: 5 }
                            ]
                        },
                        {
                            id: 402,
                            type: "image",
                            content: "🌙",
                            duration: 10,
                            createdAt: new Date(Date.now() - 10 * 60 * 60 * 1000),
                            views: 134,
                            reactions: [
                                { type: "like", count: 58 },
                                { type: "love", count: 27 }
                            ]
                        }
                    ]
                }
            ]
        };

        // حالة التطبيق
        let currentState = {
            currentStoryIndex: 0,
            currentUserIndex: 0,
            storyTimer: null,
            currentProgress: 0,
            isPlaying: false,
            likedStories: new Set()
        };

        // تهيئة النظام
        document.addEventListener('DOMContentLoaded', function() {
            initializeStoriesSystem();
        });

        function initializeStoriesSystem() {
            loadStories();
            setupEventListeners();
            simulateRealTimeUpdates();
        }

        function loadStories() {
            const container = document.getElementById('storiesGrid');
            container.innerHTML = '';

            storiesData.users.forEach(user => {
                const userStoriesCard = createUserStoriesCard(user);
                container.appendChild(userStoriesCard);
            });
        }

        function createUserStoriesCard(user) {
            const card = document.createElement('div');
            card.className = 'user-stories-card';
            card.dataset.userId = user.id;
            
            let newStoriesIndicator = '';
            if (user.hasNewStories) {
                newStoriesIndicator = '<div class="new-stories-indicator"></div>';
            }
            
            let storiesPreview = '';
            user.stories.slice(0, 3).forEach(story => {
                storiesPreview += `
                    <div class="story-preview-item" data-story-id="${story.id}">
                        <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white; font-size: 24px;">
                            ${story.type === 'text' ? '📝' : story.content}
                        </div>
                        <div class="story-preview-duration">${story.duration}س</div>
                    </div>
                `;
            });
            
            card.innerHTML = `
                <div class="user-stories-header">
                    <div class="user-avatar ${user.hasNewStories ? 'has-stories pulse-animation' : ''}">
                        ${user.avatar}
                        ${newStoriesIndicator}
                    </div>
                    <div class="user-info">
                        <div class="user-name">${user.name}</div>
                        <div class="story-time">${getRelativeTime(user.stories[0].createdAt)}</div>
                    </div>
                    <div class="story-count">${user.stories.length}</div>
                </div>
                <div class="stories-preview">
                    ${storiesPreview}
                </div>
            `;
            
            return card;
        }

        function setupEventListeners() {
            // فتح مشغل القصص
            document.addEventListener('click', function(e) {
                const storyPreview = e.target.closest('.story-preview-item');
                const userCard = e.target.closest('.user-stories-card');
                const userAvatar = e.target.closest('.user-avatar');
                
                if (storyPreview) {
                    const storyId = parseInt(storyPreview.dataset.storyId);
                    const userId = parseInt(userCard.dataset.userId);
                    openStoryViewer(userId, storyId);
                } else if (userAvatar || userCard) {
                    const userId = parseInt(userCard.dataset.userId);
                    openStoryViewer(userId, 0);
                }
            });

            // إضافة قصة جديدة
            document.getElementById('addStoryBtn').addEventListener('click', function() {
                document.getElementById('createStoryModal').classList.add('active');
            });

            // إغلاق نافذة الإنشاء
            document.getElementById('closeCreateStory').addEventListener('click', function() {
                document.getElementById('createStoryModal').classList.remove('active');
            });

            // خيارات إنشاء القصة
            document.getElementById('createPhotoStory').addEventListener('click', function() {
                createNewStory('photo');
            });

            document.getElementById('createVideoStory').addEventListener('click', function() {
                createNewStory('video');
            });

            document.getElementById('createTextStory').addEventListener('click', function() {
                createNewStory('text');
            });

            document.getElementById('uploadStory').addEventListener('click', function() {
                createNewStory('upload');
            });

            // إغلاق مشغل القصص
            document.getElementById('closeStoryViewer').addEventListener('click', closeStoryViewer);

            // التنقل بين القصص
            document.getElementById('prevStory').addEventListener('click', showPreviousStory);
            document.getElementById('nextStory').addEventListener('click', showNextStory);

            // تفاعلات القصة
            document.getElementById('likeStoryBtn').addEventListener('click', toggleLikeStory);
            document.getElementById('shareStoryBtn').addEventListener('click', shareStory);
            document.getElementById('sendStoryReply').addEventListener('click', sendStoryReply);
            document.getElementById('storyInput').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    sendStoryReply();
                }
            });

            // زر العودة
            document.getElementById('backBtn').addEventListener('click', function() {
                if (document.getElementById('storyViewer').classList.contains('active')) {
                    closeStoryViewer();
                } else if (document.getElementById('createStoryModal').classList.contains('active')) {
                    document.getElementById('createStoryModal').classList.remove('active');
                } else {
                    window.history.back();
                }
            });

            // التنقل بالسحب
            setupSwipeGestures();
        }

        function openStoryViewer(userId, storyId) {
            const user = storiesData.users.find(u => u.id === userId) || storiesData.currentUser;
            const storyIndex = storyId ? user.stories.findIndex(s => s.id === storyId) : 0;
            
            if (storyIndex === -1) return;
            
            currentState.currentUserIndex = storiesData.users.findIndex(u => u.id === userId);
            currentState.currentStoryIndex = storyIndex;
            currentState.isPlaying = true;
            
            // تحديث واجهة المشغل
            updateStoryViewer(user, storyIndex);
            
            // إظهار المشغل
            document.getElementById('storyViewer').classList.add('active');
            
            // بدء المؤقت
            startStoryTimer(user, storyIndex);
        }

        function updateStoryViewer(user, storyIndex) {
            const story = user.stories[storyIndex];
            
            // تحديث معلومات المستخدم
            document.getElementById('storyUserAvatar').textContent = user.avatar;
            document.getElementById('storyUserName').textContent = user.name;
            document.getElementById('storyPostTime').textContent = getRelativeTime(story.createdAt);
            
            // تحديث محتوى القصة
            const storyMedia = document.getElementById('storyMedia');
            if (story.type === 'text') {
                storyMedia.style.background = story.backgroundColor;
                storyMedia.style.display = 'flex';
                storyMedia.style.alignItems = 'center';
                storyMedia.style.justifyContent = 'center';
                storyMedia.style.color = 'white';
                storyMedia.style.fontSize = '24px';
                storyMedia.style.fontWeight = '600';
                storyMedia.style.padding = '20px';
                storyMedia.style.textAlign = 'center';
                storyMedia.textContent = story.content;
                storyMedia.src = '';
            } else {
                storyMedia.style.background = 'transparent';
                storyMedia.style.display = 'block';
                storyMedia.src = '';
                storyMedia.alt = 'قصة';
                // في التطبيق الحقيقي، هنا سيتم تحميل الصورة/الفيديو
                storyMedia.style.display = 'flex';
                storyMedia.style.alignItems = 'center';
                storyMedia.style.justifyContent = 'center';
                storyMedia.style.fontSize = '48px';
                storyMedia.textContent = story.content;
            }
            
            // تحديث أشرطة التقدم
            updateProgressBars(user, storyIndex);
            
            // تحديث التفاعلات
            updateStoryReactions(story);
            
            // تحديث حالة الإعجاب
            updateLikeButton(story.id);
        }

        function updateProgressBars(user, currentIndex) {
            const container = document.getElementById('storyProgressContainer');
            container.innerHTML = '';
            
            user.stories.forEach((story, index) => {
                const progressBar = document.createElement('div');
                progressBar.className = 'story-progress-bar';
                
                const progressFill = document.createElement('div');
                progressFill.className = 'story-progress-fill';
                progressFill.style.width = index < currentIndex ? '100%' : 
                                          index === currentIndex ? '0%' : '0%';
                
                progressBar.appendChild(progressFill);
                container.appendChild(progressBar);
            });
        }

        function updateStoryReactions(story) {
            const container = document.getElementById('storyReactions');
            container.innerHTML = '';
            
            const reactionEmojis = {
                'like': '👍',
                'love': '❤️',
                'laugh': '😂',
                'wow': '😮',
                'sad': '😢',
                'angry': '😠'
            };
            
            story.reactions.forEach(reaction => {
                if (reaction.count > 0) {
                    const reactionItem = document.createElement('div');
                    reactionItem.className = 'reaction-item';
                    reactionItem.innerHTML = `
                        <span class="reaction-emoji">${reactionEmojis[reaction.type]}</span>
                        <span class="reaction-count">${reaction.count}</span>
                    `;
                    container.appendChild(reactionItem);
                }
            });
        }

        function updateLikeButton(storyId) {
            const likeBtn = document.getElementById('likeStoryBtn');
            const likeIcon = likeBtn.querySelector('i');
            
            if (currentState.likedStories.has(storyId)) {
                likeBtn.classList.add('liked');
                likeIcon.className = 'fas fa-heart';
            } else {
                likeBtn.classList.remove('liked');
                likeIcon.className = 'far fa-heart';
            }
        }

        function startStoryTimer(user, storyIndex) {
            // إيقاف أي مؤقت سابق
            stopStoryTimer();
            
            const progressFill = document.querySelectorAll('.story-progress-fill')[storyIndex];
            currentState.currentProgress = 0;
            
            currentState.storyTimer = setInterval(() => {
                currentState.currentProgress += 1;
                progressFill.style.width = `${currentState.currentProgress}%`;
                
                if (currentState.currentProgress >= 100) {
                    showNextStory();
                }
            }, 50); // 5 ثوان للقصة الواحدة
        }

        function stopStoryTimer() {
            if (currentState.storyTimer) {
                clearInterval(currentState.storyTimer);
                currentState.storyTimer = null;
            }
        }

        function showNextStory() {
            const currentUser = storiesData.users[currentState.currentUserIndex];
            
            if (currentState.currentStoryIndex < currentUser.stories.length - 1) {
                // الانتقال للقصة التالية لنفس المستخدم
                currentState.currentStoryIndex++;
                updateStoryViewer(currentUser, currentState.currentStoryIndex);
                startStoryTimer(currentUser, currentState.currentStoryIndex);
            } else if (currentState.currentUserIndex < storiesData.users.length - 1) {
                // الانتقال للمستخدم التالي
                currentState.currentUserIndex++;
                currentState.currentStoryIndex = 0;
                const nextUser = storiesData.users[currentState.currentUserIndex];
                updateStoryViewer(nextUser, 0);
                startStoryTimer(nextUser, 0);
            } else {
                // نهاية جميع القصص
                closeStoryViewer();
            }
        }

        function showPreviousStory() {
            if (currentState.currentStoryIndex > 0) {
                // الانتقال للقصة السابقة لنفس المستخدم
                currentState.currentStoryIndex--;
                const currentUser = storiesData.users[currentState.currentUserIndex];
                updateStoryViewer(currentUser, currentState.currentStoryIndex);
                startStoryTimer(currentUser, currentState.currentStoryIndex);
            } else if (currentState.currentUserIndex > 0) {
                // الانتقال للمستخدم السابق
                currentState.currentUserIndex--;
                const prevUser = storiesData.users[currentState.currentUserIndex];
                currentState.currentStoryIndex = prevUser.stories.length - 1;
                updateStoryViewer(prevUser, currentState.currentStoryIndex);
                startStoryTimer(prevUser, currentState.currentStoryIndex);
            }
        }

        function closeStoryViewer() {
            stopStoryTimer();
            document.getElementById('storyViewer').classList.remove('active');
            currentState.isPlaying = false;
        }

        function toggleLikeStory() {
            const currentUser = storiesData.users[currentState.currentUserIndex];
            const currentStory = currentUser.stories[currentState.currentStoryIndex];
            const storyId = currentStory.id;
            
            if (currentState.likedStories.has(storyId)) {
                currentState.likedStories.delete(storyId);
                // تقليل عدد الإعجابات
                const likeReaction = currentStory.reactions.find(r => r.type === 'like');
                if (likeReaction && likeReaction.count > 0) {
                    likeReaction.count--;
                }
            } else {
                currentState.likedStories.add(storyId);
                // زيادة عدد الإعجابات
                let likeReaction = currentStory.reactions.find(r => r.type === 'like');
                if (!likeReaction) {
                    likeReaction = { type: 'like', count: 0 };
                    currentStory.reactions.push(likeReaction);
                }
                likeReaction.count++;
            }
            
            updateLikeButton(storyId);
            updateStoryReactions(currentStory);
            
            // إرسال الإعجاب للخادم (محاكاة)
            StoriesAPI.likeStory(storyId, !currentState.likedStories.has(storyId));
        }

        function shareStory() {
            const currentUser = storiesData.users[currentState.currentUserIndex];
            const currentStory = currentUser.stories[currentState.currentStoryIndex];
            
            showNotification(`تم مشاركة قصة ${currentUser.name}`);
            StoriesAPI.shareStory(currentStory.id);
        }

        function sendStoryReply() {
            const input = document.getElementById('storyInput');
            const message = input.value.trim();
            
            if (message) {
                const currentUser = storiesData.users[currentState.currentUserIndex];
                const currentStory = currentUser.stories[currentState.currentStoryIndex];
                
                showNotification('تم إرسال ردك بنجاح');
                StoriesAPI.sendStoryReply(currentStory.id, message);
                
                input.value = '';
            }
        }

        function createNewStory(type) {
            document.getElementById('createStoryModal').classList.remove('active');
            
            let message = '';
            switch(type) {
                case 'photo':
                    message = 'جاري فتح الكاميرا...';
                    break;
                case 'video':
                    message = 'جاري فتح الكاميرا للتسجيل...';
                    break;
                case 'text':
                    message = 'جاري فتح محرر النص...';
                    break;
                case 'upload':
                    message = 'جاري فتح ملفات الجهاز...';
                    break;
            }
            
            showNotification(message);
            
            // محاكاة إنشاء القصة
            setTimeout(() => {
                const newStory = {
                    id: Date.now(),
                    type: type === 'text' ? 'text' : 'image',
                    content: type === 'text' ? 'قصة جديدة رائعة! 🎉' : '📸',
                    duration: 0,
                    createdAt: new Date(),
                    views: 0,
                    reactions: []
                };
                
                storiesData.currentUser.stories.unshift(newStory);
                showNotification('تم إنشاء قصتك بنجاح! 🎊');
            }, 2000);
        }

        function setupSwipeGestures() {
            let startX = 0;
            let startY = 0;
            
            document.addEventListener('touchstart', function(e) {
                if (!currentState.isPlaying) return;
                
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            });
            
            document.addEventListener('touchend', function(e) {
                if (!currentState.isPlaying) return;
                
                const endX = e.changedTouches[0].clientX;
                const endY = e.changedTouches[0].clientY;
                
                const diffX = startX - endX;
                const diffY = startY - endY;
                
                // تجاهل السحب العمودي الصغير
                if (Math.abs(diffY) > 50) return;
                
                if (Math.abs(diffX) > 50) {
                    if (diffX > 0) {
                        // سحب لليسار - التالي
                        showNextStory();
                    } else {
                        // سحب لليمين - السابق
                        showPreviousStory();
                    }
                }
            });
        }

        function simulateRealTimeUpdates() {
            // محاكاة تحديثات في الوقت الحقيقي
            setInterval(() => {
                // تحديث وقت القصص
                storiesData.users.forEach(user => {
                    user.stories.forEach(story => {
                        // محاكاة زيادة المشاهدات
                        if (Math.random() > 0.7) {
                            story.views += Math.floor(Math.random() * 5);
                        }
                    });
                });
            }, 10000);
        }

        function getRelativeTime(date) {
            const now = new Date();
            const diffMs = now - date;
            const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
            
            if (diffHours < 1) {
                const diffMinutes = Math.floor(diffMs / (1000 * 60));
                return `منذ ${diffMinutes} دقيقة`;
            } else if (diffHours < 24) {
                return `منذ ${diffHours} ساعة`;
            } else {
                const diffDays = Math.floor(diffHours / 24);
                return `منذ ${diffDays} يوم`;
            }
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

        // محاكاة API للربط مع الواجهة الخلفية
        const StoriesAPI = {
            // الحصول على القصص
            getStories: async function() {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve(storiesData);
                    }, 500);
                });
            },

            // إعجاب بقصة
            likeStory: async function(storyId, like) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve({ success: true, storyId, like });
                    }, 300);
                });
            },

            // مشاركة قصة
            shareStory: async function(storyId) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve({ success: true, storyId });
                    }, 300);
                });
            },

            // إرسال رد على قصة
            sendStoryReply: async function(storyId, message) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve({ success: true, storyId, message });
                    }, 500);
                });
            },

            // إنشاء قصة جديدة
            createStory: async function(storyData) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve({ success: true, story: { ...storyData, id: Date.now() } });
                    }, 1000);
                });
            },

            // حذف قصة
            deleteStory: async function(storyId) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve({ success: true, storyId });
                    }, 500);
                });
            }
        };