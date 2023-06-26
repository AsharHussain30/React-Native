import React, {useEffect, useState} from 'react';
import {
  Alert,
  ImageBackground,
  StatusBar,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  BannerAd,
  RewardedAd,
  AppOpenAd,
  RewardedInterstitialAd,
  TestIds,
  RewardedAdEventType,
  BannerAdSize,
  InterstitialAd,
  AdEventType,
} from 'react-native-google-mobile-ads';
import {GameEngine} from 'react-native-game-engine';
import entities from './entities';
import Physics from './physics';

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-7268660325970803/6104428675';

const rewarded = RewardedAd.createForAdRequest(
  'ca-app-pub-7268660325970803/4553126558',
  {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
  },
);

const interstitial = InterstitialAd.createForAdRequest(
  'ca-app-pub-7268660325970803/6104428675',
  {
    requestNonPersonalizedAdsOnly: true,
  },
);

const rewardedAd = RewardedAd.createForAdRequest(
  'ca-app-pub-7268660325970803/4553126558',
  {
    requestNonPersonalizedAdsOnly: true,
  },
);
export default function App() {
  const [interstitialLoaded, setInterstitialLoaded] = useState(false);
  const [rewardedInterstitialLoaded, setRewardedInterstitialLoaded] =
    useState(false);

  const loadInterstitial = () => {
    const unsubscribeLoaded = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setInterstitialLoaded(true);
      },
    );

    const unsubscribeClosed = interstitial.addAdEventListener(
      AdEventType.CLOSED,
      () => {
        setInterstitialLoaded(false);
        interstitial.load();
      },
    );

    interstitial.load();

    return () => {
      unsubscribeClosed();
      unsubscribeLoaded();
    };
  };

  const loadRewardedInterstitial = () => {
    const unsubscribeLoaded = rewardedAd.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        setRewardedInterstitialLoaded(true);
      },
    );

    const unsubscribeEarned = rewardedAd.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        console.log(`User earned reward of ${reward.amount} ${reward.type}`);
      },
    );

    const unsubscribeClosed = rewardedAd.addAdEventListener(
      AdEventType.CLOSED,
      () => {
        setRewardedInterstitialLoaded(false);
        rewardedAd.load();
      },
    );

    rewardedAd.load();

    return () => {
      unsubscribeLoaded();
      unsubscribeClosed();
      unsubscribeEarned();
    };
  };

  useEffect(() => {
    const unsubscribeInterstitialEvents = loadInterstitial();
    const unsubscribeRewardedInterstitialEvents = loadRewardedInterstitial();

    return () => {
      unsubscribeInterstitialEvents();
      unsubscribeRewardedInterstitialEvents();
    };
  }, []);
  // const [loaded, setLoaded] = useState(false);

  // // if(RewardedAd == !loaded){
  // //   Alert.alert("No Ad")
  // //   }

  // useEffect(() => {
  //      const unsubscribeLoaded = rewarded.addAdEventListener(
  //        RewardedAdEventType.LOADED,

  //        () => {
  //          setLoaded(true);
  //        },
  //      );
  //      const unsubscribeEarned = rewarded.addAdEventListener(
  //        RewardedAdEventType.EARNED_REWARD,
  //        reward => {
  //          console.log('User earned reward of ', reward);
  //        },
  //      );

  //     //  Start loading the rewarded ad straight away

  //      if (rewarded.loaded) {
  //        setLoaded(true);
  //      } else {
  //        rewarded.load();
  //      }

  //       rewarded.load();
  //      setRunning(false);

  //       // Unsubscribe from events on unmount
  //      return () => {
  //        unsubscribeLoaded();
  //        unsubscribeEarned();
  //      };

  // }, []);

  const [running, setRunning] = useState(false);
  const [gameEngine, setGameEngine] = useState(null);
  const [currentPoints, setCurrentPoints] = useState(0);

  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      <ImageBackground
        source={require('./Assets/bg.gif')}
        style={{flex: 1, height: '100%'}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 40,
            fontWeight: 'bold',
            margin: 20,
          }}>
          {currentPoints}
        </Text>
        <GameEngine
          ref={ref => {
            setGameEngine(ref);
          }}
          systems={[Physics]}
          entities={entities()}
          running={running}
          onEvent={e => {
            switch (e.type) {
              case 'game_over':
                setRunning(false);
                gameEngine.stop();
                break;
              case 'new_point':
                setCurrentPoints(currentPoints + 1);
                break;
            }
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}></GameEngine>

        {!running ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: 'black',
                alignSelf: 'flex-end',
                paddingHorizontal: 20,
                paddingVertical: 10,
                marginHorizontal: 10,
                marginVertical: 30,
                borderRadius: 25,
                bottom:30,
                borderWidth:2,
                borderColor:"cyan",
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'gold'}}>
                {currentPoints} Coins
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: 'black',
                borderWidth: 2,
                borderColor: 'cyan',
                elevation: 33,
                borderRadius: 35,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}
              onPress={() => {
                setCurrentPoints(0);
                setRunning(true);
                gameEngine.swap(entities());
              }}>
              <Text style={{fontWeight: 'bold', color: 'white', fontSize: 30}}>
                START GAME
              </Text>
            </TouchableOpacity>

            {interstitialLoaded ? (
              <Button title="Earn Coin" onPress={() => interstitial.show()} />
            ) : (
              <Text>Loading Ad For Coins...</Text>
            )}
            {rewardedInterstitialLoaded ? (
              <Button title="Earn Coin" onPress={() => rewardedAd.show()} />
            ) : (
              <Text>Please Wait Loading Rewarded Coin...</Text>
            )}

            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                flex: 1,
              }}>
              <BannerAd
                size={BannerAdSize.BANNER}
                unitId={'ca-app-pub-7268660325970803/1549410499'}
              />
              <BannerAd
                size={BannerAdSize.INLINE_ADAPTIVE_BANNER}
                unitId={'ca-app-pub-7268660325970803/1549410499'}
              />
              <BannerAd
                size={BannerAdSize.FULL_BANNER}
                unitId={'ca-app-pub-7268660325970803/1549410499'}
              />
            </View>
          </View>
        ) : null}
        {/* 
      <TouchableOpacity onPress={() => interstitial.show()}>
        <Text>View Ad</Text>
      </TouchableOpacity> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
