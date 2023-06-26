import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function User(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="account" style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(224,224,234,1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    shadowColor: '#111',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 2,
    width: responsiveWidth(13),
    height: responsiveWidth(13),
    marginRight: responsiveWidth(5),
  },
  icon: {
    color: '#fff',
    fontSize: 34,
  },
});

export default User;
