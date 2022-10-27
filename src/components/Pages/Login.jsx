import {
  Authenticator,
  Flex,
  Grid,
  Image,
  useTheme,
  View,
  Text,
  Link,
  Heading,
  useAuthenticator
} from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import "./login.css"
import {ReactComponent as BannerArt } from '../../assets/painting.svg';


function Header() {
  return (
    <Flex justifyContent="center">
      
    </Flex>
  );
}

function Footer() {
  const { tokens } = useTheme();

  return (
    <Flex justifyContent="center" padding={tokens.space.medium}>
      <Text>&copy; AR²T All Rights Reserved</Text>
    </Flex>
  );
}

function SignInFooter() {
  const { toResetPassword } = useAuthenticator();
  const { tokens } = useTheme();

  return (
    <Flex justifyContent="center" padding={`0 0 ${tokens.space.medium}`}>
      <Link onClick={toResetPassword}>Forgot your password?</Link>
    </Flex>
  );
}

function SignInHeader() {
  const { tokens } = useTheme();

  return (
    <Heading level={4} padding={`${tokens.space.xl} ${tokens.space.xl} 0`}>
      Welcome back! 
    </Heading>
  );
}

function SignUpHeader() {
  const { tokens } = useTheme();

  return (
    <Heading level={4} padding={`${tokens.space.xl} ${tokens.space.xl} 0`}>
      Create a new account
    </Heading>
  );
}

const components = {
  Header,
  SignIn: {
    Header: SignInHeader,
    Footer: SignInFooter
  },
  SignUp: {
    Header: SignUpHeader,
  },
  Footer
};

export default function Login() { 
  const { tokens } = useTheme();
  const navigate = useNavigate();
  const { authStatus } = useAuthenticator((context) => [context.authStatus ]);


  if (authStatus === "authenticated") {
    navigate("/profile");
  }

  return (
    <div className="">
    <Grid templateColumns={{ base: "1fr 0", medium: "1fr 1fr" }}>
      <Flex className="loginBackground"
        backgroundColor={tokens.colors.background.tertiary}
        justifyContent="center"
      >
        <Authenticator components={components}>
        </Authenticator>
      </Flex>
      <View height="100vh" >
        <BannerArt className="w-full h-full bg-cover" />
      </View>
    </Grid>
    </div>
  );
}
