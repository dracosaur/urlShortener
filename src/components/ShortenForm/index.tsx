import React from 'react';
import {
    ActivityIndicator,
    Pressable,
    Text,
    TextInput,
    View,
} from 'react-native';
import { useShortenForm } from './data';
import { styles } from './styles';

export const ShortenForm: React.FC = () => {
  const {
    url,
    setUrl,
    loading,
    error,
    disabled,
    handleShorten,
  } = useShortenForm();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite a URL para encurtar</Text>

      <TextInput
        value={url}
        onChangeText={setUrl}
        placeholder="https://meusite.com"
        placeholderTextColor="#6B7280"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="url"
        style={styles.input}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}

      <Pressable
        onPress={handleShorten}
        disabled={disabled}
        style={({ pressed }) => [
          styles.button,
          disabled && styles.buttonDisabled,
          pressed && !disabled && styles.buttonPressed,
        ]}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#F9FAFB" />
        ) : (
          <Text style={styles.buttonText}>Encurtar</Text>
        )}
      </Pressable>
    </View>
  );
};
