'use strict';

/**
 * material-ui-credit-card-icons
 * https://github.com/codefoundries/material-ui-credit-card-icons
 *
 * Copyright (c) 2016 Code Foundries, Aleksandar Chalakov
 * Licensed under the MIT license.
 */

 import React from 'react';

 export Icon_AmericanExpress   from './Icon_AmericanExpress';
 export Icon_CreditCardOutline from './Icon_CreditCardOutline';
 export Icon_DinersClub        from './Icon_DinersClub';
 export Icon_Discover          from './Icon_Discover';
 export Icon_JCB               from './Icon_JCB';
 export Icon_MasterCard        from './Icon_MasterCard';
 export Icon_Visa              from './Icon_Visa';


 import Icon_AmericanExpress   from './Icon_AmericanExpress';
 import Icon_CreditCardOutline from './Icon_CreditCardOutline';
 import Icon_DinersClub        from './Icon_DinersClub';
 import Icon_Discover          from './Icon_Discover';
 import Icon_JCB               from './Icon_JCB';
 import Icon_MasterCard        from './Icon_MasterCard';
 import Icon_Visa              from './Icon_Visa';


export function getCreditCardIconByName( iconName )
{
  if( iconName == 'AmericanExpress' || iconName == 'American Express' ) { return <Icon_AmericanExpress /> }
  if( iconName == 'DinersClub' )                                        { return <Icon_DinersClub /> }
  if( iconName == 'Discover' )                                          { return <Icon_Discover /> }
  if( iconName == 'JCB' )                                               { return <Icon_JCB /> }
  if( iconName == 'MasterCard' )                                        { return <Icon_MasterCard /> }
  if( iconName == 'Visa' )                                              { return <Icon_Visa /> }
                                                                          return <Icon_CreditCardOutline />;
}
