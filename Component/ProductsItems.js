import React from 'react';
import {View, Text, StyleSheet, Image, Divider} from "react-native";


const ProductsItems = ({product}) => {
    return(
        <View style={styles.container}>

            <Text style={styles.textTitle}>{product.name}</Text>
            <Text style={styles.textDescription}>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Image source={{ uri: product.image }} style={styles.image} />
            <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'gray' }} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
    textTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    textDescription: {
        fontSize: 16,
        marginBottom: 10,

    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,

    },
    image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 20,

  },
});

export default ProductsItems;