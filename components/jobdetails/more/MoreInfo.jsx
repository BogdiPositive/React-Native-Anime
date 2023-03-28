import { View, Text } from "react-native";

import styles from "./specifics.style";

const MoreInfo = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>More info:</Text>

      <View style={styles.pointWrapper}>
        <Text style={styles.pointText}>Status - {item?.status}</Text>
        <Text style={styles.pointText}>Seasons - {item?.season}</Text>
        <Text style={styles.pointText}>Episodes - {item?.episodes}</Text>
        <Text style={styles.pointText}>Rating - {item?.rating}</Text>
        <Text style={styles.pointText}>Score - {item?.score}</Text>
        <Text style={styles.pointText}>Studios - {item?.studios[0]?.name}</Text>
      </View>
    </View>
  );
};

export default MoreInfo;
