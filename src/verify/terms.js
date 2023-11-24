"use strict";

import verifyTerm from "../verify/term";

import { first, second } from "../utilities/array";

export default function verifyTerms(leftTermNode, rightTermNode, context, verifyAhead) {
  let termsVerified;

  const leftTermString = context.nodeAsString(leftTermNode),
        rightTermString = context.nodeAsString(rightTermNode);

  context.trace(`Verifying the '${leftTermString}' and '${rightTermString}' terms...`, leftTermNode);

  const types = [],
        leftTermVerified = verifyTerm(leftTermNode, types, context, () => {
          let verifiedAhead;

          const rightTermVerified = verifyTerm(rightTermNode, types, context, () => {
            let verifiedAhead = false;

            const firstType = first(types),
                  secondType = second(types),
                  leftType = firstType, ///
                  rightType = secondType, ///
                  leftTypeEqualToOrSubTypeOfOfSuperTypeOfRightType = leftType.isEqualToOrSubTypeOfOfSuperTypeOf(rightType);

            if (!leftTypeEqualToOrSubTypeOfOfSuperTypeOfRightType) {
              const leftTypeName = leftType.getName(),
                    rightTypeName = rightType.getName(),
                    leftTermString = context.nodeAsString(leftTermNode),
                    rightTermString = context.nodeAsString(rightTermNode);

              context.debug(`The left '${leftTermString}' term's '${leftTypeName}' type is not equal to, a sub-type of nor a super-type of the right '${rightTermString}' term's '${rightTypeName}' type.`, statementNode);
            } else {
              verifiedAhead = verifyAhead();
            }

            return verifiedAhead;
          });

          verifiedAhead = rightTermVerified;  ///

          return verifiedAhead;
        });

  if (termsVerified) {
    context.debug(`...verified the '${leftTermString}' and '${rightTermString}' terms.`, leftTermNode);
  }

  termsVerified = leftTermVerified; ///

  return termsVerified
}
