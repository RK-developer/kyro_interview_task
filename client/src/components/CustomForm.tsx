import { useMemo, useRef, useState, Children } from "react";
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
    const nonValidate: any = [
        "location",
        "phoneNumber",
        "alternatePhoneNumber",
    ];
    const submitBtnRef = useRef<any>();
    const {
        formStateData = {},
        formGridColumnType = 1,
        formHeader,
        formClassName = "",
        formStyle = {},
        onSubmit = (event: any, formValues: any) => {},
        submitBtnText = "Sumbit",
        submitBtnStyle = {},
        submitBtnClassName = "",
        formName,
        sx = {},
    } = props;
    const [formValues, setFormValues] = useState<
        FormValueForEdit | FormValueForSignin | FormValueForSignup
    >(formStateData);
    const onChangeHandler = (event: any) => {
        const { value, name } = event.target;
        const key = name as string;
        let error = false;
        let errorEmailType = false;
        const emailIsValidPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim() && !nonValidate.includes(name)) {
            error = true;
        }
        if (name === "email" && !emailIsValidPattern.test(value)) {
            error = false;
            errorEmailType = true;
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
                    value: value.trimStart(),
                    error,
                    errorEmailType,
                },
            })
        );
    };

    const enableOrDisableSubmitBtnUsingRef = (
        refAttr: any,
        isDisabled: boolean
    ) => {
        if (isDisabled) {
            refAttr?.setAttribute("disabled", isDisabled);
            refAttr?.classList.add("Mui-disabled");
        } else {
            refAttr?.removeAttribute("disabled");
            refAttr?.classList.remove("Mui-disabled");
        }
    };

    const profileOnSubmitHandler = (event: any) => {
        event.preventDefault();
        enableOrDisableSubmitBtnUsingRef(
            submitBtnRef?.current?.firstChild,
            true
        );
        function constructFormValues() {
            let finalFormValue = {};
            if (isRequiredInputFieldsAreValid) {
                return false;
            }
            Object.keys(formValues).forEach(
                (value: string, index, arr: any) => {
                    const key = value as string;
                    finalFormValue = {
                        ...finalFormValue,
                        [key]: formValues[key]?.value,
                    };
                }
            );
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
                !nonValidate.includes(formFieldName[i]) &&
                (inputElement.value === "" ||
                    inputElement.error ||
                    inputElement?.errorEmailType)
            ) {
                isDisabledFinalValue = true;
                enableOrDisableSubmitBtnUsingRef(
                    submitBtnRef?.current?.firstChild,
                    true
                );
                break;
            } else {
                isDisabledFinalValue = false;
                enableOrDisableSubmitBtnUsingRef(
                    submitBtnRef?.current?.firstChild,
                    false
                );
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
                        ...sx,
                    }}
                    style={{
                        padding: "30px",
                        height: "calc(100vh - 228px)",
                        ...formStyle,
                    }}
                >
                    {formHeader && (
                        <Box
                            component="div"
                            sx={formHeader?.sx && { ...formHeader.sx }}
                        >
                            {formHeader?.title}
                        </Box>
                    )}
                    <Grid
                        container
                        spacing={2}
                        className="custom-form-container"
                    >
                        {Children.toArray(
                            Object.keys(formValues).map((fieldName) => {
                                const fieldNameObj =
                                    formValues[
                                        fieldName as keyof typeof formValues
                                    ];
                                const typeIp =
                                    fieldName === "password"
                                        ? "password"
                                        : "text";
                                return (
                                    <Grid
                                        item
                                        xs={formGridColumnType === 1 ? 12 : 6}
                                    >
                                        <TextField
                                            label={fieldNameObj.label}
                                            name={fieldName}
                                            variant="outlined"
                                            fullWidth
                                            required={fieldNameObj.error}
                                            error={
                                                fieldNameObj.error ||
                                                (fieldName === "email" &&
                                                    fieldNameObj.errorEmailType)
                                            }
                                            helperText={
                                                (fieldNameObj.error &&
                                                    fieldNameObj.errorMessage) ||
                                                (fieldNameObj.errorEmailType &&
                                                    fieldNameObj.typeErrorMessage)
                                            }
                                            size="small"
                                            value={fieldNameObj.value || ""}
                                            onChange={onChangeHandler}
                                            disabled={
                                                formName === "profile" &&
                                                fieldName === "email"
                                                    ? true
                                                    : false
                                            }
                                            type={typeIp}
                                        />
                                    </Grid>
                                );
                            })
                        )}
                    </Grid>
                    <Box ref={submitBtnRef}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="error"
                            endIcon={<KeyboardArrowRight />}
                            disabled={isRequiredInputFieldsAreValid}
                            style={{ ...submitBtnStyle }}
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
