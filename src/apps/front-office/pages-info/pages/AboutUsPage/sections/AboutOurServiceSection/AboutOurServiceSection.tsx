import { trans } from "@mongez/localization";
import React from "react";
function _AboutOurServiceSection() {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2">
      <div className="info-l text-left p-10">
        <h4 className="text-2xl capitalize font-semibold text-gray-400 my-4">
          {trans("about-us.ourPerformance")}
        </h4>

        <h2 className="text-5xl font-bold my-8">
          {trans("about-us.yourPartnerForECommerceGrocerySolution")}
        </h2>

        <p className="text-muted-foreground leading-7 font-medium">
          Ed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto
          <p className="my-4">
            Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia
          </p>
        </p>
      </div>
      <div className="image-r">
        <img src="/images/about-us/about-5.png" />
      </div>
    </div>
  );
}

const AboutOurServiceSection = React.memo(_AboutOurServiceSection);
export default AboutOurServiceSection;
