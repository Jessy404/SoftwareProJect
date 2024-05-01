import React from 'react'
import { View , Text , StyleSheet} from 'react-native'
export default function Profile() {
  // import UserTodos from '@/components/UserTodos';
  return (
   <View style={styles.container}>
    <Text>
        Welcome
    </Text>
   </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },


})
