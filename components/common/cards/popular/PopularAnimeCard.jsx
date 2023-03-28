import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularAnimeCard.style";

const PupularAnimeCard = ({ item, selectedAnime, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedAnime, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedAnime, item)}>
        <Image
          source={{
            uri: item?.images?.jpg?.image_url,
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedAnime, item)} numberOfLines={3}>
          {item.title_english}
        </Text>
        <View style={styles.infoWrapper}>
          <View style={styles.generWrapper}>
            {item.genres &&
              item.genres.map((genre) => <Text>{genre.name}</Text>)}
          </View>

          <Text style={styles.publisher(selectedAnime, item)}>{item.type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PupularAnimeCard;
