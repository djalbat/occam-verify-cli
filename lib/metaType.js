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
    var metaType = null;
    if (json !== null) {
        var name = json.name;
        metaType = new MetaType(name);
    }
    return metaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuXG5pbXBvcnQgeyBtZXRhVHlwZU5hbWVGcm9tTWV0YVR5cGVOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY2xhc3MgTWV0YVR5cGUge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhtZXRhVHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOYW1lRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUpLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSksXG4gICAgICAgICAgbWV0YVR5cGVOb2RlTWF0Y2hlcyA9IG1ldGFUeXBlTmFtZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBtZXRhVHlwZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgbWV0YVR5cGUgPSBuZXcgTWV0YVR5cGUobmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlTmFtZUZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlKSxcbiAgICAgICAgICBuYW1lID0gbWV0YVR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBuZXcgTWV0YVR5cGUobmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIE1ldGFUeXBlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0YVR5cGU7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCBtZXRhVHlwZSA9IG51bGw7XG5cbiAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBtZXRhVHlwZSA9IG5ldyBNZXRhVHlwZShuYW1lKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJtZXRhVHlwZUZyb21KU09OIiwiTWV0YVR5cGUiLCJuYW1lIiwiZ2V0TmFtZSIsImlzRXF1YWxUbyIsIm1ldGFUeXBlIiwiZXF1YWxUbyIsIm1hdGNoTmFtZSIsIm5hbWVNYXRjaGVzIiwibWF0Y2hNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hNZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5hbWVGcm9tTWV0YVR5cGVOb2RlIiwibWV0YVR5cGVOb2RlTWF0Y2hlcyIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwiZnJvbU1ldGFUeXBlTm9kZSIsImxvY2FsQ29udGV4dCIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXNFQSxPQUF3QjtlQUF4Qjs7SUFFZ0JBLGdCQUFnQjtlQUFoQkE7OzsyREF0RUM7b0JBRTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQUEsQUFBTUMseUJBQU47YUFBTUEsU0FDUUMsSUFBSTtnQ0FEWkQ7UUFFRixJQUFJLENBQUNDLElBQUksR0FBR0E7O2tCQUZWRDs7WUFLSkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxJQUFJO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLFFBQVE7Z0JBQ2hCLElBQU1DLFVBQVcsSUFBSSxLQUFLRDtnQkFFMUIsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVTCxJQUFJO2dCQUNaLElBQU1NLGNBQWUsSUFBSSxDQUFDTixJQUFJLEtBQUtBO2dCQUVuQyxPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsWUFBWTtnQkFDNUIsSUFBTUMsc0JBQXVCLElBQUksQ0FBQ1QsSUFBSSxLQUFLUTtnQkFFM0MsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFlBQVk7Z0JBQzVCLElBQU1ILGVBQWVJLElBQUFBLGtDQUE0QixFQUFDRCxlQUM1Q0Ysc0JBQXNCLElBQUksQ0FBQ0YsaUJBQWlCLENBQUNDLGVBQzdDSyxzQkFBc0JKLHFCQUFzQixHQUFHO2dCQUVyRCxPQUFPSTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1kLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCZSxPQUFPO29CQUNMZixNQUFBQTtnQkFDRjtnQkFFTixPQUFPZTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsV0FBVztnQkFDL0IsSUFBTSxBQUFFakIsT0FBU2UsS0FBVGYsTUFDRkcsV0FBVyxJQTlDZkosU0E4QzRCQztnQkFFOUIsT0FBT0c7WUFDVDs7O1lBRU9lLEtBQUFBO21CQUFQLFNBQU9BLGlCQUFpQlAsWUFBWSxFQUFFUSxZQUFZO2dCQUNoRCxJQUFNWCxlQUFlSSxJQUFBQSxrQ0FBNEIsRUFBQ0QsZUFDNUNYLE9BQU9RLGNBQ1BMLFdBQVcsSUF0RGZKLFNBc0Q0QkM7Z0JBRTlCLE9BQU9HO1lBQ1Q7OztXQXpESUo7O0FBNEROcUIsT0FBT0MsTUFBTSxDQUFDQyxhQUFJLEVBQUU7SUFDbEJ2QixVQUFBQTtBQUNGO0lBRUEsV0FBZUE7QUFFUixTQUFTRCxpQkFBaUJpQixJQUFJLEVBQUVFLFdBQVc7SUFDaEQsSUFBSWQsV0FBVztJQUVmLElBQUlZLFNBQVMsTUFBTTtRQUNqQixJQUFNLEFBQUVmLE9BQVNlLEtBQVRmO1FBRVJHLFdBQVcsSUFBSUosU0FBU0M7SUFDMUI7SUFFQSxPQUFPRztBQUNUIn0=