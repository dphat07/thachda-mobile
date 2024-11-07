import React from 'react'
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ViewStyle
} from 'react-native'

type KeyboardDismissWrapperProps = {
  children: React.ReactNode
  style?: ViewStyle
  behavior?: 'height' | 'position' | 'padding'
}

const KeyboardDismissWrapper: React.FC<KeyboardDismissWrapperProps> = ({
  children,
  style = { flex: 1 },
  behavior = Platform.OS === 'ios' ? 'padding' : 'height'
}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView style={style} behavior={behavior} keyboardVerticalOffset={-150}>
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default KeyboardDismissWrapper
