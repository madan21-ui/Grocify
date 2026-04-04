const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === '@clerk/expo/native') {
    return {
      filePath: require.resolve('@clerk/expo/dist/native'),
      type: 'sourceFile',
    };
  }
  // Ensure you call the default resolver.
  return context.resolveRequest(context, moduleName, platform);
};
 
module.exports = withNativeWind(config, { input: './global.css' })