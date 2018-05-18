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
import Form from "./pages/Form";
import Detail from "./pages/Detail";


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

        <Route exact path="/reviews/il/:zip" component={Navbar} />
        <Route exact path="/reviews/il/:zip" component={Review} />
        <Route exact path="/reviews/il/:zip" component={Footer} />

        <Route exact path="/review" component={Navbar} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/review" component={Footer} />
        <Route exact path="/reviews/:id" component={Navbar} />
        <Route exact path="/reviews/:id" component={Detail} />
        <Route exact path="/reviews/:id" component={Footer} />

        {/*    Thank you Page     */}
        <Route exact path="/thankyou" component={Navbar} />
        <Route exact path="/thankyou" component={ThankYou} />

         <Route exact path="/forms" component={Navbar} />
        <Route exact path="/forms" component={Form} />
        <Route exact path="/forms" component={Footer} />

        <Route exact path="/thankyou" component={Footer} />

        {/*    Guide to Police Stops Page  */}
        <Route exact path="/guide" component={Navbar} />
        <Route exact path="/guide" component={Guide} />
        <Route exact path="/guide" component={Footer} />


    </Wrapper>
    </div>
  </Router>;

export default App;
