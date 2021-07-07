import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';


const modulesToAdd = [MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatTabsModule]; 

@NgModule({
  declarations: [],
  imports: [
    modulesToAdd
  ],
  exports:[modulesToAdd]
})
export class MaterialModule { }
