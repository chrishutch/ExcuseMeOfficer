import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Search from "./pages/Search";
import Review from "./pages/Review";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import News from "./components/News/News.js";
import FormInstance from "./pages/FormInstance";
import FieldGroup from "./components/Form/FieldGroup";

const App = () =>
  <Router>
    <div>
    <Wrapper>
        {/*    Default     */}
        <Route exact path="/" component={Search} />
        <Route exact path="/" component={News} />

        {/*    Home Page     */}
        <Route exact path="/home" component={Search} />
        <Route exact path="/home" component={News} />

        {/*    About Page     */}
        <Route exact path="/about" component={Navbar} />
        <Route exact path="/about" component={About} />

        {/*    Form Page     */}
        <Route exact path="/form" component={Navbar} />
        <Route exact path="/form" component={FormInstance} />

        {/*    Review Page     */}
        <Route exact path="/review" component={Navbar} />
        <Route exact path="/review" component={Review} />

    </Wrapper>
    <Footer />
    </div>
  </Router>;

export default App;
