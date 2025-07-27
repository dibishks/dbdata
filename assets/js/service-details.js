// Service Details Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Service content data
    const serviceContent = {
        'comprehensive-database': {
            title: 'Comprehensive Indian Business Database Solutions',
            image: 'assets/img/services.jpg',
            subtitle: 'Complete Business Intelligence for Indian Markets',
            description: `Unlock the power of India's commercial ecosystem with our meticulously formatted business
             databases. Delivered in Excel or PDF, they capture company name, address, 
             industry, contact data, and more to drive targeted campaigns and business insights.<br> 
             <h5>Data Types & Use Cases</h5>
             We deliver structured lists spanning all industries—from SMEs to corporates, importers to professional service providers. Use cases include lead generation, market sizing, competitive intelligence, and refined outreach.
             <h5>Workflow</h5>
             We source data from public domain resources, Google Business listings, government registries, stock-market filings, and verified seminar attendee lists. Each dataset goes through AI-powered data cleaning, duplicate removal, and manual verification before export in Excel or PDF per your format preference.
             <h5>Testimonials & Credibility
</h5>
“DbData.in saved us weeks of data wrangling—we gained access to verified contacts across India in a single delivery.”
With our stringent LinkedIn verification, multi-stage validation process, and industry expertise, we consistently deliver 80‑90%+ data accuracy.            
<h5>Call‑to‑Action
</h5>
<p>Ready to accelerate your outreach with structured data that delivers results? Contact us now to request a sample or get a quote.</p>
`,
            features: [
                'Complete company profiles with verified contact information',
                'Industry classification and business categorization',
                'Geographic coverage across all Indian states and cities',
                'Regular data updates and verification processes',
                'Export-ready formats (Excel, CSV, PDF)',
                'Customizable data fields and filtering options'
            ],
            additionalInfo: 'Our database is continuously updated through multiple verification channels including government registries, business directories, and direct verification calls. This ensures you get the most accurate and current information for your business development needs.'
        },
        'industry-directory': {
            title: 'Industry & Professional Directory Lists',
            image: 'assets/img/services.jpg',
            subtitle: 'Targeted Industry-Specific Contact Lists',
            description: `
            Simplify sector-focused marketing and B2B engagement with directories tailored to healthcare providers, real estate professionals, schools, gyms, and more.
            <h5>Data Types & Use Cases</h5>
Our directories include institutions like hospitals, chemists, contractors, architects, schools, event organizers, and others. These ready lists help you launch targeted campaigns, conduct competitive analysis, or build vertical-specific audience pools.
            <h5>Workflow</h5>
We extract base data from verified public sources and sector-specific directories. AI-assisted 
structuring is followed by manual review to ensure industry categorization and location-level 
accuracy. Delivered in Excel or PDF.           
 <h5>Testimonials & Proof

</h5>
“Using DbData.in’s architects and contractor lists, we generated a 35% increase in conversion during our regional outreach campaign.”
Your data undergoes multi-touch validation, helping you target decision‑makers with precision.
<h5>Call‑to‑Action
</h5>
<p>To explore sector-by-sector samples or request a custom industry list, reach out today.

</p>
            `,
            features: [
                'Industry-specific contact lists and directories',
                'Professional role-based filtering (CEO, Manager, etc.)',
                'Sector-wise categorization and segmentation',
                'Company size and revenue-based filtering',
                'Technology stack and solution preferences',
                'Decision-making authority identification'
            ],
            additionalInfo: 'Each industry directory is carefully curated to include only relevant contacts with decision-making authority. Our lists are regularly updated to maintain accuracy and relevance for your marketing campaigns.'
        },
        'custom-reports': {
            title: 'Custom Data Reports & Market Research',
            image: 'assets/img/services.jpg',
            subtitle: 'Tailored Insights for Strategic Decision Making',
            description: `
            Need deeply tailored insights? Our custom data report service delivers bespoke datasets and research reports based on your precise criteria—ready for Excel, PDF, or integration pipelines.
            <h5>Data Types & Use Cases</h5>
Specify industries, geographies, company sizes, and attributes. Suitable for business planning, data modeling, investor pitch decks, academic research, and AI/ML training.            <h5>Workflow</h5>
            We combine primary research with secondary data sources to create tailored reports. Each report goes through a multi-step validation process to ensure accuracy and relevance.
           <h5>Workflow</h5>
We consult on your exact requirements, then source data from trusted public datasets, filtered and enriched to deliver finalized outputs. Cleaning, validation, categorization, and formatting are all part of the process.
<h5>Benefits of Curated Data vs. DIY</h5>
Skip the data wrangling and focus on insights. We take care of sampling bias, missing values, and duplicate issues so you receive a polished dataset built to spec.
<h5>Expertise</h5>
“DbData.in developed a custom Indian importers dataset that empowered our consulting advisory to expand into a new vertical. Accuracy exceeded 95%.”
Our team brings deep data expertise and domain knowledge to every project.

<h5>Call‑to‑Action</h5>
Ready to co-create a tailored data report that aligns with your business goals? Start a conversation now.           


`,
            features: [
                'Custom market research and analysis reports',
                'Competitive intelligence and benchmarking data',
                'Market size and growth trend analysis',
                'Customer behavior and preference insights',
                'Geographic market opportunity assessment',
                'Industry trend analysis and forecasting'
            ],
            additionalInfo: 'Our custom reports combine primary and secondary research methodologies to provide you with actionable insights. Each report is designed to address your specific business questions and objectives.'
        },
        'telecalling-database': {
            title: 'Telecalling & B2B Contact Databases',
            image: 'assets/img/services.jpg',
            subtitle: 'High-Quality Contact Data for Sales Teams',
            description: `
            Supercharge your telemarketing and outbound sales efforts with telecalling-optimized databases—delivering up-to-date phone contacts and B2B profiles.

<h5>Data Types & Use Cases</h5>
Includes segments like manufacturers, exporters, distributors, and corporate buyers. Ideal for campaign outreach, lead qualification, and follow-up sales efforts.

<h5>Workflow</h5>
Our sourcing uses Google business data and publicly listed phone numbers. After initial AI-driven scrubbing, manual validation ensures correct numbers, job roles, and contact names before Excel export.

<h5>Benefits vs. DIY</h5>
Forget outdated or invalid numbers. We provide verified lists so your campaigns reach live prospects—reducing bounce rates and boosting campaign ROI.

<h5>Proof & Testimonials</h5>
“Using DbData.in’s telecalling data, our call connect rate jumped from 40% to over 75%, cutting down campaign time by half.”
Data is updated regularly and validated for accuracy and deliverability.

<h5>Call‑to‑Action</h5>
Need a verified calling list that delivers results? Contact us to get started.
            
            `,
            features: [
                'Verified phone numbers with direct line access',
                'Decision-maker contact information',
                'Opt-in and compliance-ready data',
                'Industry and role-based segmentation',
                'Recent activity and engagement indicators',
                'Multi-channel contact information (phone, email, LinkedIn)'
            ],
            additionalInfo: 'Our telecalling databases are regularly scrubbed against DNC lists and updated to ensure compliance with telemarketing regulations. We provide detailed contact profiles to help your sales team personalize their approach.'
        },
        'hr-email-data': {
            title: 'HR Contact & Email Marketing Data',
            image: 'assets/img/services.jpg',
            subtitle: 'Targeted HR and Recruitment Contact Lists',
            description: `
            Connect directly with verified HR professionals and key decision-makers through expertly enriched email and contact data—powered by LinkedIn validation.

<h5>Data Types & Use Cases</h5>
Access HR director emails, phone numbers, LinkedIn URLs, company info, and more. Perfect for recruitment, employer branding, HR-tech outreach, and corporate partnerships.

<h5>Workflow</h5>
Each record is cross‑verified against LinkedIn profiles, cleaned using AI tools, and hand‑checked to confirm accuracy. Format the output for email marketing, ATS import, or CRM integration.

<h5>Benefits vs. DIY</h5>
Our validated HR contact lists ensure deliverability and reduce bounce/back‑scatter rates—so your outreach reaches the right inbox every time.

<h5>Proof & Credibility</h5>
“Our HR email open rates soared with DbData.in’s dataset—nearly 50% higher than previous in-house lists.”
We maintain a rigorous privacy-first process: Individuals’ personal data is not shared or sold.

<h5>Call‑to‑Action</h5>
Looking to build authentic HR engagement campaigns? Request a free sample today.
            
            `,
            features: [
                'HR manager and recruiter contact lists',
                'Company hiring and recruitment data',
                'Email marketing-ready contact information',
                'HR technology and service preferences',
                'Company culture and hiring practices insights',
                'Compliance with email marketing regulations'
            ],
            additionalInfo: 'Our HR contact data is specifically designed for recruitment agencies, HR service providers, and B2B companies targeting HR departments. Each contact is verified and categorized by role and responsibility level.'
        },
        'data-delivery': {
            title: 'Flexible Data Delivery & Licensing',
            image: 'assets/img/services.jpg',
            subtitle: 'Customizable Data Solutions for Your Business',
            description: `
            Adapt your data delivery to fit your technical workflow. Choose from secure S3/SFTP/email distribution, varied update schedules, and flexible licensing models.

<h5>Delivery Types & Use Cases</h5>
Formats: CSV, Excel, or PDF. Delivery: one-off, monthly, quarterly or yearly updates. Licensing: perpetual, subscription, or usage-based—designed for integration with pipelines, dashboards, CRM, or machine‑learning systems.

<h5>Workflow</h5>
Specify your format and infrastructure requirements. We package and deliver data securely to your environment, with schedule-driven refresh and compliance reporting.

<h5>Benefits vs. DIY</h5>
No more manual downloads or batch updates: your data arrives automatically, accurately formatted, and timely—maximizing operational efficiency.

<h5>Trust & Reliability</h5>
Clients choose this service for hassle‑free integration, version control, and data integrity across updates. Your data is processed with encryption and privacy compliance in mind.

<h5>Call‑to‑Action</h5>
Want flexible delivery built for your workflow? Contact us to discuss your setup.
            `,
            features: [
                'Multiple delivery formats (Excel, CSV, API, Database)',
                'Flexible licensing options (one-time, subscription, enterprise)',
                'Custom data field selection and formatting',
                'Real-time data access through API integration',
                'Data update frequency customization',
                'White-label and reseller licensing options'
            ],
            additionalInfo: 'We understand that different businesses have different data needs. Our flexible delivery and licensing options ensure you get exactly what you need, when you need it, in the format that works best for your systems.'
        }
    };

    // Get DOM elements
    const serviceLinks = document.querySelectorAll('.services-list a');
    const contentArea = document.querySelector('.col-lg-8.ps-lg-5');

    // Function to update content
    function updateServiceContent(serviceKey) {
        const service = serviceContent[serviceKey];
        if (!service || !contentArea) return;

        // Update content HTML
        contentArea.innerHTML = `
            <h3>${service.subtitle}</h3>
            <p>${service.description}</p>
            <ul>
                ${service.features.map(feature => `<li><i class="bi bi-check-circle"></i> <span>${feature}</span></li>`).join('')}
            </ul>
            <p>${service.additionalInfo}</p>
                        <img src="${service.image}" alt="${service.title}" class="img-fluid services-img">

        `;

        // Update active state of menu items
        serviceLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Find and activate the clicked link
        const activeLink = document.querySelector(`[data-service="${serviceKey}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Add click event listeners to service links
    serviceLinks.forEach((link, index) => {
        // Add data attributes to identify services
        const serviceKeys = Object.keys(serviceContent);
        const serviceKey = serviceKeys[index];
        link.setAttribute('data-service', serviceKey);
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            updateServiceContent(serviceKey);
        });
    });

    // Initialize with the first service (which is already active)
    if (serviceLinks.length > 0) {
        const firstServiceKey = Object.keys(serviceContent)[0];
        updateServiceContent(firstServiceKey);
    }
}); 