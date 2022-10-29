"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyRelease;
    }
});
var _files = /*#__PURE__*/ _interopRequireDefault(require("../verify/files"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyRelease(name, releaseContextMap) {
    var releaseContexts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var releaseContext = releaseContextMap[name], verified = releaseContext.isVerified();
    var releaseVerified = verified; ///
    if (!releaseVerified) {
        releaseContext.debug("Verifying the '".concat(name, "' package..."));
        var dependencies = releaseContext.getDependencies(), dependencyReleasesVVerified = dependencies.everyDependency(function(dependency) {
            var _$name = dependency.getName(), releaseVerified = verifyRelease(_$name, releaseContextMap, releaseContexts);
            if (releaseVerified) {
                return true;
            }
        });
        if (dependencyReleasesVVerified) {
            var releaseContexts1 = dependencies.mapDependency(function(dependency) {
                var _$name = dependency.getName(), releaseContext = releaseContextMap[_$name];
                return releaseContext;
            }), dependencyReleaseContexts = retrieveDependencyReleaseContexts(dependencies, releaseContextMap);
            releaseContext.initialise(releaseContexts1, dependencyReleaseContexts);
            var filesVerified = (0, _files.default)(releaseContext);
            releaseVerified = filesVerified; ///
            if (releaseVerified) {
                releaseContexts1.push(releaseContext);
                releaseContext.info("Verified the '".concat(name, "' package."));
            }
        }
    }
    return releaseVerified;
}
function retrieveDependencyReleaseContexts(dependencies, releaseContextMap) {
    var dependencyReleaseContexts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    dependencies.forEachDependency(function(dependency) {
        var dependencyName = dependency.getName(), dependencyReleaseName = dependencyName, dependencyReleaseContext = releaseContextMap[dependencyReleaseName], dependencyReleaseContextsIncludesDependencyReleaseContext = dependencyReleaseContexts.includes(dependencyReleaseContext);
        if (!dependencyReleaseContextsIncludesDependencyReleaseContext) {
            var releaseContext = dependencyReleaseContext, _$dependencies = releaseContext.getDependencies();
            retrieveDependencyReleaseContexts(_$dependencies, releaseContextMap, dependencyReleaseContexts);
            dependencyReleaseContexts.push(dependencyReleaseContext);
        }
    });
    return dependencyReleaseContexts;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeUZpbGVzIGZyb20gXCIuLi92ZXJpZnkvZmlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UmVsZWFzZShuYW1lLCByZWxlYXNlQ29udGV4dE1hcCwgcmVsZWFzZUNvbnRleHRzID0gW10pIHtcbiAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtuYW1lXSxcbiAgICAgICAgdmVyaWZpZWQgPSByZWxlYXNlQ29udGV4dC5pc1ZlcmlmaWVkKClcblxuICBsZXQgcmVsZWFzZVZlcmlmaWVkID0gdmVyaWZpZWQ7IC8vL1xuXG4gIGlmICghcmVsZWFzZVZlcmlmaWVkKSB7XG4gICAgcmVsZWFzZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7bmFtZX0nIHBhY2thZ2UuLi5gKTtcblxuICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCA9IGRlcGVuZGVuY2llcy5ldmVyeURlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIHJlbGVhc2VWZXJpZmllZCA9IHZlcmlmeVJlbGVhc2UobmFtZSwgcmVsZWFzZUNvbnRleHRNYXAsIHJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICAgICAgICAgIGlmIChyZWxlYXNlVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVkKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dHMgPSBkZXBlbmRlbmNpZXMubWFwRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbbmFtZV07XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gcmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY2llcywgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgICByZWxlYXNlQ29udGV4dC5pbml0aWFsaXNlKHJlbGVhc2VDb250ZXh0cywgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICAgIGNvbnN0IGZpbGVzVmVyaWZpZWQgPSB2ZXJpZnlGaWxlcyhyZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIHJlbGVhc2VWZXJpZmllZCA9IGZpbGVzVmVyaWZpZWQ7ICAvLy9cblxuICAgICAgaWYgKHJlbGVhc2VWZXJpZmllZCkge1xuICAgICAgICByZWxlYXNlQ29udGV4dHMucHVzaChyZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgICAgcmVsZWFzZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke25hbWV9JyBwYWNrYWdlLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmNpZXMsIHJlbGVhc2VDb250ZXh0TWFwLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gW10pIHtcbiAgZGVwZW5kZW5jaWVzLmZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7XG4gICAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbZGVwZW5kZW5jeVJlbGVhc2VOYW1lXSxcbiAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzSW5jbHVkZXNEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHQgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmluY2x1ZGVzKGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCk7XG5cbiAgICBpZiAoIWRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbmNsdWRlc0RlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gICAgICByZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jaWVzLCByZWxlYXNlQ29udGV4dE1hcCwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMucHVzaChkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5UmVsZWFzZSIsIm5hbWUiLCJyZWxlYXNlQ29udGV4dE1hcCIsInJlbGVhc2VDb250ZXh0cyIsInJlbGVhc2VDb250ZXh0IiwidmVyaWZpZWQiLCJpc1ZlcmlmaWVkIiwicmVsZWFzZVZlcmlmaWVkIiwiZGVidWciLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJkZXBlbmRlbmN5UmVsZWFzZXNWVmVyaWZpZWQiLCJldmVyeURlcGVuZGVuY3kiLCJkZXBlbmRlbmN5IiwiZ2V0TmFtZSIsIm1hcERlcGVuZGVuY3kiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwicmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiaW5pdGlhbGlzZSIsImZpbGVzVmVyaWZpZWQiLCJ2ZXJpZnlGaWxlcyIsInB1c2giLCJpbmZvIiwiZm9yRWFjaERlcGVuZGVuY3kiLCJkZXBlbmRlbmN5TmFtZSIsImRlcGVuZGVuY3lSZWxlYXNlTmFtZSIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbmNsdWRlc0RlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7OzBEQUZBOzs7Ozs7QUFFVCxTQUFTQSxjQUFjQyxJQUFJLEVBQUVDLGlCQUFpQixFQUF3QjtRQUF0QkMsa0JBQUFBLGlFQUFrQixFQUFFO0lBQ2pGLElBQU1DLGlCQUFpQkYsaUJBQWlCLENBQUNELEtBQUssRUFDeENJLFdBQVdELGVBQWVFLFVBQVU7SUFFMUMsSUFBSUMsa0JBQWtCRixVQUFVLEdBQUc7SUFFbkMsSUFBSSxDQUFDRSxpQkFBaUI7UUFDcEJILGVBQWVJLEtBQUssQ0FBQyxBQUFDLGtCQUFzQixPQUFMUCxNQUFLO1FBRTVDLElBQU1RLGVBQWVMLGVBQWVNLGVBQWUsSUFDN0NDLDhCQUE4QkYsYUFBYUcsZUFBZSxDQUFDLFNBQUNDLFlBQWU7WUFDekUsSUFBTVosU0FBT1ksV0FBV0MsT0FBTyxJQUN6QlAsa0JBQWtCUCxjQUFjQyxRQUFNQyxtQkFBbUJDO1lBRS9ELElBQUlJLGlCQUFpQjtnQkFDbkIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztRQUNIO1FBRU4sSUFBSUksNkJBQTZCO1lBQy9CLElBQU1SLG1CQUFrQk0sYUFBYU0sYUFBYSxDQUFDLFNBQUNGLFlBQWU7Z0JBQzNELElBQU1aLFNBQU9ZLFdBQVdDLE9BQU8sSUFDekJWLGlCQUFpQkYsaUJBQWlCLENBQUNELE9BQUs7Z0JBRTlDLE9BQU9HO1lBQ1QsSUFDQVksNEJBQTRCQyxrQ0FBa0NSLGNBQWNQO1lBRWxGRSxlQUFlYyxVQUFVLENBQUNmLGtCQUFpQmE7WUFFM0MsSUFBTUcsZ0JBQWdCQyxJQUFBQSxjQUFXLEVBQUNoQjtZQUVsQ0csa0JBQWtCWSxlQUFnQixHQUFHO1lBRXJDLElBQUlaLGlCQUFpQjtnQkFDbkJKLGlCQUFnQmtCLElBQUksQ0FBQ2pCO2dCQUVyQkEsZUFBZWtCLElBQUksQ0FBQyxBQUFDLGlCQUFxQixPQUFMckIsTUFBSztZQUM1QyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPTTtBQUNUO0FBRUEsU0FBU1Usa0NBQWtDUixZQUFZLEVBQUVQLGlCQUFpQixFQUFrQztRQUFoQ2MsNEJBQUFBLGlFQUE0QixFQUFFO0lBQ3hHUCxhQUFhYyxpQkFBaUIsQ0FBQyxTQUFDVixZQUFlO1FBQzdDLElBQU1XLGlCQUFpQlgsV0FBV0MsT0FBTyxJQUNuQ1csd0JBQXdCRCxnQkFDeEJFLDJCQUEyQnhCLGlCQUFpQixDQUFDdUIsc0JBQXNCLEVBQ25FRSw0REFBNERYLDBCQUEwQlksUUFBUSxDQUFDRjtRQUVyRyxJQUFJLENBQUNDLDJEQUEyRDtZQUM5RCxJQUFNdkIsaUJBQWlCc0IsMEJBQ2pCakIsaUJBQWVMLGVBQWVNLGVBQWU7WUFFbkRPLGtDQUFrQ1IsZ0JBQWNQLG1CQUFtQmM7WUFFbkVBLDBCQUEwQkssSUFBSSxDQUFDSztRQUNqQyxDQUFDO0lBQ0g7SUFFQSxPQUFPVjtBQUNUIn0=