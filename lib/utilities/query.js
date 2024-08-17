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
    nodeQuery: function() {
        return nodeQuery;
    },
    nodesQuery: function() {
        return nodesQuery;
    }
});
var _occamquery = require("occam-query");
function nodeQuery(expression) {
    var query = _occamquery.Query.fromExpression(expression);
    return function(node) {
        if (node !== null) {
            var nodes = query.execute(node);
            node = nodes.shift() || null; ///
        }
        return node;
    };
}
function nodesQuery(expression) {
    var query = _occamquery.Query.fromExpression(expression);
    return function(node) {
        var nodes = null;
        if (node !== null) {
            nodes = query.execute(node);
        }
        return nodes;
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlUXVlcnkoZXhwcmVzc2lvbikge1xuICBjb25zdCBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBmdW5jdGlvbihub2RlKSB7XG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGVzID0gcXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgICAgbm9kZSA9IG5vZGVzLnNoaWZ0KCkgfHwgbnVsbDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5KGV4cHJlc3Npb24pIHtcbiAgY29uc3QgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKTtcblxuICByZXR1cm4gZnVuY3Rpb24obm9kZSkge1xuICAgIGxldCBub2RlcyA9IG51bGw7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgbm9kZXMgPSBxdWVyeS5leGVjdXRlKG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJub2RlUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiZXhwcmVzc2lvbiIsInF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIm5vZGUiLCJub2RlcyIsImV4ZWN1dGUiLCJzaGlmdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWdCQSxTQUFTO2VBQVRBOztJQWNBQyxVQUFVO2VBQVZBOzs7MEJBaEJNO0FBRWYsU0FBU0QsVUFBVUUsVUFBVTtJQUNsQyxJQUFNQyxRQUFRQyxpQkFBSyxDQUFDQyxjQUFjLENBQUNIO0lBRW5DLE9BQU8sU0FBU0ksSUFBSTtRQUNsQixJQUFJQSxTQUFTLE1BQU07WUFDakIsSUFBTUMsUUFBUUosTUFBTUssT0FBTyxDQUFDRjtZQUU1QkEsT0FBT0MsTUFBTUUsS0FBSyxNQUFNLE1BQU0sR0FBRztRQUNuQztRQUVBLE9BQU9IO0lBQ1Q7QUFDRjtBQUVPLFNBQVNMLFdBQVdDLFVBQVU7SUFDbkMsSUFBTUMsUUFBUUMsaUJBQUssQ0FBQ0MsY0FBYyxDQUFDSDtJQUVuQyxPQUFPLFNBQVNJLElBQUk7UUFDbEIsSUFBSUMsUUFBUTtRQUVaLElBQUlELFNBQVMsTUFBTTtZQUNqQkMsUUFBUUosTUFBTUssT0FBTyxDQUFDRjtRQUN4QjtRQUVBLE9BQU9DO0lBQ1Q7QUFDRiJ9