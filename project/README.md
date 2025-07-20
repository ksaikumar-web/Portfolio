# Portfolio - Kumber Sai Kumar

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Deployment on Render

This project is configured for easy deployment on Render. Follow these steps:

### Option 1: Using render.yaml (Recommended)

1. **Upload your project to GitHub:**
   - Make sure both the `render.yaml` file (in parent directory) and the `project` folder are in your repository
   - The structure should be: `repository-root/render.yaml` and `repository-root/project/`

2. **Connect your GitHub repository to Render:**
   - Go to [render.com](https://render.com)
   - Sign up/Login with your GitHub account
   - Click "New +" and select "Blueprint"
   - Connect your GitHub repository

3. **Automatic Deployment:**
   - Render will automatically detect the `render.yaml` file
   - The service will be configured as a static site
   - Your site will be deployed automatically

### Option 2: Manual Configuration

1. **Create a new Static Site on Render:**
   - Go to [render.com](https://render.com)
   - Click "New +" and select "Static Site"
   - Connect your GitHub repository

2. **Configure the build settings:**
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
   - **Environment:** Static Site

3. **Deploy:**
   - Click "Create Static Site"
   - Render will build and deploy your site

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
project/
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/
│   └── profile.jpg      # Profile image
├── render.yaml          # Render deployment configuration
├── deploy.sh           # Alternative deployment script
└── package.json        # Project dependencies and scripts
```

## 🎨 Features

- **Responsive Design:** Works perfectly on all devices
- **Modern UI:** Built with Tailwind CSS for a clean, professional look
- **TypeScript:** Type-safe development
- **Vite:** Fast development and build times
- **Smooth Animations:** CSS animations and transitions
- **SEO Optimized:** Proper meta tags and structure

## 🔧 Technologies Used

- **Frontend:** React 18, TypeScript, Tailwind CSS
- **Build Tool:** Vite
- **Icons:** Lucide React
- **Deployment:** Render (Static Site)

## 📝 Environment Variables

No environment variables are required for this static site deployment.

## 🌐 Live Demo

Once deployed, your site will be available at:
`https://your-app-name.onrender.com`

## 📞 Contact

- **Email:** ksai6342@gmail.com
- **LinkedIn:** [Kumber Sai Kumar](https://linkedin.com/in/KumberSaiKumar)
- **GitHub:** [KumberSaiKumar](https://github.com/KumberSaiKumar)

---

**Note:** Make sure your repository is public or you have a Render Pro account for private repositories. 