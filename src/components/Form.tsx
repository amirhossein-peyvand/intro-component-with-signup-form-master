import "../sass/Form.scss";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import errorIcon from "../assets/icon-error.svg";

const schema = z.object({
  firstName: z
    .string({ required_error: "First Name cannot be empty" })
    .min(3, { message: "First Name must have at least 5 characters" })
    .max(20, { message: "First Name must have at most 30 characters" })
    .regex(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/, {
      message: "Invalid First Name",
    }),
  lastName: z
    .string({ required_error: "Last Name cannot be empty" })
    .min(3, { message: "Last Name must have at least 5 characters" })
    .max(20, { message: "Last Name must have at most 20 characters" })
    .regex(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/, {
      message: "Invalid Last Name",
    }),
  email: z
    .string({ required_error: "Email Address cannot be empty" })
    .min(9, { message: "Email must at least have 9 characters" })
    .max(45, { message: "Email must at most have 45 characters" })
    .regex(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, {
      message: "Looks like this is not an email",
    }),
  password: z
    .string({ required_error: "Password can not be empty" })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
      message: "Invalid password",
    }),
});
type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (event: FieldValues) => console.log(event);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <section className="formGroup">
        <div>
          <input
            {...register("firstName")}
            type="text"
            placeholder="First Name"
          />
          {errors.firstName && (
            <img className="err" src={errorIcon} alt="errorIcon" />
          )}
        </div>
        <span className="errMessage">{errors.firstName?.message}</span>
      </section>
      <section className="formGroup">
        <div>
          <input
            {...register("lastName")}
            type="text"
            placeholder="Last Name"
          />
          {errors.lastName && (
            <img className="err" src={errorIcon} alt="errorIcon" />
          )}
        </div>
        <span className="errMessage">{errors.lastName?.message}</span>
      </section>
      <section className="formGroup">
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email Address"
          />
          {errors.email && (
            <img className="err" src={errorIcon} alt="errorIcon" />
          )}
        </div>
        <span className="errMessage">{errors.email?.message}</span>
      </section>
      <section className="formGroup">
        <div>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <img className="err" src={errorIcon} alt="errorIcon" />
          )}
        </div>
        <span className="errMessage">{errors.password?.message}</span>
      </section>
      <button type="submit" className="submitBtn">
        Claim your free trial
      </button>
      <p>
        By clicking the button, you are agreeing to our{" "}
        <span>Terms and Services</span>
      </p>
    </form>
  );
};

export default Form;
