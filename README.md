# videojs-player-tracker-reporter

Track the plays and display on video player (WORK IN PROGRESS)

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Installation

- [Installation](#installation)
- [Usage](#usage)
  - [`<script>` Tag](#script-tag)
  - [Browserify/CommonJS](#browserifycommonjs)
  - [RequireJS/AMD](#requirejsamd)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
## Installation

```sh
npm install --save videojs-player-tracker-reporter
```

## Usage

To include videojs-player-tracker-reporter on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-player-tracker-reporter.min.js"></script>
<script>
  var player = videojs('my-video');

  player.playerTrackerReporter({
        params:{
          videoKey: "video key / id"
        },
        get_tracking_url: "tracking api url",
        put_tracking_url: "tracking api url"
      });
</script>
```

### Browserify/CommonJS

When using with Browserify, install videojs-player-tracker-reporter via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('videojs-player-tracker-reporter');

var player = videojs('my-video');

player.playerTrackerReporter({
        params:{
          videoKey: "video key / id"
        },
        get_tracking_url: "tracking api url",
        put_tracking_url: "tracking api url"
      });
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-player-tracker-reporter'], function(videojs) {
  var player = videojs('my-video');

  player.playerTrackerReporter({{
        params:{
          videoKey: "video key / id"
        },
        get_tracking_url: "tracking api url",
        put_tracking_url: "tracking api url"
      });
});
```

## License

MIT. Copyright (c) Tim Bielawski


[videojs]: http://videojs.com/
