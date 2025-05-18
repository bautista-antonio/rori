import Image from "next/image";
import breeSerif from "@/fonts/bree-serif";

import settingsIconUrl from "@/icons/settings-icon.svg?url";
import { FC } from "react";

interface ActionBarProps {
  showSettings?: boolean;
}

/**
 * A header component for the application.
 * It contains the app name and a settings button.
 */

const ActionBar: FC<ActionBarProps> = ({ showSettings = false }) => {
  // Determine the alignment of the content based on the presence of the settings button
  const justifyContent = showSettings ? "justify-between" : "justify-center";

  return (
    <header
      className={`w-full flex ${justifyContent} items-center py-3 px-4 text-charcoal`}
    >
      <h3 className={`text-xl ${breeSerif.className}`}>Rori</h3>

      {/* To render settings button*/}
      {showSettings && (
        <button type="button" aria-label="Settings">
          <Image src={settingsIconUrl} alt="Settings" width={24} height={24} />
        </button>
      )}
    </header>
  );
};

export default ActionBar;
