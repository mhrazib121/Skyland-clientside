import { Github, Google } from "@/assets/Icon";
import styles from "@/styles/Login.module.css";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";

const Login = () => {
  const { data: session } = useSession();

  console.log("login", session);

  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>
          LOGIN Signed in as {session?.user?.email} <br />
        </h3>
        <div className={styles.social_icons}>
          {/* <GoogleOutlined /> */}
          <Google
            onClick={() =>
              signIn("google", {
                callbackUrl: process.env.BASE_URL,
              })
            }
          />
          <Github
            onClick={() =>
              signIn("github", {
                callbackUrl: process.env.BASE_URL,
              })
            }
          />
        </div>
        <hr />
        {/* <form>
          <label htmlFor="">Your Email</label>
          <input type="email" />
          <label htmlFor="">Your Password</label>
          <input type="password" />
          <Button>Login</Button>
        </form> */}
      </div>
    </div>
  );
};

export default Login;
