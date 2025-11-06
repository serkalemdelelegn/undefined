# STEM Power Ethiopia - Program Management System Documentation

## Overview
This document provides detailed documentation for the STEM Power Ethiopia program management system. The admin dashboard allows comprehensive management of all program content, including hero sections, statistics, content cards, and dynamic data management.

## Program Structure

The system is organized into three main program categories:

### 1. Entrepreneurship Programs
- **Business Development Services** (`/admin/programs/entrepreneurship/business-development`)
- **Digital Skills Training** (`/admin/programs/entrepreneurship/digital-skills`)
- **Incubation Program** (`/admin/programs/entrepreneurship/incubation`)
- **Soft Skills Development** (`/admin/programs/entrepreneurship/soft-skills`)

### 2. FabLab Programs
- **Machineries** (`/admin/programs/fablab/machineries`)
- **Maker Space** (`/admin/programs/fablab/maker-space`)
- **Training & Consultancy** (`/admin/programs/fablab/training-consultancy`)
- **FabLab Products** (`/admin/programs/fablab/products`)
- **FabLab Services** (`/admin/programs/fablab/services`)

### 3. STEM Operations
- **Science Fairs** (`/admin/programs/stem-operations/science-fairs`)
- **STEM Centers** (`/admin/programs/stem-operations/stem-centers`)
- **University Outreach** (`/admin/programs/stem-operations/university-outreach`)
- **STEM TV** (`/admin/programs/stem-operations/stem-tv`)

## Common Admin Card Structure

Each program management page follows a consistent structure with the following components:

### 1. Hero Section
**Purpose**: Main banner with title, subtitle, and optional image
**Fields**:
- `badge`: Text (e.g., "Business Development", "FabLab Program")
- `title`: Main heading (e.g., "Business Development Services")
- `description`: Detailed description paragraph
- `image`: Optional hero image (PNG/JPG)

**Example**:
```typescript
interface HeroSection {
  badge: string
  title: string
  description: string
  image: string
}
```

### 2. Statistics Section
**Purpose**: Key metrics and achievements displayed as cards
**Fields**:
- `icon`: Icon identifier (rocket, trending, users, dollar, etc.)
- `value`: Statistical value (e.g., "50+", "85%", "200+")
- `label`: Description of the statistic (e.g., "Startups Incubated")

**Example**:
```typescript
interface StatCard {
  id: string
  icon: string
  value: string
  label: string
}
```

### 3. Content Cards
**Purpose**: Dynamic content management for program-specific information
**Common Fields**:
- `id`: Unique identifier
- `title`: Card title
- `description`: Card description
- `image`: Card image (PNG/JPG)
- Additional program-specific fields

## Detailed Program Examples

### 1. Business Development Services

**Path**: `/admin/programs/entrepreneurship/business-development`

**Sections**:
1. **Hero Section**
   - Badge: "Business Development"
   - Title: "Business Development Services"
   - Description: "Comprehensive support for entrepreneurs..."

2. **Statistics**
   - 50+ Startups Incubated
   - 85% Success Rate
   - 200+ Jobs Created
   - 15M+ Birr in Funding

3. **Funding Partners & Donors**
   - Partner logo/image
   - Partner name
   - Contribution amount
   - Focus area
   - Partnership duration
   - People impacted

4. **Success Stories**
   - Business name
   - License status
   - Category with color coding
   - Contact person
   - Phone and email

**Example Success Story**:
```typescript
interface SuccessStory {
  id: string
  businessName: string
  licenseStatus: string
  category: string
  categoryColor: string
  contactPerson: string
  phone: string
  email: string
}
```

### 2. Digital Skills Training

**Path**: `/admin/programs/entrepreneurship/digital-skills`

**Sections**:
1. **Hero Section**
2. **Statistics**
3. **Digital Skills Programs**
   - Program title
   - Icon and color
   - Project count
   - Duration
   - Skill level
   - Description
   - Skills array

**Example Program**:
```typescript
interface SkillProgram {
  id: string
  title: string
  icon: string
  iconColor: string
  projectCount: string
  duration: string
  level: string
  description: string
  skills: string[]
}
```

### 3. Incubation Program

**Path**: `/admin/programs/entrepreneurship/incubation`

**Sections**:
1. **Hero Section**
2. **Statistics**
3. **Incubation Program Phases**
   - Phase title
   - Duration
   - Badge text
   - Description
   - Icon and color

4. **Success Stories**

**Example Phase**:
```typescript
interface IncubationPhase {
  id: string
  title: string
  duration: string
  badge: string
  description: string
  icon: string
  iconColor: string
}
```

### 4. Maker Space (FabLab)

**Path**: `/admin/programs/fablab/maker-space`

**Sections**:
1. **Hero Banner**
   - Badge: "FabLab Program"
   - Title: "Maker Space: Dream. Build. Discover."
   - Subtitle: Description
   - Hero image

2. **Statistics**
   - 12+ 3D Printers
   - 2500+ Active Students
   - 1200+ Projects Built
   - 35+ Mentors

3. **Inside the Maker Space Gallery**
   - Gallery images with captions

4. **Upcoming Workshops**
   - Workshop date
   - Title and level
   - Duration and location
   - Description
   - Registration link
   - Workshop image

