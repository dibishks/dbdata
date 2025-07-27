# Reusable Header & Footer System

This project now uses reusable header and footer systems that eliminate code duplication across pages.

## How It Works

### Header System
1. **Header Component**: The header HTML is stored in `assets/js/header.js`
2. **Placeholder**: Each page has a placeholder `<div id="header-placeholder"></div>` where the header will be inserted
3. **Automatic Loading**: The header is automatically loaded when the page loads

### Footer System
1. **Footer Component**: The footer HTML is stored in `assets/js/footer.js`
2. **Placeholder**: Each page has a placeholder `<div id="footer-placeholder"></div>` where the footer will be inserted
3. **Automatic Loading**: The footer is automatically loaded when the page loads

## Files Created/Modified

- `assets/js/header.js` - Contains the reusable header HTML and functionality
- `assets/js/footer.js` - Contains the reusable footer HTML and functionality
- `assets/js/service-details.js` - Contains service details page functionality
- `index.html` - Updated to use the reusable header and footer
- `service-details.html` - Updated to use the reusable header and footer
- `page-template.html` - Template for creating new pages
- `HEADER_USAGE.md` - This documentation file

## How to Use

### For Existing Pages

1. Replace the entire `<header>` section with:
   ```html
   <!-- Header Placeholder - Will be loaded by header.js -->
   <div id="header-placeholder"></div>
   ```

2. Replace the entire `<footer>` section with:
   ```html
   <!-- Footer Placeholder - Will be loaded by footer.js -->
   <div id="footer-placeholder"></div>
   ```

3. Add both scripts in the `<head>` section:
   ```html
   <!-- Header Component Script -->
   <script src="assets/js/header.js"></script>
   <!-- Footer Component Script -->
   <script src="assets/js/footer.js"></script>
   ```

### For New Pages

1. Copy `page-template.html` and rename it to your new page
2. Update the title, page class, and content
3. The header will automatically be included

## Benefits

- **No Code Duplication**: Header and footer are maintained in one place each
- **Easy Updates**: Change the header or footer once, updates everywhere
- **Consistent Navigation**: All pages have identical navigation
- **Consistent Footer**: All pages have identical footer with contact info and links
- **Interactive Service Pages**: Dynamic service content switching functionality
- **Automatic Responsiveness**: Mobile menu, dropdowns, and scroll-to-top work automatically

## Customization

To modify the header:

1. Edit `assets/js/header.js`
2. Update the `headerHTML` variable
3. All pages will automatically get the updated header

To modify the footer:

1. Edit `assets/js/footer.js`
2. Update the `footerHTML` variable
3. All pages will automatically get the updated footer

To modify service content:

1. Edit `assets/js/service-details.js`
2. Update the `serviceContent` object with your service data
3. The service details page will automatically use the updated content

## Technical Details

- Uses vanilla JavaScript (no dependencies)
- Header automatically detects if it's the index page and applies appropriate CSS classes
- Includes mobile menu functionality
- Handles dropdown menus automatically
- Footer includes newsletter form handling and scroll-to-top functionality
- Works with the existing CSS and JavaScript

## Browser Compatibility

Works in all modern browsers that support:
- ES6 template literals
- `querySelector` and `querySelectorAll`
- `addEventListener`

## Troubleshooting

If the header doesn't appear:
1. Check that `assets/js/header.js` is included in the page
2. Verify the placeholder `<div id="header-placeholder"></div>` exists
3. Check browser console for JavaScript errors
4. Ensure the page is served from a web server (not opened directly as a file)

If the footer doesn't appear:
1. Check that `assets/js/footer.js` is included in the page
2. Verify the placeholder `<div id="footer-placeholder"></div>` exists
3. Check browser console for JavaScript errors
4. Ensure the page is served from a web server (not opened directly as a file) 