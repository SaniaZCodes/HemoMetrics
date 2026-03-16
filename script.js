// 1. Live Clock
function updateClock() {
    const now = new Date();
    document.getElementById('live-clock').textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// 2. Main Logic
const vitalsForm = document.getElementById('vitals-form');

vitalsForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('patient-name').value;
    const sys = parseInt(document.getElementById('systolic').value);
    const dia = parseInt(document.getElementById('diastolic').value);

    if (!name || isNaN(sys) || isNaN(dia)) {
        alert("Please enter patient name and valid numbers.");
        return;
    }

    const pp = sys - dia;
    const map = Math.round(dia + (pp / 3));

    let category = "NORMAL";
    let color = "#4ade80"; 
    let insight = "Vitals are within clinical range. Maintain current lifestyle and healthy diet.";

    if (sys >= 140 || dia >= 90) {
        category = "HYPERTENSION";
        color = "#f87171";
        insight = "High blood pressure detected. Clinical consultation and monitoring advised.";
    } else if (sys >= 120 || dia >= 80) {
        category = "ELEVATED";
        color = "#facc15";
        insight = "Blood pressure is slightly high. Consider reducing sodium and increasing activity.";
    }

    // --- FIX: Update ONLY the number to avoid double mmHg ---
    document.getElementById('map-value').textContent = map;
    document.getElementById('pp-value').textContent = pp;
    
    const badge = document.getElementById('status-badge');
    badge.textContent = `STATUS: ${category}`;
    badge.style.backgroundColor = color;
    badge.style.color = "#0f172a"; 

    document.getElementById('clinical-insight-text').textContent = insight;
    document.getElementById('results-card').removeAttribute('hidden');

    addHistoryEntry(name, sys, dia, map, category, color);
});

// 3. Spaced History (Exactly like "Ali" and "Saim" screenshots)
function addHistoryEntry(name, sys, dia, map, category, color) {
    const historyList = document.getElementById('history-list');
    const li = document.createElement('li');
    li.className = "history-item";
    li.style.borderLeft = `4px solid ${color}`;
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    li.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <strong style="color: white; font-size: 1.1rem;">${name}</strong>
            <span style="color: #94a3b8; font-size: 0.75rem; font-weight: 600;">${time}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 15px; font-size: 0.9rem; color: #cbd5e1;">
            <span>${sys}/${dia} <small style="opacity:0.6;">mmHg</small></span>
            <span style="opacity: 0.2;">|</span>
            <span>MAP: <strong>${map}</strong></span>
            <span style="opacity: 0.2;">|</span>
            <span style="color: ${color}; font-weight: 800; text-transform: uppercase; font-size: 0.75rem;">${category}</span>
        </div>
    `;
    
    historyList.prepend(li);
}