const handleInput = (
  value: string,
  setter: (value: string) => void,
  parentSetter: (value: number) => void
) => {
  setter(value);

  if (value === "") return;

  const numValue = parseInt(value, 10);

  if (isNaN(numValue)) return;

  const clampedValue = Math.min(Math.max(numValue, 1), 30);
  parentSetter(clampedValue);
};

export default handleInput