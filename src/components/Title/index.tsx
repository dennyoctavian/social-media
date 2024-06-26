import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {getFontFamily} from '../../helpers/fonts';
import {scaleFontSize} from '../../helpers/scaling';

type TitleProps = {
  title: string;
};

const Title = ({title}: TitleProps) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('600'),
    fontSize: scaleFontSize(24),
  },
});
