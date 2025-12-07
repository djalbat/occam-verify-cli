"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _ontology = require("../ontology");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var _TypePrefix;
var _default = (0, _ontology.define)((_TypePrefix = /*#__PURE__*/ function() {
    function TypePrefix(string, name) {
        _class_call_check(this, TypePrefix);
        this.string = string;
        this.name = name;
    }
    _create_class(TypePrefix, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "matchTypePrefixName",
            value: function matchTypePrefixName(typePrefixName) {
                var typePrefixNameMatches = this.name === typePrefixName;
                return typePrefixNameMatches;
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
            value: function fromJSON(json, context) {
                var name = json.name, string = name, typePrefix = new TypePrefix(string, name);
                return typePrefix;
            }
        },
        {
            key: "fromTypePrefixDeclarationNode",
            value: function fromTypePrefixDeclarationNode(typePrefixDeclarationNode, context) {
                var typePrefix = typePrefixDeclarationNode.getTypePrefix(), name = typePrefix, string = name, type = new TypePrefix(string, name);
                return type;
            }
        }
    ]);
    return TypePrefix;
}(), _define_property(_TypePrefix, "name", "TypePrefix"), _TypePrefix));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS90eXBlUHJlZml4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lIChjbGFzcyBUeXBlUHJlZml4IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBuYW1lKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBtYXRjaFR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeE5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gdHlwZVByZWZpeE5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVQcmVmaXhcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeCA9IG5ldyBUeXBlUHJlZml4KHN0cmluZywgbmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZVByZWZpeCgpLFxuICAgICAgICAgIG5hbWUgPSB0eXBlUHJlZml4LCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZVByZWZpeChzdHJpbmcsIG5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlR5cGVQcmVmaXgiLCJzdHJpbmciLCJuYW1lIiwiZ2V0U3RyaW5nIiwiZ2V0TmFtZSIsIm1hdGNoVHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhOYW1lTWF0Y2hlcyIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImNvbnRleHQiLCJ0eXBlUHJlZml4IiwiZnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwiZ2V0VHlwZVByZWZpeCIsInR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBQTs7O3dCQUZ1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSwrQkFBRTthQUFNQyxXQUNmQyxNQUFNLEVBQUVDLElBQUk7Z0NBREdGO1FBRXpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CQyxjQUFjO2dCQUNoQyxJQUFNQyx3QkFBeUIsSUFBSSxDQUFDTCxJQUFJLEtBQUtJO2dCQUU3QyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1OLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCTyxPQUFPO29CQUNMUCxNQUFBQTtnQkFDRjtnQkFFTixPQUFPTztZQUNUOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsT0FBTztnQkFDM0IsSUFBTSxBQUFFVCxPQUFTTyxLQUFUUCxNQUNGRCxTQUFTQyxNQUNUVSxhQUFhLElBQUlaLFdBQVdDLFFBQVFDO2dCQUUxQyxPQUFPVTtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsOEJBQThCQyx5QkFBeUIsRUFBRUgsT0FBTztnQkFDckUsSUFBTUMsYUFBYUUsMEJBQTBCQyxhQUFhLElBQ3BEYixPQUFPVSxZQUNQWCxTQUFTQyxNQUNUYyxPQUFPLElBQUloQixXQUFXQyxRQUFRQztnQkFFcEMsT0FBT2M7WUFDVDs7OztLQWpCQSw4QkFBT2QsUUFBTyJ9