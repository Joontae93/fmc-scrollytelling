// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mainScss = require("../sass/main.scss");
var _utilities = require("./modules/utilities");
var _scrollama = require("scrollama");
var _scrollamaDefault = parcelHelpers.interopDefault(_scrollama);
if (module.hot) module.hot.accept();
const graphic = (0, _utilities.querySelector)(".scroll__graphic"), chart = (0, _utilities.querySelector)(".chart"), text = (0, _utilities.querySelector)(".scroll__text"), step = (0, _utilities.querySelector)(".step", true), counter = (0, _utilities.querySelector)(".chart__counter");
var scroller = (0, _scrollamaDefault.default)();
function handleResize() {
    // 1. Update height of step elements for breathing room between steps
    const stepHeight = Math.floor(window.innerHeight * 0.75);
    step.forEach((el)=>{
        el.style.height = `${stepHeight}px`;
    });
    // 2. Update height of graphic element
    const bodyWidth = document.querySelector("body").offsetWidth;
    graphic.style.height = `${window.innerHeight}px`;
    // 3. Update width of chart by subtracting from text width
    const chartMargin = 32;
    const textWidth = text.offsetWidth;
    const chartWidth = graphic.offsetWidth - textWidth - chartMargin;
    const chartHeight = Math.floor(window.innerHeight / 2);
    chart.style.width = `${chartWidth}px`;
    chart.style.height = `${chartHeight}px`;
    // 4. Tell Scrollama to update new element dimensions
    scroller.resize();
}
/** @param {object} res element, index, direction */ function handleStepEnter(res) {
    const { element , index  } = res;
    // 1. Fade in current step
    if (!element.classList.contains("is-active")) {
        element.classList.add("is-active");
        console.log(`Active class added to Step ${index + 1}!`);
    }
    // 2. Add Stickyness
    if (!graphic.classList.contains("is-fixed")) graphic.classList.add("is-fixed");
    // 3. Update Counter
    counter.innerHTML = 1 + parseInt(counter.innerHTML);
// if (graphic.classList.contains('is-bottom'))
// 	graphic.classList.remove('is-bottom');
// const stepData = step.setAttribute('data-step');
}
function handleStepExit(res) {
    const { element , index , direction  } = res;
    console.log(`Exited Step ${index + 1}`);
// response = { direction }
// if (!graphic.classList.contains('is-bottom')) {
// 	graphic.classList.add('is-bottom');
// 	res.direction === 'down';
// }
// if (graphic.classList.contains('is-fixed'))
// 	graphic.classList.remove('is-fixed');
}
function init() {
    console.log("Ready to start!");
    // 1. Call a resize on load to update width/height/position of elements
    handleResize();
    // 2. Setup the Scrollama Instance
    scroller.setup({
        container: "#scroll",
        graphic: ".scroll__graphic",
        step: ".scroll__text .step",
        offset: 0.5
    });
    // 3. Bind Scrollama event Handlers
    scroller.onStepEnter(handleStepEnter);
    scroller.onStepExit(handleStepExit);
    window.addEventListener("resize", handleResize);
}
init();

},{"../sass/main.scss":"5Izhf","./modules/utilities":"5HnRK","scrollama":"1v521","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Izhf":[function() {},{}],"5HnRK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Shorthand for Query Selector Function.
 * @param selector {string} CSS Selector. Must include class ('.') marker if needed
 * @param  [all] {boolean} optional to call querySelectorAll.
 * @return {Element} HTML Element
 * */ parcelHelpers.export(exports, "querySelector", ()=>querySelector);
function querySelector(selector, all = false) {
    return all === false ? document.querySelector(selector) : document.querySelectorAll(selector);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1v521":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    // DOM helper functions
    // public
    function selectAll(selector, parent = document) {
        if (typeof selector === "string") return Array.from(parent.querySelectorAll(selector));
        else if (selector instanceof Element) return [
            selector
        ];
        else if (selector instanceof NodeList) return Array.from(selector);
        else if (selector instanceof Array) return selector;
        return [];
    }
    // SETUP
    function create(className) {
        const el = document.createElement("div");
        el.className = `scrollama__debug-step ${className}`;
        el.style.position = "fixed";
        el.style.left = "0";
        el.style.width = "100%";
        el.style.zIndex = "9999";
        el.style.borderTop = "2px solid black";
        el.style.borderBottom = "2px solid black";
        const p = document.createElement("p");
        p.style.position = "absolute";
        p.style.left = "0";
        p.style.height = "1px";
        p.style.width = "100%";
        p.style.borderTop = "1px dashed black";
        el.appendChild(p);
        document.body.appendChild(el);
        return el;
    }
    // UPDATE
    function update({ id , step , marginTop  }) {
        const { index , height  } = step;
        const className = `scrollama__debug-step--${id}-${index}`;
        let el = document.querySelector(`.${className}`);
        if (!el) el = create(className);
        el.style.top = `${marginTop * -1}px`;
        el.style.height = `${height}px`;
        el.querySelector("p").style.top = `${height / 2}px`;
    }
    function generateId() {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const date = Date.now();
        const result = [];
        for(let i = 0; i < 6; i += 1){
            const char = alphabet[Math.floor(Math.random() * alphabet.length)];
            result.push(char);
        }
        return `${result.join("")}${date}`;
    }
    function err$1(msg) {
        console.error(`scrollama error: ${msg}`);
    }
    function getIndex(node) {
        return +node.getAttribute("data-scrollama-index");
    }
    function createProgressThreshold(height, threshold) {
        const count = Math.ceil(height / threshold);
        const t = [];
        const ratio = 1 / count;
        for(let i = 0; i < count + 1; i += 1)t.push(i * ratio);
        return t;
    }
    function parseOffset(x) {
        if (typeof x === "string" && x.indexOf("px") > 0) {
            const v = +x.replace("px", "");
            if (!isNaN(v)) return {
                format: "pixels",
                value: v
            };
            else {
                err("offset value must be in 'px' format. Fallback to 0.5.");
                return {
                    format: "percent",
                    value: 0.5
                };
            }
        } else if (typeof x === "number" || !isNaN(+x)) {
            if (x > 1) err("offset value is greater than 1. Fallback to 1.");
            if (x < 0) err("offset value is lower than 0. Fallback to 0.");
            return {
                format: "percent",
                value: Math.min(Math.max(0, x), 1)
            };
        }
        return null;
    }
    function indexSteps(steps) {
        steps.forEach((step)=>step.node.setAttribute("data-scrollama-index", step.index));
    }
    function getOffsetTop(node) {
        const { top  } = node.getBoundingClientRect();
        const scrollTop = window.pageYOffset;
        const clientTop = document.body.clientTop || 0;
        return top + scrollTop - clientTop;
    }
    let currentScrollY;
    let comparisonScrollY;
    let direction;
    function onScroll(container) {
        const scrollTop = container ? container.scrollTop : window.pageYOffset;
        if (currentScrollY === scrollTop) return;
        currentScrollY = scrollTop;
        if (currentScrollY > comparisonScrollY) direction = "down";
        else if (currentScrollY < comparisonScrollY) direction = "up";
        comparisonScrollY = currentScrollY;
    }
    function setupScroll(container) {
        currentScrollY = 0;
        comparisonScrollY = 0;
        document.addEventListener("scroll", ()=>onScroll(container));
    }
    function scrollama() {
        let cb = {};
        let id = generateId();
        let steps = [];
        let globalOffset;
        let containerElement;
        let rootElement;
        let progressThreshold = 0;
        let isEnabled = false;
        let isProgress = false;
        let isDebug = false;
        let isTriggerOnce = false;
        let exclude = [];
        /* HELPERS */ function reset() {
            cb = {
                stepEnter: ()=>{},
                stepExit: ()=>{},
                stepProgress: ()=>{}
            };
            exclude = [];
        }
        function handleEnable(shouldEnable) {
            if (shouldEnable && !isEnabled) updateObservers();
            if (!shouldEnable && isEnabled) disconnectObservers();
            isEnabled = shouldEnable;
        }
        /* NOTIFY CALLBACKS */ function notifyProgress(element, progress) {
            const index = getIndex(element);
            const step = steps[index];
            if (progress !== undefined) step.progress = progress;
            const response = {
                element,
                index,
                progress,
                direction
            };
            if (step.state === "enter") cb.stepProgress(response);
        }
        function notifyStepEnter(element, check = true) {
            const index = getIndex(element);
            const step = steps[index];
            const response = {
                element,
                index,
                direction
            };
            step.direction = direction;
            step.state = "enter";
            // if (isPreserveOrder && check && direction !== "up")
            //   notifyOthers(index, "above");
            // if (isPreserveOrder && check && direction === "up")
            //   notifyOthers(index, "below");
            if (!exclude[index]) cb.stepEnter(response);
            if (isTriggerOnce) exclude[index] = true;
        }
        function notifyStepExit(element, check = true) {
            const index = getIndex(element);
            const step = steps[index];
            if (!step.state) return false;
            const response = {
                element,
                index,
                direction
            };
            if (isProgress) {
                if (direction === "down" && step.progress < 1) notifyProgress(element, 1);
                else if (direction === "up" && step.progress > 0) notifyProgress(element, 0);
            }
            step.direction = direction;
            step.state = "exit";
            cb.stepExit(response);
        }
        /* OBSERVERS - HANDLING */ function resizeStep([entry]) {
            const index = getIndex(entry.target);
            const step = steps[index];
            const h = entry.target.offsetHeight;
            if (h !== step.height) {
                step.height = h;
                disconnectObserver(step);
                updateStepObserver(step);
                updateResizeObserver(step);
            }
        }
        function intersectStep([entry]) {
            onScroll(containerElement);
            const { isIntersecting , target  } = entry;
            if (isIntersecting) notifyStepEnter(target);
            else notifyStepExit(target);
        }
        function intersectProgress([entry]) {
            const index = getIndex(entry.target);
            const step = steps[index];
            const { isIntersecting , intersectionRatio , target  } = entry;
            if (isIntersecting && step.state === "enter") notifyProgress(target, intersectionRatio);
        }
        /*  OBSERVERS - CREATION */ function disconnectObserver({ observers  }) {
            Object.keys(observers).map((name)=>{
                observers[name].disconnect();
            });
        }
        function disconnectObservers() {
            steps.forEach(disconnectObserver);
        }
        function updateResizeObserver(step) {
            const observer = new ResizeObserver(resizeStep);
            observer.observe(step.node);
            step.observers.resize = observer;
        }
        function updateResizeObservers() {
            steps.forEach(updateResizeObserver);
        }
        function updateStepObserver(step) {
            const h = window.innerHeight;
            const off = step.offset || globalOffset;
            const factor = off.format === "pixels" ? 1 : h;
            const offset = off.value * factor;
            const marginTop = step.height / 2 - offset;
            const marginBottom = step.height / 2 - (h - offset);
            const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;
            const root = rootElement;
            const threshold = 0.5;
            const options = {
                rootMargin,
                threshold,
                root
            };
            const observer = new IntersectionObserver(intersectStep, options);
            observer.observe(step.node);
            step.observers.step = observer;
            if (isDebug) update({
                id,
                step,
                marginTop,
                marginBottom
            });
        }
        function updateStepObservers() {
            steps.forEach(updateStepObserver);
        }
        function updateProgressObserver(step) {
            const h = window.innerHeight;
            const off = step.offset || globalOffset;
            const factor = off.format === "pixels" ? 1 : h;
            const offset = off.value * factor;
            const marginTop = -offset + step.height;
            const marginBottom = offset - h;
            const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;
            const threshold = createProgressThreshold(step.height, progressThreshold);
            const options = {
                rootMargin,
                threshold
            };
            const observer = new IntersectionObserver(intersectProgress, options);
            observer.observe(step.node);
            step.observers.progress = observer;
        }
        function updateProgressObservers() {
            steps.forEach(updateProgressObserver);
        }
        function updateObservers() {
            disconnectObservers();
            updateResizeObservers();
            updateStepObservers();
            if (isProgress) updateProgressObservers();
        }
        /* SETUP */ const S = {};
        S.setup = ({ step , parent , offset =0.5 , threshold =4 , progress =false , once =false , debug =false , container , root =null  })=>{
            setupScroll(container);
            steps = selectAll(step, parent).map((node, index)=>({
                    index,
                    direction: undefined,
                    height: node.offsetHeight,
                    node,
                    observers: {},
                    offset: parseOffset(node.dataset.offset),
                    top: getOffsetTop(node),
                    progress: 0,
                    state: undefined
                }));
            if (!steps.length) {
                err$1("no step elements");
                return S;
            }
            isProgress = progress;
            isTriggerOnce = once;
            isDebug = debug;
            progressThreshold = Math.max(1, +threshold);
            globalOffset = parseOffset(offset);
            containerElement = container;
            rootElement = root;
            reset();
            indexSteps(steps);
            handleEnable(true);
            return S;
        };
        S.enable = ()=>{
            handleEnable(true);
            return S;
        };
        S.disable = ()=>{
            handleEnable(false);
            return S;
        };
        S.destroy = ()=>{
            handleEnable(false);
            reset();
            return S;
        };
        S.resize = ()=>{
            updateObservers();
            return S;
        };
        S.offset = (x)=>{
            if (x === null || x === undefined) return globalOffset.value;
            globalOffset = parseOffset(x);
            updateObservers();
            return S;
        };
        S.onStepEnter = (f)=>{
            if (typeof f === "function") cb.stepEnter = f;
            else err$1("onStepEnter requires a function");
            return S;
        };
        S.onStepExit = (f)=>{
            if (typeof f === "function") cb.stepExit = f;
            else err$1("onStepExit requires a function");
            return S;
        };
        S.onStepProgress = (f)=>{
            if (typeof f === "function") cb.stepProgress = f;
            else err$1("onStepProgress requires a function");
            return S;
        };
        return S;
    }
    return scrollama;
});

},{}]},["ShInH","8lqZg"], "8lqZg", "parcelRequire755d")

//# sourceMappingURL=index.975ef6c8.js.map
