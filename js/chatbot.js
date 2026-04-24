/*
    CHATBOT v2.0 — Smart Bilingual AI Assistant
    Arabic & English | Mohamed Dogheim Portfolio
*/

// ─────────────────────────────────────────────
//  KNOWLEDGE BASE — all info about Mohamed
// ─────────────────────────────────────────────
const KB = {
    name:     "Mohamed Dogheim",
    nameAr:   "محمد دوغيم",
    title:    "Data Analyst & AI Specialist",
    titleAr:  "محلل بيانات ومتخصص ذكاء اصطناعي",
    email:    "mohameddogheim9500@gmail.com",
    phone:    "+20 1023103801",
    whatsapp: "https://wa.me/201023103801",
    linkedin: "https://www.linkedin.com/in/mohamed-dogheim-",
    github:   "https://github.com/Mohamed-do37",
    location: "Egypt 🇪🇬",

    experience: {
        years: "3+",
        current: "Digilians — Ministry of Communications and Information Technology (MCIT), Egypt",
        currentAr: "ديجيليانز — وزارة الاتصالات وتكنولوجيا المعلومات، مصر",
        role: "Data Analyst",
        roleAr: "محلل بيانات",
        period: "December 2025 – Present",
        periodAr: "ديسمبر 2025 – حتى الآن",
        desc: "Designing and developing AI models to analyze data and extract insights. Analyzing large datasets using advanced techniques. Utilizing Python, SQL, and Power BI for interactive reports. Applying ML algorithms to improve prediction accuracy and support business growth.",
        descAr: "تصميم وتطوير نماذج الذكاء الاصطناعي لتحليل البيانات واستخراج الأفكار. تحليل مجموعات البيانات الضخمة باستخدام تقنيات متقدمة. استخدام Python و SQL و Power BI لتقارير تفاعلية. تطبيق خوارزميات التعلم الآلي لتحسين دقة التنبؤ ودعم نمو الأعمال."
    },

    skills: {
        programming: ["Python (95%)", "SQL (90%)", "Power BI (92%)", "Tableau (85%)"],
        ml: ["ML Algorithms (92%)", "Scikit-learn (90%)", "AI Insights (88%)", "Deep Learning (75%)"],
        other: ["Data Cleaning & ETL", "Statistical Analysis", "NLP", "Data Storytelling"]
    },

    projects: [
        {
            title: "Customer Churn Prediction",
            titleAr: "نموذج التنبؤ بمغادرة العملاء",
            tools: "Python, Scikit-learn",
            result: "94.2% Accuracy, 18% churn reduction",
            resultAr: "دقة 94.2٪، تقليل معدل المغادرة 18٪",
            desc: "End-to-end ML pipeline for telecom retention strategy.",
            descAr: "نموذج تعلم آلة متكامل لاستراتيجية الاحتفاظ بعملاء شركات الاتصالات."
        },
        {
            title: "Sales Performance Dashboard",
            titleAr: "لوحة تحكم أداء المبيعات",
            tools: "Power BI, DAX, SQL",
            result: "Reduced reporting time by 90%",
            resultAr: "تقليل وقت إعداد التقارير بنسبة 90٪",
            desc: "Interactive C-suite dashboard for regional sales tracking.",
            descAr: "لوحة معلومات تفاعلية لتتبع المبيعات الإقليمية للإدارة العليا."
        },
        {
            title: "NLP Sentiment Analysis",
            titleAr: "تحليل المشاعر باستخدام NLP",
            tools: "Python, TensorFlow, BERT",
            result: "12% increase in satisfaction scores",
            resultAr: "زيادة 12٪ في درجات رضا العملاء",
            desc: "Massive-scale analysis of 500K+ customer reviews.",
            descAr: "تحليل ضخم لأكثر من 500 ألف تقييم من العملاء."
        },
        {
            title: "Real-Time Market Tracker",
            titleAr: "متتبع السوق في الوقت الفعلي",
            tools: "Python, Kafka, SQL",
            result: "Sub-second alert latency",
            resultAr: "تنبيهات فورية بكمون أقل من ثانية",
            desc: "Streaming pipeline for anomaly detection in stock data.",
            descAr: "خط بيانات متدفق للكشف عن الشذوذات في بيانات الأسهم."
        }
    ],

    certs: [
        "Google Data Analytics Capstone (Google / Coursera)",
        "IBM Data Certification (IBM)",
        "Multiple Coursera Professional Certificates",
        "Professional Data Analyst Certificates (×4)"
    ],

    services: [
        "Advanced Data Analysis",
        "Machine Learning Models",
        "BI Dashboards (Power BI / Tableau)",
        "AI Consultation",
        "Deep Learning Solutions"
    ],

    stats: {
        experience: "3+ Years",
        projects: "20+ Projects",
        models: "10+ ML Models",
        satisfaction: "95% Client Satisfaction"
    },

    philosophy: "I believe that behind every dataset lies a story waiting to be told. My mission is to decode these stories to uncover hidden opportunities, minimize risks, and drive sustainable growth through evidence-based strategies.",
    philosophyAr: "أؤمن بأن وراء كل مجموعة بيانات قصة تنتظر أن تُروى. مهمتي هي فك رموز هذه القصص للكشف عن الفرص الخفية، وتقليل المخاطر، وتحقيق النمو المستدام من خلال استراتيجيات قائمة على الأدلة."
};

