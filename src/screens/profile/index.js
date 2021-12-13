import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Label from '../../components/ui/label';

import Routes from '../../router/routes';
import {Color} from '../../utils/color';
import ThemeUtils from '../../utils/themeUtils';

const {width, height} = Dimensions.get('window');

let data = [
  {
    id: 1,
    name: 'Functionality',
    image: require('../../assets/images/functionality.jpeg'),
  },
  {id: 2, name: 'Quality', image: require('../../assets/images/quality.jpeg')},
  {
    id: 3,
    name: 'Performance',
    image: require('../../assets/images/performance.jpeg'),
  },
  {
    id: 4,
    name: 'Customer Needs',
    image: require('../../assets/images/cusNeed.jpeg'),
  },
  {
    id: 5,
    name: 'Customer Preferences',
    image: require('../../assets/images/cusPreference.jpeg'),
  },
  {
    id: 6,
    name: 'Convenience',
    image: require('../../assets/images/convenient.jpeg'),
  },
];
let pollData = [
  {
    id: 1,
    text: 'React Native',
    percentage: 5,
    width: ThemeUtils.relativeWidth(10),
  },
  {
    id: 2,
    text: 'React Js',
    percentage: 10,
    width: ThemeUtils.relativeWidth(20),
  },
  {id: 3, text: 'Hooks', percentage: 15, width: ThemeUtils.relativeWidth(30)},
  {id: 4, text: 'Redux', percentage: 20, width: ThemeUtils.relativeWidth(40)},
];

const animated = new Animated.Value(0);

const Profile = ({navigation}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [imageLink, setImageLink] = React.useState(
    require('../../assets/images/functionality.jpeg'),
  );
  const [pollId, setPollID] = React.useState(null);
  const [onPollFlag, setOnPollFlag] = React.useState(false);
  const [pollCollection, setPollCollection] = React.useState(pollData);

  const onTabPress = (index, link) => {
    console.log('index', index);
    setActiveIndex(index);
    setImageLink(link);
  };
  const handleOnPress = id => {
    console.log('id', id);
    var preVar = 0;

    pollCollection.map((item, index) => {
      preVar = preVar + item.percentage;
    });
    console.log('next---', preVar);
    if (pollId != id && preVar <= 100) {
      setOnPollFlag(true);
    setPollID(id);

      var objIndex = pollCollection.findIndex(obj => obj.id === id);
      if (pollCollection[objIndex].percentage < 100) {
        pollCollection[objIndex].percentage =
          pollCollection[objIndex].percentage + 5;
        pollCollection[objIndex].width =
          pollCollection[objIndex].width + ThemeUtils.relativeWidth(10);
        // pollCollection[objIndex].width = pollCollection[objIndex].width - 60;
      }
    }
  };
  console.log('animated', animated);
  console.log('final', pollCollection);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: Color.WHITE}}>
        <View
          style={{
            backgroundColor: Color.BG_TAB,
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {data.map((item, index) => {
              return (
                <TouchableOpacity
                  style={{
                    borderBottomWidth: activeIndex === index ? 5 : 1,
                    borderColor:
                      activeIndex === index
                        ? Color.ACTIVE_TAB_INDEX
                        : Color.INACTIVE_TAB_BORDER,
                    paddingHorizontal: ThemeUtils.relativeWidth(3),
                    paddingVertical: ThemeUtils.responsiveHeight(9.5),
                  }}
                  onPress={() => onTabPress(index, item.image)}>
                  <Label
                    color={
                      activeIndex === index
                        ? Color.ACTIVE_TAB_INDEX
                        : Color.INACTIVE_TAB_INDEX
                    }
                    xlarge>
                    {item.name}
                  </Label>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginVertical: ThemeUtils.responsiveHeight(2),
          }}>
          <Image
            source={imageLink}
            resizeMode={'contain'}
            style={{
              width: ThemeUtils.relativeWidth(80),
              height: 200,
            }}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.Home)}
            style={{
              paddingHorizontal: ThemeUtils.relativeWidth(2),
              backgroundColor: '#5096F1',
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: ThemeUtils.relativeWidth(3),
              width: ThemeUtils.relativeWidth(15),
            }}>
            <Text>Home</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <Label xxlarge>What do you like from below?</Label>
          </View>
          {pollCollection.map((item, index) => {
            // let temp = animated.interpolate({
            //   inputRange: [0, 1],
            //   outputRange: ["60%", "30%"],

            // });
            console.log('temp', item.width);
            return (
              <TouchableOpacity
                style={{
                  marginHorizontal: ThemeUtils.relativeWidth(1.5),
                  backgroundColor: '#b3b3b3',
                  borderRadius: 10,
                  marginVertical: ThemeUtils.responsiveHeight(2),
                  borderColor: pollId === item.id ? 'green' : null,
                  borderWidth: pollId === item.id ? 2 : null,
                }}
                onPress={() => handleOnPress(item.id)}>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: onPollFlag ? '#cce6ff' : null,
                    shadowColor: '#ff80bf',
                    width: onPollFlag ? item.width : null,
                    alignItems: 'center',
                    paddingVertical: ThemeUtils.relativeHeight(1),
                    borderRadius: 10,
                    paddingHorizontal: ThemeUtils.relativeWidth(1),
                  }}>
                  <View
                    style={{
                      width: 29,
                      height: 29,
                      borderRadius: 29,
                      borderColor: 'black',
                      borderWidth: 3,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {pollId === item.id ? (
                      <Image
                        source={require('../../assets/images/greenSign.jpg')}
                        style={{width: 30, height: 30}}
                      />
                    ) : (
                      <View
                        style={{
                          backgroundColor: '#b3b3b3',
                          height: 26,
                          width: 26,
                          borderRadius: 26,
                        }}
                      />
                    )}
                  </View>
                  <View
                    style={{
                      marginHorizontal: 10,
                      width: ThemeUtils.relativeWidth(85),
                      flexDirection: 'row',
                    }}>
                    <Label>{item.text}</Label>
                    {onPollFlag ? <Label>{item.percentage}%</Label> : null}
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        {/* <RNPoll
        totalVotes={30}
        choices={choices}
        // onChoicePress={(selectedChoice: IChoice) =>
        //   console.log("SelectedChoice: ", selectedChoice)
        // }
      /> */}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
