/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { PostsApi } from "../Object/posts";
const postsApi = new PostsApi();
// 1
When("user sends a request to posts to count the number of posts", () => {
    postsApi.getAllPosts();
});

Then("verify the number are equal {int}", (expectedCount: number) => {
    postsApi.verifyPostCount(expectedCount);
});

// 2
When("user sends a request to posts with ID = {int}", (id: number) => {
    postsApi.getPostById(id);
});

Then("verify information is accurate with ID = {int}", (id: number) => {
    postsApi.verifyInfomation(id);
});

// 3
When("user sends a request to add more posts with ID = {int}", (id: number) => {
    postsApi.createPost({ userId: 1, id: id, title: "New Post", body: "This is a new post." });
});

Then("verify new information is accurate with ID = {int}", (id: number) => {
    postsApi.verifyPostCreated({ userId: 1, id: id, title: "New Post", body: "This is a new post." });
});

//4
When("user sends a request to delete posts with ID = {int}", (id: number) => {
    postsApi.deletePost(id);
});

Then("verify new information is accurate with ID = {int} is deleted", (id: number) => {
    // Since JSONPlaceholder doesn't actually delete the post, we can only verify the response status
    expect(postsApi.response.status).to.eq(200);
});