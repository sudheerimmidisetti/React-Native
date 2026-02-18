import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { TextInput, Button, Chip } from "react-native-paper";

export default function ChipInput() {
    const [text, setText] = useState("");
    const [chips, setChips] = useState([]);

    const addChip = () => {
        if (text.trim() !== "" && chips.length < 10) {
            setChips([...chips, text.trim()]);
            setText("");
        }
    };

    const removeChip = (index) => {
        const updated = chips.filter((_, i) => i !== index);
        setChips(updated);
    };

    const isDisabled = chips.length >= 10;

    return (
        <View style={styles.container}>
            <View style={styles.inputRow}>
                <TextInput
                    mode="outlined"
                    label="Enter value"
                    value={text}
                    onChangeText={setText}
                    style={styles.input}
                    disabled={isDisabled}
                />
                <Button
                    mode="contained"
                    onPress={addChip}
                    disabled={isDisabled}
                    style={styles.button}
                >
                    Add
                </Button>
            </View>

            <FlatList
                data={chips}
                keyExtractor={(_, index) => index.toString()}
                numColumns={3}
                renderItem={({ item, index }) => (
                    <Chip
                        style={styles.chip}
                        onClose={() => removeChip(index)}
                    >
                        {item}
                    </Chip>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    inputRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    input: {
        flex: 1,
        marginRight: 10,
    },
    button: {
        justifyContent: "center",
    },
    chip: {
        margin: 5,
    },
});