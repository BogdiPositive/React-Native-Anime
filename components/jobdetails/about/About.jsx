import { View, Text } from "react-native";

import styles from "./about.style";

const About = ({ info, genres }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the anime:</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
      <View style={styles.genreBox}>
        {genres.map((genre) => (
          <Text style={styles.genreText} key={genre.name}>
            {genre.name}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default About;
