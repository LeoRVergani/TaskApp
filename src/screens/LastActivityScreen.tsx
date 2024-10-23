import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LastActivityScreen: React.FC = () => {
return (
        <View style={styles.container}>
        <Text style={styles.text}>Não há atividades recentes na aplicação.</Text>
        </View>
    );
    };

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" 
    },
    text: { 
        fontSize: 18,
        color: "gray"
    },
});

export default LastActivityScreen;
