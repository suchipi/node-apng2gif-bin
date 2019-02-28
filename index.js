const os = require("os");
const path = require("path");

const fromRoot = (...parts) => path.join(__dirname, ...parts);

const platform = os.platform();
if (platform === "linux") {
  module.exports = fromRoot("bin", "linux", "apng2gif");
} else if (platform === "darwin") {
  module.exports = fromRoot("bin", "macosx", "apng2gif");
} else if (platform === "win32") {
  module.exports = fromRoot("bin", "win32", "apng2gif.exe");
} else {
  throw new Error(
    `Unsupported platform: '${platform}'. No apng2gif binary available.`
  );
}
