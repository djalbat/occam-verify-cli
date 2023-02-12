"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Metavariable;
    }
});
var _metaType = /*#__PURE__*/ _interopRequireDefault(require("./metaType"));
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Metavariable = /*#__PURE__*/ function() {
    function Metavariable(name, metaType) {
        _classCallCheck(this, Metavariable);
        this.name = name;
        this.metaType = metaType;
    }
    _createClass(Metavariable, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getMetaType",
            value: function getMetaType() {
                return this.metaType;
            }
        },
        {
            key: "matchName",
            value: function matchName(name) {
                var matchesName = this.name === name;
                return matchesName;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var metaTypeJSON = this.metaType.toJSON(tokens), name = this.name, metaType = metaTypeJSON, json = {
                    name: name,
                    metaType: metaType
                };
                return json;
            }
        },
        {
            key: "asString",
            value: function asString(tokens) {
                var metaTypeName = this.metaType.getName(), string = "".concat(this.name, ":").concat(metaTypeName);
                return string;
            }
        }
    ], [
        {
            key: "fromNameAndMetaType",
            value: function fromNameAndMetaType(name, metaType) {
                var metavariable = new Metavariable(name, metaType);
                return metavariable;
            }
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var name = json.name;
                var metaType = json.metaType;
                json = metaType; ///
                metaType = _metaType.default.fromJSONAndFileContext(json, fileContext);
                var metaTypeName = metaType.getName();
                metaType = fileContext.findTypeByTypeName(metaTypeName); ///
                var metavariable = new Metavariable(name, metaType);
                return metavariable;
            }
        }
    ]);
    return Metavariable;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZXRhVHlwZSBmcm9tIFwiLi9tZXRhVHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhdmFyaWFibGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBtZXRhVHlwZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNOYW1lID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc05hbWU7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbWV0YVR5cGVKU09OID0gdGhpcy5tZXRhVHlwZS50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgbWV0YVR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBhc1N0cmluZyh0b2tlbnMpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSB0aGlzLm1ldGFUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9OiR7bWV0YVR5cGVOYW1lfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kTWV0YVR5cGUobmFtZSwgbWV0YVR5cGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKG5hbWUsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGxldCB7IG1ldGFUeXBlIH0gPSBqc29uO1xuXG4gICAganNvbiA9IG1ldGFUeXBlOyAgLy8vXG5cbiAgICBtZXRhVHlwZSA9IE1ldGFUeXBlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgbWV0YVR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUobWV0YVR5cGVOYW1lKTsgLy8vXG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKG5hbWUsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTWV0YXZhcmlhYmxlIiwibmFtZSIsIm1ldGFUeXBlIiwiZ2V0TmFtZSIsImdldE1ldGFUeXBlIiwibWF0Y2hOYW1lIiwibWF0Y2hlc05hbWUiLCJ0b0pTT04iLCJ0b2tlbnMiLCJtZXRhVHlwZUpTT04iLCJqc29uIiwiYXNTdHJpbmciLCJtZXRhVHlwZU5hbWUiLCJzdHJpbmciLCJmcm9tTmFtZUFuZE1ldGFUeXBlIiwibWV0YXZhcmlhYmxlIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwiTWV0YVR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzZEQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU4sSUFBQSxBQUFNQSw2QkFBTjthQUFNQSxhQUNQQyxJQUFJLEVBQUVDLFFBQVE7OEJBRFBGO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7aUJBSENGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYztnQkFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVSixJQUFJLEVBQUU7Z0JBQ2QsSUFBTUssY0FBZSxJQUFJLENBQUNMLElBQUksS0FBS0E7Z0JBRW5DLE9BQU9LO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFO2dCQUNiLElBQU1DLGVBQWUsSUFBSSxDQUFDUCxRQUFRLENBQUNLLE1BQU0sQ0FBQ0MsU0FDcENQLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCQyxXQUFXTyxjQUNYQyxPQUFPO29CQUNMVCxNQUFBQTtvQkFDQUMsVUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT1E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTSCxNQUFNLEVBQUU7Z0JBQ2YsSUFBTUksZUFBZSxJQUFJLENBQUNWLFFBQVEsQ0FBQ0MsT0FBTyxJQUNwQ1UsU0FBUyxBQUFDLEdBQWVELE9BQWIsSUFBSSxDQUFDWCxJQUFJLEVBQUMsS0FBZ0IsT0FBYlc7Z0JBRS9CLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CYixJQUFJLEVBQUVDLFFBQVEsRUFBRTtnQkFDekMsSUFBTWEsZUFBZSxJQXhDSmYsYUF3Q3FCQyxNQUFNQztnQkFFNUMsT0FBT2E7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1Qk4sSUFBSSxFQUFFTyxXQUFXLEVBQUU7Z0JBQy9DLElBQU0sQUFBRWhCLE9BQVNTLEtBQVRUO2dCQUVSLElBQUksQUFBRUMsV0FBYVEsS0FBYlI7Z0JBRU5RLE9BQU9SLFVBQVcsR0FBRztnQkFFckJBLFdBQVdnQixpQkFBUSxDQUFDRixzQkFBc0IsQ0FBQ04sTUFBTU87Z0JBRWpELElBQU1MLGVBQWVWLFNBQVNDLE9BQU87Z0JBRXJDRCxXQUFXZSxZQUFZRSxrQkFBa0IsQ0FBQ1AsZUFBZSxHQUFHO2dCQUU1RCxJQUFNRyxlQUFlLElBMURKZixhQTBEcUJDLE1BQU1DO2dCQUU1QyxPQUFPYTtZQUNUOzs7V0E3RG1CZiJ9