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
var _necessary = require("necessary");
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
var florenceLexerFromCombinedCustomGrammar = _occamCustomGrammars.lexersUtilities.florenceLexerFromCombinedCustomGrammar, florenceParserFromCombinedCustomGrammar = _occamCustomGrammars.parsersUtilities.florenceParserFromCombinedCustomGrammar, TRACE_LEVEL = _necessary.levels.TRACE_LEVEL, DEBUG_LEVEL = _necessary.levels.DEBUG_LEVEL, INFO_LEVEL = _necessary.levels.INFO_LEVEL, WARNING_LEVEL = _necessary.levels.WARNING_LEVEL, ERROR_LEVEL = _necessary.levels.ERROR_LEVEL, FATAL_LEVEL = _necessary.levels.FATAL_LEVEL;
var ReleaseContext = /*#__PURE__*/ function() {
    function ReleaseContext(name, entries, messages1, lexer, parser, verified, customGrammar, dependencyReleaseContexts) {
        _classCallCheck(this, ReleaseContext);
        this.name = name;
        this.entries = entries;
        this.messages = messages1;
        this.lexer = lexer;
        this.parser = parser;
        this.verified = verified;
        this.customGrammar = customGrammar;
        this.dependencyReleaseContexts = dependencyReleaseContexts;
    }
    _createClass(ReleaseContext, [
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
            key: "getMessages",
            value: function getMessages() {
                return messages;
            }
        },
        {
            key: "getLexer",
            value: function getLexer() {
                return this.lexer;
            }
        },
        {
            key: "getParser",
            value: function getParser() {
                return this.parser;
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
                return this.lexer.tokenise(content);
            }
        },
        {
            key: "parse",
            value: function parse(tokens) {
                return this.parser.parse(tokens);
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                var level = TRACE_LEVEL;
                this.log(level, message);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                var level = DEBUG_LEVEL;
                this.log(level, message);
            }
        },
        {
            key: "info",
            value: function info(message) {
                var level = INFO_LEVEL;
                this.log(level, message);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                var level = WARNING_LEVEL;
                this.log(level, message);
            }
        },
        {
            key: "error",
            value: function error(message) {
                var level = ERROR_LEVEL;
                this.log(level, message);
            }
        },
        {
            key: "fatal",
            value: function fatal(message) {
                var level = FATAL_LEVEL;
                this.log(level, message);
            }
        },
        {
            key: "log",
            value: function log(level, message) {
                var filePath = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, leastLineIndex = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, greatestLineIndex = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
                message = formatMessage(message, filePath, leastLineIndex, greatestLineIndex);
                this.messages.addMessage(level, message);
            }
        },
        {
            key: "initialise",
            value: function initialise(dependencyReleaseContexts) {
                var releaseContext = this, releaseContexts = [
                    releaseContext
                ].concat(_toConsumableArray(dependencyReleaseContexts)), combinedCustomGrammar = (0, _customGrammar.combinedCustomGrammarFromReleaseContexts)(releaseContexts), florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar), florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);
                this.lexer = florenceLexer; ///
                this.parser = florenceParser; ///
                this.dependencyReleaseContexts = dependencyReleaseContexts;
            }
        }
    ]);
    return ReleaseContext;
}();
function formatMessage(message, filePath, leastLineIndex, greatestLineIndex) {
    if (filePath === null) {
        message = "".concat(message);
    } else if (leastLineIndex === greatestLineIndex) {
        var lineIndex = leastLineIndex; ///
        message = "".concat(filePath, " (").concat(lineIndex, ") - ").concat(message);
    } else {
        message = "".concat(filePath, " (").concat(leastLineIndex, "-").concat(greatestLineIndex, ") - ").concat(message);
    }
    return message;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxldmVscyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1jdXN0b20tZ3JhbW1hcnNcIjtcblxuaW1wb3J0IHsgY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hclwiO1xuXG5jb25zdCB7IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcyxcbiAgICAgIHsgVFJBQ0VfTEVWRUwsIERFQlVHX0xFVkVMLCBJTkZPX0xFVkVMLCBXQVJOSU5HX0xFVkVMLCBFUlJPUl9MRVZFTCwgRkFUQUxfTEVWRUwgfSA9IGxldmVscztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbnRyaWVzLCBtZXNzYWdlcywgbGV4ZXIsIHBhcnNlciwgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy5tZXNzYWdlcyA9IG1lc3NhZ2VzO1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgICB0aGlzLnZlcmlmaWVkID0gdmVyaWZpZWQ7XG4gICAgdGhpcy5jdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hcjtcbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0TWVzc2FnZXMoKSB7XG4gICAgcmV0dXJuIG1lc3NhZ2VzO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyO1xuICB9XG5cbiAgaXNWZXJpZmllZCgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJpZmllZDtcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIGdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGVzID0gdGhpcy5nZXRUeXBlcygpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdHlwZS5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0UmVsZWFzZU5hbWUoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gbmFtZTsgLy8vXG5cbiAgICByZXR1cm4gcmVsZWFzZU5hbWU7XG4gIH1cblxuICBpc0luaXRpYWxpc2VkKCkge1xuICAgIGNvbnN0IGluaXRpYWxpc2VkID0gKHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyAhPT0gbnVsbCk7ICAvLy9cblxuICAgIHJldHVybiBpbml0aWFsaXNlZDtcbiAgfVxuXG4gIGdldEZpbGUoZmlsZVBhdGgpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlKGZpbGVQYXRoKTsgfVxuXG4gIGdldFZlcnNpb24oKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0VmVyc2lvbigpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RGVwZW5kZW5jaWVzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldERlcGVuZGVuY2llcygpOyB9XG5cbiAgbWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pIHsgcmV0dXJuIHRoaXMuZW50cmllcy5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7IH1cblxuICBzZXRWZXJpZmllZCh2ZXJpZmllZCkge1xuICAgIHRoaXMudmVyaWZpZWQgPSB2ZXJpZmllZDtcbiAgfVxuXG4gIHRva2VuaXNlKGNvbnRlbnQpIHsgcmV0dXJuIHRoaXMubGV4ZXIudG9rZW5pc2UoY29udGVudCk7IH1cblxuICBwYXJzZSh0b2tlbnMpIHsgcmV0dXJuIHRoaXMucGFyc2VyLnBhcnNlKHRva2Vucyk7IH1cblxuICB0cmFjZShtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBUUkFDRV9MRVZFTDtcblxuICAgIHRoaXMubG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IERFQlVHX0xFVkVMO1xuXG4gICAgdGhpcy5sb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBJTkZPX0xFVkVMO1xuXG4gICAgdGhpcy5sb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgd2FybmluZyhtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBXQVJOSU5HX0xFVkVMO1xuXG4gICAgdGhpcy5sb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gRVJST1JfTEVWRUw7XG5cbiAgICB0aGlzLmxvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICBmYXRhbChtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBGQVRBTF9MRVZFTDtcblxuICAgIHRoaXMubG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGxvZyhsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGggPSBudWxsLCBsZWFzdExpbmVJbmRleCA9IG51bGwsIGdyZWF0ZXN0TGluZUluZGV4ID0gbnVsbCkge1xuICAgIG1lc3NhZ2UgPSBmb3JtYXRNZXNzYWdlKG1lc3NhZ2UsIGZpbGVQYXRoLCBsZWFzdExpbmVJbmRleCwgZ3JlYXRlc3RMaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5tZXNzYWdlcy5hZGRNZXNzYWdlKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHJlbGVhc2VDb250ZXh0cyA9IFtcbiAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0LFxuICAgICAgICAgICAgLi4uZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c1xuICAgICAgICAgIF0sXG4gICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dHMpLFxuICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hcik7XG5cbiAgICB0aGlzLmxleGVyID0gZmxvcmVuY2VMZXhlcjsgLy8vXG5cbiAgICB0aGlzLnBhcnNlciA9IGZsb3JlbmNlUGFyc2VyOyAvLy9cblxuICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0TWVzc2FnZShtZXNzYWdlLCBmaWxlUGF0aCwgbGVhc3RMaW5lSW5kZXgsIGdyZWF0ZXN0TGluZUluZGV4KSB7XG4gIGlmIChmaWxlUGF0aCA9PT0gbnVsbCkge1xuICAgIG1lc3NhZ2UgPSBgJHttZXNzYWdlfWA7XG4gIH0gZWxzZSBpZiAobGVhc3RMaW5lSW5kZXggPT09IGdyZWF0ZXN0TGluZUluZGV4KSB7XG4gICAgY29uc3QgbGluZUluZGV4ID0gbGVhc3RMaW5lSW5kZXg7IC8vL1xuXG4gICAgbWVzc2FnZSA9IGAke2ZpbGVQYXRofSAoJHtsaW5lSW5kZXh9KSAtICR7bWVzc2FnZX1gO1xuICB9IGVsc2Uge1xuICAgIG1lc3NhZ2UgPSBgJHtmaWxlUGF0aH0gKCR7bGVhc3RMaW5lSW5kZXh9LSR7Z3JlYXRlc3RMaW5lSW5kZXh9KSAtICR7bWVzc2FnZX1gO1xuICB9XG5cbiAgcmV0dXJuIG1lc3NhZ2U7XG59XG4iXSwibmFtZXMiOlsiUmVsZWFzZUNvbnRleHQiLCJmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImxleGVyc1V0aWxpdGllcyIsImZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInBhcnNlcnNVdGlsaXRpZXMiLCJUUkFDRV9MRVZFTCIsImxldmVscyIsIkRFQlVHX0xFVkVMIiwiSU5GT19MRVZFTCIsIldBUk5JTkdfTEVWRUwiLCJFUlJPUl9MRVZFTCIsIkZBVEFMX0xFVkVMIiwibmFtZSIsImVudHJpZXMiLCJtZXNzYWdlcyIsImxleGVyIiwicGFyc2VyIiwidmVyaWZpZWQiLCJjdXN0b21HcmFtbWFyIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldE5hbWUiLCJnZXRFbnRyaWVzIiwiZ2V0TWVzc2FnZXMiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImlzVmVyaWZpZWQiLCJnZXRDdXN0b21HcmFtbWFyIiwiZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwidHlwZXMiLCJnZXRUeXBlcyIsInR5cGUiLCJmaW5kIiwibWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJnZXRSZWxlYXNlTmFtZSIsInJlbGVhc2VOYW1lIiwiaXNJbml0aWFsaXNlZCIsImluaXRpYWxpc2VkIiwiZ2V0RmlsZSIsImZpbGVQYXRoIiwiZ2V0VmVyc2lvbiIsImdldEZpbGVQYXRocyIsImdldERlcGVuZGVuY2llcyIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInNob3J0ZW5lZFZlcnNpb24iLCJzZXRWZXJpZmllZCIsInRva2VuaXNlIiwiY29udGVudCIsInBhcnNlIiwidG9rZW5zIiwidHJhY2UiLCJtZXNzYWdlIiwibGV2ZWwiLCJsb2ciLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmYXRhbCIsImxlYXN0TGluZUluZGV4IiwiZ3JlYXRlc3RMaW5lSW5kZXgiLCJmb3JtYXRNZXNzYWdlIiwiYWRkTWVzc2FnZSIsImluaXRpYWxpc2UiLCJyZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0cyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMiLCJmbG9yZW5jZUxleGVyIiwiZmxvcmVuY2VQ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