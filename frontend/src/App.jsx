import  routes  from "./app.Routes";
import{ RouterProvider} from "react-router-dom"
function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
