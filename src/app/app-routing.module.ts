import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const SPR = false;

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: SPR ? 'enabled' : 'disabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
