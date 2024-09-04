"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaLemmaMetatheorem;
    }
});
var _label = /*#__PURE__*/ _interop_require_default(require("./label"));
var _consequent = /*#__PURE__*/ _interop_require_default(require("./consequent"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("./supposition"));
var _statementForMetavariable = /*#__PURE__*/ _interop_require_default(require("./substitution/statementForMetavariable"));
var _array = require("./utilities/array");
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
var MetaLemmaMetatheorem = /*#__PURE__*/ function() {
    function MetaLemmaMetatheorem(labels, suppositions, consequent, substitutions, fileContext) {
        _class_call_check(this, MetaLemmaMetatheorem);
        this.labels = labels;
        this.suppositions = suppositions;
        this.consequent = consequent;
        this.substitutions = substitutions;
        this.fileContext = fileContext;
    }
    _create_class(MetaLemmaMetatheorem, [
        {
            key: "getLabels",
            value: function getLabels() {
                return this.labels;
            }
        },
        {
            key: "getSuppositions",
            value: function getSuppositions() {
                return this.suppositions;
            }
        },
        {
            key: "getConsequent",
            value: function getConsequent() {
                return this.consequent;
            }
        },
        {
            key: "getSubstitutions",
            value: function getSubstitutions() {
                return this.substitutions;
            }
        },
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "matchStatement",
            value: function matchStatement(statementNode, localContext) {
                var statementNatches = false;
                var metaproofSteps = localContext.getProofSteps(), substitutions = [], suppositionsMatch = matchSuppositions(this.suppositions, metaproofSteps, substitutions, this.fileContext, localContext);
                if (suppositionsMatch) {
                    var consequentMatches = matchConsequent(this.consequent, statementNode, substitutions, this.fileContext, localContext);
                    statementNatches = consequentMatches; ///
                }
                return statementNatches;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var matchesMetavariableNode = this.labels.some(function(label) {
                    var labelMatchesMetavariableNode = label.matchMetavariableNode(metavariableNode);
                    if (labelMatchesMetavariableNode) {
                        return true;
                    }
                });
                return matchesMetavariableNode;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var labelsJSON = this.labels.map(function(label) {
                    var labelJSON = label.toJSON(tokens);
                    return labelJSON;
                }), suppositionsJSON = this.suppositions.map(function(supposition) {
                    var suppositionJSON = supposition.toJSON(tokens);
                    return suppositionJSON;
                }), consequentJSON = this.consequent.toJSON(tokens), substitutionsJSON = this.substitutions.map(function(substitution) {
                    var substitutionJSON = substitution.toJSON();
                    return substitutionJSON;
                }), localContextJSON = this.fileContext.toJSON(tokens), labels = labelsJSON, suppositions = suppositionsJSON, consequent = consequentJSON, substitutions = substitutionsJSON, fileContext = localContextJSON, json = {
                    labels: labels,
                    suppositions: suppositions,
                    consequent: consequent,
                    substitutions: substitutions,
                    fileContext: fileContext
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(Class, json, fileContext) {
                var labels = json.labels;
                var labelsJSON = labels; ///
                labels = labelsJSON.map(function(labelJSON) {
                    var _$json = labelJSON, label = _label.default.fromJSONAndFileContext(_$json, fileContext);
                    return label;
                });
                var suppositions = json.suppositions, consequent = json.consequent, substitutions = json.substitutions;
                var suppositionsJSON = suppositions; ///
                suppositions = suppositionsJSON.map(function(suppositionJSON) {
                    var _$json = suppositionJSON, supposition = _supposition.default.fromJSONAndFileContext(_$json, fileContext);
                    return supposition;
                });
                var consequentJSON = consequent; ///
                json = consequentJSON; ///
                consequent = _consequent.default.fromJSONAndFileContext(json, fileContext);
                var substitutionsJSON = substitutions; ///
                substitutions = substitutionsJSON.map(function(substitutionJSON) {
                    var _$json = substitutionJSON, statementForMetavariableSubstitution = _statementForMetavariable.default.fromJSONAndFileContext(_$json, fileContext), substitution = statementForMetavariableSubstitution; ///
                    return substitution;
                });
                return new Class(labels, suppositions, consequent, substitutions, fileContext); ///
            }
        },
        {
            key: "fromLabelsSuppositionsConsequentSubstitutionsAndFileContext",
            value: function fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(Class, labels, suppositions, consequent, substitutions, fileContext) {
                return new Class(labels, suppositions, consequent, substitutions, fileContext);
            }
        }
    ]);
    return MetaLemmaMetatheorem;
}();
function matchSuppositions(suppositions, metaproofSteps, substitutions, fileContext, localContext) {
    suppositions = (0, _array.reverse)(suppositions); ///
    metaproofSteps = (0, _array.reverse)(metaproofSteps); ///
    var suppositionsMatch = (0, _array.correlate)(suppositions, metaproofSteps, function(supposition, metaproofStep) {
        var suppositionMatches = matchSupposition(supposition, metaproofStep, substitutions, fileContext, localContext);
        if (suppositionMatches) {
            return true;
        }
    });
    return suppositionsMatch;
}
function matchSupposition(supposition, metaproofStep, substitutions, fileContext, localContext) {
    var matchesSupposition = false;
    var metaSubproofNode = metaproofStep.getSubproofNode(), statementNode = metaproofStep.getStatementNode();
    if (metaSubproofNode !== null) {
        var suppositionMatchesSubproofNode = supposition.matchSubproofNode(metaSubproofNode, substitutions, fileContext, localContext);
        matchesSupposition - suppositionMatchesSubproofNode; ///
    }
    if (statementNode !== null) {
        var suppositionMatchesStatementNode = supposition.matchStatementNode(statementNode, substitutions, fileContext, localContext);
        matchesSupposition - suppositionMatchesStatementNode; ///
    }
    return matchesSupposition;
}
function matchConsequent(consequent, statementNode, substitutions, fileContext, localContext) {
    var consequentMatchesStatementNode = consequent.matchStatementNode(statementNode, substitutions, fileContext, localContext), consequentMatches = consequentMatchesStatementNode; ///
    return consequentMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhTGVtbWFNZXRhdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgQ29uc2VxdWVudCBmcm9tIFwiLi9jb25zZXF1ZW50XCI7XG5pbXBvcnQgU3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4vc3Vic3RpdHV0aW9uL3N0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyByZXZlcnNlLCBjb3JyZWxhdGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YUxlbW1hTWV0YXRoZW9yZW0ge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRDb25zZXF1ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnQ7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnROYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhcHJvb2ZTdGVwcyA9IGxvY2FsQ29udGV4dC5nZXRQcm9vZlN0ZXBzKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc01hdGNoID0gbWF0Y2hTdXBwb3NpdGlvbnModGhpcy5zdXBwb3NpdGlvbnMsIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc01hdGNoKSB7XG4gICAgICBjb25zdCBjb25zZXF1ZW50TWF0Y2hlcyA9IG1hdGNoQ29uc2VxdWVudCh0aGlzLmNvbnNlcXVlbnQsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudE5hdGNoZXMgPSBjb25zZXF1ZW50TWF0Y2hlczsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnROYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHRoaXMuc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uSlNPTiA9IHN1cHBvc2l0aW9uLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb25KU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbnNlcXVlbnRKU09OID0gdGhpcy5jb25zZXF1ZW50LnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gdGhpcy5zdWJzdGl0dXRpb25zLm1hcCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25KU09OID0gc3Vic3RpdHV0aW9uLnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3Vic3RpdHV0aW9uSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsb2NhbENvbnRleHRKU09OID0gdGhpcy5maWxlQ29udGV4dC50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnNlcXVlbnQgPSBjb25zZXF1ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbG9jYWxDb250ZXh0SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBjb25zZXF1ZW50LFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoQ2xhc3MsIGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHN1YnN0aXR1dGlvbnMgfSA9IGpzb247XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLm1hcCgoc3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnNlcXVlbnRKU09OID0gY29uc2VxdWVudDsgIC8vL1xuXG4gICAganNvbiA9IGNvbnNlcXVlbnRKU09OOyAgLy8vXG5cbiAgICBjb25zZXF1ZW50ID0gQ29uc2VxdWVudC5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uczsgIC8vL1xuXG4gICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLm1hcCgoc3Vic3RpdHV0aW9uSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHN1YnN0aXR1dGlvbkpTT04sICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbnRTdWJzdGl0dXRpb25zQW5kRmlsZUNvbnRleHQoQ2xhc3MsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCkgeyByZXR1cm4gbmV3IENsYXNzKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCk7IH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBtZXRhcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCkge1xuICBzdXBwb3NpdGlvbnMgPSByZXZlcnNlKHN1cHBvc2l0aW9ucyk7IC8vL1xuXG4gIG1ldGFwcm9vZlN0ZXBzID0gcmV2ZXJzZShtZXRhcHJvb2ZTdGVwcyk7IC8vL1xuXG4gIGNvbnN0IHN1cHBvc2l0aW9uc01hdGNoID0gY29ycmVsYXRlKHN1cHBvc2l0aW9ucywgbWV0YXByb29mU3RlcHMsIChzdXBwb3NpdGlvbiwgbWV0YXByb29mU3RlcCkgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uTWF0Y2hlcyA9IG1hdGNoU3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIG1ldGFwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIG1ldGFwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IG1hdGNoZXNTdXBwb3NpdGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGFTdWJwcm9vZk5vZGUgPSBtZXRhcHJvb2ZTdGVwLmdldFN1YnByb29mTm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gbWV0YXByb29mU3RlcC5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKG1ldGFTdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbk1hdGNoZXNTdWJwcm9vZk5vZGUgPSBzdXBwb3NpdGlvbi5tYXRjaFN1YnByb29mTm9kZShtZXRhU3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcblxuICAgIG1hdGNoZXNTdXBwb3NpdGlvbiAtIHN1cHBvc2l0aW9uTWF0Y2hlc1N1YnByb29mTm9kZTsgLy8vXG4gIH1cblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uTWF0Y2hlc1N0YXRlbWVudE5vZGUgPSBzdXBwb3NpdGlvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBtYXRjaGVzU3VwcG9zaXRpb24gLSBzdXBwb3NpdGlvbk1hdGNoZXNTdGF0ZW1lbnROb2RlOyAvLy9cbiAgfVxuXG4gIHJldHVybiBtYXRjaGVzU3VwcG9zaXRpb247XG59XG5cbmZ1bmN0aW9uIG1hdGNoQ29uc2VxdWVudChjb25zZXF1ZW50LCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSB7XG4gIGNvbnN0IGNvbnNlcXVlbnRNYXRjaGVzU3RhdGVtZW50Tm9kZSA9IGNvbnNlcXVlbnQubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpLFxuICAgICAgICBjb25zZXF1ZW50TWF0Y2hlcyA9IGNvbnNlcXVlbnRNYXRjaGVzU3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgcmV0dXJuIGNvbnNlcXVlbnRNYXRjaGVzO1xufVxuIl0sIm5hbWVzIjpbIk1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibGFiZWxzIiwic3VwcG9zaXRpb25zIiwiY29uc2VxdWVudCIsInN1YnN0aXR1dGlvbnMiLCJmaWxlQ29udGV4dCIsImdldExhYmVscyIsImdldFN1cHBvc2l0aW9ucyIsImdldENvbnNlcXVlbnQiLCJnZXRTdWJzdGl0dXRpb25zIiwiZ2V0RmlsZUNvbnRleHQiLCJtYXRjaFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnROYXRjaGVzIiwibWV0YXByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic3VwcG9zaXRpb25zTWF0Y2giLCJtYXRjaFN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbnRNYXRjaGVzIiwibWF0Y2hDb25zZXF1ZW50IiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwic29tZSIsImxhYmVsIiwibGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsInRvSlNPTiIsInRva2VucyIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbkpTT04iLCJjb25zZXF1ZW50SlNPTiIsInN1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uSlNPTiIsImxvY2FsQ29udGV4dEpTT04iLCJqc29uIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsIkNsYXNzIiwiTGFiZWwiLCJTdXBwb3NpdGlvbiIsIkNvbnNlcXVlbnQiLCJzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVudFN1YnN0aXR1dGlvbnNBbmRGaWxlQ29udGV4dCIsInJldmVyc2UiLCJjb3JyZWxhdGUiLCJtZXRhcHJvb2ZTdGVwIiwic3VwcG9zaXRpb25NYXRjaGVzIiwibWF0Y2hTdXBwb3NpdGlvbiIsIm1hdGNoZXNTdXBwb3NpdGlvbiIsIm1ldGFTdWJwcm9vZk5vZGUiLCJnZXRTdWJwcm9vZk5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwic3VwcG9zaXRpb25NYXRjaGVzU3VicHJvb2ZOb2RlIiwibWF0Y2hTdWJwcm9vZk5vZGUiLCJzdXBwb3NpdGlvbk1hdGNoZXNTdGF0ZW1lbnROb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwiY29uc2VxdWVudE1hdGNoZXNTdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs0REFQSDtpRUFDSztrRUFDQzsrRUFDeUI7cUJBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBQSxBQUFNQSxxQ0FBRCxBQUFMO2FBQU1BLHFCQUNQQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsVUFBVSxFQUFFQyxhQUFhLEVBQUVDLFdBQVc7Z0NBRHJETDtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtRQUNyQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7O2tCQU5GTDs7WUFTbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsTUFBTTtZQUNwQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsWUFBWTtZQUMxQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsVUFBVTtZQUN4Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsYUFBYTtZQUMzQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsV0FBVztZQUN6Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxhQUFhLEVBQUVDLFlBQVk7Z0JBQ3hDLElBQUlDLG1CQUFtQjtnQkFFdkIsSUFBTUMsaUJBQWlCRixhQUFhRyxhQUFhLElBQzNDWixnQkFBZ0IsRUFBRSxFQUNsQmEsb0JBQW9CQyxrQkFBa0IsSUFBSSxDQUFDaEIs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