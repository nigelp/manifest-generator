export interface ManifestIcon {
  src: string;
  sizes: string;
  type: string;
  purpose: string;
}

export interface Manifest {
  name: string;
  short_name: string;
  description: string;
  start_url: string;
  display: string;
  background_color: string;
  theme_color: string;
  icons: ManifestIcon[];
}