import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import {AppText} from './AppText';
import AppStyles from '../config/AppStyles';

export interface AppButtonProps extends TouchableOpacityProps {
  label: string;
  size?: number;
  buttonColor?: string;
  icon?: any;
  textColor?: string;
  fontFamily?: any;
  textSize?: any;
}

export const AppButton: React.FC<AppButtonProps> = ({
  label,
  size = 10,
  buttonColor = AppStyles.color(1).skyblue,
  icon,
  style,
  textColor,
  fontFamily = undefined,
  textSize = 12,
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      {...otherProps}
      style={[styles.button, {backgroundColor: buttonColor}, style]}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <AppText
        style={[
          styles.text,
          {fontSize: size, color: textColor, fontFamily: fontFamily},
        ]}
        text={label}
        size={textSize}
        textColor={textColor}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 5,
    margin: 2,
  },
  text: {
    color: AppStyles.color(1).white,
  },
  icon: {
    marginRight: 0,
  },
});
