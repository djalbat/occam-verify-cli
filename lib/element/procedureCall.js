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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
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
var _default = (0, _elements.define)((_ProcedureCall = /*#__PURE__*/ function() {
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
    var ProcedureCall = _elements.default.ProcedureCall, ProcedureReference = _elements.default.ProcedureReference, node = procedureCallNode, parameters = parametersFromProcedureCallNode(procedureCallNode, context), procedureReference = ProcedureReference.fromProcedureCallNode(procedureCallNode, context), string = stringFromProcedureReferenceAndParameters(procedureReference, parameters), procedureCall = new ProcedureCall(string, node, parameters, procedureReference);
    return procedureCall;
}
function parametersFromProcedureCallNode(procedureCallNode, context) {
    var Parameter = _elements.default.Parameter, parameterNodes = procedureCallNode.getParameterNodes(), parameters = parameterNodes.map(function(parameterNode) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEV4cHJlc3Npb25zIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgcGFyYW1ldGVyc0Zyb21KU09OLCBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tSlNPTiwgcGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04sIHByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvY2VkdXJlQ2FsbCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgcGFyYW1ldGVycywgcHJvY2VkdXJlUmVmZXJlbmNlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMucHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFByb2NlZHVyZVJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVSZWZlcmVuY2U7XG4gIH1cblxuICBnZXROYW1lKCkgeyByZXR1cm4gdGhpcy5wcm9jZWR1cmVSZWZlcmVuY2UuZ2V0TmFtZSgpOyB9XG5cbiAgZmluZE5vZGVzKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBub2RlcyA9IHRoaXMucGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnROb2RlID0gcGFyYW1ldGVyLmZpbmRSZXBsYWNlbWVudE5vZGUoc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgICBub2RlID0gcmVwbGFjZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpO1xuXG4gICAgaWYgKHByb2NlZHVyZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvY2VkdXJlQm9vbGVhbiA9IHByb2NlZHVyZS5pc0Jvb2xlYW4oKTtcblxuICAgICAgaWYgKHByb2NlZHVyZUJvb2xlYW4pIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgaXMgbm90IGJvb2xlYW4uYCwgdGhpcy5ub2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgaXMgbm90IHByZXNlbnQuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIG5vZGVzID0gdGhpcy5maW5kTm9kZXMoc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpLFxuICAgICAgICAgIGV4cHJlc3Npb25zID0gRXhwcmVzc2lvbnMuZnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHByb2NlZHVyZS5jYWxsKGV4cHJlc3Npb25zLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGJvb2xlYW4gPSB2YWx1ZS5nZXRCb29sZWFuKCk7XG5cbiAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gYm9vbGVhbjsgLy8vXG4gICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZXhjZXB0aW9uLmdldE1lc3NhZ2UoKTtcblxuICAgICAgY29udGV4dC5pbmZvKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsIGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04odGhpcy5wYXJhbWV0ZXJzKSxcbiAgICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2VUb1Byb2NlZHVyZVJlZmVyZW5jZUpTT04odGhpcy5wcm9jZWR1cmVSZWZlcmVuY2UpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2UsXG4gICAgICAgICAgICBwYXJhbWV0ZXJzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZUNhbGxcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMocHJvY2VkdXJlUmVmZXJlbmNlLCBwYXJhbWV0ZXJzKSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoc3RyaW5nLCBub2RlLCBwYXJhbWV0ZXJzLCBwcm9jZWR1cmVSZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBwcmVtaXNlTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gICAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IHN1cHBvc2l0aW9uTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gICAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCwgUHJvY2VkdXJlUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLCAvLy9cbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBQcm9jZWR1cmVSZWZlcmVuY2UuZnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMocHJvY2VkdXJlUmVmZXJlbmNlLCBwYXJhbWV0ZXJzKSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKHN0cmluZywgbm9kZSwgcGFyYW1ldGVycywgcHJvY2VkdXJlUmVmZXJlbmNlKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIHBhcmFtZXRlck5vZGVzID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlck5vZGVzLm1hcCgocGFyYW1ldGVyTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IFBhcmFtZXRlci5mcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyhwcm9jZWR1cmVSZWZlcmVuY2UsIHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgbmFtZSA9IHByb2NlZHVyZVJlZmVyZW5jZS5nZXROYW1lKCksXG4gICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSBwYXJhbWV0ZXJzLnJlZHVjZSgocGFyYW1ldGVyc1N0cmluZywgcGFyYW1ldGVyKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IChwYXJhbWV0ZXJzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlclN0cmluZyA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3BhcmFtZXRlcnNTdHJpbmd9LCAke3BhcmFtZXRlclN0cmluZ31gO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcnNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBgJHtuYW1lfSgke3BhcmFtZXRlcnNTdHJpbmd9KWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9jZWR1cmVDYWxsIiwic3RyaW5nIiwibm9kZSIsInBhcmFtZXRlcnMiLCJwcm9jZWR1cmVSZWZlcmVuY2UiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0UGFyYW1ldGVycyIsImdldFByb2NlZHVyZVJlZmVyZW5jZSIsImdldE5hbWUiLCJmaW5kTm9kZXMiLCJzdWJzdGl0dXRpb25zIiwibm9kZXMiLCJtYXAiLCJwYXJhbWV0ZXIiLCJyZXBsYWNlbWVudE5vZGUiLCJmaW5kUmVwbGFjZW1lbnROb2RlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwidHJhY2UiLCJuYW1lIiwicHJvY2VkdXJlIiwiZmluZFByb2NlZHVyZUJ5TmFtZSIsInByb2NlZHVyZUJvb2xlYW4iLCJpc0Jvb2xlYW4iLCJkZWJ1ZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwiZXhwcmVzc2lvbnMiLCJFeHByZXNzaW9ucyIsImZyb21Ob2RlcyIsInZhbHVlIiwiY2FsbCIsImJvb2xlYW4iLCJnZXRCb29sZWFuIiwiZXhjZXB0aW9uIiwibWVzc2FnZSIsImdldE1lc3NhZ2UiLCJpbmZvIiwidG9KU09OIiwicGFyYW1ldGVyc0pTT04iLCJwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInBhcmFtZXRlcnNGcm9tSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OIiwic3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMiLCJwcm9jZWR1cmVDYWxsIiwiZnJvbVByZW1pc2VOb2RlIiwicHJlbWlzZU5vZGUiLCJwcm9jZWR1cmVDYWxsTm9kZSIsImdldFByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJlbGVtZW50cyIsIlByb2NlZHVyZVJlZmVyZW5jZSIsInBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJmcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJQYXJhbWV0ZXIiLCJwYXJhbWV0ZXJOb2RlcyIsImdldFBhcmFtZXRlck5vZGVzIiwicGFyYW1ldGVyTm9kZSIsImZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyc1N0cmluZyIsInJlZHVjZSIsInBhcmFtZXRlclN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkJBUDRCO2dFQUVQO29CQUdrSDs7Ozs7Ozs7Ozs7Ozs7Ozs7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