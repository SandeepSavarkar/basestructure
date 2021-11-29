import React, { useState } from 'react';
import { View, } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Label, InputText, Back, Button, StatusBars } from '../../components/ui'
import Routes from '../../router/routes';
import { Color } from '../../utils/color';
import { Container, SubContainer } from '../../utils/commonStyles';
import { goBack } from '../../utils/commonActions';

const ResetPassword = (props, { navigation }) => {
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

                        <Label align="center" xxxlarge color={Color.PRIMARY_DARK}>Reset Password</Label>

                        <InputText iconName="lock-closed-sharp" mt={10} border_radius={15} placeholder="New password" />

                        <InputText iconName="lock-closed-sharp" mt={10} border_radius={15} placeholder="Confirm new password" />

                        <Button text="Change" btn_xl border_radius={15} mt={20} onPress={() => console.log('Changed password')} />

                    </View>
                </KeyboardAwareScrollView>
            </SubContainer>
        </Container>
    );
}

export default ResetPassword;