import react from "react";
import { View, StyleSheet, StatusBar, Text, FlatList, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Person_1 from "./assets/person_1.jpeg"
import Person_2 from "./assets/adaptive-icon.png"
import Person_3 from "./assets/person_3.jpeg"
import Person_4 from "./assets/favicon.png"
import Person_5 from "./assets/person_5.jpeg"
import Person_6 from "./assets/icon.png"

const Component = () => {
    const Results = useSafeAreaInsets();
    console.log(Results)

    const Mydata = [
        {
            id: 1,
            Img: Person_1,
            Name: "Durga",
            Msg: "Hai Hello"
        },
        {
            id: 2,
            Img: Person_2,
            Name: "Madhu",
            Msg: "Coming or not ?"
        },
        {
            id: 3,
            Img: Person_3,
            Name: "Hanumanth",
            Msg: "Single ?"
        },
        {
            id: 4,
            Img: Person_4,
            Name: "Girish",
            Msg: "Sitting when ?"
        },
        {
            id: 5,
            Img: Person_5,
            Name: "Gangadhar",
            Msg: "Kishore ni chudu ?"
        },
        {
            id: 6,
            Img: Person_6,
            Name: "Sudheer",
            Msg: "kya karthehum ..?"
        },
        {
            id: 7,
            Img: Person_1,
            Name: "Durga",
            Msg: "Hai Hello"
        },
        {
            id: 8,
            Img: Person_2,
            Name: "Madhu",
            Msg: "Coming or not ?"
        },
        {
            id: 9,
            Img: Person_3,
            Name: "Hanumanth",
            Msg: "Single ?"
        },
        {
            id: 10,
            Img: Person_4,
            Name: "Girish",
            Msg: "Sitting when ?"
        },
        {
            id: 11,
            Img: Person_5,
            Name: "Gangadhar",
            Msg: "Kishore ni chudu ?"
        },
        {
            id: 12,
            Img: Person_6,
            Name: "Sudheer",
            Msg: "kya karthehum ..?"
        }
    ]

    return (
        <>
            <StatusBar barStyle="light-content" hidden />
            <View style={[Mystyles.MystatusBar, { paddingTop: Results.top }]}>
            </View>

            <FlatList
                data={Mydata}
                renderItem={({ item }) => (
                    <View style={Mystyles.parent}>
                        <View style={Mystyles.Image_View}>
                            <Image
                                style={Mystyles.Image_Tag}
                                source={item.Img}
                            />
                        </View>
                        <View style={Mystyles.infoparent}>
                            <Text style={Mystyles.SendName}>{item.Name}</Text>
                            <Text style={Mystyles.LastMsg}>{item.Msg}</Text>
                        </View>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
            />
        </>
    )
}
export default Component;

const Mystyles = StyleSheet.create({
    MystatusBar: {
        backgroundColor: "green"
    },
    parent: {
        width: "100%",
        flexDirection: 'row',
        marginVertical: 5,
        backgroundColor: "#D9D9D9"
    },
    Image_View: {
        width: 100,
        height: 100,
    },
    Image_Tag: {
        width: "100%",
        height: "100%",
        borderRadius: 25
    },
    infoparent: {
        justifyContent: "space-evenly",
        marginLeft: 10
    },
    SendName: {
        fontSize: 19,
        fontWeight: 40,
    },
    LastMsg: {
        fontSize: 18
    }
})




/*
    the navigations are quite similar as in webdevelopment we use similar Js in react native as well
    Onclick => Onpress
    Onchange => Onchange
    Mostly we will be using only the Event listeners in this Applications there will be no DOM manipulations in this

    buttons,text,activity listener,badges,text input ,Helper text,icons,useStates components to caputre in some variables
    data.includes('@')
*/