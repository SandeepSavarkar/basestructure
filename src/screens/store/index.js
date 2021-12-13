import * as React from 'react';
import {View, ActivityIndicator, FlatList, SafeAreaView} from 'react-native';

import Card from '../../components/ui/card';
import themeUtils from '../../utils/themeUtils';
import {Color} from '../../utils/color';

let data = [
  {
    id: 1,
    name: 'g1',
    labelp: 'p1',
    time: '1',
    img: require('../../assets/images/slider.jpeg'),
  },
  {
    id: 2,
    name: 'g2',
    labelp: 'p2',
    time: '2',
    img: require('../../assets/images/slider.jpeg'),
  },
  {
    id: 3,
    name: 'g3',
    labelp: 'p3',
    time: '3',
    img: require('../../assets/images/slider.jpeg'),
  },
  {
    id: 4,
    name: 'g4',
    labelp: 'p4',
    time: '4',
    img: require('../../assets/images/slider.jpeg'),
  },
  {
    id: 5,
    name: 'g5',
    labelp: 'p5',
    time: '5',
    img: require('../../assets/images/slider.jpeg'),
  },
  {
    id: 6,
    name: 'g5',
    labelp: 'p5',
    time: '5',
    img: require('../../assets/images/slider.jpeg'),
  },
  {
    id: 7,
    name: 'g5',
    labelp: 'p5',
    time: '5',
    img: require('../../assets/images/slider.jpeg'),
  },
  {
    id: 8,
    name: 'g5',
    labelp: 'p5',
    time: '5',
    img: require('../../assets/images/slider.jpeg'),
  },
  {
    id: 9,
    name: 'g5',
    labelp: 'p5',
    time: '5',
    img: require('../../assets/images/slider.jpeg'),
  },
];
const FooterLoader = ({visible}) => {
  console.log('visible', visible);
  return visible ? (
    <ActivityIndicator size="large" color={Color.PRIMARY} />
  ) : null;
};
const ProductList = ({navigation}) => {
  const [productData, setProductData] = React.useState(data);
  const [bottomTabLoadingFlag, setBottomTabLoadingFlag] = React.useState(false);

  const renderProducts = (item, index) => (
    <Card
      key={index}
      labelp={item.name}
      label={item.label}
      time={index + 1}
      img={item.img}
    />
  );
  const onScrollHandler = () => {
    setBottomTabLoadingFlag(true);
    setProductData([...productData, ...data]);
    setTimeout(() => {
      setBottomTabLoadingFlag(false);
    }, 500);
  };
  const listFooterComponent = () => {
    return <FooterLoader visible={bottomTabLoadingFlag} />;
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{alignItems:'center',flex:1}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            width: themeUtils.relativeWidth(95),
            
          }}>
          <FlatList
            data={productData}
            renderItem={({item, index}) => renderProducts(item, index)}
            keyExtractor={(item, index) => index}
            numColumns={2}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={true}
            onEndReached={onScrollHandler}
            onEndReachedThreshold={0.5}
            ListFooterComponent={listFooterComponent}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ProductList;
