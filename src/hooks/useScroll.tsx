import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  controls.start(view ? 'show' : 'hidden');
  return [element, controls];
};
