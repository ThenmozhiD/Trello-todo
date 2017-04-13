import {Task} from './task';

describe('TaskCard', () => {
  it('should create an instance', () => {
    expect(new Task()).toBeTruthy();
  });

  it('should create an instance with default values', () => {
    let taskCard = new Task({
      title: "Creating App";
      description: "Create a Personal task manager";
      comments: ["Learn Angular CLI", "Learn Typescript", "Create components","Done"]
    });

    expect(taskCard.title).toEqual('Creating App');
    expect(taskCard.description).toEqual('Create a Personal task manager');
    expect(taskCard.comments).toEqual(["Learn Angular CLI", "Learn Typescript", "Create components","Done"]);

  });
});


