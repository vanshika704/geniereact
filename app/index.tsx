import React from 'react';
import {Text, View, Image} from 'react-native';

const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* Image Component */}
      <Text style={{fontSize: 28, fontWeight: 'bold'}}>
       MAI HU BAGAD BILLA ....
      </Text>
      <Image
        source={{
          uri: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg', // Replace with your image URL
        }}
        style={{width: 700, height: 500, marginBottom: 20 , marginTop:40}} // Adjust size as needed
      />
      
      {/* Text Component */}
     
    </View>
  );
};

export default YourApp;
