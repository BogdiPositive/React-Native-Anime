import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import {
  AnimeTitle,
  AnimeAbout,
  // AnimeFooter,
  GenreTabs,
  ScreenHeaderBtn,
  Specifics,
  MoreInfo,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hooks";

const tabs = ["About", "MoreInfo", "Trailer"];

const AnimeDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch(`anime/${params.id}`);

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  

  const displayTabContent = () => {
    switch (activeTab) {
      case "MoreInfo":
        return <MoreInfo item={data} />;

      case "About":
        return (
          <AnimeAbout
            info={data.synopsis ?? "No data provided"}
            genres={data?.genres}
          />
        );

      case "Trailer":
        return (
          <Specifics title="Trailer" videoUrl={data?.trailer.youtube_id} />
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data available</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <AnimeTitle
                companyLogo={data.images?.jpg?.image_url}
                jobTitle={data.title}
                companyName={data.type}
                location={data.episodes}
              />

              <GenreTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {displayTabContent()}
            </View>
          )}
        </ScrollView>

        {/* <AnimeFooter /> */}
      </>
    </SafeAreaView>
  );
};

export default AnimeDetails;
