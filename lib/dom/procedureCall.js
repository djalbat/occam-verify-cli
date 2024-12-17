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
        }
    ], [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlQ2FsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVmFsdWVzIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHBhcmFtZXRlck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3Byb2NlZHVyZUNhbGwvcGFyYW1ldGVyXCIpLFxuICAgICAgcHJlbWlzZVByb2NlZHVyZUNhbGxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJlbWlzZS9wcm9jZWR1cmVDYWxsXCIpLFxuICAgICAgc3VwcG9zaXRpb25Qcm9jZWR1cmVDYWxsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1cHBvc2l0aW9uL3Byb2NlZHVyZUNhbGxcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFByb2NlZHVyZUNhbGwge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHJlZmVyZW5jZSwgcGFyYW1ldGVycykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgfVxuXG4gIGZpbmROb2RlcyhzdWJzdGl0dXRpb25zKSB7XG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLnBhcmFtZXRlcnMubWFwKChwYXJhbWV0ZXIpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50Tm9kZSA9IHBhcmFtZXRlci5maW5kUmVwbGFjZW1lbnROb2RlKHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgICAgbm9kZSA9IHJlcGxhY2VtZW50Tm9kZTsgIC8vL1xuXG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuLi5gKTtcblxuICAgIGNvbnN0IHByb2NlZHVyZVByZXNlbnQgPSBjb250ZXh0LmlzUHJvY2VkdXJlUHJlc2VudEJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKTtcblxuICAgIGlmIChwcm9jZWR1cmVQcmVzZW50KSB7XG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgIG5vZGVzID0gdGhpcy5maW5kTm9kZXMoc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgdmFsdWVzID0gVmFsdWVzLmZyb21Ob2Rlcyhub2RlcywgY29udGV4dCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdmFsdWUgPSBwcm9jZWR1cmUuY2FsbCh2YWx1ZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgYm9vbGVhbiA9IHZhbHVlLmdldEJvb2xlYW4oKTtcblxuICAgICAgdW5pZmllZEluZGVwZW5kZW50bHkgPSBib29sZWFuOyAvLy9cbiAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBleGNlcHRpb24uZ2V0TWVzc2FnZSgpO1xuXG4gICAgICBjb250ZXh0LmluZm8obWVzc2FnZSk7XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZEluZGVwZW5kZW50bHk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlQ2FsbFwiO1xuXG4gIHN0YXRpYyBmcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgICBjb25zdCBwcmVtaXNlUHJvY2VkdXJlQ2FsbE5vZGUgPSBwcmVtaXNlUHJvY2VkdXJlQ2FsbE5vZGVRdWVyeShwcmVtaXNlTm9kZSk7XG5cbiAgICBpZiAocHJlbWlzZVByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZG9tLFxuICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbE5vZGUgPSBwcmVtaXNlUHJvY2VkdXJlQ2FsbE5vZGUsIC8vL1xuICAgICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tUmVmZXJlbmNlQW5kUGFyYW1ldGVycyhyZWZlcmVuY2UsIHBhcmFtZXRlcnMpO1xuXG4gICAgICBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoc3RyaW5nLCByZWZlcmVuY2UsIHBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25Qcm9jZWR1cmVDYWxsTm9kZSA9IHN1cHBvc2l0aW9uUHJvY2VkdXJlQ2FsbE5vZGVRdWVyeShzdXBwb3NpdGlvbk5vZGUpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uUHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBkb20sXG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsTm9kZSA9IHN1cHBvc2l0aW9uUHJvY2VkdXJlQ2FsbE5vZGUsIC8vL1xuICAgICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tUmVmZXJlbmNlQW5kUGFyYW1ldGVycyhyZWZlcmVuY2UsIHBhcmFtZXRlcnMpO1xuXG4gICAgICBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoc3RyaW5nLCByZWZlcmVuY2UsIHBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZG9tLFxuICAgICAgICBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlck5vZGVzUXVlcnkocHJvY2VkdXJlQ2FsbE5vZGUpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gUGFyYW1ldGVyLmZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21SZWZlcmVuY2VBbmRQYXJhbWV0ZXJzKHJlZmVyZW5jZSwgcGFyYW1ldGVycykge1xuICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSBwYXJhbWV0ZXJzLnJlZHVjZSgocGFyYW1ldGVyc1N0cmluZywgcGFyYW1ldGVyKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IChwYXJhbWV0ZXJzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlclN0cmluZyA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3BhcmFtZXRlcnNTdHJpbmd9LCAke3BhcmFtZXRlclN0cmluZ31gO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcnNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBgJHtyZWZlcmVuY2VTdHJpbmd9KCR7cGFyYW1ldGVyc1N0cmluZ30pYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbInBhcmFtZXRlck5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJlbWlzZVByb2NlZHVyZUNhbGxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdXBwb3NpdGlvblByb2NlZHVyZUNhbGxOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlByb2NlZHVyZUNhbGwiLCJzdHJpbmciLCJyZWZlcmVuY2UiLCJwYXJhbWV0ZXJzIiwiZ2V0U3RyaW5nIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0UGFyYW1ldGVycyIsImZpbmROb2RlcyIsInN1YnN0aXR1dGlvbnMiLCJub2RlcyIsIm1hcCIsInBhcmFtZXRlciIsInJlcGxhY2VtZW50Tm9kZSIsImZpbmRSZXBsYWNlbWVudE5vZGUiLCJub2RlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwidHJhY2UiLCJwcm9jZWR1cmVQcmVzZW50IiwiaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UiLCJkZWJ1ZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZWRJbmRlcGVuZGVudGx5IiwicHJvY2VkdXJlIiwiZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlIiwidmFsdWVzIiwiVmFsdWVzIiwiZnJvbU5vZGVzIiwidmFsdWUiLCJjYWxsIiwiYm9vbGVhbiIsImdldEJvb2xlYW4iLCJleGNlcHRpb24iLCJtZXNzYWdlIiwiZ2V0TWVzc2FnZSIsImluZm8iLCJmcm9tUHJlbWlzZU5vZGUiLCJwcmVtaXNlTm9kZSIsInByb2NlZHVyZUNhbGwiLCJwcmVtaXNlUHJvY2VkdXJlQ2FsbE5vZGUiLCJSZWZlcmVuY2UiLCJkb20iLCJwcm9jZWR1cmVDYWxsTm9kZSIsInBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJmcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJzdHJpbmdGcm9tUmVmZXJlbmNlQW5kUGFyYW1ldGVycyIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvblByb2NlZHVyZUNhbGxOb2RlIiwibmFtZSIsIlBhcmFtZXRlciIsInBhcmFtZXRlck5vZGVzIiwicGFyYW1ldGVyTm9kZSIsImZyb21QYXJhbWV0ZXJOb2RlIiwicmVmZXJlbmNlU3RyaW5nIiwicGFyYW1ldGVyc1N0cmluZyIsInJlZHVjZSIsInBhcmFtZXRlclN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7MkJBWHVCOzJEQUVQO3FCQUdzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLHNCQUFzQkMsSUFBQUEsaUJBQVUsRUFBQyw2QkFDakNDLGdDQUFnQ0MsSUFBQUEsZ0JBQVMsRUFBQywyQkFDMUNDLG9DQUFvQ0QsSUFB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