// ─────────────────────────────────────────────
//  INTENT PATTERNS (Arabic + English keywords)
// ─────────────────────────────────────────────
const INTENTS = [
    {
        name: "greeting",
        patterns: {
            en: ["hi", "hello", "hey", "howdy", "good morning", "good evening", "good afternoon", "yo", "sup", "what's up", "whats up"],
            ar: ["اهلا", "أهلا", "مرحبا", "مرحباً", "سلام", "هاي", "هلو", "هاى", "ازيك", "إزيك", "كيفك", "كيف حالك", "صباح الخير", "مساء الخير", "هايلا"]
        }
    },
    {
        name: "who",
        patterns: {
            en: ["who are you", "who is mohamed", "who is he", "tell me about", "introduce", "about you", "about him", "background", "bio", "biography"],
            ar: ["مين انت", "مين محمد", "عرفني", "عن محمد", "عنك", "خلفية", "تعريف", "ايه اللي بيعمله", "إيه اللي بيعمله", "مين ده", "من هو"]
        }
    },
    {
        name: "skills",
        patterns: {
            en: ["skill", "expertise", "tools", "toolbox", "tech stack", "technologies", "what can he do", "python", "sql", "power bi", "tableau", "machine learning", "ml", "ai", "deep learning", "nlp", "scikit"],
            ar: ["مهارات", "مهاره", "خبرات", "خبره", "تكنولوجيا", "تقنيات", "بيعمل ايه", "بيعمل إيه", "بيشتغل بايه", "ادوات", "أدوات", "python", "sql", "باور بي اي", "بايثون", "تعلم الآلة", "ذكاء اصطناعي"]
        }
    },
    {
        name: "experience",
        patterns: {
            en: ["experience", "work", "job", "career", "company", "employer", "mcit", "ministry", "digilians", "where does he work", "where does he work", "worked", "position", "role"],
            ar: ["خبرة", "خبره", "شغل", "وظيفة", "وظيفه", "شركة", "شركه", "مكان الشغل", "اشتغل فين", "وزارة الاتصالات", "mcit", "ديجيليانز", "مسيرة", "سيرة مهنية"]
        }
    },
    {
        name: "projects",
        patterns: {
            en: ["project", "portfolio", "work examples", "built", "created", "developed", "churn", "dashboard", "sentiment", "market tracker", "what has he done"],
            ar: ["مشاريع", "مشروع", "اعمال", "أعمال", "شغلاتي", "اللي عمله", "اللي اتعمل", "بورتفوليو", "نماذج", "churn", "dashboard", "لوحة تحكم"]
        }
    },
    {
        name: "contact",
        patterns: {
            en: ["contact", "reach", "email", "phone", "call", "whatsapp", "message", "hire", "get in touch", "linkedin", "connect", "gmail"],
            ar: ["تواصل", "ايميل", "إيميل", "تليفون", "رقم", "واتساب", "تواصل معه", "ابعت", "لينكد ان", "اتواصل", "طريقة التواصل"]
        }
    },
    {
        name: "github",
        patterns: {
            en: ["github", "git", "repository", "repo", "code", "source code"],
            ar: ["جيت هب", "github", "كود", "مشاريع جيت هب"]
        }
    },
    {
        name: "linkedin",
        patterns: {
            en: ["linkedin", "linked in", "profile"],
            ar: ["لينكد ان", "linkedin", "بروفايل"]
        }
    },
    {
        name: "cv",
        patterns: {
            en: ["cv", "resume", "curriculum vitae", "download cv", "see cv", "view cv"],
            ar: ["سيرة ذاتية", "سي في", "cv", "تحميل السيرة", "السيرة الذاتية"]
        }
    },
    {
        name: "certs",
        patterns: {
            en: ["certif", "certification", "award", "credential", "google", "ibm", "coursera", "badge"],
            ar: ["شهادة", "شهادات", "اعتماد", "جوجل", "coursera", "ibm", "كورس", "كورسيرا"]
        }
    },
    {
        name: "services",
        patterns: {
            en: ["service", "offer", "freelance", "hire", "provide", "what does he offer"],
            ar: ["خدمات", "خدمه", "فريلانس", "ماذا يقدم", "بيقدم ايه", "بيقدم إيه"]
        }
    },
    {
        name: "stats",
        patterns: {
            en: ["stat", "number", "how many", "years", "achievement", "accomplishment", "how long"],
            ar: ["ارقام", "أرقام", "إحصائيات", "كام سنة", "إنجازات", "انجازات", "كام مشروع"]
        }
    },
    {
        name: "location",
        patterns: {
            en: ["location", "country", "city", "where is he", "where are you from", "based"],
            ar: ["فين", "أين", "دولة", "بلد", "من فين", "مكان"]
        }
    },
    {
        name: "philosophy",
        patterns: {
            en: ["philosophy", "mission", "vision", "believe", "approach", "mindset"],
            ar: ["فلسفة", "مهمة", "رؤية", "اسلوب", "أسلوب", "نظرة"]
        }
    },
    {
        name: "help",
        patterns: {
            en: ["help", "what can you do", "options", "topics", "what can i ask", "menu"],
            ar: ["مساعدة", "مساعده", "ايه اللي ممكن أسأل", "إيه اللي ممكن أسأل", "قائمة", "أسألك ايه", "أسألك إيه"]
        }
    }
];

