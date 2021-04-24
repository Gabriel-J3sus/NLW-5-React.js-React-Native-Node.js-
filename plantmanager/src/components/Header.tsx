import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import userImg from '../assets/me.png'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Header() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStoragedUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user')

      setUserName(user || '')
    }

    loadStoragedUserName()
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Image source={userImg} style={styles.image} />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },

  image: {
    width: 56,
    height: 56,
    borderRadius: 40,
  },

  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },

  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  }
})
