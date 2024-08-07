"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ARGUMENT_RULE_NAME: function() {
        return ARGUMENT_RULE_NAME;
    },
    CONSTRUCTOR_DECLARATION_RULE_NAME: function() {
        return CONSTRUCTOR_DECLARATION_RULE_NAME;
    },
    LABEL_RULE_NAME: function() {
        return LABEL_RULE_NAME;
    },
    METASTATEMENT_RULE_NAME: function() {
        return METASTATEMENT_RULE_NAME;
    },
    METAVARIABLE_RULE_NAME: function() {
        return METAVARIABLE_RULE_NAME;
    },
    META_ARGUMENT_RULE_NAME: function() {
        return META_ARGUMENT_RULE_NAME;
    },
    QUALIFIED_METASTATEMENT_RULE_NAME: function() {
        return QUALIFIED_METASTATEMENT_RULE_NAME;
    },
    QUALIFIED_STATEMENT_RULE_NAME: function() {
        return QUALIFIED_STATEMENT_RULE_NAME;
    },
    RULE_SUBPROOF_RULE_NAME: function() {
        return RULE_SUBPROOF_RULE_NAME;
    },
    STATEMENT_RULE_NAME: function() {
        return STATEMENT_RULE_NAME;
    },
    SUBPROOF_RULE_NAME: function() {
        return SUBPROOF_RULE_NAME;
    },
    TERM_RULE_NAME: function() {
        return TERM_RULE_NAME;
    },
    TYPE_RULE_NAME: function() {
        return TYPE_RULE_NAME;
    },
    UNQUALIFIED_METASTATEMENT_RULE_NAME: function() {
        return UNQUALIFIED_METASTATEMENT_RULE_NAME;
    },
    UNQUALIFIED_STATEMENT_RULE_NAME: function() {
        return UNQUALIFIED_STATEMENT_RULE_NAME;
    },
    VARIABLE_DECLARATION_RULE_NAME: function() {
        return VARIABLE_DECLARATION_RULE_NAME;
    },
    VARIABLE_RULE_NAME: function() {
        return VARIABLE_RULE_NAME;
    }
});
var TERM_RULE_NAME = "term";
var TYPE_RULE_NAME = "type";
var LABEL_RULE_NAME = "label";
var VARIABLE_RULE_NAME = "variable";
var ARGUMENT_RULE_NAME = "argument";
var SUBPROOF_RULE_NAME = "subproof";
var STATEMENT_RULE_NAME = "statement";
var METAVARIABLE_RULE_NAME = "metavariable";
var METASTATEMENT_RULE_NAME = "metastatement";
var RULE_SUBPROOF_RULE_NAME = "ruleSubproof";
var META_ARGUMENT_RULE_NAME = "metaArgument";
var QUALIFIED_STATEMENT_RULE_NAME = "qualifiedStatement";
var VARIABLE_DECLARATION_RULE_NAME = "variableDeclaration";
var UNQUALIFIED_STATEMENT_RULE_NAME = "unqualifiedStatement";
var CONSTRUCTOR_DECLARATION_RULE_NAME = "constructorDeclaration";
var QUALIFIED_METASTATEMENT_RULE_NAME = "qualifiedMetastatement";
var UNQUALIFIED_METASTATEMENT_RULE_NAME = "unqualifiedMetastatement";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlTmFtZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBURVJNX1JVTEVfTkFNRSA9IFwidGVybVwiO1xuZXhwb3J0IGNvbnN0IFRZUEVfUlVMRV9OQU1FID0gXCJ0eXBlXCI7XG5leHBvcnQgY29uc3QgTEFCRUxfUlVMRV9OQU1FID0gXCJsYWJlbFwiO1xuZXhwb3J0IGNvbnN0IFZBUklBQkxFX1JVTEVfTkFNRSA9IFwidmFyaWFibGVcIjtcbmV4cG9ydCBjb25zdCBBUkdVTUVOVF9SVUxFX05BTUUgPSBcImFyZ3VtZW50XCI7XG5leHBvcnQgY29uc3QgU1VCUFJPT0ZfUlVMRV9OQU1FID0gXCJzdWJwcm9vZlwiO1xuZXhwb3J0IGNvbnN0IFNUQVRFTUVOVF9SVUxFX05BTUUgPSBcInN0YXRlbWVudFwiO1xuZXhwb3J0IGNvbnN0IE1FVEFWQVJJQUJMRV9SVUxFX05BTUUgPSBcIm1ldGF2YXJpYWJsZVwiO1xuZXhwb3J0IGNvbnN0IE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FID0gXCJtZXRhc3RhdGVtZW50XCI7XG5leHBvcnQgY29uc3QgUlVMRV9TVUJQUk9PRl9SVUxFX05BTUUgPSBcInJ1bGVTdWJwcm9vZlwiO1xuZXhwb3J0IGNvbnN0IE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FID0gXCJtZXRhQXJndW1lbnRcIjtcbmV4cG9ydCBjb25zdCBRVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRSA9IFwicXVhbGlmaWVkU3RhdGVtZW50XCI7XG5leHBvcnQgY29uc3QgVkFSSUFCTEVfREVDTEFSQVRJT05fUlVMRV9OQU1FID0gXCJ2YXJpYWJsZURlY2xhcmF0aW9uXCI7XG5leHBvcnQgY29uc3QgVU5RVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRSA9IFwidW5xdWFsaWZpZWRTdGF0ZW1lbnRcIjtcbmV4cG9ydCBjb25zdCBDT05TVFJVQ1RPUl9ERUNMQVJBVElPTl9SVUxFX05BTUUgPSBcImNvbnN0cnVjdG9yRGVjbGFyYXRpb25cIjtcbmV4cG9ydCBjb25zdCBRVUFMSUZJRURfTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUgPSBcInF1YWxpZmllZE1ldGFzdGF0ZW1lbnRcIjtcbmV4cG9ydCBjb25zdCBVTlFVQUxJRklFRF9NRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSA9IFwidW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50XCI7XG4iXSwibmFtZXMiOlsiQVJHVU1FTlRfUlVMRV9OQU1FIiwiQ09OU1RSVUNUT1JfREVDTEFSQVRJT05fUlVMRV9OQU1FIiwiTEFCRUxfUlVMRV9OQU1FIiwiTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUiLCJNRVRBVkFSSUFCTEVfUlVMRV9OQU1FIiwiTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUiLCJRVUFMSUZJRURfTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUiLCJRVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRSIsIlJVTEVfU1VCUFJPT0ZfUlVMRV9OQU1FIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsIlNVQlBST09GX1JVTEVfTkFNRSIsIlRFUk1fUlVMRV9OQU1FIiwiVFlQRV9SVUxFX05BTUUiLCJVTlFVQUxJRklFRF9NRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsIlVOUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUiLCJWQVJJQUJMRV9ERUNMQVJBVElPTl9SVUxFX05BTUUiLCJWQVJJQUJMRV9SVUxFX05BTUUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU1hQSxrQkFBa0I7ZUFBbEJBOztJQVVBQyxpQ0FBaUM7ZUFBakNBOztJQVpBQyxlQUFlO2VBQWZBOztJQU1BQyx1QkFBdUI7ZUFBdkJBOztJQURBQyxzQkFBc0I7ZUFBdEJBOztJQUdBQyx1QkFBdUI7ZUFBdkJBOztJQUtBQyxpQ0FBaUM7ZUFBakNBOztJQUpBQyw2QkFBNkI7ZUFBN0JBOztJQUZBQyx1QkFBdUI7ZUFBdkJBOztJQUhBQyxtQkFBbUI7ZUFBbkJBOztJQURBQyxrQkFBa0I7ZUFBbEJBOztJQUxBQyxjQUFjO2VBQWRBOztJQUNBQyxjQUFjO2VBQWRBOztJQWVBQyxtQ0FBbUM7ZUFBbkNBOztJQUhBQywrQkFBK0I7ZUFBL0JBOztJQURBQyw4QkFBOEI7ZUFBOUJBOztJQVRBQyxrQkFBa0I7ZUFBbEJBOzs7QUFITixJQUFNTCxpQkFBaUI7QUFDdkIsSUFBTUMsaUJBQWlCO0FBQ3ZCLElBQU1WLGtCQUFrQjtBQUN4QixJQUFNYyxxQkFBcUI7QUFDM0IsSUFBTWhCLHFCQUFxQjtBQUMzQixJQUFNVSxxQkFBcUI7QUFDM0IsSUFBTUQsc0JBQXNCO0FBQzVCLElBQU1MLHlCQUF5QjtBQUMvQixJQUFNRCwwQkFBMEI7QUFDaEMsSUFBTUssMEJBQTBCO0FBQ2hDLElBQU1ILDBCQUEwQjtBQUNoQyxJQUFNRSxnQ0FBZ0M7QUFDdEMsSUFBTVEsaUNBQWlDO0FBQ3ZDLElBQU1ELGtDQUFrQztBQUN4QyxJQUFNYixvQ0FBb0M7QUFDMUMsSUFBTUssb0NBQW9DO0FBQzFDLElBQU1PLHNDQUFzQyJ9