import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h3>Welcome page</h3>
      <Route path="/welcome/:id">
        <p>Hello team!!</p>
      </Route>
    </div>
  );
};

export default Welcome;
