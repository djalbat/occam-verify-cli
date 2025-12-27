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
var _structure = /*#__PURE__*/ _interop_require_wildcard(require("../structure"));
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
var _default = (0, _structure.define)((_ProcedureCall = /*#__PURE__*/ function() {
    function ProcedureCall(string, node, parameters, procedureReference) {
        _class_call_check(this, ProcedureCall);
        this.string = string;
        this.node = node;
        this.parameters = parameters;
        this.procedureReference = procedureReference;
    }
    _create_class(ProcedureCall, [
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
            key: "getParameters",
            value: function getParameters() {
                return this.parameters;
            }
        },
        {
            key: "getProcedureReference",
            value: function getProcedureReference() {
                return this.procedureReference;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.procedureReference.getName();
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
                var name = this.getName(), procedure = context.findProcedureByName(name);
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
                var name = this.getName(), nodes = this.findNodes(substitutions), procedure = context.findProcedureByName(name), expressions = _occamfurtle.Expressions.fromNodes(nodes, context);
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
                var parametersJSON = (0, _json.parametersToParametersJSON)(this.parameters), procedureReference = (0, _json.procedureReferenceToProcedureReferenceJSON)(this.procedureReference), parameters = parametersJSON, json = {
                    procedureReference: procedureReference,
                    parameters: parameters
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var node = null, parameters = (0, _json.parametersFromJSON)(json, context), procedureReference = (0, _json.procedureReferenceFromJSON)(json, context), string = stringFromProcedureReferenceAndParameters(procedureReference, parameters), procedureCall = new ProcedureCall(string, node, parameters, procedureReference);
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
    var ProcedureCall = _structure.default.ProcedureCall, ProcedureReference = _structure.default.ProcedureReference, node = procedureCallNode, parameters = parametersFromProcedureCallNode(procedureCallNode, context), procedureReference = ProcedureReference.fromProcedureCallNode(procedureCallNode, context), string = stringFromProcedureReferenceAndParameters(procedureReference, parameters), procedureCall = new ProcedureCall(string, node, parameters, procedureReference);
    return procedureCall;
}
function parametersFromProcedureCallNode(procedureCallNode, context) {
    var Parameter = _structure.default.Parameter, parameterNodes = procedureCallNode.getParameterNodes(), parameters = parameterNodes.map(function(parameterNode) {
        var parameter = Parameter.fromParameterNode(parameterNode, context);
        return parameter;
    });
    return parameters;
}
function stringFromProcedureReferenceAndParameters(procedureReference, parameters) {
    var name = procedureReference.getName(), parametersString = parameters.reduce(function(parametersString, parameter) {
        var parameterString = parameter.getString();
        parametersString = parametersString === null ? parameterString : "".concat(parametersString, ", ").concat(parameterString);
        return parametersString;
    }, null), string = "".concat(name, "(").concat(parametersString, ")");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJ1Y3R1cmUvcHJvY2VkdXJlQ2FsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRXhwcmVzc2lvbnMgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCBzdHJ1Y3R1cmUgZnJvbSBcIi4uL3N0cnVjdHVyZVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vc3RydWN0dXJlXCI7XG5pbXBvcnQgeyBwYXJhbWV0ZXJzRnJvbUpTT04sIHByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OLCBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiwgcHJvY2VkdXJlUmVmZXJlbmNlVG9Qcm9jZWR1cmVSZWZlcmVuY2VKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmVDYWxsIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCBwYXJhbWV0ZXJzLCBwcm9jZWR1cmVSZWZlcmVuY2UpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5wcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlUmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZVJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLnByb2NlZHVyZVJlZmVyZW5jZS5nZXROYW1lKCk7IH1cblxuICBmaW5kTm9kZXMoc3Vic3RpdHV0aW9ucykge1xuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5wYXJhbWV0ZXJzLm1hcCgocGFyYW1ldGVyKSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudE5vZGUgPSBwYXJhbWV0ZXIuZmluZFJlcGxhY2VtZW50Tm9kZShzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICAgIG5vZGUgPSByZXBsYWNlbWVudE5vZGU7ICAvLy9cblxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeU5hbWUobmFtZSk7XG5cbiAgICBpZiAocHJvY2VkdXJlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVCb29sZWFuID0gcHJvY2VkdXJlLmlzQm9vbGVhbigpO1xuXG4gICAgICBpZiAocHJvY2VkdXJlQm9vbGVhbikge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBpcyBub3QgYm9vbGVhbi5gLCB0aGlzLm5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBpcyBub3QgcHJlc2VudC5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgbm9kZXMgPSB0aGlzLmZpbmROb2RlcyhzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeU5hbWUobmFtZSksXG4gICAgICAgICAgZXhwcmVzc2lvbnMgPSBFeHByZXNzaW9ucy5mcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gcHJvY2VkdXJlLmNhbGwoZXhwcmVzc2lvbnMsIGNvbnRleHQpLFxuICAgICAgICAgICAgYm9vbGVhbiA9IHZhbHVlLmdldEJvb2xlYW4oKTtcblxuICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSBib29sZWFuOyAvLy9cbiAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBleGNlcHRpb24uZ2V0TWVzc2FnZSgpO1xuXG4gICAgICBjb250ZXh0LmluZm8obWVzc2FnZSk7XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTih0aGlzLnBhcmFtZXRlcnMpLFxuICAgICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTih0aGlzLnByb2NlZHVyZVJlZmVyZW5jZSksXG4gICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSxcbiAgICAgICAgICAgIHBhcmFtZXRlcnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlQ2FsbFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyhwcm9jZWR1cmVSZWZlcmVuY2UsIHBhcmFtZXRlcnMpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChzdHJpbmcsIG5vZGUsIHBhcmFtZXRlcnMsIHByb2NlZHVyZVJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IHByZW1pc2VOb2RlLmdldFByb2NlZHVyZUNhbGxOb2RlKCk7XG5cbiAgICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gc3VwcG9zaXRpb25Ob2RlLmdldFByb2NlZHVyZUNhbGxOb2RlKCk7XG5cbiAgICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVDYWxsLCBQcm9jZWR1cmVSZWZlcmVuY2UgfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLCAvLy9cbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBQcm9jZWR1cmVSZWZlcmVuY2UuZnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMocHJvY2VkdXJlUmVmZXJlbmNlLCBwYXJhbWV0ZXJzKSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKHN0cmluZywgbm9kZSwgcGFyYW1ldGVycywgcHJvY2VkdXJlUmVmZXJlbmNlKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gc3RydWN0dXJlLFxuICAgICAgICBwYXJhbWV0ZXJOb2RlcyA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFBhcmFtZXRlck5vZGVzKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSBQYXJhbWV0ZXIuZnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMocHJvY2VkdXJlUmVmZXJlbmNlLCBwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IG5hbWUgPSBwcm9jZWR1cmVSZWZlcmVuY2UuZ2V0TmFtZSgpLFxuICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gcGFyYW1ldGVycy5yZWR1Y2UoKHBhcmFtZXRlcnNTdHJpbmcsIHBhcmFtZXRlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSAocGFyYW1ldGVyc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtwYXJhbWV0ZXJzU3RyaW5nfSwgJHtwYXJhbWV0ZXJTdHJpbmd9YDtcblxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXJzU3RyaW5nO1xuICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgc3RyaW5nID0gYCR7bmFtZX0oJHtwYXJhbWV0ZXJzU3RyaW5nfSlgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJvY2VkdXJlQ2FsbCIsInN0cmluZyIsIm5vZGUiLCJwYXJhbWV0ZXJzIiwicHJvY2VkdXJlUmVmZXJlbmNlIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFBhcmFtZXRlcnMiLCJnZXRQcm9jZWR1cmVSZWZlcmVuY2UiLCJnZXROYW1lIiwiZmluZE5vZGVzIiwic3Vic3RpdHV0aW9ucyIsIm5vZGVzIiwibWFwIiwicGFyYW1ldGVyIiwicmVwbGFjZW1lbnROb2RlIiwiZmluZFJlcGxhY2VtZW50Tm9kZSIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwiY29udGV4dCIsInZlcmlmaWVzIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInRyYWNlIiwibmFtZSIsInByb2NlZHVyZSIsImZpbmRQcm9jZWR1cmVCeU5hbWUiLCJwcm9jZWR1cmVCb29sZWFuIiwiaXNCb29sZWFuIiwiZGVidWciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsImV4cHJlc3Npb25zIiwiRXhwcmVzc2lvbnMiLCJmcm9tTm9kZXMiLCJ2YWx1ZSIsImNhbGwiLCJib29sZWFuIiwiZ2V0Qm9vbGVhbiIsImV4Y2VwdGlvbiIsIm1lc3NhZ2UiLCJnZXRNZXNzYWdlIiwiaW5mbyIsInRvSlNPTiIsInBhcmFtZXRlcnNKU09OIiwicGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04iLCJwcm9jZWR1cmVSZWZlcmVuY2VUb1Byb2NlZHVyZVJlZmVyZW5jZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJwYXJhbWV0ZXJzRnJvbUpTT04iLCJwcm9jZWR1cmVSZWZlcmVuY2VGcm9tSlNPTiIsInN0cmluZ0Zyb21Qcm9jZWR1cmVSZWZlcmVuY2VBbmRQYXJhbWV0ZXJzIiwicHJvY2VkdXJlQ2FsbCIsImZyb21QcmVtaXNlTm9kZSIsInByZW1pc2VOb2RlIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlIiwic3RydWN0dXJlIiwiUHJvY2VkdXJlUmVmZXJlbmNlIiwicGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZSIsImZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsIlBhcmFtZXRlciIsInBhcmFtZXRlck5vZGVzIiwiZ2V0UGFyYW1ldGVyTm9kZXMiLCJwYXJhbWV0ZXJOb2RlIiwiZnJvbVBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXJzU3RyaW5nIiwicmVkdWNlIiwicGFyYW1ldGVyU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OzsyQkFQNEI7aUVBRU47b0JBR2lIOzs7Ozs7Ozs7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