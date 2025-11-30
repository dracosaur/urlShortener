import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ShortenForm } from '../../components/ShortenForm';
import { UrlList } from '../../components/UrlList';
import { useHomeScreen } from './data';
import { styles } from './styles';

export const HomeScreen: React.FC = () => {
  const { title, subtitle } = useHomeScreen();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.subtitle}>{subtitle}</Text>

        <View style={styles.content}>
          <ShortenForm />
          <UrlList />
        </View>
      </View>
    </SafeAreaView>
  );
};
