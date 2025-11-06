# STEMpower Ethiopia - Dynamic Content Management System

A comprehensive, fully dynamic web application built with Next.js 14, TypeScript, and Tailwind CSS for STEMpower Ethiopia - an organization dedicated to empowering Ethiopian youth through science, technology, engineering, and mathematics education.

## 🌟 System Overview

STEMpower Ethiopia is a fully dynamic content management system that allows administrators to manage all aspects of the organization's digital presence without requiring technical knowledge. The system features a modern, responsive design with multilingual support (English/Amharic), accessibility features, and a comprehensive admin panel for content management.

### Key Features

- **Fully Dynamic Content**: All pages, sections, and components are editable through the admin panel
- **Multilingual Support**: English and Amharic language switching with voice reader functionality
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Admin Panel**: Comprehensive content management system for all website sections
- **Real-time Updates**: Changes reflect immediately on the frontend
- **Accessibility**: Voice reader, keyboard navigation, and screen reader support
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Radix UI components

## 🏗️ System Architecture

### Frontend Structure

```
app/
├── page.tsx                    # Homepage with dynamic hero, impact dashboard, programs
├── layout.tsx                  # Root layout with header, footer, and global providers
├── about/                      # About Us pages
│   ├── page.tsx               # Main about page
│   ├── about-STEMPower/       # Organization details
│   └── staff/                 # Staff members
├── programs/                   # Programs showcase
│   ├── page.tsx               # Programs overview
│   ├── stem-operations/       # STEM operations programs
│   ├── fablab/                # FabLab programs
│   └── entrepreneurship/      # Entrepreneurship programs
├── latest/                     # News and events
│   ├── page.tsx               # Latest updates overview
│   ├── news/                  # News articles and newsletters
│   ├── events/                # Events and competitions
│   └── announcements/         # Official announcements
├── contact/                    # Contact information and forms
├── donate/                     # Donation page
└── admin/                      # Admin panel
    ├── layout.tsx             # Admin layout with sidebar
    ├── page.tsx               # Admin dashboard
    ├── home/                  # Homepage content management
    ├── about/                 # About pages management
    ├── programs/              # Programs management
    ├── latest/                # News and events management
    └── contact/               # Contact page management
```

### Component Structure

```
components/
├── header.tsx                 # Dynamic navigation header
├── footer.tsx                 # Dynamic footer with social links
├── hero-section.tsx           # Auto-rotating hero carousel
├── enhanced-impact-dashboard.tsx # Animated statistics dashboard
├── programs-showcase.tsx      # Programs display component
├── latest-news.tsx            # News and events display
├── partners-showcase.tsx      # Partners and sponsors
├── student-gallery.tsx        # Student success stories
├── upcoming-events.tsx        # Events calendar
├── chatbot.tsx                # AI-powered chatbot
└── ui/                        # Reusable UI components
    ├── admin-sidebar.tsx      # Admin navigation
    ├── admin-header.tsx       # Admin page headers
    └── [40+ UI components]    # Complete UI component library
```

## 🎯 Dynamic Content Management

### Homepage Sections (Fully Dynamic)

1. **Hero Section**
   - Auto-rotating carousel with 3 slides
   - Dynamic titles, descriptions, and call-to-action buttons
   - Statistics display (centers, students, regions)
   - Image management and optimization

2. **Impact Dashboard**
   - Animated statistics with progress bars
   - Real-time data visualization
   - Customizable metrics and achievements
   - Regional coverage indicators

3. **Programs Showcase**
   - Three main program categories
   - Dynamic program descriptions and features
   - Image galleries and feature lists
   - Sub-program management

4. **Student Gallery**
   - Success stories and testimonials
   - Image management
   - Achievement highlights

5. **Latest News & Events**
   - News articles and announcements
   - Event calendar with registration
   - Newsletter subscription

6. **Partners Showcase**
   - Partner logos and descriptions
   - Sponsorship information

