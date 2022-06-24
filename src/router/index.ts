import ConfirmBox from '../components/ConfirmBox.svelte';
import Counter from '../components/Counter.svelte';
import DoubleCounter from '../components/DoubleCounter.svelte';
import HelloWorld from '../components/HelloWorld.svelte';
import TodoList from '../components/TodoList.svelte';
import RandomNumber from '../components/RandomNumber.svelte';
import NotFound from '../views/NotFound.svelte';

const routes = [
  {
    name: '/',
    component: HelloWorld
  },
  {
    name: 'home',
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
    name: 'double',
    component: DoubleCounter
  },
  {
    name: 'random',
    component: RandomNumber
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
