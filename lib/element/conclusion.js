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
var _temporary = /*#__PURE__*/ _interop_require_default(require("../context/temporary"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _Conclusion;
var _default = (0, _elements.define)((_Conclusion = /*#__PURE__*/ function() {
    function Conclusion(context, string, node, statement) {
        _class_call_check(this, Conclusion);
        this.context = context;
        this.string = string;
        this.node = node;
        this.statement = statement;
    }
    _create_class(Conclusion, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
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
                var temporaryContext = _temporary.default.fromNothing(context);
                context = temporaryContext; ///
                var conclusionString = this.string; ///
                context.trace("Verifying the '".concat(conclusionString, "' conclusion..."), this.node);
                if (this.statement !== null) {
                    var stated = true, assignments = null, statementVerifies = this.statement.verify(assignments, stated, context);
                    verifies = statementVerifies; ///
                } else {
                    context.debug("Unable to verify the '".concat(conclusionString, "' conclusion because it is nonsense."), this.node);
                }
                if (verifies) {
                    this.context = context;
                    context.debug("...verified the '".concat(conclusionString, "' conclusion."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, context) {
                var statementUnifies;
                var conclusion = this, statementString = statement.getString(), conclusionString = conclusion.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(conclusionString, "' conclusion..."));
                var generalContext = this.context, specificContext = context; ///
                statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnifies) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(conclusionString, "' conclusion."));
                }
                return statementUnifies;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var frames, terms;
                frames = this.context.getFrames();
                terms = this.context.getTerms();
                var statementJSON = (0, _json.statementToStatementJSON)(this.statement), framesJSON = (0, _json.framesToFramesJSON)(frames), termsJSON = (0, _json.termsToTermsJSON)(terms);
                frames = framesJSON; ///
                terms = termsJSON; ///
                var statement = statementJSON, json = {
                    statement: statement,
                    frames: frames,
                    terms: terms
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var terms = (0, _json.termsFromJSON)(json, context), frames = (0, _json.framesFromJSON)(json, context), statement = (0, _json.statementFromJSON)(json, context), node = null, string = statement.getString(), temporaryContext = _temporary.default.fromTermsAndFrames(terms, frames, context);
                context = temporaryContext; ///
                var conclusion = new Conclusion(context, string, node, statement);
                return conclusion;
            }
        }
    ]);
    return Conclusion;
}(), _define_property(_Conclusion, "name", "Conclusion"), _Conclusion));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbmNsdXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZW1wb3JhcnlDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3RlbXBvcmFyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1zRnJvbUpTT04sIGZyYW1lc0Zyb21KU09OLCBzdGF0ZW1lbnRGcm9tSlNPTiwgdGVybXNUb1Rlcm1zSlNPTiwgZnJhbWVzVG9GcmFtZXNKU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0ICBkZWZhdWx0IGRlZmluZShjbGFzcyBDb25jbHVzaW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZW1wb3JhcnlDb250ZXh0ID0gVGVtcG9yYXJ5Q29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSB0ZW1wb3JhcnlDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IGNvbmNsdXNpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGwsXG4gICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllcyA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZXMgPSBzdGF0ZW1lbnRWZXJpZmllczsgLy8vXG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24gYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICBjb25zdCBjb25jbHVzaW9uID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb25jbHVzaW9uU3RyaW5nID0gY29uY2x1c2lvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gdGhpcy5jb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBmcmFtZXMsXG4gICAgICAgIHRlcm1zO1xuXG4gICAgZnJhbWVzID0gdGhpcy5jb250ZXh0LmdldEZyYW1lcygpO1xuXG4gICAgdGVybXMgPSB0aGlzLmNvbnRleHQuZ2V0VGVybXMoKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIGZyYW1lc0pTT04gPSBmcmFtZXNUb0ZyYW1lc0pTT04oZnJhbWVzKSxcbiAgICAgICAgICB0ZXJtc0pTT04gPSB0ZXJtc1RvVGVybXNKU09OKHRlcm1zKTtcblxuICAgIGZyYW1lcyA9IGZyYW1lc0pTT047ICAvLy9cblxuICAgIHRlcm1zID0gdGVybXNKU09OOyAgLy8vXG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0YXRlbWVudCxcbiAgICAgICAgICAgIGZyYW1lcyxcbiAgICAgICAgICAgIHRlcm1zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbmNsdXNpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gdGVybXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBmcmFtZXMgPSBmcmFtZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVtcG9yYXJ5Q29udGV4dCA9IFRlbXBvcmFyeUNvbnRleHQuZnJvbVRlcm1zQW5kRnJhbWVzKHRlcm1zLCBmcmFtZXMsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IHRlbXBvcmFyeUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgY29uY2x1c2lvbiA9IG5ldyBDb25jbHVzaW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBjb25jbHVzaW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb25jbHVzaW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJnZXRDb250ZXh0IiwiZ2V0Tm9kZSIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsInZlcmlmeSIsInZlcmlmaWVzIiwidGVtcG9yYXJ5Q29udGV4dCIsIlRlbXBvcmFyeUNvbnRleHQiLCJmcm9tTm90aGluZyIsImNvbmNsdXNpb25TdHJpbmciLCJ0cmFjZSIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwic3RhdGVtZW50VmVyaWZpZXMiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudFVuaWZpZXMiLCJjb25jbHVzaW9uIiwic3RhdGVtZW50U3RyaW5nIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0b0pTT04iLCJmcmFtZXMiLCJ0ZXJtcyIsImdldEZyYW1lcyIsImdldFRlcm1zIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImZyYW1lc0pTT04iLCJmcmFtZXNUb0ZyYW1lc0pTT04iLCJ0ZXJtc0pTT04iLCJ0ZXJtc1RvVGVybXNKU09OIiwianNvbiIsImZyb21KU09OIiwidGVybXNGcm9tSlNPTiIsImZyYW1lc0Zyb21KU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJmcm9tVGVybXNBbmRGcmFtZXMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztnRUFMNkI7d0JBRU47b0JBQzBHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFakksV0FBZ0JBLElBQUFBLGdCQUFNLCtCQUFDO2FBQU1DLFdBQ2ZDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVM7Z0NBRGpCSjtRQUV6QixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFNBQVMsR0FBR0E7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osT0FBTztZQUNyQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtn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