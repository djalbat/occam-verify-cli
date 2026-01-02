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
var _elements = require("../elements");
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
var _Property;
var _default = (0, _elements.define)((_Property = /*#__PURE__*/ function() {
    function Property(string, node, name, nominalTypeName) {
        _class_call_check(this, Property);
        this.string = string;
        this.node = node;
        this.name = name;
        this.nominalTypeName = nominalTypeName;
    }
    _create_class(Property, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getNominalTypeName",
            value: function getNominalTypeName() {
                return this.nominalTypeName;
            }
        },
        {
            key: "matchPropertyName",
            value: function matchPropertyName(propertyName) {
                var propertyNameMatches = this.name === propertyName;
                return propertyNameMatches;
            }
        },
        {
            key: "matchNominalTypeName",
            value: function matchNominalTypeName(nominalTypeName) {
                var nominalTypeNameMatches = this.nominalTypeName === nominalTypeName;
                return nominalTypeNameMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var name = this.name, nominalTypeName = this.nominalTypeName, json = {
                    name: name,
                    nominalTypeName: nominalTypeName
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var name = json.name, nominalTypeName = json.nominalTypeName, string = name, property = new Property(string, name, nominalTypeName);
                return property;
            }
        },
        {
            key: "fromPropertyRelationNode",
            value: function fromPropertyRelationNode(propertyRelationNode, context) {
                var propertyNode = propertyRelationNode.getPropertyNode(), property = propertyFromPropertyNode(propertyNode, context);
                return property;
            }
        },
        {
            key: "fromPropertyDeclarationNode",
            value: function fromPropertyDeclarationNode(propertyDeclarationNode, context) {
                var propertyName = propertyDeclarationNode.getPropertyName(), nominalTypeName = propertyDeclarationNode.getNominalTypeName(), name = propertyName, string = name, property = new Property(string, name, nominalTypeName);
                return property;
            }
        }
    ]);
    return Property;
}(), _define_property(_Property, "name", "Property"), _Property));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb3BlcnR5IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCBuYW1lLCBub21pbmFsVHlwZU5hbWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ub21pbmFsVHlwZU5hbWUgPSBub21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0Tm9taW5hbFR5cGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIG1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSkge1xuICAgIGNvbnN0IHByb3BlcnR5TmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBwcm9wZXJ0eU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWVNYXRjaGVzID0gKHRoaXMubm9taW5hbFR5cGVOYW1lID09PSBub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIG5vbWluYWxUeXBlTmFtZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdGhpcy5ub21pbmFsVHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9wZXJ0eVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lLCBub21pbmFsVHlwZU5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgc3RyaW5nID0gbmFtZSwgLy8vXG4gICAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHkoc3RyaW5nLCBuYW1lLCBub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHByb3BlcnR5Tm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLmdldFByb3BlcnR5Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvcGVydHlOYW1lID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGUuZ2V0UHJvcGVydHlOYW1lKCksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgbmFtZSA9IHByb3BlcnR5TmFtZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShzdHJpbmcsIG5hbWUsIG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb3BlcnR5Iiwic3RyaW5nIiwibm9kZSIsIm5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0TmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsIm1hdGNoUHJvcGVydHlOYW1lIiwicHJvcGVydHlOYW1lIiwicHJvcGVydHlOYW1lTWF0Y2hlcyIsIm1hdGNoTm9taW5hbFR5cGVOYW1lIiwibm9taW5hbFR5cGVOYW1lTWF0Y2hlcyIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImNvbnRleHQiLCJwcm9wZXJ0eSIsImZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb25Ob2RlIiwicHJvcGVydHlOb2RlIiwiZ2V0UHJvcGVydHlOb2RlIiwicHJvcGVydHlGcm9tUHJvcGVydHlOb2RlIiwiZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJnZXRQcm9wZXJ0eU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBQTs7O3dCQUZ1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSw2QkFBQzthQUFNQyxTQUNkQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxlQUFlO2dDQURyQko7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxlQUFlLEdBQUdBOzs7O1lBR3pCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLGVBQWU7WUFDN0I7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxZQUFZO2dCQUM1QixJQUFNQyxzQkFBdUIsSUFBSSxDQUFDUixJQUFJLEtBQUtPO2dCQUUzQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQlIsZUFBZTtnQkFDbEMsSUFBTVMseUJBQTBCLElBQUksQ0FBQ1QsZUFBZSxLQUFLQTtnQkFFekQsT0FBT1M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNWCxPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQkMsa0JBQWtCLElBQUksQ0FBQ0EsZUFBZSxFQUN0Q1csT0FBTztvQkFDTFosTUFBQUE7b0JBQ0FDLGlCQUFBQTtnQkFDRjtnQkFFTixPQUFPVztZQUNUOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsT0FBTztnQkFDM0IsSUFBUWQsT0FBMEJZLEtBQTFCWixNQUFNQyxrQkFBb0JXLEtBQXBCWCxpQkFDUkgsU0FBU0UsTUFDVGUsV0FBVyxJQUFJbEIsU0FBU0MsUUFBUUUsTUFBTUM7Z0JBRTVDLE9BQU9jO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJDLG9CQUFvQixFQUFFSCxPQUFPO2dCQUMzRCxJQUFNSSxlQUFlRCxxQkFBcUJFLGVBQWUsSUFDbkRKLFdBQVdLLHlCQUF5QkYsY0FBY0o7Z0JBRXhELE9BQU9DO1lBQ1Q7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSw0QkFBNEJDLHVCQUF1QixFQUFFUixPQUFPO2dCQUNqRSxJQUFNUCxlQUFlZSx3QkFBd0JDLGVBQWUsSUFDdER0QixrQkFBa0JxQix3QkFBd0JqQixrQkFBa0IsSUFDNURMLE9BQU9PLGNBQ1BULFNBQVNFLE1BQ1RlLFdBQVcsSUFBSWxCLFNBQVNDLFFBQVFFLE1BQU1DO2dCQUU1QyxPQUFPYztZQUNUOzs7O0tBekJBLDRCQUFPZixRQUFPIn0=