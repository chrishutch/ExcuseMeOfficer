import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Search from "./pages/Search";
import Review from "./pages/Review";
import Guide from "./pages/Guide";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import News from "./components/News/News.js";
import FormInstance from "./pages/FormInstance";
import ThankYou from "./pages/ThankYou";


const App = () =>
  <Router>
    <div>
    <Wrapper>
        {/*    Default     */}
        <Route exact path="/" component={Search} />
        <Route exact path="/" component={News} />
        <Route exact path="/" component={Footer} />

        {/*    Home Page     */}
        <Route exact path="/home" component={Search} />
        <Route exact path="/home" component={News} />
        <Route exact path="/home" component={Footer} />

        {/*    About Page     */}
        <Route exact path="/about" component={Navbar} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about" component={Footer} />

        {/*    Form Page     */}
        <Route exact path="/form" component={Navbar} />
        <Route exact path="/form" component={FormInstance} />
        <Route exact path="/form" component={Footer} />

        {/*    Review Page     */}
        <Route exact path="/reviews" component={Navbar} />
        <Route exact path="/reviews" component={Review} />
        <Route exact path="/reviews" component={Footer} />

        {/*    Thank you Page     */}

        <Route exact path="/thankyou" component={Navbar} />
        <Route exact path="/thankyou" component={ThankYou} />
        <Route exact path="/thankyou" component={Footer} />

        {/*    Thank you Page     */}

        <Route exact path="/Guide" component={Navbar} />
        <Route exact path="/Guide" component={Guide} />
        <Route exact path="/Guide" component={Footer} />

    </Wrapper>
    </div>
  </Router>;

export default App;
