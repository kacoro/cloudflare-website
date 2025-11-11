import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import Image from "next/image";
import {Product} from "./ProductCard";
interface DialogDemoProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product;
}
export function ProductDialog({ open, onOpenChange, product }: DialogDemoProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
       
        <DialogContent className="sm:max-w-[1000px]  ">
          <DialogHeader>
            <DialogTitle hidden>Product Details</DialogTitle>
              <Image
              src="/logo.png"
              alt="Areafly Solar logo"
              width={229}
              height={43}
              priority
            />
          </DialogHeader>
          <div className="max-h-[85vh] overflow-y-auto">
             {product.images && product.images.map((imgUrl, index) => (
              <Image
                key={index}
                src={imgUrl}
                alt={`Product Image ${index + 1}`}
                width={950}
                height={600}
                className=" top-0 left-0 w-full h-auto"
              />
            ))}
          </div>
             
            
        </DialogContent>
    </Dialog>
  )
}
