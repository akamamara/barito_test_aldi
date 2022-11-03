import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "./Modal";
import InputWidget from "./InputWidget";
import {
	handleDialogAddTodo,
	handleDialogEditTodo,
} from "../redux/actions/dialogActions";
import { addTodo, editTodo } from "../redux/actions/todosActions";

const initialState = {
	nama: "",
	kategori: "",
	deskripsi: "",
};

export default function EditModal() {
	const dispatch = useDispatch();
	const openDialog = useSelector((state) => state.dialog.edit);
	const todo = useSelector((state) =>
		state.todos.data.filter((val) => val.id === openDialog.id)
	);

	const [data, setData] = useState(todo[0]);

	const handleCloseDialog = () =>
		dispatch(
			handleDialogEditTodo({
				state: false,
				id: 0,
			})
		);
	const handleChangeTodos = () => {
		dispatch(editTodo(openDialog.id, data));
		setData(initialState);
		handleCloseDialog();
	};

	return (
		<Modal
			title="Ubah Task"
			state={openDialog.state}
			onClose={handleCloseDialog}
			actions={
				<>
					<Button onClick={handleCloseDialog}>Tutup</Button>
					<Button variant="contained" onClick={handleChangeTodos}>
						Ubah
					</Button>
				</>
			}
		>
			<InputWidget data={data} setData={setData} />
		</Modal>
	);
}
