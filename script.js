document.addEventListener('DOMContentLoaded', () => {
    // --- Translation Data ---
    const translations = {
        en: {
            nav_updates: "Updates",
            nav_features: "Features",
            nav_download: "Download",
            status_msg: "Development Paused: Fixing 90% of bugs. Multiplayer temporarily disabled due to complexity.",
            hero_badge: "🎮 Mobile Game",
            hero_subtitle: "The Ultimate Tic-Tac-Toe Experience",
            hero_desc: "Experience the classic game reimagined with stunning neon graphics, power-ups, and multiplayer action. Challenge your friends locally!",
            btn_download: "Download APK",
            btn_updates: "View Updates",
            created_by: "Created by",
            preview_win: "X Wins! 🎉",
            updates_title: "Update Logs",
            log_1: "✅ Fixed 90% of game-breaking bugs.",
            log_2: "🛑 Online Multiplayer Disabled (Temporarily) to ensure stability.",
            log_3: "✨ Added 'Coming Soon' status for online features.",
            log_4: "📱 Improved UI responsiveness.",
            features_title: "Game Features",
            feat_local_title: "Local Multiplayer",
            feat_local_desc: "Challenge your friends on the same device.",
            feat_neon_title: "Neon Graphics",
            feat_neon_desc: "Beautiful glowing visuals and particles.",
            feat_leader_title: "Global Leaderboards",
            feat_leader_desc: "Compete for the top spot globally.",
            dl_title: "Download XO Clash",
            dl_subtitle: "Get the latest version now!",
            scan_qr: "Scan to Install",
            btn_dl_apk: "Download APK",
            dl_platform: "For Android",
            coming_soon_platforms: "Coming Next Update: Windows, Linux, Web",
            footer_made: "Made with ❤️ by"
        },
        ar: {
            nav_updates: "التحديثات",
            nav_features: "المميزات",
            nav_download: "تحميل",
            status_msg: "التطوير متوقف مؤقتًا: تم إصلاح 90% من الأخطاء. تم تعطيل اللعب الجماعي مؤقتًا للتحسين.",
            hero_badge: "🎮 لعبة جوال",
            hero_subtitle: "تجربة إكس أو (Tic-Tac-Toe) المثالية",
            hero_desc: "جرب اللعبة الكلاسيكية برسومات نيون مذهلة، وقوى خاصة، ولعب جماعي. تحدى أصدقائك محليًا!",
            btn_download: "تحميل APK",
            btn_updates: "سجل التحديثات",
            created_by: "تم الإنشاء بواسطة",
            preview_win: "X فاز! 🎉",
            updates_title: "سجل التحديثات",
            log_1: "✅ تم إصلاح 90% من الأخطاء البرمجية.",
            log_2: "🛑 تم تعطيل اللعب الجماعي أونلاين (مؤقتاً) لضمان الاستقرار.",
            log_3: "✨ إضافة حالة 'قريباً' للميزات الأونلاين.",
            log_4: "📱 تحسين استجابة واجهة المستخدم.",
            features_title: "مميزات اللعبة",
            feat_local_title: "لعب جماعي محلي",
            feat_local_desc: "تحدى أصدقائك على نفس الجهاز.",
            feat_neon_title: "رسومات نيون",
            feat_neon_desc: "رموز متوهجة جميلة ومؤثرات بصرية.",
            feat_leader_title: "لوحة صدارة عالمية",
            feat_leader_desc: "نافس على المركز الأول عالمياً.",
            dl_title: "تحميل XO Clash",
            dl_subtitle: "احصل على أحدث نسخة الآن!",
            scan_qr: "امسح للتثبيت",
            btn_dl_apk: "تحميل اللعبة",
            dl_platform: "للأندرويد",
            coming_soon_platforms: "قادم في التحديث القادم: ويندوز، لينكس، ويب",
            footer_made: "صنع بـ ❤️ بواسطة"
        }
    };

    // --- State ---
    let currentLang = 'en';
    let currentTheme = 'dark';

    // --- DOM Elements ---
    const langBtn = document.getElementById('lang-toggle');
    const themeBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // --- Functions ---
    function updateLanguage() {
        // Set Direction
        if (currentLang === 'ar') {
            html.setAttribute('dir', 'rtl');
            html.setAttribute('lang', 'ar');
        } else {
            html.setAttribute('dir', 'ltr');
            html.setAttribute('lang', 'en');
        }

        // Update Text
        const data = translations[currentLang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (data[key]) {
                el.innerText = data[key];
            }
        });
    }

    function toggleTheme() {
        if (currentTheme === 'dark') {
            currentTheme = 'light';
            html.setAttribute('data-theme', 'light');
            themeBtn.innerText = '🌙';
        } else {
            currentTheme = 'dark';
            html.removeAttribute('data-theme');
            themeBtn.innerText = '☀️';
        }
    }

    // --- Event Listeners ---
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        langBtn.innerText = currentLang === 'en' ? 'AR' : 'EN';
        updateLanguage();
    });

    themeBtn.addEventListener('click', toggleTheme);

    // --- Particle Logic (Existing) ---
    createParticles();
});

function createParticles() {
    const container = document.getElementById('particles');
    const colors = ['#ff0055', '#00f5d4']; // Pink and Cyan

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.1};
            border-radius: 50%;
            pointer-events: none;
            animation: float ${Math.random() * 3 + 2}s infinite alternate;
        `;
        container.appendChild(particle);
    }
}
