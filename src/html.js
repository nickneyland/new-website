import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.getElementById("year").innerHTML = new Date().getFullYear();
            var aText = new Array(
              "Hello", 
              "My name is Nick",
              "I am a web developer and former writer.",
              "You can see some of my coding work on this site",
              "And you can see some of my work as a writer too"
              );
              var iSpeed = 100; // time delay of print out
              var iIndex = 0; // start printing array at this posision
              var iArrLength = aText[0].length; // the length of the text array
              var iScrollAt = 20; // start scrolling up at this many lines
               
              var iTextPos = 0; // initialise text position
              var sContents = ''; // initialise contents variable
              var iRow; // initialise current row
               
              function typewriter()
              {
               sContents =  ' ';
               iRow = Math.max(0, iIndex-iScrollAt);
               var destination = document.getElementById("typedtext");
               
               while ( iRow < iIndex ) {
                sContents += aText[iRow++] + '<br />';
               }
               destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
               if ( iTextPos++ === iArrLength ) {
                iTextPos = 0;
                iIndex++;
                if ( iIndex !== aText.length ) {
                 iArrLength = aText[iIndex].length;
                 setTimeout("typewriter()", 500);
                }
               } else {
                setTimeout("typewriter()", iSpeed);
               }
              }
              
              
              typewriter();
                `,
          }}
/>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
