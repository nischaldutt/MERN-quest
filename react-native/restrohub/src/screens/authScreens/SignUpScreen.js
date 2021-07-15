import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useTheme } from "react-native-paper";

import FormInput from "../../components/FormInput";
import CustomButton from "../../components/CustomButton";

import { colors, globalStyles } from "../../themes/globalStyles";
import { registerNewUserWithEmailAndPassword } from "../../redux/actions/authActions";
import { setIsLoading, setAlert } from "../../redux/actions/commonActions";
import { signupFormSchema } from "../../validations/authValidationSchemas";

const SignUpScreen = ({
  registerNewUserWithEmailAndPassword,
  setIsLoading,
  setAlert,
}) => {
  const { colors } = useTheme();

  const handleSignup = ({ email, password }, { resetForm }) => {
    setIsLoading(true);
    registerNewUserWithEmailAndPassword(email, password);
    resetForm();
  };

  const renderSignupForm = () => {
    return (
      <View style={globalStyles.container}>
        <Formik
          initialValues={{ email: "", password: "", confirmNewPassword: "" }}
          validationSchema={signupFormSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={handleSignup}>
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

              <FormInput
                secureTextEntry={true}
                errorMessage={errors.confirmNewPassword}
                label="Confirm New Password"
                leftIconName="shield-checkmark-outline"
                leftIconSize={24}
                placeholder="**************"
                value={values.confirmNewPassword}
                handleInputChange={handleChange("confirmNewPassword")}
              />

              <CustomButton
                title="Signup"
                onPress={handleSubmit}
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
      {renderSignupForm()}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {
  registerNewUserWithEmailAndPassword,
  setIsLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
