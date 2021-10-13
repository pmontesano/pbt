export const getComponentsByType = (components) =>
  components.map((component, i) => {
    const componentValue = Object.keys(component)[1];

    const componentObj = {
      type: componentValue,
      id: component.id,
    };

    return componentObj;
  });

export const getComponentsById = (components, id) => {
  return components.filter((component) => {
    if (component.id === id) {
      console.log('component.type', component.type);
      return component.type;
    }
  });
};
