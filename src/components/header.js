import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import HeaderIcon from '../assets/pray-header.png';
import {bgprimary} from '../../theme.json';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = () => {
  return (
    <View style={{backgroundColor: bgprimary, borderRadius: 10}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
        }}>
        <Image
          source={HeaderIcon}
          style={{
            width: windowWidth * 0.3,
            height: windowHeight * 0.2,
            flex: 1,
            borderBottomLeftRadius: 10,
          }}
        />
        <View style={{flex: 1, marginRight: 5, marginVertical: 20}}>
          <Text style={{color: '#FFFFFF', fontSize: 18}}>
            Semua bacaan islam dalam satu aplikasi.
          </Text>
          <Text style={{color: '#FFFFFF', fontSize: 14, marginVertical: 5}}>
            Al-Quran, Juz Amma, Iqro, dan bacaan lainnya.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
