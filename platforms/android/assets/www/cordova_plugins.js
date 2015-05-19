cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.google.cordova.admob/www/AdMob.js",
        "id": "com.google.cordova.admob.AdMob",
        "clobbers": [
            "window.AdMob"
        ]
    },
    {
        "file": "plugins/cordova.plugin.Brightness/www/brightness.js",
        "id": "cordova.plugin.Brightness.Brightness",
        "clobbers": [
            "cordova.plugins.brightness"
        ]
    },
    {
        "file": "plugins/nl.x-services.plugins.insomnia/www/Insomnia.js",
        "id": "nl.x-services.plugins.insomnia.Insomnia",
        "clobbers": [
            "window.plugins.insomnia"
        ]
    },
    {
        "file": "plugins/org.pushandplay.cordova.apprate/www/AppRate.js",
        "id": "org.pushandplay.cordova.apprate.AppRate",
        "clobbers": [
            "AppRate"
        ]
    },
    {
        "file": "plugins/org.pushandplay.cordova.apprate/www/locales.js",
        "id": "org.pushandplay.cordova.apprate.locales",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.statusbar/www/statusbar.js",
        "id": "org.apache.cordova.statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/android/notification.js",
        "id": "org.apache.cordova.dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.globalization/www/GlobalizationError.js",
        "id": "org.apache.cordova.globalization.GlobalizationError",
        "clobbers": [
            "window.GlobalizationError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.globalization/www/globalization.js",
        "id": "org.apache.cordova.globalization.globalization",
        "clobbers": [
            "navigator.globalization"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.google.cordova.admob": "2.7.4",
    "cordova.plugin.Brightness": "0.1.0",
    "nl.x-services.plugins.insomnia": "4.0.1",
    "org.apache.cordova.geolocation": "0.3.12",
    "org.pushandplay.cordova.apprate": "1.1.7",
    "org.apache.cordova.statusbar": "0.1.10",
    "com.rjfun.cordova.extension": "1.0.6",
    "com.google.playservices": "19.0.0",
    "org.apache.cordova.dialogs": "0.3.0",
    "org.apache.cordova.globalization": "0.3.4",
    "org.apache.cordova.inappbrowser": "0.6.0"
}
// BOTTOM OF METADATA
});