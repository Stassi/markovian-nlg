import { expect } from 'chai';
import { describe } from 'mocha';
import { lockeWandering } from './corpora';
import nounPlurals from '../src/nounPlurals';

describe('#nounPlurals', () => {
  const { corpus, nounPlurals: lockeNounPlurals } = lockeWandering;
  it('should return all noun plurals within a corpus', () => {
    expect(nounPlurals(corpus)).to.have.members(lockeNounPlurals);
  });
});
