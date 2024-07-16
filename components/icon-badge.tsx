import { LucideIcon } from "lucide-react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define background variants
const backgroundVariants = cva(
    "rounded-full flex items-center justify-center",
    {
        variants: {
            variant: {
                default: "bg-sky-100",
                success: "bg-emerald-100",
            },
            size: {
                default: "p-2",
                sm: "p-1",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
);

// Define icon variants
const iconVariants = cva(
    "", // Additional classes can be added here if needed
    {
        variants: {
            variant: {
                default: "text-sky-700",
                success: "text-emerald-700",
            },
            size: {
                default: "h-8 w-8"
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
);

// Define TypeScript types for variant props
type BackgroundVariantsProps = VariantProps<typeof backgroundVariants>;
type IconVariantsProps = VariantProps<typeof iconVariants>;

// Define props interface for IconBadge component
interface IconBadgeProps extends BackgroundVariantsProps, IconVariantsProps {
    icon: LucideIcon;
}

// IconBadge component
export const IconBadge = ({
    icon: Icon,
    variant,
    size,
}: IconBadgeProps) => {
    return (
        <div className={cn(backgroundVariants({ variant, size }))}>
            <Icon className={cn(iconVariants({ variant, size }))} />
        </div>
    );
};

export default IconBadge; // Exporting default for the component
