import { AdminService } from './../../../../services/admin.service';
import { TranslateService } from '@ngx-translate/core';
import { Box } from './../../../../model/Box';
import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-admin-lookup-box',
  templateUrl: './admin-lookup-box.component.html',
  styleUrls: ['./admin-lookup-box.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
    ]
})
export class AdminLookupBoxComponent implements OnInit {

  @Input() boxes: Array<Box>;
  deletedBoxes = new Array<Box>();

  message = '';
  alertType = '';
  serverIsProcessing = false;
  showAlert = false;
  alert = new Subject<string>();
  numberOfUnderEditBoxes = 0;

  constructor(private translate: TranslateService, private adminService: AdminService) { }

  ngOnInit() {
  }

  submitAllBoxes() {
  this.serverIsProcessing = true;
  this.showAlert = false;
  this.adminService.processBoxes(this.boxes, this.deletedBoxes).subscribe(
    next => {
        if (next && next.boxes) {
          this.boxes = new Array<Box>();
          for (const c of next.boxes) {
            this.boxes.push(Box.fromHttp(c));
            }
          this.translate.get('MESSAGES.PROCESSED_SUCCESSFULLY').subscribe((message: string) => {
          this.message = message;
          this.serverIsProcessing = false;
          this.alert.next(message);
          this.alertType = 'success';
        });
        }
    },
    error => {
        this.translate.get('MESSAGES.AN_ERROR_HAPPENED').subscribe((message: string) => {
        this.message = message + ' ' + error.message;
        this.serverIsProcessing = false;
        this.alert.next(message);
        this.alertType = 'danger';
      });
    }
  );
  }

  addRow() {
    const newBox = new Box();
    newBox.markedAsEditingNow = true;
    newBox.tempEditingBox = new Box();
    this.boxes.push(newBox);
    this.numberOfUnderEditBoxes++;
  }

  applyEditedBox(editedBox: Box){
    if (this.isValidBox(editedBox.tempEditingBox)){
      editedBox.clone(editedBox.tempEditingBox);
      editedBox.markedAsEditingNow = false;
      this.numberOfUnderEditBoxes--;
    }
  }

  editBox(editedBox: Box) {
    editedBox.markedAsEditingNow = true;
    editedBox.tempEditingBox.clone(editedBox);
    this.numberOfUnderEditBoxes++;
  }

  deleteBox(deletedBox: Box) {
    this.translate.get('MESSAGES.CONFIRM_DELETE_ITEM').subscribe((message: string) => {
      if (confirm(message)) {
        const index: number = this.boxes.indexOf(deletedBox);
        if (index !== -1) {
            this.boxes.splice(index, 1);
            this.deletedBoxes.push(deletedBox);
            this.numberOfUnderEditBoxes--;
          }
        }
  });
  }

  isValidBox(checkedBox: Box): boolean{
    if (checkedBox && checkedBox.boxName && checkedBox.longitude && checkedBox.latitude && checkedBox.streetName) {
      return true;
    }
    return false;
  }
}
