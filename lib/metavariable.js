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
var _metaType = /*#__PURE__*/ _interop_require_default(require("./metaType"));
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Metavariable = /*#__PURE__*/ function() {
    function Metavariable(name, metaType) {
        _class_call_check(this, Metavariable);
        this.name = name;
        this.metaType = metaType;
    }
    _create_class(Metavariable, [
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
                var nameMatches = this.name === name;
                return nameMatches;
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
                metaType = fileContext.findMetaTypeByMetaTypeName(metaTypeName); ///
                var metavariable = new Metavariable(name, metaType);
                return metavariable;
            }
        }
    ]);
    return Metavariable;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZXRhVHlwZSBmcm9tIFwiLi9tZXRhVHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhdmFyaWFibGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBtZXRhVHlwZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbWV0YVR5cGVKU09OID0gdGhpcy5tZXRhVHlwZS50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgbWV0YVR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBhc1N0cmluZyh0b2tlbnMpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSB0aGlzLm1ldGFUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9OiR7bWV0YVR5cGVOYW1lfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kTWV0YVR5cGUobmFtZSwgbWV0YVR5cGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKG5hbWUsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGxldCB7IG1ldGFUeXBlIH0gPSBqc29uO1xuXG4gICAganNvbiA9IG1ldGFUeXBlOyAgLy8vXG5cbiAgICBtZXRhVHlwZSA9IE1ldGFUeXBlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgbWV0YVR5cGUgPSBmaWxlQ29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpOyAvLy9cblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUobmFtZSwgbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJNZXRhdmFyaWFibGUiLCJuYW1lIiwibWV0YVR5cGUiLCJnZXROYW1lIiwiZ2V0TWV0YVR5cGUiLCJtYXRjaE5hbWUiLCJuYW1lTWF0Y2hlcyIsInRvSlNPTiIsInRva2VucyIsIm1ldGFUeXBlSlNPTiIsImpzb24iLCJhc1N0cmluZyIsIm1ldGFUeXBlTmFtZSIsInN0cmluZyIsImZyb21OYW1lQW5kTWV0YVR5cGUiLCJtZXRhdmFyaWFibGUiLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJNZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsrREFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVOLElBQUEsQUFBTUEsNkJBQU47YUFBTUEsYUFDUEMsSUFBSSxFQUFFQyxRQUFRO2dDQURQRjtRQUVqQixJQUFJLENBQUNDLE9BQU9BO1FBQ1osSUFBSSxDQUFDQyxXQUFXQTs7a0JBSENGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRjtZQUNkOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRjtZQUNkOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVKLElBQUk7Z0JBQ1osSUFBTUssY0FBZSxJQUFJLENBQUNMLFNBQVNBO2dCQUVuQyxPQUFPSztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU07Z0JBQ1gsSUFBTUMsZUFBZSxJQUFJLENBQUNQLFNBQVNLLE9BQU9DLFNBQ3BDUCxPQUFPLElBQUksQ0FBQ0EsTUFDWkMsV0FBV08sY0FDWEMsT0FBTztvQkFDTFQsTUFBQUE7b0JBQ0FDLFVBQUFBO2dCQUNGO2dCQUVOLE9BQU9RO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0gsTUFBTTtnQkFDYixJQUFNSSxlQUFlLElBQUksQ0FBQ1YsU0FBU0MsV0FDN0JVLFNBQVMsQUFBQyxHQUFlRCxPQUFiLElBQUksQ0FBQ1gsTUFBSyxLQUFnQixPQUFiVztnQkFFL0IsT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxvQkFBb0JiLElBQUksRUFBRUMsUUFBUTtnQkFDdkMsSUFBTWEsZUFBZSxJQXhDSmYsYUF3Q3FCQyxNQUFNQztnQkFFNUMsT0FBT2E7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1Qk4sSUFBSSxFQUFFTyxXQUFXO2dCQUM3QyxJQUFNLEFBQUVoQixPQUFTUyxLQUFUVDtnQkFFUixJQUFJLEFBQUVDLFdBQWFRLEtBQWJSO2dCQUVOUSxPQUFPUixVQUFXLEdBQUc7Z0JBRXJCQSxXQUFXZ0Isa0JBQVNGLHVCQUF1Qk4sTUFBTU87Z0JBRWpELElBQU1MLGVBQWVWLFNBQVNDO2dCQUU5QkQsV0FBV2UsWUFBWUUsMkJBQTJCUCxlQUFlLEdBQUc7Z0JBRXBFLElBQU1HLGVBQWUsSUExREpmLGFBMERxQkMsTUFBTUM7Z0JBRTVDLE9BQU9hO1lBQ1Q7OztXQTdEbUJmIn0=