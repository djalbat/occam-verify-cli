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
            key: "toJSON",
            value: function toJSON() {
                var name = this.name, json = {
                    name: name
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var name = json.name, metaType = new MetaType(name);
                return metaType;
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuXG5pbXBvcnQgeyBtZXRhVHlwZU5hbWVGcm9tTWV0YVR5cGVOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY2xhc3MgTWV0YVR5cGUge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhtZXRhVHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOYW1lRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUpLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSksXG4gICAgICAgICAgbWV0YVR5cGVOb2RlTWF0Y2hlcyA9IG1ldGFUeXBlTmFtZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBtZXRhVHlwZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgbWV0YVR5cGUgPSBuZXcgTWV0YVR5cGUobmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlTmFtZUZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlKSxcbiAgICAgICAgICBuYW1lID0gbWV0YVR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBuZXcgTWV0YVR5cGUobmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIE1ldGFUeXBlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0YVR5cGU7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCBtZXRhVHlwZTtcblxuICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgbWV0YVR5cGUgPSBuZXcgTWV0YVR5cGUobmFtZSk7XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuIl0sIm5hbWVzIjpbIm1ldGFUeXBlRnJvbUpTT04iLCJNZXRhVHlwZSIsIm5hbWUiLCJnZXROYW1lIiwiaXNFcXVhbFRvIiwibWV0YVR5cGUiLCJlcXVhbFRvIiwibWF0Y2hOYW1lIiwibmFtZU1hdGNoZXMiLCJtYXRjaE1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZU1hdGNoZXMiLCJtYXRjaE1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlTmFtZUZyb21NZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5vZGVNYXRjaGVzIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJmcm9tTWV0YVR5cGVOb2RlIiwibG9jYWxDb250ZXh0IiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBc0VBLE9BQXdCO2VBQXhCOztJQUVnQkEsZ0JBQWdCO2VBQWhCQTs7OzJEQXRFQztvQkFFNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBQSxBQUFNQyx5QkFBTjthQUFNQSxTQUNRQyxJQUFJO2dDQURaRDtRQUVGLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBRlZEOztZQUtKRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELElBQUk7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsUUFBUTtnQkFDaEIsSUFBTUMsVUFBVyxJQUFJLEtBQUtEO2dCQUUxQixPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVMLElBQUk7Z0JBQ1osSUFBTU0sY0FBZSxJQUFJLENBQUNOLElBQUksS0FBS0E7Z0JBRW5DLE9BQU9NO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxZQUFZO2dCQUM1QixJQUFNQyxzQkFBdUIsSUFBSSxDQUFDVCxJQUFJLEtBQUtRO2dCQUUzQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsWUFBWTtnQkFDNUIsSUFBTUgsZUFBZUksSUFBQUEsa0NBQTRCLEVBQUNELGVBQzVDRixzQkFBc0IsSUFBSSxDQUFDRixpQkFBaUIsQ0FBQ0MsZUFDN0NLLHNCQUFzQkoscUJBQXNCLEdBQUc7Z0JBRXJELE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWQsT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJlLE9BQU87b0JBQ0xmLE1BQUFBO2dCQUNGO2dCQUVOLE9BQU9lO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxXQUFXO2dCQUMvQixJQUFNLEFBQUVqQixPQUFTZSxLQUFUZixNQUNGRyxXQUFXLElBOUNmSixTQThDNEJDO2dCQUU5QixPQUFPRztZQUNUOzs7WUFFT2UsS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCUCxZQUFZLEVBQUVRLFlBQVk7Z0JBQ2hELElBQU1YLGVBQWVJLElBQUFBLGtDQUE0QixFQUFDRCxlQUM1Q1gsT0FBT1EsY0FDUEwsV0FBVyxJQXREZkosU0FzRDRCQztnQkFFOUIsT0FBT0c7WUFDVDs7O1dBekRJSjs7QUE0RE5xQixPQUFPQyxNQUFNLENBQUNDLGFBQUksRUFBRTtJQUNsQnZCLFVBQUFBO0FBQ0Y7SUFFQSxXQUFlQTtBQUVSLFNBQVNELGlCQUFpQmlCLElBQUksRUFBRUUsV0FBVztJQUNoRCxJQUFJZDtJQUVKLElBQU0sQUFBRUgsT0FBU2UsS0FBVGY7SUFFUkcsV0FBVyxJQUFJSixTQUFTQztJQUV4QixPQUFPRztBQUNUIn0=