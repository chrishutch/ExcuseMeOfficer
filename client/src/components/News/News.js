import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
var request = require("request");


class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            err: null,
            isLoaded: false,
            docs:[],
            body: []
        };
    }

    componentWillMount() {
        request.get({
            url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
            qs: {
                "api-key": "02c5bdd2f862477baa6c29cffd68c563",
                'q': "police shoot lawsuit",
                'begin_date': "20160101",
                'end_date': "20180501",
                'sort': "newest"
            }
        }, (err, response, body) => {
            console.log(body);
            body = JSON.parse(body);
            var article = body.response.docs;
            console.log(article);
            console.log(article[0].headline.main);
            var headline = body.response.docs[0].headline.main;

        });

    }

    render() {

        return (

            <Container style={{ marginTop: 0 }}>


                <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                    <div class="col-md-6 px-0">
                        <h1 class="display-4 font-italic">Title of a longer featured blog post</h1>
                        <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
                        <button type="button" class="btn btn-light btn-lg writereviewbtn"><a href="#" class="text-white font-weight-bold">Write a Review</a></button>
                    </div>
                </div>



                <Row>
                    <div class="col-md-6">
                    <div class="card flex-md-row mb-4 box-shadow h-md-250 newscard">
                        <div class="card-body d-flex flex-column align-items-start">
                            <strong class="d-inline-block mb-2 text-primary">17-year-old being punched in head</strong>
                            <h3 class="mb-0">
                                <a class="text-dark" href="http://abc7chicago.com/wisconsin-police-officer-caught-on-video-punching-teen-in-face/3471486/">Featured Post</a>
                            </h3>
                            <div class="mb-1 text-muted">Nov 12</div>
                            <p class="card-text mb-auto">Wisconsin - Video of 17-year-old being punched in the head by an officer during an arrest is going viral.</p>
                            <a href="http://abc7chicago.com/wisconsin-police-officer-caught-on-video-punching-teen-in-face/3471486/">Continue reading</a>
                        </div>
                        <img class="card-img-right flex-auto d-none d-lg-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src={require('../../images/news1.jpg')} data-holder-rendered="true" width="600px" height="255px" to="/about" />
                    </div>

                 

                    </div>

                    <div class="col-md-6">
                        <div class="card flex-md-row mb-4 box-shadow h-md-250 newscard">
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-success">Police body cameras a 'guardian angel':</strong>
                                <h3 class="mb-0">
                                    <a class="text-dark" href="http://www.chicagotribune.com/suburbs/evanston/news/ct-evr-police-body-cameras-tl-0510-story.html">Featured post</a>
                                </h3>
                                <div class="mb-1 text-muted">Nov 12</div>
                                <p class="card-text mb-auto">“It’s sort of like a guardian angel, always watching,” said Johnson, a sworn officer since 2013..</p>
                                <a href="http://www.chicagotribune.com/suburbs/evanston/news/ct-evr-police-body-cameras-tl-0510-story.html">Continue reading</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src={require('../../images/news2.jpg')} data-holder-rendered="true" width="600px" height="255px" to="/about" />
                        </div>



                    </div>

                        </Row>

                <Row>
                    <div class="col-md-6">
                        <div class="card flex-md-row mb-4 box-shadow h-md-250 newscard">
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-primary">The Protect and Serve Act</strong>
                                <h3 class="mb-0">
                                    <a class="text-dark" href="https://www.pastemagazine.com/articles/2018/05/the-protect-and-serve-act-could-make-the-fight-aga.html">Featured post</a>
                                </h3>
                                <div class="mb-1 text-muted">Nov 12</div>
                                <p class="card-text mb-auto">The House and the Senate have both drafted versions of a new bill called The Protect and Serve Act.</p>
                                <a href="https://www.pastemagazine.com/articles/2018/05/the-protect-and-serve-act-could-make-the-fight-aga.html">Continue reading</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src={require('../../images/news3.jpg')} data-holder-rendered="true" width="600px" height="255px" to="/about" />
                        </div>
                    </div>



                    <div class="col-md-6">
                        <div class="card flex-md-row mb-4 box-shadow h-md-250 newscard">
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-success">Police Investigating After Video Shows Officer Choking</strong>
                                <h3 class="mb-0">
                                    <a class="text-dark" href="https://www.npr.org/sections/thetwo-way/2018/05/11/610308587/video-of-white-police-officer-choking-black-man-in-prom-tux-goes-viral">Featured post</a>
                                </h3>
                                <div class="mb-1 text-muted">Nov 11</div>
                                <p class="card-text mb-auto">The video shows a white police officer choking a young tuxedo-clad man who is African-American</p>
                                <a href="https://www.npr.org/sections/thetwo-way/2018/05/11/610308587/video-of-white-police-officer-choking-black-man-in-prom-tux-goes-viral">Continue reading</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src={require('../../images/news4.jpg')} data-holder-rendered="true" width="600px" height="255px" to="/about" />
                      
                        </div>
                    </div>
                </Row>

            </Container>

        );
    }
}
export default News;
