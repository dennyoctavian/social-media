import {ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getFontFamily} from '../../helpers/fonts';
import UserProfileImage from '../UserProfileImage';

type UserStoryProps = {
  firstName: string;
  profileImage: ImageProps;
};

const UserStory = ({firstName, profileImage}: UserStoryProps) => {
  return (
    <View style={styles.container}>
      <UserProfileImage profileImage={profileImage} imageDimensions={65} />
      <Text style={styles.firstName}>{firstName}</Text>
    </View>
  );
};

export default UserStory;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  firstName: {
    color: '#022150',
    fontFamily: getFontFamily('500'),
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
});
