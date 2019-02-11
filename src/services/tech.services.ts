import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { Tech } from "../model/tech";


@Injectable()
export class TechService{

    constructor(private http: HttpClient) {}

        getTech() : Observable<Tech[]>{
            return this.http.get<Tech[]>(
                `http://www.mocky.io/v2/5c5c84cc32000053002204e8`);

        }
} 