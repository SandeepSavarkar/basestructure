import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, FlatList, TouchableHighlight, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Label, InputText, Button, StatusBars, Card, ModalView, DropDown, DataTables, GradientButton, Loader, Carousel } from '../../components/ui'
import { Color } from '../../utils/color';
import { Container, SubContainer } from '../../utils/commonStyles';
import { responsiveHeight, responsiveWidth } from '../../utils/themeUtils';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const dropData = [
    { label: 'Timber/Plywood/Laminate', value: 'apple' },
    { label: 'Electrical/Electronics', value: 'banana' },
    { label: 'Building/Construction', value: 'Construction' },
    { label: 'House Shifting', value: 'Shifting' },
    { label: 'Furniture/Home Furnishing', value: 'banbdfashgb' },
    { label: 'FMCG/Food Products', value: 'abanbhcdfab' },
    { label: 'Chemicals/Paints', value: 'bacnbdfab' },
    { label: 'Paper/Packing', value: 'banbdfardb' },
    { label: 'Ceramics/Hardware', value: 'banffbdfab' },
    { label: 'Pharmacy/Medical', value: 'banbdfattb' },
    { label: 'Perishable food items', value: 'baniibeedfab' },
    { label: 'Machines/Metals', value: 'baoonbdfooab' },
]

let temp = [
    { name: 'slider 1', uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRfl9cnr8NXxgTTRRKt6dUGT57fPRfIoj9Q&usqp=CAU" },
    { name: 'slider 2', uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRfl9cnr8NXxgTTRRKt6dUGT57fPRfIoj9Q&usqp=CAU" },
    { name: 'slider 3', uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRfl9cnr8NXxgTTRRKt6dUGT57fPRfIoj9Q&usqp=CAU" },
    { name: 'slider 4', uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRfl9cnr8NXxgTTRRKt6dUGT57fPRfIoj9Q&usqp=CAU" },
    { name: 'slider 5', uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRfl9cnr8NXxgTTRRKt6dUGT57fPRfIoj9Q&usqp=CAU" },
];

const Home = (props, { navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    const openModal = () => {
        setModalVisible(true);
    }
    const closeModal = () => {
        setModalVisible(false);
    }
    const handleModalSubmit = () => {
        console.log('Submitted');
        closeModal();
    }



    const tableData = [
        { name: 'Muhammad Rafeh', age: 21, gender: 'male', },
        { name: 'Muhammad Rafeh', age: 21, gender: 'male', },
        { name: 'Muhammad Akif', age: 22, gender: 'male', },
        { name: 'Muhammad Umar', age: 21, gender: 'male', },
        { name: 'Amna Shakeel', age: 22, gender: 'female', },
        { name: 'Muhammad Ammar', age: 20, gender: 'male', },
        { name: 'Muhammad Moiz', age: 13, gender: 'male', }
    ]

    const title = ['name', 'age', 'gender'];


    return (
        <Container>
            <StatusBars backgroundColor={Color.PRIMARY} />
            <Loader loading={loading} />
            <SubContainer>
                <Label xxlarge align='center'>Home Screen</Label>

                {/* <View >
                    <Label align="center" xlarge color={Color.PRIMARY_DARK}>Home Screen</Label>
                    {[...Array(2)].map((x, i) =>
                        <Card
                            img={{ uri: 'https://media.gettyimages.com/photos/sachin-tendulkar-of-india-raises-his-bat-on-scoring-his-century-the-picture-id110022742?s=612x612' }}
                            title="Sachin"
                            subTitle="Tendulkar"
                            description="Sachin Tendulkar, just remember the name" key={i} />
                    )}

                </View>

                <Button mt={20} onPress={() => openModal()} btn_lg text="Press Me" />

                <View style={{ marginTop: responsiveHeight(5) }}>
                    <DropDown data={dropData} />
                </View>

                <View style={{ width: '100%', alignSelf: 'center', marginTop: 20 }}>
                    <DataTables {...props} data={tableData} title={title} pages={2} />
                </View> */}
                <Carousel test={temp} />
                <ModalView open={openModal} title="Modal Title" description="Modal Content" close={closeModal} modalVisible={modalVisible} submit={handleModalSubmit} />
            </SubContainer>
        </Container>
    );
}

export default Home;