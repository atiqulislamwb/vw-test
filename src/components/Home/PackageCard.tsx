import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';

import {AppText} from '../AppText';
import {AppButton} from '../AppButton';
import LinearGradient from 'react-native-linear-gradient';

import IconLock from '../../assets/icons/IconLock.svg';
import AppStyles from '../../config/AppStyles';

const {width, height} = Dimensions.get('window');

const PackageCard = ({packageData, index}) => {
  return (
    <View style={{...styles.container, width: width / 2 - 15}}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#353535', '#003C6E']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.background}
      />

      <View
        style={{
          width: '100%',

          backgroundColor:
            index == 1 ? AppStyles.color(1).skyblue : 'transparent',
          paddingVertical: 5,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          height: 23,
        }}>
        <AppText
          text={index == 1 ? 'Recommended' : ''}
          size={10}
          textColor={AppStyles.color(1).white}
          style={{textAlign: 'center', fontFamily: 'Poppins-Light'}}
        />
      </View>

      <View style={{paddingHorizontal: 2}}>
        <AppText
          text={packageData?.Name}
          style={{
            textAlign: 'center',
            marginTop: 8,
            fontFamily: 'Poppins-Light',
            fontWeight: '400',
          }}
          size={12}
          textColor={AppStyles.color(1).white}
        />

        <AppText
          text={packageData?.Price}
          style={{
            textAlign: 'center',
            marginTop: 6,
            fontFamily: 'Poppins-Medium',
            fontWeight: 'bold',
          }}
          size={18}
          textColor={AppStyles.color(1).white}
        />

        <AppButton
          label="Select"
          style={{
            borderRadius: 20,
            marginTop: 8,
            marginHorizontal: 14,
          }}
          textColor={AppStyles.color(1).white}
          textSize={10}
          fontFamily={'Poppins-Medium'}
        />

        <View
          style={{
            marginTop: 10,
            gap: 5,
            paddingHorizontal: 16,
          }}>
          <Text style={styles.infoText}>
            Profit :{' '}
            <Text
              style={{
                ...styles.infoText,
                fontFamily: 'Poppins-Medium',
                fontWeight: '400',
              }}>
              {packageData?.MonthlyReturn}
            </Text>
          </Text>
          <Text style={styles.infoText}>
            Maturity :{' '}
            <Text
              style={{
                ...styles.infoText,
                fontFamily: 'Poppins-Medium',
                fontWeight: '400',
              }}>
              {packageData?.Duration} or 3 years
            </Text>
          </Text>
          <Text style={styles.infoText}>
            Bonus :{' '}
            <Text
              style={{
                ...styles.infoText,
                fontFamily: 'Poppins-Medium',
                fontWeight: '400',
              }}>
              {packageData?.Bonus} tokens
            </Text>
          </Text>
          <Text style={styles.infoText}>
            Maturity bonus :{' '}
            <Text
              style={{
                ...styles.infoText,
                fontFamily: 'Poppins-Medium',
                fontWeight: '400',
              }}>
              {packageData?.MaturityBonus} % after maturity
            </Text>
          </Text>
        </View>
      </View>

      {/* If you blur this please make sure packageData?.ComingSoon is true */}

      {/* {packageData?.ComingSoon && packageData?.ComingSoon == true && (
        <BlurView
          tint="dark"
          intensity={25}
          style={styles.blurContainer}
          experimentalBlurMethod="dimezisBlurView">
          <IconLock />

          <AppText
            text={'Coming Soon'}
            style={{
              textAlign: 'center',
              marginTop: 13,
              fontFamily: 'Poppins-Bold',
            }}
            size={20}
            textColor={AppStyles.color(1).white}
          />
        </BlurView>
      )} */}
    </View>
  );
};

export default PackageCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: 240,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 240,
    borderRadius: 10,
  },
  infoText: {
    fontSize: 10,
    color: AppStyles.color(1).white,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
  },

  blurContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    height: 240,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
