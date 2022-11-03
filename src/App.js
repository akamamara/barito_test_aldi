import ThemeProvider from "@mui/system/ThemeProvider";
import Container from "@mui/material/Container";

import "./App.css";
import Toolbar from "./widgets/Toolbar";
import theme from "./constant/themes";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AddModal from "./widgets/AddModal";
import DetailTodoModal from "./widgets/DetailTodoModal";
import {
	FormControl,
	InputAdornment,
	OutlinedInput,
	Typography,
} from "@mui/material";
import EditModal from "./widgets/EditModal";
import DeleteModal from "./widgets/DeleteModal";
import { Search } from "@mui/icons-material";
import { Stack } from "@mui/system";

function App() {
	const todos = useSelector((state) => state.todos);
	const modalState = useSelector((state) => state.dialog);
	const filterState = useSelector((state) => state.todos.filter);

	const [keyword, setKeyword] = useState("");
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(todos.data);
	}, [todos]);

	useEffect(() => {
		setTimeout(() => {
			if (keyword.length)
				setData((prev) =>
					prev.filter((val) =>
						val.nama.toLowerCase().includes(keyword.toLowerCase())
					)
				);
			else setData(todos.data);
		}, [120]);
	}, [keyword]);

	useEffect(() => {
		if (filterState !== "Semua")
			setData((prev) => prev.filter((val) => val.kategori === filterState));
		else setData(todos.data);
	}, [filterState]);

	return (
		<ThemeProvider theme={theme}>
			<Toolbar />
			{modalState.add ? <AddModal /> : null}
			{modalState.details.state ? <DetailTodoModal /> : null}
			{modalState.edit.state ? <EditModal /> : null}
			{modalState.delete.state ? <DeleteModal /> : null}
			<Container sx={{ py: 2 }}>
				<FormControl variant="standard" fullWidth sx={{ mb: 2 }}>
					<OutlinedInput
						id="search-todo"
						startAdornment={
							<InputAdornment position="start">
								<Search />
							</InputAdornment>
						}
						value={keyword}
						onChange={(e) => setKeyword(e.target.value)}
						placeholder="Cari task"
						size="small"
					/>
				</FormControl>
				<Stack direction="row" alignItems="center" spacing={2}>
					<Typography variant="h5" sx={{ flexGrow: 1 }}>
						Ongoing
					</Typography>
				</Stack>
				<TodoList list={data.filter((val) => val.done === false)} />
				<Typography variant="h5">Done</Typography>
				<TodoList list={data.filter((val) => val.done)} />
			</Container>
		</ThemeProvider>
	);
}

export default App;
