import React, { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { PopupWithForm } from "../PopupWithForm/PopupWithForm";
import { useForm } from "react-hook-form";
import "./PopUpLogin.css";

export function PopUpLogin(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const email = watch("email");
  const password = watch("password");

  function handleSuccessLogin(event) {
    event.preventDefault();
    if ((email === "admin@test.com") & (password === "test1234")) {
      props.handleLoginSuccess();
    }
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      title="Sign In"
      onCloseClick={props.onCloseClick}
      onChangeClick={props.onChangeClick}
      link_text={"Or "}
      link_rederect_text="Sign Up"
    >
      <form onSubmit={handleSuccessLogin}>
        <p className="popuplogin__label">Email</p>
        <input
          className="popuplogin__input"
          type="text"
          placeholder="Email"
          {...register("email", {
            required: "Email Is Requird",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              message: "Invalid email address",
            },
          })}
        />
        <p className="popuplogin__input-error">{errors.email?.message}</p>

        <p className="popuplogin__label">Password</p>
        <input
          className="popuplogin__input"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password Is Requird",
            minLength: { value: 8, message: "Minimum lengh 8" },
          })}
        />
        <p className="popuplogin__input-error">{errors.password?.message}</p>

        <button
          className="popupwithform__button"
          type="submit"
          disabled={!formState.isValid}
        >
          Sign In
        </button>
      </form>
    </PopupWithForm>
  );
}
