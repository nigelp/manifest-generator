import React, { useState } from 'react';
import JSZip from 'jszip';
import { Download } from 'lucide-react';
import { FileUpload } from './components/FileUpload';
import { AppNameInput } from './components/AppNameInput';
import { ICON_SIZES, resizeImage, generateManifestContent } from './utils/imageProcessor';
import { generateSafeFileName } from './utils/stringUtils';

function App() {
  const [appName, setAppName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleGenerate = async () => {
    if (!selectedFile || !appName) return;

    setIsGenerating(true);
    const zip = new JSZip();

    try {
      // Create icons folder
      const iconsFolder = zip.folder('icons')!;

      // Generate icons for all sizes
      for (const size of ICON_SIZES) {
        const resizedBlob = await resizeImage(selectedFile, size);
        iconsFolder.file(`icon-${size}x${size}.png`, resizedBlob);
      }

      // Add manifest.json
      zip.file('manifest.json', generateManifestContent(appName));

      // Add README.md
      zip.file('README.md', `# PWA Icons and Manifest for ${appName}

1. Extract the contents of this ZIP file
2. Copy the \`icons\` folder to your project's public directory
3. Copy \`manifest.json\` to your project's public directory
4. Add the following line to your HTML's <head> section:
   \`<link rel="manifest" href="/manifest.json">\`
`);

      // Generate and download zip with app name as filename
      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${generateSafeFileName(appName)}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating manifest:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            PWA Manifest Generator
          </h1>
          
          <AppNameInput value={appName} onChange={setAppName} />
          
          <div className="mb-8">
            <FileUpload onFileSelect={setSelectedFile} />
          </div>

          <button
            onClick={handleGenerate}
            disabled={!selectedFile || !appName || isGenerating}
            className={`w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white ${
              !selectedFile || !appName || isGenerating
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            <Download className="w-5 h-5 mr-2" />
            {isGenerating ? 'Generating...' : 'Generate Manifest'}
          </button>

          {selectedFile && (
            <div className="mt-4 text-sm text-gray-500 text-center">
              Selected file: {selectedFile.name}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;