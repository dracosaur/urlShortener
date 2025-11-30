import React from 'react';
import {
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';
import { useUrlList } from './data';
import { styles } from './styles';

export const UrlList: React.FC = () => {
  const { items, handleOpenShortUrl } = useUrlList();

  if (!items.length) {
    return <Text style={styles.emptyText}>Nenhum link encurtado ainda.</Text>;
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => handleOpenShortUrl(item.shortUrl)}
        >
          <Text style={styles.alias}>{item.alias}</Text>
          <Text style={styles.shortUrl}>{item.shortUrl}</Text>
          <Text style={styles.originalUrl} numberOfLines={1}>
            {item.originalUrl}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};
