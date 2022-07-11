import Clipboard from "@ryangjchandler/alpine-clipboard"

document.addEventListener('alpine:init', () => {
    Alpine.plugin(Clipboard);
})
