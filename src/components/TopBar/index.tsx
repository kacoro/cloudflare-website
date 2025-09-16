import LocaleSwitcher from "@/components/LocaleSwitcher"

export default function Topbar() {
  return (
    <>
      <div className="w-full bg-primary text-white text-xs md:text-base">
        <LocaleSwitcher />
      </div>
    </>
  );
}