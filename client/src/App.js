import React, { lazy, Suspense } from "react"
import { Switch, Route } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from './helpers/AuthRoute'
import Header from "./components/Header"
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from "./contexts/AuthContext"
import Footer from "./components/footer";



const Home = (lazy(() => (import('./pages/HomePage/Home'))));
const Blog = (lazy(() => (import('./pages/Blog'))));
const SinglePost = (lazy(() => (import('./pages/SinglePost'))));
const Dashboard = (lazy(() => (import('./pages/Dashboard'))));
const Login = (lazy(() => (import('./pages/Login'))));
const Register = (lazy(() => (import('./pages/Register'))));
const AddPost = (lazy(() => (import('./pages/AddPost'))));
const User = (lazy(() => (import('./pages/User'))));
const Services = (lazy(() => (import('./pages/Services/Services'))));

const Loadings = () => (
  <div className="container text-center">
    <div className="spinner-border" role="status">
      <span className="sr-only">Chargement...</span>
    </div>
  </div>
)

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Suspense fallback={<Loadings />} >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts/:id" exact component={SinglePost} />
            <PublicRoute path="/signup" exact component={Register}></PublicRoute>
            <PublicRoute path="/signin" exact component={Login}></PublicRoute>
              <Route path="/blog" exact component={Blog}></Route>
              <Route path="/services" exact component={Services}></Route>
            <PrivateRoute path="/dashboard" exact component={Dashboard}></PrivateRoute>
            <PrivateRoute path="/add" exact component={AddPost}></PrivateRoute>
            <PrivateRoute path="/user" exact component={User}></PrivateRoute>

          </Switch>
        </Suspense>
      </AuthProvider>
      <ToastContainer />
      <Footer/>

    </>
  );
}

export default App;
