// بيانات الوسائط
        const mediaData = [
            {
                id: 1,
                name: 'شعار المنصة',
                type: 'image',
                url: 'https://via.placeholder.com/300x200/6366f1/ffffff?text=SocialVerse',
                size: '2.1 MB',
                date: '2023-10-15'
            },
            {
                id: 2,
                name: 'فيديو تعريفي',
                type: 'video',
                url: 'https://via.placeholder.com/300x200/ec4899/ffffff?text=Intro+Video',
                size: '15.7 MB',
                date: '2023-10-10'
            },
            {
                id: 3,
                name: 'خلفية البث',
                type: 'image',
                url: 'https://via.placeholder.com/300x200/10b981/ffffff?text=Live+Background',
                size: '3.4 MB',
                date: '2023-10-08'
            },
            {
                id: 4,
                name: 'موسيقى ترويجية',
                type: 'audio',
                url: 'https://via.placeholder.com/300x200/f59e0b/ffffff?text=Promo+Music',
                size: '8.2 MB',
                date: '2023-10-05'
            },
            {
                id: 5,
                name: 'تصميم بوستر',
                type: 'image',
                url: 'https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Event+Poster',
                size: '4.7 MB',
                date: '2023-10-01'
            },
            {
                id: 6,
                name: 'عرض تقديمي',
                type: 'document',
                url: 'https://via.placeholder.com/300x200/ef4444/ffffff?text=Presentation',
                size: '12.3 MB',
                date: '2023-09-28'
            }
        ];

        // بيانات القوالب
        const templatesData = [
            {
                id: 1,
                name: 'قالب وسائط اجتماعية',
                description: 'تصميم جاهز للمنشورات على وسائل التواصل الاجتماعي',
                category: 'وسائط اجتماعية',
                preview: 'https://via.placeholder.com/400x300/6366f1/ffffff?text=Social+Media+Template',
                rating: 4.8,
                uses: 1250
            },
            {
                id: 2,
                name: 'قالب عرض تقديمي',
                description: 'تصميم احترافي للعروض التقديمية',
                category: 'عروض تقديمية',
                preview: 'https://via.placeholder.com/400x300/10b981/ffffff?text=Presentation+Template',
                rating: 4.6,
                uses: 890
            },
            {
                id: 3,
                name: 'قالب فيديو ترويجي',
                description: 'مشروع فيديو جاهز للإعلانات الترويجية',
                category: 'فيديوهات',
                preview: 'https://via.placeholder.com/400x300/ec4899/ffffff?text=Video+Template',
                rating: 4.9,
                uses: 2100
            },
            {
                id: 4,
                name: 'قالب موقع ويب',
                description: 'تصميم متكامل لصفحات الويب',
                category: 'تصاميم ويب',
                preview: 'https://via.placeholder.com/400x300/f59e0b/ffffff?text=Web+Template',
                rating: 4.7,
                uses: 1560
            },
            {
                id: 5,
                name: 'قالب بطاقة دعوة',
                description: 'تصميم أنيق للبطاقات والدعوات',
                category: 'وسائط اجتماعية',
                preview: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Invitation+Template',
                rating: 4.5,
                uses: 730
            },
            {
                id: 6,
                name: 'قالب تقرير سنوي',
                description: 'تصميم متكامل للتقارير والعروض',
                category: 'عروض تقديمية',
                preview: 'https://via.placeholder.com/400x300/ef4444/ffffff?text=Report+Template',
                rating: 4.4,
                uses: 540
            }
        ];

        // حالة التطبيق
        let currentState = {
            activeSection: 'editor',
            activeTool: 'select',
            canvas: null,
            ctx: null,
            selectedElement: null,
            isLive: false,
            mediaItems: [],
            selectedMedia: null
        };

        // تهيئة الصفحة
        document.addEventListener('DOMContentLoaded', function() {
            initializeCreativePlatform();
        });

        function initializeCreativePlatform() {
            initializeCanvas();
            loadMediaLibrary();
            loadTemplatesLibrary();
            setupEventListeners();
            initializeLiveStudio();
        }

        function initializeCanvas() {
            const canvas = document.getElementById('creativeCanvas');
            const ctx = canvas.getContext('2d');
            
            currentState.canvas = canvas;
            currentState.ctx = ctx;
            
            // رسم محتوى ابتدائي على الكانفاس
            drawInitialCanvas();
        }

        function drawInitialCanvas() {
            const ctx = currentState.ctx;
            const canvas = currentState.canvas;
            
            // مسح الكانفاس
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // إضافة نص ترحيبي
            ctx.fillStyle = '#333333';
            ctx.font = '24px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('مرحباً بك في منصة الإبداع', canvas.width / 2, canvas.height / 2);
            
            ctx.font = '16px Arial';
            ctx.fillText('ابدأ بإنشاء محتوى مذهل!', canvas.width / 2, canvas.height / 2 + 40);
        }

        function loadMediaLibrary() {
            const container = document.getElementById('mediaGrid');
            container.innerHTML = '';
            
            mediaData.forEach(media => {
                const mediaItem = createMediaItem(media);
                container.appendChild(mediaItem);
            });
        }

        function loadTemplatesLibrary() {
            const container = document.getElementById('templatesGrid');
            container.innerHTML = '';
            
            templatesData.forEach(template => {
                const templateCard = createTemplateCard(template);
                container.appendChild(templateCard);
            });
        }

        function createMediaItem(media) {
            const item = document.createElement('div');
            item.className = 'media-item';
            item.dataset.id = media.id;
            
            let icon = 'fa-image';
            if (media.type === 'video') icon = 'fa-video';
            if (media.type === 'audio') icon = 'fa-music';
            if (media.type === 'document') icon = 'fa-file';
            
            item.innerHTML = `
                <img src="${media.url}" class="media-thumbnail" alt="${media.name}">
                <div class="media-info">
                    <div class="media-name">${media.name}</div>
                    <div class="media-meta">
                        <i class="fas ${icon}"></i>
                        ${media.size}
                    </div>
                </div>
            `;
            
            item.addEventListener('click', function() {
                // إزالة التحديد من جميع العناصر
                document.querySelectorAll('.media-item').forEach(el => {
                    el.classList.remove('selected');
                });
                
                // تحديد العنصر الحالي
                this.classList.add('selected');
                currentState.selectedMedia = media;
                
                // عرض المعاينة
                showMediaPreview(media);
            });
            
            return item;
        }

        function createTemplateCard(template) {
            const card = document.createElement('div');
            card.className = 'template-card';
            card.dataset.id = template.id;
            
            card.innerHTML = `
                <img src="${template.preview}" class="template-preview" alt="${template.name}">
                <div class="template-info">
                    <div class="template-name">${template.name}</div>
                    <div class="template-description">${template.description}</div>
                    <div class="template-meta">
                        <span>⭐ ${template.rating} (${template.uses})</span>
                        <span class="template-badge">${template.category}</span>
                    </div>
                </div>
            `;
            
            card.addEventListener('click', function() {
                showNotification(`جاري تحميل قالب ${template.name}...`);
                // هنا سيتم تحميل القالب وتطبيقه
            });
            
            return card;
        }

        function showMediaPreview(media) {
            const previewImg = document.getElementById('mediaPreview');
            const placeholder = document.getElementById('mediaPlaceholder');
            
            if (media.type === 'image') {
                previewImg.src = media.url;
                previewImg.style.display = 'block';
                placeholder.style.display = 'none';
            } else {
                previewImg.style.display = 'none';
                placeholder.innerHTML = `
                    <i class="fas fa-${media.type === 'video' ? 'video' : media.type === 'audio' ? 'music' : 'file'}" 
                       style="font-size: 48px; margin-bottom: 10px; opacity: 0.5;"></i>
                    <div>${media.name}</div>
                    <div style="font-size: 12px; margin-top: 5px;">${media.type} - ${media.size}</div>
                `;
                placeholder.style.display = 'block';
            }
        }

        function initializeLiveStudio() {
            // محاكاة الوصول إلى الكاميرا والميكروفون
            navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia ||
                                                 navigator.mediaDevices.webkitGetUserMedia ||
                                                 navigator.mediaDevices.mozGetUserMedia;
            
            if (navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({ video: true, audio: true })
                    .then(function(stream) {
                        const video = document.getElementById('previewVideo');
                        video.srcObject = stream;
                    })
                    .catch(function(error) {
                        console.error('Error accessing media devices:', error);
                        showNotification('تعذر الوصول إلى الكاميرا أو الميكروفون');
                    });
            }
        }

        function setupEventListeners() {
            // التنقل بين الأقسام
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                item.addEventListener('click', function() {
                    const targetSection = this.dataset.section;
                    
                    // إزالة النشاط من جميع العناصر
                    navItems.forEach(nav => nav.classList.remove('active'));
                    this.classList.add('active');
                    
                    // إخفاء جميع الأقسام
                    document.querySelectorAll('.content-editor, .live-studio, .media-studio, .templates-library').forEach(section => {
                        section.classList.remove('active');
                    });
                    
                    // إظهار القسم المحدد
                    document.getElementById(`${targetSection}Studio`).classList.add('active');
                    
                    // تحديث العنوان
                    updateTitle(targetSection);
                    
                    // تحديث حالة التطبيق
                    currentState.activeSection = targetSection;
                });
            });
            
            // أزرار إنشاء محتوى جديد
            const createBtns = document.querySelectorAll('.create-btn');
            createBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const tool = this.dataset.tool;
                    handleCreateAction(tool);
                });
            });
            
            // أدوات المحرر
            const toolBtns = document.querySelectorAll('.tool-btn');
            toolBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const tool = this.dataset.tool;
                    const style = this.dataset.style;
                    
                    if (tool) {
                        // إزالة النشاط من جميع الأدوات
                        toolBtns.forEach(t => t.classList.remove('active'));
                        this.classList.add('active');
                        
                        currentState.activeTool = tool;
                    }
                    
                    if (style) {
                        this.classList.toggle('active');
                        applyTextStyle(style);
                    }
                });
            });
            
            // ألوان النص
            const colorOptions = document.querySelectorAll('.color-option');
            colorOptions.forEach(option => {
                option.addEventListener('click', function() {
                    colorOptions.forEach(c => c.classList.remove('active'));
                    this.classList.add('active');
                    
                    const color = this.dataset.color;
                    applyColor(color);
                });
            });
            
            // عناصر التحكم
            document.getElementById('fontSizeSlider').addEventListener('input', function() {
                document.getElementById('fontSizeValue').textContent = this.value + 'px';
                applyFontSize(this.value);
            });
            
            document.getElementById('opacitySlider').addEventListener('input', function() {
                document.getElementById('opacityValue').textContent = this.value + '%';
                applyOpacity(this.value);
            });
            
            document.getElementById('rotationSlider').addEventListener('input', function() {
                document.getElementById('rotationValue').textContent = this.value + '°';
                applyRotation(this.value);
            });
            
            // البث المباشر
            document.getElementById('startLiveBtn').addEventListener('click', function() {
                startLiveStream();
            });
            
            // إغلاق لوحة الخصائص
            document.getElementById('panelClose').addEventListener('click', function() {
                document.getElementById('propertiesPanel').classList.remove('active');
            });
            
            // أزرار التحكم للشاشات الصغيرة
            document.getElementById('toggleSidebarBtn').addEventListener('click', function() {
                document.getElementById('creativeSidebar').classList.toggle('active');
            });
            
            document.getElementById('togglePropertiesBtn').addEventListener('click', function() {
                document.getElementById('propertiesPanel').classList.toggle('active');
            });
            
            // زر العودة
            document.getElementById('backBtn').addEventListener('click', function() {
                if (currentState.isLive) {
                    stopLiveStream();
                } else {
                    window.history.back();
                }
            });
        }

        function updateTitle(section) {
            const titleElement = document.getElementById('creativeTitle');
            const titles = {
                'editor': 'محرر المحتوى',
                'live': 'استوديو البث المباشر',
                'media': 'استوديو الوسائط',
                'templates': 'مكتبة القوالب'
            };
            
            titleElement.textContent = titles[section] || 'منصة الإبداع';
        }

        function handleCreateAction(tool) {
            switch(tool) {
                case 'editor':
                    showNotification('فتح محرر النصوص...');
                    break;
                case 'design':
                    showNotification('فتح أداة التصميم...');
                    break;
                case 'live':
                    showNotification('إعداد البث المباشر...');
                    // الانتقال إلى استوديو البث المباشر
                    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
                    document.querySelector('.nav-item[data-section="live"]').classList.add('active');
                    
                    document.querySelectorAll('.content-editor, .live-studio, .media-studio, .templates-library').forEach(section => {
                        section.classList.remove('active');
                    });
                    document.getElementById('liveStudio').classList.add('active');
                    
                    updateTitle('live');
                    currentState.activeSection = 'live';
                    break;
            }
        }

        function applyTextStyle(style) {
            // محاكاة تطبيق نمط النص على العنصر المحدد
            showNotification(`تم تطبيق ${style} على النص`);
        }

        function applyColor(color) {
            // محاكاة تطبيق اللون على العنصر المحدد
            showNotification(`تم تطبيق اللون ${color}`);
        }

        function applyFontSize(size) {
            // محاكاة تطبيق حجم الخط على العنصر المحدد
            showNotification(`تم تغيير حجم الخط إلى ${size}px`);
        }

        function applyOpacity(opacity) {
            // محاكاة تطبيق الشفافية على العنصر المحدد
            showNotification(`تم تغيير الشفافية إلى ${opacity}%`);
        }

        function applyRotation(rotation) {
            // محاكاة تطبيق الدوران على العنصر المحدد
            showNotification(`تم تدوير العنصر بمقدار ${rotation} درجة`);
        }

        function startLiveStream() {
            if (currentState.isLive) return;
            
            currentState.isLive = true;
            document.getElementById('startLiveBtn').innerHTML = '<i class="fas fa-stop"></i> إيقاف البث';
            document.getElementById('startLiveBtn').style.background = 'var(--gradient-secondary)';
            
            showNotification('بدأ البث المباشر بنجاح!', 'success');
            
            // محاكاة زيادة المشاهدات
            let viewers = 0;
            const viewerInterval = setInterval(() => {
                if (!currentState.isLive) {
                    clearInterval(viewerInterval);
                    return;
                }
                
                viewers += Math.floor(Math.random() * 5);
                document.querySelector('.studio-preview .control-section:first-child div div:first-child').textContent = viewers;
            }, 3000);
        }

        function stopLiveStream() {
            if (!currentState.isLive) return;
            
            currentState.isLive = false;
            document.getElementById('startLiveBtn').innerHTML = '<i class="fas fa-circle"></i> بدء البث المباشر';
            document.getElementById('startLiveBtn').style.background = 'var(--gradient-live)';
            
            showNotification('تم إيقاف البث المباشر');
        }

        function showNotification(message, type = 'info') {
            // إزالة أي إشعارات سابقة
            const existingNotification = document.querySelector('.notification');
            if (existingNotification) {
                existingNotification.remove();
            }
            
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        // وظائف للربط مع الواجهة الخلفية
        async function saveProject(projectData) {
            // محاكاة حفظ المشروع
            showNotification('جاري حفظ المشروع...');
            
            try {
                // محاكاة اتصال API
                await new Promise(resolve => setTimeout(resolve, 1000));
                showNotification('تم حفظ المشروع بنجاح', 'success');
                return { success: true, id: Date.now() };
            } catch (error) {
                showNotification('فشل في حفظ المشروع', 'error');
                return { success: false, error: error.message };
            }
        }

        async function uploadMedia(file) {
            // محاكاة رفع وسائط
            showNotification('جاري رفع الوسائط...');
            
            try {
                // محاكاة اتصال API
                await new Promise(resolve => setTimeout(resolve, 2000));
                showNotification('تم رفع الوسائط بنجاح', 'success');
                return { success: true, url: URL.createObjectURL(file) };
            } catch (error) {
                showNotification('فشل في رفع الوسائط', 'error');
                return { success: false, error: error.message };
            }
        }

        async function startStreaming(streamConfig) {
            // محاكاة بدء البث المباشر
            showNotification('جاري بدء البث المباشر...');
            
            try {
                // محاكاة اتصال API
                await new Promise(resolve => setTimeout(resolve, 1500));
                return { success: true, streamId: 'stream_' + Date.now() };
            } catch (error) {
                showNotification('فشل في بدء البث المباشر', 'error');
                return { success: false, error: error.message };
            }
        }