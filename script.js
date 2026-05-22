// Interaction Controller for BNDR Premium Site

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mouse Follower for Light Streaks
    const streakPlasma = document.querySelector('.streak-plasma');
    const streakMagenta = document.querySelector('.streak-magenta');

    document.addEventListener('mousemove', (e) => {
        const xPercent = (e.clientX / window.innerWidth) * 100;
        const yPercent = (e.clientY / window.innerHeight) * 100;

        // Subtle parallax on lasers
        if (streakPlasma) {
            streakPlasma.style.left = `${15 + (xPercent / 10)}%`;
            streakPlasma.style.opacity = `${0.3 + (yPercent / 200)}`;
        }
        if (streakMagenta) {
            streakMagenta.style.right = `${25 + (xPercent / 10)}%`;
            streakMagenta.style.opacity = `${0.3 + (yPercent / 200)}`;
        }
    });

    // 2. Scroll Reveal Effects
    const revealElements = document.querySelectorAll('.glass-card, .glass-panel, .metric-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.2, 1, 0.3, 1)';
        observer.observe(el);
    });

    // 3. Code Block Copy Logic (GA Section)
    const codeBox = document.getElementById('ga-code');
    if (codeBox) {
        codeBox.addEventListener('click', () => {
            const code = codeBox.innerText;
            navigator.clipboard.writeText(code).then(() => {
                const originalText = codeBox.innerHTML;
                codeBox.innerText = "TAG COPIED TO CLIPBOARD";
                codeBox.style.color = "#E8E4DF";
                setTimeout(() => {
                    codeBox.innerHTML = originalText;
                    codeBox.style.color = "#CCFF00";
                }, 2000);
            });
        });
    }

    // 4. Pill Button Click Effect
    document.querySelectorAll('.pill-btn').forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'scale(0.96) translateY(1px)';
        });
        btn.addEventListener('mouseup', () => {
            btn.style.transform = '';
        });
    });

    console.log("%c BNDR DEPLOYMENT READY ", "background: #CCFF00; color: #020202; font-weight: 800; padding: 5px 10px;");
});
