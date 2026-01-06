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
var _elements = require("../elements");
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
var _ProcedureCall;
var _default = (0, _elements.define)((_ProcedureCall = /*#__PURE__*/ function() {
    function ProcedureCall(context, string, node, parameters, procedureReference) {
        _class_call_check(this, ProcedureCall);
        this.context = context;
        this.string = string;
        this.node = node;
        this.parameters = parameters;
        this.procedureReference = procedureReference;
    }
    _create_class(ProcedureCall, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
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
        }
    ]);
    return ProcedureCall;
}(), _define_property(_ProcedureCall, "name", "ProcedureCall"), _ProcedureCall));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEV4cHJlc3Npb25zIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHBhcmFtZXRlcnNGcm9tSlNPTiwgcHJvY2VkdXJlUmVmZXJlbmNlRnJvbUpTT04sIHBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OLCBwcm9jZWR1cmVSZWZlcmVuY2VUb1Byb2NlZHVyZVJlZmVyZW5jZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb2NlZHVyZUNhbGwge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHBhcmFtZXRlcnMsIHByb2NlZHVyZVJlZmVyZW5jZSkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMucHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFByb2NlZHVyZVJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVSZWZlcmVuY2U7XG4gIH1cblxuICBnZXROYW1lKCkgeyByZXR1cm4gdGhpcy5wcm9jZWR1cmVSZWZlcmVuY2UuZ2V0TmFtZSgpOyB9XG5cbiAgZmluZE5vZGVzKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBub2RlcyA9IHRoaXMucGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnROb2RlID0gcGFyYW1ldGVyLmZpbmRSZXBsYWNlbWVudE5vZGUoc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgICBub2RlID0gcmVwbGFjZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpO1xuXG4gICAgaWYgKHByb2NlZHVyZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvY2VkdXJlQm9vbGVhbiA9IHByb2NlZHVyZS5pc0Jvb2xlYW4oKTtcblxuICAgICAgaWYgKHByb2NlZHVyZUJvb2xlYW4pIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgaXMgbm90IGJvb2xlYW4uYCwgdGhpcy5ub2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgaXMgbm90IHByZXNlbnQuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIG5vZGVzID0gdGhpcy5maW5kTm9kZXMoc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpLFxuICAgICAgICAgIGV4cHJlc3Npb25zID0gRXhwcmVzc2lvbnMuZnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHByb2NlZHVyZS5jYWxsKGV4cHJlc3Npb25zLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGJvb2xlYW4gPSB2YWx1ZS5nZXRCb29sZWFuKCk7XG5cbiAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gYm9vbGVhbjsgLy8vXG4gICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZXhjZXB0aW9uLmdldE1lc3NhZ2UoKTtcblxuICAgICAgY29udGV4dC5pbmZvKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsIGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04odGhpcy5wYXJhbWV0ZXJzKSxcbiAgICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2VUb1Byb2NlZHVyZVJlZmVyZW5jZUpTT04odGhpcy5wcm9jZWR1cmVSZWZlcmVuY2UpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2UsXG4gICAgICAgICAgICBwYXJhbWV0ZXJzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZUNhbGxcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMocHJvY2VkdXJlUmVmZXJlbmNlLCBwYXJhbWV0ZXJzKSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoc3RyaW5nLCBub2RlLCBwYXJhbWV0ZXJzLCBwcm9jZWR1cmVSZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb2NlZHVyZUNhbGwiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInBhcmFtZXRlcnMiLCJwcm9jZWR1cmVSZWZlcmVuY2UiLCJnZXRDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFBhcmFtZXRlcnMiLCJnZXRQcm9jZWR1cmVSZWZlcmVuY2UiLCJnZXROYW1lIiwiZmluZE5vZGVzIiwic3Vic3RpdHV0aW9ucyIsIm5vZGVzIiwibWFwIiwicGFyYW1ldGVyIiwicmVwbGFjZW1lbnROb2RlIiwiZmluZFJlcGxhY2VtZW50Tm9kZSIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZXMiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwidHJhY2UiLCJuYW1lIiwicHJvY2VkdXJlIiwiZmluZFByb2NlZHVyZUJ5TmFtZSIsInByb2NlZHVyZUJvb2xlYW4iLCJpc0Jvb2xlYW4iLCJkZWJ1ZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwiZXhwcmVzc2lvbnMiLCJFeHByZXNzaW9ucyIsImZyb21Ob2RlcyIsInZhbHVlIiwiY2FsbCIsImJvb2xlYW4iLCJnZXRCb29sZWFuIiwiZXhjZXB0aW9uIiwibWVzc2FnZSIsImdldE1lc3NhZ2UiLCJpbmZvIiwidG9KU09OIiwicGFyYW1ldGVyc0pTT04iLCJwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInBhcmFtZXRlcnNGcm9tSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OIiwic3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMiLCJwcm9jZWR1cmVDYWxsIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OzsyQkFMNEI7d0JBRUw7b0JBQ2dIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZJLFdBQWVBLElBQUFBLGdCQUFNLGtDQUFDO2FBQU1DLGNBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsa0JBQWtCO2dDQUR2Q0w7UUFFeEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBOzs7O1lBRzVCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE9BQU87WUFDckI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLElBQUk7WUFDbEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFVBQVU7WUFDeEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLGtCQUFrQjtZQUNoQzs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBWSxPQUFPLElBQUksQ0FBQ04sa0JBQWtCLENBQUNNLE9BQU87WUFBSTs7O1lBRXREQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsYUFBYTtnQkFDckIsSUFBTUMsUUFBUSxJQUFJLENBQUNWLFVBQVUsQ0FBQ1csR0FBRyxDQUFDLFNB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