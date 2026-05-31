import { MediaLibraryType } from '@open-ent/react/multimedia';

export interface MediaProps {
  id: string;
  name: string;
  application: string;
  type: MediaLibraryType;
  url: string;
  targetUrl?: string;
}
