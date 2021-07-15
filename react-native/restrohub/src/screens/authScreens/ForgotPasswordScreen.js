import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useTheme } from "react-native-paper";

import FormInput from "../../components/FormInput";
import CustomButton from "../../components/CustomButton";

import { colors, globalStyles } from "../../themes/globalStyles";
import { setIsLoading, setAlert } from "../../redux/actions/commonActions";
import { sendPasswordResetEmail } from "../../services/firebase/authServices";
import { forgotPasswordFormSchema } from "../../validations/authValidationSchemas";
import { EMAIL_SENT, USER_NOT_REGISTERED } from "../../properties/constants";

const ForgotPasswordScreen = ({ setIsLoading, setAlert }) => {
  const { colors } = useTheme();

  const handleOnSubmit = async ({ email }, { resetForm }) => {
    resetForm();
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(email);
      setAlert(EMAIL_SENT);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found": {
          setAlert(USER_NOT_REGISTERED);
          break;
        }
        default: {
          setAlert(error.code);
          break;
        }
      }
    }
    setIsLoading(false);
  };

  const renderForgotPasswordForm = () => {
    return (
      <View style={globalStyles.container}>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={forgotPasswordFormSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={handleOnSubmit}>
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

              <CustomButton
                title="Send Email"
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
      {renderForgotPasswordForm()}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {
  setIsLoading,
  setAlert,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPasswordScreen);
