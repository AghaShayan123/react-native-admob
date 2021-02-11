import React, {useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob'

export default App = () => {
  
  useEffect(() => {
    // Display an interstitial
    AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
  }, [])

  return(
    <View style={styles.container}>
        {/* // Display a banner */}
        <AdMobBanner
          adSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          testDevices={[AdMobBanner.simulatorId]}
          onAdFailedToLoad={error => console.error(error)}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})