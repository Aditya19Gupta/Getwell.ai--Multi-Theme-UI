
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  featured?: boolean;
}

const Card: React.FC<CardProps> = ({ title, description, icon, className, featured = false }) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg border border-border p-6 shadow-sm transition-all hover:shadow-md",
        featured ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground",
        className
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
        {icon}
      </div>
      <h3 className={cn(
        "mb-2 text-xl font-semibold",
        featured ? "text-primary-foreground" : ""
      )}>
        {title}
      </h3>
      <p className={cn(
        "mb-6 line-clamp-3",
        featured ? "text-primary-foreground/90" : "text-muted-foreground"
      )}>
        {description}
      </p>
      <Button className={cn(
        featured ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" : ""
      )}>
        Learn More
      </Button>
    </div>
  );
};

export default Card;
