import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDnJX7pN2bxX10dk8dCZ8tcrZL9SUscoM9cax1hjk8XbY6A4YesCYk2Brp0Srui7ZLuQnTHqgbwvn7JUr2rJPjr1ldSQeBECCm6YlVB-i-kuFD2LpwKDOD5Q-4kAhUL3yIKRmAgJQgVyupgGFTRi2B0f-PGrJb9-dB5Kpu8XL6t8VA'
      // https://developer.spotify.com/console/get-search-item/?q=&type=&market=&limit=&offset=
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
            .pipe( map( data => data['albums'].items ));
  }

  getArtista( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map( data => data['artists'].items ));
  }
}
