import Image from "next/image";
import NavigationLink from "../Navigation/NavigationLink";

export function Products() {

    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center py-10 pb-8">
            <NavigationLink
              href="/"
              className="flex items-center py-1 space-x-3 flex-none"
            >
              <Image
                className="dark:invert"
                src="/logo.png"
                alt="Areafly Solar logo"
                width={229}
                height={43}
                priority
              />
            </NavigationLink>
            </div>
         
        <div className="grid grid-cols-3 gap-5">
            <div className="aspect-square  bg-gradient-to-br from-white to-primary p-[2px] rounded-xl  hover:shadow-primary-md bg-white overflow-hidden">
                <div className="w-full h-full  text-blue-600 font-medium bg-white rounded-xl flex items-center justify-center relative">
                    <NavigationLink href="/products/SolarInverter" className="text-center">
                        <Image className=" rounded-xl" src={'/images/products/products-1.jpg'} width={319} height={298} alt="products-1.jpg" />
                        <div className="text-primary font-medium text-base  rounded-xl bg-white md:text-2xl/loose absolute bottom-0 w-full left-0">Solar Inverter</div>
                    </NavigationLink>
                </div>
            </div>
            <div className="aspect-square  bg-gradient-to-br from-white to-primary p-[2px] rounded-xl  hover:shadow-primary-md bg-white overflow-hidden">
                <div className="w-full h-full  text-blue-600 font-medium bg-white rounded-xl flex items-center justify-center relative">
                    <NavigationLink href="/products/2" className="text-center">
                        <Image className=" rounded-xl" src={'/images/products/products-2.jpg'} width={319} height={298} alt="products-1.jpg" />
                        <div className="text-primary font-medium text-base  rounded-xl bg-white md:text-2xl/loose absolute bottom-0 w-full left-0">Solar Battery</div>
                    </NavigationLink>
                </div>
            </div>
            <div className="aspect-square  bg-gradient-to-br from-white to-primary p-[2px] rounded-xl  hover:shadow-primary-md bg-white overflow-hidden">
                <div className="w-full h-full  text-blue-600 font-medium bg-white rounded-xl flex items-center justify-center relative">
                    <NavigationLink href="/products/SolarLighting" className="text-center">
                        <Image className=" rounded-xl" src={'/images/products/products-3.jpg'} width={319} height={298} alt="products-1.jpg" />
                        <div className="text-primary font-medium text-base  rounded-xl bg-white md:text-2xl/loose absolute bottom-0 w-full left-0">Solar Lighting</div>
                    </NavigationLink>
                </div>
            </div>
            <div className="aspect-square  bg-gradient-to-br from-white to-primary p-[2px] rounded-xl  hover:shadow-primary-md bg-white overflow-hidden">
                <div className="w-full h-full  text-blue-600 font-medium bg-white rounded-xl flex items-center justify-center relative">
                    <NavigationLink href="/products/SolarWaterPump" className="text-center">
                        <Image className=" rounded-xl" src={'/images/products/products-4.jpg'} width={319} height={298} alt="products-1.jpg" />
                        <div className="text-primary font-medium text-base  rounded-xl bg-white md:text-2xl/loose absolute bottom-0 w-full left-0">Solar Water Pump</div>
                    </NavigationLink>
                </div>
            </div>
            
            <div className="aspect-square  bg-gradient-to-br from-white to-primary p-[2px] rounded-xl  hover:shadow-primary-md bg-white overflow-hidden">
                <div className="w-full h-full  text-blue-600 font-medium bg-white rounded-xl flex items-center justify-center relative">
                    <NavigationLink href="/products/Solarpanel" className="text-center">
                        <Image className=" rounded-xl" src={'/images/products/products-5.jpg'} width={319} height={298} alt="products-1.jpg" />
                        <div className="text-primary font-medium text-base  rounded-xl bg-white md:text-2xl/loose absolute bottom-0 w-full left-0">Solar panel</div>
                    </NavigationLink>
                </div>
            </div>
            <div className="aspect-square  bg-gradient-to-br from-white to-primary p-[2px] rounded-xl  hover:shadow-primary-md bg-white overflow-hidden">
                <div className="w-full h-full  text-blue-600 font-medium bg-white rounded-xl flex items-center justify-center relative">
                    <NavigationLink href="/products/SolarEnergySystem" className="text-center">
                        <Image className=" rounded-xl" src={'/images/products/products-6.jpg'} width={319} height={298} alt="products-1.jpg" />
                        <div className="text-primary font-medium text-base  rounded-xl bg-white md:text-2xl/loose absolute bottom-0 w-full left-0">Solar Energy System</div>
                    </NavigationLink>
                </div>
            </div>
            
            
            
           
        </div>
        </div>
    )
}