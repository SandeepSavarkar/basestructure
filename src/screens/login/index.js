import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Label, InputText, Button, StatusBars, } from '../../components/ui'
import Routes from '../../router/routes';
import { Color } from '../../utils/color';
import { Container, SubContainer } from '../../utils/commonStyles';
import { validation } from '../../utils/validationUtils';
import { responsiveWidth } from '../../utils/themeUtils';
import { navigate, push, resetAuth } from '../../utils/commonActions';

const Login = (props, { navigation, route }) => {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const checkAuth = () => {
        resetAuth(props)
    }

    const handleLogin = () => {

        const emailError = validation('email', email)
        const passwordError = validation('password', password)

        setEmailError(emailError);
        setPasswordError(passwordError);

        if (!emailError && !passwordError) {
            checkAuth();
        }
    }

    return (
        <Container>
            <StatusBars backgroundColor={Color.PRIMARY} />
            <SubContainer>
                <KeyboardAwareScrollView
                    keyboardShouldPersistTaps="always">
                    <View>
                        <Label align="center" xxxlarge color={Color.PRIMARY_DARK}>Login Screen</Label>

                        <InputText iconName="mail" mt={10} placeholder="Enter email" border_radius={15} onChangeText={(val) => setEmail(val)} error={emailError} />

                        <InputText iconName="lock-open-sharp" placeholder="Enter password" mt={10}
                            border_radius={15} password onChangeText={(val) => setPassword(val)} error={passwordError} />

                        <Label align='right' mt={10} large color={Color.BLUE} onPress={() => push(props, Routes.ForgotPassword)} >Forgot Password ?</Label>

                        <Button text='LOGIN' btn_xl onPress={handleLogin} mt={20} border_radius={15} />

                        <Button text='SIGN UP' btn_xl onPress={() => push(props, Routes.SignUp)} mt={20} border_radius={15} />

                    </View>
                </KeyboardAwareScrollView>
            </SubContainer>
        </Container>
    );
}

export default Login;