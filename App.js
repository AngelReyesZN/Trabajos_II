import React, {useState} from 'react';
import {View, StyleSheet} from "react-native";
import SearchBar from "./Component/SearchBar";
import ProductsList from "./Component/ProductList";
import products from "./data";

const App = () => {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = products.filter((product) => {
      return product.name.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredProducts(filtered);
  }

    return(
        <View style={styles.container}>
          <SearchBar value={search} onChangeText={handleSearch} />
            <ProductsList products={filteredProducts} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 50,
        padding: 5,
        borderRadius: 10,
    },
    textTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    textDescription: {
        fontSize: 16,
    },
});

export default App;