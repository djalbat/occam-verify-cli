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
var _type = /*#__PURE__*/ _interopRequireDefault(require("./type"));
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
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var name = json.name;
                var metaType = json.metaType;
                json = metaType; ///
                metaType = MetaType.fromJSONAndFileContext(json, fileContext);
                var metaTypeName = metaType.getName();
                metaType = fileContext.findTypeByTypeName(metaTypeName); ///
                var metavariable = new Metavariable(name, metaType);
                return metavariable;
            }
        },
        {
            key: "fromNameAndMetaType",
            value: function fromNameAndMetaType(name, metaType) {
                var metavariable = new Metavariable(name, metaType);
                return metavariable;
            }
        }
    ]);
    return Metavariable;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUeXBlIGZyb20gXCIuL3R5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgbWV0YVR5cGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTmFtZSA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNOYW1lO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGFUeXBlSlNPTiA9IHRoaXMubWV0YVR5cGUudG9KU09OKHRva2VucyksXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIG1ldGFUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgYXNTdHJpbmcodG9rZW5zKSB7XG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gdGhpcy5tZXRhVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gYCR7dGhpcy5uYW1lfToke21ldGFUeXBlTmFtZX1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgbGV0IHsgbWV0YVR5cGUgfSA9IGpzb247XG5cbiAgICBqc29uID0gbWV0YVR5cGU7ICAvLy9cblxuICAgIG1ldGFUeXBlID0gTWV0YVR5cGUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICBtZXRhVHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShtZXRhVHlwZU5hbWUpOyAvLy9cblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUobmFtZSwgbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZE1ldGFUeXBlKG5hbWUsIG1ldGFUeXBlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShuYW1lLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIk1ldGF2YXJpYWJsZSIsIm5hbWUiLCJtZXRhVHlwZSIsImdldE5hbWUiLCJnZXRNZXRhVHlwZSIsIm1hdGNoTmFtZSIsIm1hdGNoZXNOYW1lIiwidG9KU09OIiwidG9rZW5zIiwibWV0YVR5cGVKU09OIiwianNvbiIsImFzU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwic3RyaW5nIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwiTWV0YVR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJtZXRhdmFyaWFibGUiLCJmcm9tTmFtZUFuZE1ldGFUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozt5REFGSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVGLElBQUEsQUFBTUEsNkJBQU47YUFBTUEsYUFDUEMsSUFBSSxFQUFFQyxRQUFROzhCQURQRjtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2lCQUhDRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWM7Z0JBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUosSUFBSSxFQUFFO2dCQUNkLElBQU1LLGNBQWUsSUFBSSxDQUFDTCxJQUFJLEtBQUtBO2dCQUVuQyxPQUFPSztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU0sRUFBRTtnQkFDYixJQUFNQyxlQUFlLElBQUksQ0FBQ1AsUUFBUSxDQUFDSyxNQUFNLENBQUNDLFNBQ3BDUCxPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQkMsV0FBV08sY0FDWEMsT0FBTztvQkFDTFQsTUFBQUE7b0JBQ0FDLFVBQUFBO2dCQUNGO2dCQUVOLE9BQU9RO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0gsTUFBTSxFQUFFO2dCQUNmLElBQU1JLGVBQWUsSUFBSSxDQUFDVixRQUFRLENBQUNDLE9BQU8sSUFDcENVLFNBQVMsQUFBQyxHQUFlRCxPQUFiLElBQUksQ0FBQ1gsSUFBSSxFQUFDLEtBQWdCLE9BQWJXO2dCQUUvQixPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkosSUFBSSxFQUFFSyxXQUFXLEVBQUU7Z0JBQy9DLElBQU0sQUFBRWQsT0FBU1MsS0FBVFQ7Z0JBRVIsSUFBSSxBQUFFQyxXQUFhUSxLQUFiUjtnQkFFTlEsT0FBT1IsVUFBVyxHQUFHO2dCQUVyQkEsV0FBV2MsU0FBU0Ysc0JBQXNCLENBQUNKLE1BQU1LO2dCQUVqRCxJQUFNSCxlQUFlVixTQUFTQyxPQUFPO2dCQUVyQ0QsV0FBV2EsWUFBWUUsa0JBQWtCLENBQUNMLGVBQWUsR0FBRztnQkFFNUQsSUFBTU0sZUFBZSxJQXBESmxCLGFBb0RxQkMsTUFBTUM7Z0JBRTVDLE9BQU9nQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CbEIsSUFBSSxFQUFFQyxRQUFRLEVBQUU7Z0JBQ3pDLElBQU1nQixlQUFlLElBMURKbEIsYUEwRHFCQyxNQUFNQztnQkFFNUMsT0FBT2dCO1lBQ1Q7OztXQTdEbUJsQiJ9