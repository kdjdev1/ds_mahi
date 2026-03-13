/* =========================================================
   APPLICATION DATA (Based on physical file listings)
========================================================= */

const DATA = {
    bgImages: [
        "besama 3.jpg",
        "damba.jpg",
        "mahiyangana town.jpg",
        "mahiyangna temple.jpg",
        "sorabora wewa3.jpg"
    ],
    gallery: {
        grama: [
            "Aluyatawela.jpg", "Haddathtahwa.jpg", "Mahiyangana Town.jpg", "Millathtawa.jpg", 
            "Rotalawela.jpg", "THalangamuwa.jpg", "aluththarama.jpg", "bathalayaya.jpg", 
            "belaganwewa.jpg", "beligalla.jpg", "dambagolla.jpg", "dambana.jpg", 
            "dambarawa.jpg", "dehigolla.jpg", "diwulapalass.jpg", "elawela.jpg", 
            "galporuyaya.jpg", "ginnoruwa.jpg", "girandurukotte.jpg", "hebarawa.jpg", 
            "hobariyawa.jpg", "kukulapola.jpg", "madayaya.jpg", "mapakadawewa.jpg", 
            "meegahahena.jpg", "pahala rathkida.jpg", "pangaragammana.jpg", "pooja nagaraya.jpg", 
            "senanigama.jpg", "sorabora.jpg", "theldeniyaya.jpg", "ulhitiya.jpg", 
            "virangama.jpg", "wawgampaha.jpg", "wewaththa.jpg"
        ],
        eco: [
            "අලුත්තරම.jpg", "අලුයටවෙල.jpg", "ඇලෑවෙල.jpg", "උල්හිටිය.jpg", 
            "කුකුළාපොළ.jpg", "ගල්පොරුයාය.jpg", "ගින්නෝරුව.jpg", "ගිරාදුරුකෝට්ටේ.jpg", 
            "තලංගමුව.jpg", "තෙල්දෙණියාය.jpg", "දම්බරාව.jpg", "දඹගොල්ල.jpg", 
            "දඹාන.jpg", "දිවුලපැලැස්ස.jpg", "දෙහිගොල්ල.jpg", "පඟරගම්මන.jpg", 
            "පහළ රත්කිඳ.jpg", "පුජා නගරය .jpg", "බතලයාය.jpg", "බෙලගන්වැව.jpg", 
            "බෙලිගල්ල.jpg", "මහියංගන තගරය.jpg", "මාපාකඩවැව.jpg", "මැදයාය.jpg", 
            "මිල්ලැත්තෑව.jpg", "මීගහහේන.jpg", "රොටලවෙල.jpg", "වැව්ගම්පහ.jpg", 
            "විරාණගම.jpg", "වේවත්ත.jpg", "සේනානිගම.jpg", "සොරබොර.jpg", 
            "හද්දත්තාව.jpg", "හෙබරව.jpg", "හොබරියාව.jpg"
        ],
        staff: [
            "ප්‍රාදේශීය ලේකම්.jpg",
            "සහකාර ප්‍රාදේශීය ලේකම්.jpg",
            "ගණකාධීකාරි.jpg",
            "අධ්‍යක්ෂ(ක්‍රම සම්පාදන).jpg",
            "පරිපාලන නිලධාරි.jpg",
            "පරිපාලන ග්‍රාම නිලධාරි.jpg"
        ]
    },
    translations: {
        "Aluyatawela": "අලුයටවෙල",
        "Haddathtahwa": "හද්දත්තාව",
        "Mahiyangana Town": "මහියංගන නගරය",
        "Millathtawa": "මිල්ලත්තෑව",
        "Rotalawela": "රොටලවෙල",
        "THalangamuwa": "තලංගමුව",
        "aluththarama": "අලුත්තරම",
        "bathalayaya": "බතලායාය",
        "belaganwewa": "බෙලගන්වැව",
        "beligalla": "බෙලිගල්ල",
        "dambagolla": "දඹගොල්ල",
        "dambana": "දඹාන",
        "dambarawa": "දම්බරාව",
        "dehigolla": "දෙහිගොල්ල",
        "diwulapalass": "දිවුලපැලැස්ස",
        "elawela": "ඇලෑවෙල",
        "galporuyaya": "ගල්පෝරුයාය",
        "ginnoruwa": "ගින්නෝරුව",
        "girandurukotte": "ගිරාඳුරුකෝට්ටේ",
        "hebarawa": "හෙබරව",
        "hobariyawa": "හොබරියාව",
        "kukulapola": "කුකුළාපොල",
        "madayaya": "මැදයාය",
        "mapakadawewa": "මාපාකඩවැව",
        "meegahahena": "මීගහහේන",
        "pahala rathkida": "පහළ රත්කිඳ",
        "pangaragammana": "පඟරගම්මන",
        "pooja nagaraya": "පූජා නගරය",
        "senanigama": "සේනානිගම",
        "sorabora": "සොරබොර",
        "theldeniyaya": "තෙල්දෙනියාය",
        "ulhitiya": "උල්හිටිය",
        "virangama": "විරාණගම",
        "wawgampaha": "වැවිගම්පහ",
        "wewaththa": "වේවත්ත"
    }
};

