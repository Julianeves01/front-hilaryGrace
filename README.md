# 💎 Hilary Grace - Front-End Application

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js)
![License](https://img.shields.io/badge/License-Private-red?style=for-the-badge)

*Elegância Feminina Exclusiva - Uma boutique de joias sofisticadas para a mulher moderna*

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Technologies](#-technologies)
- [Architecture](#-architecture)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Directory Structure](#-directory-structure)
- [Available Scripts](#-available-scripts)
- [Features](#-features)
- [Common Problems & Solutions](#-common-problems--solutions)
- [Best Practices](#-best-practices)
- [Contributing](#-contributing)
- [Contact](#-contact)

---

## 🌟 Overview

**Hilary Grace** is a sophisticated e-commerce platform for a luxury jewelry boutique. The application celebrates the journey of modern women through life with elegance, confidence, and unique sophistication. This repository contains the **front-end application** built with Next.js 15.5.2 and React 19.1.0, integrating seamlessly with a Node.js backend API.

### Key Highlights

- 🎨 **Modern Design**: Elegant, responsive UI with smooth animations
- 💍 **Product Showcase**: Beautiful jewelry collection with detailed views
- 🛒 **E-commerce Features**: Product listings, details, and purchase functionality
- 📱 **Mobile-First**: Fully responsive design for all devices
- ⚡ **Performance**: Optimized with Next.js static generation and server-side rendering
- 🔄 **Real-time Updates**: Dynamic data fetching from backend API

---

## 🚀 Technologies

### Core Framework
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 15.5.2 | React framework with server-side rendering |
| **React** | 19.1.0 | UI component library |
| **React DOM** | 19.1.0 | React rendering for web |

### Libraries & Tools
| Library | Version | Purpose |
|---------|---------|---------|
| **Axios** | ^1.12.2 | HTTP client for API requests |
| **ESLint** | ^9 | Code linting and quality |
| **ESLint Config Next** | 15.5.2 | Next.js specific linting rules |

### Development Stack
- **Package Manager**: npm
- **CSS**: CSS Modules for scoped styling
- **Routing**: Next.js App Router (App Directory)
- **Font Optimization**: Next.js Font optimization

---

## 🏗️ Architecture

### Application Structure

The application follows Next.js 13+ App Router architecture with a clean separation of concerns:

```
┌─────────────────┐
│   Next.js App   │
│   (Frontend)    │
└────────┬────────┘
         │
         │ HTTP/REST
         │ (Axios)
         │
┌────────▼────────┐
│   Node.js API   │
│   (Backend)     │
└────────┬────────┘
         │
         │
┌────────▼────────┐
│    Database     │
│   (PostgreSQL)  │
└─────────────────┘
```

### Frontend Architecture

- **App Router**: Next.js 13+ app directory with file-based routing
- **Component-Based**: Reusable React components
- **CSS Modules**: Scoped styling to prevent conflicts
- **Client & Server Components**: Mix of client and server rendering
- **API Integration**: RESTful API calls via Axios

### Key Design Patterns

1. **Server-Side Rendering (SSR)**: Dynamic pages with fresh data
2. **Static Site Generation (SSG)**: Pre-rendered pages for performance
3. **Client-Side Rendering**: Interactive components with state management
4. **Responsive Design**: Mobile-first approach with CSS Grid/Flexbox

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.17.0 or higher ([Download](https://nodejs.org/))
- **npm**: v9.0.0 or higher (comes with Node.js)
- **Git**: Latest version ([Download](https://git-scm.com/))
- **Backend API**: The Node.js backend must be running ([Backend Repository](#))

### System Requirements

| Requirement | Minimum | Recommended |
|------------|---------|-------------|
| **RAM** | 4 GB | 8 GB+ |
| **Disk Space** | 500 MB | 1 GB+ |
| **OS** | Windows 10, macOS 10.15, Ubuntu 20.04 | Latest versions |

---

## 💻 Installation

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/Julianeves01/front-hilaryGrace.git

# Navigate to the project directory
cd front-hilaryGrace
```

### Step 2: Install Dependencies

```bash
# Install all npm packages
npm install
```

This will install all dependencies listed in `package.json` (approximately 314 packages).

### Step 3: Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Copy the example (if available) or create a new file
touch .env.local
```

Add the following environment variables (see [Environment Variables](#-environment-variables) section):

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Step 4: Set Up Backend API

**Important**: The frontend requires the backend API to be running. Follow these steps:

1. Clone the backend repository:
   ```bash
   git clone <backend-repository-url>
   cd <backend-directory>
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Configure backend environment variables (database, port, etc.)

4. Start the backend server:
   ```bash
   npm start
   # Backend should run on http://localhost:5000
   ```

### Step 5: Run the Development Server

```bash
# Start the Next.js development server
npm run dev
```

The application will be available at **http://localhost:3000**

### Step 6: Verify Installation

Open your browser and navigate to:
- **Homepage**: http://localhost:3000
- **Products**: http://localhost:3000/listagem
- **About**: http://localhost:3000/sobre
- **Contact**: http://localhost:3000/contato

If all pages load correctly, the installation is successful! ✅

---

## 🔐 Environment Variables

The application uses environment variables for configuration. Create a `.env.local` file in the root directory.

### Required Variables

```env
# Backend API URL - REQUIRED
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Variable Descriptions

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | - | ✅ Yes |

### Environment Files

- **`.env.local`**: Local development (not committed to Git)
- **`.env.production`**: Production environment
- **`.env`**: Shared across all environments

**Note**: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

### Example Configuration

```env
# Development
NEXT_PUBLIC_API_URL=http://localhost:5000

# Production
# NEXT_PUBLIC_API_URL=https://api.hilarygrace.com
```

---

## 📁 Directory Structure

```
front-hilaryGrace/
├── 📂 public/                  # Static assets
│   ├── 📂 icons/               # Application icons
│   │   └── logo.png            # Brand logo
│   └── 📂 image/               # Images
│       ├── collection-1.jpg    # Collection images
│       ├── collection-2.jpg
│       ├── collection-3.jpg
│       └── about-main.jpg      # About page image
│
├── 📂 src/                     # Source code
│   ├── 📂 app/                 # Next.js App Router
│   │   ├── 📄 layout.js        # Root layout (Header/Footer)
│   │   ├── 📄 page.jsx         # Homepage
│   │   ├── 📄 globals.css      # Global styles
│   │   ├── 📄 page.module.css  # Homepage styles
│   │   ├── 📄 not-found.jsx    # 404 error page
│   │   │
│   │   ├── 📂 contato/         # Contact page
│   │   │   └── page.jsx
│   │   ├── 📂 criar/           # Create jewelry (Admin)
│   │   │   └── page.jsx
│   │   ├── 📂 detalhes/[id]/   # Product details (dynamic)
│   │   │   └── page.jsx
│   │   ├── 📂 listagem/        # Product listing
│   │   │   └── page.jsx
│   │   ├── 📂 sobre/           # About page
│   │   │   └── page.jsx
│   │   ├── 📂 usuarias/        # Users page
│   │   │   └── page.jsx
│   │   └── 📂 vendas/          # Sales page
│   │       └── page.jsx
│   │
│   ├── 📂 components/          # Reusable components
│   │   ├── Footer.jsx          # Footer component
│   │   ├── Header.jsx          # Header/Navigation
│   │   ├── Hero.jsx            # Hero section
│   │   └── ProductCard.jsx     # Product card component
│   │
│   └── 📂 styles/              # CSS Modules
│       ├── admin.module.css
│       ├── contato.module.css
│       ├── footer.module.css
│       ├── header.module.css
│       ├── Hero.module.css
│       ├── listagem.module.css
│       └── productCard.module.css
│
├── 📄 .gitignore               # Git ignore rules
├── 📄 eslint.config.mjs        # ESLint configuration
├── 📄 jsconfig.json            # JavaScript configuration
├── 📄 next.config.mjs          # Next.js configuration
├── 📄 package.json             # Dependencies and scripts
├── 📄 package-lock.json        # Locked dependencies
└── 📄 README.md                # This file
```

### Key Directories Explained

- **`public/`**: Static files served directly (images, icons, fonts)
- **`src/app/`**: Next.js App Router pages and layouts
- **`src/components/`**: Reusable React components
- **`src/styles/`**: CSS Modules for component styling
- **`.next/`**: Build output (generated, not committed)
- **`node_modules/`**: Installed dependencies (not committed)

---

## 📜 Available Scripts

Execute these commands from the project root directory:

### Development

```bash
npm run dev
```
Starts the development server with hot-reload at **http://localhost:3000**

- **Hot Module Replacement**: Changes reflect instantly
- **Fast Refresh**: Preserves component state during edits
- **Error Overlay**: Displays errors directly in the browser

### Production Build

```bash
npm run build
```
Creates an optimized production build

- **Output**: `.next/` directory
- **Static Generation**: Pre-renders static pages
- **Bundle Optimization**: Minifies and tree-shakes code
- **Build Time**: ~10-30 seconds

### Production Server

```bash
npm start
```
Runs the production server (requires `npm run build` first)

- **Port**: 3000 (default)
- **Optimized**: Serves pre-built production assets

### Linting

```bash
npm run lint
```
Runs ESLint to check code quality

- **Configuration**: `eslint.config.mjs`
- **Rules**: Next.js recommended + custom rules

### Script Summary

| Script | Command | Purpose |
|--------|---------|---------|
| **dev** | `npm run dev` | Development server |
| **build** | `npm run build` | Production build |
| **start** | `npm start` | Production server |
| **lint** | `npm run lint` | Code linting |

---

## ✨ Features

### Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| **Homepage** | `/` | Hero section, featured collections, product previews |
| **Product Listing** | `/listagem` | Grid view of all jewelry products |
| **Product Details** | `/detalhes/[id]` | Detailed product view with purchase option |
| **About** | `/sobre` | Brand story, values, and mission |
| **Contact** | `/contato` | Contact form and information |
| **Create Jewelry** | `/criar` | Admin page to add new products |
| **Users** | `/usuarias` | User management |
| **Sales** | `/vendas` | Sales tracking and management |

### Core Features

#### 🏠 Homepage
- Hero banner with brand messaging
- Featured collection showcase (3 categories)
- Top 8 featured products from API
- Responsive grid layout

#### 💍 Product Catalog
- Dynamic product listing from backend API
- Product card with image, name, price
- Click to view details
- Filtering and search capabilities

#### 🔍 Product Details
- Full product information
- High-quality product images
- Status indicator (available/sold)
- Purchase functionality
- User email integration
- Creation date display

#### 📝 About Page
- Brand story and mission
- Company values (Quality, Elegance, Sustainability)
- Statistics (500+ happy customers, 3 years of excellence)
- Vision and commitment

#### 📧 Contact Form
- Name, email, subject fields
- Message textarea
- Subject categories (Order, Returns, Other)
- Form validation
- Success/error feedback

#### 👨‍💼 Admin Features
- Create new jewelry products
- Upload product images
- Set product details (name, price, description)
- User association
- Debug information display

### Technical Features

- ⚡ **Performance**: Next.js optimization with static generation
- 🎨 **Styling**: CSS Modules for scoped, maintainable styles
- 📱 **Responsive**: Mobile-first design approach
- 🔄 **Data Fetching**: Axios for API requests
- 🧭 **Routing**: File-based routing with dynamic routes
- 🖼️ **Image Optimization**: Next.js Image component
- 🌐 **SEO**: Metadata configuration for better search rankings
- ♿ **Accessibility**: Semantic HTML and ARIA labels

---

## 🔧 Common Problems & Solutions

### Problem 1: "Cannot find module 'next'"

**Symptoms**: Build or dev server fails with module not found error

**Solution**:
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Problem 2: "Failed to fetch from API"

**Symptoms**: Products don't load, API errors in console

**Possible Causes & Solutions**:

1. **Backend not running**
   ```bash
   # Start the backend server
   cd <backend-directory>
   npm start
   ```

2. **Wrong API URL**
   ```bash
   # Check .env.local file
   NEXT_PUBLIC_API_URL=http://localhost:5000  # Correct URL
   ```

3. **CORS issues**
   - Ensure backend has CORS enabled
   - Add frontend origin to backend CORS whitelist

### Problem 3: "Port 3000 already in use"

**Symptoms**: Cannot start dev server

**Solution**:
```bash
# Option 1: Use a different port
PORT=3001 npm run dev

# Option 2: Kill the process using port 3000
# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On macOS/Linux
lsof -ti:3000 | xargs kill -9
```

### Problem 4: "Images not loading"

**Symptoms**: Broken image icons, 404 for images

**Solution**:
```bash
# Ensure images are in public/ directory
ls public/image/

# Check image paths in code (should be absolute from public/)
<img src="/image/collection-1.jpg" alt="Collection" />
```

### Problem 5: "Build fails with ESLint errors"

**Symptoms**: `npm run build` fails on linting

**Solution**:
```bash
# Fix linting errors
npm run lint

# Or temporarily skip linting (not recommended)
# In next.config.mjs:
export default {
  eslint: {
    ignoreDuringBuilds: true,
  },
};
```

### Problem 6: "Environment variables not working"

**Symptoms**: `process.env.NEXT_PUBLIC_API_URL` is undefined

**Solution**:
```bash
# Restart dev server after changing .env.local
# Variables must start with NEXT_PUBLIC_ to be exposed to browser
NEXT_PUBLIC_API_URL=http://localhost:5000  # ✅ Correct
API_URL=http://localhost:5000              # ❌ Won't work in browser
```

### Problem 7: "Page shows old content after update"

**Symptoms**: Changes don't appear after deployment

**Solution**:
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
npm start
```

### Problem 8: "Hydration error in console"

**Symptoms**: "Text content did not match" error

**Solution**:
- Ensure server and client render the same content
- Avoid using browser-only APIs during SSR
- Use `useEffect` for client-only code

---

## 🎯 Best Practices

### Development Workflow

1. **Always pull latest changes**
   ```bash
   git pull origin main
   npm install  # Update dependencies
   ```

2. **Create feature branches**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Test before committing**
   ```bash
   npm run lint     # Check code quality
   npm run build    # Ensure it builds
   npm run dev      # Manual testing
   ```

4. **Write meaningful commit messages**
   ```bash
   git commit -m "feat: Add product filtering functionality"
   git commit -m "fix: Resolve image loading issue on mobile"
   ```

### Code Style

#### Component Structure
```javascript
// Good: Organized imports, clear structure
'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './styles.module.css'

export default function MyComponent() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    // Fetch data
  }, [])
  
  return (
    <div className={styles.container}>
      {/* Content */}
    </div>
  )
}
```

#### API Calls
```javascript
// Good: Error handling, loading states
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

try {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/joias`
  )
  setData(response.data)
} catch (error) {
  console.error('Error fetching data:', error)
  setError('Failed to load data')
} finally {
  setLoading(false)
}
```

#### CSS Modules
```css
/* Good: BEM-like naming, scoped styles */
.productCard {
  border: 1px solid #ddd;
  border-radius: 8px;
}

.productCard__image {
  width: 100%;
  height: auto;
}

.productCard__title {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}
```

### Performance Optimization

1. **Use Next.js Image component**
   ```jsx
   import Image from 'next/image'
   
   <Image 
     src="/image/product.jpg" 
     alt="Product"
     width={500}
     height={500}
   />
   ```

2. **Lazy load components**
   ```jsx
   import dynamic from 'next/dynamic'
   
   const HeavyComponent = dynamic(() => import('./HeavyComponent'))
   ```

3. **Minimize client-side JavaScript**
   - Use Server Components when possible
   - Only use `'use client'` when necessary

4. **Optimize API calls**
   - Cache responses when appropriate
   - Use SWR or React Query for data fetching
   - Implement pagination for large datasets

### Security Best Practices

1. **Never commit secrets**
   - Use `.env.local` for sensitive data
   - Add `.env*` to `.gitignore`

2. **Validate user input**
   ```javascript
   // Always validate and sanitize
   const email = formData.email.trim().toLowerCase()
   if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
     setError('Invalid email address')
     return
   }
   ```

3. **Sanitize API responses**
   - Don't trust API data blindly
   - Validate response structure

4. **Use HTTPS in production**
   ```env
   # Production
   NEXT_PUBLIC_API_URL=https://api.hilarygrace.com
   ```

---

## 🤝 Contributing

We welcome contributions to improve Hilary Grace! Follow these guidelines:

### Getting Started

1. **Fork the repository**
   - Click "Fork" button on GitHub
   - Clone your fork locally

2. **Create a branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Follow code style guidelines
   - Write clear, self-documenting code
   - Add comments for complex logic

4. **Test your changes**
   ```bash
   npm run lint    # Check code style
   npm run build   # Ensure it builds
   npm run dev     # Manual testing
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: Add amazing feature"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Create Pull Request**
   - Go to original repository
   - Click "New Pull Request"
   - Describe your changes clearly

### Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

**Examples**:
```
feat: Add search functionality to product listing
fix: Resolve mobile navigation menu issue
docs: Update installation instructions
style: Format code with prettier
refactor: Simplify API error handling
test: Add unit tests for ProductCard component
chore: Update dependencies
```

### Code Review Process

1. All changes must be reviewed
2. Address reviewer feedback
3. Maintain clean commit history
4. Ensure CI/CD passes

### Contribution Areas

- 🐛 **Bug Fixes**: Fix reported issues
- ✨ **Features**: Add new functionality
- 📝 **Documentation**: Improve docs
- 🎨 **UI/UX**: Enhance design
- ⚡ **Performance**: Optimize code
- ♿ **Accessibility**: Improve a11y

---

## 📞 Contact

### Project Information

- **Project Name**: Hilary Grace Front-End
- **Repository**: [github.com/Julianeves01/front-hilaryGrace](https://github.com/Julianeves01/front-hilaryGrace)
- **Version**: 0.1.0
- **License**: Private

### Get In Touch

For questions, support, or collaboration:

- 📧 **Email**: Contact through the website's contact form
- 🌐 **Website**: Visit the [Contact Page](http://localhost:3000/contato)
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/Julianeves01/front-hilaryGrace/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/Julianeves01/front-hilaryGrace/discussions)

### Developer

- **GitHub**: [@Julianeves01](https://github.com/Julianeves01)

---

## 📄 License

This project is **private** and proprietary. All rights reserved.

Unauthorized copying, distribution, or use of this software, via any medium, is strictly prohibited without explicit permission from the owner.

---

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing React framework
- **Vercel**: For hosting and deployment platform
- **React Team**: For the powerful UI library
- **Open Source Community**: For invaluable tools and libraries

---

<div align="center">

**Made with ❤️ for modern women who value elegance and sophistication**

*Hilary Grace - Elevating everyday moments with timeless style*

---

⭐ **Star this repository** if you find it helpful!

</div>
