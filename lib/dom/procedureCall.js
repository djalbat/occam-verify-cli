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
    function ProcedureCall(node, string, reference, parameters) {
        _class_call_check(this, ProcedureCall);
        this.node = node;
        this.string = string;
        this.reference = reference;
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
            key: "getReference",
            value: function getReference() {
                return this.reference;
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
                var procedure = context.findProcedureByReference(this.reference);
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
                var unifiesIndependently;
                var procedureCallString = this.string; ///
                context.trace("Unifying the '".concat(procedureCallString, "' procedure call independently..."));
                var procedure = context.findProcedureByReference(this.reference), nodes = this.findNodes(substitutions), expressions = _occamfurtle.Expressions.fromNodes(nodes, context);
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
                var referenceJSON = this.reference.toJSON(), parametersJSON = (0, _json.parametersToParametersJSON)(this.parameters), reference = referenceJSON, parameters = parametersJSON, json = {
                    reference: reference,
                    parameters: parameters
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var reference = (0, _json.referenceFromJSON)(json, context), parameters = (0, _json.parametersFromJSON)(json, context), node = null, string = stringFromReferenceAndParameters(reference, parameters), procedureCall = new ProcedureCall(node, string, reference, parameters);
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
    var Reference = _dom.default.Reference, ProcedureCall = _dom.default.ProcedureCall, node = procedureCallNode, parameters = parametersFromProcedureCallNode(procedureCallNode, context), reference = Reference.fromProcedureCallNode(procedureCallNode, context), string = stringFromReferenceAndParameters(reference, parameters), procedureCall = new ProcedureCall(node, string, reference, parameters);
    return procedureCall;
}
function parametersFromProcedureCallNode(procedureCallNode, context) {
    var Parameter = _dom.default.Parameter, parameterNodes = procedureCallNode.getParameterNodes(), parameters = parameterNodes.map(function(parameterNode) {
        var parameter = Parameter.fromParameterNode(parameterNode, context);
        return parameter;
    });
    return parameters;
}
function stringFromReferenceAndParameters(reference, parameters) {
    var referenceString = reference.getString(), parametersString = parameters.reduce(function(parametersString, parameter) {
        var parameterString = parameter.getString();
        parametersString = parametersString === null ? parameterString : "".concat(parametersString, ", ").concat(parameterString);
        return parametersString;
    }, null), string = "".concat(referenceString, "(").concat(parametersString, ")");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlQ2FsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRXhwcmVzc2lvbnMgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IHJlZmVyZW5jZUZyb21KU09OLCBwYXJhbWV0ZXJzRnJvbUpTT04sIHBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFByb2NlZHVyZUNhbGwge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBzdHJpbmcsIHJlZmVyZW5jZSwgcGFyYW1ldGVycykge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgZmluZE5vZGVzKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBub2RlcyA9IHRoaXMucGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnROb2RlID0gcGFyYW1ldGVyLmZpbmRSZXBsYWNlbWVudE5vZGUoc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgICBub2RlID0gcmVwbGFjZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSk7XG5cbiAgICBpZiAocHJvY2VkdXJlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVCb29sZWFuID0gcHJvY2VkdXJlLmlzQm9vbGVhbigpO1xuXG4gICAgICBpZiAocHJvY2VkdXJlQm9vbGVhbikge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBpcyBub3QgYm9vbGVhbi5gLCB0aGlzLm5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBpcyBub3QgcHJlc2VudC5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgIG5vZGVzID0gdGhpcy5maW5kTm9kZXMoc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgZXhwcmVzc2lvbnMgPSBFeHByZXNzaW9ucy5mcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gcHJvY2VkdXJlLmNhbGwoZXhwcmVzc2lvbnMsIGNvbnRleHQpLFxuICAgICAgICAgICAgYm9vbGVhbiA9IHZhbHVlLmdldEJvb2xlYW4oKTtcblxuICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSBib29sZWFuOyAvLy9cbiAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBleGNlcHRpb24uZ2V0TWVzc2FnZSgpO1xuXG4gICAgICBjb250ZXh0LmluZm8obWVzc2FnZSk7XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlSlNPTiA9IHRoaXMucmVmZXJlbmNlLnRvSlNPTigpLFxuICAgICAgICAgIHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04odGhpcy5wYXJhbWV0ZXJzKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VKU09OLCAgLy8vXG4gICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHJlZmVyZW5jZSxcbiAgICAgICAgICAgIHBhcmFtZXRlcnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlQ2FsbFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tUmVmZXJlbmNlQW5kUGFyYW1ldGVycyhyZWZlcmVuY2UsIHBhcmFtZXRlcnMpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChub2RlLCBzdHJpbmcsIHJlZmVyZW5jZSwgcGFyYW1ldGVycyk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IHByZW1pc2VOb2RlLmdldFByb2NlZHVyZUNhbGxOb2RlKCk7XG5cbiAgICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gc3VwcG9zaXRpb25Ob2RlLmdldFByb2NlZHVyZUNhbGxOb2RlKCk7XG5cbiAgICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UsIFByb2NlZHVyZUNhbGwgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLCAvLy9cbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMocmVmZXJlbmNlLCBwYXJhbWV0ZXJzKSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKG5vZGUsIHN0cmluZywgcmVmZXJlbmNlLCBwYXJhbWV0ZXJzKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZG9tLFxuICAgICAgICBwYXJhbWV0ZXJOb2RlcyA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFBhcmFtZXRlck5vZGVzKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSBQYXJhbWV0ZXIuZnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMocmVmZXJlbmNlLCBwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IHBhcmFtZXRlcnMucmVkdWNlKChwYXJhbWV0ZXJzU3RyaW5nLCBwYXJhbWV0ZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJTdHJpbmcgPSBwYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gKHBhcmFtZXRlcnNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyU3RyaW5nIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cGFyYW1ldGVyc1N0cmluZ30sICR7cGFyYW1ldGVyU3RyaW5nfWA7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyc1N0cmluZztcbiAgICAgICAgfSwgbnVsbCksXG4gICAgICAgIHN0cmluZyA9IGAke3JlZmVyZW5jZVN0cmluZ30oJHtwYXJhbWV0ZXJzU3RyaW5nfSlgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJQcm9jZWR1cmVDYWxsIiwibm9kZSIsInN0cmluZyIsInJlZmVyZW5jZSIsInBhcmFtZXRlcnMiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0UGFyYW1ldGVycyIsImZpbmROb2RlcyIsInN1YnN0aXR1dGlvbnMiLCJub2RlcyIsIm1hcCIsInBhcmFtZXRlciIsInJlcGxhY2VtZW50Tm9kZSIsImZpbmRSZXBsYWNlbWVudE5vZGUiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImNvbnRleHQiLCJ2ZXJpZmllcyIsInByb2NlZHVyZUNhbGxTdHJpbmciLCJ0cmFjZSIsInByb2NlZHVyZSIsImZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZSIsInByb2NlZHVyZUJvb2xlYW4iLCJpc0Jvb2xlYW4iLCJkZWJ1ZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwiZXhwcmVzc2lvbnMiLCJFeHByZXNzaW9ucyIsImZyb21Ob2RlcyIsInZhbHVlIiwiY2FsbCIsImJvb2xlYW4iLCJnZXRCb29sZWFuIiwiZXhjZXB0aW9uIiwibWVzc2FnZSIsImdldE1lc3NhZ2UiLCJpbmZvIiwidG9KU09OIiwicmVmZXJlbmNlSlNPTiIsInBhcmFtZXRlcnNKU09OIiwicGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJyZWZlcmVuY2VGcm9tSlNPTiIsInBhcmFtZXRlcnNGcm9tSlNPTiIsInN0cmluZ0Zyb21SZWZlcmVuY2VBbmRQYXJhbWV0ZXJzIiwicHJvY2VkdXJlQ2FsbCIsImZyb21QcmVtaXNlTm9kZSIsInByZW1pc2VOb2RlIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlIiwibmFtZSIsIlJlZmVyZW5jZSIsImRvbSIsInBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJmcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJQYXJhbWV0ZXIiLCJwYXJhbWV0ZXJOb2RlcyIsImdldFBhcmFtZXRlck5vZGVzIiwicGFyYW1ldGVyTm9kZSIsImZyb21QYXJhbWV0ZXJOb2RlIiwicmVmZXJlbmNlU3RyaW5nIiwicGFyYW1ldGVyc1N0cmluZyIsInJlZHVjZSIsInBhcmFtZXRlclN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkJBUDRCOzJEQUVaO29CQUdrRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWxGLFdBQWVBLElBQUFBLGdCQUFXLGtDQUFDO2FBQU1DLGNBQ25CQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxVQUFVO2dDQURoQko7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNB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