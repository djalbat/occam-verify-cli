"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FileContext;
    }
});
var _occamGrammarUtilities = require("occam-grammar-utilities");
var _array = require("../utilities/array");
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
var FileContext = /*#__PURE__*/ function() {
    function FileContext(tokens, node, rules, types, axioms, variables, combinators, constructors, packageContext) {
        _classCallCheck(this, FileContext);
        this.tokens = tokens;
        this.node = node;
        this.rules = rules;
        this.types = types;
        this.axioms = axioms;
        this.variables = variables;
        this.combinators = combinators;
        this.constructors = constructors;
        this.packageContext = packageContext;
    }
    _createClass(FileContext, [
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getRules",
            value: function getRules() {
                var bubble = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var rules = _toConsumableArray(this.rules);
                if (bubble) {
                    var packageContextRules = this.packageContext.getRules();
                    (0, _array.push)(rules, packageContextRules);
                }
                return rules;
            }
        },
        {
            key: "getTypes",
            value: function getTypes() {
                var bubble = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var types = _toConsumableArray(this.types);
                if (bubble) {
                    var packageContextTypes = this.packageContext.getTypes();
                    (0, _array.push)(types, packageContextTypes);
                }
                return types;
            }
        },
        {
            key: "getAxioms",
            value: function getAxioms() {
                var bubble = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var axioms = _toConsumableArray(this.axioms);
                if (bubble) {
                    var packageContextAxioms = this.packageContext.getAxioms();
                    (0, _array.push)(axioms, packageContextAxioms);
                }
                return axioms;
            }
        },
        {
            key: "getLabels",
            value: function getLabels() {
                var axioms = this.getAxioms(), labels = axioms.reduce(function(labels, axiom) {
                    var axiomLabels = axiom.getLabels();
                    (0, _array.push)(labels, axiomLabels);
                    return labels;
                }, []);
                return labels;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                return this.variables;
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators() {
                var bubble = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var combinators = _toConsumableArray(this.combinators);
                if (bubble) {
                    var packageContextCombinators = this.packageContext.getCombinators();
                    (0, _array.push)(combinators, packageContextCombinators);
                }
                return combinators;
            }
        },
        {
            key: "getConstructors",
            value: function getConstructors() {
                var bubble = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var constructors = _toConsumableArray(this.constructors);
                if (bubble) {
                    var packageContextConstructors = this.packageContext.getConstructors();
                    (0, _array.push)(constructors, packageContextConstructors);
                }
                return constructors;
            }
        },
        {
            key: "getPackageContext",
            value: function getPackageContext() {
                return this.packageContext;
            }
        },
        {
            key: "getMetaAssertions",
            value: function getMetaAssertions() {
                var metaAssertions = [];
                return metaAssertions;
            }
        },
        {
            key: "findTypeByTypeName",
            value: function findTypeByTypeName(typeName) {
                var types = this.getTypes(), type = types.find(function(type) {
                    var matches = type.matchTypeName(typeName);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return type;
            }
        },
        {
            key: "findRuleByReferenceName",
            value: function findRuleByReferenceName(referenceName) {
                var label = referenceName, rules = this.getRules(), rule = rules.find(function(rule) {
                    var ruleLabels = rule.getLabels(), ruleLabelsIncludesLabel = ruleLabels.includes(label);
                    if (ruleLabelsIncludesLabel) {
                        return true;
                    }
                }) || null;
                return rule;
            }
        },
        {
            key: "findAxiomByReferenceName",
            value: function findAxiomByReferenceName(referenceName) {
                var label = referenceName, axioms = this.getAxioms(), axiom = axioms.find(function(axiom) {
                    var axiomLabels = axiom.getLabels(), axiomLabelsIncludesLabel = axiomLabels.includes(label);
                    if (axiomLabelsIncludesLabel) {
                        return true;
                    }
                }) || null;
                return axiom;
            }
        },
        {
            key: "findVariableByVariableName",
            value: function findVariableByVariableName(variableName) {
                var name = variableName, variable = this.variables.find(function(variable) {
                    var matches = variable.matchName(name);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return variable;
            }
        },
        {
            key: "isDerived",
            value: function isDerived() {
                var derived = false;
                return derived;
            }
        },
        {
            key: "isLabelPresent",
            value: function isLabelPresent(label) {
                var labels = this.getLabels(), labelsIncludesLabel = labels.includes(label), labelPresent = labelsIncludesLabel; ///
                return labelPresent;
            }
        },
        {
            key: "matchMetaAssertion",
            value: function matchMetaAssertion(metaAssertion) {
                var metaAssertionMatches = false;
                return metaAssertionMatches;
            }
        },
        {
            key: "isTypePresentByTypeName",
            value: function isTypePresentByTypeName(typeName) {
                var type = this.findTypeByTypeName(typeName), typePresent = type !== null;
                return typePresent;
            }
        },
        {
            key: "isVariablePresentByVariableName",
            value: function isVariablePresentByVariableName(variableName) {
                var variable = this.findVariableByVariableName(variableName), variablePresent = variable !== null;
                return variablePresent;
            }
        },
        {
            key: "addType",
            value: function addType(type) {
                this.types.push(type);
            }
        },
        {
            key: "addRule",
            value: function addRule(rule) {
                this.rules.push(rule);
            }
        },
        {
            key: "addAxiom",
            value: function addAxiom(axiom) {
                this.axioms.push(axiom);
            }
        },
        {
            key: "addVariable",
            value: function addVariable(variable) {
                this.variables.push(variable);
            }
        },
        {
            key: "addCombinator",
            value: function addCombinator(combinator) {
                this.combinators.push(combinator);
            }
        },
        {
            key: "addConstructor",
            value: function addConstructor(constructor) {
                this.constructors.push(constructor);
            }
        }
    ], [
        {
            key: "fromPackageContextAndFilePath",
            value: function fromPackageContextAndFilePath(packageContext, filePath) {
                var fileContent = packageContext.getFileContent(filePath), content = fileContent, tokens = packageContext.tokenise(content), node = packageContext.parse(tokens);
                (0, _occamGrammarUtilities.rewriteNodes)(node);
                var rules = [], types = [], axioms = [], variables = [], combinators = [], constructors = [], fileContext = new FileContext(tokens, node, rules, types, axioms, variables, combinators, constructors, packageContext);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJld3JpdGVOb2RlcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKHRva2Vucywgbm9kZSwgcnVsZXMsIHR5cGVzLCBheGlvbXMsIHZhcmlhYmxlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgcGFja2FnZUNvbnRleHQpIHtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICAgIHRoaXMucGFja2FnZUNvbnRleHQgPSBwYWNrYWdlQ29udGV4dDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRSdWxlcyhidWJibGUgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXG4gICAgICAuLi50aGlzLnJ1bGVzXG4gICAgXTtcblxuICAgIGlmIChidWJibGUpIHtcbiAgICAgIGNvbnN0IHBhY2thZ2VDb250ZXh0UnVsZXMgPSB0aGlzLnBhY2thZ2VDb250ZXh0LmdldFJ1bGVzKCk7XG5cbiAgICAgIHB1c2gocnVsZXMsIHBhY2thZ2VDb250ZXh0UnVsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldFR5cGVzKGJ1YmJsZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtcbiAgICAgIC4uLnRoaXMudHlwZXNcbiAgICBdO1xuXG4gICAgaWYgKGJ1YmJsZSkge1xuICAgICAgY29uc3QgcGFja2FnZUNvbnRleHRUeXBlcyA9IHRoaXMucGFja2FnZUNvbnRleHQuZ2V0VHlwZXMoKTtcblxuICAgICAgcHVzaCh0eXBlcywgcGFja2FnZUNvbnRleHRUeXBlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGJ1YmJsZSA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXG4gICAgICAuLi50aGlzLmF4aW9tc1xuICAgIF07XG5cbiAgICBpZiAoYnViYmxlKSB7XG4gICAgICBjb25zdCBwYWNrYWdlQ29udGV4dEF4aW9tcyA9IHRoaXMucGFja2FnZUNvbnRleHQuZ2V0QXhpb21zKCk7XG5cbiAgICAgIHB1c2goYXhpb21zLCBwYWNrYWdlQ29udGV4dEF4aW9tcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICBjb25zdCBheGlvbXMgPSB0aGlzLmdldEF4aW9tcygpLFxuICAgICAgICAgIGxhYmVscyA9IGF4aW9tcy5yZWR1Y2UoKGxhYmVscywgYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF4aW9tTGFiZWxzID0gYXhpb20uZ2V0TGFiZWxzKCk7XG5cbiAgICAgICAgICAgIHB1c2gobGFiZWxzLCBheGlvbUxhYmVscyk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhidWJibGUgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXG4gICAgICAuLi50aGlzLmNvbWJpbmF0b3JzXG4gICAgXTtcblxuICAgIGlmIChidWJibGUpIHtcbiAgICAgIGNvbnN0IHBhY2thZ2VDb250ZXh0Q29tYmluYXRvcnMgPSB0aGlzLnBhY2thZ2VDb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIHBhY2thZ2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhidWJibGUgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3RvcnNcbiAgICBdO1xuXG4gICAgaWYgKGJ1YmJsZSkge1xuICAgICAgY29uc3QgcGFja2FnZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSB0aGlzLnBhY2thZ2VDb250ZXh0LmdldENvbnN0cnVjdG9ycygpO1xuXG4gICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcGFja2FnZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRQYWNrYWdlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYWNrYWdlQ29udGV4dDtcbiAgfVxuXG4gIGdldE1ldGFBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IG1ldGFBc3NlcnRpb25zID0gW107XG5cbiAgICByZXR1cm4gbWV0YUFzc2VydGlvbnM7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKSxcbiAgICAgICAgICB0eXBlID0gdHlwZXMuZmluZCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHR5cGUubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbCA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBydWxlID0gcnVsZXMuZmluZCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZUxhYmVscyA9IHJ1bGUuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgICAgICAgICBydWxlTGFiZWxzSW5jbHVkZXNMYWJlbCA9IHJ1bGVMYWJlbHMuaW5jbHVkZXMobGFiZWwpO1xuXG4gICAgICAgICAgICBpZiAocnVsZUxhYmVsc0luY2x1ZGVzTGFiZWwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbCA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICBheGlvbXMgPSB0aGlzLmdldEF4aW9tcygpLFxuICAgICAgICAgIGF4aW9tID0gYXhpb21zLmZpbmQoKGF4aW9tKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpLFxuICAgICAgICAgICAgICAgICAgYXhpb21MYWJlbHNJbmNsdWRlc0xhYmVsID0gYXhpb21MYWJlbHMuaW5jbHVkZXMobGFiZWwpO1xuXG4gICAgICAgICAgICBpZiAoYXhpb21MYWJlbHNJbmNsdWRlc0xhYmVsKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB0aGlzLnZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGlzRGVyaXZlZCgpIHtcbiAgICBjb25zdCBkZXJpdmVkID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZGVyaXZlZDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50KGxhYmVsKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbHNJbmNsdWRlc0xhYmVsID0gbGFiZWxzLmluY2x1ZGVzKGxhYmVsKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBsYWJlbHNJbmNsdWRlc0xhYmVsOyAvLy9cblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBtYXRjaE1ldGFBc3NlcnRpb24obWV0YUFzc2VydGlvbikge1xuICAgIGNvbnN0IG1ldGFBc3NlcnRpb25NYXRjaGVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbWV0YUFzc2VydGlvbk1hdGNoZXM7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgYWRkVHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuICB9XG5cbiAgYWRkUnVsZShydWxlKSB7XG4gICAgdGhpcy5ydWxlcy5wdXNoKHJ1bGUpO1xuICB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHtcbiAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRDb21iaW5hdG9yKGNvbWJpbmF0b3IpIHtcbiAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG4gIH1cblxuICBhZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYWNrYWdlQ29udGV4dEFuZEZpbGVQYXRoKHBhY2thZ2VDb250ZXh0LCBmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGVDb250ZW50ID0gcGFja2FnZUNvbnRleHQuZ2V0RmlsZUNvbnRlbnQoZmlsZVBhdGgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlQ29udGVudCwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IHBhY2thZ2VDb250ZXh0LnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBwYWNrYWdlQ29udGV4dC5wYXJzZSh0b2tlbnMpO1xuXG4gICAgcmV3cml0ZU5vZGVzKG5vZGUpO1xuXG4gICAgY29uc3QgcnVsZXMgPSBbXSxcbiAgICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQodG9rZW5zLCBub2RlLCBydWxlcywgdHlwZXMsIGF4aW9tcywgdmFyaWFibGVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBwYWNrYWdlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJ0b2tlbnMiLCJub2RlIiwicnVsZXMiLCJ0eXBlcyIsImF4aW9tcyIsInZhcmlhYmxlcyIsImNvbWJpbmF0b3JzIiwiY29uc3RydWN0b3JzIiwicGFja2FnZUNvbnRleHQiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwiZ2V0UnVsZXMiLCJidWJibGUiLCJwYWNrYWdlQ29udGV4dFJ1bGVzIiwicHVzaCIsImdldFR5cGVzIiwicGFja2FnZUNvbnRleHRUeXBlcyIsImdldEF4aW9tcyIsInBhY2thZ2VDb250ZXh0QXhpb21zIiwiZ2V0TGFiZWxzIiwibGFiZWxzIiwicmVkdWNlIiwiYXhpb20iLCJheGlvbUxhYmVscyIsImdldFZhcmlhYmxlcyIsImdldENvbWJpbmF0b3JzIiwicGFja2FnZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsInBhY2thZ2VDb250ZXh0Q29uc3RydWN0b3JzIiwiZ2V0UGFja2FnZUNvbnRleHQiLCJnZXRNZXRhQXNzZXJ0aW9ucyIsIm1ldGFBc3NlcnRpb25zIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJ0eXBlIiwiZmluZCIsIm1hdGNoZXMiLCJtYXRjaFR5cGVOYW1lIiwiZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUiLCJyZWZlcmVuY2VOYW1lIiwibGFiZWwiLCJydWxlIiwicnVsZUxhYmVscyIsInJ1bGVMYWJlbHNJbmNsdWRlc0xhYmVsIiwiaW5jbHVkZXMiLCJmaW5kQXhpb21CeVJlZmVyZW5jZU5hbWUiLCJheGlvbUxhYmVsc0luY2x1ZGVzTGFiZWwiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsIm5hbWUiLCJ2YXJpYWJsZSIsIm1hdGNoTmFtZSIsImlzRGVyaXZlZCIsImRlcml2ZWQiLCJpc0xhYmVsUHJlc2VudCIsImxhYmVsc0luY2x1ZGVzTGFiZWwiLCJsYWJlbFByZXNlbnQiLCJtYXRjaE1ldGFBc3NlcnRpb24iLCJtZXRhQXNzZXJ0aW9uIiwibWV0YUFzc2VydGlvbk1hdGNoZXMiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlUHJlc2VudCIsImFkZFR5cGUiLCJhZGRSdWxlIiwiYWRkQXhpb20iLCJhZGRWYXJpYWJsZSIsImFkZENvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwiYWRkQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsImZyb21QYWNrYWdlQ29udGV4dEFuZEZpbGVQYXRoIiwiZmlsZVBhdGgiLCJmaWxlQ29udGVudCIsImdldEZpbGVDb250ZW50IiwiY29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJyZXdyaXRlTm9kZXMiLCJmaWxlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7cUNBSlE7cUJBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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