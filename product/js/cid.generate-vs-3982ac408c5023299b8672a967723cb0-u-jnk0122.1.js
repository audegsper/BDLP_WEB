// external_id
if (typeof CRYPT === 'undefined') {
var CRYPT = {
    SHA256: function (key, successCallback, errorCallback) {
        if (window.location.protocol === "https:" && window.crypto && window.crypto.subtle) {
            this._SHA256_WEB_CRYPTO_API(key, successCallback, function () {
                    this._SHA256_CRYPTO_JS(key, successCallback, function () {
                            this._SHA256_NATIVE_JS(key, successCallback, errorCallback);
                        }.bind(this)
                    );
                }.bind(this)
            );
        } else {
            this._SHA256_CRYPTO_JS(key, successCallback, function () {
                    this._SHA256_NATIVE_JS(key, successCallback, errorCallback);
                }.bind(this)
            );
        }
    },

    _SHA256_WEB_CRYPTO_API: function (key, successCallback, errorCallback) {
        try {
            const encoder = new TextEncoder();
            const data = encoder.encode(key);
            window.crypto.subtle.digest('SHA-256', data).then(function (hashBuffer) {
                    const hashArray = Array.from(new Uint8Array(hashBuffer));
                    const hash = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
                    successCallback(hash);
                }
            ).catch(function (error) {
                    errorCallback('SHA-256 Error - _SHA256_WEB_CRYPTO_API : ' + error);
                }
            );
        } catch (error) {
            errorCallback('SHA-256 Error -_SHA256_WEB_CRYPTO_API : ' + error);
        }
    },

    _SHA256_CRYPTO_JS: function (key, successCallback, errorCallback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '/app/Eclog/js/crypto-js.min.js';
        script.onload = function () {
            try {
                const hash = CryptoJS.SHA256(key);
                successCallback(hash.toString(CryptoJS.enc.Hex));
            } catch (error) {
                errorCallback('SHA-256 Error - _SHA256_CRYPTO_JS : ' + error);
            }
        };
        document.head.appendChild(script);
    },

    _SHA256_NATIVE_JS: function (key, successCallback, errorCallback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '/app/Eclog/js/crypto-sha256-native.min.js';
        script.onload = function () {
            try {
                const hash = SHA256(key);
                successCallback(hash);
            } catch (error) {
                errorCallback('SHA-256 Error - _SHA256_NATIVE_JS : ' + error);
            }
        };
        document.head.appendChild(script);
    }
};
}

