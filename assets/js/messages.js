// بيانات المحادثات والمستخدمين
        const conversationsData = [
            {
                id: 1,
                type: 'individual',
                user: {
                    id: 101,
                    name: 'محمد أحمد',
                    avatar: 'م',
                    status: 'متصل الآن',
                    isOnline: true
                },
                lastMessage: {
                    content: 'مرحباً، كيف حالك؟',
                    time: '10:30',
                    isRead: true,
                    isSent: true
                },
                unreadCount: 0
            },
            {
                id: 2,
                type: 'individual',
                user: {
                    id: 102,
                    name: 'فاطمة علي',
                    avatar: 'ف',
                    status: 'كان متصل منذ 5 دقائق',
                    isOnline: false
                },
                lastMessage: {
                    content: 'شكراً على المساعدة! 🎉',
                    time: 'أمس',
                    isRead: false,
                    isSent: false
                },
                unreadCount: 2
            },
            {
                id: 3,
                type: 'group',
                name: 'فريق التطوير',
                avatar: '👨‍💻',
                members: ['أحمد', 'فاطمة', 'خالد', 'نورة'],
                lastMessage: {
                    content: 'خالد: سأنهي المهمة اليوم',
                    time: '09:15',
                    isRead: true,
                    isSent: false
                },
                unreadCount: 0
            },
            {
                id: 4,
                type: 'individual',
                user: {
                    id: 103,
                    name: 'خالد السعد',
                    avatar: 'خ',
                    status: 'يكتب...',
                    isOnline: true
                },
                lastMessage: {
                    content: 'هل يمكنك مساعدتي في المشروع؟',
                    time: '08:45',
                    isRead: true,
                    isSent: false
                },
                unreadCount: 0
            }
        ];

        // بيانات الرسائل
        const messagesData = {
            1: [
                {
                    id: 1,
                    content: 'مرحباً، كيف حالك؟',
                    time: '10:30',
                    isSent: true,
                    type: 'text'
                },
                {
                    id: 2,
                    content: 'أهلاً! أنا بخير، شكراً. كيف أمورك؟',
                    time: '10:31',
                    isSent: false,
                    type: 'text'
                },
                {
                    id: 3,
                    content: 'أنا أيضاً بخير. هل انتهيت من المهمة؟',
                    time: '10:32',
                    isSent: true,
                    type: 'text'
                },
                {
                    id: 4,
                    content: 'نعم، انتهيت منها البارحة. هذا هو الملف النهائي',
                    time: '10:33',
                    isSent: false,
                    type: 'file',
                    file: {
                        name: 'المشروع النهائي.pdf',
                        size: '2.4 MB',
                        type: 'pdf'
                    }
                }
            ],
            2: [
                {
                    id: 1,
                    content: 'شكراً جزيلاً على مساعدتك في المشروع!',
                    time: '22:15',
                    isSent: false,
                    type: 'text'
                },
                {
                    id: 2,
                    content: 'لا شكر على واجب. كان من دواعي سروري المساعدة 🎉',
                    time: '22:16',
                    isSent: true,
                    type: 'text'
                },
                {
                    id: 3,
                    content: 'هذه صورة من الحفل الذي تحدثت عنه',
                    time: '22:17',
                    isSent: false,
                    type: 'image',
                    url: 'https://via.placeholder.com/300x200/6366f1/ffffff?text=صورة+الحفل'
                }
            ],
            3: [
                {
                    id: 1,
                    content: 'مرحباً بالجميع، كيف سير العمل؟',
                    time: '09:00',
                    isSent: false,
                    sender: 'أحمد',
                    type: 'text'
                },
                {
                    id: 2,
                    content: 'أنا أنتهي من الجزء الأمامي',
                    time: '09:05',
                    isSent: false,
                    sender: 'فاطمة',
                    type: 'text'
                },
                {
                    id: 3,
                    content: 'سأنهي المهمة اليوم',
                    time: '09:15',
                    isSent: false,
                    sender: 'خالد',
                    type: 'text'
                }
            ],
            4: [
                {
                    id: 1,
                    content: 'هل يمكنك مساعدتي في المشروع؟',
                    time: '08:45',
                    isSent: false,
                    type: 'text'
                }
            ]
        };

        // حالة التطبيق
        let currentState = {
            activeConversation: null,
            isTyping: false,
            call: {
                active: false,
                type: null, // 'audio' or 'video'
                duration: 0,
                timer: null,
                muted: false,
                videoOff: false
            },
            connection: 'connected' // 'connected', 'connecting', 'disconnected'
        };

        // تهيئة الصفحة
        document.addEventListener('DOMContentLoaded', function() {
            initializeMessagingSystem();
        });

        function initializeMessagingSystem() {
            loadConversations();
            setupEventListeners();
            simulateRealTimeUpdates();
        }

        function loadConversations() {
            const container = document.getElementById('conversationsList');
            container.innerHTML = '';

            conversationsData.forEach(conversation => {
                const conversationItem = createConversationItem(conversation);
                container.appendChild(conversationItem);
            });
        }

        function createConversationItem(conversation) {
            const item = document.createElement('div');
            item.className = 'conversation-item';
            item.dataset.id = conversation.id;
            
            if (conversation.type === 'individual') {
                item.innerHTML = `
                    <div class="user-avatar">
                        ${conversation.user.avatar}
                        ${conversation.user.isOnline ? '<div class="online-indicator"></div>' : ''}
                    </div>
                    <div class="conversation-info">
                        <div class="conversation-header">
                            <div class="user-name">${conversation.user.name}</div>
                            <div class="message-time">${conversation.lastMessage.time}</div>
                        </div>
                        <div class="last-message">${conversation.lastMessage.content}</div>
                    </div>
                    ${conversation.unreadCount > 0 ? `<div class="unread-badge">${conversation.unreadCount}</div>` : ''}
                `;
            } else {
                item.innerHTML = `
                    <div class="user-avatar">
                        ${conversation.avatar}
                    </div>
                    <div class="conversation-info">
                        <div class="conversation-header">
                            <div class="user-name">${conversation.name}</div>
                            <div class="message-time">${conversation.lastMessage.time}</div>
                        </div>
                        <div class="last-message">${conversation.lastMessage.content}</div>
                    </div>
                    ${conversation.unreadCount > 0 ? `<div class="unread-badge">${conversation.unreadCount}</div>` : ''}
                `;
            }
            
            return item;
        }

        function loadMessages(conversationId) {
            const messagesArea = document.getElementById('messagesArea');
            const messages = messagesData[conversationId] || [];
            
            messagesArea.innerHTML = '';
            
            messages.forEach(message => {
                const messageElement = createMessageElement(message, conversationId);
                messagesArea.appendChild(messageElement);
            });
            
            // التمرير إلى الأسفل
            messagesArea.scrollTop = messagesArea.scrollHeight;
            
            // إظهار منطقة الإدخال
            document.getElementById('messageInputArea').style.display = 'block';
            document.getElementById('chatActions').style.display = 'flex';
        }

        function createMessageElement(message, conversationId) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${message.isSent ? 'sent' : 'received'}`;
            
            let messageContent = '';
            
            if (message.type === 'text') {
                messageContent = `
                    <div class="message-content">${message.content}</div>
                `;
            } else if (message.type === 'image') {
                messageContent = `
                    <div class="message-content">${message.content}</div>
                    <div class="media-message">
                        <img src="${message.url}" alt="صورة مرسلة">
                    </div>
                `;
            } else if (message.type === 'file') {
                messageContent = `
                    <div class="message-content">${message.content}</div>
                    <div class="file-message">
                        <div class="file-icon">
                            <i class="fas fa-file-pdf"></i>
                        </div>
                        <div class="file-info">
                            <div class="file-name">${message.file.name}</div>
                            <div class="file-size">${message.file.size}</div>
                        </div>
                        <button class="download-btn">
                            <i class="fas fa-download"></i>
                        </button>
                    </div>
                `;
            }
            
            messageDiv.innerHTML = `
                ${messageContent}
                <div class="message-time">${message.time}</div>
            `;
            
            return messageDiv;
        }

        function setupEventListeners() {
            // اختيار المحادثة
            document.addEventListener('click', function(e) {
                const conversationItem = e.target.closest('.conversation-item');
                if (conversationItem) {
                    const conversationId = parseInt(conversationItem.dataset.id);
                    selectConversation(conversationId);
                    
                    // إغلاق الشريط الجانبي على الموبايل
                    if (window.innerWidth <= 768) {
                        document.getElementById('conversationsSidebar').classList.remove('active');
                    }
                }
            });
            
            // إرسال الرسالة
            document.getElementById('sendBtn').addEventListener('click', sendMessage);
            
            // الضغط على زر Enter لإرسال الرسالة
            document.getElementById('messageInput').addEventListener('keydown', function(e) {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                }
            });
            
            // التحقق من وجود نص في حقل الإدخال
            document.getElementById('messageInput').addEventListener('input', function() {
                const sendBtn = document.getElementById('sendBtn');
                sendBtn.disabled = this.value.trim() === '';
            });
            
            // إرفاق الوسائط
            document.getElementById('attachmentBtn').addEventListener('click', function() {
                document.getElementById('mediaSelector').classList.toggle('active');
            });
            
            // اختيار نوع الوسائط
            document.querySelectorAll('.media-option').forEach(option => {
                option.addEventListener('click', function() {
                    const type = this.dataset.type;
                    handleMediaSelection(type);
                });
            });
            
            // إغلاق منتقي الوسائط عند النقر خارجيه
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.media-selector') && !e.target.closest('#attachmentBtn')) {
                    document.getElementById('mediaSelector').classList.remove('active');
                }
            });
            
            // المكالمات
            document.getElementById('audioCallBtn').addEventListener('click', function() {
                startCall('audio');
            });
            
            document.getElementById('videoCallBtn').addEventListener('click', function() {
                startCall('video');
            });
            
            document.getElementById('endCallBtn').addEventListener('click', endCall);
            document.getElementById('muteBtn').addEventListener('click', toggleMute);
            document.getElementById('videoToggleBtn').addEventListener('click', toggleVideo);
            
            // زر العودة
            document.getElementById('backBtn').addEventListener('click', function() {
                if (currentState.call.active) {
                    endCall();
                } else if (currentState.activeConversation) {
                    deselectConversation();
                } else {
                    window.history.back();
                }
            });
            
            // تبديل الشريط الجانبي (للموبايل)
            document.getElementById('toggleSidebar').addEventListener('click', function() {
                document.getElementById('conversationsSidebar').classList.toggle('active');
            });
            
            // محادثة جديدة
            document.getElementById('newChatBtn').addEventListener('click', function() {
                showNotification('سيتم فتح نافذة إنشاء محادثة جديدة');
                // هنا سيتم فتح نافذة اختيار جهات الاتصال
            });
        }

        function selectConversation(conversationId) {
            // إزالة التحديد من جميع المحادثات
            document.querySelectorAll('.conversation-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // تحديد المحادثة المختارة
            document.querySelector(`.conversation-item[data-id="${conversationId}"]`).classList.add('active');
            
            // تحديث حالة التطبيق
            currentState.activeConversation = conversationId;
            
            // تحميل الرسائل
            loadMessages(conversationId);
            
            // تحديث معلومات المحادثة في الهيدر
            const conversation = conversationsData.find(c => c.id === conversationId);
            if (conversation.type === 'individual') {
                document.getElementById('currentChatAvatar').textContent = conversation.user.avatar;
                document.getElementById('currentChatName').textContent = conversation.user.name;
                document.getElementById('currentChatStatus').textContent = conversation.user.status;
                document.getElementById('callUserAvatar').textContent = conversation.user.avatar;
                document.getElementById('callUserName').textContent = conversation.user.name;
            } else {
                document.getElementById('currentChatAvatar').textContent = conversation.avatar;
                document.getElementById('currentChatName').textContent = conversation.name;
                document.getElementById('currentChatStatus').textContent = `${conversation.members.length} أعضاء`;
                document.getElementById('callUserAvatar').textContent = conversation.avatar;
                document.getElementById('callUserName').textContent = conversation.name;
            }
            
            // إعادة تعيين العداد غير المقروء
            conversation.unreadCount = 0;
            loadConversations();
        }

        function deselectConversation() {
            currentState.activeConversation = null;
            document.querySelectorAll('.conversation-item').forEach(item => {
                item.classList.remove('active');
            });
            document.getElementById('messagesArea').innerHTML = `
                <div class="welcome-message">
                    <div style="text-align: center; color: var(--text-secondary); padding: 40px 20px;">
                        <i class="fas fa-comments" style="font-size: 48px; margin-bottom: 15px; opacity: 0.5;"></i>
                        <h3 style="margin-bottom: 10px;">مرحباً بك في نظام المراسلات</h3>
                        <p>اختر محادثة من القائمة لبدء التحدث مع أصدقائك</p>
                    </div>
                </div>
            `;
            document.getElementById('messageInputArea').style.display = 'none';
            document.getElementById('chatActions').style.display = 'none';
        }

        function sendMessage() {
            const messageInput = document.getElementById('messageInput');
            const content = messageInput.value.trim();
            
            if (content === '' || !currentState.activeConversation) return;
            
            // إنشاء رسالة جديدة
            const newMessage = {
                id: Date.now(),
                content: content,
                time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
                isSent: true,
                type: 'text'
            };
            
            // إضافة الرسالة للعرض
            const messageElement = createMessageElement(newMessage);
            document.getElementById('messagesArea').appendChild(messageElement);
            
            // مسح حقل الإدخال
            messageInput.value = '';
            document.getElementById('sendBtn').disabled = true;
            
            // التمرير إلى الأسفل
            const messagesArea = document.getElementById('messagesArea');
            messagesArea.scrollTop = messagesArea.scrollHeight;
            
            // محاكاة الرد
            simulateReply(currentState.activeConversation);
        }

        function simulateReply(conversationId) {
            const conversation = conversationsData.find(c => c.id === conversationId);
            if (!conversation || conversation.type !== 'individual') return;
            
            // إظهار مؤشر الكتابة
            showTypingIndicator(conversation.user.name);
            
            // محاكاة وقت الكتابة
            setTimeout(() => {
                hideTypingIndicator();
                
                // إضافة رد تلقائي
                const replies = [
                    'أهلاً! شكراً على رسالتك',
                    'أنا هنا، كيف يمكنني مساعدتك؟',
                    'هذا رائع! 🎉',
                    'سأرد عليك قريباً',
                    'شكراً للمعلومات'
                ];
                
                const randomReply = replies[Math.floor(Math.random() * replies.length)];
                
                const replyMessage = {
                    id: Date.now() + 1,
                    content: randomReply,
                    time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
                    isSent: false,
                    type: 'text'
                };
                
                const messageElement = createMessageElement(replyMessage);
                document.getElementById('messagesArea').appendChild(messageElement);
                
                // التمرير إلى الأسفل
                const messagesArea = document.getElementById('messagesArea');
                messagesArea.scrollTop = messagesArea.scrollHeight;
                
                // تحديث المحادثة في القائمة
                conversation.lastMessage.content = randomReply;
                conversation.lastMessage.time = 'الآن';
                conversation.unreadCount = 0;
                loadConversations();
                
            }, 2000 + Math.random() * 3000);
        }

        function showTypingIndicator(userName) {
            const messagesArea = document.getElementById('messagesArea');
            const typingIndicator = document.createElement('div');
            typingIndicator.className = 'typing-indicator';
            typingIndicator.id = 'typingIndicator';
            typingIndicator.innerHTML = `
                <div class="typing-dots">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
                <span>${userName} يكتب...</span>
            `;
            messagesArea.appendChild(typingIndicator);
            messagesArea.scrollTop = messagesArea.scrollHeight;
            currentState.isTyping = true;
        }

        function hideTypingIndicator() {
            const typingIndicator = document.getElementById('typingIndicator');
            if (typingIndicator) {
                typingIndicator.remove();
            }
            currentState.isTyping = false;
        }

        function handleMediaSelection(type) {
            document.getElementById('mediaSelector').classList.remove('active');
            
            switch(type) {
                case 'image':
                    // محاكاة اختيار صورة
                    const fileInput = document.createElement('input');
                    fileInput.type = 'file';
                    fileInput.accept = 'image/*';
                    fileInput.onchange = function(e) {
                        if (e.target.files.length > 0) {
                            showNotification('تم اختيار صورة، جاري رفعها...');
                            // هنا سيتم رفع الصورة وإرسالها
                        }
                    };
                    fileInput.click();
                    break;
                    
                case 'video':
                    showNotification('سيتم فتح الكاميرا لتسجيل فيديو');
                    break;
                    
                case 'file':
                    // محاكاة اختيار ملف
                    const fileInput2 = document.createElement('input');
                    fileInput2.type = 'file';
                    fileInput2.onchange = function(e) {
                        if (e.target.files.length > 0) {
                            showNotification('تم اختيار ملف، جاري رفعه...');
                            // هنا سيتم رفع الملف وإرساله
                        }
                    };
                    fileInput2.click();
                    break;
                    
                case 'location':
                    showNotification('جاري تحديد موقعك...');
                    // هنا سيتم استخدام API الموقع
                    break;
            }
        }

        function startCall(type) {
            if (!currentState.activeConversation) return;
            
            currentState.call.active = true;
            currentState.call.type = type;
            currentState.call.duration = 0;
            currentState.call.muted = false;
            currentState.call.videoOff = false;
            
            // تحديث واجهة المكالمة
            document.getElementById('callStatus').textContent = type === 'audio' ? 'مكالمة صوتية...' : 'مكالمة فيديو...';
            document.getElementById('callWindow').classList.add('active');
            
            // بدء عداد المكالمة
            startCallTimer();
            
            // محاكاة قبول المكالمة بعد 3 ثوان
            setTimeout(() => {
                if (currentState.call.active) {
                    document.getElementById('callStatus').textContent = 'متصل';
                    // هنا سيتم بدء تدفق الفيديو/الصوت الحقيقي
                }
            }, 3000);
        }

        function endCall() {
            currentState.call.active = false;
            document.getElementById('callWindow').classList.remove('active');
            stopCallTimer();
            
            // إعادة تعيين عناصر التحكم
            document.getElementById('muteBtn').classList.remove('active');
            document.getElementById('videoToggleBtn').classList.remove('active');
            
            showNotification('تم إنهاء المكالمة');
        }

        function startCallTimer() {
            stopCallTimer(); // تأكد من إيقاف أي عداد سابق
            
            currentState.call.timer = setInterval(() => {
                currentState.call.duration++;
                const minutes = Math.floor(currentState.call.duration / 60);
                const seconds = currentState.call.duration % 60;
                document.getElementById('callDuration').textContent = 
                    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }, 1000);
        }

        function stopCallTimer() {
            if (currentState.call.timer) {
                clearInterval(currentState.call.timer);
                currentState.call.timer = null;
            }
        }

        function toggleMute() {
            currentState.call.muted = !currentState.call.muted;
            document.getElementById('muteBtn').classList.toggle('active', currentState.call.muted);
            document.getElementById('muteBtn').innerHTML = currentState.call.muted ? 
                '<i class="fas fa-microphone-slash"></i>' : '<i class="fas fa-microphone"></i>';
            
            showNotification(currentState.call.muted ? 'تم كتم الصوت' : 'تم إلغاء كتم الصوت');
        }

        function toggleVideo() {
            currentState.call.videoOff = !currentState.call.videoOff;
            document.getElementById('videoToggleBtn').classList.toggle('active', currentState.call.videoOff);
            document.getElementById('videoToggleBtn').innerHTML = currentState.call.videoOff ? 
                '<i class="fas fa-video-slash"></i>' : '<i class="fas fa-video"></i>';
            
            // محاكاة إيقاف/تشغيل الفيديو
            const localVideo = document.getElementById('localVideo');
            if (currentState.call.videoOff) {
                localVideo.style.opacity = '0.5';
            } else {
                localVideo.style.opacity = '1';
            }
            
            showNotification(currentState.call.videoOff ? 'تم إيقاف الكاميرا' : 'تم تشغيل الكاميرا');
        }

        function simulateRealTimeUpdates() {
            // محاكاة تحديثات في الوقت الحقيقي
            setInterval(() => {
                // تحديث حالة الاتصال بشكل عشوائي
                const statuses = ['connected', 'connecting', 'disconnected'];
                const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
                
                if (randomStatus !== currentState.connection) {
                    currentState.connection = randomStatus;
                    updateConnectionStatus();
                }
                
                // محاكاة تحديث حالة المستخدمين
                conversationsData.forEach(conversation => {
                    if (conversation.type === 'individual' && Math.random() > 0.7) {
                        conversation.user.isOnline = Math.random() > 0.3;
                        conversation.user.status = conversation.user.isOnline ? 
                            'متصل الآن' : `كان متصل منذ ${Math.floor(Math.random() * 60)} دقيقة`;
                    }
                });
                
                // إعادة تحميل المحادثات إذا كانت مرئية
                if (!document.getElementById('conversationsSidebar').classList.contains('active')) {
                    loadConversations();
                }
                
            }, 10000); // كل 10 ثوان
        }

        function updateConnectionStatus() {
            const statusElement = document.getElementById('connectionStatus');
            
            switch(currentState.connection) {
                case 'connected':
                    statusElement.textContent = 'متصل';
                    statusElement.className = 'connection-status';
                    break;
                case 'connecting':
                    statusElement.textContent = 'جاري إعادة الاتصال...';
                    statusElement.className = 'connection-status connecting';
                    break;
                case 'disconnected':
                    statusElement.textContent = 'غير متصل';
                    statusElement.className = 'connection-status disconnected';
                    break;
            }
            
            // إظهار المؤشر لمدة 3 ثوان
            statusElement.style.display = 'block';
            setTimeout(() => {
                statusElement.style.display = 'none';
            }, 3000);
        }

        function showNotification(message) {
            // إنشاء إشعار مؤقت
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

        // محاكاة WebRTC (لأغراض العرض فقط)
        function initializeWebRTC() {
            // هذا سيكون مكان تهيئة WebRTC الحقيقي
            console.log('WebRTC initialized for demonstration');
        }

        // تهيئة WebRTC عند التحميل
        initializeWebRTC();