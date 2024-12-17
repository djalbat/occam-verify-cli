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
                var procedurePresent = context.isProcedurePresentByReference(this.reference);
                if (procedurePresent) {
                    verified = true;
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
                    var Reference = _dom.default.Reference, procedureCallNode = premiseProcedureCallNode, parameters = parametersFromProcedureCallNode(procedureCallNode, context), reference = Reference.fromProcedureCallNode(procedureCallNode, context), string = stringFromReferenceAndParameters(reference, parameters);
                    procedureCall = new ProcedureCall(string, reference, parameters);
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
                    var Reference = _dom.default.Reference, procedureCallNode = suppositionProcedureCallNode, parameters = parametersFromProcedureCallNode(procedureCallNode, context), reference = Reference.fromProcedureCallNode(procedureCallNode, context), string = stringFromReferenceAndParameters(reference, parameters);
                    procedureCall = new ProcedureCall(string, reference, parameters);
                }
                return procedureCall;
            }
        }
    ]);
    return ProcedureCall;
}(), _define_property(_ProcedureCall, "name", "ProcedureCall"), _ProcedureCall));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlQ2FsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVmFsdWVzIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQge3BhcmFtZXRlcnNGcm9tSlNPTiwgcGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04sIHJlZmVyZW5jZUZyb21KU09OfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgcGFyYW1ldGVyTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcHJvY2VkdXJlQ2FsbC9wYXJhbWV0ZXJcIiksXG4gICAgICBwcmVtaXNlUHJvY2VkdXJlQ2FsbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcmVtaXNlL3Byb2NlZHVyZUNhbGxcIiksXG4gICAgICBzdXBwb3NpdGlvblByb2NlZHVyZUNhbGxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3VwcG9zaXRpb24vcHJvY2VkdXJlQ2FsbFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvY2VkdXJlQ2FsbCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgcmVmZXJlbmNlLCBwYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgZmluZE5vZGVzKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBub2RlcyA9IHRoaXMucGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnROb2RlID0gcGFyYW1ldGVyLmZpbmRSZXBsYWNlbWVudE5vZGUoc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgICBub2RlID0gcmVwbGFjZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmApO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlUHJlc2VudCA9IGNvbnRleHQuaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpO1xuXG4gICAgaWYgKHByb2NlZHVyZVByZXNlbnQpIHtcbiAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgbm9kZXMgPSB0aGlzLmZpbmROb2RlcyhzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICB2YWx1ZXMgPSBWYWx1ZXMuZnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHByb2NlZHVyZS5jYWxsKHZhbHVlcywgY29udGV4dCksXG4gICAgICAgICAgICBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgICB1bmlmaWVkSW5kZXBlbmRlbnRseSA9IGJvb2xlYW47IC8vL1xuICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGV4Y2VwdGlvbi5nZXRNZXNzYWdlKCk7XG5cbiAgICAgIGNvbnRleHQuaW5mbyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBpZiAodW5pZmllZEluZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCByZWZlcmVuY2VKU09OID0gdGhpcy5yZWZlcmVuY2UudG9KU09OKCksXG4gICAgICAgICAgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTih0aGlzLnBhcmFtZXRlcnMpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUpTT04sICAvLy9cbiAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgcmVmZXJlbmNlLFxuICAgICAgICAgICAgcGFyYW1ldGVyc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVDYWxsXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21SZWZlcmVuY2VBbmRQYXJhbWV0ZXJzKHJlZmVyZW5jZSwgcGFyYW1ldGVycyksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKHN0cmluZywgcmVmZXJlbmNlLCBwYXJhbWV0ZXJzKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgc3RhdGljIGZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICAgIGNvbnN0IHByZW1pc2VQcm9jZWR1cmVDYWxsTm9kZSA9IHByZW1pc2VQcm9jZWR1cmVDYWxsTm9kZVF1ZXJ5KHByZW1pc2VOb2RlKTtcblxuICAgIGlmIChwcmVtaXNlUHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBkb20sXG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsTm9kZSA9IHByZW1pc2VQcm9jZWR1cmVDYWxsTm9kZSwgLy8vXG4gICAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21SZWZlcmVuY2VBbmRQYXJhbWV0ZXJzKHJlZmVyZW5jZSwgcGFyYW1ldGVycyk7XG5cbiAgICAgIHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChzdHJpbmcsIHJlZmVyZW5jZSwgcGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblByb2NlZHVyZUNhbGxOb2RlID0gc3VwcG9zaXRpb25Qcm9jZWR1cmVDYWxsTm9kZVF1ZXJ5KHN1cHBvc2l0aW9uTm9kZSk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25Qcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGRvbSxcbiAgICAgICAgICAgIHByb2NlZHVyZUNhbGxOb2RlID0gc3VwcG9zaXRpb25Qcm9jZWR1cmVDYWxsTm9kZSwgLy8vXG4gICAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21SZWZlcmVuY2VBbmRQYXJhbWV0ZXJzKHJlZmVyZW5jZSwgcGFyYW1ldGVycyk7XG5cbiAgICAgIHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChzdHJpbmcsIHJlZmVyZW5jZSwgcGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBkb20sXG4gICAgICAgIHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyTm9kZXNRdWVyeShwcm9jZWR1cmVDYWxsTm9kZSksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSBQYXJhbWV0ZXIuZnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMocmVmZXJlbmNlLCBwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IHBhcmFtZXRlcnMucmVkdWNlKChwYXJhbWV0ZXJzU3RyaW5nLCBwYXJhbWV0ZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJTdHJpbmcgPSBwYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gKHBhcmFtZXRlcnNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyU3RyaW5nIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cGFyYW1ldGVyc1N0cmluZ30sICR7cGFyYW1ldGVyU3RyaW5nfWA7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyc1N0cmluZztcbiAgICAgICAgfSwgbnVsbCksXG4gICAgICAgIHN0cmluZyA9IGAke3JlZmVyZW5jZVN0cmluZ30oJHtwYXJhbWV0ZXJzU3RyaW5nfSlgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsicGFyYW1ldGVyTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcmVtaXNlUHJvY2VkdXJlQ2FsbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN1cHBvc2l0aW9uUHJvY2VkdXJlQ2FsbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUHJvY2VkdXJlQ2FsbCIsInN0cmluZyIsInJlZmVyZW5jZSIsInBhcmFtZXRlcnMiLCJnZXRTdHJpbmciLCJnZXRSZWZlcmVuY2UiLCJnZXRQYXJhbWV0ZXJzIiwiZmluZE5vZGVzIiwic3Vic3RpdHV0aW9ucyIsIm5vZGVzIiwibWFwIiwicGFyYW1ldGVyIiwicmVwbGFjZW1lbnROb2RlIiwiZmluZFJlcGxhY2VtZW50Tm9kZSIsIm5vZGUiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImNvbnRleHQiLCJ2ZXJpZmllZCIsInByb2NlZHVyZUNhbGxTdHJpbmciLCJ0cmFjZSIsInByb2NlZHVyZVByZXNlbnQiLCJpc1Byb2NlZHVyZVByZXNlbnRCeVJlZmVyZW5jZSIsImRlYnVnIiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZmllZEluZGVwZW5kZW50bHkiLCJwcm9jZWR1cmUiLCJmaW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UiLCJ2YWx1ZXMiLCJWYWx1ZXMiLCJmcm9tTm9kZXMiLCJ2YWx1ZSIsImNhbGwiLCJib29sZWFuIiwiZ2V0Qm9vbGVhbiIsImV4Y2VwdGlvbiIsIm1lc3NhZ2UiLCJnZXRNZXNzYWdlIiwiaW5mbyIsInRvSlNPTiIsInJlZmVyZW5jZUpTT04iLCJwYXJhbWV0ZXJzSlNPTiIsInBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJyZWZlcmVuY2VGcm9tSlNPTiIsInBhcmFtZXRlcnNGcm9tSlNPTiIsInN0cmluZ0Zyb21SZWZlcmVuY2VBbmRQYXJhbWV0ZXJzIiwicHJvY2VkdXJlQ2FsbCIsImZyb21QcmVtaXNlTm9kZSIsInByZW1pc2VOb2RlIiwicHJlbWlzZVByb2NlZHVyZUNhbGxOb2RlIiwiUmVmZXJlbmNlIiwiZG9tIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwiZnJvbVByb2NlZHVyZUNhbGxOb2RlIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uUHJvY2VkdXJlQ2FsbE5vZGUiLCJuYW1lIiwiUGFyYW1ldGVyIiwicGFyYW1ldGVyTm9kZXMiLCJwYXJhbWV0ZXJOb2RlIiwiZnJvbVBhcmFtZXRlck5vZGUiLCJyZWZlcmVuY2VTdHJpbmciLCJwYXJhbWV0ZXJzU3RyaW5nIiwicmVkdWNlIiwicGFyYW1ldGVyU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OzsyQkFadUI7MkRBRVA7cUJBR3NCO29CQUMwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQU1BLHNCQUFzQkMsSUFBQUEsaUJBQVUsRUFBQyw2QkFDakND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