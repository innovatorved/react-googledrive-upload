import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

export default function Login(props: any) {
  const { setToken } = props;
  const SCOPES = "profile email https://www.googleapis.com/auth/drive";
  const Login: any = useGoogleLogin({
    onSuccess: (data) => {
      if (data.access_token) {
        setToken(data.access_token);
      }
    },
    onError: (err) => {
      console.log(err);
    },
    scope: SCOPES,
  });
  return (
    <button
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Login(e)}
    >
      SignIn To Google
    </button>
  );
}
