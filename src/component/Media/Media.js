import React, { Component } from 'react';
import bg from '../../assets/img/Offervana_difference_background.jpeg';

class Media extends Component {
  render() {
    return (
      <div>
        <section id="inner-page-banner" style={{ backgroundImage: "url(" + bg + ")", "backgroundPositionY": "70%" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="inner-page-banner-content">
                  <h2 className="heading-faq">Media</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="media-main" style={{ "background": "#f1f3f3" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="wistia_embed wistia_async_snxt5toqlk videoFoam=true">&nbsp;</div>
              </div>
            </div>
          </div>
        </section>

        <section id="media-main">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="media-main-inner">
                  <div className="media-main-inner-video">
                    <div className="wistia_embed wistia_async_lodj4ymbcb videoFoam=true">&nbsp;</div>
                  </div>

                  <div className="media-main-inner-content">
                    <h3>Rose's Story</h3>
                    <p>I was behind on my mortgage payments but I knew that I still had equity in my house. I was approached by cash buyers sending me mail! A buyer came to my house and made me an offer that I felt was low but I needed to sell quick. With so many companies now, I was confused which company would give me the most money and least hassle as I wanted to sell fast but also get as much money as possible.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="media-main-inner">
                  <div className="media-main-inner-video">
                     <div className="wistia_embed wistia_async_h1gmsrk7xf videoFoam=true">&nbsp;</div> 
                  </div>

                  <div className="media-main-inner-content">
                    <h3>Sonia and John's Story</h3>
                    <p>Through their multiple offer platform we could clearly see all of our offers from ibuyers in one place, as well as what we could sell for in conventional market. Offervana was there with us the entire home selling and buying process! Their multioffer platform gave us all of our options with clarity so we could easily choose what was best for us. We love Offervana!</p>
                  </div>
                </div>
              </div>

              <div className="offset-md-3 offset-sm-3 col-md-6 col-sm-6">
                <div className="media-main-inner">
                  <div className="media-main-inner-video">
                    <div className="wistia_embed wistia_async_9psytd8lbv videoFoam=true">&nbsp;</div>
                  </div>

                  <div className="media-main-inner-content">
                    <h3>Scott's Story</h3>
                    <p>I came across Offervanna who said that they were going to get me offers from all of these companies and I could compare them! I’d see who would give me the best offer, charge the least fees and who is best to work with during the inspection! Offervana’s catch phrase of “submit one and done” I thought to myself yeah right that’s too good to be true!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}
export default Media; 
