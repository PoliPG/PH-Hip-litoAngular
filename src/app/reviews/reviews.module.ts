import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/** Componentes de clientes */
import { PHReviewsList } from './reviews-list/reviews-list.component';
import { PHReviewItem } from './reviews-item/reviews-item.component';

/** Servicio de clientes */
import { PHReviewsService } from './services/reviews.service';
/** Font aweseome module */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [   
    PHReviewsList,
    PHReviewItem
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  providers: [
    PHReviewsService,
  ],
  exports: [
    PHReviewsList,
    PHReviewItem
  ],

})
export class ReviewsModule { }
