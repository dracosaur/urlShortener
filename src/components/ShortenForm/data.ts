import { useState } from 'react';
import { shortenUrl } from '../../api/urlShortenerApi';
import { useShortener } from '../../context/ShortenerContext';

export function useShortenForm() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { addShortenedUrl } = useShortener();

  async function handleShorten() {
    setError(null);

    const trimmed = url.trim();
    if (!trimmed) {
      setError('Informe uma URL.');
      return;
    }

    try {
      setLoading(true);
      const result = await shortenUrl(trimmed);
      addShortenedUrl(result);
      setUrl('');
    } catch (e: any) {
      setError(e?.message ?? 'Erro ao encurtar URL.');
    } finally {
      setLoading(false);
    }
  }

  const disabled = !url.trim() || loading;

  return {
    url,
    setUrl,
    loading,
    error,
    disabled,
    handleShorten,
  };
}
