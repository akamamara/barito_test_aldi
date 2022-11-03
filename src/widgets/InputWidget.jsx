import {
	FormControl,
	FormGroup,
	InputLabel,
	OutlinedInput,
} from "@mui/material";

export default function InputWidget({ data, setData }) {
	const field = ["Nama", "Kategori", "Deskripsi"];

	return (
		<FormGroup>
			{field.map((item) => (
				<FormControl key={item} margin="dense">
					<InputLabel htmlFor={item}>{item}</InputLabel>
					<OutlinedInput
						margin="dense"
						multiline={item === "Deskripsi"}
						rows={item === "Deskripsi" ? 6 : null}
						id={item}
						value={data[item.toLowerCase()]}
						onChange={(e) => {
							let temp = {};
							temp[item.toLowerCase()] = e.target.value;
							setData({ ...data, ...temp });
						}}
						label={item}
					/>
				</FormControl>
			))}
		</FormGroup>
	);
}
