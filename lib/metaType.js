"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    metaTypeFromJSON: function() {
        return metaTypeFromJSON;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _name = require("./utilities/name");
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
var MetaType = /*#__PURE__*/ function() {
    function MetaType(name) {
        _class_call_check(this, MetaType);
        this.name = name;
    }
    _create_class(MetaType, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(metaType) {
                var equalTo = this === metaType;
                return equalTo;
            }
        },
        {
            key: "match",
            value: function match(metaType) {
                var equalToMetaType = this.isEqualTo(metaType), matches = equalToMetaType; ///
                return matches;
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
            key: "matchMetaTypeName",
            value: function matchMetaTypeName(metaTypeName) {
                var metaTypeNameMatches = this.name === metaTypeName;
                return metaTypeNameMatches;
            }
        },
        {
            key: "matchMetaTypeNode",
            value: function matchMetaTypeNode(metaTypeNode) {
                var metaTypeName = (0, _name.metaTypeNameFromMetaTypeNode)(metaTypeNode), metaTypeNameMatches = this.matchMetaTypeName(metaTypeName), metaTypeNodeMatches = metaTypeNameMatches; ///
                return metaTypeNodeMatches;
            }
        },
        {
            key: "asString",
            value: function asString(tokens) {
                var string = "".concat(this.name);
                return string;
            }
        }
    ], [
        {
            key: "fromMetaTypeNode",
            value: function fromMetaTypeNode(metaTypeNode, localContext) {
                var metaTypeName = (0, _name.metaTypeNameFromMetaTypeNode)(metaTypeNode), name = metaTypeName, metaType = new MetaType(name);
                return metaType;
            }
        }
    ]);
    return MetaType;
}();
Object.assign(_shim.default, {
    MetaType: MetaType
});
var _default = MetaType;
function metaTypeFromJSON(json, fileContext) {
    var metaType;
    var name = json.name;
    metaType = new MetaType(name);
    return metaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuXG5pbXBvcnQgeyBtZXRhVHlwZU5hbWVGcm9tTWV0YVR5cGVOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY2xhc3MgTWV0YVR5cGUge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhtZXRhVHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaChtZXRhVHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG9NZXRhVHlwZSA9IHRoaXMuaXNFcXVhbFRvKG1ldGFUeXBlKSxcbiAgICAgICAgICBtYXRjaGVzID0gZXF1YWxUb01ldGFUeXBlOyAgLy8vXG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBuYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBtZXRhVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZU5hbWVGcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSksXG4gICAgICAgICAgbWV0YVR5cGVOYW1lTWF0Y2hlcyA9IHRoaXMubWF0Y2hNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSxcbiAgICAgICAgICBtZXRhVHlwZU5vZGVNYXRjaGVzID0gbWV0YVR5cGVOYW1lTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBhc1N0cmluZyh0b2tlbnMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlTmFtZUZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlKSxcbiAgICAgICAgICBuYW1lID0gbWV0YVR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBuZXcgTWV0YVR5cGUobmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIE1ldGFUeXBlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0YVR5cGU7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCBtZXRhVHlwZTtcblxuICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgbWV0YVR5cGUgPSBuZXcgTWV0YVR5cGUobmFtZSk7XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuIl0sIm5hbWVzIjpbIm1ldGFUeXBlRnJvbUpTT04iLCJNZXRhVHlwZSIsIm5hbWUiLCJnZXROYW1lIiwiaXNFcXVhbFRvIiwibWV0YVR5cGUiLCJlcXVhbFRvIiwibWF0Y2giLCJlcXVhbFRvTWV0YVR5cGUiLCJtYXRjaGVzIiwibWF0Y2hOYW1lIiwibmFtZU1hdGNoZXMiLCJtYXRjaE1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZU1hdGNoZXMiLCJtYXRjaE1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlTmFtZUZyb21NZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5vZGVNYXRjaGVzIiwiYXNTdHJpbmciLCJ0b2tlbnMiLCJzdHJpbmciLCJmcm9tTWV0YVR5cGVOb2RlIiwibG9jYWxDb250ZXh0IiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSIsImpzb24iLCJmaWxlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBbUVBLE9BQXdCO2VBQXhCOztJQUVnQkEsZ0JBQWdCO2VBQWhCQTs7OzJEQW5FQztvQkFFNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBQSxBQUFNQyx5QkFBTjthQUFNQSxTQUNRQyxJQUFJO2dDQURaRDtRQUVGLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBRlZEOztZQUtKRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELElBQUk7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsUUFBUTtnQkFDaEIsSUFBTUMsVUFBVyxJQUFJLEtBQUtEO2dCQUUxQixPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1GLFFBQVE7Z0JBQ1osSUFBTUcsa0JBQWtCLElBQUksQ0FBQ0osU0FBUyxDQUFDQyxXQUNqQ0ksVUFBVUQsaUJBQWtCLEdBQUc7Z0JBRXJDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVVIsSUFBSTtnQkFDWixJQUFNUyxjQUFlLElBQUksQ0FBQ1QsSUFBSSxLQUFLQTtnQkFFbkMsT0FBT1M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFlBQVk7Z0JBQzVCLElBQU1DLHNCQUF1QixJQUFJLENBQUNaLElBQUksS0FBS1c7Z0JBRTNDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxZQUFZO2dCQUM1QixJQUFNSCxlQUFlSSxJQUFBQSxrQ0FBNEIsRUFBQ0QsZUFDNUNGLHNCQUFzQixJQUFJLENBQUNGLGlCQUFpQixDQUFDQyxlQUM3Q0ssc0JBQXNCSixxQkFBc0IsR0FBRztnQkFFckQsT0FBT0k7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxNQUFNO2dCQUNiLElBQU1DLFNBQVMsQUFBQyxHQUFZLE9BQVYsSUFBSSxDQUFDbkIsSUFBSTtnQkFFM0IsT0FBT21CO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCTixZQUFZLEVBQUVPLFlBQVk7Z0JBQ2hELElBQU1WLGVBQWVJLElBQUFBLGtDQUE0QixFQUFDRCxlQUM1Q2QsT0FBT1csY0FDUFIsV0FBVyxJQW5EZkosU0FtRDRCQztnQkFFOUIsT0FBT0c7WUFDVDs7O1dBdERJSjs7QUF5RE51QixPQUFPQyxNQUFNLENBQUNDLGFBQUksRUFBRTtJQUNsQnpCLFVBQUFBO0FBQ0Y7SUFFQSxXQUFlQTtBQUVSLFNBQVNELGlCQUFpQjJCLElBQUksRUFBRUMsV0FBVztJQUNoRCxJQUFJdkI7SUFFSixJQUFNLEFBQUVILE9BQVN5QixLQUFUekI7SUFFUkcsV0FBVyxJQUFJSixTQUFTQztJQUV4QixPQUFPRztBQUNUIn0=