import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestOneComponent } from './myCom/test-one/test-one.component';
import { TestTwoComponent } from './myCom/test-two/test-two.component';

const routes: Routes = [
  {path: '', redirectTo:'/test1', pathMatch:'full'},
  {path: 'test1', component: TestOneComponent},
  {path: 'test2', component: TestTwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
