import React, { useState } from 'react';
import { ScrollView, View, } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Label, InputText, Button, Back, StatusBars } from '../../components/ui'
import Routes from '../../router/routes';
import { Color } from '../../utils/color';
import { Container, SubContainer } from '../../utils/commonStyles';
import { goBack, goBack1 } from '../../utils/commonActions';

const SignUp = (props, { navigation }) => {
    return (
        <Container>
            <StatusBars backgroundColor={Color.PRIMARY} />
            <SubContainer>
                <ScrollView>
                    <Back
                        onPress={() => goBack(props)}
                        color={Color.WHITE} iconName="chevron-back-sharp" size={30}
                    />

                    {/* <KeyboardAwareScrollView
                        keyboardShouldPersistTaps="always"> */}

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                        <Label align="center" xxxlarge color={Color.PRIMARY_DARK}>Signup Screen</Label>
                        <InputText iconName="mail"   mt={10} border_radius={15} placeholder="Enter email" />
                        <InputText iconName="ios-call-sharp" mt={10} border_radius={15} placeholder="Enter phone number" />
                        <InputText iconName="lock-open-sharp" mt={10} border_radius={15}  placeholder="Enter password" />
                        <InputText iconName="lock-closed-sharp" mt={10} border_radius={15} password placeholder="Enter confirm password" />

                        <Button text="Signup" btn_xl border_radius={15} mt={20} />
                       
                    </View>
                    {/* </KeyboardAwareScrollView> */}
                </ScrollView>
            </SubContainer>
        </Container>
    );
}

export default SignUp;