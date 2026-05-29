import {
  lazy,
  Suspense,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthContext from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import PageLoader from "./components/PageLoader";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Home = lazy(() => import("./pages/Home"));
const Booking = lazy(() => import("./pages/Booking"));
const Summary = lazy(() => import("./pages/Summary"));
const Confirmation = lazy(() => import("./pages/Confirmation"));
const History = lazy(() => import("./pages/History"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem("currentUser");
    return storedUser !== null ? JSON.parse(storedUser) : null;
  });

  const signupUser = (userDetails) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isUserExists = users.some((user) => user.email === userDetails.email);

    if (isUserExists) {
      return { success: false, message: "This email is already registered." };
    }

    const updatedUsers = [...users, userDetails];
    const userToStore = {
      fullName: userDetails.fullName,
      email: userDetails.email,
    };
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(userToStore));
    setCurrentUser(userToStore);
    return { success: true, message: "Signup successful." };
  };

  const loginUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (matchedUser === undefined) {
      return { success: false, message: "Invalid email or password." };
    }

    const userToStore = {
      fullName: matchedUser.fullName,
      email: matchedUser.email,
    };
    localStorage.setItem("currentUser", JSON.stringify(userToStore));
    setCurrentUser(userToStore);
    return { success: true, message: "Login successful." };
  };

  const logoutUser = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  const value = useMemo(
    () => ({ currentUser, signupUser, loginUser, logoutUser }),
    [currentUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const PublicOnlyRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  return currentUser !== null ? <Navigate to="/" replace /> : children;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicOnlyRoute>
              <Login />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicOnlyRoute>
              <Signup />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/booking"
          element={
            <ProtectedRoute>
              <Booking />
            </ProtectedRoute>
          }
        />
        <Route
          path="/summary"
          element={
            <ProtectedRoute>
              <Summary />
            </ProtectedRoute>
          }
        />
        <Route
          path="/confirmation"
          element={
            <ProtectedRoute>
              <Confirmation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </>
);

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer position="top-right" autoClose={2200} hideProgressBar />
    </BrowserRouter>
  </AuthProvider>
);

export default App;
