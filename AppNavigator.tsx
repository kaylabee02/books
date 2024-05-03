import { withExpoSnack } from "nativewind";
import React, { useCallback, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useQuery } from "react-query";
import useBooks from "./books";
const AppNavigator: React.FC = () => {
  const { fetchBooks, books, fetchBooks: fetchBooksFromZustand } = useBooks();

  const { isLoading, isError, refetch } = useQuery("data", fetchBooks, {
    retry: 3, 
  });

  const handleItemPress = useCallback((item) => {
    console.log("Item clicked:", item);
  }, []);

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  useEffect(() => {
    fetchBooksFromZustand();
  }, [fetchBooksFromZustand]);

  useEffect(() => {
    const intervalId = setInterval(refetch, 5000);
    return () => clearInterval(intervalId);
  }, [refetch]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error fetching data</Text>;
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View>
        <Text>ID: {item.id}</Text>
        <Text>Title: {item.title}</Text>
        <Text>Author: {item.author}</Text>
        <Text>Published Date: {item.published_date}</Text>
        <Text>Genre: {item.genre}</Text>
        <Text>--------------------</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={books || []}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default withExpoSnack(AppNavigator);
