import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';

const SpinLoader = (props:any) => {
    return(
        <Box 
        sx={{
            position: "fixed",
            width: '100%',
            height: '100%',
            top:"0px",
            left:"0px",
            zIndex: 900,
            backgroundColor: "rgba(222,222,222,0.2)"
        }}
        >
            <CircularProgress color="inherit" sx={{
                position: "fixed",
                top:"50%",
                left:"50%",
                zIndex: 901,
                transform: "translate(-50%, -50%)",
                color: "#d0361a"
            }} />
        </Box>
    )
}

export default SpinLoader;