import React from 'react'
import { Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, Dimensions, View } from 'react-native'
import { useNavigation } from '@react-navigation/core';

import { Feather } from '@expo/vector-icons';

import fonts from '../styles/fonts';

import colors from '../styles/colors';
import wateringImg from '../assets/watering.png';

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>

        <Image
          source={wateringImg}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleStart}
        >
          <Feather
            name="chevron-right"
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },

  title: {
    fontFamily: fonts.heading,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 34,
    color: colors.heading,

    marginTop: 38
  },

  subtitle: {
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 18,
    color: colors.heading,

    paddingHorizontal: 20
  },

  image: {
    height: Dimensions.get('window').width * 0.7
  },

  button: {
    marginBottom: 10,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: colors.green,
    borderRadius: 16
  },

  buttonIcon: {
    fontSize: 32,
    color: colors.white
  }
})
