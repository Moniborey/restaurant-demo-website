import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

export default function useScrollEffect({scrollY = 500}:{scrollY?:number}):boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      setIsScrolled(window.scrollY > scrollY);
    }, 200); // Adjust the debounce delay as needed

    window.addEventListener('scroll', handleScroll);

    return () => {
      handleScroll.cancel(); // Cancel the debounced function on unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isScrolled;
}