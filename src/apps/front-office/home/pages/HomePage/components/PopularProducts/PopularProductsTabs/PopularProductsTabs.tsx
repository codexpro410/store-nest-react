import { trans } from "@mongez/localization";
import { useEvent } from "@mongez/react-hooks";
import { popularProductsAtom } from "apps/front-office/home/atoms/popular-products-atom";
import { Product } from "apps/front-office/utils/types";
import { useState } from "react";

export type PopularProductsTabsProps = {
  children: React.ReactNode;
};

export default function PopularProductsTabs() {
  const tabs = popularProductsAtom.get("tabs");

  return (
    <div className="container py-3 px-0 flex flex-col md:flex-row items-center justify-between">
      <h3 className="font-bold text-3xl text-[#253D4E]">
        {trans("popularProducts")}
      </h3>
      <ul className="flex flex-wrap items-center gap-3 md:gap-5 text-[#253D4E]">
        <Tab tab={{ id: 0, name: "All" }} />
        {tabs.length > 0 ? (
          tabs.map(tab => <Tab key={tab.id} tab={tab} />)
        ) : (
          <li>No categories available</li>
        )}
      </ul>
    </div>
  );
}

type TabProps = {
  tab: {
    id: number;
    name: string;
    products?: Product[];
  };
};

function Tab({ tab }: TabProps) {
  const [activeTab, setIsActiveTab] = useState(
    tab.id === popularProductsAtom.get("activeTab"),
  );

  useEvent(() =>
    popularProductsAtom.onChange((value, oldValue) => {
      if (value.activeTab === tab.id) {
        setIsActiveTab(true);
      } else if (oldValue.activeTab === tab.id) {
        setIsActiveTab(false);
      }
    }),
  );

  return (
    <li
      className={`font-semibold ${activeTab ? "text-primary-default hover:-translate-y-0.5 transition duration-300" : "text-[#253D4E]"}`}
      role="button"
      onClick={() => popularProductsAtom.change("activeTab", tab.id)}>
      {tab.name}
    </li>
  );
}
