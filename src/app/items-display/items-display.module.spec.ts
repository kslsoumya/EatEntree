import { ItemsDisplayModule } from './items-display.module';

describe('ItemsDisplayModule', () => {
  let itemsDisplayModule: ItemsDisplayModule;

  beforeEach(() => {
    itemsDisplayModule = new ItemsDisplayModule();
  });

  it('should create an instance', () => {
    expect(itemsDisplayModule).toBeTruthy();
  });
});
