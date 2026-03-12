document.addEventListener('DOMContentLoaded', () => {

    /* --- SPLASH SCREEN LOGIC --- */
    const splashScreen = document.getElementById('splashScreen');
    const mainContainer = document.getElementById('mainContainer');

    // Keep splash screen visible for 3 seconds then fade out
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        splashScreen.style.visibility = 'hidden';
        
        // After splash screen starts fading, wait a little and show the main UI
        setTimeout(() => {
            splashScreen.style.display = 'none'; // removing it from flow completely
            mainContainer.classList.add('show');
        }, 800);
        
    }, 3000);


    /* --- DATE & TIME LOGIC --- */
    function updateTime() {
        const datetimeElement = document.getElementById('datetime');
        const now = new Date();
        
        // Format time like: 10:45 AM
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        
        const minutesStr = minutes < 10 ? '0' + minutes : minutes;
        const timeString = hours + ':' + minutesStr + ' ' + ampm;
        
        datetimeElement.textContent = timeString;
    }
    
    // Update time initially and every 10 seconds (no need to run every second since we don't show seconds)
    updateTime();
    setInterval(updateTime, 10000);
});


/* --- KIOSK TAP LOGIC --- */
function handleTap(cardElement, actionId) {
    if (actionId === 'phone') {
        // Open Modal specifically for Phone Directory
        const modal = document.getElementById('phoneCategoryModal');
        modal.classList.add('active');
        return;
    }

    const overlay = document.getElementById('clickOverlay');
    const overlayText = document.getElementById('overlayText');
    
    // Extract the section name from the tapped card
    const sectionName = cardElement.querySelector('h3').textContent;
    
    // Show overlay
    overlay.classList.add('active');
    overlayText.textContent = `${sectionName} වෙත ප්‍රවේශ වෙමින් පවතී...`; // Accessing [Section]...
    
    // Simulate loading internal page (Reset overlay after 2.5 seconds for demo)
    setTimeout(() => {
        overlay.classList.remove('active');
    }, 2500);
}

function closeModal() {
    const modal = document.getElementById('phoneCategoryModal');
    modal.classList.remove('active');
}

/* --- EXTERNAL PAGE VIEW LOGIC --- */
function openExternalPage(url) {
    // Close the modal first
    closeModal();
    
    // Show a brief loading overlay while the iframe prepares
    const overlay = document.getElementById('clickOverlay');
    const overlayText = document.getElementById('overlayText');
    overlay.classList.add('active');
    overlayText.textContent = "තොරතුරු ලබා ගනිමින් පවතී..."; // Fetching information...
    
    setTimeout(() => {
        overlay.classList.remove('active');
        
        // Show iframe container
        const iframeContainer = document.getElementById('iframeContainer');
        const iframe = document.getElementById('externalIframe');
        
        iframe.src = url;
        iframeContainer.classList.add('active');
    }, 1000);
}

function closeExternalPage() {
    const iframeContainer = document.getElementById('iframeContainer');
    const iframe = document.getElementById('externalIframe');
    
    // Hide iframe container
    iframeContainer.classList.remove('active');
    
    // Wait for animation to finish before clearing the iframe source (to save memory)
    setTimeout(() => {
        iframe.src = ""; 
    }, 500); // matches CSS transition time
}