var app = angular.module('myApp', []);

function mycontroller() {
    var self = this;
    self.isVisible = true;
    self.ListTodos = [];
    self.AddTodo = function() {
        var Todos = {title: self.TodoText, isDone: false}
        self.ListTodos.push(Todos);
        self.TodoText = "";
        document.querySelector("#inputTodo").focus();
    }
    self.RemoveTodo = function(x) {
        var item = self.ListTodos.indexOf(x);
        self.ListTodos.splice(item ,1);
    }
    self.Todo = function() {
        var count = 0;
        angular.forEach(self.ListTodos, function(todo) {
            count += todo.isDone ? 0:1;
        });
        return count + " To do"
    }
    self.Total = function() {
        return self.ListTodos.length + " Total.";
    }
}

app.controller('MyController', mycontroller);
