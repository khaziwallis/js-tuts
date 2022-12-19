import { useContext } from "react";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';

const Login = () => {
    const { user, login, logout } = useContext(AuthContext);
    const naviage = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const loginHandler = () => {
        login({
            name: 'khazi'
        });
        // Redirect to home page
        naviage('/home', {
            replace: true
        });
    };
    const logoutHandler = () => {
        logout();
    };

    return (
        <Container>
            <div align="center">am from Login Page</div>
            <Box
                component="form"
                align="center"
                onSubmit={handleSubmit(loginHandler)}
            >
                <FormControl
                    margin="normal" 
                    color="primary" 
                    variant="filled" 
                    sx={{ width: '25ch' }}
                    fullWidth
                    onSubmit={handleSubmit(loginHandler)}
                >
                    <TextField sx={{ mt: 5 }} label="User Name" variant="standard" defaultValue="test" type="text" {...register("userName", { required: true })} />
                    {errors.userName && <span>This field is required</span>}
                    <TextField sx={{ mt: 5 }} label="Password" variant="standard" defaultValue="test" type="text" {...register("password", { required: true })} />
                    
                    <Select
                        variant="standard"
                        sx={{ mt: 5 }}
                        defaultValue="other"
                        {...register("gender", { required: true })}
                    >
                        <MenuItem value="female">female</MenuItem>
                        <MenuItem value="male">male</MenuItem>
                        <MenuItem value="other">other</MenuItem>
                    </Select>
                    <Button
                        sx={{ mt: 5 }}
                        variant="contained"
                        color="primary"
                        type="submit"
                        onSubmit={handleSubmit(loginHandler)}
                    >
                        Signin
                    </Button>
                    <div>
                        {errors.password && <span>This field is required</span>}
                    </div>
                </FormControl>
            </Box>
        </Container>
    )
};

export default Login;