// ─────────────────────────────────────────────
//  RESPONSES
// ─────────────────────────────────────────────
const RESPONSES = {
    greeting: {
        en: [
            `Hey there! 👋 I'm Mohamed's AI assistant. I know everything about him — his skills, projects, experience, and more.\n\nWhat would you like to know?`,
            `Hello! Great to meet you! 😊 I'm here to tell you all about **Mohamed Dogheim**, a talented Data Analyst & AI Specialist.\n\nFeel free to ask anything!`
        ],
        ar: [
            `أهلاً وسهلاً! 👋 أنا المساعد الذكي لمحمد دوغيم. عارف عنه كل حاجة — مهاراته، مشاريعه، خبرته، وأكتر.\n\nاسألني في أي حاجة!`,
            `مرحباً بيك! 😊 أنا هنا أحكيلك عن **محمد دوغيم**، محلل البيانات ومتخصص الذكاء الاصطناعي.\n\nاتفضل اسأل!`
        ]
    },
    who: {
        en: `**Mohamed Dogheim** 🧑‍💻 is a passionate **Data Analyst & AI Specialist** based in Egypt 🇪🇬.\n\nWith **3+ years of experience**, he transforms complex datasets into clear, actionable business insights. He combines deep technical expertise in Python, SQL & Power BI with strong business intuition.\n\n📌 Currently working at the **Ministry of Communications & IT (MCIT) — Egypt**, where he designs AI models and builds interactive data dashboards.`,
        ar: `**محمد دوغيم** 🧑‍💻 محلل بيانات ومتخصص ذكاء اصطناعي من مصر 🇪🇬.\n\nعنده **أكتر من 3 سنين خبرة** في تحويل البيانات المعقدة لأفكار واضحة وقابلة للتطبيق في الأعمال. بيجمع الخبرة التقنية العميقة في Python وSQL وPower BI مع فهم قوي للأعمال.\n\n📌 حالياً شغال في **وزارة الاتصالات وتكنولوجيا المعلومات (MCIT) — مصر**، بيصمم فيها نماذج الذكاء الاصطناعي ولوحات البيانات التفاعلية.`
    },
    skills: {
        en: `**Mohamed's Technical Toolkit** 🛠️\n\n**Programming & Visualization:**\n• 🐍 Python — 95%\n• 🗄️ SQL — 90%\n• 📊 Power BI — 92%\n• 📈 Tableau — 85%\n\n**Machine Learning & AI:**\n• 🤖 ML Algorithms — 92%\n• ⚗️ Scikit-learn — 90%\n• 🧠 AI Insights — 88%\n• 🌊 Deep Learning — 75%\n\n**Other Skills:**\n• Data Cleaning & ETL\n• Statistical Analysis\n• NLP (Natural Language Processing)\n• Data Storytelling`,
        ar: `**المهارات التقنية لمحمد** 🛠️\n\n**البرمجة والتصور:**\n• 🐍 Python — 95%\n• 🗄️ SQL — 90%\n• 📊 Power BI — 92%\n• 📈 Tableau — 85%\n\n**تعلم الآلة والذكاء الاصطناعي:**\n• 🤖 خوارزميات ML — 92%\n• ⚗️ Scikit-learn — 90%\n• 🧠 رؤى الذكاء الاصطناعي — 88%\n• 🌊 التعلم العميق — 75%\n\n**مهارات أخرى:**\n• تنظيف البيانات وETL\n• التحليل الإحصائي\n• معالجة اللغة الطبيعية (NLP)\n• سرد قصص البيانات`
    },
    experience: {
        en: `**Work Experience** 💼\n\n🏢 **Digilians — Ministry of Communications & IT (MCIT), Egypt**\n📌 Role: **Data Analyst**\n📅 Period: **December 2025 – Present**\n\n**Key Responsibilities:**\n✅ Designing & developing AI models to analyze data\n✅ Analyzing large datasets with advanced techniques\n✅ Building interactive reports with Python, SQL & Power BI\n✅ Applying ML algorithms to improve prediction accuracy\n✅ Supporting business growth through data-driven decisions`,
        ar: `**الخبرة العملية** 💼\n\n🏢 **ديجيليانز — وزارة الاتصالات وتكنولوجيا المعلومات، مصر**\n📌 الوظيفة: **محلل بيانات**\n📅 الفترة: **ديسمبر 2025 – حتى الآن**\n\n**المهام الأساسية:**\n✅ تصميم وتطوير نماذج الذكاء الاصطناعي لتحليل البيانات\n✅ تحليل مجموعات البيانات الضخمة بتقنيات متقدمة\n✅ بناء تقارير تفاعلية باستخدام Python وSQL وPower BI\n✅ تطبيق خوارزميات التعلم الآلي لتحسين دقة التنبؤ\n✅ دعم نمو الأعمال من خلال قرارات مبنية على البيانات`
    },
    projects: {
        en: `**Featured Projects** 🚀\n\n**1️⃣ Customer Churn Prediction**\n🛠️ Python, Scikit-learn\n🎯 94.2% Accuracy | 18% churn reduction\n📝 End-to-end ML pipeline for telecom retention\n\n**2️⃣ Sales Performance Dashboard**\n🛠️ Power BI, DAX, SQL\n🎯 Reporting time reduced by 90%\n📝 Interactive C-suite dashboard for regional sales\n\n**3️⃣ NLP Sentiment Analysis**\n🛠️ Python, TensorFlow, BERT\n🎯 12% increase in satisfaction scores\n📝 Analysis of 500K+ customer reviews\n\n**4️⃣ Real-Time Market Tracker**\n🛠️ Python, Kafka, SQL\n🎯 Sub-second alert latency\n📝 Streaming pipeline for stock anomaly detection\n\n🔗 See all projects on GitHub: github.com/Mohamed-do37`,
        ar: `**مشاريع مميزة** 🚀\n\n**1️⃣ نموذج التنبؤ بمغادرة العملاء**\n🛠️ Python، Scikit-learn\n🎯 دقة 94.2٪ | تقليل المغادرة 18٪\n📝 نموذج تعلم آلة متكامل لشركات الاتصالات\n\n**2️⃣ لوحة تحكم أداء المبيعات**\n🛠️ Power BI، DAX، SQL\n🎯 تقليل وقت التقارير بنسبة 90٪\n📝 لوحة تفاعلية للإدارة العليا\n\n**3️⃣ تحليل المشاعر باستخدام NLP**\n🛠️ Python، TensorFlow، BERT\n🎯 زيادة رضا العملاء 12٪\n📝 تحليل أكثر من 500 ألف تقييم\n\n**4️⃣ متتبع السوق في الوقت الفعلي**\n🛠️ Python، Kafka، SQL\n🎯 تنبيهات فورية بأقل من ثانية\n📝 خط بيانات للكشف عن الشذوذات في الأسهم\n\n🔗 شوف كل المشاريع على GitHub: github.com/Mohamed-do37`
    },
    contact: {
        en: `**Get in Touch with Mohamed** 📬\n\n📧 **Email:** mohameddogheim9500@gmail.com\n📞 **Phone:** +20 1023103801\n💬 **WhatsApp:** wa.me/201023103801\n💼 **LinkedIn:** linkedin.com/in/mohamed-dogheim-\n💻 **GitHub:** github.com/Mohamed-do37\n📍 **Location:** Egypt 🇪🇬\n\n💡 He's available for **freelance & full-time roles!**`,
        ar: `**تواصل مع محمد** 📬\n\n📧 **الإيميل:** mohameddogheim9500@gmail.com\n📞 **التليفون:** +20 1023103801\n💬 **واتساب:** wa.me/201023103801\n💼 **LinkedIn:** linkedin.com/in/mohamed-dogheim-\n💻 **GitHub:** github.com/Mohamed-do37\n📍 **الموقع:** مصر 🇪🇬\n\n💡 متاح لـ **العمل الحر والوظائف الكاملة!**`
    },
    github: {
        en: `**Mohamed's GitHub** 💻\n\n🔗 github.com/Mohamed-do37\n\nYou'll find his projects including ML models, data pipelines, NLP systems, and interactive dashboards. A great place to see his code quality and technical depth!`,
        ar: `**جيت هب محمد** 💻\n\n🔗 github.com/Mohamed-do37\n\nهتلاقي فيه مشاريعه زي نماذج التعلم الآلة، خطوط البيانات، أنظمة NLP، ولوحات التحكم التفاعلية. مكان ممتاز تشوف فيه جودة كوده وعمقه التقني!`
    },
    linkedin: {
        en: `**Mohamed's LinkedIn** 💼\n\n🔗 linkedin.com/in/mohamed-dogheim-\n\nConnect with him on LinkedIn to see his professional updates, recommendations, and career milestones!`,
        ar: `**لينكد إن محمد** 💼\n\n🔗 linkedin.com/in/mohamed-dogheim-\n\nتواصل معاه على لينكد إن عشان تشوف تحديثاته المهنية، التوصيات، والإنجازات الوظيفية!`
    },
    cv: {
        en: `**Mohamed's CV / Resume** 📄\n\nYou can view his CV by clicking the **"View CV"** button at the top of the page in the Hero section.\n\nHis CV covers:\n• Work experience at MCIT\n• All technical skills\n• Featured projects\n• Certifications from Google, IBM & Coursera`,
        ar: `**السيرة الذاتية لمحمد** 📄\n\nتقدر تشوف السيرة الذاتية بالضغط على زر **"View CV"** في أعلى الصفحة في قسم الهيرو.\n\nالسيرة الذاتية بتغطي:\n• الخبرة العملية في MCIT\n• كل المهارات التقنية\n• المشاريع المميزة\n• الشهادات من Google وIBM وCoursera`
    },
    certs: {
        en: `**Certifications & Awards** 🏆\n\n🥇 Google Data Analytics Capstone — Google / Coursera\n🥇 IBM Data Certification — IBM\n🎓 Multiple Coursera Professional Certificates\n🎓 4x Professional Data Analyst Certificates\n\nAll certificates are viewable in the **Certifications** section of this portfolio!`,
        ar: `**الشهادات والجوائز** 🏆\n\n🥇 Google Data Analytics Capstone — Google / Coursera\n🥇 شهادة IBM للبيانات — IBM\n🎓 شهادات Coursera مهنية متعددة\n🎓 4 شهادات محلل بيانات احترافية\n\nكل الشهادات متاحة في قسم **الشهادات** في هذا الموقع!`
    },
    services: {
        en: `**Services Mohamed Offers** 💡\n\n1️⃣ **Advanced Data Analysis** — Statistical modeling & diagnostic analytics\n2️⃣ **Machine Learning Models** — Custom ML pipelines & predictive systems\n3️⃣ **BI Dashboards** — Power BI & Tableau interactive dashboards\n4️⃣ **AI Consultation** — Strategic AI roadmap for your business\n5️⃣ **Deep Learning** — Neural networks for complex problems\n\nInterested? Reach out via the **Contact** section!`,
        ar: `**الخدمات اللي بيقدمها محمد** 💡\n\n1️⃣ **تحليل البيانات المتقدم** — النمذجة الإحصائية والتحليل التشخيصي\n2️⃣ **نماذج التعلم الآلي** — خطوط ML مخصصة وأنظمة تنبؤ\n3️⃣ **لوحات BI** — لوحات Power BI وTableau التفاعلية\n4️⃣ **استشارات الذكاء الاصطناعي** — خارطة طريق AI لأعمالك\n5️⃣ **التعلم العميق** — شبكات عصبية لحل المشكلات المعقدة\n\nمهتم؟ تواصل عبر قسم **Contact**!`
    },
    stats: {
        en: `**Mohamed by the Numbers** 📊\n\n💼 **3+ Years** of experience\n📁 **20+ Projects** completed\n🤖 **10+ ML Models** deployed\n⭐ **95% Client Satisfaction** rate\n🏆 **11 Certifications** earned\n📍 Based in **Egypt**, working globally 🌍`,
        ar: `**محمد بالأرقام** 📊\n\n💼 **أكتر من 3 سنين** خبرة\n📁 **أكتر من 20 مشروع** مكتمل\n🤖 **أكتر من 10 نماذج ML** منشورة\n⭐ **95% رضا** العملاء\n🏆 **11 شهادة** احترافية\n📍 مقيم في **مصر**، يعمل عالمياً 🌍`
    },
    location: {
        en: `**Location** 📍\n\nMohamed is based in **Egypt 🇪🇬**. He works both locally and with international clients remotely. Available for remote collaboration worldwide! 🌍`,
        ar: `**الموقع** 📍\n\nمحمد مقيم في **مصر 🇪🇬**. بيشتغل محلياً ومع عملاء دوليين عن بُعد. متاح للتعاون عن بُعد حول العالم! 🌍`
    },
    philosophy: {
        en: `**Mohamed's Philosophy** 💭\n\n_"I believe that behind every dataset lies a story waiting to be told. My mission is to decode these stories to uncover hidden opportunities, minimize risks, and drive sustainable growth through evidence-based strategies."_\n\nFor Mohamed, **data is more than numbers — it's a strategic asset.**`,
        ar: `**فلسفة محمد** 💭\n\n_"أؤمن بأن وراء كل مجموعة بيانات قصة تنتظر أن تُروى. مهمتي هي فك رموز هذه القصص للكشف عن الفرص الخفية، وتقليل المخاطر، وتحقيق النمو المستدام من خلال استراتيجيات قائمة على الأدلة."_\n\nبالنسبة لمحمد، **البيانات أكتر من مجرد أرقام — هي أصل استراتيجي.**`
    },
    help: {
        en: `**Here's what you can ask me about:** 🗂️\n\n👤 About Mohamed\n💼 Work Experience\n🛠️ Skills & Tools\n🚀 Projects\n🏆 Certifications\n💡 Services\n📬 Contact Info\n🔗 GitHub / LinkedIn\n📄 CV / Resume\n📊 Statistics & Achievements\n\nJust type your question in English or Arabic! 🇬🇧🇦🇪`,
        ar: `**ده اللي تقدر تسألني عنه:** 🗂️\n\n👤 مين محمد\n💼 الخبرة العملية\n🛠️ المهارات والأدوات\n🚀 المشاريع\n🏆 الشهادات\n💡 الخدمات\n📬 معلومات التواصل\n🔗 GitHub / LinkedIn\n📄 السيرة الذاتية\n📊 الإحصائيات والإنجازات\n\nاكتب سؤالك بالعربي أو الإنجليزي! 🇬🇧🇦🇪`
    },
    default: {
        en: [
            `**Mohamed Dogheim** is a Data Analyst & AI Specialist based in Egypt. He's passionate about unlocking the power of data!\n\nI can tell you more about his **skills**, **projects**, **experience**, or how to **contact** him. What interests you?`
        ],
        ar: [
            `**محمد دوغيم** محلل بيانات ومتخصص ذكاء اصطناعي من مصر. مهتم جداً باستخراج القيمة من البيانات!\n\nأقدر أكلمك عن **مهاراته**، **مشاريعه**، **خبرته**، وممكن أديلك طرق **التواصل** معاه. مهتم تعرف إيه؟`
        ]
    }
};

