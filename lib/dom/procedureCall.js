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
var _query = require("../utilities/query");
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
var parameterNodesQuery = (0, _query.nodesQuery)("/procedureCall/parameter"), premiseProcedureCallNodeQuery = (0, _query.nodeQuery)("/premise/procedureCall"), suppositionProcedureCallNodeQuery = (0, _query.nodeQuery)("/supposition/procedureCall");
var _default = (0, _dom.domAssigned)((_ProcedureCall = /*#__PURE__*/ function() {
    function ProcedureCall(string, reference, parameters) {
        _class_call_check(this, ProcedureCall);
        this.string = string;
        this.reference = reference;
        this.parameters = parameters;
    }
    _create_class(ProcedureCall, [
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
                var verified = false;
                var procedureCallString = this.string; ///
                context.trace("Verifying the '".concat(procedureCallString, "' procedure call..."));
                var procedure = context.findProcedureByReference(this.reference);
                if (procedure !== null) {
                    var procedureBoolean = procedure.isBoolean();
                    if (procedureBoolean) {
                        verified = true;
                    } else {
                        context.trace("The '".concat(procedureCallString, "' procedure is not boolean."));
                    }
                } else {
                    context.trace("The '".concat(procedureCallString, "' procedure is not present."));
                }
                if (verified) {
                    context.debug("...verified the '".concat(procedureCallString, "' procedure call."));
                }
                return verified;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, context) {
                var unifiedIndependently = false;
                var procedureCallString = this.string; ///
                context.trace("Unifying the '".concat(procedureCallString, "' procedure call independently..."));
                var procedure = context.findProcedureByReference(this.reference), nodes = this.findNodes(substitutions), values = _occamfurtle.Values.fromNodes(nodes, context);
                try {
                    var value = procedure.call(values, context), boolean = value.getBoolean();
                    unifiedIndependently = boolean; ///
                } catch (exception) {
                    var message = exception.getMessage();
                    context.info(message);
                }
                if (unifiedIndependently) {
                    context.debug("...unified the '".concat(procedureCallString, "' procedure call independently."));
                }
                return unifiedIndependently;
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
            value: function fromJSON(json, fileContext) {
                var reference = (0, _json.referenceFromJSON)(json, fileContext), parameters = (0, _json.parametersFromJSON)(json, fileContext), string = stringFromReferenceAndParameters(reference, parameters), procedureCall = new ProcedureCall(string, reference, parameters);
                return procedureCall;
            }
        },
        {
            key: "fromPremiseNode",
            value: function fromPremiseNode(premiseNode, context) {
                var procedureCall = null;
                var premiseProcedureCallNode = premiseProcedureCallNodeQuery(premiseNode);
                if (premiseProcedureCallNode !== null) {
                    var procedureCallNode = premiseProcedureCallNode; ///
                    procedureCall = procedureCallFromProcedureCallNode(procedureCallNode, context);
                }
                return procedureCall;
            }
        },
        {
            key: "fromSuppositionNode",
            value: function fromSuppositionNode(suppositionNode, context) {
                var procedureCall = null;
                var suppositionProcedureCallNode = suppositionProcedureCallNodeQuery(suppositionNode);
                if (suppositionProcedureCallNode !== null) {
                    var procedureCallNode = suppositionProcedureCallNode; ///
                    procedureCall = procedureCallFromProcedureCallNode(procedureCallNode, context);
                }
                return procedureCall;
            }
        }
    ]);
    return ProcedureCall;
}(), _define_property(_ProcedureCall, "name", "ProcedureCall"), _ProcedureCall));
function procedureCallFromProcedureCallNode(procedureCallNode, context) {
    var Reference = _dom.default.Reference, ProcedureCall = _dom.default.ProcedureCall, parameters = parametersFromProcedureCallNode(procedureCallNode, context), reference = Reference.fromProcedureCallNode(procedureCallNode, context), string = stringFromReferenceAndParameters(reference, parameters), procedureCall = new ProcedureCall(string, reference, parameters);
    return procedureCall;
}
function parametersFromProcedureCallNode(procedureCallNode, context) {
    var Parameter = _dom.default.Parameter, parameterNodes = parameterNodesQuery(procedureCallNode), parameters = parameterNodes.map(function(parameterNode) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlQ2FsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVmFsdWVzIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyByZWZlcmVuY2VGcm9tSlNPTiwgcGFyYW1ldGVyc0Zyb21KU09OLCBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCBwYXJhbWV0ZXJOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9wcm9jZWR1cmVDYWxsL3BhcmFtZXRlclwiKSxcbiAgICAgIHByZW1pc2VQcm9jZWR1cmVDYWxsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ByZW1pc2UvcHJvY2VkdXJlQ2FsbFwiKSxcbiAgICAgIHN1cHBvc2l0aW9uUHJvY2VkdXJlQ2FsbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdXBwb3NpdGlvbi9wcm9jZWR1cmVDYWxsXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQcm9jZWR1cmVDYWxsIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCByZWZlcmVuY2UsIHBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XG4gIH1cblxuICBmaW5kTm9kZXMoc3Vic3RpdHV0aW9ucykge1xuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5wYXJhbWV0ZXJzLm1hcCgocGFyYW1ldGVyKSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudE5vZGUgPSBwYXJhbWV0ZXIuZmluZFJlcGxhY2VtZW50Tm9kZShzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICAgIG5vZGUgPSByZXBsYWNlbWVudE5vZGU7ICAvLy9cblxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLi4uYCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSk7XG5cbiAgICBpZiAocHJvY2VkdXJlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVCb29sZWFuID0gcHJvY2VkdXJlLmlzQm9vbGVhbigpO1xuXG4gICAgICBpZiAocHJvY2VkdXJlQm9vbGVhbikge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBpcyBub3QgYm9vbGVhbi5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgbm9kZXMgPSB0aGlzLmZpbmROb2RlcyhzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICB2YWx1ZXMgPSBWYWx1ZXMuZnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHByb2NlZHVyZS5jYWxsKHZhbHVlcywgY29udGV4dCksXG4gICAgICAgICAgICBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgICB1bmlmaWVkSW5kZXBlbmRlbnRseSA9IGJvb2xlYW47IC8vL1xuICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGV4Y2VwdGlvbi5nZXRNZXNzYWdlKCk7XG5cbiAgICAgIGNvbnRleHQuaW5mbyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBpZiAodW5pZmllZEluZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCByZWZlcmVuY2VKU09OID0gdGhpcy5yZWZlcmVuY2UudG9KU09OKCksXG4gICAgICAgICAgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTih0aGlzLnBhcmFtZXRlcnMpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUpTT04sICAvLy9cbiAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgcmVmZXJlbmNlLFxuICAgICAgICAgICAgcGFyYW1ldGVyc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVDYWxsXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21SZWZlcmVuY2VBbmRQYXJhbWV0ZXJzKHJlZmVyZW5jZSwgcGFyYW1ldGVycyksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKHN0cmluZywgcmVmZXJlbmNlLCBwYXJhbWV0ZXJzKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgc3RhdGljIGZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICAgIGNvbnN0IHByZW1pc2VQcm9jZWR1cmVDYWxsTm9kZSA9IHByZW1pc2VQcm9jZWR1cmVDYWxsTm9kZVF1ZXJ5KHByZW1pc2VOb2RlKTtcblxuICAgIGlmIChwcmVtaXNlUHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gcHJlbWlzZVByb2NlZHVyZUNhbGxOb2RlOyAvLy9cblxuICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25Qcm9jZWR1cmVDYWxsTm9kZSA9IHN1cHBvc2l0aW9uUHJvY2VkdXJlQ2FsbE5vZGVRdWVyeShzdXBwb3NpdGlvbk5vZGUpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uUHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gc3VwcG9zaXRpb25Qcm9jZWR1cmVDYWxsTm9kZTsgLy8vXG5cbiAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UsIFByb2NlZHVyZUNhbGwgfSA9IGRvbSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMocmVmZXJlbmNlLCBwYXJhbWV0ZXJzKSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKHN0cmluZywgcmVmZXJlbmNlLCBwYXJhbWV0ZXJzKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZG9tLFxuICAgICAgICBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlck5vZGVzUXVlcnkocHJvY2VkdXJlQ2FsbE5vZGUpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gUGFyYW1ldGVyLmZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21SZWZlcmVuY2VBbmRQYXJhbWV0ZXJzKHJlZmVyZW5jZSwgcGFyYW1ldGVycykge1xuICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSBwYXJhbWV0ZXJzLnJlZHVjZSgocGFyYW1ldGVyc1N0cmluZywgcGFyYW1ldGVyKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IChwYXJhbWV0ZXJzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlclN0cmluZyA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3BhcmFtZXRlcnNTdHJpbmd9LCAke3BhcmFtZXRlclN0cmluZ31gO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcnNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBgJHtyZWZlcmVuY2VTdHJpbmd9KCR7cGFyYW1ldGVyc1N0cmluZ30pYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbInBhcmFtZXRlck5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJlbWlzZVByb2NlZHVyZUNhbGxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdXBwb3NpdGlvblByb2NlZHVyZUNhbGxOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlByb2NlZHVyZUNhbGwiLCJzdHJpbmciLCJyZWZlcmVuY2UiLCJwYXJhbWV0ZXJzIiwiZ2V0U3RyaW5nIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0UGFyYW1ldGVycyIsImZpbmROb2RlcyIsInN1YnN0aXR1dGlvbnMiLCJub2RlcyIsIm1hcCIsInBhcmFtZXRlciIsInJlcGxhY2VtZW50Tm9kZSIsImZpbmRSZXBsYWNlbWVudE5vZGUiLCJub2RlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwidHJhY2UiLCJwcm9jZWR1cmUiLCJmaW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UiLCJwcm9jZWR1cmVCb29sZWFuIiwiaXNCb29sZWFuIiwiZGVidWciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVkSW5kZXBlbmRlbnRseSIsInZhbHVlcyIsIlZhbHVlcyIsImZyb21Ob2RlcyIsInZhbHVlIiwiY2FsbCIsImJvb2xlYW4iLCJnZXRCb29sZWFuIiwiZXhjZXB0aW9uIiwibWVzc2FnZSIsImdldE1lc3NhZ2UiLCJpbmZvIiwidG9KU09OIiwicmVmZXJlbmNlSlNPTiIsInBhcmFtZXRlcnNKU09OIiwicGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsInJlZmVyZW5jZUZyb21KU09OIiwicGFyYW1ldGVyc0Zyb21KU09OIiwic3RyaW5nRnJvbVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMiLCJwcm9jZWR1cmVDYWxsIiwiZnJvbVByZW1pc2VOb2RlIiwicHJlbWlzZU5vZGUiLCJwcmVtaXNlUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25Qcm9jZWR1cmVDYWxsTm9kZSIsIm5hbWUiLCJSZWZlcmVuY2UiLCJkb20iLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwiZnJvbVByb2NlZHVyZUNhbGxOb2RlIiwiUGFyYW1ldGVyIiwicGFyYW1ldGVyTm9kZXMiLCJwYXJhbWV0ZXJOb2RlIiwiZnJvbVBhcmFtZXRlck5vZGUiLCJyZWZlcmVuY2VTdHJpbmciLCJwYXJhbWV0ZXJzU3RyaW5nIiwicmVkdWNlIiwicGFyYW1ldGVyU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OzsyQkFadUI7MkRBRVA7cUJB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