import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

import { useDispatch } from "react-redux";
import { completeTodo } from "../redux/actions/todosActions";
import { ButtonBase, IconButton, ListItem } from "@mui/material";
import {
	handleDialogDeleteTodo,
	handleDialogDetailsTodo,
	handleDialogEditTodo,
} from "../redux/actions/dialogActions";
import { Stack } from "@mui/system";
import { DeleteForever, Edit } from "@mui/icons-material";

export default function Todo({ id, status, children }) {
	const dispatch = useDispatch();

	return (
		<ListItem disablePadding>
			<Stack direction="row" alignItems="center" sx={{ width: "100%" }}>
				<Checkbox
					checked={status}
					onChange={(e) => dispatch(completeTodo(id))}
				/>
				<ButtonBase sx={{ width: "100%", borderRadius: 1 }}>
					<ListItem
						onClick={() =>
							dispatch(
								handleDialogDetailsTodo({
									state: true,
									id: id,
								})
							)
						}
					>
						<Typography
							variant="body1"
							sx={status ? { textDecoration: "line-through" } : null}
						>
							{children}
						</Typography>
					</ListItem>
				</ButtonBase>
				<Stack direction="row">
					<IconButton
						onClick={() =>
							dispatch(
								handleDialogEditTodo({
									state: true,
									id: id,
								})
							)
						}
					>
						<Edit />
					</IconButton>
					<IconButton
						onClick={() =>
							dispatch(
								handleDialogDeleteTodo({
									state: true,
									id: id,
								})
							)
						}
					>
						<DeleteForever />
					</IconButton>
				</Stack>
			</Stack>
		</ListItem>
	);
}
