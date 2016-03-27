'use strict';

var React = require('react')
var SvgIcon = require('material-ui/lib/svg-icon')

module.exports = function(props)
{
  return(
    React.createElement(SvgIcon, React.__spread({viewBox: "0 0 60 40"},  props), 
      React.createElement("g", null, 
      	React.createElement("path", {fill: "#CECECD", d: "M60,35c0,2.75-2.25,5-5,5H5c-2.75,0-5-2.25-5-5V5c0-2.75,2.25-5,5-5h50c2.75,0,5,2.25,5,5V35z"})
      ), 
      React.createElement("g", null, 
      	React.createElement("g", null, 
      		React.createElement("path", {fill: "#DFDEDC", d: "M55,1c2.206,0,4,1.794,4,4v30c0,2.206-1.794,4-4,4H5c-2.206,0-4-1.794-4-4V5c0-2.206,1.794-4,4-4H55 M55,0" + ' ' +
      			"H5C2.25,0,0,2.25,0,5v30c0,2.75,2.25,5,5,5h50c2.75,0,5-2.25,5-5V5C60,2.25,57.75,0,55,0L55,0z"})
      	)
      )
    )
  )
}
