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
var _Parameter;
var _default = (0, _structure.define)((_Parameter = /*#__PURE__*/ function() {
    function Parameter(name) {
        _class_call_check(this, Parameter);
        this.name = name;
    }
    _create_class(Parameter, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getString",
            value: function getString() {
                var string = this.name; ///
                return string;
            }
        },
        {
            key: "findReplacementNode",
            value: function findReplacementNode(substitutions) {
                var replacementNode = null;
                var parameter = this, substitution = substitutions.findSubstitution(function(substitution) {
                    var nameMatches = substitution.matchParameter(parameter);
                    if (nameMatches) {
                        return true;
                    }
                });
                if (substitution !== null) {
                    replacementNode = substitution.getReplacementNode();
                }
                return replacementNode;
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
                var name = json.name, parameter = new Parameter(name);
                return parameter;
            }
        },
        {
            key: "fromParameterNode",
            value: function fromParameterNode(parameterNode, context) {
                var parameterName = parameterNode.getParameterName(), name = parameterName, parameter = new Parameter(name);
                return parameter;
            }
        }
    ]);
    return Parameter;
}(), _define_property(_Parameter, "name", "Parameter"), _Parameter));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJ1Y3R1cmUvcGFyYW1ldGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vc3RydWN0dXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQYXJhbWV0ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLm5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGZpbmRSZXBsYWNlbWVudE5vZGUoc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCByZXBsYWNlbWVudE5vZGUgPSBudWxsO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyID0gdGhpcywgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlcik7XG5cbiAgICAgICAgICAgIGlmIChuYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRSZXBsYWNlbWVudE5vZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUGFyYW1ldGVyXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgcGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcihuYW1lKTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXJOb2RlLmdldFBhcmFtZXRlck5hbWUoKSxcbiAgICAgICAgICBuYW1lID0gcGFyYW1ldGVyTmFtZSwgLy8vXG4gICAgICAgICAgcGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcihuYW1lKTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlBhcmFtZXRlciIsIm5hbWUiLCJnZXROYW1lIiwiZ2V0U3RyaW5nIiwic3RyaW5nIiwiZmluZFJlcGxhY2VtZW50Tm9kZSIsInN1YnN0aXR1dGlvbnMiLCJyZXBsYWNlbWVudE5vZGUiLCJwYXJhbWV0ZXIiLCJzdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uIiwibmFtZU1hdGNoZXMiLCJtYXRjaFBhcmFtZXRlciIsImdldFJlcGxhY2VtZW50Tm9kZSIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImNvbnRleHQiLCJmcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXJOYW1lIiwiZ2V0UGFyYW1ldGVyTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFBOzs7eUJBRnVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGlCQUFNLDhCQUFDO2FBQU1DLFVBQ2RDLElBQUk7Z0NBRFVEO1FBRXhCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELElBQUk7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsU0FBUyxJQUFJLENBQUNILElBQUksRUFBRSxHQUFHO2dCQUU3QixPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQkMsYUFBYTtnQkFDL0IsSUFBSUMsa0JBQWtCO2dCQUV0QixJQUFNQyxZQUFZLElBQUksRUFDaEJDLGVBQWVILGNBQWNJLGdCQUFnQixDQUFDLFNBQUNEO29CQUM3QyxJQUFNRSxjQUFjRixhQUFhRyxjQUFjLENBQUNKO29CQUVoRCxJQUFJRyxhQUFhO3dCQUNmLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRU4sSUFBSUYsaUJBQWlCLE1BQU07b0JBQ3pCRixrQkFBa0JFLGFBQWFJLGtCQUFrQjtnQkFDbkQ7Z0JBRUEsT0FBT047WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNYixPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQmMsT0FBTztvQkFDTGQsTUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2M7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVFLE9BQU87Z0JBQzNCLElBQU0sQUFBRWhCLE9BQVNjLEtBQVRkLE1BQ0ZPLFlBQVksSUFBSVIsVUFBVUM7Z0JBRWhDLE9BQU9PO1lBQ1Q7OztZQUVPVSxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRUYsT0FBTztnQkFDN0MsSUFBTUcsZ0JBQWdCRCxjQUFjRSxnQkFBZ0IsSUFDOUNwQixPQUFPbUIsZUFDUFosWUFBWSxJQUFJUixVQUFVQztnQkFFaEMsT0FBT087WUFDVDs7OztLQWZBLDZCQUFPUCxRQUFPIn0=