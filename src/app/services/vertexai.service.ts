import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class VertexAiService {
    url: string | undefined
    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json"
        }),
    };
    constructor(private http: HttpClient) {
        // TODO Need to change hardcoded value
        this.url = "http://localhost:5001";
    }

    makeRequest(input = "Topic is Human's causing demise of humanity"): Promise<any> {
        let requetBody = {
            "prompt":input
        }
        return this.http.post(`${this.url}/chat_response`, requetBody, { 'headers': this.httpOptions.headers }).toPromise();

    }
    startSession() {
        let requetBody = {
        }
        return this.http.post(`${this.url}/start_session`, requetBody, { 'headers': this.httpOptions.headers }).toPromise();

    }

}
