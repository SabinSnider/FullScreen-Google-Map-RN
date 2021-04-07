
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
const ImagePick = (props) => {
    const [selectedImage, setSelectedImage] = React.useState(null);
    return (
      <View style={styles.screen}>
        <View>
          <Button
            onPress={() => {
              ActionSheet.show(
                {
                  options: [
                    {
                      text: 'Camera',
                      icon: 'md-images',
                      iconColor: 'blue',
                    },
                    {
                      text: 'Gallery',
                      icon: 'md-camera',
                      iconColor: 'green',
                    },
                    {
                      text: 'Cancel',
                      icon: 'close',
                      iconColor: 'red',
                    },
                  ],
                  title: 'Chooose source',
                  cancelButtonIndex: 2,
                },
                selectedIndex => {
                  if (selectedIndex == 0) {
                    //pick from gallery
                    launchImageLibrary(
                      {
                        quality: 1,
                        maxWidth: 200,
                        maxHeight: 400,
                      },
                      response => {
                        console.log(response);
                        setSelectedImage({uri: response.uri});
                      },
                    );
                  } else if (selectedIndex == 1) {
                    // Pick from camera
                  }
                  if (selectedIndex == 0) {
                  }
                },
              );
            }}>
            <Text> Select Image</Text>
          </Button>
        </View>
        <View style={styles.imageContainer}>
          <Image source={selectedImage} style={styles.image} />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 20,
      },
      imageContainer: {
        width: 200,
        height: 200,
        backgroundColor: 'red',
      },
      image: {
        width: '100%',
        height: '100',
      },
});

export default Home;
