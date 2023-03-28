import { useState } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, SIZES } from "../constants";

import {
  AnimeNews,
  Popularanime,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              handlePress={() => {
                setMenuOpen(!menuOpen);
              }}
            />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {menuOpen && (
          <View>
            <TouchableOpacity>
              <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Favorite</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Pending</Text>
            </TouchableOpacity>
          </View>
        )}

        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />

          <Popularanime />
          <AnimeNews />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
