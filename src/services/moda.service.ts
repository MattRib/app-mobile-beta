import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Noticia } from "../model/noticias";

@Injectable()
export class ModaService{
    constructor(private http: HttpClient) {}

    getModa() : Observable<Noticia[]>{
        return this.http.get<Noticia[]>(
            `http://www.mocky.io/v2/5c61eae43000000e00019561`);
    }
}