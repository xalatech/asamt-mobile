import Reactotron, {
  overlay,
  networking,
  asyncStorage,
  openInEditor,
  trackGlobalErrors,
} from 'reactotron-react-native';

Reactotron
  .configure({
    name: 'Asamt',
  })
  .use(overlay())
  .use(networking())
  .use(asyncStorage())
  .use(openInEditor())
  .use(trackGlobalErrors())
  .connect();

console.tron = Reactotron;
