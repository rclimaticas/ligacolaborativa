'use client';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect } from 'react';

import CarouselComponent from './Carousel';

export default function Carousel() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="animate-pulse space-y-4">
          <div className="flex items-center justify-center">
            <div className="flex h-[560px] w-full items-center justify-center rounded-md">
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="flex w-[300px] sm:w-[400px] md:w-[700px] lg:w-[800px] xl:w-[1000px]">
            <CarouselComponent />
          </div>
        </div>
      )}
    </div>
  );
}
