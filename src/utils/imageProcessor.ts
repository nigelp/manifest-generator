export const ICON_SIZES = [72, 96, 128, 144, 152, 192, 384, 512];

export async function resizeImage(file: File, size: number): Promise<Blob> {
  return new Promise((resolve) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;

    img.onload = () => {
      canvas.width = size;
      canvas.height = size;
      ctx.drawImage(img, 0, 0, size, size);
      canvas.toBlob((blob) => {
        resolve(blob!);
      }, 'image/png');
    };

    img.src = URL.createObjectURL(file);
  });
}

export function generateManifestContent(appName: string): string {
  const manifest = {
    name: appName,
    short_name: appName,
    description: `${appName} Progressive Web App`,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: ICON_SIZES.map((size) => ({
      src: `icons/icon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      type: 'image/png',
      purpose: 'any maskable'
    }))
  };

  return JSON.stringify(manifest, null, 2);
}