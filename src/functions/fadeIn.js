import { useSpring, animated } from "react-spring";

const FadeIn = ({ children }) => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return <animated.div style={props}>{children}</animated.div>;
};
export default FadeIn;
