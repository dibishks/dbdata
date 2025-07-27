// Header Component Loader
document.addEventListener('DOMContentLoaded', function() {
    // Determine header class based on page
    const isIndexPage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
    const headerClass = isIndexPage ? 'header d-flex align-items-center fixed-top' : 'header d-flex align-items-center sticky-top';
    
    // Create header HTML content
    const headerHTML = `
    <header id="header" class="${headerClass}">
        <div class="container-fluid container-xl position-relative d-flex align-items-center">

            <a href="index.html" class="logo d-flex align-items-center me-auto">
                <!-- Uncomment the line below if you also wish to use an image logo -->
                <img src="assets/img/logo.png" alt="">
                <h1 class="sitename">DbData</h1>
            </a>

            <nav id="navmenu" class="navmenu">
                <ul>
                    <li><a href="index.html#hero">Home<br></a></li>
                    <li><a href="index.html#about">About</a></li>
                    <li><a href="index.html#services">Services</a></li>
                    <li><a href="feature-details.html">Features</a></li>
                    <!-- <li><a href="blog.html">Blog</a></li>-->
                    
                    <li class="listing-dropdown"><a href="data-services.html"><span>Data Services</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                            <li>
                                <a href="data-services.html">Business & Corporate Data</a>
                                <a href="data-services.html">Manufacturing & Industrial Data</a>
                                <a href="data-services.html">Construction & Building Materials</a>
                            </li>
                            <li>
                                <a href="data-services.html">Healthcare & Medical Sector</a>
                                <a href="data-services.html">FMCG, Food & Hospitality</a>
                                <a href="data-services.html">Education & Professional Services</a>
                            </li>
                            <li>
                                <a href="data-services.html">Consumer & Lifestyle Businesses</a>
                                <a href="data-services.html">Logistics & Warehousing</a>
                                <a href="data-services.html">Environmental & Utility Services</a>
                            </li>
                            <li>
                                <a href="data-services.html">Specialty Industrial Segments</a>
                                <a href="data-services.html">Media, Printing & Publishing</a>
                                <a href="data-services.html">Events & Trade Shows</a>
                            </li>
                        
                        </ul>
                    </li>
                    <li class="listing-dropdown"><a href="use-cases.html"><span>Use cases</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                            <li>
                                <a href="use-cases.html">Customer Intelligence & Targeting</a>
                                <a href="use-cases.html">Advertising & Campaign Analytics</a>
                                <a href="use-cases.html">Lead & Account Intelligence</a>
                            </li>
                            <li>
                                <a href="use-cases.html">Sales Enablement</a>
                                <a href="use-cases.html">Trading & Investment Intelligence</a>
                                <a href="use-cases.html">Risk & Compliance Analytics</a>
                            </li>
                            <li>
                                <a href="use-cases.html">Location & Spatial Intelligence</a>
                                <a href="use-cases.html">Retail & Real Estate Intelligence</a>
                                <a href="use-cases.html">Product & Market Intelligence</a>
                            </li>
                            <li>
                                <a href="use-cases.html"> Consumer & Purchase Behavior</a>
                                <a href="use-cases.html">Healthcare & Life Sciences</a>
                                <a href="use-cases.html">Emerging Technologies</a>
                            </li>
                        
                        </ul>
                    </li>
                    <li><a href="index.html#contact">Contact</a></li>
                </ul>
                <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            <a class="btn-getstarted flex-md-shrink-0" href="index.html#about">Get Started</a>

        </div>
    </header>
    `;

    // Find the header placeholder element
    const headerPlaceholder = document.getElementById('header-placeholder');
    
    if (headerPlaceholder) {
        // Insert the header HTML into the placeholder
        headerPlaceholder.innerHTML = headerHTML;
        
        // Initialize any header-specific functionality after insertion
        initializeHeader();
    }
});

// Function to initialize header functionality
function initializeHeader() {
    // Note: Mobile navigation and dropdown functionality is now handled by main.js
    // to avoid conflicts with dynamically loaded elements
    // This function is kept for any future header-specific functionality
} 