/* =========================================================
   INITIALIZATION & BACKGROUND ENGINE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Setup Time and Date Engine
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // 2. Setup Background Rotator
    initBackgroundRotator();

    // 3. Handle Splash Screen sequence
    setTimeout(() => {
        document.getElementById('splashScreen').classList.remove('active');
        document.getElementById('mainContainer').classList.add('ready');
    }, 3200);

});

// Setup dynamic background using Mahiyangana images
let currentBgIndex = 0;
function initBackgroundRotator() {
    const slider = document.getElementById('bgSlider');
    if(DATA.bgImages.length === 0) return;
    
    // Set initial
    setBgImage(slider, DATA.bgImages[0]);

    // Rotate every 10 seconds
    if(DATA.bgImages.length > 1) {
        setInterval(() => {
            currentBgIndex = (currentBgIndex + 1) % DATA.bgImages.length;
            setBgImage(slider, DATA.bgImages[currentBgIndex]);
        }, 10000);
    }
}

function setBgImage(element, filename) {
    element.style.backgroundImage = `url('images/Mahiyangana/${encodeURIComponent(filename)}')`;
}

// Clock updates
function updateDateTime() {
    const now = new Date();
    
    // Format Time 
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('currentTime').textContent = `${hours}:${minutes} ${ampm}`;

    // Format Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').textContent = now.toLocaleDateString('si-LK', options);
}

/* =========================================================
   VIEW NAVIGATION ENGINE
========================================================= */

function switchView(viewId) {
    // Hide all
    const views = document.querySelectorAll('.view-section');
    views.forEach(view => {
        view.classList.remove('active');
    });

    // Show target
    const target = document.getElementById(viewId);
    if(target) {
        target.classList.add('active');
    }
}

/* =========================================================
   MODAL ENGINE
========================================================= */

function openModal(type) {
    if(type === 'developmentInProgress') {
        document.getElementById('generalModal').classList.add('active');
    }
}

function closeModal(modalId) {
    if(!modalId) {
        // close all
        document.querySelectorAll('.modal-overlay').forEach(el => el.classList.remove('active'));
    } else {
        const modal = document.getElementById(modalId);
        if(modal) modal.classList.remove('active');
    }
}

/* =========================================================
   DYNAMIC GALLERY GENERATOR
========================================================= */

