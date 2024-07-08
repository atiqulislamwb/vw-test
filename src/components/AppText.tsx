import {Text} from 'react-native';
import React from 'react';
import AppStyles from '../config/AppStyles';

// custom Text component which inherit all Text properties
export interface AppTextProps {
  text: any;
  textColor?: any;
  size?: number;
  style?: any;
}

export const AppText: React.FC<AppTextProps> = ({
  text,
  size,
  textColor,
  style,
  ...otherProps
}) => {
  return (
    <Text
      {...otherProps} // Spread here
      style={[
        style,
        {
          fontSize: size || 16,
          color: textColor || AppStyles.color(1).white,
        },
      ]}>
      {text}
    </Text>
  );
};
