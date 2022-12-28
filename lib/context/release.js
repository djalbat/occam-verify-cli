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
            key: "findTypeByTypeName",
            value: function findTypeByTypeName(typeName) {
                var types = this.getTypes(), type = types.find(function(type) {
                    var matches = type.matchTypeName(typeName);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return type;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1jdXN0b20tZ3JhbW1hcnNcIjtcblxuaW1wb3J0IHsgY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hclwiO1xuXG5jb25zdCB7IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIG5hbWUsIGVudHJpZXMsIGNhbGxiYWNrcywgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGZsb3JlbmNlTGV4ZXIsIGZsb3JlbmNlUGFyc2VyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICAgIHRoaXMuY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuICAgIHRoaXMudmVyaWZpZWQgPSB2ZXJpZmllZDtcbiAgICB0aGlzLmN1c3RvbUdyYW1tYXIgPSBjdXN0b21HcmFtbWFyO1xuICAgIHRoaXMuZmxvcmVuY2VMZXhlciA9IGZsb3JlbmNlTGV4ZXI7XG4gICAgdGhpcy5mbG9yZW5jZVBhcnNlciA9IGZsb3JlbmNlUGFyc2VyO1xuICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBnZXRMb2coKSB7XG4gICAgcmV0dXJuIHRoaXMubG9nO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0Q2FsbGJhY2tzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrcztcbiAgfVxuXG4gIGlzVmVyaWZpZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyaWZpZWQ7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyKCkge1xuICAgIHJldHVybiB0aGlzLmN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBnZXRGbG9yZW5jZUxleGVyKCkge1xuICAgIHJldHVybiB0aGlzLmZsb3JlbmNlTGV4ZXI7XG4gIH1cblxuICBnZXRGbG9yZW5jZVBhcnNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5mbG9yZW5jZVBhcnNlcjtcbiAgfVxuXG4gIGdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGVzID0gdGhpcy5nZXRUeXBlcygpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdHlwZS5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0UmVsZWFzZU5hbWUoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gbmFtZTsgLy8vXG5cbiAgICByZXR1cm4gcmVsZWFzZU5hbWU7XG4gIH1cblxuICBpc0luaXRpYWxpc2VkKCkge1xuICAgIGNvbnN0IGluaXRpYWxpc2VkID0gKHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyAhPT0gbnVsbCk7ICAvLy9cblxuICAgIHJldHVybiBpbml0aWFsaXNlZDtcbiAgfVxuXG4gIGdldEZpbGUoZmlsZVBhdGgpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlKGZpbGVQYXRoKTsgfVxuXG4gIGdldFZlcnNpb24oKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0VmVyc2lvbigpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RGVwZW5kZW5jaWVzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldERlcGVuZGVuY2llcygpOyB9XG5cbiAgbWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pIHsgcmV0dXJuIHRoaXMuZW50cmllcy5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7IH1cblxuICBzZXRWZXJpZmllZCh2ZXJpZmllZCkge1xuICAgIHRoaXMudmVyaWZpZWQgPSB2ZXJpZmllZDtcbiAgfVxuXG4gIHRva2VuaXNlKGNvbnRlbnQpIHsgcmV0dXJuIHRoaXMuZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KTsgfVxuXG4gIHBhcnNlKHRva2VucykgeyByZXR1cm4gdGhpcy5mbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMpOyB9XG5cbiAgdHJhY2UobWVzc2FnZSkgeyB0aGlzLmxvZy50cmFjZShtZXNzYWdlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHsgdGhpcy5sb2cuZGVidWcobWVzc2FnZSk7IH1cblxuICBpbmZvKG1lc3NhZ2UpIHsgdGhpcy5sb2cuaW5mbyhtZXNzYWdlKTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSkgeyB0aGlzLmxvZy53YXJuaW5nKG1lc3NhZ2UpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSkgeyB0aGlzLmxvZy5lcnJvcihtZXNzYWdlKTsgfVxuXG4gIGZhdGFsKG1lc3NhZ2UpIHsgdGhpcy5sb2cuZmF0YWwobWVzc2FnZSk7IH1cblxuICBoYWx0KGZpbGVQYXRoLCBsZWFzdExpbmVJbmRleCwgZ3JlYXRlc3RMaW5lSW5kZXgpIHsgdGhpcy5jYWxsYmFja3MuaGFsdChmaWxlUGF0aCwgbGVhc3RMaW5lSW5kZXgsIGdyZWF0ZXN0TGluZUluZGV4KTsgfVxuXG4gIGJlZ2luKGZpbGVQYXRoLCBsZWFzdExpbmVJbmRleCwgZ3JlYXRlc3RMaW5lSW5kZXgpIHsgdGhpcy5jYWxsYmFja3MuYmVnaW4oZmlsZVBhdGgsIGxlYXN0TGluZUluZGV4LCBncmVhdGVzdExpbmVJbmRleCk7IH1cblxuICBjb21wbGV0ZShmaWxlUGF0aCwgbGVhc3RMaW5lSW5kZXgsIGdyZWF0ZXN0TGluZUluZGV4KSB7IHRoaXMuY2FsbGJhY2tzLmNvbXBsZXRlKGZpbGVQYXRoLCBsZWFzdExpbmVJbmRleCwgZ3JlYXRlc3RMaW5lSW5kZXgpOyB9XG5cbiAgaW5pdGlhbGlzZShkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRzID0gW1xuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHQsXG4gICAgICAgICAgICAuLi5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICB0aGlzLmZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpO1xuXG4gICAgdGhpcy5mbG9yZW5jZVBhcnNlciA9IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpO1xuXG4gICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSZWxlYXNlQ29udGV4dCIsImZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibGV4ZXJzVXRpbGl0aWVzIiwiZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwicGFyc2Vyc1V0aWxpdGllcyIsImxvZyIsIm5hbWUiLCJlbnRyaWVzIiwiY2FsbGJhY2tzIiwidmVyaWZpZWQiLCJjdXN0b21HcmFtbWFyIiwiZmxvcmVuY2VMZXhlciIsImZsb3JlbmNlUGFyc2VyIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldExvZyIsImdldE5hbWUiLCJnZXRFbnRyaWVzIiwiZ2V0Q2FsbGJhY2tzIiwiaXNWZXJpZmllZCIsImdldEN1c3RvbUdyYW1tYXIiLCJnZXRGbG9yZW5jZUxleGVyIiwiZ2V0RmxvcmVuY2VQYXJzZXIiLCJnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJ0eXBlcyIsImdldFR5cGVzIiwidHlwZSIsImZpbmQiLCJtYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsImdldFJlbGVhc2VOYW1lIiwicmVsZWFzZU5hbWUiLCJpc0luaXRpYWxpc2VkIiwiaW5pdGlhbGlzZWQiLCJnZXRGaWxlIiwiZmlsZVBhdGgiLCJnZXRWZXJzaW9uIiwiZ2V0RmlsZVBhdGhzIiwiZ2V0RGVwZW5kZW5jaWVzIiwibWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwic2hvcnRlbmVkVmVyc2lvbiIsInNldFZlcmlmaWVkIiwidG9rZW5pc2UiLCJjb250ZW50IiwicGFyc2UiLCJ0b2tlbnMiLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmYXRhbCIsImhhbHQiLCJsZWFzdExpbmVJbmRleCIsImdyZWF0ZXN0TGluZUluZGV4IiwiYmVnaW4iLCJjb21wbGV0ZSIsImluaXRpYWxpc2UiLCJyZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0cyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O21DQVA2Qjs2QkFFTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpELElBQU0sQUFBRUMseUNBQTJDQyxvQ0FBZSxDQUExREQsd0NBQ0YsQUFBRUUsMENBQTRDQyxxQ0FBZ0IsQ0FBNUREO0FBRU8sSUFBQSxBQUFNSCwrQkFBTjthQUFNQSxlQUNQSyxHQUFHLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLGNBQWMsRUFBRUMseUJBQXlCOzhCQUR6R2I7UUFFakIsSUFBSSxDQUFDSyxHQUFHLEdBQUdBO1FBQ1gsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQTtRQUN0QixJQUFJLENBQUNDLHlCQUF5QixHQUFHQTs7aUJBVmhCYjs7WUFhbkJjLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTO2dCQUNQLE9BQU8sSUFB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