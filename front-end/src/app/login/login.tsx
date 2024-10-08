import Image from "next/image";
import Signup from "@/components/signComonents/signup";
import { useRouter } from "next/navigation";
import Signin from "@/components/signComonents/signin";
import { useState } from "react";
import "../globals.css";

const Login = () => {
  const router = useRouter();
  const [insignin, setsign] = useState(true);

  return (
    <div className="main_1">
      <div className="Container">
        <div className="row_0">
        <div className="flex items-center gap-2 ContainerLogo">
            <Image
              className="max-w-[50px] max-h-[50px]"
              src={"./Vector.svg"}
              alt="logo"
              width={50}
              height={50}
              priority={true}
              style={{
                height: "auto",
                width: "auto",
                maxWidth: "100%",
              }}
            />
            <h1 className="logoName">
              P<span>O</span>NGy
            </h1>
          </div>
          <div id="loginBtn">
            <a
              href="#"
              className={`${insignin ? "inactive_sing" : "active_sing"}`}
              onClick={() => {
                setsign(false);
              }}
            >
              Sign up
            </a>

            <a
              href="#"
              className={`${insignin ? "active_sing" : "inactive_sing"}`}
              onClick={() => {
                setsign(true);
              }}
            >
              Login
            </a>
            <div>{insignin ? <Signin /> : <Signup />}</div>
          </div>
        </div>
        <div className="row1">
          <div id="div-row1">
            <div
              className="btnAuth"
              onClick={() => {
                router.push(process.env.NEST_API + "/api/auth/intra");
              }}
            >
              <Image
                src="./IntraLogo.svg"
                alt=""
                width={"100"}
                height={"100"}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  width: "auto",
                }}
              />
              <span>Intra</span>
            </div>
            <div
              className="btnAuth"
              onClick={() => {
                router.push(process.env.NEST_API + "/api/auth/google");
              }}
            >
              <Image
                src="./GoogleLogo.svg"
                alt=""
                width={"100"}
                height={"100"}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  width: "auto",
                }}
              />
              <span>Google</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
