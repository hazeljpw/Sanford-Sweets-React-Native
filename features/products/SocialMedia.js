import React from 'react';
import { View, Linking } from 'react-native'; // Import necessary components
import { SocialIcon } from 'react-native-elements'; // Import SocialIcon from your library

const SocialMediaIcons = () => {
  // Define the URLs you want to direct users to for each social media icon
  const facebookURL = 'https://www.facebook.com/';
  const instagramURL = 'https://www.instagram.com/';
  const twitterURL = 'https://twitter.com/';
  const youtubeURL = 'https://www.youtube.com/';

  // Function to open a URL in the device's default browser
  const openURL = (url) => {
    Linking.openURL(url)
      .catch((err) => console.error('An error occurred', err));
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      {/* Add onPress to each SocialIcon to open the corresponding URL */}
      <SocialIcon
        light
        type='facebook'
        iconStyle={{ color: 'burlywood' }}
        onPress={() => openURL(facebookURL)}
      />

      <SocialIcon
        light
        type='instagram'
        iconStyle={{ color: 'burlywood' }}
        onPress={() => openURL(instagramURL)}
      />

      <SocialIcon
        light
        type='twitter'
        iconStyle={{ color: 'burlywood' }}
        onPress={() => openURL(twitterURL)}
      />

      <SocialIcon
        light
        type='youtube'
        iconStyle={{ color: 'burlywood' }}
        onPress={() => openURL(youtubeURL)}
      />
    </View>
  );
};

export default SocialMediaIcons;