function loadGallery(categoryKey, categoryName) {
    const galleryContainer = document.getElementById('galleryContainer');
    galleryContainer.innerHTML = ''; // Clear existing
    document.getElementById('galleryTitle').textContent = categoryName;

    // Determine Folder Name
    let folderPath = '';
    if(categoryKey === 'grama') folderPath = 'images/ග්‍රාම නිලධාරීන්/';
    else if(categoryKey === 'eco') folderPath = 'images/ආර්ථික සංවර්ධන නිලධාරීන්/';
    else if(categoryKey === 'staff') folderPath = 'images/මාණ්ඩලික නිලධාරි/';

    let images = DATA.gallery[categoryKey] || [];
    
    // Sort alphabetically by the translated Sinhala names (Except for Staff which has a custom hierarchy order)
    if (categoryKey !== 'staff') {
        images = [...images].sort((a, b) => {
            let nameA = a.replace(/\.jpg|\.jpeg|\.png/gi, '');
            let nameB = b.replace(/\.jpg|\.jpeg|\.png/gi, '');
            let titleA = DATA.translations[nameA] || (nameA.charAt(0).toUpperCase() + nameA.slice(1));
            let titleB = DATA.translations[nameB] || (nameB.charAt(0).toUpperCase() + nameB.slice(1));
            return titleA.localeCompare(titleB, 'si');
        });
    }

    if(images.length === 0) {
        galleryContainer.innerHTML = `<div class="gallery-empty">
            <i class="fa-solid fa-folder-open" style="font-size: 3rem; margin-bottom: 1rem; color: #cbd5e1;"></i><br>
            මෙම කාණ්ඩය සඳහා තොරතුරු යාවත්කාලීන කරමින් පවතී.
        </div>`;
        switchView('galleryView');
        return;
    }

    // Generate Cards
    images.forEach(filename => {
        // Extract name from filename (remove .jpg, uppercase first letter)
        let rawName = filename.replace('.jpg', '').replace('.jpeg', '').replace('.png', '');
        
        // Translate to Sinhala if found, otherwise simple formatting
        let displayTitle = DATA.translations[rawName] || (rawName.charAt(0).toUpperCase() + rawName.slice(1));
        
        const btn = document.createElement('button');
        btn.className = 'wasam-btn';
        btn.setAttribute('onclick', `showFullImage('${folderPath}${filename}', '${displayTitle}')`);
        btn.innerHTML = `
            ${displayTitle}
            <i class="fa-solid fa-chevron-right"></i>
        `;
        galleryContainer.appendChild(btn);
    });

    // Reset Scroll
    galleryContainer.scrollTop = 0;

    // Switch View
    switchView('galleryView');
}

/* =========================================================
   FULL IMAGE VIEWER ENGINE
========================================================= */

function showFullImage(imgPath, title) {
    document.getElementById('fullImageTitle').textContent = title;
    document.getElementById('fullImageElement').src = imgPath;
    
    // reset animation by reflowing
    const imgEl = document.getElementById('fullImageElement');
    imgEl.style.animation = 'none';
    imgEl.offsetHeight; /* trigger reflow */
    imgEl.style.animation = null; 

    switchView('fullImageView');
}

/* Kiosk interaction resetting mechanism (returns to home after 2 mins inactivity) */
let idleTimer;
function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
        // Return to main dashboard and close modals on idle
        switchView('dashboardView');
        closeModal();
    }, 120000); // 120 seconds = 2 mins
}
// Attach to common interactions
['touchstart', 'click', 'mousemove', 'scroll'].forEach(evt => {
    document.addEventListener(evt, resetIdleTimer, {passive: true});
});
resetIdleTimer();

/* =========================================================
   FEEDBACK SUBMISSION ENGINE (EMAIL INTEGRATION)
========================================================= */
function submitFeedback(e) {
    e.preventDefault();
    
    const btn = document.getElementById('fbSubmitBtn');
    const originalText = btn.innerHTML;
    
    // Show loading state
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> යවමින් පවතී...';
    btn.disabled = true;

    const form = document.getElementById('feedbackForm');
    const formData = new FormData(form);
    
    // Extract data
    const data = {};
    formData.forEach((value, key) => { data[key] = value });

    // Send Form Data to Email via Free FormSubmit API
    fetch("https://formsubmit.co/ajax/mahidsoffice@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: `New ${data.feedbackType} Kiosk Submission from ${data.name}`,
            "පෝරමයේ වර්ගය (Type)": data.feedbackType,
            "නම (Name)": data.name,
            "පැමිණි කාරණය (Reason)": data.reason,
            "විස්තරය (Details)": data.details,
            "තෘප්තිමත්භාවය (Satisfaction)": data.satisfaction,
            "_replyto": "no-reply@kiosk.ds.gov.lk"
        })
    })
    .then(response => response.json())
    .then(result => {
        // Success animation
        btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> අදහස සාර්ථකව යොමු කරන ලදී!';
        btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        setTimeout(() => {
            // Reset and return
            form.reset();
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.disabled = false;
            switchView('dashboardView');
        }, 3000);
    })
    .catch(error => {
        console.error("Submission Error:", error);
        // Error animation
        btn.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> දෝෂයකි! කරුණාකර නැවත උත්සහ කරන්න.';
        btn.style.background = 'linear-gradient(135deg, #ef4444, #b91c1c)';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.disabled = false;
        }, 3000);
    });
}
