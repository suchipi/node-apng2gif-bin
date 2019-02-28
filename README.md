# `apng2gif-bin`

Module that provides an [`apng2gif`](http://apng2gif.sourceforge.net/) binary.
Works on Windows, Mac, and Linux.

## Usage

```js
const binPath = require("apng2gif-bin");
// A path to a binary appropriate for your platform.

console.log(binPath); // eg "/usr/local/lib/node_modules/apng2gif/bin/macosx/apng2gif"

// You can use child_process to run it.
const spawn = require("child_process").spawn;
const child = spawn(binPath, ["anim.png", "anim.gif"]);
```

## License

```
JavaScript module Copyright (c) 2019 Suchipi <me@suchipi.com>
apng2gif binaries Copyright (c) 2010-2015 Max Stepin <maxst@users.sourceforge.net>

License: zlib license
```
