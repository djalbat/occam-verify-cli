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
var _occamfurtle = require("occam-furtle");
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _json = require("../utilities/json");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _ProcedureCall;
var _default = (0, _dom.domAssigned)((_ProcedureCall = /*#__PURE__*/ function() {
    function ProcedureCall(node, string, procedureName, parameters) {
        _class_call_check(this, ProcedureCall);
        this.node = node;
        this.string = string;
        this.procedureName = procedureName;
        this.parameters = parameters;
    }
    _create_class(ProcedureCall, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getProcedureName",
            value: function getProcedureName() {
                return this.procedureName;
            }
        },
        {
            key: "getParameters",
            value: function getParameters() {
                return this.parameters;
            }
        },
        {
            key: "findNodes",
            value: function findNodes(substitutions) {
                var nodes = this.parameters.map(function(parameter) {
                    var replacementNode = parameter.findReplacementNode(substitutions), node = replacementNode; ///
                    return node;
                });
                return nodes;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verifies = false;
                var procedureCallString = this.string; ///
                context.trace("Verifying the '".concat(procedureCallString, "' procedure call..."), this.node);
                var name = this.procedureName, procedure = context.findProcedureByName(name);
                if (procedure !== null) {
                    var procedureBoolean = procedure.isBoolean();
                    if (procedureBoolean) {
                        verifies = true;
                    } else {
                        context.trace("The '".concat(procedureCallString, "' procedure is not boolean."), this.node);
                    }
                } else {
                    context.trace("The '".concat(procedureCallString, "' procedure is not present."), this.node);
                }
                if (verifies) {
                    context.debug("...verified the '".concat(procedureCallString, "' procedure call."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, context) {
                var unifiesIndependently = false;
                var procedureCallString = this.string; ///
                context.trace("Unifying the '".concat(procedureCallString, "' procedure call independently..."));
                var name = this.procedureName, nodes = this.findNodes(substitutions), procedure = context.findProcedureByName(name), expressions = _occamfurtle.Expressions.fromNodes(nodes, context);
                try {
                    var value = procedure.call(expressions, context), boolean = value.getBoolean();
                    unifiesIndependently = boolean; ///
                } catch (exception) {
                    var message = exception.getMessage();
                    context.info(message);
                }
                if (unifiesIndependently) {
                    context.debug("...unified the '".concat(procedureCallString, "' procedure call independently."));
                }
                return unifiesIndependently;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var parametersJSON = (0, _json.parametersToParametersJSON)(this.parameters), procedureName = this.procedureName, parameters = parametersJSON, json = {
                    procedureName: procedureName,
                    parameters: parameters
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var procedureName = (0, _json.procedureNameFromJSON)(json, context), parameters = (0, _json.parametersFromJSON)(json, context), node = null, string = stringFromProcedureNameAndParameters(procedureName, parameters), procedureCall = new ProcedureCall(node, string, procedureName, parameters);
                return procedureCall;
            }
        },
        {
            key: "fromPremiseNode",
            value: function fromPremiseNode(premiseNode, context) {
                var procedureCall = null;
                var procedureCallNode = premiseNode.getProcedureCallNode();
                if (procedureCallNode !== null) {
                    procedureCall = procedureCallFromProcedureCallNode(procedureCallNode, context);
                }
                return procedureCall;
            }
        },
        {
            key: "fromSuppositionNode",
            value: function fromSuppositionNode(suppositionNode, context) {
                var procedureCall = null;
                var procedureCallNode = suppositionNode.getProcedureCallNode();
                if (procedureCallNode !== null) {
                    procedureCall = procedureCallFromProcedureCallNode(procedureCallNode, context);
                }
                return procedureCall;
            }
        }
    ]);
    return ProcedureCall;
}(), _define_property(_ProcedureCall, "name", "ProcedureCall"), _ProcedureCall));
function procedureCallFromProcedureCallNode(procedureCallNode, context) {
    var ProcedureCall = _dom.default.ProcedureCall, node = procedureCallNode, parameters = parametersFromProcedureCallNode(procedureCallNode, context), procedureName = procedureCallNode.getProcedureName(), string = stringFromProcedureNameAndParameters(procedureName, parameters), procedureCall = new ProcedureCall(node, string, procedureName, parameters);
    return procedureCall;
}
function parametersFromProcedureCallNode(procedureCallNode, context) {
    var Parameter = _dom.default.Parameter, parameterNodes = procedureCallNode.getParameterNodes(), parameters = parameterNodes.map(function(parameterNode) {
        var parameter = Parameter.fromParameterNode(parameterNode, context);
        return parameter;
    });
    return parameters;
}
function stringFromProcedureNameAndParameters(procedureName, parameters) {
    var parametersString = parameters.reduce(function(parametersString, parameter) {
        var parameterString = parameter.getString();
        parametersString = parametersString === null ? parameterString : "".concat(parametersString, ", ").concat(parameterString);
        return parametersString;
    }, null), string = "".concat(procedureName, "(").concat(parametersString, ")");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlQ2FsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRXhwcmVzc2lvbnMgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IHBhcmFtZXRlcnNGcm9tSlNPTiwgcHJvY2VkdXJlTmFtZUZyb21KU09OLCBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQcm9jZWR1cmVDYWxsIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgc3RyaW5nLCBwcm9jZWR1cmVOYW1lLCBwYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnByb2NlZHVyZU5hbWUgPSBwcm9jZWR1cmVOYW1lO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVOYW1lO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgZmluZE5vZGVzKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBub2RlcyA9IHRoaXMucGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnROb2RlID0gcGFyYW1ldGVyLmZpbmRSZXBsYWNlbWVudE5vZGUoc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgICBub2RlID0gcmVwbGFjZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBuYW1lID0gdGhpcy5wcm9jZWR1cmVOYW1lLCAgLy8vXG4gICAgICAgICAgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpO1xuXG4gICAgaWYgKHByb2NlZHVyZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvY2VkdXJlQm9vbGVhbiA9IHByb2NlZHVyZS5pc0Jvb2xlYW4oKTtcblxuICAgICAgaWYgKHByb2NlZHVyZUJvb2xlYW4pIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgaXMgbm90IGJvb2xlYW4uYCwgdGhpcy5ub2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgaXMgbm90IHByZXNlbnQuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgbmFtZSA9IHRoaXMucHJvY2VkdXJlTmFtZSwgIC8vL1xuICAgICAgICAgIG5vZGVzID0gdGhpcy5maW5kTm9kZXMoc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpLFxuICAgICAgICAgIGV4cHJlc3Npb25zID0gRXhwcmVzc2lvbnMuZnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHByb2NlZHVyZS5jYWxsKGV4cHJlc3Npb25zLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGJvb2xlYW4gPSB2YWx1ZS5nZXRCb29sZWFuKCk7XG5cbiAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gYm9vbGVhbjsgLy8vXG4gICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZXhjZXB0aW9uLmdldE1lc3NhZ2UoKTtcblxuICAgICAgY29udGV4dC5pbmZvKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsIGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04odGhpcy5wYXJhbWV0ZXJzKSxcbiAgICAgICAgICBwcm9jZWR1cmVOYW1lID0gdGhpcy5wcm9jZWR1cmVOYW1lLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBwcm9jZWR1cmVOYW1lLFxuICAgICAgICAgICAgcGFyYW1ldGVyc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVDYWxsXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVOYW1lID0gcHJvY2VkdXJlTmFtZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVByb2NlZHVyZU5hbWVBbmRQYXJhbWV0ZXJzKHByb2NlZHVyZU5hbWUsIHBhcmFtZXRlcnMpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChub2RlLCBzdHJpbmcsIHByb2NlZHVyZU5hbWUsIHBhcmFtZXRlcnMpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBwcmVtaXNlTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gICAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IHN1cHBvc2l0aW9uTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gICAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZG9tLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUsIC8vL1xuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZU5hbWUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRQcm9jZWR1cmVOYW1lKCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21Qcm9jZWR1cmVOYW1lQW5kUGFyYW1ldGVycyhwcm9jZWR1cmVOYW1lLCBwYXJhbWV0ZXJzKSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKG5vZGUsIHN0cmluZywgcHJvY2VkdXJlTmFtZSwgcGFyYW1ldGVycyk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGRvbSxcbiAgICAgICAgcGFyYW1ldGVyTm9kZXMgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRQYXJhbWV0ZXJOb2RlcygpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gUGFyYW1ldGVyLmZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21Qcm9jZWR1cmVOYW1lQW5kUGFyYW1ldGVycyhwcm9jZWR1cmVOYW1lLCBwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNTdHJpbmcgPSBwYXJhbWV0ZXJzLnJlZHVjZSgocGFyYW1ldGVyc1N0cmluZywgcGFyYW1ldGVyKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IChwYXJhbWV0ZXJzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlclN0cmluZyA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3BhcmFtZXRlcnNTdHJpbmd9LCAke3BhcmFtZXRlclN0cmluZ31gO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcnNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBgJHtwcm9jZWR1cmVOYW1lfSgke3BhcmFtZXRlcnNTdHJpbmd9KWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlByb2NlZHVyZUNhbGwiLCJub2RlIiwic3RyaW5nIiwicHJvY2VkdXJlTmFtZSIsInBhcmFtZXRlcnMiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0UHJvY2VkdXJlTmFtZSIsImdldFBhcmFtZXRlcnMiLCJmaW5kTm9kZXMiLCJzdWJzdGl0dXRpb25zIiwibm9kZXMiLCJtYXAiLCJwYXJhbWV0ZXIiLCJyZXBsYWNlbWVudE5vZGUiLCJmaW5kUmVwbGFjZW1lbnROb2RlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwidHJhY2UiLCJuYW1lIiwicHJvY2VkdXJlIiwiZmluZFByb2NlZHVyZUJ5TmFtZSIsInByb2NlZHVyZUJvb2xlYW4iLCJpc0Jvb2xlYW4iLCJkZWJ1ZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwiZXhwcmVzc2lvbnMiLCJFeHByZXNzaW9ucyIsImZyb21Ob2RlcyIsInZhbHVlIiwiY2FsbCIsImJvb2xlYW4iLCJnZXRCb29sZWFuIiwiZXhjZXB0aW9uIiwibWVzc2FnZSIsImdldE1lc3NhZ2UiLCJpbmZvIiwidG9KU09OIiwicGFyYW1ldGVyc0pTT04iLCJwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInByb2NlZHVyZU5hbWVGcm9tSlNPTiIsInBhcmFtZXRlcnNGcm9tSlNPTiIsInN0cmluZ0Zyb21Qcm9jZWR1cmVOYW1lQW5kUGFyYW1ldGVycyIsInByb2NlZHVyZUNhbGwiLCJmcm9tUHJlbWlzZU5vZGUiLCJwcmVtaXNlTm9kZSIsInByb2NlZHVyZUNhbGxOb2RlIiwiZ2V0UHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsImRvbSIsInBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJQYXJhbWV0ZXIiLCJwYXJhbWV0ZXJOb2RlcyIsImdldFBhcmFtZXRlck5vZGVzIiwicGFyYW1ldGVyTm9kZSIsImZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyc1N0cmluZyIsInJlZHVjZSIsInBhcmFtZXRlclN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkJBUDRCOzJEQUVaO29CQUdzRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXRGLFdBQWVBLElBQUFBLGdCQUFXLGtDQUFDO2FBQU1DLGNBQ25CQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyxVQUFVO2dDQURwQko7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixhQUFhO1lBQzNCOzs7WUFFQUssS0FBQUE7bUJBQUFB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