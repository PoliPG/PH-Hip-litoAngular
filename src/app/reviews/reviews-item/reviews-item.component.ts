import { Component, Input, OnChanges } from '@angular/core';
import { Review } from '../reviews.interface';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'ph-reviews-item',
    templateUrl: './reviews-item.component.html',
    styleUrls: ['./reviews-item.component.scss']
})
export class PHReviewItem
{
  @Input() public review: Review;

  /** Gestiona si se puede volver a votar */
  public voted: boolean;

  /** Fecha en formato string */
  public dateFormatted: string;

  /** Icono FontAwesome */
  public faThumbsUp = faThumbsUp;
  public faStar = faStar;
  public farStar = farStar;

  constructor()
  {
    this.voted = false;
  }

  /**
   * Al hacer click en el botón de es util suma un nuevo dato
   * @param reviewSelected 
   */
  esUtil(reviewSelected: Review): void
  {
    if(this.voted === false)
    {
      this.voted = true;
      this.review.useful_count++;
    }
  }

}