import React from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'
import colors from '../../styles/colors'

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button ({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        {...rest}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: colors.green,
    borderRadius: 16
  },

  buttonText: {
    color: colors.white,
    fontSize: 24
  }
})
