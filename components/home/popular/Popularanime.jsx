import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./popularAnime.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularAnimeCard";
import useFetch from "../../../hooks";

const Popularanime = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("top/anime");

  const [selectedAnime, setSelectedAnime] = useState();

  const handleCardPress = (item) => {
    router.push(`/anime-details/${item.mal_id}`);
    setSelectedAnime(item.mal_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Anime</Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedAnime={selectedAnime}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.mal_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularanime;