### About Us Pages (Fully Dynamic)

1. **About STEMPower**
   - Mission, vision, and values
   - Board of directors management
   - Organization history and impact

2. **Staff Members**
   - Team member profiles
   - Department organization
   - Contact information

### Programs Management (Fully Dynamic)

1. **STEM Operations**
   - STEM Centers (61+ locations)
   - Science Fairs (155+ events)
   - University Outreach programs
   - STEM-TV broadcasting

2. **FabLab Programs**
   - Maker Spaces (25+ locations)
   - Training & Consultancy
   - Science Kits production
   - Advanced machinery management

3. **Entrepreneurship & Incubation**
   - Business Development Services
   - Startup Incubation programs
   - Digital Skills training (IBM partnership)
   - Soft Skills development

### Latest News & Events (Fully Dynamic)

1. **News Management**
   - Newsletter articles
   - Social media posts
   - Media coverage tracking
   - Others talking about STEMpower

2. **Events Management**
   - Event creation and editing
   - Registration management
   - Featured events system
   - Calendar integration

3. **Announcements**
   - Official updates
   - Opportunities posting
   - Priority announcements

## 🛠️ Admin Panel Features

### Comprehensive Content Management

- **Hero Banner Management**: Edit titles, descriptions, statistics, and images
- **Program Management**: Add, edit, and organize all programs and sub-programs
- **News & Events**: Create and manage news articles, events, and announcements
- **Staff Management**: Add and update team member information
- **Image Management**: Upload, optimize, and organize media assets
- **Statistics Dashboard**: Real-time analytics and content metrics

### User-Friendly Interface

- **Intuitive Navigation**: Collapsible sidebar with organized sections
- **Form Validation**: Real-time validation and error handling
- **Preview System**: Live preview of changes before publishing
- **Bulk Operations**: Mass edit and delete capabilities
- **Search & Filter**: Advanced filtering and search functionality

### Content Types Supported

- **Text Content**: Rich text editing with formatting options
- **Images**: Upload, crop, and optimize images
- **Statistics**: Animated counters and progress bars
- **Events**: Calendar integration with registration forms
- **News Articles**: Full article management with categories
- **Staff Profiles**: Complete profile management system

### Dynamic Page Creation System

The system includes a powerful **Dynamic Page Adder** that allows administrators to create completely new pages without any technical knowledge:

#### **Page Creation Features**:
- **Instant Page Creation**: Create new pages directly from the admin panel
- **Template Selection**: Choose from multiple page templates (Standard, Full-width, Landing Page)
- **SEO Optimization**: Built-in SEO settings and meta tag management
- **Content Management**: Rich text editor with full formatting capabilities
- **Component Integration**: Add statistics, forms, galleries, and other components
- **Navigation Integration**: Automatically adds new pages to the navigation menu
- **Multi-language Support**: Create pages in both English and Amharic
- **Publishing Control**: Draft/Published status with scheduled publishing
- **Access Control**: Set user permissions and page visibility

## 🔧 Detailed Admin Panel Capabilities

### Homepage Management

#### Hero Section (Admin: `/admin/home/hero`)
**Fully Dynamic Carousel System** - Unlimited slides with complete customization:
- **Image Management**: Upload and manage hero background images for each slide
- **Content Fields**:
  - Main Title (e.g., "Inside Every Child is a Scientist")
  - Subtitle/Badge Text (e.g., "Nurture that Scientist, You Will Change the World")
  - Description (detailed slide description)
  - Primary CTA Button Text (e.g., "Explore Our Programs")
  - Secondary CTA Button Text (e.g., "Watch Our Story")
- **Statistics Display**: 3 customizable statistics per slide:
  - Stat 1: Value + Label (e.g., "61+" + "centers")
  - Stat 2: Value + Label (e.g., "100K+" + "students")
  - Stat 3: Value + Label (e.g., "11+" + "regions")
