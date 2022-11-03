import { DangerousTwoTone } from "@mui/icons-material";
import { Button, DialogContentText } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDialogDeleteTodo } from "../redux/actions/dialogActions";
import { deleteTodo } from "../redux/actions/todosActions";
import Modal from "./Modal";

export default function DeleteModal() {
	const dispatch = useDispatch();
	const deleteState = useSelector((state) => state.dialog.delete);

	const handleClose = () => {
		dispatch(
			handleDialogDeleteTodo({
				state: false,
				id: null,
			})
		);
	};
	const handleDelete = () => {
		dispatch(deleteTodo(deleteState.id));
		handleClose();
	};

	return (
		<Modal
			title="Hapus task"
			state={deleteState.state}
			onClose={handleClose}
			actions={
				<>
					<Button onClick={handleClose}>Batal</Button>
					<Button color="error" variant="contained" onClick={handleDelete}>
						Hapus
					</Button>
				</>
			}
		>
			<DangerousTwoTone
				color="error"
				sx={{ fontSize: "5rem", mx: "auto", width: "100%" }}
			/>
			<DialogContentText
				sx={{ mx: "auto", width: "100%", textAlign: "center" }}
			>
				Apakah Anda ingin menghapus task ini?
			</DialogContentText>
		</Modal>
	);
}
