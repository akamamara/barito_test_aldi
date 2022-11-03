import { FilterList } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import {
	AppBar,
	IconButton,
	List,
	ListItemButton,
	Popover,
	Toolbar as MuiToolbar,
	Typography,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDialogAddTodo } from "../redux/actions/dialogActions";
import { setFilterTodo } from "../redux/actions/todosActions";

export default function Toolbar() {
	const dispatch = useDispatch();
	const category = useSelector((state) => state.todos.category);

	const [anchorEl, setAnchorEl] = useState(null);

	const handleFilter = (event) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<AppBar position="sticky" component="header">
			<MuiToolbar>
				<Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
					To Do List
				</Typography>
				<IconButton color="inherit" onClick={handleFilter}>
					<FilterList />
				</IconButton>
				<Popover
					sx={{ minWidth: "8rem" }}
					open={Boolean(anchorEl)}
					anchorEl={anchorEl}
					onClose={() => setAnchorEl(null)}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "right",
					}}
				>
					<List sx={{ width: "100%" }}>
						<>
							<ListItemButton
								sx={{ width: "100%" }}
								onClick={() => dispatch(setFilterTodo("Semua"))}
							>
								Semua
							</ListItemButton>
							{category.map((val) => (
								<ListItemButton
									sx={{ width: "100%" }}
									onClick={() => dispatch(setFilterTodo(val.toString()))}
								>
									{val}
								</ListItemButton>
							))}
						</>
					</List>
				</Popover>
				<IconButton
					color="inherit"
					aria-label="add todo"
					edge="end"
					onClick={() => dispatch(handleDialogAddTodo(true))}
				>
					<AddIcon />
				</IconButton>
			</MuiToolbar>
		</AppBar>
	);
}
