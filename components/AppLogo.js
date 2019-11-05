import React from 'react'
import { Image } from 'react-native-elements'

const AppLogo = () => (
  <Image
    source={require('../assets/flame.png')}
    style={{ width: 80, height: 80, marginTop:10 }}
  />
)

export default AppLogo
