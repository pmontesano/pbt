export const getComponentsByType = (components) =>
  components.map((component, i) => {
    const componentValue = Object.keys(component)[1];

    const componentObj = {
      type: componentValue,
      id: component.id,
      ...component,
    };

    return componentObj;
  });
