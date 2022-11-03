const TODOS_ADD = "todos/addTodos";
const TODOS_COMPLETE_TODO = "todos/completeTodo";
const TODOS_EDIT_TODO = "todos/editTodo";
const TODOS_DELETE_TODO = "todos/deleteTodo";
const TODOS_FILTER_TODO = "todos/deleteTodo";

const initialState = {
	data: [],
	category: [],
	filters: "Semua",
};

function nextTodoId(todos) {
	const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
	return maxId + 1;
}

const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case TODOS_ADD: {
			return {
				...state,
				data: [
					...state.data,
					{ id: nextTodoId(state.data), done: false, ...action.payload },
				],
				category: [...new Set([...state.category, action.payload.kategori])],
			};
		}
		case TODOS_COMPLETE_TODO: {
			return {
				...state,
				data: state.data.map((todo) => {
					if (todo.id !== action.payload) return todo;
					return {
						...todo,
						done: !todo.done,
					};
				}),
			};
		}
		case TODOS_EDIT_TODO: {
			return {
				...state,
				data: state.data.map((todo) => {
					if (todo.id !== action.payload.id) return todo;
					return {
						...action.payload.todo,
					};
				}),
				category: [
					...new Set([
						state.data.map((val) => val.kategori),
						action.payload.todo.kategori,
					]),
				],
			};
		}
		case TODOS_DELETE_TODO: {
			const todo = state.data;

			return {
				...state,
				data: todo.filter((val) => val.id !== action.payload),
				category: [...new Set([state.data.map((val) => val.kategori)])],
			};
		}
		case TODOS_FILTER_TODO: {
			return {
				data: state.data,
				category: state.category,
				filters: action.payload,
			};
		}
		default:
			return state;
	}
};

export default todosReducer;
export {
	TODOS_ADD,
	TODOS_COMPLETE_TODO,
	TODOS_EDIT_TODO,
	TODOS_DELETE_TODO,
	TODOS_FILTER_TODO,
};
