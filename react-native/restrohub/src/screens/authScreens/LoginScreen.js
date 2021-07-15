import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import { connect } from "react-redux";
import { Divider } from "react-native-elements";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useTheme } from "react-native-paper";

import FormInput from "../../components/FormInput";
import CustomButton from "../../components/CustomButton";

import { colors, globalStyles } from "../../themes/globalStyles";
import { loginWithEmailAndPassword } from "../../redux/actions/authActions";
import { setIsLoading, setAlert } from "../../redux/actions/commonActions";
import { onGoogleButtonPress } from "../../services/firebase/googleLoginServices";
import { loginFormSchema } from "../../validations/authValidationSchemas";

import {
  USER_NOT_REGISTERED,
  WRONG_PASSWORD,
  LOGIN_SUCCESSFUL,
} from "../../properties/constants";

const LoginScreen = ({
  user,
  navigation,
  isLoading,
  loginWithEmailAndPassword,
  setIsLoading,
  setAlert,
}) => {
  const { colors } = useTheme();
  const handleLogin = ({ email, password }, { resetForm }) => {
    setIsLoading(true);
    loginWithEmailAndPassword(email, password);
    resetForm();
  };

  const handleGoogleLogIn = async () => {
    setIsLoading(true);
    try {
      await onGoogleButtonPress();
      setAlert(LOGIN_SUCCESSFUL);
    } catch (error) {
      // if user cancels the google sign_in request
      setIsLoading(false);
    }
  };

  const renderGoogleLogInButton = () => {
    return (
      <GoogleSigninButton
        style={styles.googleSigninButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={handleGoogleLogIn}
      />
    );
  };

  const renderLoginForm = () => {
    return (
      <View style={globalStyles.container}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginFormSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={handleLogin}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={globalStyles.container}>
              <FormInput
                autoFocus={true}
                errorMessage={errors.email}
                label="Enter Email Address"
                leftIconName="mail-outline"
                leftIconSize={24}
                placeholder="john.doe@gmail.com"
                value={values.email}
                handleInputChange={handleChange("email")}
              />

              <FormInput
                secureTextEntry={true}
                errorMessage={errors.password}
                label="Enter Password"
                leftIconName="lock-closed-outline"
                leftIconSize={24}
                placeholder="**************"
                value={values.password}
                handleInputChange={handleChange("password")}
              />
              <CustomButton
                title="Login"
                onPress={handleSubmit}
                bgColor={colors.primary}
                fontColor={colors.accent}
              />

              <CustomButton
                title="Forgot Password?"
                onPress={() => navigation.navigate("ForgotPassword")}
                fontColor={colors.primary}
              />

              {renderGoogleLogInButton()}

              <Divider
                style={styles.dividerStyles}
                color={colors.backdrop}
                inset
                insetType="middle"
                width={2}
                orientation="horizontal"
              />
              <Text>OR</Text>

              <CustomButton
                title="Signup"
                onPress={() => navigation.navigate("Signup")}
                bgColor={colors.primary}
                fontColor={colors.accent}
              />
            </View>
          )}
        </Formik>
      </View>
    );
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={globalStyles.container}>
      {renderLoginForm()}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  dividerStyles: {
    width: "70%",
    margin: 20,
  },
  googleSigninButton: {
    width: 200,
  },
});

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.isLoading,
  user: state.user,
});

const mapDispatchToProps = {
  loginWithEmailAndPassword,
  setIsLoading,
  setAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
