## Use-Backend
### Unstable Package
Please note that this package is experimental and has not been tested for production use.

### Idea
Just funny hook to use backend of your's!
To use this package for easily fetch data from your backend without having to write long codes.

### Installation
use
```bash
npm i bitbackend
```
or if you're using yarn,
```bash
yarn add bitbackend
```

### Configure your backend.
To configure your backend, you can use the `configureBackend` function from <strong>BitBackend</strong>

```javascript
import { useBackend } from 'bitbackend';

useBackend.configure({
    baseUrl: 'mybackend.com',
    ...otherConfig
    // your api configurations as required by the 
})

```

### Making a backend call
To make a call to your backend, you can use call provided by bitbackend.