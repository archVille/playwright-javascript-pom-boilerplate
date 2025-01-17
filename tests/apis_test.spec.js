// @ts-check
const { test, expect } = require("@playwright/test");

test('Given_Todo_Exists_When_Get_Request_Then_Returns_Todo', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data).toHaveProperty('id', 1);
    expect(data).toHaveProperty('title');
    expect(data).toHaveProperty('body');
});

test('Given_New_Todo_Data_When_Post_Request_Then_Creates_New_Todo', async ({ request }) => {
    const newTodo = {
      title: 'New todo',
      completed: false,
      userId: 1,
    };
    const response = await request.post('https://jsonplaceholder.typicode.com/todos', {
      data: newTodo,
    });
    expect(response.ok()).toBeTruthy();
    const createdTodo = await response.json();
    expect(createdTodo).toEqual(expect.objectContaining(newTodo));
  });

test('given_new_York_times_data_When_post_request_Then_create_new_tasks', async ({ request }) => {
    const user = {
      title: 'foo',
      userId: 1,
    };
    const response = await request.post('https://jsonplaceholder.typicode.com/todos', {
      data: user,
    });
    expect(response.ok()).toBeTruthy();
      const created = await response.json();
      expect(created).toHaveProperty('id');
  });
  