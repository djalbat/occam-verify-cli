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
        },
        {
            key: "trace",
            value: function trace(message) {
                this.context.trace(message);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                this.context.debug(message);
            }
        },
        {
            key: "info",
            value: function info(message) {
                this.context.info(message);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                this.context.warning(message);
            }
        },
        {
            key: "error",
            value: function error(message) {
                this.context.error(message);
            }
        },
        {
            key: "fatal",
            value: function fatal(message) {
                this.context.fatal(message);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L21ldGFwcm9vZi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXByb29mQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGRlcml2ZWQsIG1ldGFBc3NlcnRpb25zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmRlcml2ZWQgPSBkZXJpdmVkO1xuICAgIHRoaXMubWV0YUFzc2VydGlvbnMgPSBtZXRhQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGlzRGVyaXZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXJpdmVkO1xuICB9XG5cbiAgZ2V0TWV0YUFzc2VydGlvbnMoKSB7XG4gICAgbGV0IG1ldGFBc3NlcnRpb25zID0gdGhpcy5jb250ZXh0LmdldE1ldGFBc3NlcnRpb25zKCk7XG5cbiAgICBtZXRhQXNzZXJ0aW9ucyA9IFtcbiAgICAgIC4uLm1ldGFBc3NlcnRpb25zLFxuICAgICAgLi4udGhpcy5tZXRhQXNzZXJ0aW9uc1xuICAgIF07XG5cbiAgICByZXR1cm4gbWV0YUFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRSdWxlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRSdWxlcygpOyB9XG5cbiAgZ2V0VHlwZXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VHlwZXMoKTsgfVxuXG4gIGdldEF4aW9tcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBeGlvbXMoKTsgfVxuXG4gIGdldENvbWJpbmF0b3JzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbWJpbmF0b3JzKCk7IH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7IH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpOyB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpOyB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTsgfVxuXG4gIGlzTGFiZWxQcmVzZW50KGxhYmVsKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnQobGFiZWwpOyB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7IH1cblxuICBtYXRjaE1ldGFBc3NlcnRpb24obWV0YUFzc2VydGlvbikge1xuICAgIGxldCBtZXRhQXNzZXJ0aW9uTWF0Y2hlcztcblxuICAgIGNvbnN0IG1ldGFBc3NlcnRpb25CID0gbWV0YUFzc2VydGlvbjsgLy8vXG5cbiAgICBtZXRhQXNzZXJ0aW9uTWF0Y2hlcyA9IHRoaXMubWV0YUFzc2VydGlvbnMuc29tZSgobWV0YUFzc2VydGlvbikgPT4ge1xuICAgICAgY29uc3QgbWV0YUFzc2VydGlvbkEgPSBtZXRhQXNzZXJ0aW9uLCAvLy9cbiAgICAgICAgICAgIG1hdGNoZXMgPSBtZXRhQXNzZXJ0aW9uQS5tYXRjaChtZXRhQXNzZXJ0aW9uQik7XG5cbiAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFtZXRhQXNzZXJ0aW9uTWF0Y2hlcykge1xuICAgICAgbWV0YUFzc2VydGlvbk1hdGNoZXMgPSB0aGlzLmNvbnRleHQubWF0Y2hNZXRhQXNzZXJ0aW9uKG1ldGFBc3NlcnRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhQXNzZXJ0aW9uTWF0Y2hlcztcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpOyB9XG5cbiAgc2V0RGVyaXZlZChkZXJpdmVkKSB7XG4gICAgdGhpcy5kZXJpdmVkID0gZGVyaXZlZDtcbiAgfVxuXG4gIGFkZFJ1bGUocnVsZSkgeyB0aGlzLmNvbnRleHQuYWRkUnVsZShydWxlKTsgfVxuXG4gIGFkZE1ldGFBc3NlcnRpb24obWV0YUFzc2VydGlvbikge1xuICAgIHRoaXMubWV0YUFzc2VydGlvbnMucHVzaChtZXRhQXNzZXJ0aW9uKTtcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0LnRyYWNlKG1lc3NhZ2UpOyB9XG5cbiAgZGVidWcobWVzc2FnZSkgeyB0aGlzLmNvbnRleHQuZGVidWcobWVzc2FnZSk7IH1cblxuICBpbmZvKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0LmluZm8obWVzc2FnZSk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0Lndhcm5pbmcobWVzc2FnZSk7IH1cblxuICBlcnJvcihtZXNzYWdlKSB7IHRoaXMuY29udGV4dC5lcnJvcihtZXNzYWdlKTsgfVxuXG4gIGZhdGFsKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0LmZhdGFsKG1lc3NhZ2UpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBkZXJpdmVkID0gZmFsc2UsXG4gICAgICAgICAgbWV0YUFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICBtZXRhcHJvb2ZDb250ZXh0ID0gbmV3IE1ldGFwcm9vZkNvbnRleHQoY29udGV4dCwgZGVyaXZlZCwgbWV0YUFzc2VydGlvbnMpO1xuXG4gICAgcmV0dXJuIG1ldGFwcm9vZkNvbnRleHQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTWV0YXByb29mQ29udGV4dCIsImNvbnRleHQiLCJkZXJpdmVkIiwibWV0YUFzc2VydGlvbnMiLCJnZXRDb250ZXh0IiwiaXNEZXJpdmVkIiwiZ2V0TWV0YUFzc2VydGlvbnMiLCJnZXRSdWxlcyIsImdldFR5cGVzIiwiZ2V0QXhpb21zIiwiZ2V0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsImZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lIiwicmVmZXJlbmNlTmFtZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwiaXNMYWJlbFByZXNlbnQiLCJsYWJlbCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwibWF0Y2hNZXRhQXNzZXJ0aW9uIiwibWV0YUFzc2VydGlvbiIsIm1ldGFBc3NlcnRpb25NYXRjaGVzIiwibWV0YUFzc2VydGlvbkIiLCJzb21lIiwibWV0YUFzc2VydGlvbkEiLCJtYXRjaGVzIiwibWF0Y2giLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwic2V0RGVyaXZlZCIsImFkZFJ1bGUiLCJydWxlIiwiYWRkTWV0YUFzc2VydGlvbiIsInB1c2giLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmYXRhbCIsImZyb21Db250ZXh0IiwibWV0YXByb29mQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsaUNBQU47YUFBTUEsaUJBQ1BDLE9BQU8sRUFBRUMsT0FB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