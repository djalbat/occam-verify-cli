"use strict";

import { getMetaTypes } from "../metaTypes";

export function contextFromString(string) {
  const context = {
    nodeAsString: () => string,
    getMetaTypes: () => getMetaTypes(),
    findMetaTypeByMetaTypeName(metaTypeName) {
      const metaTypes = this.getMetaTypes(),
            metaType = metaTypes.find((metaType) => {
              const metaTypeComparesToMetaTypeName = metaType.compareMetaTypeName(metaTypeName);

              if (metaTypeComparesToMetaTypeName) {
                return true;
              }
            }) || null;

      return metaType;
    }
  };

  return context;
}
