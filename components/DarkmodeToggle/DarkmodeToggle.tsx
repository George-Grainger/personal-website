import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import styles from './DarkmodeToggle.module.css';

const DarkmodeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <svg
      className={styles.toggle}
      onClick={() => setTheme(resolvedTheme == 'dark' ? 'light' : 'dark')}
      viewBox="0 0 370 190"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.outline}
        d="M275 5H95C45.2944 5 5 45.2944 5 95C5 144.706 45.2944 185 95 185H275C324.706 185 365 144.706 365 95C365 45.2944 324.706 5 275 5Z"
      />
      <g clipPath="url(#clip0)">
        <g className={styles.stars}>
          <path d="M250.677 97C250.966 97.2546 251.322 97.4205 251.702 97.4777C252.083 97.535 252.472 97.4812 252.823 97.3229C253.174 97.1645 253.471 96.9083 253.68 96.585C253.889 96.2616 254 95.8849 254 95.5C254 95.1151 253.889 94.7384 253.68 94.415C253.471 94.0917 253.174 93.8355 252.823 93.6771C252.472 93.5188 252.083 93.465 251.702 93.5223C251.322 93.5795 250.966 93.7454 250.677 94C250.464 94.1877 250.294 94.4185 250.177 94.6771C250.06 94.9357 250 95.2162 250 95.5C250 95.7838 250.06 96.0643 250.177 96.3229C250.294 96.5815 250.464 96.8123 250.677 97ZM226.677 162C226.966 162.255 227.322 162.42 227.702 162.478C228.083 162.535 228.472 162.481 228.823 162.323C229.174 162.165 229.471 161.908 229.68 161.585C229.889 161.262 230 160.885 230 160.5C230 160.115 229.889 159.738 229.68 159.415C229.471 159.092 229.174 158.835 228.823 158.677C228.472 158.519 228.083 158.465 227.702 158.522C227.322 158.58 226.966 158.745 226.677 159C226.464 159.188 226.294 159.419 226.177 159.677C226.06 159.936 226 160.216 226 160.5C226 160.784 226.06 161.064 226.177 161.323C226.294 161.581 226.464 161.812 226.677 162ZM287.677 37C287.966 37.2546 288.322 37.4205 288.702 37.4777C289.083 37.535 289.472 37.4812 289.823 37.3229C290.174 37.1645 290.471 36.9083 290.68 36.585C290.889 36.2616 291 35.8849 291 35.5C291 35.1151 290.889 34.7384 290.68 34.415C290.471 34.0917 290.174 33.8355 289.823 33.6771C289.472 33.5188 289.083 33.465 288.702 33.5223C288.322 33.5795 287.966 33.7454 287.677 34C287.464 34.1877 287.294 34.4185 287.177 34.6771C287.06 34.9357 287 35.2163 287 35.5C287 35.7838 287.06 36.0643 287.177 36.3229C287.294 36.5815 287.464 36.8123 287.677 37ZM327.677 146C327.966 146.255 328.322 146.42 328.702 146.478C329.083 146.535 329.472 146.481 329.823 146.323C330.174 146.165 330.471 145.908 330.68 145.585C330.889 145.262 331 144.885 331 144.5C331 144.115 330.889 143.738 330.68 143.415C330.471 143.092 330.174 142.835 329.823 142.677C329.472 142.519 329.083 142.465 328.702 142.522C328.322 142.58 327.966 142.745 327.677 143C327.464 143.188 327.294 143.419 327.177 143.677C327.06 143.936 327 144.216 327 144.5C327 144.784 327.06 145.064 327.177 145.323C327.294 145.581 327.464 145.812 327.677 146ZM360.677 44C360.966 44.2546 361.322 44.4205 361.702 44.4777C362.083 44.535 362.472 44.4812 362.823 44.3229C363.174 44.1645 363.471 43.9083 363.68 43.585C363.889 43.2616 364 42.8849 364 42.5C364 42.1151 363.889 41.7384 363.68 41.415C363.471 41.0917 363.174 40.8355 362.823 40.6771C362.472 40.5188 362.083 40.465 361.702 40.5223C361.322 40.5795 360.966 40.7454 360.677 41C360.464 41.1877 360.294 41.4185 360.177 41.6771C360.06 41.9357 360 42.2162 360 42.5C360 42.7838 360.06 43.0643 360.177 43.3229C360.294 43.5815 360.464 43.8123 360.677 44ZM376.677 118C376.966 118.255 377.322 118.42 377.702 118.478C378.083 118.535 378.472 118.481 378.823 118.323C379.174 118.165 379.471 117.908 379.68 117.585C379.889 117.262 380 116.885 380 116.5C380 116.115 379.889 115.738 379.68 115.415C379.471 115.092 379.174 114.835 378.823 114.677C378.472 114.519 378.083 114.465 377.702 114.522C377.322 114.58 376.966 114.745 376.677 115C376.464 115.188 376.294 115.419 376.177 115.677C376.06 115.936 376 116.216 376 116.5C376 116.784 376.06 117.064 376.177 117.323C376.294 117.581 376.464 117.812 376.677 118Z" />
          <path d="M150 43L152 49L158 51L152 53L150 59L148 53L142 51L148 49L150 43ZM192 121L195 133L208 136L195 139L192 152L189 139L177 136L189 133L192 121ZM241 69L243 75L249 77L243 79L241 85L239 79L233 77L239 75L241 69Z" />
        </g>
        <path
          className={styles.sun}
          d="M271 161C307.451 161 337 131.451 337 95C337 58.5492 307.451 29 271 29C234.549 29 205 58.5492 205 95C205 131.451 234.549 161 271 161Z"
        />
        <g>
          <circle className={styles.moon} mask="url(#moonMask)" cx="190" cy="95" r="66" />
        </g>
        <g className={styles.cloud}>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M269.676 146.889C269.832 146.889 269.988 146.886 270.144 146.879C270.679 146.902 271.213 146.842 271.729 146.7C273.969 146.285 276.049 145.197 277.683 143.555C279.807 141.42 281 138.525 281 135.506C281 132.487 279.807 129.591 277.683 127.457C275.559 125.322 272.679 124.122 269.676 124.122C268.758 124.122 267.852 124.234 266.975 124.451C266.725 120.156 264.917 116.088 261.874 113.029C258.589 109.727 254.134 107.872 249.488 107.872C246.325 107.872 243.25 108.732 240.573 110.323C240.571 110.318 240.569 110.313 240.567 110.308C239.327 107.3 237.51 104.566 235.219 102.263C232.929 99.9605 230.209 98.1339 227.216 96.8876C224.223 95.6414 221.015 95 217.775 95C211.233 95 204.958 97.6127 200.331 102.263C195.705 106.914 193.106 113.221 193.106 119.798C193.106 121.597 193.301 123.377 193.678 125.108C192.311 124.536 190.833 124.233 189.324 124.233C186.321 124.233 183.441 125.432 181.317 127.567C179.193 129.702 178 132.597 178 135.617C178 138.636 179.193 141.531 181.317 143.666C182.594 144.95 184.145 145.895 185.832 146.445C185.916 146.482 186.002 146.517 186.088 146.55C186.597 146.742 187.132 146.853 187.672 146.878C188.216 146.959 188.768 147 189.324 147C189.879 147 190.429 146.959 190.971 146.879H269.2C269.358 146.886 269.517 146.889 269.676 146.889Z"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M342.111 119.99H342.62C343.32 120.021 344.019 119.909 344.675 119.663C345.208 119.462 345.703 119.176 346.141 118.816C346.829 118.423 347.463 117.939 348.026 117.376C348.858 116.544 349.518 115.556 349.968 114.469C350.418 113.382 350.65 112.217 350.65 111.04C350.65 109.863 350.418 108.698 349.968 107.611C349.518 106.524 348.858 105.536 348.026 104.704C347.194 103.872 346.206 103.212 345.119 102.762C344.032 102.312 342.867 102.08 341.69 102.08C341.543 102.08 341.396 102.084 341.25 102.091C341.296 101.601 341.32 101.107 341.32 100.61C341.32 96.47 339.675 92.4995 336.748 89.5721C333.82 86.6446 329.85 85 325.71 85C321.57 85 317.6 86.6446 314.672 89.5721C312.347 91.8975 310.831 94.881 310.306 98.0849C309.043 97.61 307.694 97.36 306.32 97.36C303.318 97.36 300.438 98.5526 298.316 100.676C296.193 102.798 295 105.678 295 108.68C295 111.682 296.193 114.562 298.316 116.684C299.94 118.309 302.009 119.389 304.237 119.807C304.76 119.951 305.304 120.014 305.848 119.99C306.005 119.997 306.162 120 306.32 120C306.479 120 306.637 119.997 306.795 119.99H341.268C341.408 119.997 341.549 120 341.69 120C341.831 120 341.971 119.997 342.111 119.99Z"
          />
        </g>
        <g className={styles.plane}>
          <path d="M377.939 68.4H370.872L364.591 63L363.61 63.6L365.376 68.5H361.843L358.408 65.1L357.623 65.5L358.899 68.5H358.31C359.684 69.5 361.254 70.2 362.824 70.8H377.841C378.43 70.8 380 70.8 380 69.5C380 68.5 378.822 68.5 378.037 68.5L377.939 68.4Z" />
          <path d="M357.328 68H20H118.146" />
        </g>
      </g>
      <defs>
        <mask id="moonMask">
          <rect className={styles.fillWhite} x="30" y="20" width="320" height="165" rx="86" ry="86" />
          <circle className={styles.moonMask} cx="360" cy="85" r="66" />
        </mask>
        <clipPath id="clip0">
          <rect className={styles.fillWhite} x="10" y="10" width="350" height="170" rx="85" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DarkmodeToggle;
