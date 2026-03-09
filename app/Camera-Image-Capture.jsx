import React, { useState } from "react";
import { View, Image, StatusBar } from "react-native";
import { Button, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as Sharing from 'expo-sharing'

const CameraImageCapture = () => {
    // <View style={{ paddingTop: StatusBar.currentHeight }}></View>
    const [Frames, setFrame] = useState(null)
    const [ImagePath, setImagePath] = useState(null)
    const [permission, RequestCamAccess] = useCameraPermissions();

    if (!permission) {
        return (
            <Text>Loading</Text>
        )
    }

    if (!permission.granted) {
        return (
            <Button
                mode="contained"
                onPress={RequestCamAccess}
                style={{ margin: 20, height: 40, justifyContent: "center" }}
                labelStyle={{ fontSize: 18 }}
            >
                Request Camera Access
            </Button>
        )
    }

    const Capture = async () => {
        if (Frames) {
            const Picture = await Frames.takePictureAsync()
            // console.log(Picture)
            setImagePath(Picture.uri)
        }
    }

    const Share = async () => {
        const Permission = await Sharing.isAvailableAsync()
        if (Permission) {
            await Sharing.shareAsync(ImagePath)
        }
    }

    return (
        <View style={{ marginTop: 100 }}>
            <CameraView
                style={{ width: "100%", height: 300 }}
                facing="front"
                ref={(ref) => setFrame(ref)}
            />
            <Button onPress={Capture}>Take Picture</Button>
            {
                ImagePath
                    ? <Image source={{ uri: ImagePath }} style={{ width: 200, height: 200 }} />
                    : <Text>NO Captured Image</Text>
            }
            <Button onPress={Share} >Share</Button>
        </View>
    );
};

export default CameraImageCapture;