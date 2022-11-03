import {
	DIALOG_ADD_TODO,
	DIALOG_DELETE_TODO,
	DIALOG_DETAILS_TODO,
	DIALOG_EDIT_TODO,
} from "../reducers/dialogReducers";

const handleDialogAddTodo = (state) => {
	return {
		type: DIALOG_ADD_TODO,
		payload: state,
	};
};

const handleDialogDetailsTodo = (state) => {
	return {
		type: DIALOG_DETAILS_TODO,
		payload: state,
	};
};

const handleDialogEditTodo = (state) => {
	return {
		type: DIALOG_EDIT_TODO,
		payload: state,
	};
};

const handleDialogDeleteTodo = (state) => {
	return {
		type: DIALOG_DELETE_TODO,
		payload: state,
	};
};

export {
	handleDialogAddTodo,
	handleDialogDetailsTodo,
	handleDialogEditTodo,
	handleDialogDeleteTodo,
};
