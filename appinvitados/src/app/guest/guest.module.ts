import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ListComponent } from './list/list.component';
import { GuestService } from './service/guest.service';
import { CreateComponent } from './create/create.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [ListComponent, CreateComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    GuestService
  ],
  entryComponents: [
    CreateComponent,
  ],
})
export class GuestModule { }
