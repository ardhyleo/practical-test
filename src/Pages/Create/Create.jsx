import React from "react";
import TextField from "@mui/material/TextField";
import styles from "./Create.module.scss";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FilledInput from "@mui/material/FilledInput";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
const Create = () => {
  const [values, setValues] = React.useState({ amount: "" });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const Input = styled("input")({
    display: "none",
  });
  return (
    <>
      <div>
        <h3>Create New Data</h3>
        <div className={styles.filled}>
          <Input accept="image/*" id="contained-button-file" multiple type="file" />
          <Button variant="contained" component="span">
            Upload Image
          </Button>
          <TextField id="filled-basic" label="category" variant="filled" sx={{ margin: "15px 0" }} />
          <TextField id="filled-basic" label="Nama Barang" variant="filled" sx={{ margin: "15px 0" }} />
          <TextField id="filled-basic" label="stok Barang" variant="filled" sx={{ margin: "15px 0" }} />
          <FormControl fullWidth sx={{ margin: "15px 0" }} variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">Harga Barang</InputLabel>
            <FilledInput id="filled-adornment-amount" value={values.amount} onChange={handleChange("amount")} startAdornment={<InputAdornment position="start">Rp</InputAdornment>} />
          </FormControl>
        </div>
        <div>
          <Button variant="contained">Submit</Button>
        </div>
      </div>
    </>
  );
};

export default Create;
