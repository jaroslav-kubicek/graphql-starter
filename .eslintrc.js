module.exports = {
    extends: [
        "react-app",
        "plugin:relay/strict",
    ],
    rules: {
        "relay/generated-flow-types": "off",
    },
    plugins: ["relay"],
}
