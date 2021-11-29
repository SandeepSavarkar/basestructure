import React, { useState } from 'react';
import { View, } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Label, Back, InputText, Button, StatusBars} from '../../components/ui'
import { Color } from '../../utils/color';
import { Container, SubContainer } from '../../utils/commonStyles';
import { goBack } from '../../utils/commonActions';

const ForgotPassword = (props, { navigation }) => {
    return (
        <Container>
            <StatusBars backgroundColor={Color.PRIMARY} />
            <SubContainer>
                <Back
                    onPress={() => goBack(props)}
                    color={Color.WHITE} iconName="chevron-back-sharp" size={30}
                />
                <KeyboardAwareScrollView
                    keyboardShouldPersistTaps="always">

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                        <Label align="center" xxxlarge color={Color.PRIMARY_DARK}>Forgot Password</Label>

                        <InputText iconName="mail" mt={10} border_radius={15} placeholder="Enter email" />

                        <Button text="Send OTP" btn_xl border_radius={15} mt={20} />

                    </View>
                </KeyboardAwareScrollView>
            </SubContainer>
        </Container>
    );
}

export default ForgotPassword;