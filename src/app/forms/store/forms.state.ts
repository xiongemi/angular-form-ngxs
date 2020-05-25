import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

import { initFormsStateModel } from '../models/forms-state-model-init.const';

@State({
  name: 'forms',
  defaults: initFormsStateModel
})
@Injectable()
export class FormsState {}
