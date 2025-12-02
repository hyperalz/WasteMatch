// Main JavaScript functionality for WasteMatch

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeComponents();
    
    // Add smooth scrolling for anchor links
    addSmoothScrolling();
    
    // Add scroll animations
    addScrollAnimations();
    
    // Add form handling
    addFormHandling();
    
    // Initialize modal
    initializeModal();
});

function initializeComponents() {
    // Initialize feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
    
    // Add loading states to buttons
    addLoadingStates();
}

function addSmoothScrolling() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function addScrollAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.bg-white, .hero-content').forEach(el => {
        observer.observe(el);
    });
}

function addLoadingStates() {
    // Add loading states to CTA buttons
    document.querySelectorAll('a[href="#contact"]').forEach(button => {
        button.addEventListener('click', function(e) {
            // Add loading state
            this.classList.add('loading');
            const originalText = this.textContent;
            this.innerHTML = '<i data-feather="loader" class="w-4 h-4 animate-spin mr-2"></i>Loading...';
            feather.replace();
            
            // Simulate loading (replace with actual form submission)
            setTimeout(() => {
                this.classList.remove('loading');
                this.textContent = originalText;
            }, 1000);
        });
    });
}

function addFormHandling() {
    // Handle contact form submissions (when implemented)
    const contactForms = document.querySelectorAll('form');
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add form validation
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.email || !data.name) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }
            
            // Show success message
            showNotification('Thank you! We\'ll be in touch soon.', 'success');
            this.reset();
        });
    });
}

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');
    const contactForm = document.getElementById('contactForm');
    
    // Open modal when clicking Get Started buttons
    document.querySelectorAll('a[href="#contact"]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });
    
    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Handle form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.email || !data.name || !data.phone) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }
            
            if (!data.consent) {
                showNotification('Please agree to be contacted', 'error');
                return;
            }
            
            // Show success message
            showNotification('Thank you! We\'ll contact you within 24 hours to set up your account.', 'success');
            
            // Close modal and reset form
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
            this.reset();
            
            // In a real implementation, you'd send this data to your backend
            console.log('Lead captured:', data);
        });
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add scroll-based navbar styling
window.addEventListener('scroll', debounce(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.classList.add('bg-opacity-95', 'backdrop-blur-sm');
        } else {
            navbar.classList.remove('bg-opacity-95', 'backdrop-blur-sm');
        }
    }
}, 10));

// Add pricing card hover effects
document.querySelectorAll('.bg-white.p-8.rounded-xl.shadow-lg').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.classList.add('card-hover');
    });
    
    card.addEventListener('mouseleave', function() {
        this.classList.remove('card-hover');
    });
});

