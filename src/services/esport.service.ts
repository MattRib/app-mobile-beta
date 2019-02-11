import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Noticia } from "../model/noticias";

@Injectable()
export class EsportService{
    constructor(private http: HttpClient) {}

    getEsport() : Observable<Noticia[]>{
        return this.http.get<Noticia[]>(
            `http://www.mocky.io/v2/5c61ec0d3000006200019565`);
    }
}