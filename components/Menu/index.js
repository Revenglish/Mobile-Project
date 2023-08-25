import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Menu() {
    return (
            <LinearGradient 
            colors={[
                '#000000',
                '#03007DFE',

            ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.menu}
            >
            <Image style={styles.notificationImage} source={require('../../assets/search-icon.png')} />
            <View style={styles.buttonMore}>
                <Image style={styles.moreImage} source={require('../../assets/more.png')} />
            </View>
            <Image style={styles.settingsImage} source={require('../../assets/recents-icon.png')} />
            </LinearGradient>
    
    );
}

const styles = StyleSheet.create({
    menu: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#D9D9D9',
        paddingLeft: '15%',
        paddingRight: '15%',
        width: '100%',
        height: '9%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
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
    },
    moreImage: {
        width: 25,
        height: 25,
    },
    buttonMore: {
        borderRadius: 40,
        backgroundColor: '#FAFAFA',
        width: 47,
        height: 47,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
