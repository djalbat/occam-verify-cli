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
                context.trace("Unifying the '".concat(procedureCallString, "' procedure call independently..."), this.node);
                var procedure = context.findProcedureByReference(this.reference), nodes = this.findNodes(substitutions), expressions = _occamfurtle.Expressions.fromNodes(nodes, context);
                try {
                    var value = procedure.call(expressions, context), boolean = value.getBoolean();
                    unifiesIndependently = boolean; ///
                } catch (exception) {
                    var message = exception.getMessage();
                    context.info(message);
                }
                if (unifiesIndependently) {
                    context.debug("...unified the '".concat(procedureCallString, "' procedure call independently."), this.node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlQ2FsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRXhwcmVzc2lvbnMgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IHJlZmVyZW5jZUZyb21KU09OLCBwYXJhbWV0ZXJzRnJvbUpTT04sIHBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFByb2NlZHVyZUNhbGwge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBzdHJpbmcsIHJlZmVyZW5jZSwgcGFyYW1ldGVycykge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgZmluZE5vZGVzKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBub2RlcyA9IHRoaXMucGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnROb2RlID0gcGFyYW1ldGVyLmZpbmRSZXBsYWNlbWVudE5vZGUoc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgICBub2RlID0gcmVwbGFjZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSk7XG5cbiAgICBpZiAocHJvY2VkdXJlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVCb29sZWFuID0gcHJvY2VkdXJlLmlzQm9vbGVhbigpO1xuXG4gICAgICBpZiAocHJvY2VkdXJlQm9vbGVhbikge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBpcyBub3QgYm9vbGVhbi5gLCB0aGlzLm5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBpcyBub3QgcHJlc2VudC5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgaW5kZXBlbmRlbnRseS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgbm9kZXMgPSB0aGlzLmZpbmROb2RlcyhzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBleHByZXNzaW9ucyA9IEV4cHJlc3Npb25zLmZyb21Ob2Rlcyhub2RlcywgY29udGV4dCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdmFsdWUgPSBwcm9jZWR1cmUuY2FsbChleHByZXNzaW9ucywgY29udGV4dCksXG4gICAgICAgICAgICBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGJvb2xlYW47IC8vL1xuICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGV4Y2VwdGlvbi5nZXRNZXNzYWdlKCk7XG5cbiAgICAgIGNvbnRleHQuaW5mbyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBpbmRlcGVuZGVudGx5LmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZUpTT04gPSB0aGlzLnJlZmVyZW5jZS50b0pTT04oKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzSlNPTiA9IHBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OKHRoaXMucGFyYW1ldGVycyksXG4gICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlSlNPTiwgIC8vL1xuICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICByZWZlcmVuY2UsXG4gICAgICAgICAgICBwYXJhbWV0ZXJzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZUNhbGxcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMocmVmZXJlbmNlLCBwYXJhbWV0ZXJzKSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwobm9kZSwgc3RyaW5nLCByZWZlcmVuY2UsIHBhcmFtZXRlcnMpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBwcmVtaXNlTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gICAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IHN1cHBvc2l0aW9uTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gICAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlLCBQcm9jZWR1cmVDYWxsIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZSwgLy8vXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21SZWZlcmVuY2VBbmRQYXJhbWV0ZXJzKHJlZmVyZW5jZSwgcGFyYW1ldGVycyksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChub2RlLCBzdHJpbmcsIHJlZmVyZW5jZSwgcGFyYW1ldGVycyk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGRvbSxcbiAgICAgICAgcGFyYW1ldGVyTm9kZXMgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRQYXJhbWV0ZXJOb2RlcygpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gUGFyYW1ldGVyLmZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21SZWZlcmVuY2VBbmRQYXJhbWV0ZXJzKHJlZmVyZW5jZSwgcGFyYW1ldGVycykge1xuICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSBwYXJhbWV0ZXJzLnJlZHVjZSgocGFyYW1ldGVyc1N0cmluZywgcGFyYW1ldGVyKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IChwYXJhbWV0ZXJzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlclN0cmluZyA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3BhcmFtZXRlcnNTdHJpbmd9LCAke3BhcmFtZXRlclN0cmluZ31gO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcnNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBgJHtyZWZlcmVuY2VTdHJpbmd9KCR7cGFyYW1ldGVyc1N0cmluZ30pYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiUHJvY2VkdXJlQ2FsbCIsIm5vZGUiLCJzdHJpbmciLCJyZWZlcmVuY2UiLCJwYXJhbWV0ZXJzIiwiZ2V0Tm9kZSIsImdldFN0cmluZyIsImdldFJlZmVyZW5jZSIsImdldFBhcmFtZXRlcnMiLCJmaW5kTm9kZXMiLCJzdWJzdGl0dXRpb25zIiwibm9kZXMiLCJtYXAiLCJwYXJhbWV0ZXIiLCJyZXBsYWNlbWVudE5vZGUiLCJmaW5kUmVwbGFjZW1lbnROb2RlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwidHJhY2UiLCJwcm9jZWR1cmUiLCJmaW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UiLCJwcm9jZWR1cmVCb29sZWFuIiwiaXNCb29sZWFuIiwiZGVidWciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsImV4cHJlc3Npb25zIiwiRXhwcmVzc2lvbnMiLCJmcm9tTm9kZXMiLCJ2YWx1ZSIsImNhbGwiLCJib29sZWFuIiwiZ2V0Qm9vbGVhbiIsImV4Y2VwdGlvbiIsIm1lc3NhZ2UiLCJnZXRNZXNzYWdlIiwiaW5mbyIsInRvSlNPTiIsInJlZmVyZW5jZUpTT04iLCJwYXJhbWV0ZXJzSlNPTiIsInBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OIiwianNvbiIsImZyb21KU09OIiwicmVmZXJlbmNlRnJvbUpTT04iLCJwYXJhbWV0ZXJzRnJvbUpTT04iLCJzdHJpbmdGcm9tUmVmZXJlbmNlQW5kUGFyYW1ldGVycyIsInByb2NlZHVyZUNhbGwiLCJmcm9tUHJlbWlzZU5vZGUiLCJwcmVtaXNlTm9kZSIsInByb2NlZHVyZUNhbGxOb2RlIiwiZ2V0UHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsIm5hbWUiLCJSZWZlcmVuY2UiLCJkb20iLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwiZnJvbVByb2NlZHVyZUNhbGxOb2RlIiwiUGFyYW1ldGVyIiwicGFyYW1ldGVyTm9kZXMiLCJnZXRQYXJhbWV0ZXJOb2RlcyIsInBhcmFtZXRlck5vZGUiLCJmcm9tUGFyYW1ldGVyTm9kZSIsInJlZmVyZW5jZVN0cmluZyIsInBhcmFtZXRlcnNTdHJpbmciLCJyZWR1Y2UiLCJwYXJhbWV0ZXJTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7OzJCQVA0QjsyREFFWjtvQkFHa0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVsRixXQUFlQSxJQUFBQSxnQkFBVyxrQ0FBQzthQUFNQyxjQUNuQkMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsVUFBVTtnQ0FEaEJKO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7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