import {TextInput, StyleSheet} from 'react-native';
import React from 'react';

const SearchBar = ({value, onChangeText}) => {
    return(
        <TextInput style={styles.searchBar}
            placeholder="Search Products..."
            multiline={false}
            onChangeText={onChangeText}
            value={value}
        />
    )
}

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        width: '100%'
    },
});

export default SearchBar;