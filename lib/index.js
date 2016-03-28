'use strict';

/**
 * material-ui-credit-card-icons
 * https://github.com/codefoundries/material-ui-credit-card-icons
 *
 * Copyright (c) 2016 Code Foundries, Aleksandar Chalakov
 * Licensed under the MIT license.
 */

 var React   = require('React');

 var Icon_AmericanExpress   = require('./Icon_AmericanExpress.js');
 var Icon_CreditCardOutline = require('./Icon_CreditCardOutline.js');
 var Icon_DinersClub        = require('./Icon_DinersClub.js');
 var Icon_Discover          = require('./Icon_Discover.js');
 var Icon_JCB               = require('./Icon_JCB.js');
 var Icon_MasterCard        = require('./Icon_MasterCard.js');
 var Icon_Visa              = require('./Icon_Visa.js');


function getCreditCardIconByName( iconName )
{
  if( iconName == 'AmericanExpress' ) { return React.createElement(Icon_AmericanExpress, null) }
  if( iconName == 'DinersClub' )      { return React.createElement(Icon_DinersClub, null) }
  if( iconName == 'Discover' )        { return React.createElement(Icon_Discover, null) }
  if( iconName == 'JCB' )             { return React.createElement(Icon_JCB, null) }
  if( iconName == 'MasterCard' )      { return React.createElement(Icon_MasterCard, null) }
  if( iconName == 'Visa' )            { return React.createElement(Icon_Visa, null) }
                                        return React.createElement(Icon_CreditCardOutline, null);
}


 module.exports = {
   Icon_AmericanExpress: Icon_AmericanExpress,
   Icon_CreditCardOutline: Icon_CreditCardOutline,
   Icon_DinersClub: Icon_DinersClub,
   Icon_Discover: Icon_Discover,
   Icon_JCB: Icon_JCB,
   Icon_MasterCard: Icon_MasterCard,
   Icon_Visa: Icon_Visa,
   getCreditCardIconByName: getCreditCardIconByName
 }
