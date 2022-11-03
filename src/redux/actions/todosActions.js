import {
	TODOS_ADD,
	TODOS_COMPLETE_TODO,
	TODOS_DELETE_TODO,
	TODOS_EDIT_TODO,
	TODOS_FILTER_TODO,
} from "../reducers/todosReducers";

const addTodo = (todo) => {
	return {
		type: TODOS_ADD,
		payload: todo,
	};
};

const editTodo = (id, todo) => {
	return {
		type: TODOS_EDIT_TODO,
		payload: {
			id,
			todo,
		},
	};
};

const completeTodo = (id) => {
	return {
		type: TODOS_COMPLETE_TODO,
		payload: id,
	};
};

const deleteTodo = (id) => {
	return {
		type: TODOS_DELETE_TODO,
		payload: id,
	};
};

const setFilterTodo = (filter) => {
	return {
		type: TODOS_FILTER_TODO,
		payload: filter,
	};
};

export { addTodo, completeTodo, editTodo, deleteTodo, setFilterTodo };
