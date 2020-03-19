import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../reviews.interface';
import { PHReviewsService } from '../services/reviews.service'

@Component({
  selector: 'ph-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss']
})
export class PHReviewsList implements OnInit
{
  @Input() msg!: string;
  public reviewsList: Review[];

  /** Inyectamos el servicio para obtener las reviews */
  constructor(private service: PHReviewsService)
  {
    this.reviewsList = Array();
  }

  ngOnInit()
  {
    this.getReviews();
  }

  /**
   * Obtiene las reviews 
   * @return review[] Listado de reviews
   */
  getReviews(): void
  {
    this.reviewsList = Array();
    // Llamamos al service para obtener las reviews
    this.service.getReviews()
      .subscribe((data: any) => {
        if(typeof(data.reviews) !== "undefined")
        {
          const reviews = data.reviews
          let id_review = 0;
        
          reviews.forEach((review: Review) => {    
            review.id_review = id_review;
            this.reviewsList.push( review );
            id_review++;
          });
        }
    });
    
  }

}
