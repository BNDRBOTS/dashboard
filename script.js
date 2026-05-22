/**
 * BNDR INTELLIGENCE CORE
 * Handles view switching, AI "Reasoning" simulation, and system status.
 */

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.view');
    const aiInput = document.getElementById('ai-input');
    const sendBtn = document.getElementById('send-btn');
    const terminalOut = document.getElementById('terminal-out');
    const aiEngine = document.getElementById('ai-engine');

    // 1. NAV SWITCHER
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const viewId = `view-${item.dataset.view}`;
            
            // UI Update
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');

            // View Switch
            views.forEach(v => {
                v.classList.remove('active');
                if (v.id === viewId) v.classList.add('active');
            });
        });
    });

    // 2. AI REASONING SIMULATOR (Placeholder for DeepSeek/Claude/GPT APIs)
    async function runAIReasoning(query) {
        const engine = aiEngine.value;
        const timestamp = new Date().toLocaleTimeString();
        
        // Add User Message
        appendTerminal(`<p style="opacity:0.5; margin-top:10px;">[${timestamp}] USER: ${query}</p>`);
        
        // Simulate "Reasoning" delay
        appendTerminal(`<p class="bot-msg" style="color:var(--magenta)">STREAMS_OF_THOUGHT: Analyzing via ${engine}...</p>`);
        
        setTimeout(() => {
            let response = "";
            if (engine === 'deepseek-v4') {
                response = "LOGIC_PATH_BNDR: Your conversion rate is high on 'Liquid Glass', but exit rates on the pricing block suggest a value-proposition friction. Recommendation: Add a 'Results Guarantee' micro-copy near the $2,400 tier.";
            } else if (engine === 'claude-3-7') {
                response = "The tone of your recent content aligns perfectly with high-end digital architecture. I suggest softening the magenta glow on mobile devices to improve text readability for the 'Non-Jargon' translation layer.";
            } else {
                response = "Omni-Analysis: Traffic is peaking from LinkedIn. Your 'AI Consulting' CTA is being clicked 3x more when the streak-plasma animation is active.";
            }
            
            appendTerminal(`<p class="bot-msg">${response}</p>`);
            terminalOut.scrollTop = terminalOut.scrollHeight;
        }, 1500);
    }

    function appendTerminal(html) {
        const p = document.createElement('div');
        p.innerHTML = html;
        terminalOut.appendChild(p);
        terminalOut.scrollTop = terminalOut.scrollHeight;
    }

    sendBtn.addEventListener('click', () => {
        const val = aiInput.value.trim();
        if (val) {
            runAIReasoning(val);
            aiInput.value = '';
        }
    });

    aiInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendBtn.click();
    });

    // 3. SYSTEM INTEL AUTO-UPDATES (Mocking real API pulls)
    setInterval(() => {
        const latency = Math.floor(Math.random() * 30) + 10;
        const latencyEl = document.querySelector('.intel-item:last-child .value');
        if (latencyEl) latencyEl.innerText = `${latency}ms`;
    }, 5000);

    // Initial log
    console.log("%c BNDR SYSTEM ONLINE ", "background: #CCFF00; color: #000; font-weight: bold;");
});
