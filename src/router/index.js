import ConfirmBox from '../components/ConfirmBox.svelte';
import Counter from '../components/Counter.svelte';
import HelloWorld from '../components/HelloWorld.svelte';

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
  }
];

export {
  routes
};
