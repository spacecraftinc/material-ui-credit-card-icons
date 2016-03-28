'use strict';

/**
 * material-ui-credit-card-icons
 * https://github.com/codefoundries/material-ui-credit-card-icons
 *
 * Copyright (c) 2016 Code Foundries, Aleksandar Chalakov
 * Licensed under the MIT license.
 */

 var React   = require ('react');

 var Icon_AmericanExpress   = require ('./Icon_AmericanExpress.js');
 var Icon_CreditCardOutline = require ('./Icon_CreditCardOutline.js');
 var Icon_DinersClub        = require ('./Icon_DinersClub.js');
 var Icon_Discover          = require ('./Icon_Discover.js');
 var Icon_JCB               = require ('./Icon_JCB.js');
 var Icon_MasterCard        = require ('./Icon_MasterCard.js');
 var Icon_Visa              = require ('./Icon_Visa.js');


function getCreditCardIconByName( iconName )
{
  if( iconName == 'AmericanExpress' ) { return <Icon_AmericanExpress /> }
  if( iconName == 'DinersClub' )      { return <Icon_DinersClub /> }
  if( iconName == 'Discover' )        { return <Icon_Discover /> }
  if( iconName == 'JCB' )             { return <Icon_JCB /> }
  if( iconName == 'MasterCard' )      { return <Icon_MasterCard /> }
  if( iconName == 'Visa' )            { return <Icon_Visa /> }
                                        return <Icon_CreditCardOutline />;
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
