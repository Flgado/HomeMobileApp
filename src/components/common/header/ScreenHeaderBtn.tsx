

import {styles, btnImg} from "./screenheader.style"
import React from 'react';
import { Image, TouchableOpacity, ImageSourcePropType, GestureResponderEvent } from 'react-native';


interface ScreenHeaderBtnProps {
  iconUrl: ImageSourcePropType;
  dimension: number;
  handlePress: (event: GestureResponderEvent) => void;
}

const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
