import {
  Image,
  ImageProps,
  ImageStyle,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {horizontalScale} from '../../helpers/scaling';
type UserProfileImageProps = {
  profileImage: ImageProps;
  imageDimensions: number;
};

const UserProfileImage = ({
  profileImage,
  imageDimensions,
}: UserProfileImageProps) => {
  return (
    <View style={styles.userImageContainer(imageDimensions)}>
      <Image source={profileImage} style={styles.image(imageDimensions)} />
    </View>
  );
};

export default UserProfileImage;

type UserProfileImageStyles = {
  userImageContainer: (
    imageDimensions: number,
  ) => ViewStyle | ImageStyle | TextStyle;
  image: (imageDimensions: number) => ViewStyle | ImageStyle | TextStyle;
};

const styles = StyleSheet.create<UserProfileImageStyles | any>({
  userImageContainer: (imageDimensions: number) => ({
    borderColor: '#f35bac',
    borderWidth: 1,
    padding: horizontalScale(4),
    borderRadius: imageDimensions,
  }),
  image: (imageDimensions: number) => ({
    width: imageDimensions,
    height: imageDimensions,
  }),
});
