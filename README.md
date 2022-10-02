### Would you like to support me?

<div align="center">
<a href="https://github.com/numandev1?tab=followers">
    <img src="https://img.shields.io/github/followers/numandev1?label=Follow%20%40numandev1&style=social" height="36" />
</a>
<a href="https://www.youtube.com/channel/UCYCUspfN7ZevgCj3W5GlFAw"><img src="https://img.shields.io/youtube/channel/subscribers/UCYCUspfN7ZevgCj3W5GlFAw?style=social" height="36" /><a/>
</br>
<a href="https://www.buymeacoffee.com/numan.dev" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
</div>

# react-native-interactable-reanimated

[![NPM](https://img.shields.io/npm/v/react-native-interactable-reanimated.svg)](https://www.npmjs.com/package/react-native-interactable-reanimated) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<img src="http://i.imgur.com/ErA2GQo.gif" width=200 />&nbsp;&nbsp;&nbsp;&nbsp;
<img src="http://i.imgur.com/pH6oB5D.gif" width=200 />&nbsp;&nbsp;&nbsp;&nbsp;
<img src="http://i.imgur.com/J5l2Qvq.gif" width=200 />&nbsp;&nbsp;&nbsp;&nbsp;
<img src="http://i.imgur.com/dWFYZBG.gif" width=200 />

## Note
This is a copy of [interactable](https://github.com/software-mansion/react-native-reanimated/blob/master/Example/reanimated1/Interactable.js) from [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated)

## Install

```bash
npm install --save react-native-interactable-reanimated
```

## Usage

```jsx
import React, { Component } from 'react'

import Interactable from 'react-native-interactable-reanimated'

class Example extends Component {
  render() {
    return (
        <Interactable.View
          horizontalOnly={true}
          snapPoints={[{x: 0}, {x: -200}]}
          onSnap={this.onDrawerSnap}>
    
      // the view that you wrap here will now support interactions
    
        </Interactable.View>
    )
  }
}
```

## Disclaimer

This is a copy of example app from [react-native-interactable](https://github.com/wix/react-native-interactable/tree/master/playground) project.

There are several changes made to the files here:
 - index.js has been added to list all the samples such that they can be presented as react-navigation screens
 - all imports of `react-native-interactable` has been replaced and instead `Interactable.js` is loaded from the main folder of the Example app
 - whenever `Interactable.View` is used with `Animated.Value` we replace importing `Animated` from `react-native` and import `react-native-reaminated` instead
 - in `RealChatHeads.js` we modified timing animation to include `easing` as a config parameter as `reanimated` does not currently have a default value for that
 - in `TinderCard.js` we modified rotation interpolation not to include strings in `output` array but instead is wrapped in a `concat` node to append `deg` at the end. This is necessary as reanimated version of interpolate does not support interpolating strings this way.
 - finally there is a chance some (if not all) of the files has been reformatted by prettier


## License

MIT © [nomi9995](https://github.com/nomi9995)
