import React from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Snackbar } from "react-native-paper";

import { colors, globalStyles } from "../themes/globalStyles";
import { setAlert } from "../redux/actions/commonActions";
import {
  USER_NOT_REGISTERED,
  WRONG_PASSWORD,
  EMAIL_ALREADY_REGISTERED,
} from "../properties/constants";

const AlertSnackbar = ({ alert, setAlert, user }) => {
  const [alertVisible, setAlertVisible] = React.useState(false);
  const [errorVisible, setErrorVisible] = React.useState(false);

  React.useEffect(() => {
    setAlertVisible(true);
  }, [alert]);

  React.useEffect(() => {
    setErrorVisible(true);
  }, [user]);

  const onDismissAlertSnackBar = () => {
    // clear the alert from the state
    setAlert(null);
    setAlertVisible(false);
  };

  const onDismissErrorSnackbar = () => {
    setErrorVisible(false);
  };

  const renderAlert = () => {
    return (
      <Snackbar
        style={globalStyles.alertStyles}
        visible={alertVisible}
        onDismiss={onDismissAlertSnackBar}
        duration={2000}>
        {alert}
      </Snackbar>
    );
  };

  const renderUserError = () => {
    let errorMessage;
    switch (user.error) {
      case "auth/wrong-password": {
        errorMessage = WRONG_PASSWORD;
        break;
      }
      case "auth/user-not-found": {
        errorMessage = USER_NOT_REGISTERED;
        break;
      }
      case "auth/email-already-in-use": {
        errorMessage = EMAIL_ALREADY_REGISTERED;
        break;
      }
      default:
        errorMessage = null;
        break;
    }

    return (
      errorMessage && (
        <Snackbar
          style={globalStyles.errorStyles}
          visible={errorVisible}
          onDismiss={onDismissErrorSnackbar}
          duration={2000}>
          {errorMessage}
        </Snackbar>
      )
    );
  };

  return alert ? renderAlert() : renderUserError();
};

const styles = StyleSheet.create({});

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  alert: state.alert,
});

const mapDispatchToProps = {
  setAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertSnackbar);
