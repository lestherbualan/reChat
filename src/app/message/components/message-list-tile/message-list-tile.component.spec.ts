import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListTileComponent } from './message-list-tile.component';

describe('MessageListTileComponent', () => {
  let component: MessageListTileComponent;
  let fixture: ComponentFixture<MessageListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageListTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
