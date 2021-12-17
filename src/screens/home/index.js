import * as React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  NativeModuleError,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {
  Settings,
  LoginButton,
  AccessToken,
  Profile,
} from 'react-native-fbsdk-next';

import {
  View,
  Text,
  TouchableOpacity,
  NativeModules,
  StyleSheet,
} from 'react-native';
import Routes from '../../router/routes';

const {RNTwitterSignIn} = NativeModules;

const Home = ({navigation}) => {
  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '233081599321-p39jc4uh9irsi3ebp015ia6gj9p80hqg.apps.googleusercontent.com',
    });
    getCurrentUser();
  }, []);
  const APIKEY = {
    TWITTER_CONSUMER_KEY: 'sPeIIVfg9EbJ9WXh8JB4XvU3u',
    TWITTER_CONSUMER_SECRET:'XRJeT4DCGMHWWndN226UF7uhM5UzRPbDp1mlFmDtbSdA89Ydro',
  };
  const getCurrentUser = async () => {
    let currentUser = await GoogleSignin.getCurrentUser();
    let currentProfile = Profile.getCurrentProfile().then(function (
      currentProfile,
    ) {
      if (currentProfile) {
        console.log(
          'logged user is:' +
            currentProfile.name +
            'profile id:' +
            currentProfile.userID,
        );
      }
    });
    console.log('profile', currentProfile);
    // console.log('current user', currentUser);
  };
  const _signIn = async () => {
    const {idToken, user, scopes, serverAuthCode} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log('token', idToken, user, scopes, serverAuthCode);
    console.log('google....', auth().signInWithCredential(googleCredential));
  };
  const _signOut = async () => {
    try {
      await GoogleSignin.signOut();
    } catch (error) {
      console.log(error, 'error');
    }
  };
  const _twitterLogin = () => {
    RNTwitterSignIn.init(
      APIKEY.TWITTER_CONSUMER_KEY,
      APIKEY.TWITTER_CONSUMER_SECRET,
    )
      .then(() => {
        console.log('Sdk initialized');
        RNTwitterSignIn.logIn()
          .then(loginData => {
            console.log(loginData, 'loginData_Of_twitter');
            // {"authToken": "1246843229355380736-KTNdZhEagikREqTS3mVr5fYgqxEMqP",
            //  "authTokenSecret": "qXQKbAgDm2XJZTJRqg4pZCamUcXqENGh9ew2ytrEgQxmI",
            //   "email": null, "name": "Utsav84526220", 
            //   "userID": "1246843229355380736", "userName": "Utsav84526220"} 
          })
          .catch(error => {
            console.log('error', error);
          });
      })
      .catch(error => {});
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={_signIn}
        //   disabled={this.state.isSigninInProgress}
      />
      <TouchableOpacity
        onPress={_signOut}
        style={{padding: 10, borderColor: 'black', borderWidth: 2, margin: 5}}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
      <View style={{marginVertical: 10}}>
        <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.log('error', error);
              console.log('login has error: ' + result.error);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                console.log(data.accessToken.toString());
              });
            }
          }}
          // onLogoutFinished={() => console.log("logout.")}
        />
      </View>
      <TouchableOpacity
        onPress={_twitterLogin}
        style={{backgroundColor: '#1DA1F2', padding: 10, borderRadius: 8}}>
        <Text>Twitter</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate(Routes.Profile)}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    height: 50,
  },
  icon: {
    width: 100,
    height: 30,
  },
});

export default Home;
