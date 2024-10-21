

import {styles, btnImg} from "./screenheader.style"
import { useDispatch, useSelector } from 'react-redux';
import { Image, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { getProfileImage } from "../../../services/api/api";
import { RootState } from '../../../app/hooks/store';
import { setImageWasFetch, setProfileImage } from "../../../app/hooks/reducers";

interface ScreenHeaderBtnProps {
  dimension: number;
  handlePress: (event: GestureResponderEvent) => void;
}

const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({dimension, handlePress }) => {
  const dispatch = useDispatch();
  
  const imageState = useSelector((state: RootState) => state.imageReducer);

  const fetchImage = async () => {
    try {
      const image = await getProfileImage();
      dispatch(setProfileImage(image));
      dispatch(setImageWasFetch(true))
    } catch (error) {
      console.error('Error fetching profile image:', error);
    }
  };

  if (!imageState.imageWasFetch) {
    fetchImage();
  }

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
        <Image
          source={imageState.profileImagePath}
          resizeMode='cover'
          style={btnImg(dimension)}
        />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
