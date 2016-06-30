import React from "react";

import Article from "../components/Article";

export default class Featured extends React.Component {
    render() {
        const Articles = [
          "Some Article",
          "Some Other Article",
          "Yet Another Article",
          "Still More",
          "Some Article",
          "Some Other Article",
          "Yet Another Article",
          "Still More",
          "Some Article",
          "Some Other Article",
          "Yet Another Article",
          "Still More",
        ].map((title, i) => <Article key={i} title={title}/> );
      /* //위와 같은 내용
       const Articles = [
         <Article key={1} title={"Some Article"}/>,
         <Article key={2} title={"Some Other Article"}/>,
         <Article key={3} title={"Yet Another Article"}/>,
         <Article key={4} title={"Still More"}/>,
       ];
     */
       const adText = [
         "Ad spot #1",
         "Ad spot #2",
         "Ad spot #3",
         "Ad spot #4",
         "Ad spot #5",
       ];

        const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];

        return (
          <div>
            <div class="row">
              <div class="col-lg-12">
                <div class="well text-center">
                  {randomAd}
                </div>
              </div>
            </div>

            <div class="row">{Articles}</div>
          </div>
        );
    }
}
