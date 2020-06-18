/*
 *	Return the largest value of any a & b < k in S (where a < b).
 *
 *	n: Set S is a sequence of distinct integers from 1 to n (i.e., {1, 2, ..., n}).
 *	k: An integer.
 *
 *   & is a bitwise operator in which if (a & b), it will return 1 if both a and b are same and 0 if they are different
 */

function getMaxLessThanK(n, k) {
  let current = -1;
  let maximum = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      current = i & j;
      if (current < k && maximum < current) {
        maximum = current;
      }
    }
  }
  return maximum;
}
