import React, { Component } from 'react';
import {Accordion,AccordionItem,AccordionItemHeading,AccordionItemPanel,AccordionItemButton} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import bg from './../../assets/img/Offervana_difference_background.jpeg';

class FAQ extends Component {
  render() {
    return (
      <div>
        <section id="inner-page-banner" style={{ backgroundImage: "url(" + bg + ")","backgroundPositionY": "70%" }} >
         <div className="container" >
            <div className="row">
              <div className="col-md-12">
              <div className="inner-page-banner-content">
                <h2 className="heading-faq">FAQ</h2>
              </div>
              </div>
            </div>
          </div>
        </section>
        <section id="our-team-main">
          <div className="container">
            <div className="section-title">
              <h2>Frequently Asked Questions</h2>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Consect petur adipiscing elit.</p>
            </div>
            <div className="single-service-tab">
            <Accordion allowZeroExpanded={true}>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What is Offervana?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Offervana is unbiased software company that bridges the gap for home sellers between iBuyers and selling your home the traditional way. Our proprietary multioffer platform gives you the ability to see all your iBuyer offers and a traditional agent offer in one place helping you make a smart decision. We deliver full transparency of iBuyer fees, estimated net proceeds, comps used to price your property and local market trends. At Offervana, we take the guesswork out for home sellers by becoming the source for them! A home seller can enter their address, complete the home survey and with a click of a button submit their property to receive multiple cash offers from local iBuyers and several other investors who buy homes. We do this all on the sellers behalf so they can choose which option is best for them and their busy life! We give the power back to the home seller and provide the iBuyers an opportunity to get in front of more home sellers. It is a win-win for all parties involved. iBuyers and other corporate companies are spreading across the nation right now. Here in the Phoenix Metro area, we are the hub where a lot of these companies began and are coming to. It is a lot to for today's home seller to digest, to know all companies that are out there, which company will offer the most money for their home and who is the best company to work with. So this is the why Offervana was created,, the modern way to sell a home!
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What is an iBuyer?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>An iBuyer is a Real Estate company that will provide a home seller a cash offer and close in as little a 7 - 90 days. They use technology to make an offer on your home instantly. The “i” in iBuyer, therefore, stands for “instant.” iBuyers have started to make dramatic shifts in the way people are selling homes, offering a more simple and convenient alternative to the uncertain traditional home sale. How each iBuyers operates varies, but the underlying idea is that each company estimates the value of your home and makes an offer. If you choose to accept an iBuyer offer, they take on the burden of owning, marketing, and reselling the home. The biggest benefit is the certainty of an all-cash offer, certainty and more control over when you move.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How do I get multiple cash offers on my home?
                 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>It’s simple! To get multiple cash offers on your home. Simple enter in your address on the home page, complete the home survey and create your login to gain access to our proprietary multoffer platform. We then go to work for you submitting your property to all the iBuyers on your behalf so you can sit back, start receiving your cash offers and see all of your options.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                  I answered the Home Survey, how long does it take to get offers?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>After you have completed the home survey, created your login and submitted your properties photos, then we see turn typically turn around times anywhere from 24-72 hours to start receiving iBuyer offers and the agent offer. Please note that we do not have control once we submit your property to the iBuyers on your behalf on when we will receive the offer back. We do stay in close communication with all the iBuyers to ensure a fast as possible turnaround time but do see sometimes that iBuyers can take up to 5+ days to issue an offer out on a property. You will constistially be notified through email and text of when iBuyer offers are received and entered into the multioffer platform until all iBuyer offers are received.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What if I think the offers are too low?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>After you have completed the home survey, created your login and submitted your properties photos, then we see turn typically turn around times anywhere from 24-72 hours to start receiving iBuyer offers and the agent offer. Please note that we do not have control once we submit your property to the iBuyers on your behalf on when we will receive the offer back. We do stay in close communication with all the iBuyers to ensure a fast as possible turnaround time but do see sometimes that iBuyers can take up to 5+ days to issue an offer out on a property. You will constistially be notified through email and text of when iBuyer offers are received and entered into the multioffer platform until all iBuyer offers are received.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How do I accept an iBuyer offer?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>If you would like to accept an iBuyer offer, simple click the accept button at the bottom of the iBuyer column on the same page in the multioffer platform. We will then be in contact with the same day to go over the next steps .</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    If I “Accept” an iBuyer offer, what happens?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>If you accept an iBuyer offer, then we will be in contact with you the same day to find out what closing date you would like to pick. After that, we will then have the offer sent over to you to electronically sign. Once the offer is signed and delivered back to the iBuyer, we will consult with you on what the next steps are, what to expect from the home inspection and guide you through the entire process to ensure a smooth closing.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    If I “Accept” the Agent’s offer, what happens?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>If you accept the agent’s offer and wish to list your property on the market to maximize your equity, then we will be in contact with you the same day so we can schedule a consultation with you, if you should desire one. Then we will schedule professional photos to be taken of property, have a professional video done and have you pick a date that works for you to go live so we can get your home sold! After that, through our strategically unique online and social media marketing, we ensure that your property will get maximum exposure to buyers and give you weekly progress reports so you will always be in the know of what is going on with your sale of your home!</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What if I am an iBuyer, how can I join Offervana’s multioffer platform?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>If you are a current iBuyer or wish to become an iBuyer and want to join Offervana’s multioffer platform to get in front of thousands of home sellers. Please contact Offervana directly to further discuss this opportunity. We will go over what your goals are, the types of homes you are looking to buy and how many homes you looking to obtain. So we can be sure you a fit for Offervana. We will then discuss how you can how you can become apart of Offervana’s multioffer platform and the fees associated for that.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What is Offervana’s Multioffer Platform?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>Offervana’s Multioffer platform is our proprietary trademarked platform that allows you see all of your offers in one place with full transparency. Not only will see all the iBuyers and agent offer in one place, we provide you information on how the iBuyers came up with their offer, each of the iBuyers different fees, comparables from your neighborhood, your local markets trends and calculation of your net proceeds. So you will have no doubt in your mind that all of your options were presented to you so you can make the best decision possible for your busy life.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    I’m a real estate agent, how can I use Offervana?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>As a Real Estate agent, you may submit your clients property to Offervana on their behalf as long as you have proper representation to do so. We will then submit your clients property to all the iBuyers that Offervana works with and notify you via phone, e-mail and text when your clients offers are ready. By submitting your clients property on their behalf to Offervana, you are agreeing to Offervana’s 1% service fee if your client accepts one of the iBuyers offers presented.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    I’m a real estate broker, how can I use Offervana?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>As a Real Estate broker, you may submit your clients property to Offervana on their behalf as long as you have proper representation to do so. We will then submit your clients property to all the iBuyers that Offervana works with and notify you via phone, e-mail and text when your clients offers are ready. By submitting your clients property on their behalf to Offervana, you are agreeing to pay Offervana’s 1% service fee if your client accepts one of the iBuyers offers presented.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What real estate markets is Offervana in?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>Offervana is currently home grown and operates in Arizona. However, we will be launching into several other markets in 2020.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How do I contact Offervana?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>If you would like to contact Offervana, please call our number at 480-733-8500, by e-mail at @offervana.com or by chat through the website. Otherwise once you complete the home survey and submit your home, we will contact you directly.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How does Offervana work?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>Offervana is a multi offer platform that gives you the power to submit your home for a cash offer in one place and receive offers from all the major iBuyer’s including OpenDoor, OfferPad, Zillow Offers, and dozens of other local investors who buy homes cash.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Will Offervana negotiate my cash offer with the iBuyer?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>Yes. In some circumstances we can negotiate with the iBuyers by giving an opportunity to meet or beat other offers on your home. In other cases we can find missed upgrades, lot sizes, or better comps, to justify the iBuyer coming up on their initial offer price.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Does Offervana cost anything?Can Offervana sell my home?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>Offervana is a free service and will work with you to find the best offer for your home. If you accept an iBuyer offer Offervana charges a 1% service fee. If you decide to sell your home the conventional way our team charges a 6% fee, of which 3% goes to the cooperating broker. Offervana will also give you a 10% discount if you sell your home the conventional way. There are no other additional costs from Offervana.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Can Offervana sell my home?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>Yes. Offervana also works with a full service Real Estate team that can sell your home the conventional way if you decide to forgo the iBuyer offers.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    If I list with the Offervana team and then decide to sell to a iBuyer, can I cancel my listing?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>Absolutely! You can cancel your listing at anytime to accept an offer from an iBuyer in our system. We would only require you to pay for the marketing the Offervana team performed to include yard signs, professional photos, and admin fees. In most cases these marketing fees are less than $750.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How does the equity advance program work?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>We understand many times homeowners need quick access to a portion of their equity for moving expenses, to get to their next home or destination. If you accept an iBuyer offer using our multioffer platform, Offervana advance you a portion of your available equity. Terms and conditions apply.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Does my property qualify for offers?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>Offervana offers apply to homes that meet the following criteria:</p>
                <div className="col-md-9 col-sm-9">
                      <ul>
                        <li>Single Family Homes, Townhouses, Duplexes, and Condos. Unfortunately, prefabricated/manufactured/mobile homes do not qualify.</li>

                        <li>Homes built after 1950 in all of Maricopa County and San Tan Valley, Arizona. (If your home was built before 1950, still submit your property as we work with several smaller investors that may give you an offer.)</li>

                        <li>Homes that sit on a maximum of an acre of land and not in a flood zone.</li>

                        <li>Homes that don’t have solar leases but only if the solar lease has been pre-paid at or prior to closing or can be removed professionally by your solar company prior to closing.</li>

                        <li>Homes that don’t have non-permitted additions, significant foundation issues, solar leases, or polybutylene plumbing.</li>

                        <li>Homes with clear title, are not owned by banks, government agencies, no double escrows and not leased at the time of closing.</li>

                        <li>In the event your home does not apply still submit your property as we work with several local home investors that may give you an offer.</li>

                        <li>Not all homes meet the criteria for multiple offers. Although rare in some cases we may only get 1 offer for you. We submit to obtain offers from multiple investors and institutions as well as sharing with you the conventional way to sell your home for a side-by-side comparison.</li>
                      </ul>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
           </Accordion>
        </div>
          </div>
        </section>
      </div>
    )
  }
}
export default FAQ;