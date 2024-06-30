import { useState } from "react";
import { NavButtonItem } from "./navButtonItem";

// 单词细节模块子模块
export const Section = ({
  sectionTitle,
  navBarButtonData,
  initSection,
  sectionSubComponents,
}: {
  sectionTitle: string;
  navBarButtonData: Array<{ buttonTitle: string; sectionName: string }>;
  initSection: keyof typeof sectionSubComponents;
  sectionSubComponents: object;
}) => {
  const [currentSection, setCurrentSection] =
    useState<keyof typeof sectionSubComponents>(initSection);

  const SectionComponent = sectionSubComponents[currentSection] as any;
  return (
    <div className="flex w-[850px] justify-between py-1 pb-3">
      <div className="mx-auto h-fit pt-3">{sectionTitle}</div>

      <div className="w-[90%]">
        <div className="w-full border-b">
          {navBarButtonData.map((item, index) => {
            return (
              <NavButtonItem
                key={index}
                setCurrentSection={setCurrentSection}
                currentSection={currentSection}
                buttonTitle={item.buttonTitle}
                section={item.sectionName}
              />
            );
          })}
        </div>
        <div className="px5 flex min-h-[100px] flex-col items-start gap-3 py-2 pt-5">
          <SectionComponent />
        </div>
      </div>
    </div>
  );
};
