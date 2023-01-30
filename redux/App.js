// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, FlatList, Text, View } from 'react-native';

// export default App = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   const getMovies = async () => {
//      try {
//       const response = await fetch('https://fakestoreapi.com/products');
//       const json = await response.json();
//       setData(json.movies);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     getMovies();
//   }, []);

//   return (
//     <View style={{ flex: 1, padding: 24 }}>
//       {isLoading ? <ActivityIndicator/> : (
//         <FlatList
//           data={data}
//           keyExtractor={({ id }, index) => id}
//           renderItem={({ item }) => (
//             <Text>{item.title}, {item.image}</Text>
//           )}
//         />
//       )}
//     </View>
//   );
// };

import { View, Text,FlatList } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
          <View>
            <Text>hello</Text>
          </View>
    </View>
  )
}

export default App