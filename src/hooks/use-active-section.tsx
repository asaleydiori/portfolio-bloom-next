
import { useState, useEffect } from 'react';

export function useActiveSection(sections: string[], threshold = 0.6) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          },
          { threshold }
        );
        
        observer.observe(element);
        observers.push(observer);
      }
    });
    
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [sections, threshold]);

  return activeSection;
}
