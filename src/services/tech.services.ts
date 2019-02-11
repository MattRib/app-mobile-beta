import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { Tech } from "../model/tech";


@Injectable()
export class TechService{

    constructor(private http: HttpClient) {}

        getTech() : Observable<Tech[]>{
            return this.http.get<Tech[]>(
                `http://www.mocky.io/v2/5c61e84b3000006200019557`);

        }
} 