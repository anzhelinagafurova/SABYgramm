import React from 'react';
import Push from 'push.js'

const Test = () => {
    Push.config({
        serviceWorker: './sw.js', // Sets a custom service worker script
        fallback: function(payload) {
            // Code that executes on browsers with no notification support
            // "payload" is an object containing the 
            // title, body, tag, and icon of the notification 
            Push.create("Hello world!", {
                body: "How's it hangin'?",
                icon: '/icon.png',
                timeout: 10000,
                onClick: function () {
                    window.focus();
                    this.close();
                }
            });
        }
    });

        Push.create("Hello world!", {
            body: "How's it hangin'?",
            icon: '/icon.png',
            timeout: 10000,
            onClick: function () {
                window.focus();
                this.close();
            }
        });
}
export default Test;