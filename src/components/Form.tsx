import "../sass/Form.scss";

const Form = () => {
  return (
    <form className="form">
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
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
