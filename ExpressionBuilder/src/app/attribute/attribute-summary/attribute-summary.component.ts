import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-attribute-summary',
  templateUrl: './attribute-summary.component.html',
  styleUrls: ['./attribute-summary.component.css']
})
export class AttributeSummaryComponent implements OnInit {

  attribute_summary: any;
  cmdCtrlForm: FormGroup;
  @ViewChild('ccModal') public ccModal: ModalDirective;
  constructor(private formBuilder: FormBuilder) {
    this.cmdCtrlForm = this.formBuilder.group({
      id: ['', Validators.required],
      intent: ['restart', Validators.required],
      name: [''],
      description: [''],
      owner: [''],
      validValues: [''],
      ParentAttributes: [''],
      deprecated: [''],
      replacedBy: [''],
      notes: [''],
      type:['']
    });
  }
  

  ngOnInit() {
    this.attribute_summary=
      {
      "id": "58eda4b942ec9dd18d6a3dd2",
      "intent": 0,
      "name": "Rosemary",
      "description": "Shaw",
      "owner": "Dale",
      "parent_attributes": "Claudette",
      "deprecated": "Goodman",
      "replaced_by": "Daugherty",
      "notes": "Gwendolyn",
      "type": "Glenn"
    };
  }
  show(){
    this.ccModal.show();
  }
  close(){
    this.ccModal.hide();
  }
  submit(){
    this.ccModal.hide();
  }

}
