import { QuotationMarkPipe } from './quotation-mark.pipe';

describe('QuotationMarkPipe', () => {
  it('create an instance', () => {
    const pipe = new QuotationMarkPipe();
    expect(pipe).toBeTruthy();
  });

  it('replaces all &quot; with "',()=>{
    const pipe = new QuotationMarkPipe();

    expect(pipe.transform('&quot;hello world&quot;')).toEqual('"hello world"')
  })
});
