const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