- **Unlimited Slides**: Add, edit, delete, and reorder slides dynamically
- **Auto-rotation**: Automatic slide transitions with manual controls

#### Impact Dashboard (Admin: `/admin/home/impact`)
**Comprehensive Statistics Management**:
- **Section Header**:
  - Badge Text (e.g., "Our Impact Across Ethiopia")
  - Main Title (e.g., "Transforming Lives Through STEM Education")
  - Description (detailed impact overview)
- **Main Impact Statistics** (6 large stat cards):
  - Icon Selection (Building, Users, Graduation Cap, Award, Lightbulb, Globe)
  - Title, Display Value, Description
  - Progress Percentage (0-100%)
  - Trend Information (e.g., "+8 this year")
  - Location Details (e.g., "Nationwide Coverage")
- **Additional Metrics** (4 small metric cards):
  - Value + Label pairs (e.g., "11+" + "Regions Covered")
- **Unlimited Stats**: Add, edit, and delete statistics dynamically

#### Student Gallery (Admin: `/admin/home/gallery`)
**Project Showcase Management**:
- **Gallery Items**:
  - Project Image Upload
  - Project Title and Description
  - Category Selection (Robotics, Entrepreneurship, Research, Technology, Engineering, FabLab)
  - Location and Participant Count
- **Unlimited Items**: Add, edit, and delete gallery items
- **Category Filtering**: Dynamic filtering by project categories

#### Partners Showcase (Admin: `/admin/home/partners`)
**Partnership Management**:
- **Section Header**:
  - Section Title (e.g., "Our Trusted Partners")
  - Section Description
- **Partner Organizations**:
  - Logo Upload and Management
  - Organization Name
  - Website URL (optional)
  - Description (optional)
- **Unlimited Partners**: Add, edit, and delete partner organizations

### Programs Management

#### STEM Operations Main Page (Admin: `/admin/programs/stem-operations`)
**STEM Operations Overview Management**:
- **Page Header**: Title, description, and hero content
- **Program Statistics**: Key metrics and achievements
- **Featured Programs**: Highlight main STEM operations
- **Call-to-Action Sections**: Program enrollment and contact information

#### STEM Centers (Admin: `/admin/programs/stem-operations/stem-centers`)
**Comprehensive Center Management**:
- **Overview Content**:
  - Page Title and Description
  - Statistical Overview (Total Centers, Regions, Students Served, Years of Impact)
- **Featured Centers**:
  - Center Name, City, Region, Established Year
  - Director Name and Contact Information
  - Available Laboratories (COMP, ELEX, MECX, OPTX, 3DP, CHMX, SOLP, AERO, HISC)
  - Funding Information
  - Center Image Upload
  - Featured Badge Text (e.g., "First Center - 2010")
- **All Centers**: Complete list with filtering by region and laboratory
- **Laboratory Programs**: Integration with laboratory program management
- **Unlimited Centers**: Add, edit, and delete centers dynamically

#### Science Fairs (Admin: `/admin/programs/stem-operations/science-fairs`)
**Science Fair Management System**:
- **Fair Information**:
  - Fair Name, Date, Location, and Theme
  - Registration Deadlines and Requirements
  - Categories and Age Groups
  - Prize Information and Awards
- **Event Details**:
  - Schedule and Timeline
  - Venue Information and Directions
  - Contact Information and Support
- **Participant Management**:
  - Student Registration and Project Submissions
  - Judge Assignment and Evaluation
  - Results and Winner Announcements
- **Media Management**:
  - Event Photos and Videos
  - Press Releases and Media Coverage
  - Social Media Integration

#### STEM TV (Admin: `/admin/programs/stem-operations/stem-tv`)
**STEM TV Content Management**:
- **Program Information**:
  - Show Title, Description, and Schedule
  - Host Information and Guest Speakers
  - Episode Topics and Learning Objectives
