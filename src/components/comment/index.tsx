import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Modal from 'react-native-modal';
import { gh, SCREEN_WIDTH } from "../../utils/responsive";

const Comment: React.FC = () => {
    const [visible, setVisible] = useState(true);
    return (
        <Modal
            isVisible={visible}
            backdropOpacity={0.2}
            style={styles.main}
            onBackdropPress={() => setVisible(false)}>
            <View style={styles.modalView}>
                <Text>ssss</Text>
            </View>
        </Modal >
    )
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        margin: 0,
        justifyContent: 'flex-end',
    },
    modalView: {
        height: gh(65),
        backgroundColor: "white",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
});

export default Comment;