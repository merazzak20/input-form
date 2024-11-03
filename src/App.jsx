import "./App.css";
import GrandPa from "./components/GrandPa/GrandPa";
import HookForm from "./components/HookForm/HookForm";
import RefForm from "./components/RefForm/RefForm";
import ReUseableForm from "./components/ReUseableForm/ReUseableForm";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import StatefulForm from "./components/StatefulForm/StatefulForm";

function App() {
  // const handleLoginSubmit = (data) => {
  //   console.log("Login data", data);
  // };

  // const handleUpdateSubmit = (data) => {
  //   console.log("Update data", data);
  // };
  return (
    <>
      <h1>Form Master</h1>
      <GrandPa></GrandPa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReUseableForm formTitle={"Login Page"} handleSubmit={handleLoginSubmit}>
        <h2>Login Form</h2>
        <p>Please Log in</p>
      </ReUseableForm>
      <ReUseableForm
        formTitle={"Update Profilr"}
        submitBtn={"Update"}
        handleSubmit={handleUpdateSubmit}
      >
        <h2>Update Form</h2>
        <p>Please Update Your Profile</p>
      </ReUseableForm> */}
    </>
  );
}

export default App;
