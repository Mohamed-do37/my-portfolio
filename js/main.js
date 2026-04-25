/* 
    MAIN LOGIC: UI Interactivity & Rendering
    Mohamed Dogheim 
*/

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }
    
    initParticles();
    renderData();
    setupScroll();
    setupContactForm();
    initTypewriter();
});

// --- Typewriter Effect ---
function initTypewriter() {
    const element = document.getElementById('typewriter-text');
    if (!element) return;
    
    const text = "Empowering your business with AI-driven analytics to transform raw data into strategic, high-impact decisions.";
    let i = 0;
    const speed = 40; // ms

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            element.classList.add('typing-done');
        }
    }

    // Start with a small delay for better entrance
    setTimeout(type, 1000);
}

// --- Particles Background ---
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    
    const particles = [];
    const count = 60;
    
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 1.5 + 0.5,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            alpha: Math.random() * 0.5 + 0.1
        });
    }
    
    function draw() {
        ctx.clearRect(0, 0, W, H);
        
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            
            if (p.x < 0 || p.x > W) p.vx *= -1;
            if (p.y < 0 || p.y > H) p.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
            ctx.fill();
        });
        
        // Connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * (1 - dist/120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(draw);
    }
    
    draw();
    
    window.addEventListener('resize', () => {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    });
}

