import React, { useState } from "react";

import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./animeNews.style";
import { COLORS } from "../../../constants";
import AnimeNewsCard from "../../common/cards/news/AnimeNewsCard";
import useFetch from "../../../hooks";

const AnimeNews = () => {
  const [loadMore, setLoadMore] = useState(10);
  const router = useRouter();
  const { data, isLoading, error } = useFetch("recommendations/anime");

  const handlePress = () => {
    setLoadMore(loadMore + 10);
  };

  const pagginationData = data.slice(0, loadMore);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Recommendation Anime</Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          pagginationData?.map((item) => (
            <AnimeNewsCard
              item={item}
              key={`recommend-anime-${item.entry[0].mal_id}`}
              handleNavigate={() =>
                router.push(`/anime-details/${item.entry[0].mal_id}`)
              }
            />
          ))
        )}
      </View>
      {data.length != pagginationData.length && (
        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
          <Text style={styles.headerBtn}>Show more</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AnimeNews;
