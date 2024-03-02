import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class OpenAiService {
    history :any[]
    url: string | undefined
    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json"
        }),
    };
    constructor(private http: HttpClient) {
        // TODO Need to change hardcoded value
        this.url = "http://localhost:5000";
        this.history = []
    }

    setHistort(history: any[]) {
        this.history = history
    }

    makeRequest(input = ""): Promise<any> {
        let requetBody = { history: this.history, input: input }
        return this.http.post(`${this.url}/generate_response`, requetBody, { 'headers': this.httpOptions.headers }).toPromise();

    }

}
