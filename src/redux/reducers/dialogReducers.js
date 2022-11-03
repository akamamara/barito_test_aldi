const DIALOG_ADD_TODO = "dialog/addTodo";
const DIALOG_DETAILS_TODO = "dialog/detailsTodo";
const DIALOG_EDIT_TODO = "dialog/editTodo";
const DIALOG_DELETE_TODO = "dialog/deleteTodo";

const initialState = {
	add: false,
	details: {
		state: false,
		id: null,
	},
	edit: {
		state: false,
		id: null,
	},
	delete: {
		state: false,
		id: null,
	},
};

const dialogReducers = (state = initialState, actions) => {
	switch (actions.type) {
		case DIALOG_ADD_TODO: {
			return {
				...state,
				add: actions.payload,
			};
		}
		case DIALOG_DETAILS_TODO: {
			return {
				...state,
				details: actions.payload,
			};
		}
		case DIALOG_EDIT_TODO: {
			return {
				...state,
				edit: actions.payload,
			};
		}
		case DIALOG_DELETE_TODO: {
			return {
				...state,
				delete: actions.payload,
			};
		}
		default: {
			return state;
		}
	}
};

export {
	DIALOG_ADD_TODO,
	DIALOG_DETAILS_TODO,
	DIALOG_EDIT_TODO,
	DIALOG_DELETE_TODO,
};
export default dialogReducers;
