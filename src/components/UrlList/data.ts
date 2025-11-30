import { Linking } from 'react-native';
import { useShortener } from '../../context/ShortenerContext';

export function useUrlList() {
  const { items } = useShortener();

  function handleOpenShortUrl(shortUrl: string | undefined) {
    if (!shortUrl) return;
    Linking.openURL(shortUrl);
  }

  return {
    items,
    handleOpenShortUrl,
  };
}
