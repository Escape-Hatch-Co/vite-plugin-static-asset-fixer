# Vite Static Asset Fixer

Vite plugin to transform asset paths when developing locally.

## Usage

vite.config.js
```js
import staticAssetFixer from 'vite-plugin-static-asset-fixer'

export default {
  // ...
  plugins: [
    staticAssetFixer({
      /* options */
    })
  ],
}
```

## Options

### dir

Type: `String`<br>
Default: `assets`

Local static asset directory

***

### host

Type: `String`<br>
Default: `localhost`

The host name of your local dev environment.

***

### https

Type: `Boolean`<br>
Default: `true`

The protocol of your local dev environment.

***

### port

Type: `Number`<br>
Default: `3000`

The port number of your local dev environment.

***

## License
[MIT](/LICENSE)
