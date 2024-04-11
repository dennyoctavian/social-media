import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';

import UserPost from './src/components/UserPost';
import {useApp} from './App.hooks';
import HeaderPost from './src/components/HeaderPost';

const App = () => {
  const {
    userStoriesRenderedData,
    userPostsRenderedData,
    loadMoreStory,
    loadMorePost,
  } = useApp();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View>
        <FlatList
          ListHeaderComponent={
            <HeaderPost
              userStoriesRenderedData={userStoriesRenderedData}
              loadMoreStory={loadMoreStory}
            />
          }
          data={userPostsRenderedData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <UserPost {...item} />}
          onEndReachedThreshold={0.5}
          onEndReached={loadMorePost}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
