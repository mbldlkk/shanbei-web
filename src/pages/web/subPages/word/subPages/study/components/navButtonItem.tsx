import { twMerge } from "tailwind-merge";

export const NavButtonItem = ({
  currentSection,
  setCurrentSection,
  buttonTitle,
  section,
}: {
  currentSection: string;
  setCurrentSection: Function;
  buttonTitle: string;
  section: string;
}) => {
  return (
    <div
      className={twMerge(
        "inline-block rounded-t-md px-2 py-1",
        currentSection === section
          ? "border border-b-0 bg-white px-0 py-0 text-[#28bea0]"
          : "",
        // : "border-b ",
      )}
    >
      <button
        className={twMerge(
          "rounded-lg px-2 py-2",
          currentSection === section
            ? "relative px-4 py-3 pb-3"
            : "rounded hover:bg-[#eeeeee]",
        )}
        onClick={() => setCurrentSection(section)}
      >
        {buttonTitle}
        <div
          className={twMerge(
            "h-2 w-full bg-white",
            currentSection === section
              ? "absolute bottom-[-4px] left-0"
              : "hidden",
          )}
        ></div>
      </button>
    </div>
  );
};
