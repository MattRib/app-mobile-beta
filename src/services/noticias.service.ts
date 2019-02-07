import { Injectable } from "@angular/core";
import { Noticia } from "../model/noticias";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class NoticiaService{

    constructor(private http: HttpClient) {}

        getNoticias() : Observable<Noticia[]>{
            return this.http.get<Noticia[]>(
                `http://www.mocky.io/v2/5c5c84cc32000053002204e8`);

        }
} 