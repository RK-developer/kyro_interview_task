import { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { KeyboardArrowRight } from "@emotion-icons/material/KeyboardArrowRight";
import {
    FormValueForEdit,
    FormValueForSignin,
    FormValueForSignup,
    FieldType,
} from "../models/form-model";

const CustomForm = (props: any) => {
    const {
        formStateData = {},
        formGridColumnType = 1,
        formHeader,
        formClassName="",
        formStyle={},
        onSubmit = (event:any, formValues:any) => {},
        submitBtnText = "Sumbit",
        submitBtnStyle = {},
        submitBtnClassName = "",
        sx={}

    } = props;
    const [formValues, setFormValues] = useState<
        FormValueForEdit | FormValueForSignin | FormValueForSignup
    >(formStateData);
    const onChangeHandler = (event: any) => {
        debugger;
        const { value, name } = event.target;
        const key = name as string;
        let error = false;
        if (!value) {
            error = true;
        }

        setFormValues(
            (
                state:
                    | FormValueForEdit
                    | FormValueForSignin
                    | FormValueForSignup
            ) => ({
                ...state,
                [name]: {
                    ...state[key as keyof typeof state],
                    value,
                    error,
                },
            })
        );
        console.log(`${name}: ${value}`);
    };

    const profileOnSubmitHandler = (event: any) => {
        debugger;
        event.preventDefault();
        function constructFormValues() {
            let finalFormValue = {}
            if(isRequiredInputFieldsAreValid) {
                return false;
            }
            Object.keys(formValues).forEach((value:string, index, arr:any) => {
                const key = value as string;
                finalFormValue = {
                    ...finalFormValue,
                    [key]:formValues[key]?.value
                }
            });
            return finalFormValue;
        }
        onSubmit(event, constructFormValues());
    };

    const isRequiredInputFieldsAreValid = useMemo(() => {
        const formFieldName = Object.keys(formValues);
        let isDisabledFinalValue = true;
        for (let i = 0; i < formFieldName.length; i++) {
            const inputElement =
                formValues[formFieldName[i] as keyof typeof formValues];
            if (
                formFieldName[i] !== "location" &&
                (inputElement.value === "" ||
                    inputElement.error ||
                    inputElement?.errorEmailType)
            ) {
                isDisabledFinalValue = true;
                break;
            } else {
                isDisabledFinalValue = false;
            }
        }
        return isDisabledFinalValue;
    }, [formValues]);
    return (
        <>
            {formStateData && Object.keys(formStateData).length > 0 ? (
                <Box
                    component="form"
                    noValidate
                    onSubmit={profileOnSubmitHandler}
                    autoComplete="off"
                    className={formClassName}
                    sx={{
                        width: "80%",
                        marginTop: "35px",
                        boxShadow: "2px 3px 14px -1px #e5cfcfee",
                        flexFlow: "column",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        ...sx
                    }}
                    style={{ padding: "30px", height: "calc(100vh - 228px)",...formStyle }}
                >
                    {formHeader && <Box component="div" sx={formHeader?.sx && {...formHeader.sx}}>{formHeader?.title}</Box>}
                    <Grid container spacing={2}>
                        {Object.keys(formValues).map((fieldName) => {
                            const fieldNameObj =
                                formValues[
                                    fieldName as keyof typeof formValues
                                ];
                            return (
                                <Grid
                                    item
                                    xs={formGridColumnType === 1 ? 12 : 6}
                                    key={`${fieldName}_profile_form`}
                                >
                                    <TextField
                                        label={fieldNameObj.label}
                                        name={fieldName}
                                        variant="outlined"
                                        fullWidth
                                        required
                                        error={fieldNameObj.error}
                                        helperText={
                                            fieldNameObj.error &&
                                            fieldNameObj.errorMessage
                                        }
                                        size="small"
                                        value={fieldNameObj.value}
                                        onChange={onChangeHandler}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                    <Box>
                        <Button
                            type="submit"
                            variant="outlined"
                            color="primary"
                            endIcon={<KeyboardArrowRight />}
                            disabled={isRequiredInputFieldsAreValid}
                            style={{...submitBtnStyle}}
                            className={submitBtnClassName}
                        >
                            {submitBtnText}
                        </Button>
                    </Box>
                </Box>
            ) : (
                <div>
                    Please pass correct form data value or formData props might
                    be empty
                </div>
            )}
        </>
    );
};

export default CustomForm;
