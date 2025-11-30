import React from 'react';
import { ShortenerProvider } from '../src/context/ShortenerContext';
import { HomeScreen } from '../src/screens/HomeScreen';

export default function Index() {
  return (
    <ShortenerProvider>
      <HomeScreen />
    </ShortenerProvider>
  );
}
