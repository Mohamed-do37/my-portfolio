/* 
    DATA STORAGE: Content for the Portfolio
    Mohamed Dogheim 
*/

const DATA = {
    experience: [
        {
            company: "Digilians_Ministry of Communications and Information Technology (MCIT) – Egypt",
            role: "Data Analyst",
            period: "December 2025 – Present",
            desc: "Expertise in AI and Data Analytics: Designing and developing AI models to analyze data and extract insights. Analyzing large datasets using advanced techniques. Utilizing tools like Python, SQL, and Power BI for interactive reports. Applying ML algorithms to improve prediction accuracy and support business growth.",
            color: "#00d4ff"
        }
    ],

    skills: [
        {
            category: "Programming & Visualization",
            items: [
                { name: "Python", level: 95, color: "#00d4ff" },
                { name: "SQL", level: 90, color: "#00d4ff" },
                { name: "Power BI", level: 92, color: "#00d4ff" },
                { name: "Tableau", level: 85, color: "#00d4ff" }
            ]
        },
        {
            category: "Machine Learning & AI",
            items: [
                { name: "ML Algorithms", level: 92, color: "#7c3aed" },
                { name: "AI Insights", level: 88, color: "#7c3aed" },
                { name: "Scikit-learn", level: 90, color: "#7c3aed" },
                { name: "Deep Learning", level: 75, color: "#7c3aed" }
            ]
        }
    ],

    projects: [
        {
            id: 1,
            title: "logistics-delay-analysis",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
            lead: "Eliminate Logistics Friction: I cut shipment delays by 40% through real-time predictive GPS intelligence.",
            details: {
                objective: "Investigate shipment delays and identify operational bottlenecks.",
                tools: "Python, Folium, Jupyter, GPS Telemetry.",
                tech_stack: "Data Cleaning, Geospatial Analysis, Route Optimization.",
                outcome: "Complete visibility on delay root causes across the global network."
            },
            github: "https://github.com/Mohamed-do37/logistics-delay-analysis",
            color: "#00d4ff"
        },
        {
            id: 2,
            title: "Body-Performance-Analytics-ML",
            image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=1200&q=80",
            lead: "Precision Health Analytics: I delivered 98% accuracy in body performance forecasting using AI biometrics.",
            details: {
                objective: "Physical performance classification and regression.",
                tools: "XGBoost, Scikit-Learn, SHAP, Matplotlib.",
                tech_stack: "Ensemble Modeling, Feature Engineering, Outlier Removal.",
                outcome: "Highly accurate classification of overlapping fitness boundaries."
            },
            github: "https://github.com/Mohamed-do37/Body-Performance-Analytics-ML",
            color: "#fbbf24"
        },
        {
            id: 3,
            title: "Logistics-Supply-Chain-Analytics",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
            lead: "Zero-Failure Supply Chains: I engineered risk-threshold systems to stop supply disruptions before they start.",
            details: {
                objective: "Diagnosing and predicting supply chain delays (68% rate reduction).",
                tools: "SQL Server (T-SQL), Random Forest, Pandas.",
                tech_stack: "Database Normalization, Risk Thresholding, ETL Pipelines.",
                outcome: "Proactive intervention system for high-risk shipments."
            },
            github: "https://github.com/Mohamed-do37/Logistics-Supply-Chain-Analytics",
            color: "#00d4ff"
        },
        {
            id: 4,
            title: "Sales-Data-Analysis-Project",
            image: "assets/images/proj-sales-excel.png",
            lead: "Data-Driven Sales Intelligence: Transformed raw sales data into clear KPIs and actionable business insights using Excel.",
            details: {
                objective: "Analyze sales data and generate meaningful insights for better decision-making.",
                tools: "Microsoft Excel, Pivot Tables, Data Visualization.",
                tech_stack: "Dynamic Slicers, KPI Charts, Data Cleaning Techniques.",
                outcome: "Interactive dashboard highlighting performance trends and key business patterns."
            },
            github: "https://github.com/Mohamed-do37/Sales-Data-Analysis-Project",
            color: "#10b981"
        },
        {
            id: 5,
            title: "Interactive-Business-Dashboard-Excel",
            image: "assets/images/proj-interactive-excel.png",
            lead: "Executive-Grade Excel Reporting: Built a fully interactive business dashboard with dynamic filtering and professional KPI tracking.",
            details: {
                objective: "Transform raw business data into actionable insights through an interactive Excel dashboard.",
                tools: "Microsoft Excel, Pivot Tables, Slicers.",
                tech_stack: "Data Visualization, Dynamic Filtering, KPI Design.",
                outcome: "Professional dashboard enabling quick insights and data-driven decisions."
            },
            github: "https://github.com/Mohamed-do37/Interactive-Business-Dashboard-Excel-",
            color: "#f59e0b"
        },
        {
            id: 6,
            title: "Sales-Performance-Dashboard-Power-BI",
            image: "assets/images/proj-sales-powerbi.png",
            lead: "Real-Time Sales Intelligence: Engineered an interactive Power BI dashboard that identifies top performers and reveals hidden revenue trends.",
            details: {
                objective: "Analyze business performance and extract actionable insights through interactive Power BI visualizations.",
                tools: "Power BI Desktop, DAX, Data Transformation.",
                tech_stack: "Interactive Slicers, KPI Tracking, Trend Analysis, Data Storytelling.",
                outcome: "Identified top-performing categories and provided clear business insights for better executive decisions."
            },
            github: "https://github.com/Mohamed-do37/Sales-Performance-Dashboard-Power-BI",
            color: "#7c3aed"
        },
        {
            id: 7,
            title: "Advanced-Business-Analysis-Dashboard-Power-BI",
            image: "assets/images/proj-advanced-powerbi.png",
            lead: "Strategic Business Intelligence: Delivered an advanced Power BI dashboard that uncovers performance patterns and drives data-driven strategies.",
            details: {
                objective: "Explore business patterns, track performance, and support data-driven decisions through advanced visualizations.",
                tools: "Power BI Desktop, DAX, Data Cleaning & Transformation.",
                tech_stack: "Advanced Interactive Dashboard, Dynamic Filtering, KPI Monitoring.",
                outcome: "Highlighted key strengths and weaknesses with actionable insights for organizational decision-making."
            },
            github: "https://github.com/Mohamed-do37/Advanced-Business-Analysis-Dashboard-Power-BI",
            color: "#ec4899"
        }
    ],

    services: [
        {
            title: "Advanced Data Analysis",
            image: "assets/images/service-analysis.png",
            desc: "Transform raw data into clear strategies.",
            details: "Our Advanced Data Analysis service dives deep into your business metrics. By leveraging statistical modeling and diagnostic analytics, we transform raw, unstructured data into a coherent narrative. This comprehensive approach helps you identify hidden patterns, minimize operational risks, and discover new avenues for revenue growth with scientifically backed evidence."
        },
        {
            title: "Machine Learning Models",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
            desc: "Predictive modeling and forecasting.",
            details: "We build custom Machine Learning models tailored to your specific industry needs. From customer churn prediction and inventory forecasting to natural language processing and recommendation systems. Our end-to-end ML pipelines are designed for scalability, ensuring high accuracy and seamless integration into your existing production environments."
        },
        {
            title: "BI Dashboards",
            image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1200&q=80",
            desc: "Executive-level data visualization.",
            details: "Stop relying on static spreadsheets. We design interactive, real-time Business Intelligence dashboards using tools like Power BI and Tableau. These visually stunning interfaces consolidate data from multiple sources, providing C-level executives with immediate, actionable insights to track KPIs and monitor organizational health at a glance."
        },
        {
            title: "AI Consultation",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
            desc: "Integrate AI into your workflows.",
            details: "Navigating the AI landscape can be complex. Our AI Consultation service provides a strategic roadmap for adopting artificial intelligence within your organization. We evaluate your current technical infrastructure, identify high-ROI automation use cases, and guide your team through the ethical and practical implementation of AI-driven tools."
        },
        {
            title: "Deep Learning",
            image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
            desc: "Advanced neural networks and robust AI architecture.",
            details: "Unlock the next level of artificial intelligence with tailored Deep Learning models. Leveraging multi-layered neural networks, we tackle highly complex unstructured data—from computer vision and speech recognition to advanced natural language processing. Solid analytics require a cutting-edge foundation to empower advanced decision-making."
        }
    ],

    testimonials: [
        {
            name: "John Smith",
            position: "CEO, TechFlow",
            text: "Mohamed's ability to see through data and find the 'why' behind the numbers is unparalleled."
        },
        {
            name: "Sarah Chen",
            position: "Operations Dir, GlobalRetail",
            text: "The sales dashboard Mohamed built for us is now our primary decision-making tool. Fast and accurate."
        },
        {
            name: "Ahmed Hassan",
            position: "Marketing Head, FutureMinds",
            text: "The ML model increased our retention by 18%. Outstanding technical skills combined with business acumen."
        },
        {
            name: "Emma Davis",
            position: "Product Manager, InnovateX",
            text: "He doesn't just deliver code; he delivers solutions that directly impact our bottom line. Highly recommended!"
        }
    ],

    certs: [
        { title: "Google Data Analytics Capstone", issuer: "Google / Coursera", date: "Recent", link: "assets/certificate/Google Data Analytics Capstone Complete a Case.pdf", file: "Google Data Analytics Capstone Complete a Case.pdf" },
        { title: "IBM Data Certification", issuer: "IBM", date: "Recent", link: "assets/certificate/IBM.pdf", file: "IBM.pdf" },
        { title: "Course Certification 1", issuer: "Coursera", date: "Recent", link: "assets/certificate/Coursera 07CCI4I5RZRQ (1).pdf", file: "Coursera 07CCI4I5RZRQ (1).pdf" },
        { title: "Course Certification 2", issuer: "Coursera", date: "Recent", link: "assets/certificate/Coursera BOYTGXVQIM9T.pdf", file: "Coursera BOYTGXVQIM9T.pdf" },
        { title: "Course Certification 3", issuer: "Coursera", date: "Recent", link: "assets/certificate/Coursera UPKPMK747Q4G.pdf", file: "Coursera UPKPMK747Q4G.pdf" },
        { title: "Course Certification 4", issuer: "Coursera", date: "Recent", link: "assets/certificate/Coursera XIIV8CWFDHO6.pdf", file: "Coursera XIIV8CWFDHO6.pdf" },
        { title: "Data Analyst Certificate 1", issuer: "Professional Data Certificate", date: "Recent", link: "assets/certificate/1.pdf", file: "1.pdf" },
        { title: "Data Analyst Certificate 2", issuer: "Professional Data Certificate", date: "Recent", link: "assets/certificate/2.pdf", file: "2.pdf" },
        { title: "Data Analyst Certificate 3", issuer: "Professional Data Certificate", date: "Recent", link: "assets/certificate/3.pdf", file: "3.pdf" },
        { title: "Data Analyst Certificate 4", issuer: "Professional Data Certificate", date: "Recent", link: "assets/certificate/4.pdf", file: "4.pdf" },
        { title: "Data Analyst Certificate 9", issuer: "Professional Data Certificate", date: "Recent", link: "assets/certificate/9.pdf", file: "9.pdf" }
    ],

    contact: {
        email: "mohameddogheim9500@gmail.com",
        phone: "+20 155 425 2101",
        whatsapp: "https://wa.me/201554252101",
        linkedin: "https://linkedin.com/in/mohameddogheim",
        github: "https://github.com/Mohamed-do37",
        location: "Egypt",
        tagline: "Empowering business decisions through AI and Data Intelligence."
    }
};
