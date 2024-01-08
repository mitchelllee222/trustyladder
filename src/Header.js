import { Image, useTheme } from "@aws-amplify/ui-react";

export function Header() {
  const { tokens } = useTheme();

  return (
    <Image
      alt="Trusty Ladder Logo"
      src="/NamedLogo.svg" // Update the src attribute to point to your image
      padding={tokens.space.medium}
    />
  );
}
