import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./animeNewsCard.style";

const AnimeNewsCard = ({ item, handleNavigate }) => {
  const uri = item.entry ? item.entry[0] : item;

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: uri?.images?.jpg?.image_url,
          }}
          resizeMode="contain"
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {uri?.title}
        </Text>
        {item.entry ? (
          <Text style={styles.jobType}>{item?.content}</Text>
        ) : (
          <Text style={styles.jobType}>{item?.synopsis}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default AnimeNewsCard;
