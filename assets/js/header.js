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
                    <li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                            <li><a href="#">Dropdown 1</a></li>
                            <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li><a href="#">Deep Dropdown 1</a></li>
                                    <li><a href="#">Deep Dropdown 2</a></li>
                                    <li><a href="#">Deep Dropdown 3</a></li>
                                    <li><a href="#">Deep Dropdown 4</a></li>
                                    <li><a href="#">Deep Dropdown 5</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Dropdown 2</a></li>
                            <li><a href="#">Dropdown 3</a></li>
                            <li><a href="#">Dropdown 4</a></li>
                        </ul>
                    </li>
                    <li class="listing-dropdown"><a href="#"><span>Data Services</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                            <li>
                                <a href="#">Business & Corporate Data</a>
                                <a href="#">Manufacturing & Industrial Data</a>
                                <a href="#">Construction & Building Materials</a>
                            </li>
                            <li>
                                <a href="#">Healthcare & Medical Sector</a>
                                <a href="#">FMCG, Food & Hospitality</a>
                                <a href="#">Education & Professional Services</a>
                            </li>
                            <li>
                                <a href="#">Consumer & Lifestyle Businesses</a>
                                <a href="#">Logistics & Warehousing</a>
                                <a href="#">Environmental & Utility Services</a>
                            </li>
                            <li>
                                <a href="#">Specialty Industrial Segments</a>
                                <a href="#">Media, Printing & Publishing</a>
                                <a href="#">Events & Trade Shows</a>
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