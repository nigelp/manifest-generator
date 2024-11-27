# PWA Manifest Generator

A web application that simplifies the creation of manifest.json files and icons for Progressive Web Apps (PWAs). Upload a single high-resolution icon, and this tool will generate all the necessary icon sizes and create a properly formatted manifest.json file.

## Features

- Upload a single icon image (recommended size: 512x512px)
- Automatically generates icons in multiple sizes (72x72 to 512x512)
- Creates a properly formatted manifest.json file
- Downloads everything as a convenient ZIP file
- Includes installation instructions
- Supports PNG and JPG formats
- Drag-and-drop file upload
- Mobile-responsive design

## Development

This project uses:
- React with TypeScript
- Vite for building
- Tailwind CSS for styling
- JSZip for ZIP file creation
- React Dropzone for file uploads

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pwa-manifest-generator.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Usage

1. Enter your app name
2. Upload your icon image (recommended size: 512x512px)
3. Click "Generate Manifest"
4. Download and extract the ZIP file
5. Follow the included instructions to implement in your PWA

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request