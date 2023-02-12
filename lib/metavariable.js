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
                debugger;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGF2YXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIG1ldGFUeXBlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRNZXRhVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhVHlwZTtcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc05hbWUgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzTmFtZTtcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IHRoaXMubWV0YVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3RoaXMubmFtZX06JHttZXRhVHlwZU5hbWV9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVBbmRNZXRhVHlwZShuYW1lLCBtZXRhVHlwZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUobmFtZSwgbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJNZXRhdmFyaWFibGUiLCJuYW1lIiwibWV0YVR5cGUiLCJnZXROYW1lIiwiZ2V0TWV0YVR5cGUiLCJtYXRjaE5hbWUiLCJtYXRjaGVzTmFtZSIsImFzU3RyaW5nIiwidG9rZW5zIiwibWV0YVR5cGVOYW1lIiwic3RyaW5nIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImpzb24iLCJmaWxlQ29udGV4dCIsImZyb21OYW1lQW5kTWV0YVR5cGUiLCJtZXRhdmFyaWFibGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsNkJBQU47YUFBTUEsYUFDUEMsSUFBSSxFQUFFQyxRQUFROzhCQURQRjtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2lCQUhDRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWM7Z0JBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUosSUFBSSxFQUFFO2dCQUNkLElBQU1LLGNBQWUsSUFBSSxDQUFDTCxJQUFJLEtBQUtBO2dCQUVuQyxPQUFPSztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE1BQU0sRUFBRTtnQkFDZixJQUFNQyxlQUFlLElBQUksQ0FBQ1AsUUFBUSxDQUFDQyxPQUFPLElBQ3BDTyxTQUFTLEFBQUMsR0FBZUQsT0FBYixJQUFJLENBQUNSLElBQUksRUFBQyxLQUFnQixPQUFiUTtnQkFFL0IsT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJDLElBQUksRUFBRUMsV0FBVyxFQUFFO2dCQUMvQyxRQUFRO1lBQ1Y7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxvQkFBb0JiLElBQUksRUFBRUMsUUFBUSxFQUFFO2dCQUN6QyxJQUFNYSxlQUFlLElBaENKZixhQWdDcUJDLE1BQU1DO2dCQUU1QyxPQUFPYTtZQUNUOzs7V0FuQ21CZiJ9