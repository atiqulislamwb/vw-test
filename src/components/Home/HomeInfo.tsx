import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppText} from '../AppText';

import IconInfo from '../../assets/icons/IconInfo.svg';
import AppStyles from '../../config/AppStyles';

const HomeInfo = () => {
  return (
    <View style={{paddingHorizontal: 6}}>
      <AppText
        text={'Get FDR Package'}
        style={{
          marginTop: 5,
          fontFamily: 'Poppins-Bold',
          fontWeight: 'bold',
        }}
        size={20}
      />

      <View style={styles.infoContainer}>
        <View style={{marginTop: 10, marginLeft: 10}}>
          <IconInfo />
        </View>
        <Text style={styles.infoText}>
          You are using {''}
          <Text
            style={{
              ...styles.infoText,
              fontFamily: 'Poppins-Medium',
              fontWeight: 'bold',
            }}>
            free version for 30 days.
          </Text>
          {''} Get package and build community.
        </Text>
      </View>
    </View>
  );
};

export default HomeInfo;

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: AppStyles.color(1).skyblue,
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: 10,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    height: 80,
  },
  infoText: {
    color: AppStyles.color(1).white,

    fontSize: 12,
    width: '85%',
    lineHeight: 18,
    marginTop: 10,
    fontFamily: 'Poppins-Light',
  },
});
