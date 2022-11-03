import { DialogContentText, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handleDialogDetailsTodo } from "../redux/actions/dialogActions";
import Modal from "./Modal";

export default function DetailTodoModal() {
	const dispatch = useDispatch();

	const detailState = useSelector((state) => state.dialog.details);
	const todo = useSelector((state) => state.todos.data);
	const data = todo.filter((val) => val.id === detailState.id)[0];

	const handleClose = () => {
		dispatch(
			handleDialogDetailsTodo({
				state: false,
				id: null,
			})
		);
	};

	return (
		<Modal
			title={"Detail Task"}
			state={detailState.state}
			onClose={handleClose}
		>
			<Typography variant="h5" element="h1" sx={{ overflowWrap: "break-word" }}>
				{data.nama}
			</Typography>
			<Typography
				variant="caption"
				sx={{ opacity: 0.7, overflowWrap: "break-word" }}
			>
				<b>Kategori:</b> {data.kategori}
			</Typography>
			<DialogContentText sx={{ mt: 3, pb: 3.5 }}>
				<Typography
					variant="body1"
					element="p"
					sx={{ overflowWrap: "break-word" }}
				>
					{data.deskripsi}
				</Typography>
			</DialogContentText>
		</Modal>
	);
}
