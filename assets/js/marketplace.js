// بيانات السوق
        const marketplaceData = {
            user: {
                name: "أحمد محمد",
                level: 5,
                role: "منشئ محتوى",
                wallet: 1250,
                products: 12,
                sales: 3200,
                rating: 4.8
            },
            worlds: [
                {
                    id: 1,
                    title: "عالم الفن الرقمي المتقدم",
                    creator: "فريق الإبداع",
                    price: 299,
                    oldPrice: 399,
                    description: "عالم متكامل للفنانين الرقميين بمكتبة أدوات شاملة وتفاعلات فريدة",
                    image: "🎨",
                    type: "premium",
                    rating: 4.9,
                    sales: 1247,
                    category: "فنون"
                },
                {
                    id: 2,
                    title: "عالم البرمجة التفاعلي",
                    creator: "مطورين مبدعين",
                    price: 199,
                    oldPrice: null,
                    description: "تعلم البرمجة بطريقة تفاعلية مع تحديات حية ومشاريع واقعية",
                    image: "💻",
                    type: "regular",
                    rating: 4.7,
                    sales: 892,
                    category: "تعليم"
                },
                {
                    id: 3,
                    title: "مجتمع اللياقة البدنية",
                    creator: "مدربين محترفين",
                    price: 149,
                    oldPrice: 199,
                    description: "انضم إلى مجتمع اللياقة الأكبر مع تمارين حية وتحديات يومية",
                    image: "💪",
                    type: "discount",
                    rating: 4.8,
                    sales: 2105,
                    category: "صحة"
                },
                {
                    id: 4,
                    title: "عالم الموسيقى والإبداع",
                    creator: "فنانين عالميين",
                    price: 0,
                    oldPrice: null,
                    description: "استكشف عالم الموسيقى مع أدوات مجانية وورش عمل تفاعلية",
                    image: "🎵",
                    type: "free",
                    rating: 4.6,
                    sales: 3567,
                    category: "ترفيه"
                },
                {
                    id: 5,
                    title: "منصة التعليم الذكي",
                    creator: "خبراء تعليم",
                    price: 249,
                    oldPrice: 349,
                    description: "منصة تعليمية ذكية بتقنيات الذكاء الاصطناعي المتقدمة",
                    image: "🧠",
                    type: "premium",
                    rating: 4.9,
                    sales: 567,
                    category: "تعليم"
                },
                {
                    id: 6,
                    title: "عالم الألعاب الاستراتيجية",
                    creator: "مصممي ألعاب",
                    price: 179,
                    oldPrice: null,
                    description: "انضم إلى عالم الألعاب الاستراتيجية مع منافسات حية وجوائز قيمة",
                    image: "🎮",
                    type: "regular",
                    rating: 4.5,
                    sales: 1342,
                    category: "ألعاب"
                }
            ],
            tools: [
                {
                    id: 101,
                    title: "مجموعة أيقونات مميزة",
                    creator: "مصمم جرافيك",
                    price: 49,
                    description: "150 أيقونة عالية الجودة بتصميم عصري",
                    image: "🎨",
                    category: "أيقونات",
                    rating: 4.8,
                    sales: 289
                },
                {
                    id: 102,
                    title: "قوالب واجهات جاهزة",
                    creator: "مطور واجهات",
                    price: 79,
                    description: "10 قوالب احترافية لواجهات المستخدم",
                    image: "📱",
                    category: "قوالب",
                    rating: 4.7,
                    sales: 156
                },
                {
                    id: 103,
                    title: "مكتبة مؤثرات بصرية",
                    creator: "فنان مرئي",
                    price: 99,
                    description: "مجموعة مؤثرات بصرية متقدمة للعوالم",
                    image: "✨",
                    category: "مؤثرات",
                    rating: 4.9,
                    sales: 421
                }
            ],
            transactions: [
                {
                    id: 1001,
                    type: "income",
                    title: "بيع عالم البرمجة",
                    description: "عمولة من بيع المنتج",
                    amount: 45,
                    date: "2023-10-15",
                    time: "14:30"
                },
                {
                    id: 1002,
                    type: "expense",
                    title: "شراء أدوات تصميم",
                    description: "مجموعة أيقونات مميزة",
                    amount: -49,
                    date: "2023-10-14",
                    time: "09:15"
                },
                {
                    id: 1003,
                    type: "income",
                    title: "مكافأة نشاط",
                    description: "مكافأة النشاط الشهري",
                    amount: 100,
                    date: "2023-10-10",
                    time: "08:00"
                },
                {
                    id: 1004,
                    type: "income",
                    title: "بيع قالب واجهة",
                    description: "عمولة من بيع المنتج",
                    amount: 23,
                    date: "2023-10-08",
                    time: "16:45"
                }
            ]
        };

        // حالة التطبيق
        let currentState = {
            activeTab: 'worlds',
            selectedProduct: null,
            cart: [],
            wishlist: []
        };

        // تهيئة السوق
        document.addEventListener('DOMContentLoaded', function() {
            initializeMarketplace();
        });

        function initializeMarketplace() {
            loadUserData();
            loadWorlds();
            loadTools();
            loadTransactions();
            setupEventListeners();
        }

        function loadUserData() {
            // تحديث بيانات المستخدم
            document.getElementById('walletAmount').textContent = marketplaceData.user.wallet.toLocaleString();
            
            // تحديث البطاقة الشخصية
            document.querySelector('.profile-details h2').textContent = marketplaceData.user.name;
            document.querySelector('.profile-details p').textContent = `مستوى ${marketplaceData.user.level} - ${marketplaceData.user.role}`;
            
            // تحديث الإحصائيات
            document.querySelectorAll('.stat-value')[0].textContent = marketplaceData.user.products;
            document.querySelectorAll('.stat-value')[1].textContent = marketplaceData.user.sales.toLocaleString();
            document.querySelectorAll('.stat-value')[2].textContent = marketplaceData.user.rating;
        }

        function loadWorlds() {
            const container = document.getElementById('worldsGrid');
            container.innerHTML = '';

            marketplaceData.worlds.forEach(world => {
                const worldCard = createProductCard(world, 'world');
                container.appendChild(worldCard);
            });
        }

        function loadTools() {
            const container = document.getElementById('toolsGrid');
            container.innerHTML = '';

            marketplaceData.tools.forEach(tool => {
                const toolCard = createProductCard(tool, 'tool');
                container.appendChild(toolCard);
            });
        }

        function loadTransactions() {
            const container = document.getElementById('transactionsList');
            container.innerHTML = '';

            marketplaceData.transactions.forEach(transaction => {
                const transactionItem = createTransactionItem(transaction);
                container.appendChild(transactionItem);
            });
        }

        function createProductCard(product, type) {
            const card = document.createElement('div');
            card.className = `product-card ${product.type === 'premium' ? 'premium' : ''}`;
            card.dataset.id = product.id;
            card.dataset.type = type;
            
            let badge = '';
            if (product.type === 'premium') {
                badge = '<div class="product-badge">مميز</div>';
            } else if (product.type === 'discount') {
                badge = '<div class="product-badge">خصم</div>';
            } else if (product.type === 'free') {
                badge = '<div class="product-badge">مجاني</div>';
            }
            
            let oldPrice = '';
            if (product.oldPrice) {
                oldPrice = `<span class="old-price">${product.oldPrice}</span>`;
            }
            
            let priceDisplay = '';
            if (product.price === 0) {
                priceDisplay = '<div class="product-price">مجاني</div>';
            } else {
                priceDisplay = `
                    <div class="product-price">
                        ${product.price} نقطة
                        ${oldPrice}
                    </div>
                `;
            }
            
            card.innerHTML = `
                ${badge}
                <div class="product-image">
                    ${product.image}
                </div>
                <div class="product-content">
                    <div class="product-header">
                        <div>
                            <div class="product-title">${product.title}</div>
                            <div class="product-creator">بواسطة ${product.creator}</div>
                        </div>
                        ${priceDisplay}
                    </div>
                    <div class="product-description">${product.description}</div>
                    <div class="product-stats">
                        <span>⭐ ${product.rating}</span>
                        <span>🛒 ${product.sales.toLocaleString()}</span>
                    </div>
                    <div class="product-actions">
                        <button class="buy-btn" data-product='${JSON.stringify(product).replace(/'/g, "\\'")}'>
                            ${product.price === 0 ? 'احصل مجاناً' : 'شراء الآن'}
                        </button>
                        <button class="wishlist-btn">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            `;
            
            return card;
        }

        function createTransactionItem(transaction) {
            const item = document.createElement('div');
            item.className = 'transaction-item';
            
            const iconClass = transaction.type === 'income' ? 'income' : 'expense';
            const icon = transaction.type === 'income' ? 'fas fa-arrow-down' : 'fas fa-arrow-up';
            
            item.innerHTML = `
                <div class="transaction-info">
                    <div class="transaction-icon ${iconClass}">
                        <i class="${icon}"></i>
                    </div>
                    <div class="transaction-details">
                        <h4>${transaction.title}</h4>
                        <p>${transaction.description} • ${transaction.date}</p>
                    </div>
                </div>
                <div class="transaction-amount ${iconClass}">
                    ${transaction.type === 'income' ? '+' : ''}${transaction.amount} نقطة
                </div>
            `;
            
            return item;
        }

        function setupEventListeners() {
            // تبويبات السوق
            document.querySelectorAll('.marketplace-tab').forEach(tab => {
                tab.addEventListener('click', function() {
                    const targetTab = this.dataset.tab;
                    
                    // إزالة النشاط من جميع التبويبات
                    document.querySelectorAll('.marketplace-tab').forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // إخفاء جميع الأقسام
                    document.querySelectorAll('.content-section').forEach(section => {
                        section.classList.remove('active');
                    });
                    
                    // إظهار القسم المحدد
                    document.getElementById(`${targetTab}-content`).classList.add('active');
                });
            });

            // فلتر المنتجات
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    // هنا يمكن تطبيق الفلترة
                });
            });

            // أزرار الشراء
            document.addEventListener('click', function(e) {
                if (e.target.closest('.buy-btn')) {
                    const btn = e.target.closest('.buy-btn');
                    const product = JSON.parse(btn.dataset.product);
                    openPurchaseModal(product);
                }

                if (e.target.closest('.wishlist-btn')) {
                    const btn = e.target.closest('.wishlist-btn');
                    btn.classList.toggle('active');
                    
                    if (btn.classList.contains('active')) {
                        showNotification('تمت الإضافة إلى المفضلة');
                    } else {
                        showNotification('تمت الإزالة من المفضلة');
                    }
                }

                if (e.target.closest('.subscribe-btn')) {
                    const btn = e.target.closest('.subscribe-btn');
                    const plan = btn.dataset.plan;
                    handleSubscription(plan);
                }
            });

            // نافذة الشراء
            document.getElementById('closeModal').addEventListener('click', closePurchaseModal);
            document.getElementById('confirmPurchase').addEventListener('click', confirmPurchase);

            // طرق الدفع
            document.querySelectorAll('.payment-option').forEach(option => {
                option.addEventListener('click', function() {
                    document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('active'));
                    this.classList.add('active');
                });
            });

            // زر العودة
            document.getElementById('backBtn').addEventListener('click', function() {
                window.history.back();
            });

            // أزرار الاقتصاد
            document.getElementById('addFundsBtn').addEventListener('click', function() {
                showNotification('جاري فتح نافذة إضافة الرصيد...');
            });

            document.getElementById('withdrawBtn').addEventListener('click', function() {
                showNotification('جاري فتح نافذة سحب الأرباح...');
            });

            document.getElementById('transferBtn').addEventListener('click', function() {
                showNotification('جاري فتح نافذة تحويل الرصيد...');
            });

            document.getElementById('giftBtn').addEventListener('click', function() {
                showNotification('جاري فتح نافذة إرسال الهدايا...');
            });
        }

        function openPurchaseModal(product) {
            currentState.selectedProduct = product;
            
            // تحديث بيانات النافذة
            document.getElementById('modalProductImage').textContent = product.image;
            document.getElementById('modalProductTitle').textContent = product.title;
            document.getElementById('modalProductCreator').textContent = `بواسطة ${product.creator}`;
            
            if (product.price === 0) {
                document.getElementById('modalProductPrice').textContent = 'مجاني';
            } else {
                document.getElementById('modalProductPrice').textContent = `${product.price} نقطة`;
            }
            
            // إظهار النافذة
            document.getElementById('purchaseModal').classList.add('active');
        }

        function closePurchaseModal() {
            document.getElementById('purchaseModal').classList.remove('active');
            currentState.selectedProduct = null;
        }

        function confirmPurchase() {
            if (!currentState.selectedProduct) return;
            
            const product = currentState.selectedProduct;
            const paymentMethod = document.querySelector('.payment-option.active').dataset.method;
            
            if (product.price > 0 && paymentMethod === 'wallet') {
                if (marketplaceData.user.wallet < product.price) {
                    showNotification('رصيدك غير كافي، يرجى إضافة رصيد', 'error');
                    return;
                }
                
                // خصم المبلغ من المحفظة
                marketplaceData.user.wallet -= product.price;
                document.getElementById('walletAmount').textContent = marketplaceData.user.wallet.toLocaleString();
            }
            
            // إضافة المنتج إلى السلة
            currentState.cart.push(product);
            
            showNotification(`تم شراء "${product.title}" بنجاح! 🎉`);
            closePurchaseModal();
            
            // تحديث الإحصائيات
            marketplaceData.user.sales += 1;
            loadUserData();
        }

        function handleSubscription(plan) {
            if (plan === 'basic') {
                showNotification('أنت تستخدم الخطة الأساسية حالياً');
                return;
            }
            
            const planPrices = {
                premium: 49,
                professional: 99
            };
            
            const price = planPrices[plan];
            const planNames = {
                premium: 'المميزة',
                professional: 'الاحترافية'
            };
            
            showNotification(`جاري ترقية حسابك إلى الخطة ${planNames[plan]} بقيمة ${price} نقطة`);
            
            // هنا سيتم إجراء عملية الدفع والترقية
        }

        function showNotification(message, type = 'success') {
            // إنشاء إشعار
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                left: 50%;
                transform: translateX(-50%);
                background: ${type === 'error' ? '#ef4444' : 'var(--gradient-primary)'};
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

        // محاكاة API calls للربط مع الواجهة الخلفية
        const MarketplaceAPI = {
            // الحصول على بيانات السوق
            getMarketplaceData: async function() {
                // محاكاة استدعاء API
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve(marketplaceData);
                    }, 500);
                });
            },

            // شراء منتج
            purchaseProduct: async function(productId, paymentMethod) {
                // محاكاة استدعاء API
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve({ success: true, transactionId: Date.now() });
                    }, 1000);
                });
            },

            // إضافة إلى المفضلة
            addToWishlist: async function(productId) {
                // محاكاة استدعاء API
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve({ success: true });
                    }, 300);
                });
            },

            // ترقية الاشتراك
            upgradeSubscription: async function(plan) {
                // محاكاة استدعاء API
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve({ success: true, newPlan: plan });
                    }, 1500);
                });
            },

            // إضافة رصيد
            addFunds: async function(amount, paymentMethod) {
                // محاكاة استدعاء API
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve({ success: true, newBalance: marketplaceData.user.wallet + amount });
                    }, 1000);
                });
            }
        };