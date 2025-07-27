// Footer Component Loader
document.addEventListener('DOMContentLoaded', function() {
    // Create footer HTML content
    const footerHTML = `
    <footer id="footer" class="footer">

        <div class="footer-newsletter">
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-lg-6">
                        <h4>Join Our Newsletter</h4>
                        <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                        <form action="forms/newsletter.php" method="post" class="php-email-form">
                            <div class="newsletter-form"><input type="email" name="email"><input type="submit" value="Subscribe"></div>
                            <div class="loading">Loading</div>
                            <div class="error-message"></div>
                            <div class="sent-message">Your subscription request has been sent. Thank you!</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="container footer-top">
            <div class="row gy-4">
                <div class="col-lg-4 col-md-6 footer-about">
                    <a href="index.html" class="d-flex align-items-center">
                        <span class="sitename">DbData</span>
                    </a>
                    <div class="footer-contact pt-3">
                        <p>MK Road, </p>
                        <p>Kochi - 682305</p>
                        <p class="mt-3"><strong>Phone:</strong> <span>+919496147047</span></p>
                        <p><strong>Email:</strong> <span>info@greymarketwiki.com</span></p>
                    </div>
                </div>

                <div class="col-lg-2 col-md-3 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><i class="bi bi-chevron-right"></i> <a href="index.html#hero">Home</a></li>
                        <li><i class="bi bi-chevron-right"></i> <a href="index.html#about">About us</a></li>
                        <li><i class="bi bi-chevron-right"></i> <a href="index.html#services">Services</a></li>
                        <li><i class="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
                    </ul>
                </div>

                <div class="col-lg-2 col-md-3 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li><i class="bi bi-chevron-right"></i> <a href="#">Industry & Professional Directory Lists</a></li>
                        <li><i class="bi bi-chevron-right"></i> <a href="#">Custom Data Reports & Market Research</a></li>
                        <li><i class="bi bi-chevron-right"></i> <a href="#">Telecalling & B2B Contact Databases</a></li>
                        <li><i class="bi bi-chevron-right"></i> <a href="#">HR Contact & Email Marketing Data</a></li>
                        <li><i class="bi bi-chevron-right"></i> <a href="#">Flexible Data Delivery & Licensing</a></li>
                    </ul>
                </div>

                <div class="col-lg-4 col-md-12">
                    <h4>Follow Us</h4>
                    <p>Because good things happen when we connect. </p>
                    <div class="social-links d-flex">
                        <a href=""><i class="bi bi-twitter-x"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>

            </div>
        </div>

        <div class="container copyright text-center mt-4">
            <p>© <span>Copyright</span> <strong class="px-1 sitename">DbData</strong> <span>All Rights Reserved</span></p>
        
        </div>

    </footer>

    <!-- Scroll Top -->
    <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
    `;

    // Find the footer placeholder element
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    if (footerPlaceholder) {
        // Insert the footer HTML into the placeholder
        footerPlaceholder.innerHTML = footerHTML;
        
        // Initialize any footer-specific functionality after insertion
        initializeFooter();
    }
});

// Function to initialize footer functionality
function initializeFooter() {
    // Add any footer-specific JavaScript here
    // For example, newsletter form handling, etc.
    
    // Newsletter form handling
    const newsletterForm = document.querySelector('.footer-newsletter .php-email-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your newsletter form handling logic here
            console.log('Newsletter form submitted');
        });
    }
    
    // Note: Scroll-to-top functionality is now handled by main.js
    // to avoid conflicts with dynamically loaded elements
} 