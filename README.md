# vads

Vads is varknow ads implementation to show ads in banner and interstitial for React Native

## Installation

Use the [npm](https://www.npmjs.com) to install vads:

```bash
npm install vads
```

you can also use yarn:

```bash
yarn add vads
```

you also need to install @expo/vector-icons :

```bash
npm install @expo/vector-icons
```

```bash
yarn add @expo/vector-icons
```

## Usage Banner

```
import { Banner } from 'vads'

return (
...
<Banner />
...
)
```

## Usage interstitial

```
import { interstitial } from 'vads'

return (
...
<interstitial />
...
)
```

## Banner Props

| Props                | Required | Defualt | Type                 | Description                                               |
| -------------------- | -------- | ------- | -------------------- | --------------------------------------------------------- |
| width                | true     | 320     | number               | width of banner                                           |
| height               | false    | 320     | number               | height of banner                                          |
| containerProps       | false    | null    | ViewProps            | you can change banner main container props with this prop |
| containerStyles      | false    | null    | StyleProp<ViewStyle> | you can change banner main container style with this prop |
| textProps            | false    | null    | TextProps            | change banner text props                                  |
| textStyles           | false    | null    | StyleProp<TextStyle> | change banner text style                                  |
| buttonContainerStyle | false    | null    | StyleProp<ViewStyle> | change button container style                             |
| buttonTextStyles     | false    | null    | StyleProp<TextStyle> | change button text style                                  |

## interstitial Props

| Props                | Required | Defualt    | Type                  | Description                                                     |
| -------------------- | -------- | ---------- | --------------------- | --------------------------------------------------------------- |
| variant              | false    | "IMAGE"    | "IMAGE" OR "VIDEO"    | indicate interstitial variant                                   |
| width                | true     | 320        | number OR string      | width of interstitial                                           |
| height               | true     | 320        | number OR string      | height of interstitial                                          |
| imageWidth           | true     | 320        | number                | width of image OR video                                         |
| imageHeight          | true     | 320        | number                | height of image OR video                                        |
| top                  | false    | null       | number                | indicate top offset of view                                     |
| right                | false    | null       | number                | indicate right offset of view                                   |
| bottom               | false    | null       | number                | indicate bottom offset of view                                  |
| left                 | false    | null       | number                | indicate left offset of view                                    |
| containerStyles      | false    | null       | StyleProp<ViewStyle>  | you can change interstitial main container style with this prop |
| textStyles           | false    | null       | StyleProp<TextStyle>  | change interstitial text style                                  |
| imageStyles          | false    | null       | StyleProp<ImageStyle> | change Image OR Video style                                     |
| counterTextStyles    | false    | null       | StyleProp<TextStyle>  | change counter text style                                       |
| buttonContainerStyle | false    | null       | StyleProp<ViewStyle>  | change button container style                                   |
| buttonTextStyles     | false    | null       | StyleProp<TextStyle>  | change button text style                                        |
| time                 | false    | 15         | number                | indicate how long show ad                                       |
| onClose              | false    | () => void | () => void            | function to close ad                                            |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