if (typeof ECLOG === 'undefined') {
var ECLOG = {
    EXTERNAL_ID: {
        _config: {
            external_id: "fb_external_id", cookiePath: "/",
        }, _sid: function () {
            return (
                Math.random().toString(36).substring(2).toUpperCase() + Math.random().toString(36).substring(2).toUpperCase() + Math.random().toString(36).substring(2).toUpperCase()
            );
        }, _getParam: function (name) {
            const scriptTag = document.currentScript;
            const scriptUrl = scriptTag.src;
            const urlParams = new URLSearchParams(scriptUrl.split('?')[1]);
            return urlParams.get(name);
        }, _getDomain: function () {
            const domainMatch = document.URL.match(/https?:\/\/(www\.)?([^/]*)/);

            if (domainMatch && domainMatch[2]) {
                return "." + domainMatch[2];
            }
        }, _getCookie: function () {
            const value = document.cookie.match('(^|;) ?' + this._config.external_id + '=([^;]*)(;|$)');
            return value ? value[2] : null;
        }, _setCookie: function (val) {
            const domain = this._getDomain();
            document.cookie = this._config.external_id + "=" + val + ";path=" + this._config.cookiePath + ";domain=" + domain;
        },

        chk: function (u, callback) {
            var currentDomain = window.location.hostname;
            if (currentDomain === 'cafe24.com') { // cafe24.com 에서는 처리제외.
                if (callback) {
                    callback(null, null);
                }
                return;
            }
            if (!this._getCookie()) {
                if (!u) {
                    u = this._getParam('u')
                }
                const key = u + '.' + this._sid();

                CRYPT.SHA256(key, function (hashkey) {
                        this._setCookie(hashkey);
                        if (callback) {
                            callback(null, hashkey);
                        }
                    }.bind(this), function (error) {
                        console.error(error);
                        if (callback) {
                            callback(error, null);
                        }
                    }.bind(this)
                );
            } else {
                if (callback) {
                    callback(null, this._getCookie());
                }
            }
        }
    },
    EVENT_ID: {
        _config: {
            event_id: "fb_event_id",
            cookiePath: "/",
        },
        _getCookie: function () {
             const value = document.cookie.match('(^|;) ?' + this._config.event_id + '=([^;]*)(;|$)');
             return value ? value[2] : null;
         },
        _setCookie: function (val) {
            const domain = ECLOG.EXTERNAL_ID._getDomain();
            document.cookie = this._config.event_id + "=" + val + ";path=" + this._config.cookiePath + ";domain=" + domain;
        },
        chk: function (u, callback) {
            var currentDomain = window.location.hostname;
            if (currentDomain === 'cafe24.com') { // cafe24.com 에서는 처리제외.
                if (callback) {
                    callback(null, null);
                }
                return;
            }
            var pathRoleMeta = document.querySelector('meta[name="path_role"]');
            var path_role = pathRoleMeta ? pathRoleMeta.getAttribute('content') : null;
            var referrer = document.referrer;
            var currentURL = window.location.href;
            var surlOrderFlag = false;
            if (path_role === "ORDER_ORDERFORM") { // 바로주문 체크
                if (currentURL.includes('/surl/O/') || !referrer || referrer.indexOf(currentDomain) === -1) {
                    surlOrderFlag = true;
                }
            }
            if (surlOrderFlag || (path_role !== "ORDER_ORDERFORM" && path_role !== "ORDER_ORDERRESULT") || path_role === null) {
                try {
                    const uParam = ECLOG.EXTERNAL_ID._getParam('u');
                    if (uParam) { // 초기 js 내부
                        const hashkey = 'event_id.' + uParam + '.' + ECLOG.EXTERNAL_ID._sid();
                        this._setCookie(hashkey);
                    } else {
                        handleCallback();
                    }
                } catch (error) {
                    handleCallback();
                }
            } else {
                handleCallback();
            }

            function handleCallback() {
                if (callback) {
                    callback(null, ECLOG.EVENT_ID._getCookie());
                }
            }
        }
    }
};
}
ECLOG.EXTERNAL_ID.chk();
ECLOG.EVENT_ID.chk();


// cid generate
(function(top, window) {

    function findTop(t, s)
    {
        try {
            if (t.document) {
                return t;
            }
        } catch (e) {
            try {
                if (s.parent.document) {
                    var p = s;
                    while (p) {
                        try {
                            if (p.document) {
                                s = p;
                                p = p.parent;
                            }
                        } catch (e) {
                            return s;
                        }
                    }
                }
            } catch (e) {
                return s;
            }
        }
    }
    top = findTop(top, window);

    var eclogPID = 'eclog';
    if (top != window && window.location.href.indexOf('PREVIEW_SDE') == -1 && typeof top[eclogPID] !== 'undefined') {
        window[eclogPID] = top[eclogPID];
        return;
    }

    var cook = {
        get: function() {
            var cookieStr = document.cookie;
            if (cookieStr == '') return false;

            var cookies = cookieStr.split('; ');
            var findCookie = false;
            for (var i = 0; i < cookies.length; i++) {
                if (cookies[i].substring(0, 4) != 'CID=') {
                    continue;
                }
                findCookie = cookies[i].substring(4);
            }
            return findCookie;
        }
    };

    var cid = {
        key: null,
        generate: function() {
            this.key = cook.get();
            if (this.key === false) {
                this.key = this.getHash();
            }
        },
        getCid: function() {
            return this.key;
        },
        getHash: function() {
            var d = new Date().getTime();
            var sUid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, function(c) {
                var r = (d + Math.random()*16)%16 | 0;
                d = Math.floor(d/16);
                return (c=='x' ? r : (r&0x3|0x8)).toString(16);
            });
            return 'CID' + sUid;
        }
    };

    cid.generate();

    top[eclogPID] = cid;
    window[eclogPID] = cid;

})(top, window);