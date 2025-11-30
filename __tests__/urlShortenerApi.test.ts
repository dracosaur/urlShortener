import { shortenUrl } from '../src/api/urlShortenerApi';

global.fetch = jest.fn();

describe('urlShortenerApi', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve retornar dados normalizados ao encurtar URL com sucesso', async () => {
    const mockResponse = {
      alias: 'abc123',
      _links: {
        self: 'https://meusite.com',
        short: 'https://short.ly/abc123',
      },
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await shortenUrl('https://meusite.com');

    expect(fetch).toHaveBeenCalledWith(
      'https://url-shortener-server.onrender.com/api/alias',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
    );

    expect(result).toEqual({
      alias: 'abc123',
      originalUrl: 'https://meusite.com',
      shortUrl: 'https://short.ly/abc123',
    });
  });

  it('deve lançar erro quando a API retornar status != 2xx', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
      text: async () => 'Internal Server Error',
    });

    await expect(shortenUrl('https://meusite.com')).rejects.toThrow(
      'Erro ao encurtar URL: 500 - Internal Server Error'
    );
  });
});