// Toggle legal disclaimer
function toggleLegal() {
    const legalSection = document.getElementById('legal-disclaimer');
    if (legalSection) {
        legalSection.classList.toggle('hidden');
        
        // Smooth scroll to legal section
        if (!legalSection.classList.contains('hidden')) {
            setTimeout(() => {
                legalSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        }
    }
}

// Make toggleLegal available globally
window.toggleLegal = toggleLegal;

// ROI Calculator functionality
function initializeROICalculator() {
    const materialType = document.getElementById('materialType');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeValue = document.getElementById('volumeValue');
    const disposalCost = document.getElementById('disposalCost');
    const monthlySavings = document.getElementById('monthlySavings');
    const carbonReduction = document.getElementById('carbonReduction');
    const hoursSaved = document.getElementById('hoursSaved');
    
    if (!materialType || !volumeSlider) return;
    
    // Material pricing data (per ton)
    const materialData = {
        concrete: {
            landfill: 126.15,
            matched: 21.5, // average of £18-25
            carbonPerTon: 500, // kg CO₂e
            hoursPer100Ton: 3
        },
        wood: {
            landfill: 126.15,
            matched: 60, // average of £45-75
            carbonPerTon: 800,
            hoursPer100Ton: 3.5
        },
        metals: {
            landfill: 126.15,
            matched: 185, // average of £120-250
            carbonPerTon: 1200,
            hoursPer100Ton: 4
        },
        plastics: {
            landfill: 126.15,
            matched: 300, // average of £200-400
            carbonPerTon: 1500,
            hoursPer100Ton: 4.5
        }
    };
    
    function updateCalculator() {
        const material = materialType.value;
        const volume = parseInt(volumeSlider.value);
        const data = materialData[material];
        
        if (!data) return;
        
        // Update volume display
        volumeValue.textContent = volume;
        
        // Update disposal cost
        disposalCost.value = `£${data.landfill.toFixed(2)}`;
        
        // Calculate savings
        const savingsPerTon = data.landfill - data.matched;
        const totalSavings = savingsPerTon * volume;
        
        // Calculate carbon reduction
        const carbonSaved = data.carbonPerTon * volume;
        
        // Calculate hours saved
        const hoursSavedCalc = (data.hoursPer100Ton / 100) * volume;
        
        // Update displays
        monthlySavings.textContent = `£${totalSavings.toLocaleString('en-GB', {maximumFractionDigits: 0})}`;
        carbonReduction.textContent = carbonSaved.toLocaleString('en-GB', {maximumFractionDigits: 0});
        hoursSaved.textContent = hoursSavedCalc.toFixed(1);
    }
    
    // Event listeners
    materialType.addEventListener('change', updateCalculator);
    volumeSlider.addEventListener('input', updateCalculator);
    
    // Initial calculation
    updateCalculator();
}

// Live Chat Widget
function initializeLiveChat() {
    // Create chat widget HTML
    const chatWidget = document.createElement('div');
    chatWidget.id = 'liveChatWidget';
    chatWidget.innerHTML = `
        <div id="chatButton" class="fixed bottom-6 right-6 z-50 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-full p-4 shadow-lg cursor-pointer transition-all duration-300 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
        </div>
        <div id="chatWindow" class="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white rounded-xl shadow-2xl hidden flex flex-col">
            <div class="bg-[#1E40AF] text-white p-4 rounded-t-xl flex justify-between items-center">
                <h3 class="font-semibold">Ask about your specific material</h3>
                <button id="closeChat" class="text-white hover:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="flex-1 p-4 overflow-y-auto bg-gray-50">
                <div class="mb-4">
                    <div class="bg-white rounded-lg p-3 shadow-sm">
                        <p class="text-sm text-gray-700">Hi! I'm here to help you find the best prices for your materials. What type of waste do you have?</p>
                    </div>
                </div>
            </div>
            <div class="p-4 border-t border-gray-200">
                <form id="chatForm" class="flex gap-2">
                    <input type="text" placeholder="Type your message..." class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22C55E] text-sm">
                    <button type="submit" class="bg-[#22C55E] hover:bg-[#16a34a] text-white px-4 py-2 rounded-lg transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    `;
    
    document.body.appendChild(chatWidget);
    
    // Chat functionality
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const closeChat = document.getElementById('closeChat');
    const chatForm = document.getElementById('chatForm');
    
    chatButton.addEventListener('click', () => {
        chatWindow.classList.toggle('hidden');
    });
    
    closeChat.addEventListener('click', () => {
        chatWindow.classList.add('hidden');
    });
    
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = chatForm.querySelector('input[type="text"]');
        const message = input.value.trim();
        
        if (!message) return;
        
        // Add user message
        const chatMessages = chatWindow.querySelector('.overflow-y-auto');
        const userMessage = document.createElement('div');
        userMessage.className = 'mb-4 flex justify-end';
        userMessage.innerHTML = `
            <div class="bg-[#22C55E] text-white rounded-lg p-3 shadow-sm max-w-xs">
                <p class="text-sm">${message}</p>
            </div>
        `;
        chatMessages.appendChild(userMessage);
        
        // Simulate response
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'mb-4';
            botMessage.innerHTML = `
                <div class="bg-white rounded-lg p-3 shadow-sm">
                    <p class="text-sm text-gray-700">Thanks for your question! Our team will get back to you within 24 hours. In the meantime, you can <a href="#waste-audit" class="text-[#22C55E] underline">book a free waste audit</a> to see your potential savings.</p>
                </div>
            `;
            chatMessages.appendChild(botMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
        
        input.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    });
}

// Initialize new features
document.addEventListener('DOMContentLoaded', function() {
    initializeROICalculator();
    initializeLiveChat();
    
    // Analytics Event Tracking
    // Add these tracking calls to your analytics platform (Google Analytics, etc.)
    setupAnalyticsTracking();
});

// Analytics Event Tracking Setup
function setupAnalyticsTracking() {
    // Track CTA clicks
    document.querySelectorAll('a[href="#waste-audit"], a[href="#contact"]').forEach(button => {
        button.addEventListener('click', function() {
            // Example: gtag('event', 'cta_click', { 'cta_location': this.textContent });
            console.log('CTA clicked:', this.textContent);
        });
    });
    
    // Track calculator interactions
    const calculator = document.getElementById('materialType');
    if (calculator) {
        calculator.addEventListener('change', function() {
            // Example: gtag('event', 'calculator_material_change', { 'material': this.value });
            console.log('Calculator material changed:', this.value);
        });
    }
    
    // Track form submissions
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function() {
            // Example: gtag('event', 'form_submit', { 'form_name': this.id });
            console.log('Form submitted:', this.id);
        });
    });
    
    // Track chat widget opens
    const chatButton = document.getElementById('chatButton');
    if (chatButton) {
        chatButton.addEventListener('click', function() {
            // Example: gtag('event', 'chat_open');
            console.log('Chat widget opened');
        });
    }
    
    // Track scroll depth (25%, 50%, 75%, 100%)
    let scrollDepths = [25, 50, 75, 100];
    let trackedDepths = [];
    
    window.addEventListener('scroll', debounce(() => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        
        scrollDepths.forEach(depth => {
            if (scrollPercent >= depth && !trackedDepths.includes(depth)) {
                trackedDepths.push(depth);
                // Example: gtag('event', 'scroll_depth', { 'depth': depth });
                console.log('Scroll depth:', depth + '%');
            }
        });
    }, 500));
    
    // Track time on page
    let startTime = Date.now();
    window.addEventListener('beforeunload', function() {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        // Example: gtag('event', 'time_on_page', { 'seconds': timeOnPage });
        console.log('Time on page:', timeOnPage, 'seconds');
    });
}

