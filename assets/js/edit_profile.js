// بيانات المستخدم الحالية
        let currentUserData = {
            fullName: "أحمد محمد",
            username: "@ahmedmohamed",
            bio: "مطور واجهات مستخدم، مهتم بالتقنية والتصميم. أحب مشاركة المعرفة والتعلم المستمر.",
            location: "الرياض، السعودية",
            website: "https://ahmedportfolio.com",
            social: {
                twitter: "ahmed_dev",
                instagram: "ahmed.design",
                linkedin: "linkedin.com/in/ahmedmohamed",
                github: "ahmedmohamed"
            },
            settings: {
                privateAccount: false,
                emailNotifications: true,
                pushNotifications: true
            }
        };

        // حالة التعديل
        let editProfileState = {
            hasChanges: false,
            isSubmitting: false
        };

        // تهيئة الصفحة
        document.addEventListener('DOMContentLoaded', function() {
            initializeEditProfilePage();
        });

        function initializeEditProfilePage() {
            loadUserData();
            setupEventListeners();
            setupFormValidation();
        }

        function loadUserData() {
            // تحميل بيانات المستخدم في النموذج
            document.getElementById('fullName').value = currentUserData.fullName;
            document.getElementById('username').value = currentUserData.username.replace('@', '');
            document.getElementById('bio').value = currentUserData.bio;
            document.getElementById('location').value = currentUserData.location;
            document.getElementById('website').value = currentUserData.website;
            
            // الروابط الاجتماعية
            document.getElementById('twitter').value = currentUserData.social.twitter;
            document.getElementById('instagram').value = currentUserData.social.instagram;
            document.getElementById('linkedin').value = currentUserData.social.linkedin;
            document.getElementById('github').value = currentUserData.social.github;
            
            // الإعدادات
            document.getElementById('privateAccount').checked = currentUserData.settings.privateAccount;
            document.getElementById('emailNotifications').checked = currentUserData.settings.emailNotifications;
            document.getElementById('pushNotifications').checked = currentUserData.settings.pushNotifications;
            
            // تحديث العدادات
            updateCharCounters();
        }

        function setupEventListeners() {
            // زر العودة
            document.getElementById('backBtn').addEventListener('click', function() {
                if (editProfileState.hasChanges) {
                    if (confirm('لديك تغييرات غير محفوظة. هل تريد المغادرة دون الحفظ؟')) {
                        window.history.back();
                    }
                } else {
                    window.history.back();
                }
            });
            
            // زر المساعدة
            document.getElementById('helpBtn').addEventListener('click', function() {
                showNotification('مرحباً بك في صفحة تعديل الملف الشخصي! يمكنك تحديث معلوماتك هنا.', 'success');
            });
            
            // زر المعاينة
            document.getElementById('previewBtn').addEventListener('click', function() {
                showNotification('جاري فتح معاينة الملف الشخصي...', 'success');
            });
            
            // تغيير الصور
            document.getElementById('changeCoverBtn').addEventListener('click', function() {
                showNotification('فتح خيارات تغيير صورة الغلاف...', 'success');
            });
            
            document.getElementById('changeProfileBtn').addEventListener('click', function() {
                showNotification('فتح خيارات تغيير الصورة الشخصية...', 'success');
            });
            
            // زر الإلغاء
            document.getElementById('cancelEditBtn').addEventListener('click', function() {
                if (editProfileState.hasChanges) {
                    if (confirm('هل تريد إلغاء جميع التغييرات؟')) {
                        loadUserData();
                        editProfileState.hasChanges = false;
                        showNotification('تم إلغاء جميع التغييرات', 'success');
                    }
                } else {
                    showNotification('لا توجد تغييرات لإلغائها', 'error');
                }
            });
            
            // مراقبة التغييرات في النموذج
            const formInputs = document.querySelectorAll('#editProfileForm input, #editProfileForm textarea');
            formInputs.forEach(input => {
                input.addEventListener('input', function() {
                    editProfileState.hasChanges = true;
                    updateCharCounter(this);
                });
            });
            
            // مراقبة تغييرات التبديل
            const toggleSwitches = document.querySelectorAll('.toggle-switch input');
            toggleSwitches.forEach(toggle => {
                toggle.addEventListener('change', function() {
                    editProfileState.hasChanges = true;
                });
            });
            
            // تقديم النموذج
            document.getElementById('editProfileForm').addEventListener('submit', handleFormSubmit);
            
            // منع إغلاق الصفحة مع وجود تغييرات غير محفوظة
            window.addEventListener('beforeunload', function(e) {
                if (editProfileState.hasChanges) {
                    e.preventDefault();
                    e.returnValue = 'لديك تغييرات غير محفوظة. هل تريد المغادرة؟';
                }
            });
        }

        function setupFormValidation() {
            // التحقق من اسم المستخدم
            document.getElementById('username').addEventListener('blur', function() {
                const username = this.value.trim();
                if (username && !isValidUsername(username)) {
                    showInputError(this, 'اسم المستخدم يمكن أن يحتوي فقط على أحرف وأرقام وشرطة سفلية');
                } else {
                    clearInputError(this);
                }
            });
            
            // التحقق من الموقع الإلكتروني
            document.getElementById('website').addEventListener('blur', function() {
                const website = this.value.trim();
                if (website && !isValidUrl(website)) {
                    showInputError(this, 'يرجى إدخال رابط صحيح يبدأ بـ https://');
                } else {
                    clearInputError(this);
                }
            });
        }

        function updateCharCounter(input) {
            const counter = document.getElementById(input.id + 'Counter');
            const maxLength = input.getAttribute('maxlength');
            const currentLength = input.value.length;
            
            counter.textContent = `${currentLength}/${maxLength}`;
            
            // تحديث اللون حسب النسبة
            const percentage = (currentLength / maxLength) * 100;
            counter.className = 'char-counter';
            
            if (percentage > 90) {
                counter.classList.add('error');
            } else if (percentage > 75) {
                counter.classList.add('warning');
            }
        }

        function updateCharCounters() {
            const inputs = document.querySelectorAll('input[maxlength], textarea[maxlength]');
            inputs.forEach(input => {
                updateCharCounter(input);
            });
        }

        function isValidUsername(username) {
            const regex = /^[a-zA-Z0-9_]+$/;
            return regex.test(username);
        }

        function isValidUrl(url) {
            try {
                new URL(url);
                return true;
            } catch {
                return false;
            }
        }

        function showInputError(input, message) {
            clearInputError(input);
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'input-error';
            errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
            
            input.parentNode.appendChild(errorDiv);
            input.style.borderColor = '#ef4444';
        }

        function clearInputError(input) {
            const existingError = input.parentNode.querySelector('.input-error');
            if (existingError) {
                existingError.remove();
            }
            input.style.borderColor = '';
        }

        function handleFormSubmit(e) {
            e.preventDefault();
            
            if (editProfileState.isSubmitting) return;
            
            // التحقق من صحة البيانات
            const formData = getFormData();
            const validation = validateFormData(formData);
            
            if (!validation.isValid) {
                showNotification(validation.message, 'error');
                return;
            }
            
            // محاكاة حفظ البيانات
            editProfileState.isSubmitting = true;
            const saveBtn = document.getElementById('saveProfileBtn');
            const originalText = saveBtn.innerHTML;
            
            saveBtn.innerHTML = '<i class="fas fa-spinner loading"></i> جاري الحفظ...';
            saveBtn.disabled = true;
            
            // محاكاة اتصال بالخادم
            setTimeout(() => {
                // حفظ البيانات
                currentUserData = {
                    ...currentUserData,
                    fullName: formData.fullName,
                    username: `@${formData.username}`,
                    bio: formData.bio,
                    location: formData.location,
                    website: formData.website,
                    social: {
                        twitter: formData.twitter,
                        instagram: formData.instagram,
                        linkedin: formData.linkedin,
                        github: formData.github
                    },
                    settings: {
                        privateAccount: formData.privateAccount,
                        emailNotifications: formData.emailNotifications,
                        pushNotifications: formData.pushNotifications
                    }
                };
                
                editProfileState.isSubmitting = false;
                editProfileState.hasChanges = false;
                
                saveBtn.innerHTML = originalText;
                saveBtn.disabled = false;
                
                showNotification('تم تحديث الملف الشخصي بنجاح! 🎉', 'success');
                
            }, 2000);
        }

        function getFormData() {
            return {
                fullName: document.getElementById('fullName').value.trim(),
                username: document.getElementById('username').value.trim(),
                bio: document.getElementById('bio').value.trim(),
                location: document.getElementById('location').value.trim(),
                website: document.getElementById('website').value.trim(),
                twitter: document.getElementById('twitter').value.trim(),
                instagram: document.getElementById('instagram').value.trim(),
                linkedin: document.getElementById('linkedin').value.trim(),
                github: document.getElementById('github').value.trim(),
                privateAccount: document.getElementById('privateAccount').checked,
                emailNotifications: document.getElementById('emailNotifications').checked,
                pushNotifications: document.getElementById('pushNotifications').checked
            };
        }

        function validateFormData(data) {
            if (!data.fullName) {
                return { isValid: false, message: 'الاسم الكامل مطلوب' };
            }
            
            if (!data.username) {
                return { isValid: false, message: 'اسم المستخدم مطلوب' };
            }
            
            if (!isValidUsername(data.username)) {
                return { isValid: false, message: 'اسم المستخدم غير صالح' };
            }
            
            if (data.website && !isValidUrl(data.website)) {
                return { isValid: false, message: 'الموقع الإلكتروني غير صالح' };
            }
            
            return { isValid: true, message: '' };
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
            }, 4000);
        }