import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/Input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/services/apiBlog";
import { toast } from "react-toastify";
import SmallSpinner from "@/ui_components/SmallSpinner";

const SignupPage = () => {
  const { register, handleSubmit, formState, reset, watch } = useForm();
  const { errors } = formState;
  const password = watch("password");

  const mutation = useMutation({
    mutationFn: (data) => registerUser(data),
    onSuccess: () => {
      toast.success("Signup Successfully!..");
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmit(data) {
    mutation.mutate(data);
  }

  return (
    <div>
      <form
        className="md:px-16 px-8 py-6 flex flex-col mx-auto my-9 items-center gap-4 w-fit rounded-lg bg-[#FFFFFF] shadow-xl dark:text-white dark:bg-[#141624]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2 justify-center items-center mb-2">
          <h3 className="font-semibold text-2xl">SignUp Form</h3>
          <p>Create your account to get started!</p>
        </div>

        <div>
          <Label htmlFor="username" className="dark:text-[97989F]">
            Username
          </Label>
          <Input
            type="text"
            id="username"
            // placeholder="Ender username"
            className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 5,
                message: "Username should be atleast 5 characters",
              },
            })}
          />
          {errors?.username?.message && (
            <small className="text-red-700">{errors.username.message}</small>
          )}
        </div>

        <div>
          <Label htmlFor="first_name">First name</Label>
          <Input
            type="text"
            id="first_name"
            // placeholder="First name"
            className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
            {...register("first_name", {
              required: "firstname is required",
              minLength: {
                value: 5,
                message: "firstname should be atleast 5 characters",
              },
            })}
          />
          {errors?.first_name?.message && (
            <small className="text-red-700">{errors.first_name.message}</small>
          )}
        </div>

        <div>
          <Label htmlFor="last_name">Last name</Label>
          <Input
            type="text"
            id="last_name"
            // placeholder="Last name"
            className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
            {...register("last_name", {
              required: "lastname is required",
              minLength: {
                value: 5,
                message: "lastname should be atleast 5 characters",
              },
            })}
          />
          {errors?.last_name?.message && (
            <small className="text-red-700">{errors.last_name.message}</small>
          )}
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            // placeholder="password"
            className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 6,
                message: "password should be atleast 6 characters",
              },
            })}
          />
          {errors?.password?.message && (
            <small className="text-red-700">{errors.password.message}</small>
          )}
        </div>

        <div>
          <Label htmlFor="confirm_password">Confirm Password</Label>
          <Input
            type="password"
            id="confirmPassword"
            // placeholder="Confirm password"
            className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
            {...register("confirm_password", {
              required: "confirm password is required",
              // minLength: {
              //   value: 6,
              //   message: "confirm password should be atleast 6 characters",
              // },
              validate: (value) =>
                value === password || "Password do not match",
            })}
          />
          {errors?.confirm_password?.message && (
            <small className="text-red-700">
              {errors.confirm_password.message}
            </small>
          )}
        </div>

        <div className="w-full flex items-center justify-center flex-col my-4">
          <button className="bg-[#4B6BFB] text-white w-full py-3 px-2 rounded-md flex items-center justify-center gap-2 cursor-pointer">
            {mutation.isPending ? (
              <>
                <SmallSpinner />
                <small className="text-[16px]">Creating user!..</small>{" "}
              </>
            ) : (
              <small className="text-[16px]">Signup</small>
            )}
          </button>
          <p className="text-[14px] pt-3">
            Already have an account? <Link to="/signin">Signin</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
