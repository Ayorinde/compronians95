import React from 'react';

function Home() {
  return (
    <div id="c-home" className="c-home c-page">
        <div className="c-header">
            <div className="row c-row-welcome align-items-center" >
                <div className="col-sm col-md-6">
                
                </div>
                <div className="col-sm col-md-6 c-col-welcome">
                    <div className="c-mini-welcome">
                        <h1 className="c-banner-title-1">2020 Compro 95 set</h1>
                        <h4 className="c-title-2">Reunion</h4>
                        <p className="c-para-1">
                        Join us on Friday, June 19 and Saturday, June 20, 2020 as we get together to give back to 
                        our school and at the same time celebrate our journey so far. 
                        </p>
                        <p className="c-btn-group">
                        <a id="c-join-link" className="btn btn-primary btn-lg" href="/signup.html"
                            data-from="c-home" data-to="c-signup"
                            role="button"> Join Compro95
                        </a>
                        <a id="c-profile-link" className="btn btn-primary btn-lg c-hide" href="/profile.html"
                            data-from="c-home" data-to="c-profile"
                            role="button"> My Profile 
                        </a>
                        <a className="btn btn-outline-primary btn-lg" href="#" role="button">View Programme</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="c-award-donate-book">
            <h1 className="c-title-1">Vote  <span className="c-alt-color">Donate</span>  Book</h1>
            <div className="row">
                <div className="col-sm col-md-4 c-block">
                    <h2 className="c-block-title">95 set Award</h2>
                    <div className="c-block-content">
                        <p className="c-para-1">
                            We have 5 award categories. For each award indicate who you will consider the winner
                        </p>
                    </div>
                    <p><a className="btn btn-outline-primary btn-lg" href="#" role="button">Vote Now</a></p>
                </div>
                <div className="col-sm col-md-4 c-block">
                    <h2 className="c-block-title"> Donate </h2>
                    <div className="c-block-content"> 
                        <p className="c-para-1">
                        Donate a minimum of N10k for the reunion ceremony . Pay to 11122234444 ECOBANK
                        </p>    
                    </div>
                    <p><a className="btn btn-outline-primary btn-lg" href="#" role="button">Donate Now</a></p>
                </div>
                <div className="col-sm col-md-4 c-block">
                    <h2 className="c-block-title">Hotel & T-shirt</h2>
                    <div className="c-block-content">      
                        <p className="c-para-1">
                        N10k for one night. shirt is N2k. Pay to 2343432345 FIRSTBANK
                        </p>    
                    </div>
                    <p><a className="btn btn-outline-primary btn-lg" href="#" role="button">Pay Now</a></p> 
                </div>
            </div>
        </div>

        <div id="c-gallery-indicators" className="carousel slide" data-ride="carousel">
            <h1 className="c-title-1 c-margin">Photo Gallery</h1>
            <ol className="carousel-indicators">
                <li data-target="#c-gallery-indicators" data-slide-to="0" className="active"></li>
                <li data-target="#c-gallery-indicators" data-slide-to="1"></li>
                <li data-target="#c-gallery-indicators" data-slide-to="2"></li>
                <li data-target="#c-gallery-indicators" data-slide-to="3"></li>
                <li data-target="#c-gallery-indicators" data-slide-to="4"></li>
                <li data-target="#c-gallery-indicators" data-slide-to="5"></li>
            </ol>
            <div className="carousel-inner c-carousel-group">
                <div className="carousel-item active">
                    <img src="images/group-compro-1.jpg" className="d-block w-100" alt="a group of compro 95 set" />
                </div>
                <div className="carousel-item">
                    <img src="images/group-compro-2.jpg" className="d-block w-100" alt="a group of compro 95 set" />
                </div>
                <div className="carousel-item">
                    <img src="images/group-compro-3.jpg" className="d-block w-100" alt="a group of compro 95 set" />
                </div>
                <div className="carousel-item">
                    <img src="images/group-compro-4.jpg" className="d-block w-100" alt="a group of compro 95 set" />
                </div>
                <div className="carousel-item">
                    <img src="images/group-compro-5.jpg" className="d-block w-100" alt="a group of compro 95 set" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#c-gallery-indicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#c-gallery-indicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

        <div className="c-member-profile">
            <h1 className="c-title-1 c-margin">Members Profiles</h1>
            <div className="row row-cols-1 row-cols-md-3 c-cards">
            <p className="text-center"> ... loding members </p>
    
            </div>
        </div>
    </div>);
}

export default Home;