- **Content Management**:
  - Video Upload and Streaming Integration
  - Episode Descriptions and Transcripts
  - Educational Resources and Materials
- **Broadcast Schedule**:
  - Air Times and Channel Information
  - Repeat Schedules and On-Demand Access
  - Live Streaming Integration
- **Audience Engagement**:
  - Viewer Feedback and Comments
  - Interactive Q&A Sessions
  - Educational Quizzes and Activities

#### University Outreach (Admin: `/admin/programs/stem-operations/university-outreach`)
**University Partnership Management**:
- **Partnership Information**:
  - University Name, Location, and Contact Details
  - Partnership Type and Duration
  - Collaborative Programs and Initiatives
- **Program Details**:
  - Outreach Activities and Workshops
  - Student Exchange Programs
  - Research Collaborations
- **Event Management**:
  - Campus Visits and Presentations
  - Career Fairs and Information Sessions
  - Faculty Development Programs
- **Impact Tracking**:
  - Student Engagement Metrics
  - Program Success Stories
  - Partnership Outcomes

#### Entrepreneurship Main Page (Admin: `/admin/programs/entrepreneurship`)
**Entrepreneurship Program Overview**:
- **Program Header**: Title, description, and mission
- **Program Statistics**: Success metrics and achievements
- **Featured Success Stories**: Entrepreneur highlights
- **Program Categories**: Overview of all entrepreneurship offerings

#### Business Development Services (Admin: `/admin/programs/entrepreneurship/business-development`)
**Business Development Program Management**:
- **Program Information**:
  - Course Title, Description, and Duration
  - Prerequisites and Target Audience
  - Learning Objectives and Outcomes
- **Curriculum Management**:
  - Module Content and Materials
  - Assessment Methods and Certifications
  - Instructor Profiles and Expertise
- **Student Management**:
  - Enrollment and Registration
  - Progress Tracking and Evaluations
  - Graduation and Certification
- **Resources and Support**:
  - Business Plan Templates and Tools
  - Mentorship Program Integration
  - Funding and Investment Opportunities

#### Digital Skills (Admin: `/admin/programs/entrepreneurship/digital-skills`)
**Digital Skills Training Management**:
- **Course Information**:
  - Skill Categories (Programming, Design, Marketing, etc.)
  - Course Levels (Beginner, Intermediate, Advanced)
  - Duration and Schedule Information
- **Content Management**:
  - Video Tutorials and Interactive Lessons
  - Hands-on Projects and Assignments
  - Assessment Quizzes and Certifications
- **Technology Integration**:
  - Software and Tool Access
  - Cloud Platform Integration
  - Industry Partnership Programs
- **Career Support**:
  - Job Placement Assistance
  - Portfolio Development
  - Industry Mentorship

#### Soft Skills (Admin: `/admin/programs/entrepreneurship/soft-skills`)
**Soft Skills Development Management**:
- **Skill Categories**:
  - Communication and Presentation Skills
  - Leadership and Team Management
  - Problem-Solving and Critical Thinking
  - Emotional Intelligence and Interpersonal Skills
- **Workshop Management**:
  - Workshop Topics and Descriptions
  - Facilitator Information and Expertise
  - Interactive Activities and Exercises
- **Assessment and Development**:
  - Skill Assessment Tools
  - Personal Development Plans
  - Progress Tracking and Feedback
- **Certification Programs**:
  - Completion Certificates
  - Continuing Education Credits
  - Professional Development Recognition

#### Incubation Program (Admin: `/admin/programs/entrepreneurship/incubation`)
**Startup Incubation Management**:
- **Program Information**:
  - Incubation Program Details and Duration
  - Application Process and Requirements
  - Selection Criteria and Evaluation
- **Startup Management**:
  - Company Profiles and Business Plans
  - Progress Tracking and Milestones
  - Mentorship and Advisory Support
- **Resource Management**:
  - Office Space and Facilities
  - Equipment and Technology Access
  - Funding and Investment Opportunities
