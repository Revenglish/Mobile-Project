import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function Body() {
    return (
        <View style={styles.body}>
            <ScrollView showsVerticalScrollIndicator={false}>
                
                <View style={styles.containerLog}>
                    <Text style={styles.titleDate} >Hoje</Text>
                    <View style={styles.containerWord}>
                        <Text style={styles.wordPrimary}>Think</Text>
                        <Text style={styles.wordPrimary}>Thênk</Text>
                    </View>
                    <View style={styles.containerWord}></View>
                </View >
                <View style={styles.containerLog}>
                    <Text style={styles.titleDate} >26/08/2023</Text>
                    <View style={styles.containerWord}></View>
                    <View style={styles.containerWord}></View>
                </View >
                <View style={styles.containerLog}>
                    <Text style={styles.titleDate} >22/08/2023</Text>
                    <View style={styles.containerWord}></View>
                    <View style={styles.containerWord}></View>
                </View >
                <View style={styles.containerLog}>
                    <Text style={styles.titleDate} >20/08/2023</Text>
                    <View style={styles.containerWord}></View>
                    <View style={styles.containerWord}></View>
                </View >
                <View style={styles.containerLog}>
                    <Text style={styles.titleDate} >15/08/2023</Text>
                    <View style={styles.containerWord}></View>
                    <View style={styles.containerWord}></View>
                </View >
                <View style={styles.containerLog}>
                    <Text style={styles.titleDate} >11/08/2023</Text>
                    <View style={styles.containerWord}></View>
                    <View style={styles.containerWord}></View>
                </View >
            </ScrollView>


        </View >
    );
}

const styles = StyleSheet.create({
    body: {
        paddingLeft: '7%',
        paddingRight: '7%',
        width: '100%',
        flex: 1, // Adiciona altura flexível
    },
    titleDate: {
        fontSize: 23,
        marginBottom: 10
    },
    containerLog: {
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    containerWord: {
        backgroundColor: "#000000",
        width: "100%",
        height: 60,
        borderRadius: 50,
        marginTop: 10,
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex',
    },
    wordPrimary: {
        color: "#FFFFFF",
        fontSize: 17,
    }
})
