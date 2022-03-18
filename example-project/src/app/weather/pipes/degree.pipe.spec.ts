import { DegreePipe } from './degree.pipe';

describe('DegreePipe', () => {
  let pipe: DegreePipe;

  beforeEach(() => {
    pipe = new DegreePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it("should transform tempreture to degree celsius", () => {
    expect(pipe.transform(22.33)).toEqual("22.33 °C");
  });

  it("should return an empty string when tempreture is undefined", () => {
    expect(pipe.transform(undefined)).toEqual("");
  })
});
