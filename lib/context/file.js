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
    function FileContext(tokens, node, rules, types, axioms, variables, combinators, constructors, releaseContext) {
        _classCallCheck(this, FileContext);
        this.tokens = tokens;
        this.node = node;
        this.rules = rules;
        this.types = types;
        this.axioms = axioms;
        this.variables = variables;
        this.combinators = combinators;
        this.constructors = constructors;
        this.releaseContext = releaseContext;
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
                    var releaseContextRules = this.releaseContext.getRules();
                    (0, _array.push)(rules, releaseContextRules);
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
                    var releaseContextTypes = this.releaseContext.getTypes();
                    (0, _array.push)(types, releaseContextTypes);
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
                    var releaseContextAxioms = this.releaseContext.getAxioms();
                    (0, _array.push)(axioms, releaseContextAxioms);
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
                    var releaseContextCombinators = this.releaseContext.getCombinators();
                    (0, _array.push)(combinators, releaseContextCombinators);
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
                    var releaseContextConstructors = this.releaseContext.getConstructors();
                    (0, _array.push)(constructors, releaseContextConstructors);
                }
                return constructors;
            }
        },
        {
            key: "getReleaseContext",
            value: function getReleaseContext() {
                return this.releaseContext;
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
        },
        {
            key: "trace",
            value: function trace(message) {
                this.releaseContext.trace(message);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                this.releaseContext.debug(message);
            }
        },
        {
            key: "info",
            value: function info(message) {
                this.releaseContext.info(message);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                this.releaseContext.warning(message);
            }
        },
        {
            key: "error",
            value: function error(message) {
                this.releaseContext.error(message);
            }
        },
        {
            key: "fatal",
            value: function fatal(message) {
                this.releaseContext.fatal(message);
            }
        }
    ], [
        {
            key: "fromReleaseContextAndFilePath",
            value: function fromReleaseContextAndFilePath(releaseContext, filePath) {
                var fileContent = releaseContext.getFileContent(filePath), content = fileContent, tokens = releaseContext.tokenise(content), node = releaseContext.parse(tokens);
                (0, _occamGrammarUtilities.rewriteNodes)(node);
                var rules = [], types = [], axioms = [], variables = [], combinators = [], constructors = [], fileContext = new FileContext(tokens, node, rules, types, axioms, variables, combinators, constructors, releaseContext);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJld3JpdGVOb2RlcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKHRva2Vucywgbm9kZSwgcnVsZXMsIHR5cGVzLCBheGlvbXMsIHZhcmlhYmxlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHQpIHtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICAgIHRoaXMucmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRSdWxlcyhidWJibGUgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXG4gICAgICAuLi50aGlzLnJ1bGVzXG4gICAgXTtcblxuICAgIGlmIChidWJibGUpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0UnVsZXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKCk7XG5cbiAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldFR5cGVzKGJ1YmJsZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtcbiAgICAgIC4uLnRoaXMudHlwZXNcbiAgICBdO1xuXG4gICAgaWYgKGJ1YmJsZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoKTtcblxuICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGJ1YmJsZSA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXG4gICAgICAuLi50aGlzLmF4aW9tc1xuICAgIF07XG5cbiAgICBpZiAoYnViYmxlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKCk7XG5cbiAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICBjb25zdCBheGlvbXMgPSB0aGlzLmdldEF4aW9tcygpLFxuICAgICAgICAgIGxhYmVscyA9IGF4aW9tcy5yZWR1Y2UoKGxhYmVscywgYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF4aW9tTGFiZWxzID0gYXhpb20uZ2V0TGFiZWxzKCk7XG5cbiAgICAgICAgICAgIHB1c2gobGFiZWxzLCBheGlvbUxhYmVscyk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhidWJibGUgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXG4gICAgICAuLi50aGlzLmNvbWJpbmF0b3JzXG4gICAgXTtcblxuICAgIGlmIChidWJibGUpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhidWJibGUgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3RvcnNcbiAgICBdO1xuXG4gICAgaWYgKGJ1YmJsZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycygpO1xuXG4gICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRSZWxlYXNlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dDtcbiAgfVxuXG4gIGdldE1ldGFBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IG1ldGFBc3NlcnRpb25zID0gW107XG5cbiAgICByZXR1cm4gbWV0YUFzc2VydGlvbnM7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKSxcbiAgICAgICAgICB0eXBlID0gdHlwZXMuZmluZCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHR5cGUubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbCA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBydWxlID0gcnVsZXMuZmluZCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZUxhYmVscyA9IHJ1bGUuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgICAgICAgICBydWxlTGFiZWxzSW5jbHVkZXNMYWJlbCA9IHJ1bGVMYWJlbHMuaW5jbHVkZXMobGFiZWwpO1xuXG4gICAgICAgICAgICBpZiAocnVsZUxhYmVsc0luY2x1ZGVzTGFiZWwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbCA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICBheGlvbXMgPSB0aGlzLmdldEF4aW9tcygpLFxuICAgICAgICAgIGF4aW9tID0gYXhpb21zLmZpbmQoKGF4aW9tKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpLFxuICAgICAgICAgICAgICAgICAgYXhpb21MYWJlbHNJbmNsdWRlc0xhYmVsID0gYXhpb21MYWJlbHMuaW5jbHVkZXMobGFiZWwpO1xuXG4gICAgICAgICAgICBpZiAoYXhpb21MYWJlbHNJbmNsdWRlc0xhYmVsKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB0aGlzLnZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGlzRGVyaXZlZCgpIHtcbiAgICBjb25zdCBkZXJpdmVkID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZGVyaXZlZDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50KGxhYmVsKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbHNJbmNsdWRlc0xhYmVsID0gbGFiZWxzLmluY2x1ZGVzKGxhYmVsKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBsYWJlbHNJbmNsdWRlc0xhYmVsOyAvLy9cblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBtYXRjaE1ldGFBc3NlcnRpb24obWV0YUFzc2VydGlvbikge1xuICAgIGNvbnN0IG1ldGFBc3NlcnRpb25NYXRjaGVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbWV0YUFzc2VydGlvbk1hdGNoZXM7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgYWRkVHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuICB9XG5cbiAgYWRkUnVsZShydWxlKSB7XG4gICAgdGhpcy5ydWxlcy5wdXNoKHJ1bGUpO1xuICB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHtcbiAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRDb21iaW5hdG9yKGNvbWJpbmF0b3IpIHtcbiAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG4gIH1cblxuICBhZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICB9XG5cbiAgdHJhY2UobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LnRyYWNlKG1lc3NhZ2UpOyB9XG5cbiAgZGVidWcobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmRlYnVnKG1lc3NhZ2UpOyB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuaW5mbyhtZXNzYWdlKTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0Lndhcm5pbmcobWVzc2FnZSk7IH1cblxuICBlcnJvcihtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZXJyb3IobWVzc2FnZSk7IH1cblxuICBmYXRhbChtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZmF0YWwobWVzc2FnZSk7IH1cblxuICBzdGF0aWMgZnJvbVJlbGVhc2VDb250ZXh0QW5kRmlsZVBhdGgocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZmlsZUNvbnRlbnQgPSByZWxlYXNlQ29udGV4dC5nZXRGaWxlQ29udGVudChmaWxlUGF0aCksXG4gICAgICAgICAgY29udGVudCA9IGZpbGVDb250ZW50LCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gcmVsZWFzZUNvbnRleHQudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHJlbGVhc2VDb250ZXh0LnBhcnNlKHRva2Vucyk7XG5cbiAgICByZXdyaXRlTm9kZXMobm9kZSk7XG5cbiAgICBjb25zdCBydWxlcyA9IFtdLFxuICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgYXhpb21zID0gW10sXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dCh0b2tlbnMsIG5vZGUsIHJ1bGVzLCB0eXBlcywgYXhpb21zLCB2YXJpYWJsZXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsInRva2VucyIsIm5vZGUiLCJydWxlcyIsInR5cGVzIiwiYXhpb21zIiwidmFyaWFibGVzIiwiY29tYmluYXRvcnMiLCJjb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dCIsImdldFRva2VucyIsImdldE5vZGUiLCJnZXRSdWxlcyIsImJ1YmJsZSIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJwdXNoIiwiZ2V0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMYWJlbHMiLCJsYWJlbHMiLCJyZWR1Y2UiLCJheGlvbSIsImF4aW9tTGFiZWxzIiwiZ2V0VmFyaWFibGVzIiwiZ2V0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRSZWxlYXNlQ29udGV4dCIsImdldE1ldGFBc3NlcnRpb25zIiwibWV0YUFzc2VydGlvbnMiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsInR5cGUiLCJmaW5kIiwibWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlTmFtZSIsInJlZmVyZW5jZU5hbWUiLCJsYWJlbCIsInJ1bGUiLCJydWxlTGFiZWxzIiwicnVsZUxhYmVsc0luY2x1ZGVzTGFiZWwiLCJpbmNsdWRlcyIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZSIsImF4aW9tTGFiZWxzSW5jbHVkZXNMYWJlbCIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwibmFtZSIsInZhcmlhYmxlIiwibWF0Y2hOYW1lIiwiaXNEZXJpdmVkIiwiZGVyaXZlZCIsImlzTGFiZWxQcmVzZW50IiwibGFiZWxzSW5jbHVkZXNMYWJlbCIsImxhYmVsUHJlc2VudCIsIm1hdGNoTWV0YUFzc2VydGlvbiIsIm1ldGFBc3NlcnRpb24iLCJtZXRhQXNzZXJ0aW9uTWF0Y2hlcyIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVQcmVzZW50IiwiYWRkVHlwZSIsImFkZFJ1bGUiLCJhZGRBeGlvbSIsImFkZFZhcmlhYmxlIiwiYWRkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJhZGRDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwidHJhY2UiLCJtZXNzYWdlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZmF0YWwiLCJmcm9tUmVsZWFzZUNvbnRleHRBbmRGaWxlUGF0aCIsImZpbGVQYXRoIiwiZmlsZUNvbnRlbnQiLCJnZXRGaWxlQ29udGVudCIsImNvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIiwicmV3cml0ZU5vZGVzIiwiZmlsZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3FDQUpRO3FCQUVSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTixJQUFBLEFBQU1BLDRCQUFOO2FBQU1BLFlBQ1BDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxjQUFjOzhCQURqRlQ7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBOztpQkFWTFQ7O1lBYW5CVSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTtnQkFDVixPQUFPLElBQUksQ0FBQ1QsTUFBTTtZQUNwQjs7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