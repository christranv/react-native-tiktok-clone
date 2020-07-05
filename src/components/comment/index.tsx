import { Modal, StyleSheet, View } from "react-native"

const Comment: React.FC = () => (
    <Modal
        animated
        animationType="fade"
        visible={false}
        transparent
        onRequestClose={() => console.log("X")}>
    </Modal >
);

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        flex: 1,
        justifyContent: 'flex-end',
    },
});

export default Comment;