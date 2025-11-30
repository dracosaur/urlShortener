const BASE_URL = 'https://url-shortener-server.onrender.com/api/alias';

export interface ShortenedUrl {
  alias: string;
  originalUrl: string;
  shortUrl: string;
}

export async function shortenUrl(url: string): Promise<ShortenedUrl> {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Erro ao encurtar URL: ${response.status} - ${text}`);
  }

  const data = await response.json();

  return {
    alias: data.alias,
    originalUrl: data._links.self,
    shortUrl: data._links.short,
  };
}

export async function getOriginalUrl(alias: string): Promise<string> {
  const response = await fetch(`${BASE_URL}/${alias}`);

  if (response.status === 404) {
    throw new Error('Alias não encontrado');
  }

  if (!response.ok) {
    throw new Error(`Erro ao buscar URL: ${response.status}`);
  }

  const data = await response.json();
  return data.url as string;
}
