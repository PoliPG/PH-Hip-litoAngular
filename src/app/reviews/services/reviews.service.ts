import { Review } from '../reviews.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable} from 'rxjs';

/** An example database that the data source uses to retrieve data for the table. */
@Injectable()
export class PHReviewsService{

    private reviewList:Review[];

    constructor(private httpService: HttpClient){}

    /**
     * Obtenemos las reviews del archivo json
     *
     * @returns {Review[]}
     * @memberof PHReviewsService
     */
    getReviews(): Observable<Object>
    {
        this.reviewList = null;
        return this.httpService.get('assets/review.json');
    }

}
