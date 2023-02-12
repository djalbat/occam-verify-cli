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
var _kinds = require("./kinds");
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
                var metaTypeJSON = this.metaType.toJSON(tokens), kind = _kinds.METAVARIABLE_KIND, name = this.name, metaType = metaTypeJSON, json = {
                    kind: kind,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZXRhVHlwZSBmcm9tIFwiLi9tZXRhVHlwZVwiO1xuXG5pbXBvcnQgeyBNRVRBVkFSSUFCTEVfS0lORCB9IGZyb20gXCIuL2tpbmRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGF2YXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIG1ldGFUeXBlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRNZXRhVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhVHlwZTtcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc05hbWUgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzTmFtZTtcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBtZXRhVHlwZUpTT04gPSB0aGlzLm1ldGFUeXBlLnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIGtpbmQgPSBNRVRBVkFSSUFCTEVfS0lORCxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIG1ldGFUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgYXNTdHJpbmcodG9rZW5zKSB7XG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gdGhpcy5tZXRhVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gYCR7dGhpcy5uYW1lfToke21ldGFUeXBlTmFtZX1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZE1ldGFUeXBlKG5hbWUsIG1ldGFUeXBlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShuYW1lLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBsZXQgeyBtZXRhVHlwZSB9ID0ganNvbjtcblxuICAgIGpzb24gPSBtZXRhVHlwZTsgIC8vL1xuXG4gICAgbWV0YVR5cGUgPSBNZXRhVHlwZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIG1ldGFUeXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7IC8vL1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShuYW1lLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIk1ldGF2YXJpYWJsZSIsIm5hbWUiLCJtZXRhVHlwZSIsImdldE5hbWUiLCJnZXRNZXRhVHlwZSIsIm1hdGNoTmFtZSIsIm1hdGNoZXNOYW1lIiwidG9KU09OIiwidG9rZW5zIiwibWV0YVR5cGVKU09OIiwia2luZCIsIk1FVEFWQVJJQUJMRV9LSU5EIiwianNvbiIsImFzU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwic3RyaW5nIiwiZnJvbU5hbWVBbmRNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZSIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsIk1ldGFUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozs2REFKQTtxQkFFYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQixJQUFBLEFBQU1BLDZCQUFOO2FBQU1BLGFBQ1BDLElBQUksRUFBRUMsUUFBUTs4QkFEUEY7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztpQkFIQ0Y7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVKLElBQUksRUFBRTtnQkFDZCxJQUFNSyxjQUFlLElBQUksQ0FBQ0wsSUFBSSxLQUFLQTtnQkFFbkMsT0FBT0s7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNLEVBQUU7Z0JBQ2IsSUFBTUMsZUFBZSxJQUFJLENBQUNQLFFBQVEsQ0FBQ0ssTUFBTSxDQUFDQyxTQUNwQ0UsT0FBT0Msd0JBQWlCLEVBQ3hCVixPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQkMsV0FBV08sY0FDWEcsT0FBTztvQkFDTEYsTUFBQUE7b0JBQ0FULE1BQUFBO29CQUNBQyxVQUFBQTtnQkFDRjtnQkFFTixPQUFPVTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNMLE1BQU0sRUFBRTtnQkFDZixJQUFNTSxlQUFlLElBQUksQ0FBQ1osUUFBUSxDQUFDQyxPQUFPLElBQ3BDWSxTQUFTLEFBQUMsR0FBZUQsT0FBYixJQUFJLENBQUNiLElBQUksRUFBQyxLQUFnQixPQUFiYTtnQkFFL0IsT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxvQkFBb0JmLElBQUksRUFBRUMsUUFBUSxFQUFFO2dCQUN6QyxJQUFNZSxlQUFlLElBMUNKakIsYUEwQ3FCQyxNQUFNQztnQkFFNUMsT0FBT2U7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1Qk4sSUFBSSxFQUFFTyxXQUFXLEVBQUU7Z0JBQy9DLElBQU0sQUFBRWxCLE9BQVNXLEtBQVRYO2dCQUVSLElBQUksQUFBRUMsV0FBYVUsS0FBYlY7Z0JBRU5VLE9BQU9WLFVBQVcsR0FBRztnQkFFckJBLFdBQVdrQixpQkFBUSxDQUFDRixzQkFBc0IsQ0FBQ04sTUFBTU87Z0JBRWpELElBQU1MLGVBQWVaLFNBQVNDLE9BQU87Z0JBRXJDRCxXQUFXaUIsWUFBWUUsa0JBQWtCLENBQUNQLGVBQWUsR0FBRztnQkFFNUQsSUFBTUcsZUFBZSxJQTVESmpCLGFBNERxQkMsTUFBTUM7Z0JBRTVDLE9BQU9lO1lBQ1Q7OztXQS9EbUJqQiJ9