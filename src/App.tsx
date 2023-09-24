import { useContext } from "react";
import Navbar from "./components/navbar/Navbar.component";
import Home from "./pages/home/Home.page";
import { Route, Routes } from "react-router-dom";
import Workspaces from "./pages/workspaces/Workspaces.page";
import AddWorkspace from "./pages/workspaces/AddWorkspace.page";
import Tasks from "./pages/tasks/tasks.page";
import AddTask from "./pages/tasks/AddTask.page";
import Notess from "./pages/notess/Notess.page";
import AddNotes from "./pages/notess/AddNotes.page";
import { Navigate } from "react-router-dom";
import { LoginComponent } from "./components/LoginComponent/LoginComponent";
import { SignUpComponent } from "./components/SignUpComponent/SignUpComponent";
// import { ResetPassword } from "./components/ResetPassword/ResetPassword";
import { Loader } from "./components/Loader/Loader";

export const baseUrl = "http://localhost:4000";

const App = () => {
  const AuthRoute = ({ children }: any) => {
    if (!localStorage.getItem("authToken")) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const AuthAdminRoute = ({ children }: any) => {
    if (
      !localStorage.getItem("authToken") &&
      localStorage.getItem("usertype") !== "Admin"
    ) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className="app">
      <Navbar />
      <div className="wrapper">
        <Loader />
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <Home />
              </AuthRoute>
            }
          />
          <Route path="/workspaces">
            <Route
              index
              element={
                <AuthRoute>
                  <Workspaces />
                </AuthRoute>
              }
            />
            <Route
              path="add"
              element={
                <AuthAdminRoute>
                  <AddWorkspace />
                </AuthAdminRoute>
              }
            />
          </Route>
          <Route path="/tasks">
            <Route
              index
              element={
                <AuthRoute>
                  <Tasks />
                </AuthRoute>
              }
            />
            <Route
              path="add"
              element={
                <AuthAdminRoute>
                  <AddTask />
                </AuthAdminRoute>
              }
            />
          </Route>
          <Route path="/notes">
            <Route
              index
              element={
                <AuthRoute>
                  <Notess />
                </AuthRoute>
              }
            />
            <Route
              path="add"
              element={
                <AuthAdminRoute>
                  <AddNotes />
                </AuthAdminRoute>
              }
            />
          </Route>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignUpComponent />} />
          {/* <Route path="/reset" element={<ResetPassword />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
