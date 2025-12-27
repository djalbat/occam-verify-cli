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
var _structure = /*#__PURE__*/ _interop_require_wildcard(require("../structure"));
var _assignments = require("../utilities/assignments");
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
var _Hypothesis;
var _default = (0, _structure.define)((_Hypothesis = /*#__PURE__*/ function() {
    function Hypothesis(string, node, statement) {
        _class_call_check(this, Hypothesis);
        this.string = string;
        this.node = node;
        this.statement = statement;
    }
    _create_class(Hypothesis, [
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
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verifies = false;
                var hypothesisString = this.string; ///
                context.trace("Verifying the '".concat(hypothesisString, "' hypothesis..."), this.node);
                if (false) {
                ///
                } else if (this.statement !== null) {
                    var stated = true, assignments = [], statementVerifies = this.statement.verify(assignments, stated, context);
                    if (statementVerifies) {
                        var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, context);
                        if (assignmentsAssigned) {
                            var Step = _structure.default.Step, step = Step.fromStatement(this.statement, context), stepOrSubproof = step; ///
                            context.addStepOrSubproof(stepOrSubproof);
                            verifies = true;
                        }
                    }
                } else {
                    context.debug("Unable to verify the '".concat(hypothesisString, "' hypothesis because it is nonsense."), this.node);
                }
                if (verifies) {
                    context.debug("...verified the '".concat(hypothesisString, "' hypothesis."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "isEqualToStep",
            value: function isEqualToStep(step, context) {
                var equalToStep = false;
                var stepString = step.getString(), hypothesisString = this.string; ///
                context.trace("Is the '".concat(hypothesisString, "' hypothesis equal to the '").concat(stepString, "' step..."), this.node);
                var stepStatement = step.getStatement(), statementEqualToStepStatement = this.statement.isEqualTo(stepStatement);
                if (statementEqualToStepStatement) {
                    equalToStep = true;
                }
                if (equalToStep) {
                    context.trace("...the '".concat(hypothesisString, "' hypothesis is equal to the '").concat(stepString, "' step."), this.node);
                }
                return equalToStep;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var statementJSON = (0, _json.statementToStatementJSON)(this.statement), statement = statementJSON, json = {
                    statement: statement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var statement = (0, _json.statementFromJSON)(json, context);
                var string;
                if (statement !== null) {
                    string = statement.getString();
                }
                var node = null, hypothesis = new Hypothesis(string, node, statement);
                return hypothesis;
            }
        },
        {
            key: "fromHypothesisNode",
            value: function fromHypothesisNode(hypothesisNode, context) {
                var Statement = _structure.default.Statement, node = hypothesisNode, string = context.nodeAsString(node), statement = Statement.fromHypothesisNode(hypothesisNode, context), hypothesis = new Hypothesis(string, node, statement);
                return hypothesis;
            }
        }
    ]);
    return Hypothesis;
}(), _define_property(_Hypothesis, "name", "Hypothesis"), _Hypothesis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJ1Y3R1cmUvaHlwb3RoZXNpcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHN0cnVjdHVyZSBmcm9tIFwiLi4vc3RydWN0dXJlXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9zdHJ1Y3R1cmVcIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgSHlwb3RoZXNpcyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgc3RhdGVtZW50KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGh5cG90aGVzaXNTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllcyA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc2lnbm1lbnRzQXNzaWduZWQpIHtcbiAgICAgICAgICBjb25zdCB7IFN0ZXAgfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgICAgICAgICBzdGVwID0gU3RlcC5mcm9tU3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBzdGVwT3JTdWJwcm9vZiA9IHN0ZXA7ICAvLy9cblxuICAgICAgICAgIGNvbnRleHQuYWRkU3RlcE9yU3VicHJvb2Yoc3RlcE9yU3VicHJvb2YpO1xuXG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIGlzRXF1YWxUb1N0ZXAoc3RlcCwgY29udGV4dCkge1xuICAgIGxldCBlcXVhbFRvU3RlcCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgaHlwb3RoZXNpc1N0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYElzIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcyBlcXVhbCB0byB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3Qgc3RlcFN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50RXF1YWxUb1N0ZXBTdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC5pc0VxdWFsVG8oc3RlcFN0YXRlbWVudCk7XG5cbiAgICBpZiAoc3RhdGVtZW50RXF1YWxUb1N0ZXBTdGF0ZW1lbnQpIHtcbiAgICAgIGVxdWFsVG9TdGVwID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZXF1YWxUb1N0ZXApIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcyBpcyBlcXVhbCB0byB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUb1N0ZXA7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiSHlwb3RoZXNpc1wiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIGh5cG90aGVzaXMgPSBuZXcgSHlwb3RoZXNpcyhzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNpc05vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc3RydWN0dXJlLFxuICAgICAgICAgIG5vZGUgPSBoeXBvdGhlc2lzTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2lzTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgaHlwb3RoZXNpcyA9IG5ldyBIeXBvdGhlc2lzKHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzXG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkh5cG90aGVzaXMiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFN0YXRlbWVudCIsInZlcmlmeSIsImNvbnRleHQiLCJ2ZXJpZmllcyIsImh5cG90aGVzaXNTdHJpbmciLCJ0cmFjZSIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwic3RhdGVtZW50VmVyaWZpZXMiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJTdGVwIiwic3RydWN0dXJlIiwic3RlcCIsImZyb21TdGF0ZW1lbnQiLCJzdGVwT3JTdWJwcm9vZiIsImFkZFN0ZXBPclN1YnByb29mIiwiZGVidWciLCJpc0VxdWFsVG9TdGVwIiwiZXF1YWxUb1N0ZXAiLCJzdGVwU3RyaW5nIiwic3RlcFN0YXRlbWVudCIsInN0YXRlbWVudEVxdWFsVG9TdGVwU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwidG9KU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInN0YXRlbWVudEZyb21KU09OIiwiaHlwb3RoZXNpcyIsImZyb21IeXBvdGhlc2lzTm9kZSIsImh5cG90aGVzaXNOb2RlIiwiU3RhdGVtZW50Iiwibm9kZUFzU3RyaW5nIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7aUVBTnNCOzJCQUdZO29CQUMwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVELFdBQWVBLElBQUFBLGlCQUFNLCtCQUFDO2FBQU1DLFdBQ2RDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTO2dDQURUSDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFNBQVMsR0FBR0E7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxPQUFPO2dCQUNaLElBQUlDLFdBQVc7Z0JBRWYsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ1QsTUFBTSxFQUFF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