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
var _ProcedureReference;
var _default = (0, _ontology.define)((_ProcedureReference = /*#__PURE__*/ function() {
    function ProcedureReference(string, name) {
        _class_call_check(this, ProcedureReference);
        this.string = string;
        this.name = name;
    }
    _create_class(ProcedureReference, [
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
                var name = json.name, string = name, procedureReference = new ProcedureReference(string, name);
                return procedureReference;
            }
        },
        {
            key: "fromProcedureCallNode",
            value: function fromProcedureCallNode(procedureCallNode, context) {
                var procedureName = procedureCallNode.getProcedureName(), name = procedureName, string = name, procedureReference = new ProcedureReference(string, name);
                return procedureReference;
            }
        }
    ]);
    return ProcedureReference;
}(), _define_property(_ProcedureReference, "name", "ProcedureReference"), _ProcedureReference));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9wcm9jZWR1cmVSZWZlcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvY2VkdXJlUmVmZXJlbmNlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBuYW1lKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBuZXcgUHJvY2VkdXJlUmVmZXJlbmNlKHN0cmluZywgbmFtZSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZVJlZmVyZW5jZVwiO1xuXG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVOYW1lID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UHJvY2VkdXJlTmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSBwcm9jZWR1cmVOYW1lLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gbmV3IFByb2NlZHVyZVJlZmVyZW5jZShzdHJpbmcsIG5hbWUpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJvY2VkdXJlUmVmZXJlbmNlIiwic3RyaW5nIiwibmFtZSIsImdldFN0cmluZyIsImdldE5hbWUiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjb250ZXh0IiwicHJvY2VkdXJlUmVmZXJlbmNlIiwiZnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVOYW1lIiwiZ2V0UHJvY2VkdXJlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFBOzs7d0JBRnVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLHVDQUFDO2FBQU1DLG1CQUNkQyxNQUFNLEVBQUVDLElBQUk7Z0NBREVGO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUgsT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJJLE9BQU87b0JBQ0xKLE1BQUFBO2dCQUNGO2dCQUVOLE9BQU9JO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxPQUFPO2dCQUMzQixJQUFNLEFBQUVOLE9BQVNJLEtBQVRKLE1BQ0ZELFNBQVNDLE1BQ1RPLHFCQUFxQixJQUFJVCxtQkFBbUJDLFFBQVFDO2dCQUUxRCxPQUFPTztZQUNUOzs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCQyxpQkFBaUIsRUFBRUgsT0FBTztnQkFDckQsSUFBTUksZ0JBQWdCRCxrQkFBa0JFLGdCQUFnQixJQUNsRFgsT0FBT1UsZUFDUFgsU0FBU0MsTUFDVE8scUJBQXFCLElBQUlULG1CQUFtQkMsUUFBUUM7Z0JBRTFELE9BQU9PO1lBQ1Q7Ozs7S0FUQSxzQ0FBT1AsUUFBTyJ9