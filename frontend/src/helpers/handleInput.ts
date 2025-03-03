const handleInput = (
  value: string,
  setter: (value: string) => void,
  parentSetter: (value: number) => void,
  min: number,
  max: number,
) => {
  setter(value);

  if (value === "") return;

  const numValue = parseInt(value, 10);

  if (isNaN(numValue)) return;

  const clampedValue = Math.min(Math.max(numValue, min), max);
  parentSetter(clampedValue);
  setter(clampedValue.toString())
};

export default handleInput