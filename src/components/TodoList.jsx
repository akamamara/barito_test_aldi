import { Divider, List } from "@mui/material";
import React from "react";
import Todo from "./Todo";

export default function TodoList({ list = [] }) {
	const avalaibleTodoList = list.map((item, index) => (
		<>
			<Todo key={item.id} id={item.id} status={item.done}>
				{item.nama}
			</Todo>
			{index !== list.length - 1 ? <Divider sx={{ m: 1 }} /> : null}
		</>
	));

	return <List>{avalaibleTodoList}</List>;
}
