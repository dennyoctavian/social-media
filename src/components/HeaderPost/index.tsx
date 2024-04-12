import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Title from '../Title';
import {getFontFamily} from '../../helpers/fonts';
import UserStory from '../UserStory';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../helpers/scaling';

type HeaderPostProps = {
  userStoriesRenderedData: Array<any>;
  loadMoreStory: () => void;
};

const HeaderPost = ({
  userStoriesRenderedData,
  loadMoreStory,
}: HeaderPostProps) => {
  return (
    <>
      <View style={styles.container}>
        <Title title="Let's Explore" />
        <TouchableOpacity style={styles.icon}>
          <Icon name="envelope" color={'#898dae'} size={horizontalScale(20)} />
          <View style={styles.messageNumberContainer}>
            <Text style={styles.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.userStoryContainer}>
        <FlatList
          data={userStoriesRenderedData}
          renderItem={({item}) => <UserStory {...item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `user-story ${item.id.toString()}`}
          onEndReachedThreshold={0.5}
          onEndReached={loadMoreStory}
        />
      </View>
    </>
  );
};

export default HeaderPost;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(16),
    marginTop: verticalScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    paddingHorizontal: horizontalScale(14),
    paddingVertical: verticalScale(14),
    backgroundColor: '#f9faf3',
    borderRadius: 100,
  },
  messageNumberContainer: {
    position: 'absolute',
    top: verticalScale(8),
    right: horizontalScale(8),
    backgroundColor: '#f35bac',
    width: horizontalScale(15),
    height: horizontalScale(15),
    borderRadius: horizontalScale(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageNumber: {
    color: 'white',
    fontSize: scaleFontSize(8),
    fontFamily: getFontFamily('600'),
    textAlign: 'center',
  },
  userStoryContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(28),
  },
});
