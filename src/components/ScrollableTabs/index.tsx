// components/ScrollableTabs/index.tsx
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScrollableTabsProps {
  categories: {
    id: string;
    name: string;
    tabName?: string;
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
  const debounceTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  
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

  // 通用防抖函数
  const debounce = React.useCallback((callback: () => void, delay: number) => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    
    debounceTimeoutRef.current = setTimeout(callback, delay);
  }, []);

  // 处理选项卡变更，使用防抖
  const handleTabChange = React.useCallback((id: string) => {
    debounce(() => {
      if (id !== activeTab) {
        onTabChange(id);
      }
    }, 150); // 150ms 防抖延迟
  }, [activeTab, onTabChange, debounce]);

  // 鼠标离开时清除防抖定时器
  const handleMouseLeave = React.useCallback(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
      debounceTimeoutRef.current = null;
    }
  }, []);

  // 组件卸载时清除定时器
  React.useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full text-primary">
      {/* 左侧滚动按钮 */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-background shadow-md md:hidden"
        onClick={() => scroll("left")}
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {/* 滚动容器 */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide py-2 px-4 md:px-0 justify-center"
      >
        <div 
          className="flex space-x-4 md:space-x-16"
          onMouseLeave={handleMouseLeave}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={cn(
                "whitespace-nowrap border-b-2 py-2 font-medium transition-colors cursor-pointer",
                activeTab === category.id
                  ? " border-primary text-primary"
                  : " border-transparent "
              )}
              onClick={() => handleTabChange(category.id)}
              onMouseOver={() => handleTabChange(category.id)}
            >
              <span dangerouslySetInnerHTML={{ __html: category.tabName || "" }} />
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
        aria-label="Scroll right"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}