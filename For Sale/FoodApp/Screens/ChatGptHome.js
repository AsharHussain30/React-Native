import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

const HomeScreen = () => {
  const featuredItems = [
    {
      id: '1',
      title: 'Pizza',
      image: require('../assets/pizza.png'),
      price: 9.99,
      rating: 4.5,
    },
    {
      id: '2',
      title: 'Burger',
      image: require('../assets/burger.png'),
      price: 6.99,
      rating: 4.2,
    },
    {
      id: '3',
      title: 'Pizza',
      image: require('../assets/pizza2.png'),
      price: 12.99,
      rating: 4.8,
    },
    // Add more featured items here
  ];

  const categories = ['All', 'Pizza', 'Burger', 'Sushi'];

  const id = featuredItems.map(item => item.id);

  const lastIndex = featuredItems.map(index => index);

  console.log(lastIndex);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://img.freepik.com/free-photo/vintage-old-rustic-cutlery-dark_1220-4886.jpg',
        }}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.contentContainer}>
          <Image
            source={require('../assets/logo1.png')}
            style={{
              width: 120,
              height: 120,
              marginBottom: 20,
              borderRadius: 10,
            }}
            resizeMode="contain"
          />
          <Text style={styles.title}>Delicious Food</Text>
          <Text style={styles.subtitle}>Order your favorite food online</Text>

          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for food"
            />
            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesContainer}>
            {categories.map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryButton}>
                <Text style={styles.categoryButtonText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <ScrollView style={styles.featuredItemsContainer}>
            <View style={styles.gridContainer}>
              {featuredItems.map((item, index) => {
                return (
                  <TouchableOpacity key={item.id} style={styles.gridItem}>
                    <Image
                      source={item.image}
                      style={styles.gridItemImage}
                      resizeMode="cover"
                    />
                    <Text style={styles.gridItemTitle}>{item.title}</Text>
                    <Text style={styles.gridItemPrice}>
                      ${item.price.toFixed(2)}
                    </Text>
                    <View style={styles.ratingContainer}>
                      <Text style={styles.ratingText}>{item.rating}</Text>
                      <Image
                        source={require('../assets/star.png')}
                        style={styles.starIcon}
                        resizeMode="contain"
                      />
                    </View>
                    <TouchableOpacity style={styles.addToCartButton}>
                      <Text style={styles.addToCartButtonText}>
                        Add to Cart
                      </Text>
                    </TouchableOpacity>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

// ... previous code ...

const styles = StyleSheet.create({
  // ... previous styles ...

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  lastGridItem: {
    justifyContent: 'flex-start',
  },
  gridItem: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  'gridItem:last-child': {
    justifyContent: 'flex-start',
  },

  gridItemImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  gridItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  gridItemPrice: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingText: {
    fontSize: 14,
    marginRight: 5,
  },
  starIcon: {
    width: 16,
    height: 16,
  },
  addToCartButton: {
    backgroundColor: '#ff4500',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
