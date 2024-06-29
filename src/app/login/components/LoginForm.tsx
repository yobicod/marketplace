"use client";
import { login } from "@/app/api-caller/login";
import { FORM_ERRORS } from "@/app/const/form";
import { TOAST_STATUS } from "@/app/const/toast";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [errorUsername, setErrorUsername] = useState<boolean>(false);
  const [errorPassword, setErrorPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (username) {
      setErrorUsername(false);
    }

    if (password) {
      setErrorPassword(false);
    }
  }, [username, password]);
  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleSubmitLogin = async () => {
    try {
      if (username === "" || password === "") {
        if (username === "") {
          setErrorUsername(true);
        }

        if (password === "") {
          setErrorPassword(true);
        }
      } else {
        toast.loading(TOAST_STATUS.pending);
        const { data: loginResponse } = await login(username, password);
        if (loginResponse) {
          toast.dismiss();
          toast.success(TOAST_STATUS.success);
          router.push("/");
        }
        console.log("🚀 ~ handleSubmitLogin ~ result:", loginResponse);
      }
    } catch (err) {
      console.log(err);
      if (err instanceof Error && (err as any).response) {
        const axiosError = err as any;
        if (axiosError.response.status === 404) {
          toast.dismiss();
          toast.error(TOAST_STATUS.loginNotFound);
          return;
        }
      } else {
        // Handle other errors
        toast.dismiss();
        toast.error(TOAST_STATUS.error);
      }
    }
  };

  return (
    <div className="w-full  p-4 mx-auto gap-4 flex flex-col items-center justify-center rounded-xl">
      <div className="w-full md:w-3/5">
        <p className="text-sm md:text-lg lg:text-3xl font-bold text-center mt-8">
          ลงชื่อเข้าใช้
        </p>
        <div className="w-full mx-auto mt-6">
          <p className="block mb-3 text-xs md:text-lg lg:text-xl">ชื่อผู้ใช้</p>
          <label className="input input-bordered input-sm md:input-md lg:input-lg flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow p-2"
              placeholder="ชื่อผู้ใช้"
              onChange={handleUsernameChange}
            />
          </label>
          {errorUsername && (
            <p className="block mb-3 text-xs md:text-sm lg:text-md text-error mt-3">
              {FORM_ERRORS.empty}
            </p>
          )}
        </div>
        <div className="w-full mx-auto mt-4">
          <p className="block mb-3 text-xs md:text-lg lg:text-xl">รหัสผ่าน</p>
          <label className="input input-bordered input-sm md:input-md lg:input-lg flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 1 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow p-2"
              placeholder="รหัสผ่าน"
              onChange={handlePasswordChange}
            />
          </label>
          {errorPassword && (
            <p className="block mb-3 text-xs md:text-sm lg:text-md text-error mt-3">
              {FORM_ERRORS.empty}
            </p>
          )}
        </div>
        <div className="w-full mx-auto mt-6 flex justify-end">
          <p className="text-xs md:text-md lg:text-base">ลืมรหัสผ่าน ?</p>
        </div>
        <div className="w-full mx-auto mt-6">
          <button
            className="btn btn-primary w-full text-white lg:text-xl rounded-lg btn-sm md:btn-md lg:btn-lg"
            onClick={handleSubmitLogin}
          >
            ลงชื่อเข้าใช้
          </button>
        </div>
        <p className="w-full mx-auto mt-4 text-center ">สมัครบัญชี</p>
      </div>
    </div>
  );
}

export default LoginForm;
