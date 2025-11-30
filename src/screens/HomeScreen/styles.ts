import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#050816', // preto puxando pra azul/roxo
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#E5E7EB',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 24, // espaço maior entre título/subtítulo e conteúdo
  },
  content: {
    flex: 1,
    gap: 24, // se der warning na sua versão, dá pra trocar por marginBottom nos filhos
  },
});
