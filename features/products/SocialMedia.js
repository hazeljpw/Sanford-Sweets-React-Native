import { View, Linking } from 'react-native';
import { SocialIcon } from 'react-native-elements';

const SocialMediaIcons = () => {
  const facebookURL = 'https://www.facebook.com/';
  const instagramURL = 'https://www.instagram.com/';
  const twitterURL = 'https://twitter.com/';
  const youtubeURL = 'https://www.youtube.com/';

  const openURL = (url) => {
    Linking.openURL(url)
      .catch((err) => console.error('An error occurred', err));
  };

  return (
    <View style={{ flexDirection: 'row' }}>
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
