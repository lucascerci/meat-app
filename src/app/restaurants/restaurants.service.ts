import {Restaurant} from "./restaurant/restaurant.model"

import {Injectable} from "@angular/core"
import {Http} from "@angular/http"

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import {MEAT_API} from "../app.api"
import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class RestaurantsService {
		
	

	constructor(private http: Http){}

	restaurants(): Observable<Restaurant[]> {
		return this.http.get(`${MEAT_API}/restaurants1`)
		.map(response => response.json()) 
		.catch(ErrorHandler.handleError)
	}
}