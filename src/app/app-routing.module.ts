import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestPageComponent } from './test-page/test-page.component';
import { TestPageTwoComponent } from './test-page-two/test-page-two.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    // children: [],
    redirectTo: 'test-page',
    pathMatch: 'full',
  },
  {
    path: 'test-page',
    component: TestPageComponent
  },
  {
    path: 'test-page-two',
    component: TestPageTwoComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
