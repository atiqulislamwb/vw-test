import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React from 'react';
import useGetPackage from '../../hooks/useGetPackage';
import AppStyles from '../../config/AppStyles';
import HomeHeader from '../../components/Home/HomeHeader';
import HomeInfo from '../../components/Home/HomeInfo';
import PackageCard from '../../components/Home/PackageCard';

const Home = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const {isLoading, data, refetch} = useGetPackage();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      refetch();
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppStyles.color(1).black}}>
      <View style={{paddingHorizontal: 5, flex: 1}}>
        <HomeHeader />
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <HomeInfo />
          {isLoading && (
            <ActivityIndicator
              size={'large'}
              color={'white'}
              style={{margin: 20}}
            />
          )}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 15,
              flexWrap: 'wrap',
              gap: 8,
              rowGap: 12,
            }}>
            {data &&
              data?.map((packageItem, index) => (
                <PackageCard
                  key={packageItem.ID}
                  packageData={packageItem}
                  index={index}
                />
              ))}
          </View>
          <View style={{paddingBottom: 200}}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
