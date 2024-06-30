import { ReactNode } from "react";
import { UserDropDownMenuItem } from "./userDropDownMenuItem";

export const UserDropDownMenuSection = ({
  children,
  sectionData,
}: {
  children?: ReactNode;
  sectionData: Array<{ id: number; content: string; url: string }>;
}) => {
  return (
    <div className="border-b py-2">
      {sectionData.map((item) => {
        return (
          <UserDropDownMenuItem
            content={item.content}
            url={item.url}
            key={item.id}
          />
        );
      })}
      {children}
    </div>
  );
};
