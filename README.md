material-ui-credit-card-icons
=========================

Library with credit card icons for [Material-UI](http://www.material-ui.com/#/). Initially created for use in [Isomorphic Material Relay Starter Kit (IMRSK)](https://github.com/codefoundries/isomorphic-material-relay-starter-kit) by [Code Foundries](http://codefoundries.com/). The boilerplate for the npm package is from [insin/templates/react-module/](https://github.com/insin/templates/tree/master/react-module).

## Installation

```shell
  npm install material-ui-credit-card-icons --save
```

## Usage

```javascript
import React from 'react';
import IconButton from 'material-ui/lib/icon-button';

import {
  Icon_Visa,
  Icon_Mastercard
} from 'material-ui-credit-card-icons';

class MyComponent extends React.Component
{
  render( )
  {
    return(
      <div>
        <IconButton><Icon_Visa /></IconButton>
        <IconButton><Icon_Mastercard /></IconButton>
      </div>
    );
  }
}

```

For list of icons refer to [the src folder](src/).


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Check out [existing issues and help wanted](https://github.com/codefoundries/material-ui-credit-card-icons/issues).


## Release History

[Releases on Github project](https://github.com/codefoundries/material-ui-credit-card-icons/releases/).
