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
var _dom = require("../dom");
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
var TypePrefix = /*#__PURE__*/ function() {
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
}();
_define_property(TypePrefix, "name", "TypePrefix");
var _default = (0, _dom.domAssigned)(TypePrefix);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdHlwZVByZWZpeC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNsYXNzIFR5cGVQcmVmaXgge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIG1hdGNoVHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4TmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSB0eXBlUHJlZml4TmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeE5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZVByZWZpeFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ID0gbmV3IFR5cGVQcmVmaXgoc3RyaW5nLCBuYW1lKTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4ID0gdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZS5nZXRUeXBlUHJlZml4KCksXG4gICAgICAgICAgbmFtZSA9IHR5cGVQcmVmaXgsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlUHJlZml4KHN0cmluZywgbmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChUeXBlUHJlZml4KTtcbiJdLCJuYW1lcyI6WyJUeXBlUHJlZml4Iiwic3RyaW5nIiwibmFtZSIsImdldFN0cmluZyIsImdldE5hbWUiLCJtYXRjaFR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4TmFtZU1hdGNoZXMiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjb250ZXh0IiwidHlwZVByZWZpeCIsImZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsImdldFR5cGVQcmVmaXgiLCJ0eXBlIiwiZG9tQXNzaWduZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFEQTs7O2VBQUE7OzttQkFuRDRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBQSxBQUFNQSwyQkFBTjthQUFNQSxXQUNRQyxNQUFNLEVBQUVDLElBQUk7Z0NBRHBCRjtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBSFZGOztZQU1KRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CQyxjQUFjO2dCQUNoQyxJQUFNQyx3QkFBeUIsSUFBSSxDQUFDTCxJQUFJLEtBQUtJO2dCQUU3QyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1OLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCTyxPQUFPO29CQUNMUCxNQUFBQTtnQkFDRjtnQkFFTixPQUFPTztZQUNUOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsT0FBTztnQkFDM0IsSUFBTSxBQUFFVCxPQUFTTyxLQUFUUCxNQUNGRCxTQUFTQyxNQUNUVSxhQUFhLElBbENqQlosV0FrQ2dDQyxRQUFRQztnQkFFMUMsT0FBT1U7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDhCQUE4QkMseUJBQXlCLEVBQUVILE9BQU87Z0JBQ3JFLElBQU1DLGFBQWFFLDBCQUEwQkMsYUFBYSxJQUNwRGIsT0FBT1UsWUFDUFgsU0FBU0MsTUFDVGMsT0FBTyxJQTNDWGhCLFdBMkMwQkMsUUFBUUM7Z0JBRXBDLE9BQU9jO1lBQ1Q7OztXQTlDSWhCOztBQTZCSixpQkE3QklBLFlBNkJHRSxRQUFPO0lBb0JoQixXQUFlZSxJQUFBQSxnQkFBVyxFQUFDakIifQ==