(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const h=`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 4L6 11v12c0 11.05 7.68 21.38 18 24 10.32-2.62 18-12.95 18-24V11L24 4z" fill="rgba(0,200,83,0.15)" stroke="#00c853" stroke-width="2"/>
  <path d="M18 24l4 4 8-8" stroke="#00c853" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,y=`<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 3L4 8v8c0 7.37 5.12 14.25 12 16 6.88-1.75 12-8.63 12-16V8L16 3z" fill="rgba(0,200,83,0.15)" stroke="#00c853" stroke-width="1.5"/>
  <path d="M12 16l3 3 5-5" stroke="#00c853" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;document.querySelector("#app").innerHTML=`

<!-- BOOT SCREEN -->
<div id="screen-boot" class="screen active">
  <div class="boot-logo">
    <div class="boot-shield">${h}</div>
    <div class="boot-title"><span>Shield</span>OS</div>
    <div class="boot-subtitle">Secure Business Platform · Kenya Edition</div>
  </div>
  <div class="boot-progress-wrap">
    <div class="boot-progress-bar"><div class="boot-progress-fill" id="boot-fill"></div></div>
    <div class="boot-log" id="boot-log"></div>
  </div>
</div>

<!-- LOGIN SCREEN -->
<div id="screen-login" class="screen">
  <div class="login-card">
    <div class="login-header">
      <div class="login-logo">
        ${y}
        <div class="login-logo-text"><span>Shield</span>OS</div>
      </div>
      <div class="login-subtitle">Secure Business Platform</div>
      <div class="login-org">🏢 Nairobi Digital Hub — Workstation 04</div>
    </div>

    <!-- Step indicator -->
    <div class="step-indicator" id="step-indicator">
      <div class="step-dot active" id="step-1"></div>
      <div class="step-line"></div>
      <div class="step-dot" id="step-2"></div>
      <div class="step-line"></div>
      <div class="step-dot" id="step-3"></div>
    </div>

    <div class="login-error" id="login-error">Incorrect credentials. Please try again.</div>

    <!-- Step 1: Credentials -->
    <div id="login-step-1">
      <div class="form-group">
        <label class="form-label">Username</label>
        <input class="form-input" id="input-user" type="text" placeholder="e.g. amina.wanjiku" value="amina.wanjiku" />
      </div>
      <div class="form-group">
        <label class="form-label">Password</label>
        <input class="form-input" id="input-pass" type="password" placeholder="Enter password" value="password123" />
      </div>
      <button class="btn-primary" id="btn-login-1">Continue →</button>
    </div>

    <!-- Step 2: MFA -->
    <div id="login-step-2" style="display:none">
      <div class="form-group">
        <label class="form-label">Two-Factor Authentication Code</label>
        <input class="form-input mono" id="input-otp" type="text" placeholder="000 000" maxlength="7" />
        <div class="mfa-hint">Enter the 6-digit code from your authenticator app</div>
      </div>
      <button class="btn-primary" id="btn-login-2">Verify Identity →</button>
    </div>

    <!-- Step 3: Loading -->
    <div id="login-step-3" style="display:none; text-align:center; padding: 16px 0;">
      <div style="font-size:2rem; margin-bottom:10px;">🔒</div>
      <div style="font-size:0.82rem; color:var(--green); font-weight:500;">Verifying credentials…</div>
      <div style="font-size:0.7rem; color:var(--text-muted); margin-top:4px;">Checking AppArmor profiles · Loading audit daemon</div>
    </div>

    <div class="login-footer">
      <div class="login-footer-text">ShieldOS v2.4.1 · LUKS Encrypted</div>
      <div class="login-security-badge">🛡 KDPA Compliant</div>
    </div>
  </div>
</div>

<!-- DESKTOP SCREEN -->
<div id="screen-desktop" class="screen">
  <div class="wallpaper"></div>

  <!-- LINUX TOP PANEL -->
  <div class="linux-panel">
    <div class="panel-left">
      <button class="panel-activities" id="taskbar-launcher" type="button">Activities</button>
      <div class="panel-workspace">Workspace 1</div>
    </div>
    <div class="panel-center">
      <div class="panel-brand">
        ${y}
        <span>SHIELD OS</span>
      </div>
    </div>
    <div class="panel-right">
      <div class="taskbar-status">
        <div class="status-pill secure"><span class="pulse"></span> Protected</div>
        <div class="status-pill warn" id="dns-pill" style="display:none;"><span class="pulse"></span> DNS Alert</div>
      </div>
      <div class="taskbar-clock">
        <div id="clock-time">00:00</div>
        <div class="date" id="clock-date">Mon, Jan 1</div>
      </div>
    </div>
  </div>

  <div class="desktop-area">
    <aside class="desktop-shortcuts" aria-label="Applications">
      <div class="desktop-icons" id="desktop-icons"></div>
    </aside>
  </div>

  <!-- LINUX DOCK -->
  <div class="linux-dock-wrap">
    <div class="linux-dock">
      <div class="dock-pins" id="dock-pins"></div>
      <div class="dock-divider"></div>
      <div class="taskbar-apps dock-running" id="taskbar-apps"></div>
    </div>
  </div>

  <!-- APP LAUNCHER OVERLAY -->
  <div class="launcher-overlay" id="launcher-overlay">
    <div class="launcher-panel">
      <input class="launcher-search" placeholder="🔍  Search apps…" id="launcher-search" />
      <div class="launcher-section-title">Business Apps</div>
      <div class="launcher-grid" id="launcher-grid-biz"></div>
      <div class="launcher-section-title">Security & System</div>
      <div class="launcher-grid" id="launcher-grid-sys"></div>
    </div>
  </div>

  <!-- NOTIFICATION CONTAINER -->
  <div class="notif-container" id="notif-container"></div>

  <!-- WINDOWS MOUNT -->
  <div id="windows-mount"></div>
</div>
`;const g=[{pct:8,msg:"Initializing kernel modules…"},{pct:18,msg:"Mounting LUKS encrypted root partition…"},{pct:30,msg:"Starting AppArmor security profiles…"},{pct:44,msg:"Loading auditd (Kenya Data Protection Act)…"},{pct:55,msg:"Connecting NextDNS filter (DNS-over-HTTPS)…"},{pct:66,msg:"Verifying app whitelist integrity…"},{pct:78,msg:"Starting network firewall (0 open ports)…"},{pct:88,msg:"Loading user session — ShieldOS Desktop…"},{pct:100,msg:"System ready. All security checks passed ✓"}];function k(){const e=document.getElementById("boot-fill"),t=document.getElementById("boot-log");let s=0;function d(){if(s>=g.length){setTimeout(S,600);return}const i=g[s++];e.style.width=i.pct+"%",t.textContent=i.msg,setTimeout(d,s===g.length?400:220)}setTimeout(d,500)}function S(){document.getElementById("screen-boot").classList.remove("active"),document.getElementById("screen-login").classList.add("active")}function w(){const e=document.getElementById("login-error"),t=document.getElementById("login-step-1"),s=document.getElementById("login-step-2"),d=document.getElementById("login-step-3");function i(a){t.style.display=a===1?"":"none",s.style.display=a===2?"":"none",d.style.display=a===3?"":"none",["step-1","step-2","step-3"].forEach((n,o)=>{const c=document.getElementById(n);c.className="step-dot",o+1<a&&c.classList.add("done"),o+1===a&&c.classList.add("active")})}document.getElementById("btn-login-1").addEventListener("click",()=>{const a=document.getElementById("input-user").value.trim(),n=document.getElementById("input-pass").value;if(!a||!n){e.classList.add("visible"),e.textContent="Please enter your credentials.";return}e.classList.remove("visible"),i(2)}),document.getElementById("btn-login-2").addEventListener("click",()=>{if(document.getElementById("input-otp").value.replace(/\s/g,"").length<6){e.classList.add("visible"),e.textContent="Enter the 6-digit OTP code.";return}e.classList.remove("visible"),i(3),setTimeout(x,1800)}),document.getElementById("input-otp").addEventListener("input",a=>{const n=a.target,o=n.value.replace(/\D/g,"").slice(0,6);n.value=o.length>3?o.slice(0,3)+" "+o.slice(3):o})}const r=new Map;function x(){document.getElementById("screen-login").classList.remove("active"),document.getElementById("screen-desktop").classList.add("active"),O()}let E=10;function l(e,t,s,d,i,a){const n=r.get(e);if(n)return n.classList.remove("hidden"),v(n),n;const o=document.createElement("div");o.className="window focused",o.id="win-"+e,o.style.width=d+"px",o.style.height=i+"px";const c=r.size*28;return o.style.left=100+c+"px",o.style.top=56+c+"px",o.innerHTML=`
    <div class="window-titlebar" id="tb-${e}">
      <div class="window-controls">
        <div class="wc wc-close" data-win="${e}"></div>
        <div class="wc wc-min"  data-win="${e}"></div>
        <div class="wc wc-max" data-win="${e}"></div>
      </div>
      <div class="window-title">${s} &nbsp;${t}</div>
    </div>
    <div class="window-body">${a}</div>
  `,document.getElementById("windows-mount").appendChild(o),r.set(e,o),o.querySelector(".wc-close").addEventListener("click",()=>L(e)),o.querySelector(".wc-min").addEventListener("click",()=>{o.classList.add("hidden"),p()}),o.querySelector(".wc-max").addEventListener("click",()=>B(o)),o.addEventListener("mousedown",()=>v(o)),A(o,document.getElementById("tb-"+e)),v(o),o}function v(e){document.querySelectorAll(".window").forEach(t=>t.classList.remove("focused")),e.style.zIndex=String(++E),e.classList.add("focused"),p()}function L(e){const t=r.get(e);t&&(t.remove(),r.delete(e),p())}function B(e){e.dataset.maximized?(e.style.left=e.dataset.ox,e.style.top=e.dataset.oy,e.style.width=e.dataset.ow,e.style.height=e.dataset.oh,delete e.dataset.maximized):(e.dataset.ox=e.style.left,e.dataset.oy=e.style.top,e.dataset.ow=e.style.width,e.dataset.oh=e.style.height,e.dataset.maximized="1",e.style.left="8px",e.style.top="calc(var(--panel-h) + 8px)",e.style.width="calc(100vw - 16px)",e.style.height="calc(100vh - var(--panel-h) - var(--dock-h) - 16px)")}function A(e,t){let s=0,d=0,i=0,a=0;t.addEventListener("mousedown",c=>{c.target.classList.contains("wc")||(i=c.clientX,a=c.clientY,document.addEventListener("mousemove",n),document.addEventListener("mouseup",o))});function n(c){s=i-c.clientX,d=a-c.clientY,i=c.clientX,a=c.clientY,e.style.top=e.offsetTop-d+"px",e.style.left=e.offsetLeft-s+"px"}function o(){document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",o)}}function p(){const e=document.getElementById("taskbar-apps"),t=document.querySelector(".linux-dock");e.innerHTML="",r.forEach((s,d)=>{const i=m.find(n=>n.id===d);if(!i)return;const a=document.createElement("button");a.type="button",a.className="taskbar-app-btn"+(s.classList.contains("hidden")?" minimized":" active"),a.title=i.name,a.innerHTML=`<span class="taskbar-app-icon ${i.iconClass}">${i.icon}</span><span class="taskbar-app-label">${i.name}</span><span class="dock-running-dot"></span>`,a.addEventListener("click",()=>{s.classList.contains("hidden")?(s.classList.remove("hidden"),v(s)):s.classList.contains("focused")?(s.classList.add("hidden"),p()):v(s)}),e.appendChild(a)}),t==null||t.classList.toggle("has-running",e.childElementCount>0),b()}function b(){document.querySelectorAll(".dock-pin").forEach(e=>{const t=e.dataset.appId;if(!t)return;const s=r.get(t);e.classList.toggle("running",!!s),e.classList.toggle("active",!!s&&!s.classList.contains("hidden"))})}function C(){return`<div class="sec-dashboard">
    <div class="sec-header">
      <div class="sec-header-left">
        <div class="sec-title">Security Overview</div>
        <div class="sec-subtitle">Real-time threat monitoring · Powered by ShieldOS Engine</div>
      </div>
      <div class="threat-score">
        <div class="threat-score-val">98</div>
        <div class="threat-score-label">Security Score</div>
      </div>
    </div>

    <div class="stat-grid">
      <div class="stat-card">
        <div class="stat-icon">🚫</div>
        <div class="stat-val green">1,247</div>
        <div class="stat-lbl">Threats Blocked Today</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🌐</div>
        <div class="stat-val green">ON</div>
        <div class="stat-lbl">NextDNS Filter</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🔒</div>
        <div class="stat-val blue">Active</div>
        <div class="stat-lbl">LUKS Encryption</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">⚠️</div>
        <div class="stat-val amber">2</div>
        <div class="stat-lbl">Pending Updates</div>
      </div>
    </div>

    <div class="sec-section">
      <div class="sec-section-title">Protection Controls</div>
      <div class="toggle-row">
        <div class="toggle-info">
          <div class="toggle-name">AppArmor Profiles</div>
          <div class="toggle-desc">Browser & Office suite are sandboxed</div>
        </div>
        <div class="toggle-switch" onclick="this.classList.toggle('off')"></div>
      </div>
      <div class="toggle-row">
        <div class="toggle-info">
          <div class="toggle-name">DNS-over-HTTPS (NextDNS)</div>
          <div class="toggle-desc">Encrypts DNS · Blocks phishing domains</div>
        </div>
        <div class="toggle-switch" onclick="this.classList.toggle('off')"></div>
      </div>
      <div class="toggle-row">
        <div class="toggle-info">
          <div class="toggle-name">App Whitelisting</div>
          <div class="toggle-desc">Only approved business apps can execute</div>
        </div>
        <div class="toggle-switch" onclick="this.classList.toggle('off')"></div>
      </div>
      <div class="toggle-row">
        <div class="toggle-info">
          <div class="toggle-name">Audit Logging (auditd)</div>
          <div class="toggle-desc">KDPA-compliant file access tracking</div>
        </div>
        <div class="toggle-switch" onclick="this.classList.toggle('off')"></div>
      </div>
    </div>

    <div class="sec-section">
      <div class="sec-section-title">Recent Threat Log</div>
      <div class="threat-list">
        <div class="threat-item">
          <div class="threat-badge blocked">BLOCKED</div>
          <div>AI Phishing email — fake KRA tax refund (M-Pesa lure)</div>
          <div class="threat-time">09:14</div>
        </div>
        <div class="threat-item">
          <div class="threat-badge blocked">BLOCKED</div>
          <div>Malicious DNS query — known C2 server blacklisted</div>
          <div class="threat-time">08:53</div>
        </div>
        <div class="threat-item">
          <div class="threat-badge quarantine">QUARANTINE</div>
          <div>Suspicious macro in .docx attachment from unknown sender</div>
          <div class="threat-time">08:31</div>
        </div>
        <div class="threat-item">
          <div class="threat-badge blocked">BLOCKED</div>
          <div>Unauthorised app execution attempt — ransomware signature</div>
          <div class="threat-time">07:48</div>
        </div>
      </div>
    </div>
  </div>`}function D(){return`<div class="vault-app">
    <div class="vault-banner">
      <div class="vault-banner-icon">🔐</div>
      <div class="vault-banner-text">
        <h3>ShieldVault — Encrypted Storage</h3>
        <p>AES-256 encrypted containers · Compatible with VeraCrypt · KDPA compliant</p>
      </div>
    </div>

    <div class="sec-section-title">My Containers</div>
    <div class="vault-containers">
      <div class="vault-item unlocked">
        <div class="vault-icon-wrap">📊</div>
        <div class="vault-info">
          <div class="vault-name">KRA Tax Records 2024–25</div>
          <div class="vault-meta">AES-256 · 1.2 GB · Last accessed: Today 09:30</div>
        </div>
        <div class="vault-status-dot"></div>
        <div class="vault-action-btn">Lock</div>
      </div>
      <div class="vault-item locked">
        <div class="vault-icon-wrap">📱</div>
        <div class="vault-info">
          <div class="vault-name">M-Pesa Transaction Archive</div>
          <div class="vault-meta">AES-256 · 340 MB · Last accessed: Yesterday</div>
        </div>
        <div class="vault-status-dot"></div>
        <div class="vault-action-btn" id="vault-unlock-btn">Unlock</div>
      </div>
      <div class="vault-item locked">
        <div class="vault-icon-wrap">👥</div>
        <div class="vault-info">
          <div class="vault-name">Employee Personal Data</div>
          <div class="vault-meta">AES-256 · 780 MB · KDPA Data Category A</div>
        </div>
        <div class="vault-status-dot"></div>
        <div class="vault-action-btn">Unlock</div>
      </div>
      <div class="vault-item locked">
        <div class="vault-icon-wrap">🏦</div>
        <div class="vault-info">
          <div class="vault-name">Client Financial Records</div>
          <div class="vault-meta">AES-256 · 2.1 GB · Encrypted 14 Mar 2026</div>
        </div>
        <div class="vault-status-dot"></div>
        <div class="vault-action-btn">Unlock</div>
      </div>
    </div>

    <div class="vault-unlock-form" id="vault-unlock-form">
      <div class="vault-unlock-title">🔑 Unlock: M-Pesa Transaction Archive</div>
      <div class="form-group" style="margin-bottom:0">
        <label class="form-label">Container Password</label>
        <input class="form-input" type="password" placeholder="Enter container passphrase" />
      </div>
      <div class="btn-row">
        <button class="btn-sec" onclick="document.getElementById('vault-unlock-form').classList.remove('visible')">Cancel</button>
        <button class="btn-sec primary">Unlock Container</button>
      </div>
    </div>

    <div class="sec-section-title" style="margin-top:4px">Storage Usage</div>
    <div class="progress-bar-wrap">
      <div class="progress-label"><span>Vault Storage</span><span>4.4 GB / 50 GB</span></div>
      <div class="prog-bar"><div class="prog-fill" style="width:8.8%"></div></div>
    </div>
    <div class="progress-bar-wrap">
      <div class="progress-label"><span>External Backup Drive</span><span>11.2 GB / 500 GB</span></div>
      <div class="prog-bar"><div class="prog-fill" style="width:2.2%"></div></div>
    </div>
  </div>`}function I(){return`<div class="backup-app">
    <div class="backup-status">
      <div class="backup-status-icon">✅</div>
      <div class="backup-status-info">
        <h3>All backups up to date</h3>
        <p>Last automated backup: Today at 03:00 AM (Restic)</p>
        <div class="detail">Next scheduled: Tomorrow 03:00 · Target: USB Drive + Local NAS</div>
      </div>
    </div>

    <div class="sec-section-title">Recent Backup Snapshots</div>
    <div class="backup-list">
      <div class="backup-entry">
        <div class="backup-entry-icon">💾</div>
        <div class="backup-entry-name">Full System Snapshot</div>
        <div class="backup-entry-size">4.2 GB</div>
        <div class="backup-entry-date">Today 03:00</div>
        <div class="backup-entry-badge complete">Complete</div>
        <div class="backup-entry-badge encrypted">Encrypted</div>
      </div>
      <div class="backup-entry">
        <div class="backup-entry-icon">📁</div>
        <div class="backup-entry-name">Business Documents</div>
        <div class="backup-entry-size">820 MB</div>
        <div class="backup-entry-date">Yesterday 03:00</div>
        <div class="backup-entry-badge complete">Complete</div>
        <div class="backup-entry-badge encrypted">Encrypted</div>
      </div>
      <div class="backup-entry">
        <div class="backup-entry-icon">🔐</div>
        <div class="backup-entry-name">Vault Containers</div>
        <div class="backup-entry-size">4.4 GB</div>
        <div class="backup-entry-date">14 Mar 2026</div>
        <div class="backup-entry-badge complete">Complete</div>
        <div class="backup-entry-badge encrypted">Encrypted</div>
      </div>
      <div class="backup-entry">
        <div class="backup-entry-icon">⚙️</div>
        <div class="backup-entry-name">System Config &amp; AppArmor Profiles</div>
        <div class="backup-entry-size">12 MB</div>
        <div class="backup-entry-date">13 Mar 2026</div>
        <div class="backup-entry-badge complete">Complete</div>
        <div class="backup-entry-badge encrypted">Encrypted</div>
      </div>
    </div>

    <div class="sec-section-title">Backup Destinations</div>
    <div class="toggle-row">
      <div class="toggle-info">
        <div class="toggle-name">USB External Drive (SanDisk 500GB)</div>
        <div class="toggle-desc">Connected · 11.2 GB used · Power-safe journaling enabled</div>
      </div>
      <div class="toggle-switch" onclick="this.classList.toggle('off')"></div>
    </div>
    <div class="toggle-row">
      <div class="toggle-info">
        <div class="toggle-name">Local NAS (192.168.1.100)</div>
        <div class="toggle-desc">Reachable · AES-256 in transit</div>
      </div>
      <div class="toggle-switch" onclick="this.classList.toggle('off')"></div>
    </div>

    <div class="btn-row" style="margin-top:4px">
      <button class="btn-sec" onclick="startBackupDemo(this)">▶ Run Backup Now</button>
      <button class="btn-sec">📋 View Full History</button>
      <button class="btn-sec">🔄 Restore from Snapshot</button>
    </div>
  </div>`}function M(){const e=[22,35,28,45,38,52,40,47,55,48,62,70,58,44,38],t=[60,61,62,63,64,64,65,65,66,67,67,68,68,69,70],s=e.map(i=>`<div class="chart-bar" style="height:${i}%;background:rgba(0,200,83,${.3+i/150})"></div>`).join(""),d=t.map(i=>`<div class="chart-bar" style="height:${i}%;background:rgba(68,138,255,${.3+i/200})"></div>`).join("");return`<div class="sysmon-app">
    <div class="sysmon-grid">
      <div class="sysmon-card">
        <div class="sysmon-card-header">
          <div class="sysmon-card-title">CPU Usage</div>
          <div class="sysmon-card-val" style="color:var(--green)">38%</div>
        </div>
        <div class="mini-chart">${s}</div>
        <div style="font-size:0.68rem;color:var(--text-muted)">Intel Core i5-4590 · 4 cores · 3.30 GHz</div>
      </div>
      <div class="sysmon-card">
        <div class="sysmon-card-header">
          <div class="sysmon-card-title">Memory</div>
          <div class="sysmon-card-val" style="color:var(--blue)">2.8 GB</div>
        </div>
        <div class="mini-chart">${d}</div>
        <div style="font-size:0.68rem;color:var(--text-muted)">4 GB DDR3 · 70% used · Swap: 0 MB</div>
      </div>
      <div class="sysmon-card">
        <div class="sysmon-card-header">
          <div class="sysmon-card-title">Storage</div>
          <div class="sysmon-card-val" style="color:var(--teal)">23 GB</div>
        </div>
        <div class="progress-bar-wrap" style="margin-top:4px">
          <div class="progress-label"><span>System /</span><span>23 / 120 GB</span></div>
          <div class="prog-bar" style="height:8px"><div class="prog-fill" style="width:19%"></div></div>
        </div>
        <div style="font-size:0.68rem;color:var(--text-muted);margin-top:4px">Read-only root · HDD 500GB · ext4</div>
      </div>
      <div class="sysmon-card">
        <div class="sysmon-card-header">
          <div class="sysmon-card-title">Network</div>
          <div class="sysmon-card-val" style="color:var(--amber)">↑ 2.1 KB/s</div>
        </div>
        <div style="font-size:0.72rem;color:var(--text-secondary);margin-top:2px">↓ 14.3 KB/s</div>
        <div style="font-size:0.68rem;color:var(--text-muted);margin-top:6px">Firewall: ACTIVE · Open ports: 0<br>VPN: Connected (Nairobi-01)</div>
      </div>
    </div>

    <div class="sec-section-title">Running Processes</div>
    <div class="process-list">
      <div class="process-row">
        <div class="process-name">shieldd (Security Daemon)</div>
        <div class="process-cpu" style="color:var(--green)">0.2%</div>
        <div class="process-mem">48 MB</div>
      </div>
      <div class="process-row">
        <div class="process-name">librewolf (Hardened Browser)</div>
        <div class="process-cpu" style="color:var(--green)">3.1%</div>
        <div class="process-mem">312 MB</div>
      </div>
      <div class="process-row">
        <div class="process-name">soffice.bin (LibreOffice Calc)</div>
        <div class="process-cpu" style="color:var(--green)">1.4%</div>
        <div class="process-mem">180 MB</div>
      </div>
      <div class="process-row">
        <div class="process-name">auditd (Audit Logger)</div>
        <div class="process-cpu" style="color:var(--green)">0.1%</div>
        <div class="process-mem">12 MB</div>
      </div>
      <div class="process-row">
        <div class="process-name">nextdns (DNS Filter)</div>
        <div class="process-cpu" style="color:var(--green)">0.3%</div>
        <div class="process-mem">22 MB</div>
      </div>
      <div class="process-row">
        <div class="process-name">restic (Backup Agent)</div>
        <div class="process-cpu" style="color:var(--text-muted)">0.0%</div>
        <div class="process-mem">8 MB</div>
      </div>
    </div>
  </div>`}function N(){return`<div class="browser-app" style="height:400px">
    <div class="browser-bar">
      <div class="browser-nav-btn">←</div>
      <div class="browser-nav-btn">→</div>
      <div class="browser-nav-btn">↻</div>
      <div class="browser-url">
        <span class="browser-ssl">🔒</span>
        <span class="browser-url-text">phishing-example-blocked.net</span>
        <span class="browser-shield-badge">🛡 14 trackers blocked</span>
      </div>
    </div>
    <div class="browser-content">
      <div class="browser-blocked">
        <div class="blocked-icon">🚫</div>
        <div class="blocked-title">Site Blocked by ShieldOS</div>
        <div class="blocked-reason">
          This website has been identified as a <strong>phishing site</strong> targeting Kenyan businesses with fake KRA tax refund pages. Access is blocked by NextDNS to protect your organisation.
        </div>
        <div class="blocked-meta">Threat: AI_PHISHING_KRA_LURE · DNS Category: MALICIOUS · Block #1,247 today</div>
      </div>
    </div>
  </div>`}function T(){return`<div style="padding:20px; display:flex; flex-direction:column; gap:14px">
    <div style="font-size:0.9rem;font-weight:600">LibreOffice Business Suite</div>
    <div style="font-size:0.72rem;color:var(--text-muted)">Offline-first · No cloud dependency · Auto-save enabled every 2 min</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:4px">
      ${[["📝","Writer","Word Processor"],["📊","Calc","Spreadsheets"],["📊","Impress","Presentations"],["🗄️","Base","Database"],["📐","Draw","Diagrams"],["📐","Math","Formula Editor"]].map(([e,t,s])=>`
        <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:14px;cursor:pointer;text-align:center;transition:border-color 0.2s" onmouseenter="this.style.borderColor='var(--border-light)'" onmouseleave="this.style.borderColor='var(--border)'">
          <div style="font-size:28px;margin-bottom:6px">${e}</div>
          <div style="font-size:0.82rem;font-weight:500">${t}</div>
          <div style="font-size:0.65rem;color:var(--text-muted)">${s}</div>
        </div>
      `).join("")}
    </div>
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:12px;font-size:0.75rem">
      <div style="font-weight:500;margin-bottom:6px">Recent Files</div>
      ${[["📊","Q1_2026_Financials.ods","Modified today"],["📝","Client_Contract_Mwangi.odt","Modified 2 days ago"],["📊","Inventory_March2026.ods","Modified 3 days ago"]].map(([e,t,s])=>`
        <div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid rgba(42,58,85,0.4);cursor:pointer">
          <span>${e}</span>
          <span style="flex:1;color:var(--text-secondary)">${t}</span>
          <span style="color:var(--text-muted);font-size:0.68rem">${s}</span>
        </div>
      `).join("")}
    </div>
  </div>`}const m=[{id:"security",name:"Security Dashboard",icon:"🛡️",iconClass:"icon-green",category:"sys",desktopShortcut:!0,open:()=>l("security","Security Dashboard","🛡️",700,600,C())},{id:"vault",name:"File Vault",icon:"🔐",iconClass:"icon-blue",category:"biz",desktopShortcut:!0,open:()=>{const e=l("vault","ShieldVault — Encrypted Storage","🔐",580,580,D());return setTimeout(()=>{var t;(t=document.getElementById("vault-unlock-btn"))==null||t.addEventListener("click",()=>{var s;(s=document.getElementById("vault-unlock-form"))==null||s.classList.toggle("visible")})},50),e}},{id:"backup",name:"Backup Manager",icon:"💾",iconClass:"icon-teal",category:"sys",desktopShortcut:!0,open:()=>l("backup","Backup Manager","💾",560,560,I())},{id:"sysmon",name:"System Monitor",icon:"📈",iconClass:"icon-amber",category:"sys",desktopShortcut:!1,open:()=>l("sysmon","System Monitor","📈",600,520,M())},{id:"browser",name:"LibreWolf Browser",icon:"🌐",iconClass:"icon-blue",category:"biz",desktopShortcut:!0,open:()=>l("browser","LibreWolf — Hardened Browser","🌐",640,480,N())},{id:"office",name:"LibreOffice",icon:"📝",iconClass:"icon-amber",category:"biz",desktopShortcut:!0,open:()=>l("office","LibreOffice Business Suite","📝",560,480,T())},{id:"terminal",name:"Terminal",icon:"⌨️",iconClass:"icon-gray",category:"sys",desktopShortcut:!1,open:()=>l("terminal","Terminal (Restricted)","⌨️",520,380,P())},{id:"settings",name:"Settings",icon:"⚙️",iconClass:"icon-gray",category:"sys",desktopShortcut:!1,open:()=>l("settings","System Settings","⚙️",520,440,$())}];function P(){return`<div style="padding:0;background:#0a0e14;height:380px;font-family:var(--mono);font-size:0.78rem;display:flex;flex-direction:column">
    <div style="padding:12px 16px;flex:1;overflow-y:auto;color:#00c853;line-height:1.7">
      <div style="color:var(--text-muted)">ShieldOS Restricted Shell v2.4.1 · AppArmor: ENFORCING</div>
      <div style="color:var(--text-muted);margin-bottom:8px">Type 'help' for allowed commands.</div>
      <div><span style="color:#448aff">amina@shieldos</span><span style="color:var(--text-muted)">:~$</span> uname -a</div>
      <div style="color:var(--text-secondary)">Linux shieldos 6.6.21-hardened #1 SMP PREEMPT x86_64 GNU/Linux</div>
      <div><span style="color:#448aff">amina@shieldos</span><span style="color:var(--text-muted)">:~$</span> shieldos status</div>
      <div style="color:#00c853">✓ AppArmor:    enforcing (14 profiles loaded)</div>
      <div style="color:#00c853">✓ Firewall:    active (0 open ports)</div>
      <div style="color:#00c853">✓ LUKS:        encrypted (AES-XTS-256)</div>
      <div style="color:#00c853">✓ DNS Filter:  NextDNS active</div>
      <div style="color:#00c853">✓ Audit Log:   running (KDPA mode)</div>
      <div style="color:var(--amber)">⚠ Updates:    2 security patches pending</div>
      <div style="margin-top:4px"><span style="color:#448aff">amina@shieldos</span><span style="color:var(--text-muted)">:~$</span> <span style="animation:pulse 1s infinite">█</span></div>
    </div>
  </div>`}function $(){return`<div style="padding:20px;display:flex;flex-direction:column;gap:14px">
    <div style="font-size:0.9rem;font-weight:600">System Settings</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${[["👤","User Accounts","Manage login & 2FA"],["🌐","Network & VPN","Wi-Fi, firewall rules"],["🔒","Privacy & Security","AppArmor, audit logs"],["💾","Storage & Vault","Encryption containers"],["🖨️","Devices","Printers, scanners"],["⚡","Power","Auto-save on power loss"],["🌍","Language","Swahili / English / French"],["🔄","Updates","2 security patches ready"]].map(([e,t,s])=>`
        <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:12px;cursor:pointer;display:flex;align-items:center;gap:10px;transition:border-color 0.2s" onmouseenter="this.style.borderColor='var(--border-light)'" onmouseleave="this.style.borderColor='var(--border)'">
          <span style="font-size:20px">${e}</span>
          <div>
            <div style="font-size:0.8rem;font-weight:500">${t}</div>
            <div style="font-size:0.65rem;color:var(--text-muted)">${s}</div>
          </div>
        </div>
      `).join("")}
    </div>
    <div style="background:rgba(0,200,83,0.06);border:1px solid rgba(0,200,83,0.15);border-radius:var(--radius);padding:12px;font-size:0.75rem">
      <div style="font-weight:500;color:var(--green);margin-bottom:4px">ShieldOS v2.4.1 — Kenya Edition</div>
      <div style="color:var(--text-muted)">Base: Debian 12 Bookworm · Kernel: 6.6.21-hardened · DE: LXQt 1.4</div>
      <div style="color:var(--text-muted)">Licensed under GPL v3 · KDPA Compliant · Built for Kenyan SMEs</div>
    </div>
  </div>`}function O(){z(),U(),p(),R(),G(),K(),H()}function z(){const e=document.getElementById("desktop-icons");e.innerHTML="",m.filter(t=>t.desktopShortcut).forEach(t=>{const s=document.createElement("div");s.className="desktop-icon",s.innerHTML=`
      <div class="desktop-icon-img ${t.iconClass}">${t.icon}</div>
      <div class="desktop-icon-label">${t.name}</div>
    `,s.addEventListener("dblclick",()=>t.open()),s.addEventListener("click",()=>{document.querySelectorAll(".desktop-icon").forEach(d=>d.style.background=""),s.style.background="rgba(255,255,255,0.1)"}),e.appendChild(s)})}function U(){const e=document.getElementById("dock-pins");e.innerHTML="",["browser","vault","security","backup","office"].forEach(s=>{const d=m.find(a=>a.id===s);if(!d)return;const i=document.createElement("button");i.type="button",i.className="dock-pin",i.dataset.appId=d.id,i.title=d.name,i.innerHTML=`<span class="dock-pin-icon ${d.iconClass}">${d.icon}</span>`,i.addEventListener("click",()=>d.open()),e.appendChild(i)}),b()}function R(){const e=document.getElementById("launcher-grid-biz"),t=document.getElementById("launcher-grid-sys");m.forEach(s=>{const d=document.createElement("div");d.className="launcher-app",d.innerHTML=`
      <div class="launcher-app-icon ${s.iconClass}">${s.icon}</div>
      <div class="launcher-app-name">${s.name}</div>
    `,d.addEventListener("click",()=>{s.open(),f()}),(s.category==="biz"?e:t).appendChild(d)})}function K(){document.getElementById("taskbar-launcher").addEventListener("click",()=>{const e=document.getElementById("launcher-overlay");e.classList.toggle("visible"),e.classList.contains("visible")&&setTimeout(()=>{var t;return(t=document.getElementById("launcher-search"))==null?void 0:t.focus()},50)}),document.getElementById("launcher-overlay").addEventListener("click",e=>{e.target.id==="launcher-overlay"&&f()}),document.getElementById("launcher-search").addEventListener("input",e=>{const t=e.target.value.toLowerCase();document.querySelectorAll(".launcher-app").forEach(s=>{var i;const d=((i=s.querySelector(".launcher-app-name").textContent)==null?void 0:i.toLowerCase())||"";s.style.display=d.includes(t)?"":"none"})})}function f(){document.getElementById("launcher-overlay").classList.remove("visible")}function G(){function e(){const t=new Date,s=t.getHours().toString().padStart(2,"0"),d=t.getMinutes().toString().padStart(2,"0"),i=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];document.getElementById("clock-time").textContent=`${s}:${d}`,document.getElementById("clock-date").textContent=`${i[t.getDay()]}, ${a[t.getMonth()]} ${t.getDate()}`}e(),setInterval(e,1e4)}function u(e,t,s="info"){const d=document.getElementById("notif-container"),i=new Date,a=`${i.getHours().toString().padStart(2,"0")}:${i.getMinutes().toString().padStart(2,"0")}`,n=document.createElement("div");n.className="notif"+(s==="warn"?" warn":s==="alert"?" alert":""),n.innerHTML=`
    <div class="notif-header">
      <div class="notif-title">${e}</div>
      <div class="notif-time">${a}</div>
    </div>
    <div class="notif-body">${t}</div>
  `,d.appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transition="opacity 0.5s",setTimeout(()=>n.remove(),500)},5e3)}function H(){setTimeout(()=>u("🛡 Threat Blocked","AI phishing attempt detected and blocked — fake KRA domain query dropped by NextDNS.","info"),3e3),setTimeout(()=>u("⚠️ Security Update Available","2 critical kernel patches ready. Schedule install tonight.","warn"),9e3),setTimeout(()=>u("💾 Backup Complete","Daily backup finished: 4.2 GB encrypted and written to USB drive.","info"),16e3)}window.startBackupDemo=function(e){e.textContent="⏳ Backing up…",e.disabled=!0,setTimeout(()=>{e.textContent="✅ Backup Complete",u("💾 Backup Finished","Manual backup: 4.2 GB encrypted and written to USB drive + NAS.","info")},2500)};w();k();
