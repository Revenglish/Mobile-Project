import { StyleSheet, Text, View, Image} from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Image source={require('../../assets/notification.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'space-between',
        justifyContent: 'center',
        backgroundColor: '#D9D9D9',
        width: '100%',
        height: '21%'
    },
})
