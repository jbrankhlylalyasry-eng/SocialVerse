// بيانات الأحداث
        const eventsData = [
            {
                id: 1,
                title: "مؤتمر التقنية المستقبلية",
                description: "مناقشة أحدث التطورات في مجال الذكاء الاصطناعي وتأثيرها على المستقبل",
                date: "2023-12-15T10:00:00",
                duration: 120,
                category: "education",
                location: "الغرفة الافتراضية A",
                organizer: "مجتمع التقنية",
                attendees: 150,
                maxAttendees: 200,
                price: 0,
                type: "virtual",
                image: "https://via.placeholder.com/400x200/6366f1/ffffff?text=Tech+Conference"
            },
            {
                id: 2,
                title: "ورشة عمل التسويق الرقمي",
                description: "تعلم أساسيات التسويق الرقمي واستراتيجيات النجاح في عالم الإنترنت",
                date: "2023-12-18T14:00:00",
                duration: 90,
                category: "business",
                location: "الغرفة الافتراضية B",
                organizer: "أكاديمية الأعمال",
                attendees: 75,
                maxAttendees: 100,
                price: 50,
                type: "virtual",
                image: "https://via.placeholder.com/400x200/10b981/ffffff?text=Marketing+Workshop"
            },
            {
                id: 3,
                title: "حفل موسيقي افتراضي",
                description: "استمتع بأمسية موسيقية رائعة مع أشهر الفنانين في العالم الافتراضي",
                date: "2023-12-20T20:00:00",
                duration: 180,
                category: "entertainment",
                location: "الغرفة الافتراضية C",
                organizer: "فريق الترفيه",
                attendees: 300,
                maxAttendees: 500,
                price: 25,
                type: "virtual",
                image: "https://via.placeholder.com/400x200/ec4899/ffffff?text=Virtual+Concert"
            },
            {
                id: 4,
                title: "جلسة تخطيط المشاريع",
                description: "تعلم كيفية تخطيط وإدارة المشاريع بفعالية باستخدام أحدث المنهجيات",
                date: "2023-12-22T11:00:00",
                duration: 60,
                category: "business",
                location: "الغرفة الافتراضية D",
                organizer: "خبراء الإدارة",
                attendees: 45,
                maxAttendees: 80,
                price: 0,
                type: "virtual",
                image: "https://via.placeholder.com/400x200/f59e0b/ffffff?text=Project+Planning"
            }
        ];

        // بيانات التذاكر
        const ticketsData = [
            {
                id: 1,
                name: "تذكرة أساسية",
                price: 0,
                features: [
                    "الدخول إلى الحدث",
                    "مشاركة في الدردشة النصية",
                    "شهادة مشاركة"
                ],
                eventId: 1
            },
            {
                id: 2,
                name: "تذكرة متميزة",
                price: 50,
                features: [
                    "جميع مزايا التذكرة الأساسية",
                    "الوصول للتسجيلات بعد الحدث",
                    "مشاركة في جلسات الأسئلة",
                    "مواد إضافية حصرية"
                ],
                eventId: 1
            },
            {
                id: 3,
                name: "تذكرة VIP",
                price: 100,
                features: [
                    "جميع مزايا التذكرة المتميزة",
                    "جلسة مباشرة مع المتحدثين",
                    "شهادة تقدير خاصة",
                    "هدايا حصرية"
                ],
                eventId: 1
            }
        ];

        // بيانات الغرف الافتراضية
        const virtualRoomsData = [
            {
                id: 1,
                name: "الغرفة الرئيسية",
                description: "مكان الاجتماع الرئيسي للحدث مع إمكانية التفاعل المباشر",
                users: 45,
                capacity: 100,
                eventId: 1,
                isActive: true
            },
            {
                id: 2,
                name: "غرفة الشبكات",
                description: "مكان للتواصل وبناء العلاقات مع المشاركين الآخرين",
                users: 23,
                capacity: 50,
                eventId: 1,
                isActive: true
            },
            {
                id: 3,
                name: "غرفة الأسئلة",
                description: "مكان لطرح الأسئلة على المتحدثين والحصول على إجابات",
                users: 15,
                capacity: 30,
                eventId: 1,
                isActive: true
            }
        ];

        // بيانات أدوات التنظيم
        const organizerToolsData = [
            {
                id: 1,
                name: "منشئ الحدث",
                description: "أداة متكاملة لإنشاء وإدارة الفعاليات بسهولة",
                icon: "fa-calendar-plus"
            },
            {
                id: 2,
                name: "مدير التذاكر",
                description: "إدارة تذاكر الحضور والمبيعات والتخفيضات",
                icon: "fa-ticket-alt"
            },
            {
                id: 3,
                name: "منظم الغرف",
                description: "إنشاء وإدارة الغرف الافتراضية وتقسيم المشاركين",
                icon: "fa-door-open"
            },
            {
                id: 4,
                name: "محلل الإحصائيات",
                description: "تحليل بيانات الحضور والتفاعل والتقارير",
                icon: "fa-chart-bar"
            },
            {
                id: 5,
                name: "منشئ الشهادات",
                description: "تصميم وتوزيع شهادات المشاركة تلقائياً",
                icon: "fa-certificate"
            },
            {
                id: 6,
                name: "منسق الدعوات",
                description: "إرسال دعوات مخصصة ومتابعة الردود",
                icon: "fa-envelope"
            }
        ];

        // حالة التطبيق
        let currentState = {
            activeSection: 'calendar',
            activeTab: 'events',
            currentDate: new Date(),
            selectedEvent: null
        };

        // تهيئة الصفحة
        document.addEventListener('DOMContentLoaded', function() {
            initializeEventsSystem();
        });

        function initializeEventsSystem() {
            renderCalendar();
            renderUpcomingEvents();
            renderTickets();
            renderVirtualRooms();
            renderOrganizerTools();
            setupEventListeners();
        }

        function renderCalendar() {
            const calendarGrid = document.getElementById('calendarGrid');
            calendarGrid.innerHTML = '';
            
            // رؤوس الأيام
            const dayHeaders = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
            dayHeaders.forEach(day => {
                const dayHeader = document.createElement('div');
                dayHeader.className = 'calendar-day-header';
                dayHeader.textContent = day;
                calendarGrid.appendChild(dayHeader);
            });
            
            // الحصول على أول وآخر يوم من الشهر
            const year = currentState.currentDate.getFullYear();
            const month = currentState.currentDate.getMonth();
            const firstDay = new Date(year, month, 1);
            const lastDay = new Date(year, month + 1, 0);
            
            // حساب عدد الأيام من الشهر السابق لملء التقويم
            const startingDay = firstDay.getDay();
            
            // إضافة أيام الشهر السابق
            const prevMonthLastDay = new Date(year, month, 0).getDate();
            for (let i = startingDay; i > 0; i--) {
                const day = document.createElement('div');
                day.className = 'calendar-day other-month';
                day.innerHTML = `
                    <div class="day-number">${prevMonthLastDay - i + 1}</div>
                `;
                calendarGrid.appendChild(day);
            }
            
            // إضافة أيام الشهر الحالي
            const today = new Date();
            for (let i = 1; i <= lastDay.getDate(); i++) {
                const day = document.createElement('div');
                const dayDate = new Date(year, month, i);
                
                day.className = 'calendar-day';
                if (dayDate.toDateString() === today.toDateString()) {
                    day.classList.add('today');
                }
                
                // التحقق من وجود أحداث في هذا اليوم
                const dayEvents = eventsData.filter(event => {
                    const eventDate = new Date(event.date);
                    return eventDate.getDate() === i && 
                           eventDate.getMonth() === month && 
                           eventDate.getFullYear() === year;
                });
                
                if (dayEvents.length > 0) {
                    day.classList.add('has-events');
                }
                
                let eventsHTML = '';
                dayEvents.slice(0, 2).forEach(event => {
                    eventsHTML += `<div class="day-event">${event.title}</div>`;
                });
                
                day.innerHTML = `
                    <div class="day-number">${i}</div>
                    <div class="day-events">${eventsHTML}</div>
                `;
                
                day.addEventListener('click', () => {
                    showDayEvents(dayEvents, dayDate);
                });
                
                calendarGrid.appendChild(day);
            }
            
            // إضافة أيام الشهر التالي لملء التقويم
            const totalCells = 42; // 6 أسابيع × 7 أيام
            const remainingCells = totalCells - (startingDay + lastDay.getDate());
            for (let i = 1; i <= remainingCells; i++) {
                const day = document.createElement('div');
                day.className = 'calendar-day other-month';
                day.innerHTML = `
                    <div class="day-number">${i}</div>
                `;
                calendarGrid.appendChild(day);
            }
        }

        function renderUpcomingEvents() {
            const container = document.getElementById('upcomingEvents');
            container.innerHTML = '';
            
            // ترتيب الأحداث حسب التاريخ
            const sortedEvents = [...eventsData].sort((a, b) => new Date(a.date) - new Date(b.date));
            
            sortedEvents.forEach(event => {
                const eventCard = createEventCard(event);
                container.appendChild(eventCard);
            });
        }

        function renderTickets() {
            const container = document.getElementById('ticketsGrid');
            container.innerHTML = '';
            
            ticketsData.forEach(ticket => {
                const ticketCard = createTicketCard(ticket);
                container.appendChild(ticketCard);
            });
        }

        function renderVirtualRooms() {
            const container = document.getElementById('virtualRooms');
            container.innerHTML = '';
            
            virtualRoomsData.forEach(room => {
                const roomCard = createRoomCard(room);
                container.appendChild(roomCard);
            });
        }

        function renderOrganizerTools() {
            const container = document.getElementById('organizerTools');
            container.innerHTML = '';
            
            organizerToolsData.forEach(tool => {
                const toolCard = createToolCard(tool);
                container.appendChild(toolCard);
            });
        }

        function createEventCard(event) {
            const card = document.createElement('div');
            card.className = 'event-card';
            card.dataset.id = event.id;
            
            const eventDate = new Date(event.date);
            const formattedDate = eventDate.toLocaleDateString('ar-EG', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            card.innerHTML = `
                <div class="event-header">
                    <div>
                        <div class="event-title">${event.title}</div>
                        <div class="event-date">${formattedDate}</div>
                    </div>
                    <div class="event-badge">${event.category === 'education' ? 'تعليم' : 
                                              event.category === 'business' ? 'أعمال' : 
                                              event.category === 'entertainment' ? 'ترفيه' : 'تطوع'}</div>
                </div>
                <div class="event-content">
                    <div class="event-description">${event.description}</div>
                    <div class="event-meta">
                        <div class="event-meta-item">
                            <i class="fas fa-users"></i>
                            <span>${event.attendees}/${event.maxAttendees} مشترك</span>
                        </div>
                        <div class="event-meta-item">
                            <i class="fas fa-clock"></i>
                            <span>${event.duration} دقيقة</span>
                        </div>
                        <div class="event-meta-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${event.location}</span>
                        </div>
                    </div>
                    <div class="event-actions">
                        <button class="event-btn secondary">
                            <i class="fas fa-info-circle"></i>
                            التفاصيل
                        </button>
                        <button class="event-btn primary">
                            <i class="fas fa-ticket-alt"></i>
                            ${event.price > 0 ? `شراء تذكرة - ${event.price} ر.س` : 'حجز مجاني'}
                        </button>
                    </div>
                </div>
            `;
            
            return card;
        }

        function createTicketCard(ticket) {
            const card = document.createElement('div');
            card.className = 'ticket-card';
            
            card.innerHTML = `
                <div class="ticket-header">
                    <div class="ticket-name">${ticket.name}</div>
                    <div class="ticket-price">${ticket.price > 0 ? `${ticket.price} ر.س` : 'مجاني'}</div>
                </div>
                <div class="ticket-content">
                    <ul class="ticket-features">
                        ${ticket.features.map(feature => `
                            <li class="ticket-feature">
                                <i class="fas fa-check"></i>
                                <span>${feature}</span>
                            </li>
                        `).join('')}
                    </ul>
                    <button class="ticket-action">
                        <i class="fas fa-shopping-cart"></i>
                        ${ticket.price > 0 ? 'شراء التذكرة' : 'حجز مجاني'}
                    </button>
                </div>
            `;
            
            return card;
        }

        function createRoomCard(room) {
            const card = document.createElement('div');
            card.className = 'room-card';
            
            card.innerHTML = `
                <div class="room-preview">
                    <div class="room-badge">${room.isActive ? 'نشط الآن' : 'مغلق'}</div>
                    <div class="room-users">
                        <i class="fas fa-users"></i>
                        <span>${room.users}/${room.capacity}</span>
                    </div>
                </div>
                <div class="room-content">
                    <div class="room-title">${room.name}</div>
                    <div class="room-description">${room.description}</div>
                    <div class="room-actions">
                        <button class="room-btn secondary">
                            <i class="fas fa-info-circle"></i>
                            التفاصيل
                        </button>
                        <button class="room-btn primary">
                            <i class="fas fa-door-open"></i>
                            دخول
                        </button>
                    </div>
                </div>
            `;
            
            return card;
        }

        function createToolCard(tool) {
            const card = document.createElement('div');
            card.className = 'tool-card';
            
            card.innerHTML = `
                <div class="tool-icon">
                    <i class="fas ${tool.icon}"></i>
                </div>
                <div class="tool-title">${tool.name}</div>
                <div class="tool-description">${tool.description}</div>
            `;
            
            card.addEventListener('click', () => {
                showNotification(`فتح أداة ${tool.name}`);
            });
            
            return card;
        }

        function setupEventListeners() {
            // التنقل بين الأقسام في الشريط الجانبي
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                item.addEventListener('click', function() {
                    const targetSection = this.dataset.section;
                    
                    // إزالة النشاط من جميع العناصر
                    navItems.forEach(nav => nav.classList.remove('active'));
                    this.classList.add('active');
                    
                    // تحديث حالة التطبيق
                    currentState.activeSection = targetSection;
                    
                    // إغلاق الشريط الجانبي على الهواتف
                    if (window.innerWidth <= 768) {
                        document.getElementById('eventsSidebar').classList.remove('active');
                    }
                });
            });
            
            // التنقل بين التبويبات
            const eventTabs = document.querySelectorAll('.events-tab');
            eventTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const targetTab = this.dataset.tab;
                    
                    // إزالة النشاط من جميع التبويبات
                    eventTabs.forEach(t => t.classList.remove('active'));
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
            
            // التنقل في التقويم
            document.getElementById('prevMonth').addEventListener('click', function() {
                currentState.currentDate.setMonth(currentState.currentDate.getMonth() - 1);
                renderCalendar();
            });
            
            document.getElementById('nextMonth').addEventListener('click', function() {
                currentState.currentDate.setMonth(currentState.currentDate.getMonth() + 1);
                renderCalendar();
            });
            
            document.getElementById('todayBtn').addEventListener('click', function() {
                currentState.currentDate = new Date();
                renderCalendar();
            });
            
            // إنشاء حدث جديد
            document.getElementById('createEventBtn').addEventListener('click', function() {
                document.getElementById('createEventModal').classList.add('active');
            });
            
            document.getElementById('closeEventModal').addEventListener('click', function() {
                document.getElementById('createEventModal').classList.remove('active');
            });
            
            document.getElementById('cancelEvent').addEventListener('click', function() {
                document.getElementById('createEventModal').classList.remove('active');
            });
            
            document.getElementById('saveEvent').addEventListener('click', function() {
                const eventName = document.getElementById('eventName').value;
                const eventDescription = document.getElementById('eventDescription').value;
                
                if (!eventName || !eventDescription) {
                    showNotification('يرجى ملء جميع الحقول المطلوبة', 'error');
                    return;
                }
                
                // محاكاة حفظ الحدث
                showNotification('تم إنشاء الحدث بنجاح!');
                document.getElementById('createEventModal').classList.remove('active');
                
                // إعادة تعيين الحقول
                document.getElementById('eventName').value = '';
                document.getElementById('eventDescription').value = '';
            });
            
            // تبديل الشريط الجانبي على الهواتف
            document.getElementById('toggleSidebarBtn').addEventListener('click', function() {
                document.getElementById('eventsSidebar').classList.toggle('active');
            });
            
            // زر العودة
            document.getElementById('backBtn').addEventListener('click', function() {
                window.history.back();
            });
            
            // إغلاق النوافذ المنبثقة عند النقر خارجها
            document.addEventListener('click', function(e) {
                const sidebar = document.getElementById('eventsSidebar');
                const toggleBtn = document.getElementById('toggleSidebarBtn');
                const modal = document.getElementById('createEventModal');
                
                // إغلاق الشريط الجانبي على الهواتف
                if (window.innerWidth <= 768 && 
                    sidebar.classList.contains('active') && 
                    !sidebar.contains(e.target) && 
                    !toggleBtn.contains(e.target)) {
                    sidebar.classList.remove('active');
                }
                
                // إغلاق النافذة المنبثقة
                if (modal.classList.contains('active') && 
                    !modal.contains(e.target) && 
                    !document.getElementById('createEventBtn').contains(e.target)) {
                    modal.classList.remove('active');
                }
            });
        }

        function showDayEvents(events, date) {
            if (events.length === 0) {
                showNotification(`لا توجد أحداث في ${date.toLocaleDateString('ar-EG')}`);
                return;
            }
            
            let message = `الأحداث في ${date.toLocaleDateString('ar-EG')}:\n`;
            events.forEach(event => {
                const eventTime = new Date(event.date).toLocaleTimeString('ar-EG', {
                    hour: '2-digit',
                    minute: '2-digit'
                });
                message += `• ${event.title} (${eventTime})\n`;
            });
            
            showNotification(message);
        }

        function showNotification(message, type = 'success') {
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
            }, 4000);
        }

        // وظائف للربط مع الواجهة الخلفية
        async function createEvent(eventData) {
            // محاكاة إنشاء حدث
            showNotification('جاري إنشاء الحدث...');
            
            try {
                // محاكاة اتصال API
                await new Promise(resolve => setTimeout(resolve, 1500));
                showNotification('تم إنشاء الحدث بنجاح', 'success');
                return { success: true, id: Date.now() };
            } catch (error) {
                showNotification('فشل في إنشاء الحدث', 'error');
                return { success: false, error: error.message };
            }
        }

        async function bookTicket(eventId, ticketType) {
            // محاكاة حجز تذكرة
            showNotification('جاري معالجة الحجز...');
            
            try {
                // محاكاة اتصال API
                await new Promise(resolve => setTimeout(resolve, 1000));
                showNotification('تم حجز التذكرة بنجاح', 'success');
                return { success: true, bookingId: 'BK_' + Date.now() };
            } catch (error) {
                showNotification('فشل في حجز التذكرة', 'error');
                return { success: false, error: error.message };
            }
        }

        async function joinVirtualRoom(roomId) {
            // محاكاة الانضمام إلى غرفة افتراضية
            showNotification('جاري الانضمام إلى الغرفة...');
            
            try {
                // محاكاة اتصال API
                await new Promise(resolve => setTimeout(resolve, 800));
                showNotification('تم الانضمام إلى الغرفة بنجاح', 'success');
                return { success: true };
            } catch (error) {
                showNotification('فشل في الانضمام إلى الغرفة', 'error');
                return { success: false, error: error.message };
            }
        }