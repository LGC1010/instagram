import { useEffect } from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScreenLayout({ children }: { children: React.ReactNode }) {
  const isAndroid = Platform.OS === 'android';
  const statusBarHeight = isAndroid ? StatusBar.currentHeight || 24 : 0;

  useEffect(() => {
    if (isAndroid) {
      StatusBar.setBackgroundColor('#ffffff'); // 흰 배경
      StatusBar.setBarStyle('dark-content'); // 검은 글자 (시계, 배터리)
      StatusBar.setTranslucent(false); // 배경 겹침 방지
      StatusBar.setHidden(false);
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <View style={{ flex: 1, paddingTop: statusBarHeight, backgroundColor: '#fff' }}>{children}</View>
    </SafeAreaView>
  );
}
