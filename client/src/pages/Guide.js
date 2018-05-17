import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Guide = () =>
    <div>
        <Hero backgroundImage="https://content.artofmanliness.com/uploads/2013/02/pulledover.jpg">

        </Hero>
    
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
        {/* <div className="card main"> */}
        <div className='guideHead'>
            <h1>What to Do If You Are Pulled Over by the  police</h1>
         </div>   
            <br />
            <div class="container">
        <div class="card guidecard">
            <h2>1.Acknowledge the officer.</h2>
            <img className="card-img-top" src={require('../images/card1.jpg')} width="100px" height="300px" />
            <div className="card-body">
                <p class="card-text">
                  To let the officer know that you’ve seen his lights and that you plan on pulling over, turn on your emergency flashers. 
                  Phil recommends you do this if you think you’ll need to drive a distance before you can find a safe place to pull over.
                </p>
            </div>
        </div>
        <div class="card guidecard">
            <h2>2. Keep Calm and Polite.</h2>
            <img class="card-img-top" src={require('../images/card2.jpg')}/> 
            <div class="card-body">
                <p class="card-text">
                        It’s common to get amped up whenever you get pulled over. Take some deep breaths and relax. Unless you’ve done something outright criminal (i.e. driving intoxicated, possessing illegal drugs, etc.) there’s nothing to be nervous about. The worst that can happen during a routine traffic stop is that you’ll have to pay a fine. Oh, and your insurance will probably go up. Pretty sucky, but not the end of the world.  If it helps, it’s good to remind yourself that the officer is probably nervous too.
                </p>
            </div>
        </div>
        <div class="card guidecard">
            <h2>3. Keep your identification Handy.</h2>
            <img class="card-img-top" src={require('../images/card3.png')} width="100px" height="300px"/>
            <div class="card-body">
                <p class="card-text">
                Don’t try to expedite the process by getting your license and registration ready while the officer approaches your car. 
                For all he knows you could be reaching for a gun or trying to hide some sort of incriminating evidence. 
                Wait until he or she gets to the window and asks for your documents.
                </p>
            </div>
        </div>
        <div class="card guidecard">
            <h2>4. Remain Silent as much as Possible.</h2>
            <img class="card-img-top" src={require('../images/card4.jpg')} width="100px" height="300px"/>
            <div class="card-body">
                <p class="card-text">
                Everything you say to an officer is admissible in court, so if you plan on fighting your ticket, Andy suggests not saying anything that indicates you are guilty. Officers will typically ask questions to get some sort of admission out of you when they first walk up to your window. 
                For example, “Do you know why I pulled you over?” Don’t say, “I was speeding, sir.” Simply say, “No” or, “I don’t know.”
                </p>
            </div>
        </div>
        <div class="card guidecard">
            <h2>5. Do Not Consent to a Search.</h2>
            <img class="card-img-top"src={require('../images/card5.png')}width="100px" height="300px"/> 
            <div class="card-body">
                <p class="card-text">
                        In order to search your vehicle without your consent, 
                        an officer needs probable cause – maybe he smells something 
                        in the car or sees a bottle on your seat. If he doesn’t have probable 
                        cause but wants to search your car anyway, he’ll need your consent and may ask 
                        you something like, “You don’t mind me taking a look in your car, do you?” 
                        Even if you haven’t done anything illegal, it’s usually a good idea to exercise
                         your Fourth Amendment right in this situation and decline the search.
                        “While you may believe you have nothing to hide, you never know what could come up.
                         Maybe a friend left an empty beer can in your back seat during a tailgate party, 
                         and the officer will charge you with an open container violation,” Andy explains. 
                            Politely decline the search by saying, “I don’t consent to a search, officer,” 
                        loud enough so it gets on the police recorder. That’s it.
                </p>
            </div>
        </div>

        <div class="card guidecard">
            <h2>5. Move deliberately</h2>
            <img class="card-img-top"src={require('../images/card6.jpg')}width="100px" height="300px"/> 
            <div class="card-body">
                <p class="card-text">
                When you do reach to get your license and registration, do so deliberately.
                 “A quick reach into the glove compartment for your insurance paperwork looks the same as a quick reach into your glove compartment for a weapon,” says Phil. 
                 If your wallet is in a gym bag in your backseat, let the officer know before you turn around and rummage for it. Quick Tip: Try to keep your glove compartment relatively organized,
                 and your documents together, so that when you pull the box open, you don’t have to frantically sort through 20-year-old maps and wads of receipts to find your registration.
                </p> 
            </div>
        </div>
    </div>
    {/* </div> */}
        </Col>
      </Row>
    </Container>
  </div>;

export default Guide;
