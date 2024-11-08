import React from "react";
import { IconComponent, IconProps } from "./icon.component";

export const HomeIconComponent: React.FC<IconProps> = ({
  fill = "white",
  ...props
}) => (
  <IconComponent {...props}>
    <path
      d="M21.1458 9.24509L15.2408 3.3401C13.4496 1.5535 10.5504 1.5535 8.75915 3.3401L2.85416 9.24509C2.30541 9.79091 1.99783 10.5336 1.99998 11.3076V19.9559C2.00182 21.0848 2.91697 21.9991 4.04584 22.0001H19.9541C21.083 21.9992 21.9981 21.0848 21.9999 19.9559V11.3076C22.0021 10.5336 21.6946 9.79091 21.1458 9.24509ZM19.4999 19.5001H15.3333V16.8484C15.3333 15.0912 13.9088 13.6667 12.1516 13.6667H11.8483C10.0911 13.6667 8.66665 15.0912 8.66665 16.8484V19.5001H4.49998V11.3076C4.50025 11.1971 4.54392 11.0911 4.62166 11.0126L10.5266 5.1076C11.3401 4.29389 12.6592 4.29373 13.4729 5.10721C13.473 5.10732 13.4732 5.10748 13.4733 5.1076L19.3783 11.0126C19.456 11.0911 19.4997 11.1971 19.5 11.3076V19.5001H19.4999Z"
      fill={fill}
    />
  </IconComponent>
);
