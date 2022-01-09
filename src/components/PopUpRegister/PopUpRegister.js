import React, { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { PopupWithForm } from "../PopupWithForm/PopupWithForm";
import { useForm } from "react-hook-form";
import "./PopUpRegister.css";

export function PopUpRegister(props) {
  const [isOpen, setIsOpen] = useState(props.isOpen);

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    props.handleRegisterSuccess();
    setIsOpen(false);
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Sign up"
      onCloseClick={props.onCloseClick}
      onChangeClick={props.onChangeClick}
      link_text={"Or "}
      link_rederect_text="Sign In"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="popupregistter__label">Email</p>
        <input
          className="popupregistter__input"
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
        <p className="popupregistter__input-error">{errors.email?.message}</p>

        <p className="popupregistter__label">Password</p>
        <input
          className="popupregistter__input"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password Is Requird",
            minLength: { value: 8, message: "Minimum lengh 8" },
          })}
        />
        <p className="popupregistter__input-error">
          {errors.password?.message}
        </p>

        <p className="popupregistter__label">Username</p>
        <input
          className="popupregistter__input"
          type="text"
          placeholder="Username"
          {...register("username", {
            required: "Username Is Requird",
            minLength: { value: 3, message: "Minimum lengh 3" },
            pattern: {
              value: /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/,
              message: "Invalid UserName address",
            },
          })}
        />
        <p className="popupregistter__input-error">
          {errors.username?.message}
        </p>

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
