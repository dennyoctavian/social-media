import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import UserProfileImage from '../UserProfileImage';
import {ImageProps} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {getFontFamily} from '../../helpers/fonts';

type UserPostProps = {
  firstName: string;
  lastName: string;
  image: ImageProps;
  location?: string;
  likes: number;
  comments: number;
  bookmarks: number;
  profileImage?: ImageProps;
};

const UserPost = ({
  firstName,
  lastName,
  image,
  location,
  likes,
  comments,
  bookmarks,
  profileImage,
}: UserPostProps) => {
  return (
    <View style={styles.userPostContainer}>
      <View style={styles.container}>
        <View style={styles.userProfile}>
          {profileImage && (
            <UserProfileImage
              profileImage={profileImage}
              imageDimensions={48}
            />
          )}
          <View style={styles.user}>
            <Text style={styles.username}>
              {firstName} {lastName}
            </Text>
            {location && <Text style={styles.location}>{location}</Text>}
          </View>
        </View>
        <Icon name="more-horizontal" color={'#79869f'} size={24} />
      </View>
      <View style={styles.postImage}>
        <Image source={image} />
      </View>
      <View style={styles.informationParentContainer}>
        <View style={styles.informationContainer}>
          <View style={[styles.itemInformation, styles.marginLeft0]}>
            <Icon name="heart" color={'#79869f'} size={24} />
            <Text style={styles.items}>{likes}</Text>
          </View>
          <View style={styles.itemInformation}>
            <Icon name="message-circle" color={'#79869f'} size={24} />
            <Text style={styles.items}>{comments}</Text>
          </View>
          <View style={styles.itemInformation}>
            <Icon name="bookmark" color={'#79869f'} size={24} />
            <Text style={styles.items}>{bookmarks}</Text>
          </View>
        </View>
        <View style={styles.userPostContainerSeperator} />
      </View>
    </View>
  );
};

export default UserPost;

const styles = StyleSheet.create({
  userPostContainer: {
    marginHorizontal: 24,
    marginTop: 35,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  user: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  userProfile: {
    flexDirection: 'row',
  },
  itemInformation: {
    flexDirection: 'row',
    marginLeft: 27,
    alignItems: 'center',
    gap: 5,
  },
  username: {
    color: '#000',
    fontFamily: getFontFamily('600'),
    fontSize: 16,
  },
  location: {
    color: '#79869f',
    fontFamily: getFontFamily('400'),
    fontSize: 12,
    marginTop: 5,
  },
  postImage: {
    alignItems: 'center',
    marginVertical: 20,
  },
  informationParentContainer: {
    marginLeft: 10,
  },
  informationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  items: {
    color: '#79869f',
    fontFamily: getFontFamily('500'),
    fontSize: 14,
  },

  userPostContainerSeperator: {
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    color: '#eff2f6',
  },
  marginLeft0: {marginLeft: 0},
});
