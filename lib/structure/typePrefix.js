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
var _structure = require("../structure");
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
var _default = (0, _structure.define)((_TypePrefix = /*#__PURE__*/ function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJ1Y3R1cmUvdHlwZVByZWZpeC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL3N0cnVjdHVyZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUgKGNsYXNzIFR5cGVQcmVmaXgge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIG1hdGNoVHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4TmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSB0eXBlUHJlZml4TmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeE5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZVByZWZpeFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ID0gbmV3IFR5cGVQcmVmaXgoc3RyaW5nLCBuYW1lKTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4ID0gdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZS5nZXRUeXBlUHJlZml4KCksXG4gICAgICAgICAgbmFtZSA9IHR5cGVQcmVmaXgsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlUHJlZml4KHN0cmluZywgbmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVHlwZVByZWZpeCIsInN0cmluZyIsIm5hbWUiLCJnZXRTdHJpbmciLCJnZXROYW1lIiwibWF0Y2hUeXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeE5hbWVNYXRjaGVzIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiY29udGV4dCIsInR5cGVQcmVmaXgiLCJmcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJnZXRUeXBlUHJlZml4IiwidHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFBOzs7eUJBRnVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGlCQUFNLCtCQUFFO2FBQU1DLFdBQ2ZDLE1BQU0sRUFBRUMsSUFBSTtnQ0FER0Y7UUFFekIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOzs7O1lBR2RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JDLGNBQWM7Z0JBQ2hDLElBQU1DLHdCQUF5QixJQUFJLENBQUNMLElBQUksS0FBS0k7Z0JBRTdDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTU4sT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJPLE9BQU87b0JBQ0xQLE1BQUFBO2dCQUNGO2dCQUVOLE9BQU9PO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxPQUFPO2dCQUMzQixJQUFNLEFBQUVULE9BQVNPLEtBQVRQLE1BQ0ZELFNBQVNDLE1BQ1RVLGFBQWEsSUFBSVosV0FBV0MsUUFBUUM7Z0JBRTFDLE9BQU9VO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSw4QkFBOEJDLHlCQUF5QixFQUFFSCxPQUFPO2dCQUNyRSxJQUFNQyxhQUFhRSwwQkFBMEJDLGFBQWEsSUFDcERiLE9BQU9VLFlBQ1BYLFNBQVNDLE1BQ1RjLE9BQU8sSUFBSWhCLFdBQVdDLFFBQVFDO2dCQUVwQyxPQUFPYztZQUNUOzs7O0tBakJBLDhCQUFPZCxRQUFPIn0=