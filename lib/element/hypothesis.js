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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _assign = /*#__PURE__*/ _interop_require_default(require("../process/assign"));
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
var _Hypothesis;
var _default = (0, _elements.define)((_Hypothesis = /*#__PURE__*/ function() {
    function Hypothesis(context, string, node, statement) {
        _class_call_check(this, Hypothesis);
        this.context = context;
        this.string = string;
        this.node = node;
        this.statement = statement;
    }
    _create_class(Hypothesis, [
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
                        var assignmentsAssigned = (0, _assign.default)(assignments, context);
                        if (assignmentsAssigned) {
                            var Step = _elements.default.Step, step = Step.fromStatement(this.statement, context), stepOrSubproof = step; ///
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
        }
    ]);
    return Hypothesis;
}(), _define_property(_Hypothesis, "name", "Hypothesis"), _Hypothesis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2h5cG90aGVzaXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCBhc3NpZ25Bc3NpZ25tZW50cyBmcm9tIFwiLi4vcHJvY2Vzcy9hc3NpZ25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRGcm9tSlNPTiwgc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBIeXBvdGhlc2lzIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBoeXBvdGhlc2lzU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZXMgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllcykge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgICAgICBzdGVwID0gU3RlcC5mcm9tU3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBzdGVwT3JTdWJwcm9vZiA9IHN0ZXA7ICAvLy9cblxuICAgICAgICAgIGNvbnRleHQuYWRkU3RlcE9yU3VicHJvb2Yoc3RlcE9yU3VicHJvb2YpO1xuXG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIGlzRXF1YWxUb1N0ZXAoc3RlcCwgY29udGV4dCkge1xuICAgIGxldCBlcXVhbFRvU3RlcCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgaHlwb3RoZXNpc1N0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYElzIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcyBlcXVhbCB0byB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3Qgc3RlcFN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50RXF1YWxUb1N0ZXBTdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC5pc0VxdWFsVG8oc3RlcFN0YXRlbWVudCk7XG5cbiAgICBpZiAoc3RhdGVtZW50RXF1YWxUb1N0ZXBTdGF0ZW1lbnQpIHtcbiAgICAgIGVxdWFsVG9TdGVwID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZXF1YWxUb1N0ZXApIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcyBpcyBlcXVhbCB0byB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUb1N0ZXA7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiSHlwb3RoZXNpc1wiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIGh5cG90aGVzaXMgPSBuZXcgSHlwb3RoZXNpcyhzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiSHlwb3RoZXNpcyIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwiZ2V0Q29udGV4dCIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRTdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImh5cG90aGVzaXNTdHJpbmciLCJ0cmFjZSIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwic3RhdGVtZW50VmVyaWZpZXMiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJTdGVwIiwiZWxlbWVudHMiLCJzdGVwIiwiZnJvbVN0YXRlbWVudCIsInN0ZXBPclN1YnByb29mIiwiYWRkU3RlcE9yU3VicHJvb2YiLCJkZWJ1ZyIsImlzRXF1YWxUb1N0ZXAiLCJlcXVhbFRvU3RlcCIsInN0ZXBTdHJpbmciLCJzdGVwU3RhdGVtZW50Iiwic3RhdGVtZW50RXF1YWxUb1N0ZXBTdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJ0b0pTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJoeXBvdGhlc2lzIiwibmFtZSJd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