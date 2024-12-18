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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlQ2FsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVmFsdWVzIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQge3BhcmFtZXRlcnNGcm9tSlNPTiwgcGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04sIHJlZmVyZW5jZUZyb21KU09OfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgcGFyYW1ldGVyTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcHJvY2VkdXJlQ2FsbC9wYXJhbWV0ZXJcIiksXG4gICAgICBwcmVtaXNlUHJvY2VkdXJlQ2FsbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcmVtaXNlL3Byb2NlZHVyZUNhbGxcIiksXG4gICAgICBzdXBwb3NpdGlvblByb2NlZHVyZUNhbGxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3VwcG9zaXRpb24vcHJvY2VkdXJlQ2FsbFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvY2VkdXJlQ2FsbCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgcmVmZXJlbmNlLCBwYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgZmluZE5vZGVzKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBub2RlcyA9IHRoaXMucGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnROb2RlID0gcGFyYW1ldGVyLmZpbmRSZXBsYWNlbWVudE5vZGUoc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgICBub2RlID0gcmVwbGFjZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmApO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpO1xuXG4gICAgaWYgKHByb2NlZHVyZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvY2VkdXJlQm9vbGVhbiA9IHByb2NlZHVyZS5pc0Jvb2xlYW4oKTtcblxuICAgICAgaWYgKHByb2NlZHVyZUJvb2xlYW4pIHtcbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgaXMgbm90IGJvb2xlYW4uYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgIG5vZGVzID0gdGhpcy5maW5kTm9kZXMoc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgdmFsdWVzID0gVmFsdWVzLmZyb21Ob2Rlcyhub2RlcywgY29udGV4dCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdmFsdWUgPSBwcm9jZWR1cmUuY2FsbCh2YWx1ZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgYm9vbGVhbiA9IHZhbHVlLmdldEJvb2xlYW4oKTtcblxuICAgICAgdW5pZmllZEluZGVwZW5kZW50bHkgPSBib29sZWFuOyAvLy9cbiAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBleGNlcHRpb24uZ2V0TWVzc2FnZSgpO1xuXG4gICAgICBjb250ZXh0LmluZm8obWVzc2FnZSk7XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZEluZGVwZW5kZW50bHk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlSlNPTiA9IHRoaXMucmVmZXJlbmNlLnRvSlNPTigpLFxuICAgICAgICAgIHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04odGhpcy5wYXJhbWV0ZXJzKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VKU09OLCAgLy8vXG4gICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHJlZmVyZW5jZSxcbiAgICAgICAgICAgIHBhcmFtZXRlcnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlQ2FsbFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tUmVmZXJlbmNlQW5kUGFyYW1ldGVycyhyZWZlcmVuY2UsIHBhcmFtZXRlcnMpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChzdHJpbmcsIHJlZmVyZW5jZSwgcGFyYW1ldGVycyk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgICBjb25zdCBwcmVtaXNlUHJvY2VkdXJlQ2FsbE5vZGUgPSBwcmVtaXNlUHJvY2VkdXJlQ2FsbE5vZGVRdWVyeShwcmVtaXNlTm9kZSk7XG5cbiAgICBpZiAocHJlbWlzZVByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZG9tLFxuICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbE5vZGUgPSBwcmVtaXNlUHJvY2VkdXJlQ2FsbE5vZGUsIC8vL1xuICAgICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tUmVmZXJlbmNlQW5kUGFyYW1ldGVycyhyZWZlcmVuY2UsIHBhcmFtZXRlcnMpO1xuXG4gICAgICBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoc3RyaW5nLCByZWZlcmVuY2UsIHBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25Qcm9jZWR1cmVDYWxsTm9kZSA9IHN1cHBvc2l0aW9uUHJvY2VkdXJlQ2FsbE5vZGVRdWVyeShzdXBwb3NpdGlvbk5vZGUpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uUHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBkb20sXG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsTm9kZSA9IHN1cHBvc2l0aW9uUHJvY2VkdXJlQ2FsbE5vZGUsIC8vL1xuICAgICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tUmVmZXJlbmNlQW5kUGFyYW1ldGVycyhyZWZlcmVuY2UsIHBhcmFtZXRlcnMpO1xuXG4gICAgICBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoc3RyaW5nLCByZWZlcmVuY2UsIHBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZG9tLFxuICAgICAgICBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlck5vZGVzUXVlcnkocHJvY2VkdXJlQ2FsbE5vZGUpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gUGFyYW1ldGVyLmZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21SZWZlcmVuY2VBbmRQYXJhbWV0ZXJzKHJlZmVyZW5jZSwgcGFyYW1ldGVycykge1xuICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSBwYXJhbWV0ZXJzLnJlZHVjZSgocGFyYW1ldGVyc1N0cmluZywgcGFyYW1ldGVyKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IChwYXJhbWV0ZXJzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlclN0cmluZyA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3BhcmFtZXRlcnNTdHJpbmd9LCAke3BhcmFtZXRlclN0cmluZ31gO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcnNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBgJHtyZWZlcmVuY2VTdHJpbmd9KCR7cGFyYW1ldGVyc1N0cmluZ30pYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbInBhcmFtZXRlck5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJlbWlzZVByb2NlZHVyZUNhbGxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdXBwb3NpdGlvblByb2NlZHVyZUNhbGxOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlByb2NlZHVyZUNhbGwiLCJzdHJpbmciLCJyZWZlcmVuY2UiLCJwYXJhbWV0ZXJzIiwiZ2V0U3RyaW5nIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0UGFyYW1ldGVycyIsImZpbmROb2RlcyIsInN1YnN0aXR1dGlvbnMiLCJub2RlcyIsIm1hcCIsInBhcmFtZXRlciIsInJlcGxhY2VtZW50Tm9kZSIsImZpbmRSZXBsYWNlbWVudE5vZGUiLCJub2RlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwidHJhY2UiLCJwcm9jZWR1cmUiLCJmaW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UiLCJwcm9jZWR1cmVCb29sZWFuIiwiaXNCb29sZWFuIiwiZGVidWciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVkSW5kZXBlbmRlbnRseSIsInZhbHVlcyIsIlZhbHVlcyIsImZyb21Ob2RlcyIsInZhbHVlIiwiY2FsbCIsImJvb2xlYW4iLCJnZXRCb29sZWFuIiwiZXhjZXB0aW9uIiwibWVzc2FnZSIsImdldE1lc3NhZ2UiLCJpbmZvIiwidG9KU09OIiwicmVmZXJlbmNlSlNPTiIsInBhcmFtZXRlcnNKU09OIiwicGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsInJlZmVyZW5jZUZyb21KU09OIiwicGFyYW1ldGVyc0Zyb21KU09OIiwic3RyaW5nRnJvbVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMiLCJwcm9jZWR1cmVDYWxsIiwiZnJvbVByZW1pc2VOb2RlIiwicHJlbWlzZU5vZGUiLCJwcmVtaXNlUHJvY2VkdXJlQ2FsbE5vZGUiLCJSZWZlcmVuY2UiLCJkb20iLCJwcm9jZWR1cmVDYWxsTm9kZSIsInBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJmcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25Qcm9jZWR1cmVDYWxsTm9kZSIsIm5hbWUiLCJQYXJhbWV0ZXIiLCJwYXJhbWV0ZXJOb2RlcyIsInBhcmFtZXRlck5vZGUiLCJmcm9tUGFyYW1ldGVyTm9kZSIsInJlZmVyZW5jZVN0cmluZyIsInBhcmFtZXRlcnNTdHJpbmciLCJyZWR1Y2UiLCJwYXJhbWV0ZXJTdHJpbmciXSwibWFwcGluZ3MiOiJB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