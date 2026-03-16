# 🩺 HemoMetrics Pro - Clinical Hemodynamic Analyzer

**HemoMetrics Pro** is a clean, modern, and clinical-grade web application designed for rapid hemodynamic analysis. It calculates essential cardiovascular metrics like **Mean Arterial Pressure (MAP)** and **Pulse Pressure (PP)** while providing instant clinical insights based on blood pressure and heart rate data.

---

## ✨ Key Features

* **Real-Time Medical Logic**: Instant categorization of vitals into Normal, Elevated, or Hypertension states based on clinical ranges.
* **Modern UI/UX**: Features a dark-themed "Glassmorphism" design with high-contrast white text for maximum readability.
* **Interactive Design**: Includes a neon-glowing action button and professional input field styling.
* **Patient History Log**: A "Recent Scans" sidebar that prepends new entries and keeps a clean, spaced-out record of analyzed patients.
* **Live Clinical Clock**: A real-time digital clock synchronized with the system time for professional reporting.

## 🛠️ Tech Stack

* **HTML5**: Structured with semantic tags for clinical data entry [cite: 2026-03-02].
* **CSS3**: Advanced styling using Flexbox, Glassmorphism, and custom transitions for the "HemoMetrics" branding [cite: 2026-03-02].
* **JavaScript (ES6)**: Handles all hemodynamic calculations and dynamic UI updates without page refreshes.

## 🧮 Medical Logic Used

The application calculates metrics using the following clinical formulas:

1.  **Pulse Pressure (PP)**: 
    $PP = Systolic - Diastolic$
2.  **Mean Arterial Pressure (MAP)**: 
    $MAP = Diastolic + \frac{1}{3}(Pulse Pressure)$

## 🚀 How to Use

1.  Enter the **Patient Name**, **Age**, and **Biological Sex**.
2.  Input the **Systolic/Diastolic** blood pressure and **Heart Rate (BPM)**.
3.  Click **Analyze Vitals** to generate the report.
4.  View the detailed breakdown and medical insight in the results section.

---
*Developed as part of a Web Development journey focusing on HTML, CSS, and JavaScript Logic.*
