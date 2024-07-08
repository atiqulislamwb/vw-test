import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import IconBack from '../../assets/icons/IconBack.svg';
import IconNotification from '../../assets/icons/IconNotification.svg';

const HomeHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity>
        <IconBack />
      </TouchableOpacity>

      <TouchableOpacity style={{marginRight: 10}}>
        <IconNotification />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
