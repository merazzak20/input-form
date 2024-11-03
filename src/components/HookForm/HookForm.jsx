import useInputState from "../../hooks/useInputState";

const HookForm = () => {
  //   const [name, handleChange] = useInputState("ab");
  const emailState = useInputState("dvbhjbvh@sdhvbjh.com");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailState.value);
  };
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={handleChange} type="text" name="name" /> */}
        <br />
        <input {...emailState} type="email" name="email" />
        <br />
        <input type="password" name="" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
