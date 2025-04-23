# Modern Developer Portfolio

A modern, responsive portfolio website built with HTML, Tailwind CSS, and JavaScript. Features a clean design with smooth animations and dark mode support.

![Portfolio Preview](preview.png)

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- 🌓 Dark mode support
- ⚡ Smooth scroll animations
- 🖼️ Project showcase with image gallery
- 📝 Contact form
- 🔍 SEO optimized
- 🚀 Fast loading and performance

## Tech Stack

- HTML5
- Tailwind CSS
- JavaScript
- Font Awesome Icons
- Google Fonts (Poppins)

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will be available at `http://localhost:3000`

## Project Structure

```
portfolio/
├── dist/
│   └── output.css      # Compiled Tailwind CSS
├── src/
│   ├── index.html      # Main HTML file
│   ├── project-details.html  # Project details page
│   └── script.js       # JavaScript file
├── input.css           # Tailwind CSS input file
├── package.json        # Project dependencies
├── tailwind.config.js  # Tailwind configuration
└── README.md          # Project documentation
```

## Customization

1. **Colors**: Edit the `tailwind.config.js` file to change the color scheme:
```javascript
theme: {
    extend: {
        colors: {
            primary: '#3B82F6', // Change this to your preferred color
        }
    }
}
```

2. **Content**: Update the content in `index.html` and `project-details.html` with your information:
- Personal details
- Skills and experience
- Project information
- Contact details

3. **Images**: Replace the placeholder images in the `images` directory with your own:
- Profile picture
- Project screenshots
- Background images

## Deployment

### Option 1: Namecheap Hosting

1. **Purchase Domain and Hosting**:
   - Go to [Namecheap.com](https://www.namecheap.com)
   - Search for and purchase your desired domain name
   - Choose a hosting plan (Stellar or Stellar Plus recommended)
   - Complete the purchase process

2. **Set Up Hosting**:
   - Log in to your Namecheap account
   - Go to "Hosting List" in your dashboard
   - Click "Manage" next to your hosting plan
   - Note down your:
     - cPanel username
     - cPanel password
     - FTP credentials (if needed)

3. **Prepare Your Files**:
   ```bash
   # Build the project for production
   npm run build
   
   # Create a deployment folder
   mkdir deployment
   
   # Copy necessary files
   cp -r index.html project-details.html dist images script.js deployment/
   ```

4. **Upload Files to Namecheap**:
   
   **Method 1: Using cPanel File Manager**
   - Log in to cPanel (usually at `yourdomain.com/cpanel`)
   - Navigate to "File Manager"
   - Go to the `public_html` directory
   - Upload all files from your `deployment` folder
   - Make sure file permissions are set correctly:
     - HTML files: 644
     - CSS/JS files: 644
     - Images: 644
     - Directories: 755

   **Method 2: Using FTP**
   - Use an FTP client (FileZilla recommended)
   - Connect using your FTP credentials:
     - Host: ftp.yourdomain.com
     - Username: your FTP username
     - Password: your FTP password
     - Port: 21
   - Navigate to `public_html`
   - Upload all files from your `deployment` folder

5. **Configure Domain**:
   - In Namecheap dashboard, go to "Domain List"
   - Click "Manage" next to your domain
   - Under "Nameservers", select "Namecheap WebHosting DNS"
   - Wait for DNS propagation (can take up to 24 hours)

6. **SSL Certificate** (Recommended):
   - In cPanel, find "SSL/TLS Status"
   - Click "Install and Manage SSL for your site"
   - Choose "Install SSL Certificate"
   - Select your domain and follow the prompts

7. **Verify Deployment**:
   - Visit your domain (e.g., `www.yourdomain.com`)
   - Check that all pages load correctly
   - Verify that images and styles are working
   - Test the contact form
   - Check mobile responsiveness

8. **Troubleshooting**:
   - If styles aren't loading:
     - Check file paths in HTML files
     - Verify CSS file permissions
     - Clear browser cache
   - If images aren't showing:
     - Check image file permissions
     - Verify image paths in HTML
   - If contact form isn't working:
     - Check PHP configuration in cPanel
     - Verify form action URL

9. **Maintenance**:
   - Keep your Node.js dependencies updated
   - Regularly backup your files
   - Monitor your hosting resources
   - Keep your SSL certificate up to date

### Option 2: GitHub Pages

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to repository Settings > Pages
4. Select the main branch as source
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 3: Netlify

1. Create a Netlify account
2. Connect your GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.`
4. Deploy!

## Performance Optimization

The site is already optimized for performance with:
- Minified CSS
- Optimized images
- Lazy loading
- Efficient animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com)
- [Font Awesome](https://fontawesome.com)
- [Google Fonts](https://fonts.google.com)

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)
Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio) 