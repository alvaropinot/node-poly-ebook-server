"use strict";if(exports.base64=!0,exports.array=!0,exports.string=!0,exports.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,exports.nodebuffer="undefined"!=typeof Buffer,exports.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)exports.blob=!1;else{var buffer=new ArrayBuffer(0);try{exports.blob=0===new Blob([buffer],{type:"application/zip"}).size}catch(e){try{var Builder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,builder=new Builder;builder.append(buffer),exports.blob=0===builder.getBlob("application/zip").size}catch(e){exports.blob=!1}}}exports.nodestream=!!require("./nodejs/NodejsStreamOutputAdapter").prototype;