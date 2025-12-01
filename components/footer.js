// Footer Component
class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-gray-800 text-white">
                <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div class="col-span-1 md:col-span-2">
                            <h3 class="text-2xl font-bold text-green-400 mb-4">WasteMatch</h3>
                            <p class="text-gray-300 mb-4 max-w-md">
                                The platform connecting waste generators with haulers and buyers. Save on disposal costs while finding the perfect match for your loads.
                            </p>
                            <div class="flex space-x-4">
                                <a href="#" class="text-gray-400 hover:text-green-400 transition duration-300">
                                    <i data-feather="facebook" class="w-5 h-5"></i>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-green-400 transition duration-300">
                                    <i data-feather="twitter" class="w-5 h-5"></i>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-green-400 transition duration-300">
                                    <i data-feather="linkedin" class="w-5 h-5"></i>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-green-400 transition duration-300">
                                    <i data-feather="instagram" class="w-5 h-5"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-4">Services</h4>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-300 hover:text-green-400 transition duration-300">Waste Matching</a></li>
                                <li><a href="#" class="text-gray-300 hover:text-green-400 transition duration-300">Fill Brokerage</a></li>
                                <li><a href="#" class="text-gray-300 hover:text-green-400 transition duration-300">Hauler Network</a></li>
                                <li><a href="#" class="text-gray-300 hover:text-green-400 transition duration-300">Compliance Support</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-4">Support</h4>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-300 hover:text-green-400 transition duration-300">Help Center</a></li>
                                <li><a href="#" class="text-gray-300 hover:text-green-400 transition duration-300">Contact Us</a></li>
                                <li><a href="#" class="text-gray-300 hover:text-green-400 transition duration-300">Privacy Policy</a></li>
                                <li><a href="#" class="text-gray-300 hover:text-green-400 transition duration-300">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="border-t border-gray-700 mt-8 pt-8">
                        <div class="flex flex-col md:flex-row justify-between items-center mb-6">
                            <p class="text-gray-400 text-sm">
                                © 2025 WasteMatch. All rights reserved.
                            </p>
                            <div class="flex space-x-6 mt-4 md:mt-0">
                                <a href="#legal" onclick="toggleLegal(); return false;" class="text-gray-400 hover:text-green-400 text-sm transition duration-300 cursor-pointer">Legal</a>
                                <a href="#privacy" onclick="window.open('privacy.html', '_blank'); return false;" class="text-gray-400 hover:text-green-400 text-sm transition duration-300">Privacy</a>
                                <a href="#terms" onclick="window.open('terms.html', '_blank'); return false;" class="text-gray-400 hover:text-green-400 text-sm transition duration-300">Terms</a>
                                <a href="#cookies" class="text-gray-400 hover:text-green-400 text-sm transition duration-300">Cookies</a>
                            </div>
                        </div>
                        
                        <!-- Collapsible Legal Disclaimers -->
                        <div id="legal-disclaimer" class="hidden border-t border-gray-700 pt-6 mt-6">
                            <div class="max-w-4xl mx-auto">
                                <h4 class="text-sm font-semibold text-gray-300 mb-4">Important Legal Information</h4>
                                <div class="text-xs text-gray-400 space-y-3 leading-relaxed">
                                    <p>
                                        <strong class="text-gray-300">Beta Platform Notice:</strong> WasteMatch is currently in beta. While we strive for accuracy, we make no guarantees on match availability, response times, or transaction completion rates. The platform is provided "as is" for testing and validation purposes.
                                    </p>
                                    <p>
                                        <strong class="text-gray-300">EA Regulations Compliance & Verification:</strong> All waste transactions conducted through WasteMatch are subject to UK Environment Agency (EA) waste regulations. All users must be verified with valid EA waste carrier licenses, Companies House registration, and applicable environmental permits before matching. WasteMatch verifies users against public registers but users remain responsible for ensuring ongoing compliance. Verification is mandatory—bypassing verification voids liability protection.
                                    </p>
                                    <p>
                                        <strong class="text-gray-300">Privacy Policy:</strong> We do not sell your personal data to third parties. Data is used solely for platform matching, communication, and compliance purposes. Full details available in our <a href="#privacy" class="text-green-400 hover:text-green-300 underline">Privacy Policy</a>.
                                    </p>
                                    <p>
                                        <strong class="text-gray-300">Terms of Service:</strong> Off-platform deals (arranging transactions outside WasteMatch after matching) are prohibited and may result in account suspension or permanent ban. All transactions must be completed through the platform for safety, compliance tracking, and dispute resolution. Full terms available in our <a href="#terms" class="text-green-400 hover:text-green-300 underline">Terms of Service</a>.
                                    </p>
                                    <p>
                                        <strong class="text-gray-300">Liability Disclaimer:</strong> WasteMatch acts as a matching platform only. We are not liable for disputes between users, injuries or accidents during waste handling, non-compliance with EA regulations, environmental damage, or any losses arising from transactions. Users should consult qualified professionals (waste consultants, solicitors, insurers) for advice on waste handling, legal compliance, and risk management.
                                    </p>
                                    <p>
                                        <strong class="text-gray-300">GDPR Compliance:</strong> We process personal data in accordance with UK GDPR. You have the right to access, rectify, or delete your data. Contact us for data requests. Our full privacy policy explains your rights and our data handling practices.
                                    </p>
                                    <p class="text-gray-500 italic">
                                        Last updated: January 2025. This is a demonstration platform. For questions, contact: legal@wastematch.co.uk (placeholder email).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);

