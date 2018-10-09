const RenderBlock = ({ blocking, isFetched, children }) => {
  if (isFetched) {
    return children;
  } else {
    return blocking;
  }
};

export default RenderBlock;