- **Success Metrics**:
  - Graduation Rates and Success Stories
  - Funding Raised and Revenue Generated
  - Job Creation and Economic Impact

#### FabLab Main Page (Admin: `/admin/programs/fablab`)
**FabLab Program Overview**:
- **Program Header**: Title, description, and mission
- **FabLab Statistics**: Network size and impact metrics
- **Featured Projects**: Student and community creations
- **Program Categories**: Overview of all FabLab offerings

#### Machineries (Admin: `/admin/programs/fablab/machineries`)
**FabLab Equipment Management**:
- **Equipment Information**:
  - Machine Name, Type, and Specifications
  - Capabilities and Technical Details
  - Safety Requirements and Training
- **Availability Management**:
  - Booking System and Scheduling
  - Maintenance Schedules and Records
  - Usage Statistics and Analytics
- **Training Programs**:
  - Equipment Operation Training
  - Safety Certification Programs
  - Advanced Usage Workshops
- **Support and Maintenance**:
  - Technical Support and Troubleshooting
  - Maintenance Records and Service History
  - Upgrade and Replacement Planning

#### Maker Space (Admin: `/admin/programs/fablab/maker-space`)
**Maker Space Management**:
- **Space Information**:
  - Location, Size, and Capacity
  - Available Tools and Equipment
  - Access Hours and Rules
- **Project Management**:
  - Project Showcases and Galleries
  - Community Challenges and Competitions
  - Collaborative Projects and Teams
- **Community Engagement**:
  - User Profiles and Skill Sharing
  - Workshop and Event Organization
  - Mentorship and Knowledge Transfer
- **Safety and Guidelines**:
  - Safety Protocols and Training
  - Equipment Usage Guidelines
  - Emergency Procedures and Contacts

#### Products (Admin: `/admin/programs/fablab/products`)
**Product Catalog Management**:
- **Product Information**:
  - Product Name, Description, and Specifications
  - Materials Used and Manufacturing Process
  - Pricing and Availability
- **Product Showcase**:
  - High-Quality Images and Videos
  - Product Features and Benefits
  - User Reviews and Testimonials
- **Order Management**:
  - Order Processing and Fulfillment
  - Inventory Management and Tracking
  - Customer Service and Support
- **Innovation Tracking**:
  - Design Iterations and Improvements
  - Market Feedback and Analytics
  - Future Development Plans

#### Science Kits (Admin: `/admin/programs/fablab/science-kits`)
**Educational Science Kit Management**:
- **Kit Information**:
  - Kit Name, Age Range, and Subject Area
  - Contents and Materials List
  - Learning Objectives and Activities
- **Educational Content**:
  - Instruction Manuals and Guides
  - Video Tutorials and Demonstrations
  - Assessment and Evaluation Tools
- **Distribution Management**:
  - School and Institution Orders
  - Bulk Pricing and Discounts
  - Shipping and Logistics
- **Curriculum Integration**:
  - Educational Standards Alignment
  - Teacher Training and Support
  - Classroom Implementation Guides

#### Training & Consultancy (Admin: `/admin/programs/fablab/training-consultancy`)
**Training and Consultancy Services Management**:
- **Service Information**:
  - Training Programs and Consultancy Services
  - Target Audiences and Prerequisites
  - Duration and Delivery Methods
- **Course Management**:
  - Curriculum Development and Updates
  - Instructor Qualifications and Training
  - Assessment and Certification
- **Client Management**:
  - Corporate Training Programs
  - Custom Consultancy Solutions
  - Project Management and Delivery
- **Quality Assurance**:
  - Feedback Collection and Analysis
  - Continuous Improvement Processes
  - Industry Best Practices Integration

### Latest News Management

#### Newsletter Management (Admin: `/admin/latest/newsletter`)
**Comprehensive Newsletter System**:
- **Hero Banner**:
  - Badge Text (e.g., "STEMpower Newsletters")
  - Title (e.g., "Stay Connected")
  - Description (detailed overview)
  - Statistics (Subscribers, Newsletters, Monthly Readers)
