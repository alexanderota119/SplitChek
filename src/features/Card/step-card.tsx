import React from "react";
import Card1 from "assets/images/home/card1.png";
import Card2 from "assets/images/home/card2.png";
import Card3 from "assets/images/home/card3.png";
import Card4 from "assets/images/home/card4.png";
import { StyleCard, CardSingle } from "./step-card.style";
import Shadow from "components/Shadow/shadow";
const StepCard: React.FC = () => {
  return (
    <StyleCard>
      <CardSingle>
        <Shadow color="red">
          <img src={Card1} alt="step-card1" />
        </Shadow>
        <h4>Share wishlists and shopping preferences</h4>
        <p>
          With shareable wishlists and shopping preferences, you can find out
          exactly what your loved ones want without giving away the surprise!
        </p>
      </CardSingle>
      <CardSingle>
        <Shadow color="blue">
          <img src={Card2} alt="step-card2" />
        </Shadow>
        <h4>Create gifting groups</h4>
        <p>
          Invite your family and friends to join gifting groups for special
          occasions such as birthdays, weddings, hen’s parties and more
        </p>
      </CardSingle>
      <CardSingle>
        <Shadow color="yellow">
          <img src={Card3} alt="step-card3" />
        </Shadow>
        <h4>Split the costs at checkout</h4>
        <p>
          Easily share the cost of gifts and group purchases with our simple
          checkout process
        </p>
      </CardSingle>
      <CardSingle>
        <Shadow color="purple">
          <img src={Card4} alt="step-card4" />
        </Shadow>
        <h4>Be part of our gifting community</h4>
        <p>
          Connect with your loved ones and stores, share feedback and help other
          community members with their gifts
        </p>
      </CardSingle>
    </StyleCard>
  );
};

export default StepCard;
