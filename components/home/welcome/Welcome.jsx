import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const genres = [
  { name: "Action", id: 1 },
  { name: "Drama", id: 8 },
  { name: "Adventure", id: 2 },
  { name: "Fantasy", id: 10 },
  { name: "Sci-Fi", id: 24 },
  { name: "Comedy", id: 4 },
  { name: "Hentai", id: 12 },
];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeAnimeGenre, setActiveAnimeGenre] = useState("Action");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello my dear hiccan</Text>
        <Text style={styles.welcomeMessage}>Find your anime</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={genres}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeAnimeGenre, item)}
              onPress={() => {
                setActiveAnimeGenre(item);
                router.push(`/search/&genres=${item.id}`);
              }}
            >
              <Text style={styles.tabText(activeAnimeGenre, item)}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