// ─────────────────────────────────────────────
//  QUICK REPLY SUGGESTIONS
// ─────────────────────────────────────────────
const QUICK_REPLIES = {
    initial: {
        en: ["👤 About Mohamed", "🛠️ Skills", "🚀 Projects", "📬 Contact"],
        ar: ["👤 عن محمد", "🛠️ المهارات", "🚀 المشاريع", "📬 تواصل"]
    },
    afterGreeting: {
        en: ["💼 Experience", "🏆 Certifications", "📄 View CV", "🔗 GitHub"],
        ar: ["💼 الخبرة", "🏆 الشهادات", "📄 السيرة الذاتية", "🔗 جيت هب"]
    },
    afterProjects: {
        en: ["🛠️ Tools used?", "📬 Contact Mohamed", "🔗 GitHub link"],
        ar: ["🛠️ الأدوات المستخدمة؟", "📬 توظيف محمد", "🔗 رابط جيت هب"]
    },
    afterContact: {
        en: ["📄 View CV", "💼 LinkedIn", "🚀 See Projects"],
        ar: ["📄 السيرة الذاتية", "💼 لينكد إن", "🚀 شوف المشاريع"]
    }
};

// ─────────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────────
function isArabic(text) {
    return /[\u0600-\u06FF]/.test(text);
}

