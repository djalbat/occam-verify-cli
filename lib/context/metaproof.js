"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaproofContext;
    }
});
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var MetaproofContext = /*#__PURE__*/ function() {
    function MetaproofContext(context, derived, metaAssertions) {
        _classCallCheck(this, MetaproofContext);
        this.context = context;
        this.derived = derived;
        this.metaAssertions = metaAssertions;
    }
    _createClass(MetaproofContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "isDerived",
            value: function isDerived() {
                return this.derived;
            }
        },
        {
            key: "getMetaAssertions",
            value: function getMetaAssertions() {
                var metaAssertions = this.context.getMetaAssertions();
                metaAssertions = _toConsumableArray(metaAssertions).concat(_toConsumableArray(this.metaAssertions));
                return metaAssertions;
            }
        },
        {
            key: "getRules",
            value: function getRules() {
                return this.context.getRules();
            }
        },
        {
            key: "getTypes",
            value: function getTypes() {
                return this.context.getTypes();
            }
        },
        {
            key: "getAxioms",
            value: function getAxioms() {
                return this.context.getAxioms();
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators() {
                return this.context.getCombinators();
            }
        },
        {
            key: "getConstructors",
            value: function getConstructors() {
                return this.context.getConstructors();
            }
        },
        {
            key: "findTypeByTypeName",
            value: function findTypeByTypeName(typeName) {
                return this.context.findTypeByTypeName(typeName);
            }
        },
        {
            key: "findRuleByReferenceName",
            value: function findRuleByReferenceName(referenceName) {
                return this.context.findRuleByReferenceName(referenceName);
            }
        },
        {
            key: "findVariableByVariableName",
            value: function findVariableByVariableName(variableName) {
                return this.context.findVariableByVariableName(variableName);
            }
        },
        {
            key: "isLabelPresent",
            value: function isLabelPresent(label) {
                return this.context.isLabelPresent(label);
            }
        },
        {
            key: "isTypePresentByTypeName",
            value: function isTypePresentByTypeName(typeName) {
                return this.context.isTypePresentByTypeName(typeName);
            }
        },
        {
            key: "matchMetaAssertion",
            value: function matchMetaAssertion(metaAssertion) {
                var metaAssertionMatches;
                var metaAssertionB = metaAssertion; ///
                metaAssertionMatches = this.metaAssertions.some(function(metaAssertion) {
                    var metaAssertionA = metaAssertion, matches = metaAssertionA.match(metaAssertionB);
                    if (matches) {
                        return true;
                    }
                });
                if (!metaAssertionMatches) {
                    metaAssertionMatches = this.context.matchMetaAssertion(metaAssertion);
                }
                return metaAssertionMatches;
            }
        },
        {
            key: "isVariablePresentByVariableName",
            value: function isVariablePresentByVariableName(variableName) {
                return this.context.isVariablePresentByVariableName(variableName);
            }
        },
        {
            key: "setDerived",
            value: function setDerived(derived) {
                this.derived = derived;
            }
        },
        {
            key: "addRule",
            value: function addRule(rule) {
                this.context.addRule(rule);
            }
        },
        {
            key: "addMetaAssertion",
            value: function addMetaAssertion(metaAssertion) {
                this.metaAssertions.push(metaAssertion);
            }
        }
    ], [
        {
            key: "fromContext",
            value: function fromContext(context) {
                var derived = false, metaAssertions = [], metaproofContext = new MetaproofContext(context, derived, metaAssertions);
                return metaproofContext;
            }
        }
    ]);
    return MetaproofContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L21ldGFwcm9vZi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXByb29mQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGRlcml2ZWQsIG1ldGFBc3NlcnRpb25zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmRlcml2ZWQgPSBkZXJpdmVkO1xuICAgIHRoaXMubWV0YUFzc2VydGlvbnMgPSBtZXRhQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGlzRGVyaXZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXJpdmVkO1xuICB9XG5cbiAgZ2V0TWV0YUFzc2VydGlvbnMoKSB7XG4gICAgbGV0IG1ldGFBc3NlcnRpb25zID0gdGhpcy5jb250ZXh0LmdldE1ldGFBc3NlcnRpb25zKCk7XG5cbiAgICBtZXRhQXNzZXJ0aW9ucyA9IFtcbiAgICAgIC4uLm1ldGFBc3NlcnRpb25zLFxuICAgICAgLi4udGhpcy5tZXRhQXNzZXJ0aW9uc1xuICAgIF07XG5cbiAgICByZXR1cm4gbWV0YUFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRSdWxlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRSdWxlcygpOyB9XG5cbiAgZ2V0VHlwZXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VHlwZXMoKTsgfVxuXG4gIGdldEF4aW9tcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBeGlvbXMoKTsgfVxuXG4gIGdldENvbWJpbmF0b3JzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbWJpbmF0b3JzKCk7IH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7IH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpOyB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpOyB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTsgfVxuXG4gIGlzTGFiZWxQcmVzZW50KGxhYmVsKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnQobGFiZWwpOyB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7IH1cblxuICBtYXRjaE1ldGFBc3NlcnRpb24obWV0YUFzc2VydGlvbikge1xuICAgIGxldCBtZXRhQXNzZXJ0aW9uTWF0Y2hlcztcblxuICAgIGNvbnN0IG1ldGFBc3NlcnRpb25CID0gbWV0YUFzc2VydGlvbjsgLy8vXG5cbiAgICBtZXRhQXNzZXJ0aW9uTWF0Y2hlcyA9IHRoaXMubWV0YUFzc2VydGlvbnMuc29tZSgobWV0YUFzc2VydGlvbikgPT4ge1xuICAgICAgY29uc3QgbWV0YUFzc2VydGlvbkEgPSBtZXRhQXNzZXJ0aW9uLCAvLy9cbiAgICAgICAgICAgIG1hdGNoZXMgPSBtZXRhQXNzZXJ0aW9uQS5tYXRjaChtZXRhQXNzZXJ0aW9uQik7XG5cbiAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFtZXRhQXNzZXJ0aW9uTWF0Y2hlcykge1xuICAgICAgbWV0YUFzc2VydGlvbk1hdGNoZXMgPSB0aGlzLmNvbnRleHQubWF0Y2hNZXRhQXNzZXJ0aW9uKG1ldGFBc3NlcnRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhQXNzZXJ0aW9uTWF0Y2hlcztcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpOyB9XG5cbiAgc2V0RGVyaXZlZChkZXJpdmVkKSB7XG4gICAgdGhpcy5kZXJpdmVkID0gZGVyaXZlZDtcbiAgfVxuXG4gIGFkZFJ1bGUocnVsZSkgeyB0aGlzLmNvbnRleHQuYWRkUnVsZShydWxlKTsgfVxuXG4gIGFkZE1ldGFBc3NlcnRpb24obWV0YUFzc2VydGlvbikge1xuICAgIHRoaXMubWV0YUFzc2VydGlvbnMucHVzaChtZXRhQXNzZXJ0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgZGVyaXZlZCA9IGZhbHNlLFxuICAgICAgICAgIG1ldGFBc3NlcnRpb25zID0gW10sXG4gICAgICAgICAgbWV0YXByb29mQ29udGV4dCA9IG5ldyBNZXRhcHJvb2ZDb250ZXh0KGNvbnRleHQsIGRlcml2ZWQsIG1ldGFBc3NlcnRpb25zKTtcblxuICAgIHJldHVybiBtZXRhcHJvb2ZDb250ZXh0O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIk1ldGFwcm9vZkNvbnRleHQiLCJjb250ZXh0IiwiZGVyaXZlZCIsIm1ldGFBc3NlcnRpb25zIiwiZ2V0Q29udGV4dCIsImlzRGVyaXZlZCIsImdldE1ldGFBc3NlcnRpb25zIiwiZ2V0UnVsZXMiLCJnZXRUeXBlcyIsImdldEF4aW9tcyIsImdldENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlTmFtZSIsInJlZmVyZW5jZU5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsImlzTGFiZWxQcmVzZW50IiwibGFiZWwiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsIm1hdGNoTWV0YUFzc2VydGlvbiIsIm1ldGFBc3NlcnRpb24iLCJtZXRhQXNzZXJ0aW9uTWF0Y2hlcyIsIm1ldGFBc3NlcnRpb25CIiwic29tZSIsIm1ldGFBc3NlcnRpb25BIiwibWF0Y2hlcyIsIm1hdGNoIiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsInNldERlcml2ZWQiLCJhZGRSdWxlIiwicnVsZSIsImFkZE1ldGFBc3NlcnRpb24iLCJwdXNoIiwiZnJvbUNvbnRleHQiLCJtZXRhcHJvb2ZDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSxpQ0FBTjthQUFNQSxpQkFDUEMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLGNBQWM7OEJBRHpCSDtRQUVqQixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLGNBQWMsR0FBR0E7O2lCQUpMSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhO2dCQUNYLE9BQU8sSUFBSSxDQUFDSCxPQUFPO1lBQ3JCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVk7Z0JBQ1YsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CO2dCQUNsQixJQUFJSCxpQkFBaUIsSUFBSSxDQUFDRixPQUFPLENBQUNLLGlCQUFpQjtnQkFFbkRILGlCQUFpQixBQUNmLG1CQUFHQSx1QkFDSCxtQkFBRyxJQUFJLENBQUNBLGNBQWM7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