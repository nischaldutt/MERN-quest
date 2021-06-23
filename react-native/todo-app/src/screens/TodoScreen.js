import React from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import { connect } from "react-redux";

import AddTodo from "../components/AddTodo";
import Quote from "../components/Quote";
import TodoItem from "../components/TodoItem";
import StatusTabs from "../components/StatusTabs";
import {
  ALL_TODOS,
  COMPLETED_TODOS,
  INCOMPLETE_TODOS,
} from "../properties/constants";

const TodoScreen = ({ todos, currentTodosStatus }) => {
  const [currentTodos, setCurrentTodos] = React.useState(todos);
  const [currentTodoHeader, setCurrentTodoHeader] = React.useState("");

  React.useEffect(() => {
    setCurrentTodos((prevTodos) => {
      switch (currentTodosStatus) {
        case ALL_TODOS: {
          setCurrentTodoHeader("");
          return todos;
        }
        case COMPLETED_TODOS: {
          setCurrentTodoHeader("Completed Tasks");
          return todos.filter((todo) => todo.completed);
        }
        case INCOMPLETE_TODOS: {
          setCurrentTodoHeader("Incomplete Tasks");
          return todos.filter((todo) => !todo.completed);
        }
        default: {
          setCurrentTodoHeader("");
          return todos;
        }
      }
    });
  }, [currentTodosStatus, todos]);

  const renderEmptyInputAlert = () => {
    Alert.alert("Input Required!", "Task description cannot be empty.", [
      {
        text: "OK",
      },
    ]);
  };

  const renderTodoItems = () => {
    return ({ item }) => {
      return (
        <TodoItem item={item} renderEmptyInputAlert={renderEmptyInputAlert} />
      );
    };
  };

  const renderTodoList = () => {
    return !currentTodos.length ? (
      <Text style={styles.todoListEmpty}>Todo List is Empty!</Text>
    ) : (
      <FlatList
        data={currentTodos}
        keyExtractor={(item) => item.id}
        renderItem={renderTodoItems()}
        keyboardShouldPersistTaps="always"
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* Add new Todo */}
      <AddTodo renderEmptyInputAlert={renderEmptyInputAlert} />

      {/* Render motivational quote */}
      <Quote />

      {/* Render Todo Items */}
      <Text style={styles.todoListHead}>{currentTodoHeader}</Text>
      {renderTodoList()}

      {/* Current Todos Status Buttons */}
      <StatusTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  todoListHead: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#003F63",
  },
  todoListEmpty: {
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#003F63",
  },
});

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  currentTodosStatus: state.currentTodosStatus,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TodoScreen);
