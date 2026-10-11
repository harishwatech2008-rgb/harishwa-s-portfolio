/**
 * Application Controller & Interactive Engines
 * Harishwa S Portfolio
 */

// --- 1. Theme Controller ---
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const toggleBtnMobile = document.getElementById('theme-toggle-mobile');
  const currentTheme = localStorage.getItem('harishwa-portfolio-theme') || 
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      updateThemeIcons('light');
    } else {
      document.documentElement.classList.remove('light');
      updateThemeIcons('dark');
    }
    localStorage.setItem('harishwa-portfolio-theme', theme);
  }

  function updateThemeIcons(theme) {
    const sunIcons = document.querySelectorAll('.sun-icon');
    const moonIcons = document.querySelectorAll('.moon-icon');
    if (theme === 'light') {
      sunIcons.forEach(icon => icon.classList.remove('hidden'));
      moonIcons.forEach(icon => icon.classList.add('hidden'));
    } else {
      sunIcons.forEach(icon => icon.classList.add('hidden'));
      moonIcons.forEach(icon => icon.classList.remove('hidden'));
    }
  }

  function toggle() {
    const isLight = document.documentElement.classList.contains('light');
    applyTheme(isLight ? 'dark' : 'light');
  }

  applyTheme(currentTheme);
  if (toggleBtn) toggleBtn.addEventListener('click', toggle);
  if (toggleBtnMobile) toggleBtnMobile.addEventListener('click', toggle);
}

// --- 2. Interactive Canvas Particle Background ---
function initParticleCanvas() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 120 };

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
    createParticles();
  }

  function createParticles() {
    particles = [];
    const count = Math.min(Math.floor((width * height) / 12000), 55);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        size: Math.random() * 2 + 1,
      });
    }
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const isLight = document.documentElement.classList.contains('light');
    const particleColor = isLight ? 'rgba(14, 165, 233, ' : 'rgba(56, 189, 248, ';
    const lineColor = isLight ? 'rgba(14, 165, 233, ' : 'rgba(56, 189, 248, ';

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Mouse repulsion/interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = particleColor + '0.6)';
      ctx.fill();

      // Connect lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          const alpha = (1 - dist / 110) * 0.25;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = lineColor + alpha + ')';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(draw);
  }

  resize();
  draw();
}

