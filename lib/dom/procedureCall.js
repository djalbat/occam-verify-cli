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
var parameterNodesQuery = (0, _query.nodesQuery)("/procedureCall/parameter"), procedureCallNodeQuery = (0, _query.nodeQuery)("/statement/procedureCall");
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
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var procedureCall = null;
                var procedureCallNode = procedureCallNodeQuery(statementNode);
                if (procedureCallNode !== null) {
                    var Reference = _dom.default.Reference, parameters = parametersFromProcedureCallNode(procedureCallNode, context), reference = Reference.fromProcedureCallNode(procedureCallNode, context), string = stringFromReferenceAndParameters(reference, parameters);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlQ2FsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVmFsdWVzIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHBhcmFtZXRlck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3Byb2NlZHVyZUNhbGwvcGFyYW1ldGVyXCIpLFxuICAgICAgcHJvY2VkdXJlQ2FsbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvcHJvY2VkdXJlQ2FsbFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvY2VkdXJlQ2FsbCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgcmVmZXJlbmNlLCBwYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgZmluZE5vZGVzKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBub2RlcyA9IHRoaXMucGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnROb2RlID0gcGFyYW1ldGVyLmZpbmRSZXBsYWNlbWVudE5vZGUoc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgICBub2RlID0gcmVwbGFjZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmApO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlUHJlc2VudCA9IGNvbnRleHQuaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpO1xuXG4gICAgaWYgKHByb2NlZHVyZVByZXNlbnQpIHtcbiAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgbm9kZXMgPSB0aGlzLmZpbmROb2RlcyhzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICB2YWx1ZXMgPSBWYWx1ZXMuZnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHByb2NlZHVyZS5jYWxsKHZhbHVlcywgY29udGV4dCksXG4gICAgICAgICAgICBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgICB1bmlmaWVkSW5kZXBlbmRlbnRseSA9IGJvb2xlYW47IC8vL1xuICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGV4Y2VwdGlvbi5nZXRNZXNzYWdlKCk7XG5cbiAgICAgIGNvbnRleHQuaW5mbyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBpZiAodW5pZmllZEluZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVDYWxsXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBkb20sXG4gICAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21SZWZlcmVuY2VBbmRQYXJhbWV0ZXJzKHJlZmVyZW5jZSwgcGFyYW1ldGVycyk7XG5cbiAgICAgIHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChzdHJpbmcsIHJlZmVyZW5jZSwgcGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBkb20sXG4gICAgICAgIHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyTm9kZXNRdWVyeShwcm9jZWR1cmVDYWxsTm9kZSksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSBQYXJhbWV0ZXIuZnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMocmVmZXJlbmNlLCBwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IHBhcmFtZXRlcnMucmVkdWNlKChwYXJhbWV0ZXJzU3RyaW5nLCBwYXJhbWV0ZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJTdHJpbmcgPSBwYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gKHBhcmFtZXRlcnNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyU3RyaW5nIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cGFyYW1ldGVyc1N0cmluZ30sICR7cGFyYW1ldGVyU3RyaW5nfWA7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyc1N0cmluZztcbiAgICAgICAgfSwgbnVsbCksXG4gICAgICAgIHN0cmluZyA9IGAke3JlZmVyZW5jZVN0cmluZ30oJHtwYXJhbWV0ZXJzU3RyaW5nfSlgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsicGFyYW1ldGVyTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcm9jZWR1cmVDYWxsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQcm9jZWR1cmVDYWxsIiwic3RyaW5nIiwicmVmZXJlbmNlIiwicGFyYW1ldGVycyIsImdldFN0cmluZyIsImdldFJlZmVyZW5jZSIsImdldFBhcmFtZXRlcnMiLCJmaW5kTm9kZXMiLCJzdWJzdGl0dXRpb25zIiwibm9kZXMiLCJtYXAiLCJwYXJhbWV0ZXIiLCJyZXBsYWNlbWVudE5vZGUiLCJmaW5kUmVwbGFjZW1lbnROb2RlIiwibm9kZSIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwiY29udGV4dCIsInZlcmlmaWVkIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInRyYWNlIiwicHJvY2VkdXJlUHJlc2VudCIsImlzUHJvY2VkdXJlUHJlc2VudEJ5UmVmZXJlbmNlIiwiZGVidWciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVkSW5kZXBlbmRlbnRseSIsInByb2NlZHVyZSIsImZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZSIsInZhbHVlcyIsIlZhbHVlcyIsImZyb21Ob2RlcyIsInZhbHVlIiwiY2FsbCIsImJvb2xlYW4iLCJnZXRCb29sZWFuIiwiZXhjZXB0aW9uIiwibWVzc2FnZSIsImdldE1lc3NhZ2UiLCJpbmZvIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwicHJvY2VkdXJlQ2FsbCIsInByb2NlZHVyZUNhbGxOb2RlIiwiUmVmZXJlbmNlIiwiZG9tIiwicGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZSIsImZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInN0cmluZ0Zyb21SZWZlcmVuY2VBbmRQYXJhbWV0ZXJzIiwibmFtZSIsIlBhcmFtZXRlciIsInBhcmFtZXRlck5vZGVzIiwicGFyYW1ldGVyTm9kZSIsImZyb21QYXJhbWV0ZXJOb2RlIiwicmVmZXJlbmNlU3RyaW5nIiwicGFyYW1ldGVyc1N0cmluZyIsInJlZHVjZSIsInBhcmFtZXRlclN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7MkJBVnVCOzJEQUVQO3FCQUdzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLHNCQUFzQkMsSUFBQUEsaUJBQVUsRUFBQyw2QkFDakNDLHlCQUF5QkMsSUFBQUEsZ0JBQVMsRUFBQztJQUV6QyxXQUFlQyxJQUFBQSxnQkFBVyxrQ0FBQzthQUFNQyxjQUNuQkMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFVBQVU7Z0NBRFZIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtR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