- **Newsletter Content**:
  - Badge/Category (e.g., "Monthly Digest", "Featured")
  - Title and Date
  - Topic/Category and Source
  - Description and Read Time
  - Image Upload and PDF File Upload
  - Featured Status Toggle
- **Unlimited Newsletters**: Add, edit, and delete newsletter entries

#### Events Management (Admin: `/admin/latest/events`)
**Complete Event Management System**:
- **Event Details**: Title, description, date, location, capacity
- **Registration System**: Event registration and capacity management
- **Event Categories**: Filtering by event types and status
- **Featured Events**: Highlight important events
- **Image Management**: Event photos and promotional materials

#### Announcements (Admin: `/admin/latest/announcements`)
**Announcement Management**:
- **Announcement Content**: Title, description, priority level
- **Publication Dates**: Schedule announcements
- **Target Audiences**: Different announcement types
- **Image Support**: Visual announcements with images

#### Media Coverage (Admin: `/admin/latest/media-coverage`)
**Press and Media Management**:
- **Press Mentions**: Media coverage and press releases
- **Image Management**: Media coverage photos
- **Source Information**: Publication details and links
- **Publication Dates**: Track media coverage timeline

#### Social Media (Admin: `/admin/latest/social-media`)
**Social Media Content Management**:
- **Social Media Posts**: Content management for different platforms
- **Engagement Metrics**: Track social media performance
- **Content Scheduling**: Plan and schedule social media content
- **Platform Integration**: Manage multiple social media accounts

### Site-Wide Management

#### Header Management (Admin: `/admin/header`)
**Navigation and Header Management**:
- **Logo Management**:
  - Logo Upload and Optimization
  - Logo Variations (Light/Dark themes)
  - Mobile and Desktop Logo Sizing
- **Navigation Menu**:
  - Main Menu Items and Order
  - Dropdown Menus and Sub-items
  - Menu Labels and Descriptions
  - Link Management and External URLs
- **Dynamic Page Adder**:
  - **Create New Pages**: Add completely new pages to the website
  - **Page Configuration**:
    - Page Title and URL Slug
    - Page Description and Meta Information
    - Page Template Selection (Standard, Full-width, Landing Page)
    - SEO Settings and Meta Tags
  - **Content Management**:
    - Rich Text Editor for Page Content
    - Image and Media Upload Integration
    - Custom HTML and CSS Support
    - Component Integration (Statistics, Forms, Galleries)
  - **Navigation Integration**:
    - Automatic Menu Addition
    - Menu Position and Ordering
    - Parent/Child Page Relationships
    - Menu Visibility Settings
  - **Page Settings**:
    - Published/Draft Status
    - Publication Date and Time
    - Access Permissions and User Roles
    - Page Redirects and Aliases
- **Language Switcher**:
  - Available Languages (English/Amharic)
  - Language Display Options
  - Voice Reader Integration
- **Contact Information**:
  - Phone Numbers and Email Addresses
  - Social Media Links
  - Emergency Contact Information
- **Search Functionality**:
  - Search Bar Configuration
  - Search Filters and Categories
  - Search Results Display Options

#### Footer Management (Admin: `/admin/footer`)
**Footer Content and Links Management**:
- **Organization Information**:
  - Mission Statement and Description
  - Address and Contact Details
  - Registration and Legal Information
- **Quick Links**:
  - Important Page Links
  - Program Quick Access
  - Resource Links
- **Social Media Integration**:
  - Social Media Platform Links
  - Social Media Icons and Styling
  - Social Media Feed Integration
- **Newsletter Signup**:
  - Newsletter Subscription Form
  - Email Collection and Management
  - Subscription Confirmation Messages
