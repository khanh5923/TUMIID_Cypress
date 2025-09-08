/// <reference types="cypress" />
import { ApiClient } from "../../support/apiClient/api";

export class PostsApi extends ApiClient {
    baseUrl: string;
    response!: Cypress.Response<any>;

    constructor() {
        super();
        this.baseUrl = "https://jsonplaceholder.typicode.com";
    }

    getAllPosts() {
        return this.Get(`${this.baseUrl}/posts`).then((resp) => {
            this.response = resp;
            expect(resp.status).to.eq(200);
        });
    }

    verifyPostCount(expectedCount: number) {
        expect(this.response.body).to.have.length(expectedCount);
    }

    getPostById(id: number) {
        return this.Get(`${this.baseUrl}/posts/${id}`).then((resp) => {
            this.response = resp;
            expect(resp.status).to.eq(200);
        });
    }

    verifyInfomation(expectedCount: number) {
        expect(this.response.body.id).to.equal(expectedCount);
    }

    createPost(body: { userId: number; id: number; title: string; body: string }) {
        return this.Post(`${this.baseUrl}/posts`, body).then((resp) => {
            this.response = resp;
            expect(resp.status).to.eq(201);
        });
    }

    verifyPostCreated(expectedBody: { userId: number; id: number; title: string; body: string }) {
        expect(this.response.body).to.deep.equal(expectedBody);
    }

    deletePost(id: number) {
        return this.Delete(`${this.baseUrl}/posts/${id}`).then((resp) => {
            this.response = resp;
        });
    }

    verifyPostDeleted(id: number) {
        expect(this.response.status).to.eq(200);
    }
}


