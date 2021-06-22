import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { connect } from "react-redux";

import { Button } from "react-native-elements";

import { addNewTodoItem } from "../redux/actions";

const AddTodo = ({ addNewTodoItem, renderEmptyInputAlert }) => {
  const [description, setDescription] = React.useState("");

  const handleSubmit = () => {
    // check if description is not an empty string
    if (description.trim() !== "") {
      addNewTodoItem(description);
      setDescription("");
    } else {
      renderEmptyInputAlert();
    }
  };

  const changeHandler = (value) => {
    setDescription(value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoFocus
        autoCompleteType="name"
        value={description}
        multiline
        style={styles.todoInput}
        placeholder="eg. Complete the assignment."
        onChangeText={changeHandler}
      />

      <Button
        title="Add"
        onPress={handleSubmit}
        buttonStyle={styles.addTodoBtn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 10,
  },
  todoInput: {
    width: "100%",
    borderWidth: 3,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
    borderColor: "#F2B138",
  },
  addTodoBtn: {
    padding: 10,
    width: 200,
    height: 50,
    margin: 20,
    backgroundColor: "#003F63",
  },
});

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {
  addNewTodoItem,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
