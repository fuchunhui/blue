import ConfirmBox from '../components/ConfirmBox.svelte';
import Counter from '../components/Counter.svelte';
import HelloWorld from '../components/HelloWorld.svelte';
import TodoList from '../components/TodoList.svelte';
import NotFound from '../views/NotFound.svelte';

const routes = [
  {
    name: '/',
    component: HelloWorld
  },
  {
    name: 'confirm',
    component: ConfirmBox
  },
  {
    name: 'counter',
    component: Counter
  },
  {
    name: 'todolist',
    component: TodoList
  },
  {
    name: '404',
    path: '404',
    component: NotFound
  }
];

export {
  routes
};
