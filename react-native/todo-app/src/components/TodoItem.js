import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { connect } from "react-redux";

import { Button, Icon } from "react-native-elements";

import {
  removeTodoItem,
  completeTodoItem,
  editTodoItem,
} from "../redux/actions";

const TodoItem = ({
  item,
  removeTodoItem,
  completeTodoItem,
  editTodoItem,
  renderEmptyInputAlert,
}) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const { id, description, completed } = item;
  const [updatedDescription, setUpdatedDescription] =
    React.useState(description);

  const handleEdit = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const updateDescription = (value) => {
    setUpdatedDescription(value);
  };

  const addChanges = () => {
    // check if updatedDescription is empty string
    if (updatedDescription.trim() !== "") {
      editTodoItem({ id, description: updatedDescription, completed });
      // set isEditing status to false
      handleEdit();
    } else {
      renderEmptyInputAlert();
    }
  };

  const handleDelete = () => {
    removeTodoItem(item.id);
  };

  const handleTodoItemPress = () => {
    completeTodoItem(id);
  };

  const renderTodoItem = () => {
    return (
      <TouchableOpacity style={styles.container} onPress={handleTodoItemPress}>
        <View style={styles.item}>
          {completed ? (
            <Text style={{ ...styles.todoDesc, ...styles.strikeThroughText }}>
              {description}
            </Text>
          ) : (
            <Text style={styles.todoDesc}>{description}</Text>
          )}
          <View style={styles.todoItemBtns}>
            <Button
              onPress={handleEdit}
              buttonStyle={styles.btnStyles}
              icon={<Icon name="edit" color="white" />}
            />
            <Button
              onPress={handleDelete}
              buttonStyle={styles.btnStyles}
              icon={<Icon name="delete" color="white" />}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderEditableTodoItem = () => {
    return (
      <View>
        <TextInput
          autoFocus
          style={styles.item}
          multiline
          value={updatedDescription}
          onChangeText={updateDescription}
        />
        <View style={(styles.todoItemBtns, styles.updateBtn)}>
          <Button
            title="Update"
            onPress={addChanges}
            buttonStyle={styles.btnStyles}
          />
        </View>
      </View>
    );
  };

  return <View>{isEditing ? renderEditableTodoItem() : renderTodoItem()}</View>;
};

const styles = StyleSheet.create({
  container: {},
  todoDesc: {
    width: 200,
    display: "flex",
    flexWrap: "wrap",
  },
  strikeThroughText: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  item: {
    backgroundColor: "#D9D9D9",
    padding: 16,
    marginTop: 16,
    borderColor: "#777",
    borderWidth: 3,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todoItemBtns: {
    width: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  updateBtn: {
    marginTop: 10,
    width: 150,
  },
  btnStyles: {
    backgroundColor: "#003F63",
    borderRadius: 10,
  },
});

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {
  removeTodoItem,
  completeTodoItem,
  editTodoItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
