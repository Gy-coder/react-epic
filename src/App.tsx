import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const History = lazy(() => import("./pages/Histroy"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/histroy" component={History} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
