import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Noticia } from "../model/noticias";

@Injectable()
export class ViagemService{
    constructor(private http: HttpClient) {}

    getViagem() : Observable<Noticia[]>{
        return this.http.get<Noticia[]>(
            `http://www.mocky.io/v2/5c61e4fe3000004900019547`);
    }


}