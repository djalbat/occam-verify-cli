"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReleaseContext;
    }
});
var _occamCustomGrammars = require("occam-custom-grammars");
var _customGrammar = require("../utilities/customGrammar");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var florenceLexerFromCombinedCustomGrammar = _occamCustomGrammars.lexersUtilities.florenceLexerFromCombinedCustomGrammar, florenceParserFromCombinedCustomGrammar = _occamCustomGrammars.parsersUtilities.florenceParserFromCombinedCustomGrammar;
var ReleaseContext = /*#__PURE__*/ function() {
    function ReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts) {
        _classCallCheck(this, ReleaseContext);
        this.log = log;
        this.name = name;
        this.entries = entries;
        this.callbacks = callbacks;
        this.verified = verified;
        this.customGrammar = customGrammar;
        this.florenceLexer = florenceLexer;
        this.florenceParser = florenceParser;
        this.dependencyReleaseContexts = dependencyReleaseContexts;
    }
    _createClass(ReleaseContext, [
        {
            key: "getLog",
            value: function getLog() {
                return this.log;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getEntries",
            value: function getEntries() {
                return this.entries;
            }
        },
        {
            key: "getCallbacks",
            value: function getCallbacks() {
                return this.callbacks;
            }
        },
        {
            key: "isVerified",
            value: function isVerified() {
                return this.verified;
            }
        },
        {
            key: "getCustomGrammar",
            value: function getCustomGrammar() {
                return this.customGrammar;
            }
        },
        {
            key: "getFlorenceLexer",
            value: function getFlorenceLexer() {
                return this.florenceLexer;
            }
        },
        {
            key: "getFlorenceParser",
            value: function getFlorenceParser() {
                return this.florenceParser;
            }
        },
        {
            key: "getDependencyReleaseContexts",
            value: function getDependencyReleaseContexts() {
                return this.dependencyReleaseContexts;
            }
        },
        {
            key: "getReleaseName",
            value: function getReleaseName() {
                var name = this.getName(), releaseName = name; ///
                return releaseName;
            }
        },
        {
            key: "isInitialised",
            value: function isInitialised() {
                var initialised = this.dependencyReleaseContexts !== null; ///
                return initialised;
            }
        },
        {
            key: "getFile",
            value: function getFile(filePath) {
                return this.entries.getFile(filePath);
            }
        },
        {
            key: "getVersion",
            value: function getVersion() {
                return this.entries.getVersion();
            }
        },
        {
            key: "getFilePaths",
            value: function getFilePaths() {
                return this.entries.getFilePaths();
            }
        },
        {
            key: "getDependencies",
            value: function getDependencies() {
                return this.entries.getDependencies();
            }
        },
        {
            key: "matchShortenedVersion",
            value: function matchShortenedVersion(shortenedVersion) {
                return this.entries.matchShortenedVersion(shortenedVersion);
            }
        },
        {
            key: "setVerified",
            value: function setVerified(verified) {
                this.verified = verified;
            }
        },
        {
            key: "tokenise",
            value: function tokenise(content) {
                return this.florenceLexer.tokenise(content);
            }
        },
        {
            key: "parse",
            value: function parse(tokens) {
                return this.florenceParser.parse(tokens);
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                this.log.trace(message);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                this.log.debug(message);
            }
        },
        {
            key: "info",
            value: function info(message) {
                this.log.info(message);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                this.log.warning(message);
            }
        },
        {
            key: "error",
            value: function error(message) {
                this.log.error(message);
            }
        },
        {
            key: "fatal",
            value: function fatal(message) {
                this.log.fatal(message);
            }
        },
        {
            key: "halt",
            value: function halt(filePath, leastLineIndex, greatestLineIndex) {
                this.callbacks.halt(filePath, leastLineIndex, greatestLineIndex);
            }
        },
        {
            key: "begin",
            value: function begin(filePath, leastLineIndex, greatestLineIndex) {
                this.callbacks.begin(filePath, leastLineIndex, greatestLineIndex);
            }
        },
        {
            key: "complete",
            value: function complete(filePath, leastLineIndex, greatestLineIndex) {
                this.callbacks.complete(filePath, leastLineIndex, greatestLineIndex);
            }
        },
        {
            key: "initialise",
            value: function initialise(dependencyReleaseContexts) {
                var releaseContext = this, releaseContexts = [
                    releaseContext
                ].concat(_toConsumableArray(dependencyReleaseContexts)), combinedCustomGrammar = (0, _customGrammar.combinedCustomGrammarFromReleaseContexts)(releaseContexts);
                this.florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar);
                this.florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);
                this.dependencyReleaseContexts = dependencyReleaseContexts;
            }
        }
    ]);
    return ReleaseContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1jdXN0b20tZ3JhbW1hcnNcIjtcblxuaW1wb3J0IHsgY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hclwiO1xuXG5jb25zdCB7IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIG5hbWUsIGVudHJpZXMsIGNhbGxiYWNrcywgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGZsb3JlbmNlTGV4ZXIsIGZsb3JlbmNlUGFyc2VyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICAgIHRoaXMuY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuICAgIHRoaXMudmVyaWZpZWQgPSB2ZXJpZmllZDtcbiAgICB0aGlzLmN1c3RvbUdyYW1tYXIgPSBjdXN0b21HcmFtbWFyO1xuICAgIHRoaXMuZmxvcmVuY2VMZXhlciA9IGZsb3JlbmNlTGV4ZXI7XG4gICAgdGhpcy5mbG9yZW5jZVBhcnNlciA9IGZsb3JlbmNlUGFyc2VyO1xuICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBnZXRMb2coKSB7XG4gICAgcmV0dXJuIHRoaXMubG9nO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0Q2FsbGJhY2tzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrcztcbiAgfVxuXG4gIGlzVmVyaWZpZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyaWZpZWQ7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyKCkge1xuICAgIHJldHVybiB0aGlzLmN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBnZXRGbG9yZW5jZUxleGVyKCkge1xuICAgIHJldHVybiB0aGlzLmZsb3JlbmNlTGV4ZXI7XG4gIH1cblxuICBnZXRGbG9yZW5jZVBhcnNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5mbG9yZW5jZVBhcnNlcjtcbiAgfVxuXG4gIGdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIGdldFJlbGVhc2VOYW1lKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IG5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIHJlbGVhc2VOYW1lO1xuICB9XG5cbiAgaXNJbml0aWFsaXNlZCgpIHtcbiAgICBjb25zdCBpbml0aWFsaXNlZCA9ICh0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgIT09IG51bGwpOyAgLy8vXG5cbiAgICByZXR1cm4gaW5pdGlhbGlzZWQ7XG4gIH1cblxuICBnZXRGaWxlKGZpbGVQYXRoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZShmaWxlUGF0aCk7IH1cblxuICBnZXRWZXJzaW9uKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldFZlcnNpb24oKTsgfVxuXG4gIGdldEZpbGVQYXRocygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlUGF0aHMoKTsgfVxuXG4gIGdldERlcGVuZGVuY2llcygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXREZXBlbmRlbmNpZXMoKTsgfVxuXG4gIG1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKSB7IHJldHVybiB0aGlzLmVudHJpZXMubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pOyB9XG5cbiAgc2V0VmVyaWZpZWQodmVyaWZpZWQpIHtcbiAgICB0aGlzLnZlcmlmaWVkID0gdmVyaWZpZWQ7XG4gIH1cblxuICB0b2tlbmlzZShjb250ZW50KSB7IHJldHVybiB0aGlzLmZsb3JlbmNlTGV4ZXIudG9rZW5pc2UoY29udGVudCk7IH1cblxuICBwYXJzZSh0b2tlbnMpIHsgcmV0dXJuIHRoaXMuZmxvcmVuY2VQYXJzZXIucGFyc2UodG9rZW5zKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHsgdGhpcy5sb2cudHJhY2UobWVzc2FnZSk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7IHRoaXMubG9nLmRlYnVnKG1lc3NhZ2UpOyB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7IHRoaXMubG9nLmluZm8obWVzc2FnZSk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHsgdGhpcy5sb2cud2FybmluZyhtZXNzYWdlKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UpIHsgdGhpcy5sb2cuZXJyb3IobWVzc2FnZSk7IH1cblxuICBmYXRhbChtZXNzYWdlKSB7IHRoaXMubG9nLmZhdGFsKG1lc3NhZ2UpOyB9XG5cbiAgaGFsdChmaWxlUGF0aCwgbGVhc3RMaW5lSW5kZXgsIGdyZWF0ZXN0TGluZUluZGV4KSB7IHRoaXMuY2FsbGJhY2tzLmhhbHQoZmlsZVBhdGgsIGxlYXN0TGluZUluZGV4LCBncmVhdGVzdExpbmVJbmRleCk7IH1cblxuICBiZWdpbihmaWxlUGF0aCwgbGVhc3RMaW5lSW5kZXgsIGdyZWF0ZXN0TGluZUluZGV4KSB7IHRoaXMuY2FsbGJhY2tzLmJlZ2luKGZpbGVQYXRoLCBsZWFzdExpbmVJbmRleCwgZ3JlYXRlc3RMaW5lSW5kZXgpOyB9XG5cbiAgY29tcGxldGUoZmlsZVBhdGgsIGxlYXN0TGluZUluZGV4LCBncmVhdGVzdExpbmVJbmRleCkgeyB0aGlzLmNhbGxiYWNrcy5jb21wbGV0ZShmaWxlUGF0aCwgbGVhc3RMaW5lSW5kZXgsIGdyZWF0ZXN0TGluZUluZGV4KTsgfVxuXG4gIGluaXRpYWxpc2UoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHJlbGVhc2VDb250ZXh0cyA9IFtcbiAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0LFxuICAgICAgICAgICAgLi4uZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c1xuICAgICAgICAgIF0sXG4gICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgdGhpcy5mbG9yZW5jZUxleGVyID0gZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKTtcblxuICAgIHRoaXMuZmxvcmVuY2VQYXJzZXIgPSBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKTtcblxuICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUmVsZWFzZUNvbnRleHQiLCJmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImxleGVyc1V0aWxpdGllcyIsImZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInBhcnNlcnNVdGlsaXRpZXMiLCJsb2ciLCJuYW1lIiwiZW50cmllcyIsImNhbGxiYWNrcyIsInZlcmlmaWVkIiwiY3VzdG9tR3JhbW1hciIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJnZXRMb2ciLCJnZXROYW1lIiwiZ2V0RW50cmllcyIsImdldENhbGxiYWNrcyIsImlzVmVyaWZpZWQiLCJnZXRDdXN0b21HcmFtbWFyIiwiZ2V0RmxvcmVuY2VMZXhlciIsImdldEZsb3JlbmNlUGFyc2VyIiwiZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldFJlbGVhc2VOYW1lIiwicmVsZWFzZU5hbWUiLCJpc0luaXRpYWxpc2VkIiwiaW5pdGlhbGlzZWQiLCJnZXRGaWxlIiwiZmlsZVBhdGgiLCJnZXRWZXJzaW9uIiwiZ2V0RmlsZVBhdGhzIiwiZ2V0RGVwZW5kZW5jaWVzIiwibWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwic2hvcnRlbmVkVmVyc2lvbiIsInNldFZlcmlmaWVkIiwidG9rZW5pc2UiLCJjb250ZW50IiwicGFyc2UiLCJ0b2tlbnMiLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmYXRhbCIsImhhbHQiLCJsZWFzdExpbmVJbmRleCIsImdyZWF0ZXN0TGluZUluZGV4IiwiYmVnaW4iLCJjb21wbGV0ZSIsImluaXRpYWxpc2UiLCJyZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0cyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O21DQVA2Qjs2QkFFTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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