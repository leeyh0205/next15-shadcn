import { icons, type LucideProps } from "lucide-react";

export type IconNameType = keyof typeof icons;

export type ParameterizedIconProps = LucideProps & {
  name: IconNameType;
};

export const ParameterizedIcon = ({
  name,
  ...props
}: ParameterizedIconProps) => {
  const LucideIcon = icons[name];
  return <LucideIcon {...props} />;
};
