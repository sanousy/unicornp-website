document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-toggle');
    const body = document.body;
    let isArabic = false;

    // 1. Language Switcher Logic
    // langBtn.addEventListener('click', () => {
    //     isArabic = !isArabic;

    //     // Toggle Direction and Button Text
    //     body.dir = isArabic ? 'rtl' : 'ltr';
    //     langBtn.innerText = isArabic ? 'English' : 'العربية';

    //     // Toggle Font Family for Arabic support
    //     body.style.fontFamily = isArabic ? "'Noto Sans Arabic', sans-serif" : "'Plus Jakarta Sans', sans-serif";

    //     // Smoothly hide/show language-specific elements
    //     document.querySelectorAll('.arabic').forEach(el => {
    //         el.style.display = isArabic ? 'block' : 'none';
    //     });

    //     // Hide English paragraphs when Arabic is active
    //     document.querySelectorAll('p:not(.arabic), h1:not(.arabic), .badge:not(.arabic)').forEach(el => {
    //         if (!el.classList.contains('logo-text')) {
    //             el.style.display = isArabic ? 'none' : 'block';
    //         }
    //     });
    // });


    const footerAr = document.getElementById('footerAr');
    const footerEn = document.getElementById('footerEn');
    function switchLang() {

        body.dir = isArabic ? 'rtl' : 'ltr';

        document.querySelectorAll('.arabic').forEach(el => el.style.display = isArabic ? 'block' : 'none');
        document.querySelectorAll('.english-content').forEach(el => el.style.display = isArabic ? 'none' : 'block');

        langBtn.innerText = isArabic ? 'English' : 'العربية';
        langBtn.className = !isArabic ? "btn-secondary arbtn" : "btn-secondary enbtn";



        if (footerAr && footerEn) {
            if (isArabic) {
                footerAr.style.display = 'block';
                footerEn.style.display = 'none';
            } else {
                footerAr.style.display = 'none';
                footerEn.style.display = 'block';
            }
        }

        // if (footerAr) footerAr.style.flexDirection = isArabic ? 'row' : 'row';
    };


    langBtn.addEventListener('click', () => {
        isArabic = !isArabic;
        switchLang(isArabic)
    });
    switchLang()

    // 2. Scroll Reveal Effect (Prevents "Empty" feel)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .stat-box').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    startHeartbeat();

});

// Simulating a live heartbeat for the platform
function startHeartbeat() {
    const statusText = document.querySelector('.status-msg');
    if (!statusText) return; // Safety check

    const signals = ['Optimizing Edge...', 'Tunnel Secure', 'Nodes Active', 'Latency: 24ms', 'System Operational'];
    let i = 0;

    setInterval(() => {
        statusText.style.opacity = 0;
        setTimeout(() => {
            statusText.innerText = signals[i];
            statusText.style.opacity = 1;
            i = (i + 1) % signals.length;
        }, 500);
    }, 3000);
}


document.querySelector('.btn-secondary').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#explore').scrollIntoView({ behavior: 'smooth' });
});


// قائمة الموديولات بالترتيب
const moduleList = [
    'docs/Module_1.md', 'docs/Module_2.md', 'docs/Module_3.md',
    'docs/Module_4.md', 'docs/Module_5.md', 'docs/Module_6.md',
    'docs/Module_7.md', 'docs/Module_8.md', 'docs/Module_9.md'
];
let currentModuleIndex = -1;

// دالة لتحميل وتحويل ملف الـ Markdown
async function loadModule(fileName) {
    const contentDiv = document.getElementById('markdown-content');
    const viewerSection = document.getElementById('doc-viewer-section');
    const mainSections = document.querySelectorAll('header, .downloads-section, .docs-section, .legal-section');

    // تحديث الفهرس الحالي بناءً على اسم الملف
    currentModuleIndex = moduleList.indexOf(fileName);

    try {
        const response = await fetch(fileName);
        if (!response.ok) throw new Error('File not found');

        const markdownText = await response.text();
        contentDiv.innerHTML = marked.parse(markdownText);

        // إظهار لوحة القراءة
        mainSections.forEach(s => s.style.display = 'none');
        viewerSection.style.display = 'block';
        window.scrollTo(0, 0);
        // إخفاء زر "Next" إذا وصلنا لآخر ملف
        const nextBtn = document.querySelectorAll('button[onclick="next()"]');
        if (nextBtn) {
            nextBtn.forEach(e => {
                if (currentModuleIndex === moduleList.length - 1)
                    e.setAttribute("disabled", "true")
                else
                    e.removeAttribute("disabled")
                //e.style.display = (currentModuleIndex === moduleList.length - 1) ? 'none' : 'inline-block';
            })
        }
        const prevBtn = document.querySelectorAll('button[onclick="prev()"]');
        if (prevBtn) {
            prevBtn.forEach(e => {
                if (currentModuleIndex === 0)
                    e.setAttribute("disabled", "true")
                else
                    e.removeAttribute("disabled")
                //e.style.display = (currentModuleIndex === 0) ? 'none' : 'inline-block';
            })
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Could not load documentation.');
    }
}

// دالة الانتقال للملف التالي
function prev() {
    if (currentModuleIndex > 0) {
        const nextFile = moduleList[currentModuleIndex - 1];
        loadModule(nextFile);
    } else {
        // إذا كان هذا آخر موديول، يمكننا العودة للأول أو إغلاق العارض
        // alert("You have reached the start of the documentation.");
    }
}
function next() {
    if (currentModuleIndex < moduleList.length - 1) {
        const nextFile = moduleList[currentModuleIndex + 1];
        loadModule(nextFile);
    } else {
        // إذا كان هذا آخر موديول، يمكننا العودة للأول أو إغلاق العارض
        // alert("You have reached the end of the documentation.");

    }
}
function closeDoc() {
    location.reload(); // أسهل طريقة للعودة للحالة الأصلية، أو يمكنك تبديل الـ display يدوياً
}

// ربط الروابط بالدالة الجديدة
document.querySelectorAll('.doc-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const file = link.getAttribute('href');
        loadModule(file);
    });
});

