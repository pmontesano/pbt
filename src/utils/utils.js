export const getComponentsByType = (components) =>
  components.map((component, i) => {
    const componentValue = Object.keys(component)[1];

    const componentObj = {
      type: componentValue,
      id: component.id,
    };

    return componentObj;
  });

export const getComponentsById = (components) => {
  const component = getComponentsByType(components);

  console.log('component', component);
};
