import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

PUBLIC_KEY = '24fdd74034fc84a2f5300ca28d60bb1e';
HASH ='d6c80d006025262b994f1de870961894';
URL_API = `https:gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  constructor(private http: HttpClient) { }
  getAllCharacters(): Observable<any>{
    return this.http.get<any>(this.URL_API).pipe(map((data: any)=> data.data.results))
  }
}
