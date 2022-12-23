import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

const PopupMessage = (props: any) => {
    const {
        alertType = "error",
        alertTitle = "Error",
        errorMessage = (
            <>
                This is an error alert — <strong>check it out!</strong>
            </>
        ),
        onClose = () => {},
    } = props;
    return (
        <Stack>
            <Alert
                onClose={onClose}
                severity={alertType}
                sx={{
                    position: "fixed",
                    top: "100px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "526px",
                    boxShadow: "1px 1px 8px 1px #ecc8c8",
                }}
            >
                <AlertTitle>{alertTitle}</AlertTitle>
                {errorMessage}
            </Alert>
        </Stack>
    );
};

export default PopupMessage;
