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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _query = require("../utilities/query");
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _substitutions = require("../utilities/substitutions");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
                var procedure = context.findProcedureByReference(this.reference);
                if (procedure !== null) {
                    var procedureString = procedure.getString(), procedureBoolean = procedure.isBoolean();
                    if (procedureBoolean) {
                        var procedureParameterTypesNodeTypes = procedure.areParameterTypesNodeTypes();
                        if (procedureParameterTypesNodeTypes) {
                            var procedureParametersMatchParameters = procedure.matchParameters(this.parameters);
                            if (procedureParametersMatchParameters) {
                                verified = true;
                            } else {
                                context.trace("The '".concat(procedureString, "' procedure's parameters do not match those of the '").concat(procedureCallString, "' procedure call."));
                            }
                        } else {
                            context.trace("Not all of the '".concat(procedureString, "' procedure's parameters' types are node types."));
                        }
                    } else {
                        context.trace("The '".concat(procedureString, "' procedure is not boolean."));
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
                var unifiedIndependently;
                var procedureCallString = this.string; ///
                context.trace("Unifying the '".concat(procedureCallString, "' procedure call independently..."));
                var procedure = context.findProcedureByReference(this.reference), nodes = this.findNodes(substitutions), result = procedure.call(nodes);
                if (result) {
                    unifiedIndependently = true;
                } else {
                    var procedureString = procedure.getString();
                    context.trace("Unable to unify the '".concat(procedureCallString, "' procedure call independently becuase the '").concat(procedureString, "' procedure returned false."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlQ2FsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IHtcbiAgZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zLFxuICBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyxcbiAgdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9uc1xufSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N1YnN0aXR1dGlvbnNcIjtcblxuY29uc3QgcGFyYW1ldGVyTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcHJvY2VkdXJlQ2FsbC9wYXJhbWV0ZXJcIiksXG4gICAgICBwcm9jZWR1cmVDYWxsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9wcm9jZWR1cmVDYWxsXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQcm9jZWR1cmVDYWxsIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCByZWZlcmVuY2UsIHBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XG4gIH1cblxuICBmaW5kTm9kZXMoc3Vic3RpdHV0aW9ucykge1xuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5wYXJhbWV0ZXJzLm1hcCgocGFyYW1ldGVyKSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudE5vZGUgPSBwYXJhbWV0ZXIuZmluZFJlcGxhY2VtZW50Tm9kZShzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICAgIG5vZGUgPSByZXBsYWNlbWVudE5vZGU7ICAvLy9cblxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLi4uYCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSk7XG5cbiAgICBpZiAocHJvY2VkdXJlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVTdHJpbmcgPSBwcm9jZWR1cmUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBwcm9jZWR1cmVCb29sZWFuID0gcHJvY2VkdXJlLmlzQm9vbGVhbigpO1xuXG4gICAgICBpZiAocHJvY2VkdXJlQm9vbGVhbikge1xuICAgICAgICBjb25zdCBwcm9jZWR1cmVQYXJhbWV0ZXJUeXBlc05vZGVUeXBlcyA9IHByb2NlZHVyZS5hcmVQYXJhbWV0ZXJUeXBlc05vZGVUeXBlcygpO1xuXG4gICAgICAgIGlmIChwcm9jZWR1cmVQYXJhbWV0ZXJUeXBlc05vZGVUeXBlcykge1xuICAgICAgICAgIGNvbnN0IHByb2NlZHVyZVBhcmFtZXRlcnNNYXRjaFBhcmFtZXRlcnMgPSBwcm9jZWR1cmUubWF0Y2hQYXJhbWV0ZXJzKHRoaXMucGFyYW1ldGVycyk7XG5cbiAgICAgICAgICBpZiAocHJvY2VkdXJlUGFyYW1ldGVyc01hdGNoUGFyYW1ldGVycykge1xuICAgICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7cHJvY2VkdXJlU3RyaW5nfScgcHJvY2VkdXJlJ3MgcGFyYW1ldGVycyBkbyBub3QgbWF0Y2ggdGhvc2Ugb2YgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC5gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGV4dC50cmFjZShgTm90IGFsbCBvZiB0aGUgJyR7cHJvY2VkdXJlU3RyaW5nfScgcHJvY2VkdXJlJ3MgcGFyYW1ldGVycycgdHlwZXMgYXJlIG5vZGUgdHlwZXMuYCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUgaXMgbm90IGJvb2xlYW4uYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkSW5kZXBlbmRlbnRseTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICBub2RlcyA9IHRoaXMuZmluZE5vZGVzKHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHJlc3VsdCA9IHByb2NlZHVyZS5jYWxsKG5vZGVzKTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHVuaWZpZWRJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvY2VkdXJlU3RyaW5nID0gcHJvY2VkdXJlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmFibGUgdG8gdW5pZnkgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBpbmRlcGVuZGVudGx5IGJlY3Vhc2UgdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZSByZXR1cm5lZCBmYWxzZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodW5pZmllZEluZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVDYWxsXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBkb20sXG4gICAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21SZWZlcmVuY2VBbmRQYXJhbWV0ZXJzKHJlZmVyZW5jZSwgcGFyYW1ldGVycyk7XG5cbiAgICAgIHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChzdHJpbmcsIHJlZmVyZW5jZSwgcGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBkb20sXG4gICAgICAgIHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyTm9kZXNRdWVyeShwcm9jZWR1cmVDYWxsTm9kZSksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSBQYXJhbWV0ZXIuZnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMocmVmZXJlbmNlLCBwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IHBhcmFtZXRlcnMucmVkdWNlKChwYXJhbWV0ZXJzU3RyaW5nLCBwYXJhbWV0ZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJTdHJpbmcgPSBwYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gKHBhcmFtZXRlcnNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyU3RyaW5nIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cGFyYW1ldGVyc1N0cmluZ30sICR7cGFyYW1ldGVyU3RyaW5nfWA7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyc1N0cmluZztcbiAgICAgICAgfSwgbnVsbCksXG4gICAgICAgIHN0cmluZyA9IGAke3JlZmVyZW5jZVN0cmluZ30oJHtwYXJhbWV0ZXJzU3RyaW5nfSlgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsicGFyYW1ldGVyTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcm9jZWR1cmVDYWxsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQcm9jZWR1cmVDYWxsIiwic3RyaW5nIiwicmVmZXJlbmNlIiwicGFyYW1ldGVycyIsImdldFN0cmluZyIsImdldFJlZmVyZW5jZSIsImdldFBhcmFtZXRlcnMiLCJmaW5kTm9kZXMiLCJzdWJzdGl0dXRpb25zIiwibm9kZXMiLCJtYXAiLCJwYXJhbWV0ZXIiLCJyZXBsYWNlbWVudE5vZGUiLCJmaW5kUmVwbGFjZW1lbnROb2RlIiwibm9kZSIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwiY29udGV4dCIsInZlcmlmaWVkIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInRyYWNlIiwicHJvY2VkdXJlIiwiZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlIiwicHJvY2VkdXJlU3RyaW5nIiwicHJvY2VkdXJlQm9vbGVhbiIsImlzQm9vbGVhbiIsInByb2NlZHVyZVBhcmFtZXRlclR5cGVzTm9kZVR5cGVzIiwiYXJlUGFyYW1ldGVyVHlwZXNOb2RlVHlwZXMiLCJwcm9jZWR1cmVQYXJhbWV0ZXJzTWF0Y2hQYXJhbWV0ZXJzIiwibWF0Y2hQYXJhbWV0ZXJzIiwiZGVidWciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVkSW5kZXBlbmRlbnRseSIsInJlc3VsdCIsImNhbGwiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJwcm9jZWR1cmVDYWxsIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJSZWZlcmVuY2UiLCJkb20iLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwiZnJvbVByb2NlZHVyZUNhbGxOb2RlIiwic3RyaW5nRnJvbVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMiLCJuYW1lIiwiUGFyYW1ldGVyIiwicGFyYW1ldGVyTm9kZXMiLCJwYXJhbWV0ZXJOb2RlIiwiZnJvbVBhcmFtZXRlck5vZGUiLCJyZWZlcmVuY2VTdHJpbmciLCJwYXJhbWV0ZXJzU3RyaW5nIiwicmVkdWNlIiwicGFyYW1ldGVyU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkE7OztlQUFBOzs7MkRBZGdCO3FCQUdzQjs0REFDYjs2QkFLbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUEsc0JBQXNCQyxJQUFBQSxpQkFBVSxFQUFDLDZCQUNqQ0Ms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