function detectLang(text) {
    return isArabic(text) ? 'ar' : 'en';
}

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function matchIntent(text) {
    const lower = text.toLowerCase().trim();
    for (const intent of INTENTS) {
        const enPatterns = intent.patterns.en || [];
        const arPatterns = intent.patterns.ar || [];
        const allPatterns = [...enPatterns, ...arPatterns];
        if (allPatterns.some(p => lower.includes(p))) {
            return intent.name;
        }
    }
    return null;
}

function getResponse(intentName, lang) {
    const resp = RESPONSES[intentName];
    if (!resp) return null;
    const content = resp[lang] || resp['en'];
    return Array.isArray(content) ? pickRandom(content) : content;
}

function getQuickReplies(intentName, lang) {
    if (intentName === 'greeting') return QUICK_REPLIES.afterGreeting[lang] || QUICK_REPLIES.afterGreeting['en'];
    if (intentName === 'projects') return QUICK_REPLIES.afterProjects[lang] || QUICK_REPLIES.afterProjects['en'];
    if (intentName === 'contact') return QUICK_REPLIES.afterContact[lang] || QUICK_REPLIES.afterContact['en'];
    return null;
}

// ─────────────────────────────────────────────
//  MAP QUICK REPLY BUTTON TEXT → USER QUERY
// ─────────────────────────────────────────────
const QUICK_MAP = {
    "👤 About Mohamed": "who is Mohamed",
    "👤 عن محمد": "مين محمد",
    "🛠️ Skills": "skills",
    "🛠️ المهارات": "مهارات",
    "🚀 Projects": "projects",
    "🚀 المشاريع": "مشاريع",
    "📬 Contact": "contact",
    "📬 تواصل": "تواصل",
    "💼 Experience": "experience",
    "💼 الخبرة": "خبرة",
    "🏆 Certifications": "certifications",
    "🏆 الشهادات": "شهادات",
    "📄 View CV": "cv",
    "📄 السيرة الذاتية": "سيرة ذاتية",
    "🔗 GitHub": "github",
    "🔗 جيت هب": "جيت هب",
    "🛠️ Tools used?": "skills and tools",
    "🛠️ الأدوات المستخدمة؟": "مهارات وادوات",
    "📬 Contact Mohamed": "contact",
    "📬 توظيف محمد": "تواصل توظيف",
    "🔗 GitHub link": "github",
    "🔗 رابط جيت هب": "جيت هب",
    "💼 LinkedIn": "linkedin",
    "💼 لينكد إن": "لينكد ان",
    "🚀 See Projects": "projects",
    "🚀 شوف المشاريع": "مشاريع"
};

