import { View, Text , s} from 'react-native'
import React from 'react'
import Drawer from '../Drawer/drawer'
import Scroll from '../components/ScrollView/ScrollView'
import { Link } from 'expo-router'
export default function HomeScreen() {
  return (
    <>
              <Link href= "Account/login" > Login </Link>
        <Drawer/>
        <Scroll/>

</>
 
  )
}