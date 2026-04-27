import { useState, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Host, Button, Menu, RNHostView, Section } from '@expo/ui/swift-ui';

export default function App() {
  const [bannerVisible, setBannerVisible] = useState(false);

  const renderItem = useCallback(
    ({ item }) => (
      <View style={styles.row}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    ),
    [],
  );

  const renderListHeader = useCallback(
    () => (
      <View style={styles.header}>
        <Text style={styles.heading}>Title</Text>

        {bannerVisible && (
          <View style={styles.banner}>
            <Text style={styles.bannerText}>Banner 2 activated</Text>
          </View>
        )}

        <View style={styles.banner2}>
          <Text style={styles.banner2Text}>Banner 1</Text>
        </View>

        <View style={styles.actions}>
          <Host matchContents ignoreSafeArea="all">
            <Menu
              label={
                // <RNHostView matchContents>
                  <View style={styles.actionBtn}>
                    <View style={styles.actionIconCircle}>
                      <Text style={styles.actionIcon}>•••</Text>
                    </View>
                    <Text style={styles.actionLabel}>More</Text>
                  </View>
                // </RNHostView>
              }
            >
              <Button label="Action 1" onPress={() => setBannerVisible((v) => !v)} />
              <Button label="Action 2" onPress={() => setBannerVisible((v) => !v)} />
            </Menu>
          </Host>
        </View>
      </View>
    ),
    [bannerVisible],
  );

  return (
    <View style={styles.container}>
      <FlashList
        data={Array.from({ length: 100 }, (_, i) => ({ id: String(i), title: `Item ${i + 1}` }))}
        renderItem={renderItem}
        ListHeaderComponent={renderListHeader}
        estimatedItemSize={56}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    paddingBottom: 40,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    gap: 8,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    marginBottom: 12,
  },
  banner: {
    backgroundColor: '#e8f0fe',
    borderRadius: 12,
    padding: 16,
    width: '100%',
  },
  bannerText: {
    fontSize: 14,
    color: '#1a73e8',
    textAlign: 'center',
  },
  banner2: {
    backgroundColor: '#fef3e0',
    borderRadius: 12,
    padding: 16,
    width: '100%',
  },
  banner2Text: {
    fontSize: 14,
    color: '#e65100',
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginTop: 12,
  },
  actionBtn: {
    alignItems: 'center',
    gap: 4,
  },
  actionIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIcon: {
    fontSize: 18,
  },
  actionLabel: {
    fontSize: 12,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
    height: 56,
  },
  title: {
    fontSize: 16,
  },
});
