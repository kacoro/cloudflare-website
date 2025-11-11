// components/ScrollableTabs/index.tsx
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScrollableTabsProps {
  categories: {
    id: string;
    name: string;
    count?: number;
  }[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export function ScrollableTabs({
  categories,
  activeTab,
  onTabChange,
}: ScrollableTabsProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current: container } = scrollContainerRef;
      const scrollAmount = container.offsetWidth * 0.8;
      
      container.scrollTo({
        left: container.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* 左侧滚动按钮 */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-background shadow-md md:hidden"
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {/* 滚动容器 */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide py-2 px-4 md:px-0 md:justify-center"
      >
        <div className="flex space-x-4 md:space-x-16">
          {categories.map((category) => (
            <button
              key={category.id}
              className={cn(
                "whitespace-nowrap border-b-2 py-2 font-medium transition-colors cursor-pointer",
                activeTab === category.id
                  ? " border-primary text-primary"
                  : " border-transparent "
              )}
              onClick={() => onTabChange(category.id)}
            >
              {category.name}
              {category.count !== undefined && (
                <span className="ml-2 rounded-full bg-background/20 px-2 py-0.5 text-xs">
                  {category.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 右侧滚动按钮 */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-background shadow-md md:hidden"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}