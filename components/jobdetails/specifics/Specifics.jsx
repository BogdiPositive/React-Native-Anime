import React, { useState } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { View, Text } from "react-native";

import styles from "./specifics.style";

const Specifics = ({ videoUrl }) => {
  const [playing, setPlaying] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trailer</Text>
      <YoutubePlayer height={250} play={playing} videoId={videoUrl} />
    </View>
  );
};

export default Specifics;
