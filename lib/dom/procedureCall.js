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
                var unifiesIndependently = false;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlQ2FsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRXhwcmVzc2lvbnMgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IHJlZmVyZW5jZUZyb21KU09OLCBwYXJhbWV0ZXJzRnJvbUpTT04sIHBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFByb2NlZHVyZUNhbGwge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBzdHJpbmcsIHJlZmVyZW5jZSwgcGFyYW1ldGVycykge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgZmluZE5vZGVzKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBub2RlcyA9IHRoaXMucGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnROb2RlID0gcGFyYW1ldGVyLmZpbmRSZXBsYWNlbWVudE5vZGUoc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgICBub2RlID0gcmVwbGFjZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSk7XG5cbiAgICBpZiAocHJvY2VkdXJlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVCb29sZWFuID0gcHJvY2VkdXJlLmlzQm9vbGVhbigpO1xuXG4gICAgICBpZiAocHJvY2VkdXJlQm9vbGVhbikge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBpcyBub3QgYm9vbGVhbi5gLCB0aGlzLm5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBpcyBub3QgcHJlc2VudC5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgbm9kZXMgPSB0aGlzLmZpbmROb2RlcyhzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBleHByZXNzaW9ucyA9IEV4cHJlc3Npb25zLmZyb21Ob2Rlcyhub2RlcywgY29udGV4dCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdmFsdWUgPSBwcm9jZWR1cmUuY2FsbChleHByZXNzaW9ucywgY29udGV4dCksXG4gICAgICAgICAgICBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGJvb2xlYW47IC8vL1xuICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGV4Y2VwdGlvbi5nZXRNZXNzYWdlKCk7XG5cbiAgICAgIGNvbnRleHQuaW5mbyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCByZWZlcmVuY2VKU09OID0gdGhpcy5yZWZlcmVuY2UudG9KU09OKCksXG4gICAgICAgICAgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTih0aGlzLnBhcmFtZXRlcnMpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUpTT04sICAvLy9cbiAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgcmVmZXJlbmNlLFxuICAgICAgICAgICAgcGFyYW1ldGVyc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVDYWxsXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21SZWZlcmVuY2VBbmRQYXJhbWV0ZXJzKHJlZmVyZW5jZSwgcGFyYW1ldGVycyksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKG5vZGUsIHN0cmluZywgcmVmZXJlbmNlLCBwYXJhbWV0ZXJzKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgc3RhdGljIGZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gcHJlbWlzZU5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICAgIGlmIChwcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBzdXBwb3NpdGlvbk5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICAgIGlmIChwcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSwgUHJvY2VkdXJlQ2FsbCB9ID0gZG9tLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUsIC8vL1xuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tUmVmZXJlbmNlQW5kUGFyYW1ldGVycyhyZWZlcmVuY2UsIHBhcmFtZXRlcnMpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwobm9kZSwgc3RyaW5nLCByZWZlcmVuY2UsIHBhcmFtZXRlcnMpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5mdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBkb20sXG4gICAgICAgIHBhcmFtZXRlck5vZGVzID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlck5vZGVzLm1hcCgocGFyYW1ldGVyTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IFBhcmFtZXRlci5mcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tUmVmZXJlbmNlQW5kUGFyYW1ldGVycyhyZWZlcmVuY2UsIHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gcGFyYW1ldGVycy5yZWR1Y2UoKHBhcmFtZXRlcnNTdHJpbmcsIHBhcmFtZXRlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSAocGFyYW1ldGVyc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtwYXJhbWV0ZXJzU3RyaW5nfSwgJHtwYXJhbWV0ZXJTdHJpbmd9YDtcblxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXJzU3RyaW5nO1xuICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgc3RyaW5nID0gYCR7cmVmZXJlbmNlU3RyaW5nfSgke3BhcmFtZXRlcnNTdHJpbmd9KWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlByb2NlZHVyZUNhbGwiLCJub2RlIiwic3RyaW5nIiwicmVmZXJlbmNlIiwicGFyYW1ldGVycyIsImdldE5vZGUiLCJnZXRTdHJpbmciLCJnZXRSZWZlcmVuY2UiLCJnZXRQYXJhbWV0ZXJzIiwiZmluZE5vZGVzIiwic3Vic3RpdHV0aW9ucyIsIm5vZGVzIiwibWFwIiwicGFyYW1ldGVyIiwicmVwbGFjZW1lbnROb2RlIiwiZmluZFJlcGxhY2VtZW50Tm9kZSIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwiY29udGV4dCIsInZlcmlmaWVzIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInRyYWNlIiwicHJvY2VkdXJlIiwiZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlIiwicHJvY2VkdXJlQm9vbGVhbiIsImlzQm9vbGVhbiIsImRlYnVnIiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJleHByZXNzaW9ucyIsIkV4cHJlc3Npb25zIiwiZnJvbU5vZGVzIiwidmFsdWUiLCJjYWxsIiwiYm9vbGVhbiIsImdldEJvb2xlYW4iLCJleGNlcHRpb24iLCJtZXNzYWdlIiwiZ2V0TWVzc2FnZSIsImluZm8iLCJ0b0pTT04iLCJyZWZlcmVuY2VKU09OIiwicGFyYW1ldGVyc0pTT04iLCJwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInJlZmVyZW5jZUZyb21KU09OIiwicGFyYW1ldGVyc0Zyb21KU09OIiwic3RyaW5nRnJvbVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMiLCJwcm9jZWR1cmVDYWxsIiwiZnJvbVByZW1pc2VOb2RlIiwicHJlbWlzZU5vZGUiLCJwcm9jZWR1cmVDYWxsTm9kZSIsImdldFByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJuYW1lIiwiUmVmZXJlbmNlIiwiZG9tIiwicGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZSIsImZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsIlBhcmFtZXRlciIsInBhcmFtZXRlck5vZGVzIiwiZ2V0UGFyYW1ldGVyTm9kZXMiLCJwYXJhbWV0ZXJOb2RlIiwiZnJvbVBhcmFtZXRlck5vZGUiLCJyZWZlcmVuY2VTdHJpbmciLCJwYXJhbWV0ZXJzU3RyaW5nIiwicmVkdWNlIiwicGFyYW1ldGVyU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OzsyQkFQNEI7MkRBRVo7b0JBR2tFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbEYsV0FBZUEsSUFBQUEsZ0JBQVcsa0NBQUM7YUFBTUMsY0FDbkJDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFVBQVU7Z0NBRGhCSjtRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTtt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