// --- 3. Hero Typing Effect ---
function initTypingAnimation() {
  const el = document.getElementById('typing-role');
  if (!el) return;

  const roles = [
    'First-Year B.E. Computer Science Student',
    'Python & AI-Assisted Developer',
    'Embedded IoT Safety Prototyper',
    'Smart India Hackathon Concept Designer',
    'Problem Solver & Tech Explorer',
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 75;

  function type() {
    const current = roles[roleIndex];
    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 35;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 75;
    }

    if (!isDeleting && charIndex === current.length) {
      isDeleting = true;
      typingSpeed = 2200; // Pause at end of text
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 450;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// --- 4. Interactive Simulation: Anti-Sleep Alarm System ---
function initAntiSleepSimulation() {
  const eyeVisual = document.getElementById('sim-eye-visual');
  const eyeLid = document.getElementById('sim-eye-lid');
  const timerDisplay = document.getElementById('sim-timer');
  const statusBadge = document.getElementById('sim-status');
  const buzzerIndicator = document.getElementById('sim-buzzer');
  const ledIndicator = document.getElementById('sim-led');
  const waveGraphic = document.getElementById('sim-wave');
  const toggleBtn = document.getElementById('sim-toggle-btn');
  const soundToggleBtn = document.getElementById('sim-sound-toggle');

  if (!toggleBtn) return;

  let isEyesClosed = false;
  let closureStartTime = 0;
  let timerInterval = null;
  let elapsedSeconds = 0;
  let isAlarmTriggered = false;
  let soundEnabled = false;
  let audioCtx = null;
  let buzzerOsc = null;
  let buzzerGain = null;

  // Web Audio buzzer sound generator
  function playBeep() {
    if (!soundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      if (!buzzerOsc) {
        buzzerOsc = audioCtx.createOscillator();
        buzzerGain = audioCtx.createGain();
        buzzerOsc.type = 'sawtooth';
        buzzerOsc.frequency.setValueAtTime(1400, audioCtx.currentTime);
        buzzerGain.gain.setValueAtTime(0.15, audioCtx.currentTime);
        buzzerOsc.connect(buzzerGain);
        buzzerGain.connect(audioCtx.destination);
        buzzerOsc.start();
      }
    } catch (e) {
      console.warn('Audio not available', e);
    }
  }

  function stopBeep() {
    if (buzzerOsc) {
      try {
        buzzerOsc.stop();
        buzzerOsc.disconnect();
      } catch (e) {}
      buzzerOsc = null;
      buzzerGain = null;
    }
  }

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      soundToggleBtn.textContent = soundEnabled ? '🔊 Sound: ON' : '🔇 Sound: OFF';
      soundToggleBtn.classList.toggle('bg-cyan-500/20', soundEnabled);
      soundToggleBtn.classList.toggle('border-cyan-500', soundEnabled);
    });
  }

  function setNormalState() {
    isEyesClosed = false;
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedSeconds = 0;
    isAlarmTriggered = false;
    stopBeep();

    if (timerDisplay) timerDisplay.textContent = '0.0s';
    if (eyeLid) eyeLid.style.height = '0%';
    if (statusBadge) {
      statusBadge.textContent = 'EYES OPEN · NORMAL DRIVING';
      statusBadge.className = 'px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30';
    }
    if (buzzerIndicator) {
      buzzerIndicator.textContent = 'OFF';
      buzzerIndicator.className = 'text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700';
    }
    if (ledIndicator) {
      ledIndicator.className = 'w-3 h-3 rounded-full bg-emerald-500 shadow-sm';
    }
    if (waveGraphic) {
      waveGraphic.classList.remove('wave-active');
      waveGraphic.classList.add('opacity-10');
    }
    toggleBtn.innerHTML = `
      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"></path>
      </svg>
      Simulate Eye Closure (Drowsy)
    `;
    toggleBtn.className = 'inline-flex items-center px-4 py-2.5 rounded-lg text-sm font-medium bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/40 transition-colors shadow-sm cursor-pointer';
  }

  function setClosedState() {
    isEyesClosed = true;
    closureStartTime = Date.now();
    if (eyeLid) eyeLid.style.height = '100%';
    if (statusBadge) {
      statusBadge.textContent = 'EYES CLOSED · MONITORING...';
      statusBadge.className = 'px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 animate-pulse';
    }
    toggleBtn.innerHTML = `
      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
      </svg>
      Open Eyes (Awaken)
    `;
    toggleBtn.className = 'inline-flex items-center px-4 py-2.5 rounded-lg text-sm font-medium bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/40 transition-colors shadow-sm cursor-pointer';

    timerInterval = setInterval(() => {
      elapsedSeconds = ((Date.now() - closureStartTime) / 1000);
      if (timerDisplay) timerDisplay.textContent = elapsedSeconds.toFixed(1) + 's';

      // Threshold: 2.0 seconds represents prolonged closure (drowsiness detection)
      if (elapsedSeconds >= 2.0 && !isAlarmTriggered) {
        isAlarmTriggered = true;
        if (statusBadge) {
          statusBadge.textContent = '🚨 DROWSINESS DETECTED! BUZZER TRIGGERED';
          statusBadge.className = 'px-3 py-1 text-xs font-semibold rounded-full bg-red-500/25 text-red-400 border border-red-500/50 animate-bounce';
        }
        if (buzzerIndicator) {
          buzzerIndicator.textContent = 'ALARM BEEPING!';
          buzzerIndicator.className = 'text-xs font-mono font-bold px-2 py-0.5 rounded bg-red-600 text-white animate-pulse shadow-lg shadow-red-500/50';
        }
        if (ledIndicator) {
          ledIndicator.className = 'w-3 h-3 rounded-full bg-red-500 animate-ping';
        }
        if (waveGraphic) {
          waveGraphic.classList.remove('opacity-10');
          waveGraphic.classList.add('wave-active');
        }
        playBeep();
      }
    }, 100);
  }

  toggleBtn.addEventListener('click', () => {
    if (isEyesClosed) {
      setNormalState();
    } else {
      setClosedState();
    }
  });

  // Initial state
  setNormalState();
}

// --- 5. Interactive FarmConnect Supply Chain Visualizer ---
function initFarmConnectVisualizer() {
  const modelBtns = document.querySelectorAll('.fc-model-toggle');
  const viewTraditional = document.getElementById('fc-view-traditional');
  const viewFarmConnect = document.getElementById('fc-view-farmconnect');

  if (!modelBtns.length || !viewTraditional || !viewFarmConnect) return;

  modelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-mode');
      modelBtns.forEach(b => {
        b.classList.remove('bg-cyan-500', 'text-slate-950', 'shadow-md');
        b.classList.add('text-slate-400');
      });
      btn.classList.add('bg-cyan-500', 'text-slate-950', 'shadow-md');
      btn.classList.remove('text-slate-400');

      if (mode === 'traditional') {
        viewTraditional.classList.remove('hidden');
        viewFarmConnect.classList.add('hidden');
      } else {
        viewTraditional.classList.add('hidden');
        viewFarmConnect.classList.remove('hidden');
      }
    });
  });
}