**Example Workshop**:
```typescript
interface Workshop {
  id: string
  date: string
  title: string
  level: string
  duration: string
  location: string
  description: string
  image: string
  registrationLink: string
}
```

### 5. Machineries (FabLab)

**Path**: `/admin/programs/fablab/machineries`

**Sections**:
1. **Hero Banner**
2. **Statistics**
3. **Professional Equipment**
   - Equipment name
   - Description
   - Specifications (label-value pairs)
   - Key capabilities
   - Common applications
   - Equipment image

**Example Equipment**:
```typescript
interface Equipment {
  id: string
  name: string
  image: string
  description: string
  specifications: { label: string; value: string }[]
  keyCapabilities: string[]
  commonApplications: string[]
}
```

### 6. Science Fairs

**Path**: `/admin/programs/stem-operations/science-fairs`

**Sections**:
1. **Hero Banner**
   - Badge: "Empowering Africa's Next Generation Since 2010"
   - Title: "Celebrating Excellence"
   - Subtitle: Description

2. **Statistics**
   - 1,000+ Students Annually
   - 50+ STEM Centers
   - 500+ Innovative Projects
   - 15 Years Running

3. **National Recognition Journey**
   - Journey stages with progression
   - Stage badges and descriptions

4. **Winner Projects**
   - Placement and badge
   - Project title
   - Student name and university
   - Project description
   - Project image

**Example Winner Project**:
```typescript
interface WinnerProject {
  id: string
  placement: string
  placementBadge: string
  projectTitle: string
  studentName: string
  university: string
  description: string
  image: string
}
```

### 7. STEM Centers

**Path**: `/admin/programs/stem-operations/stem-centers`

**Sections**:
1. **Hero Section**
2. **Statistical Overview**
3. **Featured Centers** (with custom badges)
4. **All STEM Centers**
5. **Laboratory Programs**

**Features**:
- Filter by region and laboratory type
- Center images
- Contact information
- Laboratory availability
- Funding information

**Example Center**:
```typescript
interface Center {
  id: string
  name: string
  city: string
  region: string
  establishedYear: string
  director: string
  laboratories: string[]
  phone?: string
  email?: string
  website?: string
  fundedBy: string
  image: string
  featuredBadge?: string
}
```

### 8. University Outreach

**Path**: `/admin/programs/stem-operations/university-outreach`

**Sections**:
1. **Hero Section**
2. **Statistics**
3. **Universities**
   - University details
   - Key facilities
   - Notable achievements
   - University image

**Example University**:
```typescript
interface University {
  id: string
  name: string
  location: string
  description: string
  students: string
  programs: string
  facilities: string
  keyFacilities: string[]
  notableAchievements: string[]
  image: string
  establishmentYear: string
}
```

## Image Management

All programs support image uploads with the following specifications:
- **Formats**: PNG, JPG
- **Upload Method**: File input with preview
- **Storage**: Base64 encoding for admin preview
- **Usage**: Hero images, card images, gallery images, equipment photos

## Color Coding System

The system uses a consistent color coding scheme:
- **Primary**: `#00BFA6` (Teal)
- **Secondary**: Various colors for categories and badges
- **Category Colors**: Blue, Green, Teal, Purple, Orange, Red

## Icon System

Available icons for statistics and program features:
- `rocket`: Growth, innovation
- `trending`: Success rates, trends
- `users`: People, students, participants
- `dollar`: Funding, financial metrics
- `factory`: Equipment, manufacturing
- `lightbulb`: Ideas, innovation
- `shield`: Security, support
- `calendar`: Time-based metrics

## Admin Interface Features

### Common Actions
- **Add**: Create new content items
- **Edit**: Modify existing content
- **Delete**: Remove content items
- **Save**: Persist all changes
- **Cancel**: Discard changes

### Dialog Management
- Modal dialogs for adding/editing content
- Form validation
- Image upload with preview
- Dynamic field management

### Data Management
- Real-time updates
- State management with React hooks
- Optimistic UI updates
- Error handling

## File Structure

```
app/admin/programs/
├── entrepreneurship/
│   ├── business-development/page.tsx
│   ├── digital-skills/page.tsx
│   ├── incubation/page.tsx
│   └── soft-skills/page.tsx
├── fablab/
│   ├── machineries/page.tsx
│   ├── maker-space/page.tsx
│   └── training-consultancy/page.tsx
└── stem-operations/
    ├── science-fairs/page.tsx
    ├── stem-centers/page.tsx
    └── university-outreach/page.tsx
```

## Usage Guidelines

1. **Content Management**: Each program page allows full CRUD operations on its content
2. **Image Uploads**: Use high-quality images (PNG/JPG) for best results
3. **Statistics**: Keep statistics current and accurate
4. **Content Updates**: Regular updates ensure fresh, relevant information
5. **Responsive Design**: All content is optimized for various screen sizes

## Technical Implementation

- **Framework**: Next.js 14 with App Router
- **UI Library**: Custom components with Tailwind CSS
- **State Management**: React hooks (useState)
- **Type Safety**: TypeScript interfaces
- **Image Handling**: FileReader API for base64 conversion
- **Form Management**: Controlled components with validation

This documentation provides a comprehensive guide to managing all program content through the admin dashboard, ensuring consistent and professional presentation across all STEM Power Ethiopia programs.
