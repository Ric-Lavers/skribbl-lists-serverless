export function makeUserVotes(budgetItems, user_id) {
  function count(arr) {
    return arr.reduce((a, str) => (str === user_id.toString() ? ++a : a), 0);
  }
  let _upd = 0;
  let _dissd = 0;

  const items = budgetItems
    .map(({ _id, score: { upd, dissd } }) => {
      const result = {
        _id,
        total: 0,
        upd: count(upd),
        dissd: count(dissd),
      };
      result.total = result.upd - result.dissd;
      _upd = _upd + result.upd;
      _dissd = _dissd + result.dissd;

      return result;
    })
    .filter(({ dissd, upd }) => dissd !== 0 || upd !== 0);

  return {
    items,
    upd: _upd,
    dissd: _dissd,
  };
}