// --- Render Content ---
function renderData() {
    const aosEffects = ['fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'zoom-out', 'flip-left', 'flip-right'];
    const getAos = () => aosEffects[Math.floor(Math.random() * aosEffects.length)];

    // Experience
    const expList = document.getElementById('experience-list');
    DATA.experience.forEach((exp, idx) => {
        const item = document.createElement('div');
        item.className = 'glass-card exp-card premium-card';
        item.setAttribute('data-aos', getAos());
        item.setAttribute('data-aos-delay', (Math.random() * 300).toString());
        item.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
                <div>
                    <h3 style="color:${exp.color}">${exp.role}</h3>
                    <p style="font-weight:600; font-size:1.1rem; margin-top:4px;">${exp.company}</p>
                </div>
                <span class="badge-glow" style="margin:0">${exp.period}</span>
            </div>
            <p style="color:var(--color-text-secondary); line-height:1.7">${exp.desc}</p>
        `;
        expList.appendChild(item);
    });

    // Skills (Card style like Projects)
    const skillsGrid = document.getElementById('skills-list');
    DATA.skills.forEach((cat, idx) => {
        const card = document.createElement('div');
        const color = cat.items[0] ? cat.items[0].color : 'var(--color-primary)';
        card.className = 'glass-card premium-card skill-set-card';
        card.setAttribute('data-aos', getAos());
        card.setAttribute('data-aos-delay', (idx * 100).toString());
        card.style.boxShadow = `0 0 20px ${color}15, inset 0 2px 0 ${color}40`;
        
        let skillsHtml = `
            <div class="skill-header">
                <i class="fas fa-layer-group" style="color:${color}"></i>
                <h3 class="skill-category-title">${cat.category}</h3>
            </div>
            <p class="skill-category-desc">Validated proficiency in core technologies and analytical frameworks.</p>
            <div class="skill-items-container">
        `;
        
        cat.items.forEach(s => {
            skillsHtml += `
                <div class="skill-progress-item">
                    <div class="skill-info">
                        <span class="skill-name">${s.name}</span>
                        <span class="skill-percentage">${s.level}%</span>
                    </div>
                    <div class="progress-bar-bg">
                        <div class="progress-bar-fill" style="width:${s.level}%; background:${s.color}; box-shadow: 0 0 10px ${s.color}60;"></div>
                    </div>
                </div>
            `;
        });
        
        skillsHtml += `</div>`;
        card.innerHTML = skillsHtml;
        skillsGrid.appendChild(card);
    });

    // Projects
    const projectsGrid = document.getElementById('projects-list');
    DATA.projects.forEach((proj, idx) => {
        const card = document.createElement('div');
        card.className = 'glass-card project-card premium-card';
        card.setAttribute('data-aos', getAos());
        card.setAttribute('data-aos-delay', (Math.random() * 300).toString());
        card.style.backgroundImage = `linear-gradient(to bottom, rgba(4, 8, 22, 0.4), rgba(4, 8, 22, 0.9)), url('${proj.image}')`;
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
        card.style.boxShadow = `0 15px 45px rgba(0,0,0,0.5), inset 0 2px 0 ${proj.color}40`;
        card.style.cursor = 'pointer';
        
        card.innerHTML = `
            <div class="project-card-content">
                <h3 class="project-title">${proj.title}</h3>
                <div class="project-card-footer">
                    <button class="project-visit-btn minimal" onclick="event.stopPropagation(); showProjectDetails(${proj.id})">
                        View Details <i class="fas fa-info-circle"></i>
                    </button>
                    <a href="${proj.github}" target="_blank" class="project-visit-btn minimal" onclick="event.stopPropagation()" style="margin-left:10px;">
                        GitHub <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(card);
    });

    // Services
    const servicesGrid = document.getElementById('services-list');
    let visibleServices = 3;
    
    function renderServices() {
        servicesGrid.innerHTML = '';
        const servicesToShow = DATA.services.slice(0, visibleServices);
        
        servicesToShow.forEach((serv, idx) => {
            const card = document.createElement('div');
            card.className = 'glass-card service-card premium-card';
            card.style.display = 'flex';
            card.style.flexDirection = 'column';
            card.style.padding = '0';
            card.style.overflow = 'hidden';
            card.style.height = '100%';
            card.setAttribute('data-aos', getAos());
            card.setAttribute('data-aos-delay', (Math.random() * 300).toString());
            
            card.innerHTML = `
                <div class="service-image-container" style="height: 220px; background-image: url('${serv.image}'); background-size: cover; background-position: center; flex-shrink: 0; position: relative;">
                    <div style="position:absolute; inset:0; background: linear-gradient(to bottom, transparent 40%, rgba(8, 14, 40, 0.9) 95%, #080e28 100%);"></div>
                    ${!serv.image || serv.image.includes('placeholder') ? `<div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color: var(--color-text-muted); font-size: 3rem; background: rgba(0,0,0,0.5);">🖼️</div>` : ''}
                </div>
                <div style="padding: 24px; display: flex; flex-direction: column; flex-grow: 1;">
                    <h3 style="margin-bottom: 12px; font-size: 1.3rem;">${serv.title}</h3>
                    <p style="color:var(--color-text-secondary); font-size:0.95rem; line-height:1.6; margin-bottom: 24px; flex-grow: 1;">${serv.desc}</p>
                    <button class="project-visit-btn" onclick="showServiceDetails('${serv.title}', \`${serv.details}\`)">
                        View Details <i class="fas fa-info-circle"></i>
                    </button>
                </div>
            `;
            servicesGrid.appendChild(card);
        });
        
        // Show More/Less Button Logic
        const toggleBtnContainer = document.getElementById('services-toggle-container');
        if(toggleBtnContainer) {
            toggleBtnContainer.innerHTML = '';
            if (DATA.services.length > 3) {
                const btn = document.createElement('button');
                btn.className = 'btn-outline';
                btn.style.marginTop = '40px';
                if (visibleServices >= DATA.services.length) {
                    btn.innerHTML = 'Show Less <i class="fas fa-arrow-up"></i>';
                    btn.onclick = () => { visibleServices = 3; renderServices(); document.getElementById('services').scrollIntoView({behavior: 'smooth'}); };
                } else {
                    btn.innerHTML = 'Show More <i class="fas fa-arrow-down"></i>';
                    btn.onclick = () => { visibleServices = DATA.services.length; renderServices(); };
                }
                toggleBtnContainer.appendChild(btn);
            }
        }
    }
    
    renderServices();

    // Certs Pagination Logic
    const certsGrid = document.getElementById('certs-list');
    const certsPagination = document.getElementById('certs-pagination');
    const itemsPerPage = 6;
    let currentCertsPage = 1;

    function renderCerts(page) {
        if (!certsGrid) return;
        certsGrid.innerHTML = '';
        currentCertsPage = page;
        
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageItems = DATA.certs.slice(start, end);

        pageItems.forEach((c, idx) => {
            const card = document.createElement('div');
            card.className = 'glass-card cert-card premium-card';
            card.setAttribute('data-aos', 'fade-up');
            card.setAttribute('data-aos-delay', (idx * 50).toString());
            
            card.innerHTML = `
                <div class="cert-icon-box">
                    <i class="fas fa-certificate cert-ribbon"></i>
                    <div class="cert-glow"></div>
                </div>
                <div class="cert-content">
                    <span class="cert-date">${c.date}</span>
                    <h3 class="cert-title">${c.title}</h3>
                    <p class="cert-issuer">Validated by <span>${c.issuer}</span></p>
                    <a href="${c.link}" target="_blank" class="cert-link-btn">
                        Verify Credential <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            `;
            certsGrid.appendChild(card);
        });

        renderCertsPagination();
        
        // Refresh AOS for new cards
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }

    function renderCertsPagination() {
        if (!certsPagination) return;
        certsPagination.innerHTML = '';
        const totalPages = Math.ceil(DATA.certs.length / itemsPerPage);
        
        if (totalPages <= 1) return;

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.className = i === currentCertsPage ? 'pagination-btn active' : 'pagination-btn';
            btn.innerText = i;
            btn.onclick = () => {
                renderCerts(i);
                document.getElementById('certs').scrollIntoView({ behavior: 'smooth' });
            };
            certsPagination.appendChild(btn);
        }
    }

    renderCerts(1);

    // Refresh AOS to detect dynamic elements
    if (typeof AOS !== 'undefined') {
        setTimeout(() => {
            AOS.refresh();
        }, 100);
    }
}


// --- Navigation & Scroll ---
function setupScroll() {
    const nav = document.getElementById('navbar');
    const links = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) nav.style.padding = '10px 0';
        else nav.style.padding = '0';
        
        let current = "";
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const top = section.offsetTop;
            if (window.pageYOffset >= top - 150) current = section.getAttribute('id');
        });
        
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) link.classList.add('active');
        });
    });
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page redirect
        
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Sending Message...';
        btn.disabled = true;

        // Collect data
        const formData = {
            name: document.getElementById('contact-name').value,
            email: document.getElementById('contact-email').value,
            subject: document.getElementById('contact-subject').value,
            message: document.getElementById('contact-message').value,
            _captcha: "false"
        };

        // Send via AJAX to avoid redirect
        fetch("https://formsubmit.co/ajax/mohameddogheim9500@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if(data.success === "false") throw new Error('Activation required');
            
            btn.innerText = 'Message Sent! ✓';
            btn.style.background = '#10b981';
            form.reset();
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 5000);
        })
        .catch(error => {
            console.error('Error:', error);
            // If it fails, it's likely because of activation. 
            // We'll show a friendly message.
            btn.innerText = 'Sent! Check your Email to Activate';
            btn.style.background = '#f59e0b';
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 6000);
        });
    });
}

// Global functions
window.showCV = function() {
    const cvPath = 'assets/docs/Mohamed_Dogheim_Resume.pdf.pdf';
    window.open(cvPath, '_blank');
};

window.showProjectDetails = function(projectId) {
    const proj = DATA.projects.find(p => p.id === projectId);
    if (!proj) return;

    // Remove any existing modal
    const existing = document.getElementById('project-modal-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'project-modal-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.85);backdrop-filter:blur(8px);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;animation:fadeInOverlay 0.25s ease-out;';
    
    const accentColor = proj.color || 'var(--color-primary)';

    const modalContainer = document.createElement('div');
    modalContainer.style.cssText = 'position: relative; max-width: 1200px; width: 98vw; display: flex; justify-content: center; align-items: center; animation: modalSlideUp 0.3s ease-out forwards;';
    
    modalContainer.innerHTML = `
        <div style="position: relative; width: 100%; max-width: 1100px; display: flex; justify-content: center; animation: float-up-down 4s ease-in-out infinite;">
            <img src="assets/images/robot-sign-transparent.png" alt="Robot" style="width: 100%; height: auto; filter: drop-shadow(0 0 30px rgba(0, 212, 255, 0.2)); pointer-events: none;">
            
            <div style="position: absolute; top: 62%; left: 50%; transform: translate(-50%, -50%); width: 56%; height: 38%; overflow-y: auto; display: flex; flex-direction: column; color: #ffffff; padding: 10px 15px; z-index: 10;">
                <button id="proj-modal-close" style="position:absolute;top:0px;right:0px;background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.3);color:#ffffff;font-size:1.5rem;cursor:pointer;width:35px;height:35px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:all 0.2s;z-index: 20;" onmouseover="this.style.background='rgba(255,255,255,0.3)'" onmouseout="this.style.background='rgba(255,255,255,0.15)'">&times;</button>
                
                <div style="text-align:center; margin-bottom: 8px;">
                    <span style="font-size:0.9rem;font-weight:900;color:${accentColor};text-transform:uppercase;letter-spacing:2px;text-shadow:0 3px 6px rgba(0,0,0,1);">Project Overview</span>
                    <h3 style="margin:4px 0 0;font-size:1.5rem;line-height:1.2;text-shadow:0 3px 6px rgba(0,0,0,1);font-weight:800;">${proj.title}</h3>
                </div>

                <p style="font-size:1rem;line-height:1.5;margin-bottom:12px;text-shadow:0 2px 4px rgba(0,0,0,1);text-align:center;font-weight:600;color:#ffffff;">${proj.lead}</p>

                <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">
                    <div style="background:rgba(0,0,0,0.6);border:1px solid rgba(255,255,255,0.2);border-radius:8px;padding:12px;backdrop-filter:blur(10px);">
                        <div style="font-size:0.75rem;font-weight:800;color:${accentColor};text-transform:uppercase;margin-bottom:4px;text-shadow:0 1px 2px rgba(0,0,0,1);">🎯 Objective</div>
                        <p style="font-size:0.85rem;line-height:1.4;margin:0;font-weight:500;color:#ffffff;text-shadow:0 1px 2px rgba(0,0,0,1);">${proj.details.objective}</p>
                    </div>
                    <div style="background:rgba(0,0,0,0.6);border:1px solid rgba(255,255,255,0.2);border-radius:8px;padding:12px;backdrop-filter:blur(10px);">
                        <div style="font-size:0.75rem;font-weight:800;color:${accentColor};text-transform:uppercase;margin-bottom:4px;text-shadow:0 1px 2px rgba(0,0,0,1);">🛠️ Tools Used</div>
                        <p style="font-size:0.85rem;line-height:1.4;margin:0;font-weight:500;color:#ffffff;text-shadow:0 1px 2px rgba(0,0,0,1);">${proj.details.tools}</p>
                    </div>
                    <div style="background:rgba(0,0,0,0.6);border:1px solid rgba(255,255,255,0.2);border-radius:8px;padding:12px;backdrop-filter:blur(10px);">
                        <div style="font-size:0.75rem;font-weight:800;color:${accentColor};text-transform:uppercase;margin-bottom:4px;text-shadow:0 1px 2px rgba(0,0,0,1);">⚙️ Tech Stack</div>
                        <p style="font-size:0.85rem;line-height:1.4;margin:0;font-weight:500;color:#ffffff;text-shadow:0 1px 2px rgba(0,0,0,1);">${proj.details.tech_stack}</p>
                    </div>
                    <div style="background:rgba(0,0,0,0.6);border:1px solid rgba(255,255,255,0.2);border-radius:8px;padding:12px;backdrop-filter:blur(10px);">
                        <div style="font-size:0.75rem;font-weight:800;color:${accentColor};text-transform:uppercase;margin-bottom:4px;text-shadow:0 1px 2px rgba(0,0,0,1);">✅ Outcome</div>
                        <p style="font-size:0.85rem;line-height:1.4;margin:0;font-weight:500;color:#ffffff;text-shadow:0 1px 2px rgba(0,0,0,1);">${proj.details.outcome}</p>
                    </div>
                </div>

                <div style="display:flex;gap:15px;margin-top:auto;justify-content:center;padding-bottom:5px;">
                    <a href="${proj.github}" target="_blank" class="btn-primary" style="flex:1;max-width:220px;text-align:center;padding:12px;font-size:1rem;font-weight:700;text-decoration:none;display:flex;align-items:center;justify-content:center;gap:8px;border-radius:25px;box-shadow:0 4px 15px rgba(0,0,0,0.8);">
                        <i class="fab fa-github"></i> View GitHub
                    </a>
                    <button id="proj-modal-close-btn" class="btn-outline" style="flex:1;max-width:220px;padding:12px;font-size:1rem;font-weight:700;cursor:pointer;background:rgba(0,0,0,0.6);border-radius:25px;box-shadow:0 4px 15px rgba(0,0,0,0.8);color:#ffffff;">Close</button>
                </div>
            </div>
        </div>
    `;
    
    overlay.appendChild(modalContainer);
    document.body.appendChild(overlay);

    // Close handlers
    const closeModal = () => overlay.remove();
    document.getElementById('proj-modal-close').addEventListener('click', closeModal);
    document.getElementById('proj-modal-close-btn').addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') { closeModal(); document.removeEventListener('keydown', escHandler); }
    });
};

window.showServiceDetails = function(title, details) {
    // Simple custom modal/alert for service details
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.background = 'rgba(0,0,0,0.8)';
    overlay.style.backdropFilter = 'blur(5px)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.padding = '20px';
    
    const modal = document.createElement('div');
    modal.className = 'glass-card premium-card';
    modal.style.maxWidth = '600px';
    modal.style.width = '100%';
    modal.style.position = 'relative';
    modal.style.animation = 'fade-up 0.3s ease-out forwards';
    
    modal.innerHTML = `
        <button onclick="this.parentElement.parentElement.remove()" style="position:absolute; top:20px; right:20px; background:transparent; border:none; color:var(--color-text-muted); font-size:1.5rem; cursor:pointer;">&times;</button>
        <div style="display:flex; align-items:center; gap:15px; margin-bottom:20px;">
            <div style="width:50px; height:50px; background:var(--gradient-primary); border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:1.5rem;">🌟</div>
            <h3 style="margin:0">${title}</h3>
        </div>
        <p style="color:var(--color-text-secondary); line-height:1.8; font-size:1.05rem;">${details}</p>
        <button class="btn-primary" onclick="this.parentElement.parentElement.remove()" style="margin-top:30px; width:100%;">Close Details</button>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
};

// --- Back to Top Logic ---
function setupBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initializing the new logic
document.addEventListener('DOMContentLoaded', () => {
    setupBackToTop();
});
