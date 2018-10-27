export const overlaprectangles = (l1, r1, l2, r2) => {
  /**
     *   l1
     *        l2
     *
     * l3
     *          l4
     *
     */

  if (l1[0] > r2[0] || r1[0] > l2[0]) {
    return false;
  }

  if (l1[1] > r2[1] || r1[1] > l2[1]) {
    return false;
  }
  return true;
};
