import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import * as api from '../src/api/urlShortenerApi';
import { ShortenerProvider } from '../src/context/ShortenerContext';
import { HomeScreen } from '../src/screens/HomeScreen';

jest.mock('../src/api/urlShortenerApi');

const mockedShortenUrl = api.shortenUrl as jest.MockedFunction<
  typeof api.shortenUrl
>;

describe('HomeScreen', () => {
  it('deve enviar a URL digitada para o serviço de encurtamento', async () => {
    mockedShortenUrl.mockResolvedValueOnce({
      alias: 'abc123',
      originalUrl: 'https://meusite.com',
      shortUrl: 'https://short.ly/abc123',
    });

    const { getByText, getByPlaceholderText } = render(
      <ShortenerProvider>
        <HomeScreen />
      </ShortenerProvider>
    );

    const input = getByPlaceholderText('https://meusite.com');
    const button = getByText('Encurtar');

    fireEvent.changeText(input, 'https://meusite.com');
    fireEvent.press(button);

    await waitFor(() => {
      expect(mockedShortenUrl).toHaveBeenCalledTimes(1);
      expect(mockedShortenUrl).toHaveBeenCalledWith('https://meusite.com');
    });
  });
});