- **Copyright and Legal**:
  - Copyright Information
  - Privacy Policy and Terms of Service
  - Legal Disclaimers and Notices

#### Contact Management (Admin: `/admin/contact`)
**Contact Page and Information Management**:
- **Contact Information**:
  - Main Office Address and Details
  - Phone Numbers and Email Addresses
  - Office Hours and Availability
- **Multiple Office Locations**:
  - Branch Office Information
  - Regional Contact Details
  - Location-Specific Services
- **Contact Forms**:
  - General Inquiry Form
  - Program-Specific Contact Forms
  - Feedback and Suggestion Forms
- **Map Integration**:
  - Interactive Maps for Office Locations
  - Directions and Transportation Information
  - Parking and Accessibility Information
- **FAQ Management**:
  - Frequently Asked Questions
  - Category Organization
  - Search and Filter Functionality
- **Response Management**:
  - Auto-Response Messages
  - Inquiry Routing and Assignment
  - Follow-up and Tracking System

#### About Management (Admin: `/admin/about`)
**About Us Page Content Management**:
- **Organization Overview**:
  - Mission, Vision, and Values
  - History and Milestones
  - Leadership and Governance
- **Team Management**:
  - Staff Profiles and Photos
  - Department Organization
  - Board of Directors
  - Advisory Committee
- **Impact and Achievements**:
  - Success Stories and Testimonials
  - Awards and Recognition
  - Statistics and Metrics
  - Annual Reports and Publications
- **Partnerships and Collaborations**:
  - Partner Organizations
  - Collaborative Projects
  - International Partnerships
  - Government Relations
- **Media and Press**:
  - Press Releases and News
  - Media Kit and Resources
  - Photo and Video Galleries
  - Media Contact Information

## 🌐 Multilingual Support

### Language Features

- **Dual Language Support**: English and Amharic
- **Language Switching**: Seamless language toggle
- **Voice Reader**: Text-to-speech functionality in both languages
- **Localized Content**: All content can be managed in both languages
- **Cultural Adaptation**: Ethiopian cultural context integration

### Accessibility Features

- **Voice Reader**: Automated page reading with language selection
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and semantic HTML
- **High Contrast**: Accessible color schemes
- **Font Scaling**: Responsive typography

## 🎨 Design System

### Color Palette

