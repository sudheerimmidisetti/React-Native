import react, { useState } from "react";
import { View, Image, Text } from "react-native";
import { Button } from "react-native-paper";
import * as Imagepicker from 'expo-image-picker';

const ImagePicker = () => {
    const [ImagePath, setImagePath] = useState(null)
    const LaunchGallary = async () => {
        const Response = await Imagepicker.requestMediaLibraryPermissionsAsync();
        if (!Response.granted) {
            alert('Please Give Access to Media')
            return;
        }

        const Data = await Imagepicker.launchImageLibraryAsync({
            mediaTypes: "images",
            allowsMultipleSelection: true,
            // allowsEditing:true,
            quality: 1
        })
        setImagePath(Data.assets)
        console.log(Data.assets)
    }

    return (
        <>
            <Button mode="contained" onPress={LaunchGallary}>
                Tap Me!!!
            </Button>
            {
                ImagePath ?
                    <View>
                        {
                            ImagePath.map((ele, index) => {
                                return <Image
                                    key={index}
                                    source={{ uri: ele.uri }}
                                    style={{ width: 200, height: 200 }}
                                />
                            })
                        }
                    </View>
                    : <Text>No Images selected</Text>
            }

        </>
    )
}

export default Home;
