import Image from "next/image";
import breeSerif from "@/fonts/bree-serif";

import settingsIconUrl from "@/icons/settings-icon.svg?url";
import { FC } from "react";

/**
 * A header component for the application.
 * It contains the app name and a settings button.
 */

const ActionBar: FC = () => {
  return (
    <header className="w-full flex justify-between items-center py-3 px-4 text-charcoal">
      <h3 className={`text-xl ${breeSerif.className}`}>Rori</h3>
      <button type="button" aria-label="Settings">
        <Image src={settingsIconUrl} alt="Settings" width={24} height={24} />
      </button>
    </header>
  );
};

export default ActionBar;