// --- 6. Skill Category Filter Tabs ---
function initSkillFilters() {
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  const skillCards = document.querySelectorAll('.skill-card-item');

  if (!filterBtns.length || !skillCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      filterBtns.forEach(b => {
        b.classList.remove('bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40');
        b.classList.add('text-slate-400', 'border-transparent');
      });
      btn.classList.add('bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40');
      btn.classList.remove('text-slate-400', 'border-transparent');

      skillCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.classList.remove('hidden');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => card.classList.add('hidden'), 200);
        }
      });
    });
  });
}

// --- 7. Modals (Certificate & Resume Preview) ---
function initModals() {
  // Certificate Modal
  const certModal = document.getElementById('cert-modal');
  const openCertBtn = document.getElementById('open-cert-modal');
  const closeCertBtns = document.querySelectorAll('.close-cert-modal');

  if (openCertBtn && certModal) {
    openCertBtn.addEventListener('click', () => {
      certModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  closeCertBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (certModal) {
        certModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
    });
  });

  // Resume Viewer Modal
  const resumeModal = document.getElementById('resume-modal');
  const openResumeModalBtn = document.getElementById('open-resume-modal');
  const closeResumeBtns = document.querySelectorAll('.close-resume-modal');

  if (openResumeModalBtn && resumeModal) {
    openResumeModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      resumeModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  closeResumeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (resumeModal) {
        resumeModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
    });
  });

  // Close modals on clicking backdrop
  [certModal, resumeModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.add('hidden');
          document.body.style.overflow = 'auto';
        }
      });
    }
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (certModal) certModal.classList.add('hidden');
      if (resumeModal) resumeModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  });
}

// --- 8. Contact Form & Clipboard Notification ---
function initContactForm() {
  const form = document.getElementById('contact-form');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyToast = document.getElementById('copy-toast');
  const submitFeedback = document.getElementById('form-feedback');

  // Copy Email to Clipboard
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'harishwa.tech2008@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email address copied to clipboard!');
      }).catch(() => {
        showToast('harishwa.tech2008@gmail.com');
      });
    });
  }

  function showToast(msg) {
    if (!copyToast) return;
    copyToast.textContent = msg;
    copyToast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
    copyToast.classList.add('opacity-100', 'translate-y-0');
    setTimeout(() => {
      copyToast.classList.remove('opacity-100', 'translate-y-0');
      copyToast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
    }, 3000);
  }

  // Handle Form Submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('sender-name').value.trim();
      const email = document.getElementById('sender-email').value.trim();
      const subject = document.getElementById('sender-subject').value.trim();
      const message = document.getElementById('sender-message').value.trim();

      if (!name || !email || !message) {
        if (submitFeedback) {
          submitFeedback.className = 'mt-3 p-3 rounded-lg text-xs bg-red-500/20 text-red-300 border border-red-500/40 block';
          submitFeedback.textContent = 'Please fill out your name, valid email, and message.';
        }
        return;
      }

      // Generate mailto link
      const mailtoUrl = `mailto:harishwa.tech2008@gmail.com?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${subject || 'Connecting with Harishwa'}`
      )}&body=${encodeURIComponent(
        `Hi Harishwa,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

      if (submitFeedback) {
        submitFeedback.className = 'mt-3 p-3 rounded-lg text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 block';
        submitFeedback.innerHTML = `
          <strong>Opening your email client...</strong> If it doesn't open automatically, 
          <a href="${mailtoUrl}" class="underline font-semibold text-cyan-300">click here to send directly</a>.
        `;
      }

      // Trigger mailto
      window.location.href = mailtoUrl;
    });
  }
}

// --- 9. Mobile Menu & Navigation Spy ---
function initNavigation() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when link is clicked
    document.querySelectorAll('#mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active section scroll spy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (activeLink) {
          navLinks.forEach(link => link.classList.remove('text-cyan-400', 'font-semibold'));
          activeLink.classList.add('text-cyan-400', 'font-semibold');
        }
      }
    });
  });
}

// --- 10. Back to Top Button with Scroll Progress ---
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  const progressCircle = document.getElementById('scroll-progress-circle');
  if (!backToTopBtn) return;

  const circumference = 2 * Math.PI * 18; // radius 18
  if (progressCircle) {
    progressCircle.style.strokeDasharray = circumference;
    progressCircle.style.strokeDashoffset = circumference;
  }

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = window.pageYOffset / totalHeight;

    if (window.pageYOffset > 400) {
      backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      backToTopBtn.classList.add('opacity-100', 'translate-y-0');
    } else {
      backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
      backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
    }

    if (progressCircle) {
      const offset = circumference - (progress * circumference);
      progressCircle.style.strokeDashoffset = offset;
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// --- Initialize All Systems on DOM Ready ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initParticleCanvas();
  initTypingAnimation();
  initAntiSleepSimulation();
  initFarmConnectVisualizer();
  initSkillFilters();
  initModals();
  initContactForm();
  initNavigation();
  initBackToTop();
});
