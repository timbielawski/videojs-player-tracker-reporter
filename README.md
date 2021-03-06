# videojs-player-tracker-reporter

Tracks events and can display views on the videojs toolbar using your own API.

The plugin will fire a GET on init for a configured getTrackingUrl

Depending of what event is configured see examples, the plugin will fire a PUT request to
a configured putTrackingUrl

The params in the config allows you to set request params, in the example below the params
will get generate the following URL with the getTrackingUrl set as http://api.myvideservice.com

http://api.myvideoservice.com?videoKey=abcxyz

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
          videoKey: "abcxyz"
        },
        getTrackingUrl: "tracking api url",
        putTrackingUrl: "tracking api url",
        playerShowTracking: false,
        contentPlayTracking: true,
        videoStartTracking: false,
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
          videoKey: "abcxyz"
        },
        getTrackingUrl: "tracking api url",
        putTrackingUrl: "tracking api url",
        playerShowTracking: false,
        contentPlayTracking: true,
        videoStartTracking: false,
      });
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-player-tracker-reporter'], function(videojs) {
  var player = videojs('my-video');

  player.playerTrackerReporter({{
        params:{
          videoKey: "abcxyz"
        },
        getTrackingUrl: "tracking api url",
        putTrackingUrl: "tracking api url",
        playerShowTracking: false,
        contentPlayTracking: true,
        videoStartTracking: false,
      });
});
```

## License

MIT. Copyright (c) Tim Bielawski


[videojs]: http://videojs.com/
