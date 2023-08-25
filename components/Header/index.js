import { StyleSheet, Text, View, Image} from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Image style={styles.notificationImage} source={require('../../assets/notification.png')} />
            <Text style={styles.title}>RevEnglish</Text>
            <Image style={styles.settingsImage} source={require('../../assets/settings.png')} />
        </View >
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '7%',
        paddingRight: '7%',
        width: '100%',
        height: '21%'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    settingsImage: {
        width: 45,
        height: 45,
    },
    notificationImage: {
        width: 47,
        height: 47,
    }
})
