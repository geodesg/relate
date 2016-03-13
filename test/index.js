import expect from 'expect';

import Relate, {
  dataConnect,
  rootDataConnect,
  relateReducer,
  actionTypes,
  mutation,
  mergeFragments
} from '../lib';

describe('Relate', () => {
  it('Exposes public interface', () => {
    expect(Relate).toBeAn(Object);
    expect(Relate).toEqual({
      dataConnect,
      rootDataConnect,
      relateReducer,
      actionTypes,
      mutation,
      mergeFragments
    });

    expect(dataConnect).toBeA(Function);
    expect(rootDataConnect).toBeA(Function);
    expect(relateReducer).toBeA(Function);
    expect(actionTypes).toBeA(Object);
    expect(mutation).toBeA(Function);
    expect(mergeFragments).toBeA(Function);
  });
});
