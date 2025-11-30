import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

// Brand Logo Item Component
function BrandLogoItem({ brand }: { brand: { name: string; image: string; category: string } }) {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div
      className="flex-shrink-0 w-28 h-16 md:w-48 md:h-28 flex items-center justify-center transition-all duration-300"
    >
      {!imageError ? (
        <img
          src={brand.image}
          alt={`${brand.name} - ${brand.category}`}
          className="max-w-full max-h-full object-contain"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-mystic-navy/10 to-red-inferno/10 rounded-lg border-2 border-accent/30 flex items-center justify-center p-3">
          <p className="text-center text-xs md:text-sm font-heading font-semibold text-mystic-navy">
            {brand.name}
          </p>
        </div>
      )}
    </div>
  );
}

// Brand logos data - organized into 3 rows
const brandRows = [
  [
    { name: 'ACC', image: '/brand-logos/acc.png', category: 'Cement' },
    { name: 'Birla Super', image: '/brand-logos/birlasuper.png', category: 'Cement' },
    { name: 'UltraTech', image: '/brand-logos/ultratech.png', category: 'Cement' },
    { name: 'Jindal Steel', image: '/brand-logos/jindalsteel.png', category: 'Steel' },
    { name: 'JSW Steel', image: '/brand-logos/jswsteel.png', category: 'Steel' },
    { name: 'Tata Steel', image: '/brand-logos/tatasteel.png', category: 'Steel' },
    { name: 'Hindware', image: '/brand-logos/hindware.png', category: 'Sanitary' },
    { name: 'Cera', image: '/brand-logos/cera.png', category: 'Sanitary' },
    { name: 'Jaguar', image: '/brand-logos/jaguar.png', category: 'Sanitary' },
    { name: 'Parryware', image: '/brand-logos/parryware.png', category: 'Sanitary' },
  ],
  [
    { name: 'Kohler', image: '/brand-logos/kohler.png', category: 'Sanitary' },
    { name: 'Johnson', image: '/brand-logos/johnson.png', category: 'Sanitary' },
    { name: 'Havells', image: '/brand-logos/havels.png', category: 'Electrical' },
    { name: 'Anchor', image: '/brand-logos/anchor.png', category: 'Electrical' },
    { name: 'GM', image: '/brand-logos/GM.png', category: 'Electrical' },
    { name: 'Legrand', image: '/brand-logos/legrand.png', category: 'Electrical' },
    { name: 'Schneider', image: '/brand-logos/schneider.png', category: 'Electrical' },
    { name: 'Supreme', image: '/brand-logos/supreme.png', category: 'Electrical' },
    { name: 'Astral Pipes', image: '/brand-logos/astralpipes.png', category: 'Plumbing' },
    { name: 'Finolex', image: '/brand-logos/finolex.png', category: 'Plumbing' },
  ],
  [
    { name: 'Arshirvad', image: '/brand-logos/arshirvad.png', category: 'Plumbing' },
    { name: 'Prince', image: '/brand-logos/prince.png', category: 'Plumbing' },
    { name: 'Dorset', image: '/brand-logos/dorset.png', category: 'Plumbing' },
    { name: 'Great White', image: '/brand-logos/greatwhite.png', category: 'Plumbing' },
    { name: 'Kajaria', image: '/brand-logos/kajaria.png', category: 'Tiles' },
    { name: 'Somany', image: '/brand-logos/somany.png', category: 'Tiles' },
    { name: 'Orient Bell', image: '/brand-logos/orientbell.png', category: 'Tiles' },
    { name: 'Bajaj Tiles', image: '/brand-logos/bajaj tiles.png', category: 'Tiles' },
    { name: 'Asian Paints', image: '/brand-logos/asianpaints.png', category: 'Paint' },
    { name: 'Berger', image: '/brand-logos/berger.png', category: 'Paint' },
    { name: 'Dulux', image: '/brand-logos/dulux.png', category: 'Paint' },
    { name: 'Godrej', image: '/brand-logos/godrej.png', category: 'Hardware' },
  ],
];

interface BrandLogosProps {
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
}

export default function BrandLogos({ 
  title = 'Brands We Work With',
  subtitle = 'Trusted partnerships with leading manufacturers',
  backgroundColor = 'bg-white'
}: BrandLogosProps) {
  // Duplicate brands for seamless infinite scroll
  // We need enough duplicates so when we move one set width, it loops seamlessly
  const createInfiniteRow = (brands: typeof brandRows[0]) => {
    // Create 3 duplicates - moving exactly 1/3 creates perfect seamless loop
    return [...brands, ...brands, ...brands];
  };
  
  // Detect mobile screen size for faster animation
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop: 24s, Mobile: 22.5s (50% slower)
  const animationDuration = isMobile ? 22.5 : 24;

  // Memoize styles to prevent regeneration that causes animation restarts
  const animationStyles = useMemo(() => `
    @keyframes brand-scroll-left-row-0 {
      0% { transform: translate3d(0, 0, 0); }
      100% { transform: translate3d(-33.333333%, 0, 0); }
    }
    @keyframes brand-scroll-right-row-1 {
      0% { transform: translate3d(-33.333333%, 0, 0); }
      100% { transform: translate3d(0, 0, 0); }
    }
    @keyframes brand-scroll-left-row-2 {
      0% { transform: translate3d(0, 0, 0); }
      100% { transform: translate3d(-33.333333%, 0, 0); }
    }
    .brand-scroll-row-0 {
      animation: brand-scroll-left-row-0 ${animationDuration}s linear infinite;
      will-change: transform;
    }
    .brand-scroll-row-1 {
      animation: brand-scroll-right-row-1 ${animationDuration}s linear infinite;
      will-change: transform;
    }
    .brand-scroll-row-2 {
      animation: brand-scroll-left-row-2 ${animationDuration}s linear infinite;
      will-change: transform;
    }
  `, [animationDuration]);

  return (
    <>
      <style>{animationStyles}</style>
      <section className={`section-padding ${backgroundColor}`}>
        <div className="container-custom">
          {(title || subtitle) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              {title && (
                <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {subtitle}
                </p>
              )}
            </motion.div>
          )}

          <div className="space-y-6 overflow-hidden">
            {brandRows.map((rowBrands, rowIndex) => {
              const infiniteRow = createInfiniteRow(rowBrands);
              const animationClass = rowIndex === 0 
                ? 'brand-scroll-row-0' 
                : rowIndex === 1 
                ? 'brand-scroll-row-1' 
                : 'brand-scroll-row-2';
              
              return (
                <div
                  key={rowIndex}
                  className="relative overflow-hidden"
                >
                  {/* Infinite scroll animation - CSS based for seamless looping */}
                  <div
                    className={`flex gap-4 md:gap-8 items-center ${animationClass}`}
                    style={{ 
                      display: 'flex',
                      width: 'max-content'
                    }}
                  >
                    {infiniteRow.map((brand, index) => (
                      <BrandLogoItem key={`${brand.name}-${index}`} brand={brand} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

