const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/my-test-theme/src/index.js</pre>
    </>
  );
};

export default {
  name: "my-test-theme",
  roots: {
    my_theme: Root
  },
  state: {
    my_theme: {}
  },
  actions: {
    my_theme: {}
  }
};
