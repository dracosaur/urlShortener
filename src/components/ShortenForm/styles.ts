import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#0B1020',
    borderWidth: 1,
    borderColor: '#1F2937',
    marginBottom: 8,
  },
  label: {
    fontSize: 15,
    marginBottom: 10,
    fontWeight: '600',
    color: '#E5E7EB',
  },
  input: {
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#F9FAFB',
    backgroundColor: '#020617',
    marginBottom: 10,
  },
  errorText: {
    color: '#F97373',
    marginBottom: 10,
    fontSize: 13,
  },
  button: {
    marginTop: 4,
    alignSelf: 'flex-start',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: '#7C3AED',
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  buttonDisabled: {
    backgroundColor: '#4B5563',
  },
  buttonText: {
    color: '#F9FAFB',
    fontWeight: '600',
    fontSize: 15,
  },
});
