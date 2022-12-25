import { Children } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

const FormLoader = (props: any) => {
    const { formGridColumnType = 1, elementCount = 3, containerSx={} } = props;
    return (
        <Stack sx={{
            ...containerSx
        }}>
            <Grid container spacing={2} sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    width: "500px",
                    height: "100%",
                    padding: '30px',
                    boxShadow: "0px 0px 8px 3px #efefef",
            }} >
                <Grid item xs={12} sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "30px 0px"}}>
                    <Skeleton
                        variant="rectangular"
                        sx={{ width: "90px", backgroundColor: "#f5f5f5"}}
                        animation="wave"
                        height={30}
                    />
                </Grid>
                {Children.toArray(
                    Array(elementCount)
                        .fill(1)
                        .map((fieldName) => {
                            return (
                                <Grid
                                    item
                                    xs={formGridColumnType === 1 ? 12 : 6}
                                >
                                    <Skeleton
                                        variant="rectangular"
                                        sx={{ width: "100%", backgroundColor: "#f5f5f5" }}
                                        animation="wave"
                                        height={30}
                                    />
                                </Grid>
                            );
                        })
                )}
                <Grid item xs={12} sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "30px 0px", marginTop: "30px"}}>
                    <Skeleton
                        variant="rectangular"
                        sx={{ width: "90px", backgroundColor: "#f5f5f5"}}
                        animation="wave"
                        height={30}
                    />
                </Grid>
            </Grid>
        </Stack>
    );
};

export default FormLoader;
