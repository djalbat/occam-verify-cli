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
var _ProcedureReference;
var _default = (0, _structure.define)((_ProcedureReference = /*#__PURE__*/ function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJ1Y3R1cmUvcHJvY2VkdXJlUmVmZXJlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vc3RydWN0dXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmVSZWZlcmVuY2Uge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZVJlZmVyZW5jZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBuZXcgUHJvY2VkdXJlUmVmZXJlbmNlKHN0cmluZywgbmFtZSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHByb2NlZHVyZU5hbWUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRQcm9jZWR1cmVOYW1lKCksXG4gICAgICAgICAgbmFtZSA9IHByb2NlZHVyZU5hbWUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBuZXcgUHJvY2VkdXJlUmVmZXJlbmNlKHN0cmluZywgbmFtZSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9jZWR1cmVSZWZlcmVuY2UiLCJzdHJpbmciLCJuYW1lIiwiZ2V0U3RyaW5nIiwiZ2V0TmFtZSIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImNvbnRleHQiLCJwcm9jZWR1cmVSZWZlcmVuY2UiLCJmcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZU5hbWUiLCJnZXRQcm9jZWR1cmVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQUE7Ozt5QkFGdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsV0FBZUEsSUFBQUEsaUJBQU0sdUNBQUM7YUFBTUMsbUJBQ2RDLE1BQU0sRUFBRUMsSUFBSTtnQ0FERUY7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOzs7O1lBR2RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSCxPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQkksT0FBTztvQkFDTEosTUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT0k7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVFLE9BQU87Z0JBQzNCLElBQU0sQUFBRU4sT0FBU0ksS0FBVEosTUFDRkQsU0FBU0MsTUFDVE8scUJBQXFCLElBQUlULG1CQUFtQkMsUUFBUUM7Z0JBRTFELE9BQU9PO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxzQkFBc0JDLGlCQUFpQixFQUFFSCxPQUFPO2dCQUNyRCxJQUFNSSxnQkFBZ0JELGtCQUFrQkUsZ0JBQWdCLElBQ2xEWCxPQUFPVSxlQUNQWCxTQUFTQyxNQUNUTyxxQkFBcUIsSUFBSVQsbUJBQW1CQyxRQUFRQztnQkFFMUQsT0FBT087WUFDVDs7OztLQWpCQSxzQ0FBT1AsUUFBTyJ9