- **Primary**: Teal gradient (#367375 to #24C3BC)
- **Secondary**: Complementary colors for accents
- **Neutral**: Professional grays and whites
- **Status Colors**: Success, warning, error, and info colors

### Typography

- **Font Family**: Geist Sans and Geist Mono
- **Responsive Sizing**: Mobile-first typography scale
- **Readability**: Optimized line heights and spacing

### Components

- **40+ UI Components**: Complete component library
- **Consistent Styling**: Unified design language
- **Responsive Design**: Mobile-first approach
- **Animation**: Smooth transitions and micro-interactions

## 🚀 Technical Stack

### Core Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives

### Key Dependencies

- **React 18**: Latest React features
- **Lucide React**: Icon library
- **Recharts**: Data visualization
- **Embla Carousel**: Carousel functionality
- **React Hook Form**: Form management
- **Zod**: Schema validation

### Development Tools

- **ESLint**: Code linting
- **Prettier**: Code formatting
- **TypeScript**: Type checking
- **PostCSS**: CSS processing

## 📱 Responsive Design

### Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

### Mobile Features

- **Touch Navigation**: Optimized for touch devices
- **Swipe Gestures**: Carousel and gallery interactions
- **Mobile Menu**: Collapsible navigation
- **Touch Forms**: Mobile-optimized form inputs

## 🔧 Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm or pnpm package manager
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd stempowerEth_front
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env.local
   # Configure environment variables
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Admin Panel: http://localhost:3000/admin

### Build for Production

```bash
npm run build
npm start
```

## 📊 Content Management Workflow

### Adding New Content

1. **Access Admin Panel**: Navigate to `/admin`
2. **Select Section**: Choose the appropriate content section
3. **Create/Edit**: Use the intuitive forms to add content
4. **Preview**: Review changes in real-time
5. **Publish**: Save changes to make them live

### Managing Programs

1. **Program Overview**: Navigate to Programs section
2. **Select Program Type**: Choose STEM Operations, FabLab, or Entrepreneurship
3. **Add Sub-Programs**: Create detailed program descriptions
4. **Upload Media**: Add images and documents
5. **Configure Settings**: Set visibility, ordering, and features

### Event Management

1. **Create Event**: Use the event creation form
2. **Set Details**: Add title, description, date, location
3. **Registration**: Configure registration links and deadlines
4. **Media**: Upload event images and documents
5. **Publish**: Make events visible on the website

## 🎯 Key Features Summary

### For Administrators

- **Complete Control**: Manage all website content without technical knowledge
- **Real-time Updates**: Changes appear immediately on the live site
- **User-Friendly Interface**: Intuitive admin panel design
- **Bulk Operations**: Efficient content management tools
- **Media Management**: Easy image and document handling

### For Website Visitors

- **Modern Design**: Professional, engaging user interface
- **Fast Loading**: Optimized performance and speed
- **Mobile Responsive**: Perfect experience on all devices
- **Multilingual**: English and Amharic support
- **Accessible**: Voice reader and accessibility features

### For Content Creators

- **Rich Text Editing**: Full formatting capabilities
- **Image Optimization**: Automatic image processing
- **SEO Friendly**: Built-in SEO optimization
- **Preview System**: See changes before publishing
- **Version Control**: Track content changes

## 🔮 Future Enhancements

### Planned Features

- **Advanced Analytics**: Detailed visitor analytics
- **Content Scheduling**: Schedule content publication
- **Multi-user Support**: Role-based access control
- **API Integration**: Third-party service integrations
- **Advanced Search**: Site-wide search functionality
- **Content Templates**: Pre-designed content templates

### Scalability

- **Database Integration**: Move from in-memory to persistent storage
- **CDN Integration**: Global content delivery
- **Caching System**: Advanced caching for performance
- **Load Balancing**: Handle increased traffic

## 📞 Support & Maintenance

### Technical Support

- **Documentation**: Comprehensive system documentation
- **Code Comments**: Well-documented codebase
- **Error Handling**: Robust error management
- **Logging**: Detailed system logs

### Maintenance

- **Regular Updates**: Keep dependencies current
- **Security Patches**: Regular security updates
- **Performance Monitoring**: Track system performance
- **Backup System**: Regular content backups

## 🤝 Contributing

### Development Guidelines

- **Code Standards**: Follow TypeScript and React best practices
- **Component Structure**: Use consistent component patterns
- **Testing**: Write tests for new features
- **Documentation**: Update documentation for changes

### Content Guidelines

- **Consistent Tone**: Maintain professional, educational tone
- **Image Quality**: Use high-quality, relevant images
- **Accessibility**: Ensure content is accessible to all users
- **Multilingual**: Provide content in both languages

## 📄 License

This project is proprietary software developed for STEMpower Ethiopia. All rights reserved.

## 🏢 About STEMpower Ethiopia

STEMpower Ethiopia is dedicated to empowering Ethiopian youth through comprehensive STEM education. With 61+ STEM centers nationwide, 100,000+ students impacted, and 155+ science fairs organized, we're building the next generation of innovators and problem-solvers who will shape Ethiopia's future.

### Contact Information

- **Website**: [stempowerethiopia.org](https://stempowerethiopia.org)
- **Email**: info@stempowerethiopia.org
- **Phone**: +251 11 123 4567
- **Location**: Addis Ababa, Ethiopia

---

*This system represents a comprehensive solution for managing STEMpower Ethiopia's digital presence, combining modern web technologies with user-friendly content management to support the organization's mission of empowering Ethiopian youth through STEM education.*
