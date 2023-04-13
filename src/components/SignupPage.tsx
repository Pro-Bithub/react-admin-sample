import { useLogin, useNotify, Notification } from 'react-admin';
import { Link } from 'react-router-dom';
import '../LoginPage.css'; // import CSS file
import { Form ,TextInput} from 'react-admin';
import { Button, CardContent, CircularProgress } from '@mui/material';
import {
  required,
  useTranslate,
  useSafeSetState
} from 'ra-core';
import { styled } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';
import { FunctionComponent } from 'react';

interface LoginPageProps {
  theme: Theme;
}

const SignUpPage: FunctionComponent<LoginPageProps> = ({ theme }: LoginPageProps)=> {
  // Define the state variables using useState hook
  const login = useLogin();
  const notify = useNotify();
  const translate = useTranslate();
  const [loading, setLoading] = useSafeSetState(false);

   // Define the handleSubmit function
   const handleSubmit = (e:any) => {
    const name =  e.name;
    const username =  e.username;
    const password =e.password;
    login({username , password }).catch(() =>
      notify('Invalid email or password')
    );
  };


  // Render the component
  return (
    <div className="wrapper">
      <div className="formcenter">
        <div className="formWrapper">
{/*           <h1 className="title">VisoCall</h1>
          <h2 className="subtitle">Welcome to VisoCall Get Started</h2> */}
          {/* Render the form using the StyledForm component */}
          <StyledForm
            onSubmit={handleSubmit}
            mode="onChange"
            noValidate
          >
            <CardContent className={LoginFormClasses.content}>
              {/* Render the username and password and name fields */}
              <TextInput
                autoFocus
                source="name"
                label={translate('ra.auth.name')}
                autoComplete="name"
                validate={required()}
                fullWidth
              />

              <TextInput
                autoFocus
                source="username"
                label={translate('ra.auth.username')}
                autoComplete="username"
                validate={required()}
                fullWidth
              />
              <TextInput
                source="password"
                label={translate('ra.auth.password')}
                type="password"
                autoComplete="current-password"
                validate={required()}
                fullWidth
              />
              {/* Render the submit button */}
              <Button
                variant="contained"
                type="submit"
                color="primary"
                disabled={loading}
                fullWidth
                className={LoginFormClasses.button}
                style={{ backgroundColor: '#3b33aa' }}
              >
                {loading ? (
                  <CircularProgress
                    className={LoginFormClasses.icon}
                    size={19}
                    thickness={3}
                  />
                ) : (
                  translate('ra.auth.sign_in')
                )}
              </Button>
            </CardContent>
          </StyledForm>
          {/* Render the "Sign up" link */}
          
        </div>
      </div>
      <div className="background" />
    </div>
  );
};

// Export the LoginPage component as the default export
export default SignUpPage;

// Define the StyledForm component using the styled function from @mui/material/styles
const PREFIX = 'RaLoginForm';
const StyledForm = styled(Form, {
  name: PREFIX,
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  [`& .${LoginFormClasses.content}`]: {
      width: 400,
  },
  [`& .${LoginFormClasses.button}`]: {
      marginTop: theme.spacing(2),
  },
  [`& .${LoginFormClasses.icon}`]: {
      margin: theme.spacing(0.3),
  },
}));

// Define an object with CSS class names for the form elements
export const LoginFormClasses = {
  content: `${PREFIX}-content`,
 

  button: `${PREFIX}-button`,
  icon: `${PREFIX}-icon`,
};

interface FormData {
  username: string;
  password: string;
}
