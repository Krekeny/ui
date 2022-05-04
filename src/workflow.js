import { createApp as createVueApp, defineAsyncComponent } from "vue";

export const createApp = (InitialComponent) => {
  let app = createVueApp(InitialComponent);

  app = registerGlobalComponents(app);

  return app;
};

export const registerGlobalComponents = (app) => {
  const globalComponentsPaths = import.meta.glob(
    "/src/components/global/**/*.vue"
  );

  Object.entries(globalComponentsPaths).forEach(([path, module]) => {
    const componentName = path
      .split("/")
      .pop()
      .replace(/\.vue$/, "");

    app.component(componentName, defineAsyncComponent(module));
  });

  return app;
};
