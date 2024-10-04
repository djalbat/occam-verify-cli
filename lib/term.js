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
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _termAsConstructor = /*#__PURE__*/ _interop_require_default(require("./verifier/termAsConstructor"));
var _array = require("./utilities/array");
var _query = require("./utilities/query");
var _node = require("./utilities/node");
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
var variableNodesQuery = (0, _query.nodesQuery)("//variable");
var Term = /*#__PURE__*/ function() {
    function Term(string, node, type) {
        _class_call_check(this, Term);
        this.string = string;
        this.node = node;
        this.type = type;
    }
    _create_class(Term, [
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
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "match",
            value: function match(term) {
                var node = term.getNode(), matches = this.node.match(node);
                return matches;
            }
        },
        {
            key: "getVariables",
            value: function getVariables(localContext) {
                var variables = [], variableNodes = variableNodesQuery(this.node);
                variableNodes.forEach(function(variableNode) {
                    var variable = localContext.findVariableByVariableNode(variableNode), variablesIncludesVariable = variables.includes(variable);
                    if (!variablesIncludesVariable) {
                        variables.push(variable);
                    }
                });
                return variables;
            }
        },
        {
            key: "isGrounded",
            value: function isGrounded(definedVariables, localContext) {
                var variables = this.getVariables(localContext);
                (0, _array.filter)(variables, function(variable) {
                    var definedVariablesIncludesVariable = definedVariables.includes(variable);
                    if (!definedVariablesIncludesVariable) {
                        return true;
                    }
                });
                var undefinedVariables = variables, undefinedVariablesLength = undefinedVariables.length, grounded = undefinedVariablesLength <= 1;
                return grounded;
            }
        },
        {
            key: "matchTermNode",
            value: function matchTermNode(termNode) {
                var termNodeMatches = this.node.match(termNode);
                return termNodeMatches;
            }
        },
        {
            key: "isInitiallyGrounded",
            value: function isInitiallyGrounded(localContext) {
                var variables = this.getVariables(localContext), variablesLength = variables.length, initiallyGrounded = variablesLength === 0;
                return initiallyGrounded;
            }
        },
        {
            key: "isImplicitlyGrounded",
            value: function isImplicitlyGrounded(definedVariables, localContext) {
                var grounded = this.isGrounded(definedVariables, localContext), implicitlyGrounded = grounded; ///
                return implicitlyGrounded;
            }
        },
        {
            key: "verify",
            value: function verify(localContext, verifyAhead) {
                var verified = false;
                debugger;
                return verified;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(fileContext) {
                var typeVerified;
                if (this.type === null) {
                    typeVerified = true;
                } else {
                    var typeName = this.type.getName();
                    fileContext.trace("Verifying the '".concat(typeName, "' type..."));
                    var type = fileContext.findTypeByTypeName(typeName);
                    if (type === null) {
                        fileContext.debug("The '".concat(typeName, "' type is missing."));
                    } else {
                        this.type = type; ///
                        typeVerified = true;
                    }
                    if (typeVerified) {
                        fileContext.debug("...verified the '".concat(typeName, "' type."));
                    }
                }
                return typeVerified;
            }
        },
        {
            key: "verifyAsConstructor",
            value: function verifyAsConstructor(fileContext) {
                var verifiedAsConstructor;
                var termNode = this.node, termString = this.string; ///
                fileContext.trace("Verifying the '".concat(termString, "' term as a constructor..."));
                verifiedAsConstructor = _termAsConstructor.default.verifyTerm(termNode, fileContext);
                if (verifiedAsConstructor) {
                    fileContext.debug("...verified the '".concat(termString, "' term as a constructor."), termNode);
                }
                return verifiedAsConstructor;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var typeJSON = this.type !== null ? this.type.toJSON() : null, string = this.string, type = typeJSON, json = {
                    string: string,
                    type: type
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var string = json.string, termString = string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), termNode = (0, _node.termNodeFromTermString)(termString, lexer, parser), node = termNode;
                var type = json.type;
                var typeJSON = type; ///
                json = typeJSON; ///
                type = json !== null ? Type.fromJSON(json, fileContext) : null;
                var term = new Term(string, node, type);
                return term;
            }
        },
        {
            key: "fromTermNode",
            value: function fromTermNode(termNode, fileContext) {
                var node = termNode, string = fileContext.nodeAsString(node), type = null, term = new Term(string, node, type);
                return term;
            }
        },
        {
            key: "fromTermNodeAndType",
            value: function fromTermNodeAndType(termNode, type, fileContext) {
                var node = termNode, string = fileContext.nodeAsString(node), term = new Term(string, node, type);
                return term;
            }
        }
    ]);
    return Term;
}();
Object.assign(_shim.default, {
    Term: Term
});
var _default = Term;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgdGVybUFzQ29uc3RydWN0b3JWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci90ZXJtQXNDb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIlxuaW1wb3J0IHsgdGVybU5vZGVGcm9tVGVybVN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvL3ZhcmlhYmxlXCIpO1xuXG5jbGFzcyBUZXJtIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0eXBlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIG1hdGNoKHRlcm0pIHtcbiAgICBjb25zdCBub2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaChub2RlKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZXMgPSB2YXJpYWJsZU5vZGVzUXVlcnkodGhpcy5ub2RlKTtcblxuICAgIHZhcmlhYmxlTm9kZXMuZm9yRWFjaCgodmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSA9IHZhcmlhYmxlcy5pbmNsdWRlcyh2YXJpYWJsZSk7XG5cbiAgICAgIGlmICghdmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSkge1xuICAgICAgICB2YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhsb2NhbENvbnRleHQpO1xuXG4gICAgZmlsdGVyKHZhcmlhYmxlcywgKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIWRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdW5kZWZpbmVkVmFyaWFibGVzID0gdmFyaWFibGVzLCAvLy9cbiAgICAgICAgICB1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSB1bmRlZmluZWRWYXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGdyb3VuZGVkID0gKHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA8PSAxKTtcblxuICAgIHJldHVybiBncm91bmRlZDtcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2godGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIGlzSW5pdGlhbGx5R3JvdW5kZWQobG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMobG9jYWxDb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZXNMZW5ndGggPSB2YXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkID0gKHZhcmlhYmxlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWQ7XG4gIH1cblxuICBpc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBncm91bmRlZCA9IHRoaXMuaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IGdyb3VuZGVkOyAgLy8vXG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkO1xuICB9XG5cbiAgdmVyaWZ5KGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGRlYnVnZ2VyXG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUeXBlKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZDtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKTtcblxuICAgICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVOYW1lfScgdHlwZSBpcyBtaXNzaW5nLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTsgLy8vXG5cbiAgICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVOYW1lfScgdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5QXNDb25zdHJ1Y3RvcihmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEFzQ29uc3RydWN0b3I7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMubm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgdmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gdGVybUFzQ29uc3RydWN0b3JWZXJpZmllci52ZXJpZnlUZXJtKHRlcm1Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgY29uc3RydWN0b3IuYCwgdGVybU5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEFzQ29uc3RydWN0b3I7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSAodGhpcy50eXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZUZyb21UZXJtU3RyaW5nKHRlcm1TdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG5vZGUgPSB0ZXJtTm9kZTtcblxuICAgIGxldCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGU7ICAvLy9cblxuICAgIGpzb24gPSB0eXBlSlNPTjsgIC8vL1xuXG4gICAgdHlwZSA9IChqc29uICE9PSBudWxsKSA/XG4gICAgICAgICAgICBUeXBlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSA6XG4gICAgICAgICAgICAgIG51bGw7XG5cbiAgICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBUZXJtXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVGVybTsiXSwibmFtZXMiOlsidmFyaWFibGVOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIlRlcm0iLCJzdHJpbmciLCJub2RlIiwidHlwZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUeXBlIiwibWF0Y2giLCJ0ZXJtIiwibWF0Y2hlcyIsImdldFZhcmlhYmxlcyIsImxvY2FsQ29udGV4dCIsInZhcmlhYmxlcyIsInZhcmlhYmxlTm9kZXMiLCJmb3JFYWNoIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUiLCJpbmNsdWRlcyIsInB1c2giLCJpc0dyb3VuZGVkIiwiZGVmaW5lZFZhcmlhYmxlcyIsImZpbHRlciIsImRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlIiwidW5kZWZpbmVkVmFyaWFibGVzIiwidW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoIiwibGVuZ3RoIiwiZ3JvdW5kZWQiLCJtYXRjaFRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwidmFyaWFibGVzTGVuZ3RoIiwiaW5pdGlhbGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsImltcGxpY2l0bHlHcm91bmRlZCIsInZlcmlmeSIsInZlcmlmeUFoZWFkIiwidmVyaWZpZWQiLCJ2ZXJpZnlUeXBlIiwiZmlsZUNvbnRleHQiLCJ0eXBlVmVyaWZpZWQiLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJ0cmFjZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImRlYnVnIiwidmVyaWZ5QXNDb25zdHJ1Y3RvciIsInZlcmlmaWVkQXNDb25zdHJ1Y3RvciIsInRlcm1TdHJpbmciLCJ0ZXJtQXNDb25zdHJ1Y3RvclZlcmlmaWVyIiwidmVyaWZ5VGVybSIsInRvSlNPTiIsInR5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInRlcm1Ob2RlRnJvbVRlcm1TdHJpbmciLCJUeXBlIiwiZnJvbVRlcm1Ob2RlIiwibm9kZUFzU3RyaW5nIiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRNQTs7O2VBQUE7OzsyREExTWlCO3dFQUNxQjtxQkFFZjtxQkFDSTtvQkFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxJQUFNQSxxQkFBcUJDLElBQUFBLGlCQUFVLEVBQUM7QUFFdEMsSUFBQSxBQUFNQyxxQkFBTjthQUFNQSxLQUNRQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSTtnQ0FEMUJIO1FBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztrQkFKVkg7O1lBT0pJLEtBQUFBO21C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