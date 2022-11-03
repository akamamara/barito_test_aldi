import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Divider,
} from "@mui/material";
import React from "react";

export default function Modal({ title, state, onClose, actions, children }) {
	return (
		<Dialog
			open={state}
			onClose={onClose}
			maxWidth="sm"
			PaperProps={{ sx: { width: "100%" } }}
		>
			<DialogTitle>{title}</DialogTitle>
			<Divider />
			<DialogContent sx={{ pt: 1.75, pb: 0 }}>{children}</DialogContent>
			{actions ? (
				<>
					<Divider sx={{ mt: 3.25, mb: 2.5 }} />
					<DialogActions sx={{ pt: 0, pb: 2, px: 3 }}>{actions}</DialogActions>
				</>
			) : null}
		</Dialog>
	);
}
