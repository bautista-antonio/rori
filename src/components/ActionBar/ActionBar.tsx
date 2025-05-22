import Image from "next/image";
import { FC } from "react";

import breeSerif from "@/fonts/bree-serif";
import SettingsIcon from "@/icons/settings-icon.svg";

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
      <h3 className={`text-lg ${breeSerif.className}`}>Rori</h3>

      {/* To render settings button*/}
      {showSettings && (
        <button type="button" aria-label="Settings">
          <SettingsIcon />
        </button>
      )}
    </header>
  );
};

export default ActionBar;
