import {
  Truck,
  Shield,
  Headphones,
  CreditCard,
  type LucideIcon,
} from "lucide-react";
import { features } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  truck: Truck,
  shield: Shield,
  headphones: Headphones,
  "credit-card": CreditCard,
};

export default function FeatureBanner() {
  return (
    <section className="bg-navy py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <blockquote className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-9 text-white sm:text-xl lg:text-2xl">
            «ترکیبی عالی از ظرافت و راحتی که گامی مطمئن در مسیر موفقیت ایجاد
            می‌کند.»
          </p>
        </blockquote>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <div key={feature.id} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white sm:text-base">
                  {feature.title}
                </h3>
                <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
