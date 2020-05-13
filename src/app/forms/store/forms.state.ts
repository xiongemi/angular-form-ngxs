import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

import { initFormStateModel } from '../models/form-state-model-init.const';

@State({
  name: 'forms',
  defaults: initFormStateModel
})
@Injectable()
export class FormsState {}
