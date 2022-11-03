import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "./Modal";
import InputWidget from "./InputWidget";
import { handleDialogAddTodo } from "../redux/actions/dialogActions";
import { addTodo } from "../redux/actions/todosActions";

const initialState = {
	nama: "",
	kategori: "",
	deskripsi: "",
};

export default function AddModal() {
	const [data, setData] = useState(initialState);
	const dispatch = useDispatch();
	const openDialog = useSelector((state) => state.dialog.add);

	const handleCloseDialog = () => dispatch(handleDialogAddTodo(false));
	const handleAddTodos = () => {
		dispatch(addTodo(data));
		setData(initialState);
		handleCloseDialog();
	};

	return (
		<Modal
			title="Tambahkan Task"
			state={openDialog}
			onClose={handleCloseDialog}
			actions={
				<>
					<Button onClick={handleCloseDialog}>Tutup</Button>
					<Button variant="contained" onClick={handleAddTodos}>
						Tambah
					</Button>
				</>
			}
		>
			<InputWidget data={data} setData={setData} />
		</Modal>
	);
}
