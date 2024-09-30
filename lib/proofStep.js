"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ProofStep;
    }
});
var _statementWithSttaemetnGivenEquivalences = /*#__PURE__*/ _interop_require_default(require("./unify/statementWithSttaemetnGivenEquivalences"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var ProofStep = /*#__PURE__*/ function() {
    function ProofStep(subproof, statement) {
        _class_call_check(this, ProofStep);
        this.subproof = subproof;
        this.statement = statement;
    }
    _create_class(ProofStep, [
        {
            key: "getSubproof",
            value: function getSubproof() {
                return this.subproof;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statementB, equivalences, localContextA, localContextB) {
                var statementUnified = false;
                if (this.statement !== null) {
                    var statementA = this.statement, statementUnifiedWithStatement = (0, _statementWithSttaemetnGivenEquivalences.default)(statementA, statementB, equivalences, localContextA, localContextB);
                    statementUnified = statementUnifiedWithStatement; ///
                }
                return statementUnified;
            }
        }
    ], [
        {
            key: "fromSubproof",
            value: function fromSubproof(subproof) {
                var statement = null, proofStep = new ProofStep(subproof, statement);
                return proofStep;
            }
        },
        {
            key: "fromStatement",
            value: function fromStatement(statement) {
                var subproof = null, proofStep = new ProofStep(subproof, statement);
                return proofStep;
            }
        }
    ]);
    return ProofStep;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZlN0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB1bmlmeVN0YXRlbWVudFdpdGhTdGF0ZW1lbnRHaXZlbkVxdWl2YWxlbmNlcyBmcm9tIFwiLi91bmlmeS9zdGF0ZW1lbnRXaXRoU3R0YWVtZXRuR2l2ZW5FcXVpdmFsZW5jZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvb2ZTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3VicHJvb2YsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3VicHJvb2YgPSBzdWJwcm9vZjtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN1YnByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnByb29mO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudEIsIGVxdWl2YWxlbmNlcywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudEEgPSB0aGlzLnN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZFdpdGhTdGF0ZW1lbnQgPSB1bmlmeVN0YXRlbWVudFdpdGhTdGF0ZW1lbnRHaXZlbkVxdWl2YWxlbmNlcyhzdGF0ZW1lbnRBLCBzdGF0ZW1lbnRCLCBlcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZFdpdGhTdGF0ZW1lbnQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VicHJvb2Yoc3VicHJvb2YpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBudWxsLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2YsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50KSB7XG4gICAgY29uc3Qgc3VicHJvb2YgPSBudWxsLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2YsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUHJvb2ZTdGVwIiwic3VicHJvb2YiLCJzdGF0ZW1lbnQiLCJnZXRTdWJwcm9vZiIsImdldFN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50QiIsImVxdWl2YWxlbmNlcyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudEEiLCJzdGF0ZW1lbnRVbmlmaWVkV2l0aFN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50V2l0aFN0YXRlbWVudEdpdmVuRXF1aXZhbGVuY2VzIiwiZnJvbVN1YnByb29mIiwicHJvb2ZTdGVwIiwiZnJvbVN0YXRlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7OEZBRm9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFDLElBQUEsQUFBTUEsMEJBQU47YUFBTUEsVUFDUEMsUUFBUSxFQUFFQyxTQUFTO2dDQURaRjtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFIQUY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsVUFBVSxFQUFFQyxZQUFZLEVBQUVDLGFBQWEsRUFBRUMsYUFBYTtnQkFDbkUsSUFBSUMsbUJBQW1CO2dCQUV2QixJQUFJLElBQUksQ0FBQ1IsU0FBUyxLQUFLLE1BQU07b0JBQzNCLElBQU1TLGFBQWEsSUFBSSxDQUFDVCxTQUFTLEVBQzNCVSxnQ0FBZ0NDLElBQUFBLGdEQUE0QyxFQUFDRixZQUFZTCxZQUFZQyxjQUFjQyxlQUFlQztvQkFFeElDLG1CQUFtQkUsK0JBQWdDLEdBQUc7Z0JBQ3hEO2dCQUVBLE9BQU9GO1lBQ1Q7Ozs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0EsYUFBYWIsUUFBUTtnQkFDMUIsSUFBTUMsWUFBWSxNQUNaYSxZQUFZLElBN0JEZixVQTZCZUMsVUFBVUM7Z0JBRTFDLE9BQU9hO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjZCxTQUFTO2dCQUM1QixJQUFNRCxXQUFXLE1BQ1hjLFlBQVksSUFwQ0RmLFVBb0NlQyxVQUFVQztnQkFFMUMsT0FBT2E7WUFDVDs7O1dBdkNtQmYifQ==