// ─────────────────────────────────────────────
//  DOM INIT
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const chatContainer  = document.getElementById('chatbot-container');
    const toggleBtn      = document.getElementById('chatbot-toggle');
    const input          = document.getElementById('chat-input');
    const submitBtn      = document.getElementById('chat-submit');
    const messagesDiv    = document.getElementById('chat-messages');

    let isOpen = false;
    let firstOpen = true;

    /* ---- Toggle ---- */
    toggleBtn.addEventListener('click', () => {
        isOpen = !isOpen;
        chatContainer.classList.toggle('chatbot-visible', isOpen);
        chatContainer.classList.toggle('chatbot-hidden', !isOpen);

        if (isOpen && firstOpen) {
            firstOpen = false;
            // Clear default static message, show dynamic welcome
            messagesDiv.innerHTML = '';
            setTimeout(() => showWelcome(), 300);
        }
    });

    /* ---- Welcome ---- */
    function showWelcome() {
        addBotMessage(
            `👋 Hello! I'm Mohamed's AI Assistant.\n\nI can speak both **English** and **Arabic**, so feel free to chat with me in whichever language you prefer! 🇬🇧🇦🇪\n\nYou can ask me anything about Mohamed Dogheim — his skills, projects, experience, and more. What would you like to know?`,
            QUICK_REPLIES.initial.en,
            false
        );
    }

    /* ---- Add Bot Message ---- */
    function addBotMessage(text, quickReplies = null, withDelay = true) {
        const wrapper = document.createElement('div');
        wrapper.className = 'message-wrapper bot-wrapper';

        const avatar = document.createElement('div');
        avatar.className = 'bot-msg-avatar';
        avatar.innerHTML = '<img src="assets/images/profile.jpg" alt="Bot" class="bot-msg-img" />';

        const bubble = document.createElement('div');
        bubble.className = `message bot ${isArabic(text) ? 'rtl' : ''}`;
        bubble.innerHTML = formatText(text);

        wrapper.appendChild(avatar);
        wrapper.appendChild(bubble);
        messagesDiv.appendChild(wrapper);

        if (quickReplies && quickReplies.length > 0) {
            const qrDiv = document.createElement('div');
            qrDiv.className = 'quick-replies';
            quickReplies.forEach(label => {
                const btn = document.createElement('button');
                btn.className = 'qr-btn';
                btn.textContent = label;
                btn.addEventListener('click', () => {
                    qrDiv.remove();
                    handleUserText(QUICK_MAP[label] || label);
                });
                qrDiv.appendChild(btn);
            });
            messagesDiv.appendChild(qrDiv);
        }

        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    /* ---- Add User Message ---- */
    function addUserMessage(text) {
        const bubble = document.createElement('div');
        bubble.className = `message user ${isArabic(text) ? 'rtl' : ''}`;
        bubble.textContent = text;
        messagesDiv.appendChild(bubble);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    /* ---- Typing indicator ---- */
    function showTyping() {
        const typing = document.createElement('div');
        typing.className = 'message bot typing-indicator';
        typing.id = 'typing-msg';
        typing.innerHTML = '<span></span><span></span><span></span>';
        messagesDiv.appendChild(typing);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
        return typing;
    }

    /* ---- Format text (bold, newlines) ---- */
    function formatText(text) {
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/_(.*?)_/g, '<em>$1</em>')
            .replace(/\n/g, '<br>');
    }

    /* ---- Process user input ---- */
    function handleUserText(rawText) {
        const text = rawText.trim();
        if (!text) return;

        addUserMessage(text);
        input.value = '';

        const typing = showTyping();
        const lang = detectLang(text);
        const intentName = matchIntent(text);

        const delay = 600 + Math.random() * 400;

        setTimeout(() => {
            typing.remove();

            let responseText;
            let quickReplies = null;

            if (intentName) {
                responseText = getResponse(intentName, lang);
                quickReplies = getQuickReplies(intentName, lang);
            } else {
                // Fallback: show default + help suggestions
                responseText = getResponse('default', lang);
                quickReplies = lang === 'ar'
                    ? ["👤 عن محمد", "🛠️ المهارات", "🚀 المشاريع", "📬 تواصل"]
                    : ["👤 About Mohamed", "🛠️ Skills", "🚀 Projects", "📬 Contact"];
            }

            addBotMessage(responseText, quickReplies);
        }, delay);
    }

    /* ---- Events ---- */
    submitBtn.addEventListener('click', () => handleUserText(input.value));
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleUserText(input.value);
    });
});
