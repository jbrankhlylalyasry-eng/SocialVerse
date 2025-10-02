// بيانات التعليقات
        const commentsData = [
            {
                id: 1,
                user: { name: "محمد أحمد", avatar: "م" },
                time: "قبل 3 ساعات",
                realm: "عالم البرمجة",
                text: "هذا التعليق يحتوي على محتوى غير لائق ويجب مراجعته من قبل الإدارة. بعض الكلمات غير مناسبة للمنصة ويجب إزالتها فوراً.",
                status: "reported",
                likes: 5,
                replies: 2,
                reports: 3,
                repliesList: []
            },
            {
                id: 2,
                user: { name: "فاطمة السعدي", avatar: "ف" },
                time: "قبل 5 ساعات",
                realm: "عالم التصميم",
                text: "شكراً على هذا المحتوى الرائع! لقد استفدت كثيراً من النصائح المقدمة خاصة في مجال تصميم واجهات المستخدم.",
                status: "pending",
                likes: 12,
                replies: 3,
                reports: 0,
                repliesList: [
                    {
                        user: { name: "أحمد محمد", avatar: "أ" },
                        time: "قبل ساعتين",
                        text: "أنا سعيد لأنك استفدتي من المحتوى! هل هناك أي موضوع معين تودين مناقشته؟"
                    },
                    {
                        user: { name: "فاطمة السعدي", avatar: "ف" },
                        time: "قبل ساعة",
                        text: "نعم، أود معرفة المزيد عن أفضل practices في تصميم تجربة المستخدم للتطبيقات الجوالة."
                    }
                ]
            },
            {
                id: 3,
                user: { name: "نورة القحطاني", avatar: "ن" },
                time: "قبل يوم",
                realm: "عالم ريادة الأعمال",
                text: "تجربة رائعة! أنا أيضاً بدأت مشروعي الناشئ منذ 6 أشهر وأتفق تماماً مع النقاط المطروحة في المقال. التخطيط الجيد والتسويق الفعال هما أساس النجاح في أي مشروع.",
                status: "approved",
                likes: 24,
                replies: 7,
                reports: 0,
                repliesList: []
            }
        ];

        // حالة التطبيق
        let appState = {
            currentFilter: 'all',
            currentSort: 'newest',
            searchQuery: '',
            currentPage: 1,
            itemsPerPage: 5
        };

        // تهيئة الصفحة
        document.addEventListener('DOMContentLoaded', function() {
            initializeCommentsPage();
        });

        function initializeCommentsPage() {
            setupEventListeners();
            renderComments();
        }

        function setupEventListeners() {
            // زر العودة
            document.getElementById('backBtn').addEventListener('click', function() {
                window.history.back();
            });

            // زر التحديث
            document.getElementById('refreshBtn').addEventListener('click', function() {
                showNotification('جاري تحديث التعليقات...', 'success');
                renderComments();
            });

            // الفلتر حسب الحالة
            document.getElementById('statusFilter').addEventListener('change', function() {
                appState.currentFilter = this.value;
                renderComments();
            });

            // الفرز
            document.getElementById('sortFilter').addEventListener('change', function() {
                appState.currentSort = this.value;
                renderComments();
            });

            // البحث
            document.getElementById('searchComments').addEventListener('input', function() {
                appState.searchQuery = this.value;
                renderComments();
            });

            // تحميل المزيد
            document.getElementById('loadMoreBtn').addEventListener('click', function() {
                appState.currentPage++;
                loadMoreComments();
            });

            // أزرار الإجراءات
            document.addEventListener('click', function(e) {
                // قبول التعليق
                if (e.target.closest('.btn-approve')) {
                    const commentCard = e.target.closest('.comment-card');
                    const commentId = commentCard.dataset.id;
                    approveComment(commentId);
                }

                // حذف التعليق
                if (e.target.closest('.btn-delete')) {
                    const commentCard = e.target.closest('.comment-card');
                    const commentId = commentCard.dataset.id;
                    deleteComment(commentId);
                }

                // تعديل التعليق
                if (e.target.closest('.btn-edit')) {
                    const commentCard = e.target.closest('.comment-card');
                    const commentId = commentCard.dataset.id;
                    editComment(commentId);
                }

                // إرسال رد
                if (e.target.closest('.send-reply')) {
                    const replyInput = e.target.closest('.add-reply').querySelector('.reply-input');
                    const commentCard = e.target.closest('.comment-card');
                    const commentId = commentCard.dataset.id;
                    
                    if (replyInput.value.trim()) {
                        sendReply(commentId, replyInput.value);
                        replyInput.value = '';
                    }
                }
            });
        }

        function renderComments() {
            const container = document.getElementById('commentsList');
            container.innerHTML = '';

            let filteredComments = filterComments(commentsData);
            filteredComments = sortComments(filteredComments);

            if (filteredComments.length === 0) {
                container.innerHTML = `
                    <div style="text-align: center; padding: 40px; color: var(--text-secondary);">
                        <i class="fas fa-comment-slash" style="font-size: 48px; margin-bottom: 15px;"></i>
                        <div>لا توجد تعليقات تطابق معايير البحث</div>
                    </div>
                `;
                return;
            }

            filteredComments.forEach(comment => {
                const commentElement = createCommentElement(comment);
                container.appendChild(commentElement);
            });
        }

        function filterComments(comments) {
            let filtered = comments;

            // الفلتر حسب الحالة
            if (appState.currentFilter !== 'all') {
                filtered = filtered.filter(comment => comment.status === appState.currentFilter);
            }

            // البحث
            if (appState.searchQuery) {
                const query = appState.searchQuery.toLowerCase();
                filtered = filtered.filter(comment => 
                    comment.text.toLowerCase().includes(query) ||
                    comment.user.name.toLowerCase().includes(query) ||
                    comment.realm.toLowerCase().includes(query)
                );
            }

            return filtered;
        }

        function sortComments(comments) {
            switch (appState.currentSort) {
                case 'newest':
                    return [...comments].sort((a, b) => b.id - a.id);
                case 'oldest':
                    return [...comments].sort((a, b) => a.id - b.id);
                case 'most-liked':
                    return [...comments].sort((a, b) => b.likes - a.likes);
                default:
                    return comments;
            }
        }

        function createCommentElement(comment) {
            const element = document.createElement('div');
            element.className = `comment-card ${comment.status}`;
            element.dataset.id = comment.id;

            let repliesHTML = '';
            if (comment.repliesList && comment.repliesList.length > 0) {
                repliesHTML = `
                    <div class="comment-replies">
                        <div class="replies-title">
                            <i class="fas fa-reply"></i>
                            الردود (${comment.repliesList.length})
                        </div>
                        <div class="reply-list">
                            ${comment.repliesList.map(reply => `
                                <div class="reply-card">
                                    <div class="reply-header">
                                        <div class="reply-user">
                                            <div class="reply-avatar">${reply.user.avatar}</div>
                                            <div class="reply-name">${reply.user.name}</div>
                                        </div>
                                        <div class="reply-time">${reply.time}</div>
                                    </div>
                                    <div class="reply-text">${reply.text}</div>
                                </div>
                            `).join('')}
                        </div>
                        <div class="add-reply">
                            <input type="text" class="reply-input" placeholder="اكتب رداً...">
                            <button class="send-reply">إرسال</button>
                        </div>
                    </div>
                `;
            }

            element.innerHTML = `
                <div class="comment-header">
                    <div class="comment-user">
                        <div class="user-avatar">${comment.user.avatar}</div>
                        <div class="user-info">
                            <div class="user-name">${comment.user.name}</div>
                            <div class="comment-time">${comment.time} • في <strong>${comment.realm}</strong></div>
                        </div>
                    </div>
                    <div class="comment-actions">
                        <span class="comment-status status-${comment.status}">
                            ${getStatusText(comment.status)}
                        </span>
                        ${comment.status !== 'approved' ? 
                            `<button class="action-btn btn-approve" title="قبول التعليق">
                                <i class="fas fa-check"></i>
                            </button>` : 
                            `<button class="action-btn btn-edit" title="تعديل التعليق">
                                <i class="fas fa-edit"></i>
                            </button>`
                        }
                        <button class="action-btn btn-delete" title="حذف التعليق">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="comment-content">
                    <div class="comment-text">${comment.text}</div>
                    <div class="comment-meta">
                        <div class="meta-item">
                            <i class="fas fa-heart"></i>
                            <span>${comment.likes}</span>
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-reply"></i>
                            <span>${comment.replies}</span>
                        </div>
                        ${comment.reports > 0 ? `
                            <div class="meta-item">
                                <i class="fas fa-flag"></i>
                                <span>${comment.reports} بلاغات</span>
                            </div>
                        ` : ''}
                    </div>
                </div>
                ${repliesHTML}
            `;

            return element;
        }

        function getStatusText(status) {
            const statusTexts = {
                'reported': 'مبلغ عنه',
                'pending': 'قيد المراجعة',
                'approved': 'مقبول'
            };
            return statusTexts[status] || status;
        }

        function approveComment(commentId) {
            const comment = commentsData.find(c => c.id == commentId);
            if (comment) {
                comment.status = 'approved';
                renderComments();
                showNotification('تم قبول التعليق بنجاح', 'success');
            }
        }

        function deleteComment(commentId) {
            if (confirm('هل أنت متأكد من حذف هذا التعليق؟ لا يمكن التراجع عن هذا الإجراء.')) {
                const index = commentsData.findIndex(c => c.id == commentId);
                if (index !== -1) {
                    commentsData.splice(index, 1);
                    renderComments();
                    showNotification('تم حذف التعليق بنجاح', 'success');
                }
            }
        }

        function editComment(commentId) {
            showNotification('فتح نافذة تعديل التعليق...', 'success');
        }

        function sendReply(commentId, replyText) {
            const comment = commentsData.find(c => c.id == commentId);
            if (comment) {
                const newReply = {
                    user: { name: "أنت", avatar: "أ" },
                    time: "الآن",
                    text: replyText
                };
                
                if (!comment.repliesList) {
                    comment.repliesList = [];
                }
                
                comment.repliesList.push(newReply);
                comment.replies++;
                renderComments();
                showNotification('تم إرسال الرد بنجاح', 'success');
            }
        }

        function loadMoreComments() {
            // محاكاة تحميل المزيد من التعليقات
            showNotification('جاري تحميل المزيد من التعليقات...', 'success');
            
            setTimeout(() => {
                // في التطبيق الحقيقي، هنا سيتم جلب البيانات من الخادم
                showNotification('تم تحميل المزيد من التعليقات', 'success');
            }, 1000);
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