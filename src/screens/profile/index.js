import React, { useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Label, InputText, Button, StatusBars, Back } from '../../components/ui'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Routes from '../../router/routes';
import { Color } from '../../utils/color';
import { Container, SubContainer } from '../../utils/commonStyles';
import { responsiveHeight } from '../../utils/themeUtils';
import { goBack, push, resetAuth, resetNonAuth } from '../../utils/commonActions';

const Profile = (props, { navigation, route }) => {

    const updateProfile = () => {
        console.log('In update');
    }
    return (
        <Container>
            <StatusBars backgroundColor={Color.PRIMARY} />
            <SubContainer>
                <ScrollView>
                    <Back
                        onPress={() => goBack(props)}
                        color={Color.WHITE} iconName="chevron-back-sharp" size={30}
                    />
                    <Back
                        onPress={() => resetNonAuth(props)}
                        color={Color.WHITE}
                        iconName="log-out-outline"
                        size={30}
                        iconContainer={{ position: 'absolute', top: 0, right: 0 }}

                    />

                    <KeyboardAwareScrollView
                        keyboardShouldPersistTaps="always">

                        {/* <View style={{ height: responsiveHeight(30), justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 200, height: 200, borderRadius: 100 }}
                                resizeMode="cover"
                                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRfl9cnr8NXxgTTRRKt6dUGT57fPRfIoj9Q&usqp=CAU" }}
                            />
                        </View> */}
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                            <Label align="center" mt={20} xxxlarge color={Color.PRIMARY_DARK}>Update Profile</Label>

                            <InputText iconName="mail"  mt={10} border_radius={15} placeholder="Edit email" />
                            <InputText iconName="person" mt={10} border_radius={15} placeholder="Edit username" />
                            <InputText iconName="lock-open-sharp" mt={10} border_radius={15} placeholder="Edit phone" />

                            <Button text='Update' btn_xl onPress={updateProfile}  mt={20} border_radius={15} />
                            <Button text='Reset Password' btn_xl onPress={() => push(props, Routes.ResetPassword)} mt={20} border_radius={15} />

                        </View>
                    </KeyboardAwareScrollView>
                </ScrollView>
            </SubContainer>
        </Container>
    );
}

export default Profile;