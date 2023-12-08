import useWindowSize from '../../hooks/useWindowSize';

export default function SemLinhaAtivaImg() {
  const { isMobile } = useWindowSize();

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 400 400'
      height={isMobile ? '200' : '400'}
      width='400'
    >
      <g id='replacing-sim-1--communication-replacing-sim'>
        <g id='phone'>
          <path
            id='vector'
            fill={isMobile ? 'white' : '#000000'}
            d='M271.724 49.258c-7.86 -6.644 -21.25 -9.682 -26.194 -11.17 -5.292 -1.592 -5.838 0.31 -13.552 6.854 -2.29 1.944 -4.64 3.284 -8.81 3.518 -1.962 0.11 -42.878 -7.834 -42.926 -7.844 -15.594 -3.272 -15.248 -4.484 -18.534 -12.204 -1.59 -3.736 -2.538 -6.508 -5.214 -6.96 -13.006 -2.1919 -21.164 -3.8339 -32.986 -0.778 -7.946 2.054 -11.178 8.444 -19.8 44.714 -9.63 40.506 -50.394 222.086 -53.676 256.404 0.372 3.242 0.938 8.676 5.422 12.314 2.712 2.2 7.592 4.36 9.628 4.91 2.58 0.698 53.98 13.27 100.71 22.99 22.532 4.688 30.952 7.75 39.404 -0.914 2.658 -2.726 3.954 -7.216 5.258 -10.608 7.086 -18.446 56.366 -225.976 63.056 -259.874 3.316 -16.8 2.48 -14.436 3.166 -17.636 2.046 -9.554 2.512 -17.412 -4.948 -23.72l-0.004 0.004Zm2.794 23.676c-0.624 2.842 -1.4 9.424 -2.02 12.668 -2.576 13.48 -47.228 198.116 -56.864 236.864 -2.73 10.976 -6.974 34.164 -13.794 38.886 -8.598 5.954 -8.666 4.614 -113.676 -19.168 -14.664 -3.32 -28.238 -5.414 -32.704 -11.198 -2.686 -3.48 -3.468 -7.244 -3.166 -9.636 0.212 -1.678 0.114 -3.36 0.242 -5.032 0.76 -10 34.28 -163.49 36.46 -173.432 26.296 -119.95 23.618 -121.42 46.31 -121.448 7.68 -0.01 15.476 1.604 20.574 2.406 2.92 0.46 2.354 9.1 8.868 14.228 2.214 1.742 5.868 2.954 10.022 3.966 4.592 1.12 32.05 6.962 39.662 8.17 10.136 1.608 11.836 1.698 19.254 -3.026 2.064 -1.314 5.122 -4.302 6.656 -6.206 1.546 -1.92 2.954 -0.686 10.236 1.218 10.27 2.686 24.44 7.882 25.132 18.472 0.256 3.91 -0.586 9.516 -1.188 12.266l-0.004 0.002Z'
            strokeWidth='2'
          ></path>
          <path
            id='vector_2'
            fill={isMobile ? 'white' : '#000000'}
            d='M172.354 30.1296c6.65 1.994 29.79 6.39 30.994 6.568 1.658 -0.004 2.054 -0.13 2.572 -0.928 2.652 -4.09 -3.204 -4.778 -17.514 -7.766 -0.806 -0.168 -14.866 -3 -16.776 -1.986 -1.746 0.926 -1.276 3.514 0.724 4.112Z'
            strokeWidth='2'
          ></path>
          <path
            id='vector_3'
            fill={isMobile ? 'white' : '#000000'}
            d='M219.278 42.0242c2.778 0.136 4.698 -2.256 4.756 -4.37 0.064 -2.368 -2.344 -4.426 -4.34 -4.402 -2.04 0.024 -4.698 1.866 -4.436 4.388 -0.014 2.354 1.83 4.278 4.02 4.384Z'
            strokeWidth='2'
          ></path>
          <path
            id='vector_4'
            fill={isMobile ? 'white' : '#000000'}
            d='M274.562 186.152c-1.412 4.61 -2.666 4.236 -6.032 3.452 -2.962 -0.69 -3.156 -1.04 2.494 -26.04 4.49 -19.864 7.07 -37.412 9.748 -37.306 2.092 0.084 4.02 0.504 5.244 2.484 0.474 0.768 0.482 1.102 -0.582 5.992 1.362 0.196 2.8 0.416 4.3 0.654 1.382 -6.38 2.816 -12.994 4.3 -19.858 7.912 -36.572 9.718 -45.276 2.112 -58 -8.66 -14.49 -20.414 -20.538 -36.73 -24.862 -11.42 -3.026 -24.566 -5.988 -33.43 -7.574 -6.51 -1.164 -78.416 -14.95804 -95.568 -14.95804v-0.134c-22.14 1.15 -23.47 5.374 -33.966 42.71404 -22.07 78.52 -40.012 161.082 -55.304 241.2 -1.896 9.932 -4.596 28.838 -1.686 38.66 2.55 8.608 7.132 13.058 14.174 18.622 8.922 7.046 18.882 9.332 38.22 14.31 7.794 2.006 93.89 22.326 113.802 24.256 21.386 2.076 24.46 -9.54 30.138 -29.568 15.93 -56.182 24.656 -91.288 42.688 -173.24 -1.492 -0.298 -2.79 -0.564 -3.922 -0.802v-0.002Zm-39.848 111.232c-2.528 9.826 -16.07 58.326 -16.23 58.808 -8.242 24.85 -15.398 20.494 -60.228 11.362 -91.942 -18.728 -114.332 -23.416 -117.378 -39.49 -2.614 -13.784 6.794 -51.874 8.25 -59.112 1.298 -6.458 1.474 -9.226 4.094 -21.84 25.55 -123.016 31.184 -137.244 46.368 -196.994C108.4 15.45196 112.184 12.04796 129.256 12.00396c13.02 0.73 112.13 16.61004 141.032 26.85804 11.42 4.048 15.25 10.304 15.944 17.748 0.79 8.448 -5.564 37.286 -5.886 38.378 -4.13 14.038 -15.448 85.062 -45.628 202.396h-0.004Z'
            strokeWidth='2'
          ></path>
        </g>
        <g id='elements'>
          <path
            id='vector_5'
            fill={isMobile ? 'white' : '#000000'}
            d='M298.494 222.498c0.84 0.002 1.352 0.676 1.198 1.692 -0.688 4.538 -6.026 27.07 -7.148 27.074 -0.362 0 -1.868 0.792 4.08 -25.392 0.662 -2.914 0.884 -3.376 1.87 -3.374Z'
            strokeWidth='2'
          ></path>
          <path
            id='vector_6'
            fill={isMobile ? 'white' : '#000000'}
            d='M325.41 220.906c1.016 1.344 2.132 2.618 3.06 4.022 10.612 16.046 10.462 16.098 9.956 16.558 -1.544 1.4 -13.32 -16.596 -14.49 -18.322 -2.032 -3 0.512 -3.53 1.474 -2.258Z'
            strokeWidth='2'
          ></path>
          <path
            id='vector_7'
            fill={isMobile ? 'white' : '#000000'}
            d='M343.76 214.914c6.582 1.61 16.522 7.61 17.848 8.908 0.566 0.554 -0.068 1.13 -1.214 0.724 -5.498 -1.94 -9.074 -3.592 -16.456 -6.844 -2.708 -1.192 -1.672 -2.828 -0.178 -2.788Z'
            strokeWidth='2'
          ></path>
          <path
            id='vector_8'
            fill={isMobile ? 'white' : '#000000'}
            d='M276.326 233.396c-1.102 0.044 -0.656 -0.904 -0.304 -1.774 2.064 -5.118 5.3 -10.658 8.246 -15.326 1.334 -2.112 2.764 -1.024 2.504 0.078 -0.436 1.85 -8.264 15.06 -10.444 17.022h-0.002Z'
            strokeWidth='2'
          ></path>
        </g>
        <path
          id='arrow 1'
          fill={isMobile ? 'white' : '#000000'}
          d='M94.91 195.7758c2.532 -7.864 3.026 -7.492 1.726 -8.042 -7.28 -3.074 -9.444 -2.962 -4.872 -6.316 4.016 -2.948 12.482 -8.02 16.776 -10.546 5.624 -3.308 5.964 -3.558 6.63 -2.098 4.128 9.046 9.964 25.614 10.014 26.92 0.052 1.392 -1.372 1.2 -2.754 0.808 -8.904 -2.524 -8.618 -2.982 -9.072 -1.494 -2.854 9.3602 0.184 18.8682 6.172 26.6062 8.322 10.754 15.858 11.078 14.306 13.692 -2.398 4.04 -11.64 14.222 -14.398 16.94 -1.76 1.734 -1.904 2.284 -12.146 -6.888 -6.876 -6.158 -13.796 -18.278 -14.494 -29.916 -0.392 -6.534 -0.256 -12.31 2.112 -19.6662Z'
          strokeWidth='2'
        ></path>
        <path
          id='arrow 2'
          fill={isMobile ? 'white' : '#000000'}
          d='M227.942 191.5618c-0.33 1.16 0.566 1.036 4.19 2.098 5.78 1.694 7.814 0.91 -8.796 13.5622 -0.26 0.198 -8.618 6.544 -9.372 6.92 -0.904 0.454 -1.412 0.174 -3.078 -2.996 -12.286 -23.3622 -12.26 -24.1822 -10.656 -24.4062 0.89 -0.124 1.534 -0.104 9.806 1.406 0.948 0.174 1.212 -0.058 1.348 -0.99 1.468 -10.072 -2.408 -19.268 -9.768 -26.302 -9.574 -9.148 -16.19 -8.932 -15.21 -11.106 2.562 -5.684 12.058 -18.046 12.692 -18.912 1.502 -2.05 3.092 -0.598 7.442 2.068 19.04 11.672 28.886 32.332 21.402 58.658Z'
          strokeWidth='2'
        ></path>
        <g id='needle'>
          <path
            id='vector_9'
            fill={isMobile ? 'white' : '#000000'}
            d='M316.272 240.508c0.428 0 0.442 0.264 0.522 0.612 3.098 13.666 8.624 34.85 10.958 46.168 0.63 3.056 0.494 2.612 2.744 3.446 6.888 2.554 7.748 3.4 9.034 3.77 3.644 1.046 3.476 9.166 12.546 50.98 1.076 4.956 1.15 3.73 -8.69 6.236 -5.31 1.352 -4.78 0.896 -13.834 2.364 -6.392 1.036 -5.564 1.294 -6.982 -0.026 -1.47 -1.372 -8.668 -46.376 -9.724 -51.656 0.406 -2.774 0.46 -2.486 5.882 -7.746 3.08 -2.99 3.4 -2.848 3.3 -3.656 -0.25 -2.046 -7.024 -45.064 -7.034 -45.132 -0.744 -4.568 -1.26 -4.678 0.432 -5.192 0.388 -0.118 0.656 -0.168 0.842 -0.168h0.004Zm11.338 110.032c4.542 0 15.782 -2.246 19.858 -3.704 0.484 -0.172 0.786 -0.568 0.712 -1.094 -0.384 -2.744 -4.258 -22.438 -4.586 -24.022 -4.752 -22.858 -4.952 -22.848 -6.726 -23.802 -1.642 -0.884 -8.232 -2.882 -9.372 -3.216 -0.964 -0.282 -1.914 -0.19 -2.696 0.458 -2.054 1.7 -8.594 5.82 -8.132 9.022 0.648 4.498 2.134 13.578 3.764 21.834 4.968 25.164 4.492 24.524 7.178 24.524Zm-11.338 -112.186c-0.418 0 -0.872 0.08 -1.466 0.262 -3.198 0.972 -2.786 3.088 -2.352 5.326 0.674 3.46 6.998 44.286 7.36 46.764 -8.292 7.582 -8.622 8.106 -9.098 11.384 -0.082 0.57 -0.046 0.102 1.916 11.656 5.906 34.79 7.124 40.598 8.712 42.118 2.304 2.204 2.474 1.086 15.51 -0.688 5.274 -0.718 4.774 -0.9 11.574 -2.438 5.78 -1.308 7.002 -1.972 5.754 -7.71 -9.796 -45.024 -8.776 -51.072 -14.058 -52.592 -0.55 -0.158 -4.33 -2.178 -9.938 -4.09 -0.524 -2.042 0.208 -0.314 -6.112 -26.042 -1.866 -7.594 -3.81 -15.444 -5.178 -21.648 -0.472 -2.136 -2.126 -2.298 -2.624 -2.298v-0.004Zm11.08 110.03c-1.398 -3.336 -7.286 -35.718 -8.55 -44.506 -0.09 -0.628 0.85 -2.154 5.848 -5.886 1.738 -1.298 1.606 -1.406 2.238 -1.222 1.054 0.308 8.552 2.588 9.312 3.248 1.622 1.622 9.278 42.656 9.696 45.076 -4.18 1.308 -14.238 3.34 -18.542 3.292l-0.002 -0.002Z'
            strokeWidth='2'
          ></path>
        </g>
        <g id='sim 1'>
          <path
            id='vector_10'
            fill={isMobile ? 'white' : '#000000'}
            d='M194.726 105.1856c-0.166 3.648 -1.564 5.46 -11.096 17.374 -8.144 10.178 -22.73 27.142 -31.966 36.258 -5.572 5.5 -6.602 6.384 -21.356 -5.644 -5.122 -4.176 -18.724 -15.79 -22.188 -21.25 -1.048 -1.652 -1.088 -3.374 -0.086 -5.108 5.574 -9.67 30.036 -36.508 32.854 -39.53 12.35 -13.236 16.456 -17.994 20.628 -18.94 4.026 -0.914 25.466 17.954 28.752 21.164 3.026 2.956 3.862 4.234 4.218 6.732 0.282 1.982 0.37 6.12 0.242 8.948l-0.002 -0.004Zm-1.86 -1.572c-0.62 -7.424 -0.27 -9.202 -2.122 -10.696 -5.036 -4.06 -21.714 -19.428 -27.238 -22.242 -2.382 -1.214 -3.774 -0.072 -10.018 6.66 -4.268 4.602 -25.63 28.538 -27.398 30.574 -17.384 19.998 -17.748 20.86 -15.94 23.528 2.614 3.858 24.228 23.666 33.914 29.278 3.128 1.812 5.2 -1.62 31.608 -32.43 15.248 -17.79 17.564 -20.236 17.194 -24.672Z'
            strokeWidth='2'
          ></path>
          <path
            id='vector_11'
            fill={isMobile ? 'white' : '#000000'}
            d='M166.908 117.9694c-3.356 -3.52 -15.128 -14.154 -21.74 -17.912 -4.24 -2.408 -9.508 5.044 -12.292 8.032 -17.87 19.186 -19.236 20.268 -12.556 27.582 3.36 3.674 15.75 14.648 20.77 17.582 4.63 2.704 9.616 -3.696 13.442 -7.92 18.394 -20.302 18.748 -20.686 12.378 -27.362l-0.002 -0.002Zm-30.618 29.162c-0.286 -0.07 -4.892 -4.27 -4.894 -4.326 -0.012 -0.352 1.514 -1.904 2.334 -2.738 6.588 -6.706 6.364 -7.912 6.75 -7.598 0.666 0.536 4.674 3.514 4.284 4.278 -0.726 1.42 -0.114 0.212 -8.422 10.292 -0.03 0.036 -0.05 0.09 -0.05 0.09l-0.002 0.002Zm-14.252 -23.566c0.23 -0.276 0.228 -0.308 6.782 5.198 0.988 0.83 -0.082 -0.058 -4.664 6.402 -0.186 0.262 -0.398 0.56 -0.456 0.592 -0.086 -0.018 -0.346 -0.274 -0.554 -0.478 -5.51 -5.408 -6.012 -5.806 -1.108 -11.714Zm20.924 -0.474c0.326 0.15 3.574 2.844 4.332 3.632 -0.598 0.884 -2.988 4.046 -4.068 5.606 -0.138 0.2 0.028 0.378 -1.876 -1.32 -2.362 -2.108 -2.378 -2.134 -2.93 -2.464 0.01 -0.306 0.976 -1.072 4.544 -5.456l-0.002 0.002Zm18.766 -5.676c-0.606 0.636 -4.008 4.798 -4.178 5.006 -3.948 4.852 -4.94 5.954 -6.582 4.784 -1.914 -1.36 -3.786 -2.714 -3.866 -2.994 0.096 -0.2 0.15 0.116 8.426 -9.332 1.138 -1.3 1.6 -2.252 1.928 -2.284 0.474 0 1.746 1.418 4.588 3.938 0.312 0.278 0.162 0.384 -0.316 0.882Zm-7.352 -3.986c-7.126 8.024 -7.994 9.764 -8.428 9.8 -0.02 0.016 -0.206 -0.138 -0.344 -0.262 -4.45 -3.964 -4.378 -4.054 -3.206 -5.55 2.832 -3.616 7.578 -9.208 8.77 -10.27 0.104 0.084 4.87 4.038 4.916 4.164 0.012 0.184 -0.672 0.952 -1.708 2.118Zm-13.098 7.986c0.5 0.436 0.494 0.398 0 0.842 -0.256 0.23 -4.278 4.962 -4.048 5.04 -0.09 -0.022 -0.372 -0.226 -0.698 -0.462l-0.268 -0.194c-1.276 -0.91 -2.37 -2.242 -4.004 -0.714 -1.61 1.51 -2.004 2.118 -2.208 2.226 -0.042 -0.014 -4.484 -4.218 -4.56 -4.282 -0.052 -0.046 -1.972 -1.718 -1.976 -1.788 -0.016 -0.358 1.424 -1.938 4.906 -5.754 1.824 -2 7.688 -8.478 7.73 -8.518 0.282 0.214 0.786 0.846 2.358 2.172 0.84 0.708 3.424 2.87 4.444 3.57 -2.242 3.062 -4.81 5.128 -1.678 7.866l0.002 -0.004Zm-16.078 15.092c8.366 -9.824 7.812 -9.906 9.51 -8.62 2.238 1.696 3.804 2.958 4.348 3.472 -0.46 0.52 -6.962 7.19 -9.062 10.192 -0.226 -0.036 -1.558 -1.386 -3.458 -3.122 -1.388 -1.256 -1.87 -1.3 -1.336 -1.922H125.2Zm20.794 1.596c0.568 -0.93 0.63 -2.332 -0.374 -3.096 -0.488 -0.374 -0.884 -0.86 -1.304 -1.308 4.866 -5.6 4.056 -6.094 5.138 -5.336 0.49 0.342 1.23 0.858 2.512 0.89 1.914 0.044 2.752 -0.926 4.144 -2.536l0.724 -0.836c0.15 0.042 0.992 1 2.386 2.158 0.542 0.45 3.528 2.878 4.496 3.6 -0.14 0.366 -0.686 0.978 -4.688 5.474 -8.24 9.26 -8.476 9.58 -8.71 9.622l-5.94 -5.708c-0.666 -0.64 0.028 -0.324 1.616 -2.924Zm12.226 -13.7c3.258 -4.098 4.948 -6.17 5.392 -6.462 5.614 5.256 7.522 5.966 2.184 11.356 -0.278 0.278 -0.622 0.986 -0.848 0.986 -0.312 -0.162 -6.016 -5.206 -6.458 -5.564 -0.118 -0.096 -0.282 -0.232 -0.27 -0.316Zm-8.642 -18.262c-1.282 1.01 -2.278 2.324 -3.336 3.484 -2.396 2.614 -2.126 2.866 -2.418 2.594 -2.656 -2.422 -4.312 -3.796 -5.302 -4.618 -0.684 -0.566 -1.176 -0.976 -1.218 -1.076 0.01 -0.032 0.076 -0.114 0.132 -0.188 1.832 -2.358 3.232 -3.752 5.758 -4.792 1.69 0.114 3.336 1.71 6.448 4.31 0.074 0.062 0.112 0.102 0.13 0.112 -0.024 0.028 -0.078 0.082 -0.192 0.172l-0.002 0.002Zm-7.03 36.182c0.13 -0.15 0.192 -0.174 0.216 -0.176 0.39 0.042 1.758 1.976 5.848 4.988 0.408 0.302 0.794 0.586 0.838 0.644 0 0 -0.016 0.032 -0.094 0.102 -5.716 5.14 -5.098 5.434 -11.898 0.254 0.162 -0.332 2.326 -2.644 5.09 -5.812Z'
            strokeWidth='2'
          ></path>
        </g>
        <g id='sim 2'>
          <path
            id='vector_12'
            fill={isMobile ? 'white' : '#000000'}
            d='M211.934 261.282c-0.166 3.648 -1.564 5.46 -11.096 17.374 -8.144 10.178 -22.73 27.142 -31.966 36.258 -5.572 5.5 -6.602 6.384 -21.356 -5.644 -5.122 -4.176 -18.724 -15.79 -22.188 -21.25 -1.048 -1.652 -1.088 -3.374 -0.086 -5.108 5.574 -9.67 30.036 -36.508 32.854 -39.53 12.35 -13.236 16.456 -17.994 20.628 -18.94 4.026 -0.914 25.466 17.954 28.752 21.164 3.026 2.956 3.862 4.234 4.218 6.732 0.282 1.982 0.37 6.12 0.242 8.948l-0.002 -0.004Zm-1.86 -1.572c-0.62 -7.424 -0.27 -9.202 -2.122 -10.696 -5.036 -4.06 -21.714 -19.428 -27.238 -22.242 -2.382 -1.214 -3.774 -0.072 -10.018 6.66 -4.268 4.602 -25.63 28.538 -27.398 30.574 -17.384 19.998 -17.748 20.86 -15.94 23.528 2.614 3.858 24.228 23.666 33.914 29.278 3.128 1.812 5.2 -1.62 31.608 -32.43 15.248 -17.79 17.564 -20.236 17.194 -24.672Z'
            strokeWidth='2'
          ></path>
          <path
            id='vector_13'
            fill={isMobile ? 'white' : '#000000'}
            d='M184.116 274.064c-3.356 -3.52 -15.128 -14.154 -21.74 -17.912 -4.24 -2.408 -9.508 5.044 -12.292 8.032 -17.87 19.186 -19.236 20.268 -12.556 27.582 3.36 3.674 15.75 14.648 20.77 17.582 4.63 2.704 9.616 -3.696 13.442 -7.92 18.394 -20.302 18.748 -20.686 12.378 -27.362l-0.002 -0.002Zm-30.618 29.162c-0.286 -0.07 -4.892 -4.27 -4.894 -4.326 -0.012 -0.352 1.514 -1.904 2.334 -2.738 6.588 -6.706 6.364 -7.912 6.75 -7.598 0.666 0.536 4.674 3.514 4.284 4.278 -0.726 1.42 -0.114 0.212 -8.422 10.292 -0.03 0.036 -0.05 0.09 -0.05 0.09l-0.002 0.002Zm-14.252 -23.566c0.23 -0.276 0.228 -0.308 6.782 5.198 0.988 0.83 -0.082 -0.058 -4.664 6.402 -0.186 0.262 -0.398 0.56 -0.456 0.592 -0.086 -0.018 -0.346 -0.274 -0.554 -0.478 -5.51 -5.408 -6.012 -5.806 -1.108 -11.714Zm20.924 -0.474c0.326 0.15 3.574 2.844 4.332 3.632 -0.598 0.884 -2.988 4.046 -4.068 5.606 -0.138 0.2 0.028 0.378 -1.876 -1.32 -2.362 -2.108 -2.378 -2.134 -2.93 -2.464 0.01 -0.306 0.976 -1.072 4.544 -5.456l-0.002 0.002Zm18.766 -5.676c-0.606 0.636 -4.008 4.798 -4.178 5.006 -3.948 4.852 -4.94 5.954 -6.582 4.784 -1.914 -1.36 -3.786 -2.714 -3.866 -2.994 0.096 -0.2 0.15 0.116 8.426 -9.332 1.138 -1.3 1.6 -2.252 1.928 -2.284 0.474 0 1.746 1.418 4.588 3.938 0.312 0.278 0.162 0.382 -0.316 0.88v0.002Zm-7.352 -3.986c-7.126 8.024 -7.994 9.764 -8.428 9.8 -0.02 0.016 -0.206 -0.138 -0.344 -0.262 -4.45 -3.964 -4.378 -4.054 -3.206 -5.55 2.832 -3.616 7.578 -9.208 8.77 -10.27 0.104 0.084 4.87 4.038 4.916 4.164 0.012 0.184 -0.672 0.954 -1.708 2.12v-0.002Zm-13.098 7.986c0.5 0.436 0.494 0.398 0 0.842 -0.256 0.23 -4.278 4.962 -4.048 5.04 -0.09 -0.022 -0.372 -0.226 -0.698 -0.462l-0.268 -0.194c-1.276 -0.91 -2.37 -2.242 -4.004 -0.714 -1.61 1.51 -2.004 2.118 -2.208 2.226 -0.042 -0.014 -4.484 -4.218 -4.56 -4.282 -0.052 -0.046 -1.972 -1.718 -1.976 -1.788 -0.016 -0.358 1.424 -1.938 4.906 -5.754 1.824 -2 7.688 -8.478 7.73 -8.518 0.282 0.214 0.786 0.846 2.358 2.172 0.84 0.708 3.424 2.87 4.444 3.57 -2.242 3.062 -4.81 5.128 -1.678 7.866l0.002 -0.004Zm-16.078 15.092c8.366 -9.824 7.812 -9.906 9.51 -8.62 2.238 1.696 3.804 2.958 4.348 3.472 -0.46 0.52 -6.962 7.19 -9.062 10.192 -0.226 -0.036 -1.558 -1.386 -3.458 -3.122 -1.388 -1.256 -1.872 -1.3 -1.338 -1.922Zm20.794 1.596c0.568 -0.93 0.63 -2.332 -0.374 -3.096 -0.488 -0.374 -0.884 -0.86 -1.304 -1.308 4.866 -5.6 4.056 -6.094 5.138 -5.336 0.49 0.342 1.23 0.858 2.512 0.89 1.914 0.044 2.752 -0.926 4.144 -2.536l0.724 -0.836c0.15 0.042 0.992 1 2.386 2.158 0.542 0.45 3.528 2.878 4.496 3.6 -0.14 0.366 -0.686 0.978 -4.688 5.474 -8.24 9.26 -8.476 9.58 -8.71 9.622l-5.94 -5.708c-0.666 -0.64 0.028 -0.324 1.616 -2.924Zm12.226 -13.7c3.258 -4.098 4.948 -6.17 5.392 -6.462 5.614 5.256 7.522 5.966 2.184 11.356 -0.278 0.278 -0.622 0.986 -0.848 0.986 -0.312 -0.162 -6.016 -5.206 -6.458 -5.564 -0.118 -0.096 -0.282 -0.23 -0.27 -0.314v-0.002Zm-8.642 -18.262c-1.282 1.01 -2.278 2.324 -3.336 3.484 -2.396 2.614 -2.126 2.866 -2.418 2.594 -2.656 -2.422 -4.312 -3.796 -5.302 -4.618 -0.684 -0.566 -1.176 -0.976 -1.218 -1.076 0.01 -0.032 0.076 -0.114 0.132 -0.188 1.832 -2.358 3.232 -3.752 5.758 -4.792 1.69 0.114 3.336 1.71 6.448 4.31 0.074 0.062 0.112 0.102 0.13 0.112 -0.024 0.028 -0.078 0.082 -0.192 0.172l-0.002 0.002Zm-7.03 36.182c0.13 -0.15 0.192 -0.174 0.216 -0.176 0.39 0.042 1.758 1.976 5.848 4.988 0.408 0.302 0.794 0.586 0.838 0.644 0 0 -0.016 0.032 -0.094 0.102 -5.716 5.14 -5.098 5.434 -11.898 0.254 0.162 -0.332 2.326 -2.644 5.09 -5.812Z'
            strokeWidth='2'
          ></path>
        </g>
        <g id='sim tray'>
          <path
            id='vector_14'
            fill={isMobile ? 'white' : '#000000'}
            d='M332.084 200.352c0.462 -2.648 0.544 -2.656 0.1 -2.714 -2.04 -0.266 -47.19 -9.4 -47.266 -9.414 -19.398 -3.782 -17.646 -3.758 -19.564 -5.026 -0.876 -0.58 -0.972 -1.43 1.092 -11.894 0.444 -2.252 5.534 -25.596 6.278 -28.254 2.01 -7.178 1.958 -7.782 3.214 -8.294 0.56 -1.378 1.6 -1.056 6.152 -0.478 16.094 2.038 47.978 8.6798 60.306 10.4298 0.676 0.096 0.676 0.0622 0.856 -0.6178 0.464 -1.768 1.002 -3.528 1.382 -5.316 0.574 -2.7 4.926 -2.394 7.012 -1.18 3.148 1.83 1.794 2.746 -1.894 22.02 -7.422 38.776 -7.616 47.942 -12.164 47.16 -5.486 -0.944 -6.46 -0.936 -5.502 -6.42l-0.002 -0.002Zm-64.53 -18.844c0.072 0.9818 0.3 0.46 1.842 0.744 20.816 3.828 47.94 9.7458 63.322 12.6758 0.908 0.174 -0.092 -0.0238 9.43 -45.8458 0.286 -1.372 0.232 -1.156 -1.03 -1.42 -5.722 -1.202 -44.986 -7.656 -56.144 -9.98 -8.294 -1.726 -8.068 -2.486 -8.38 -0.85 -0.01 0.048 -9.024 44.624 -9.038 44.676h-0.002Zm69.866 20.032c2.83 -0.054 2.61 -4.098 -0.13 -4.178 -2.598 -0.076 -2.766 4.234 0.13 4.178Z'
            strokeWidth='2'
          ></path>
          <path
            id='vector_15'
            fill={isMobile ? 'white' : '#000000'}
            d='M334.574 161.6776c-0.014 1.982 -3.202 18.776 -3.682 20.7 -1.442 5.776 -2.14 5.238 -7.756 4.486 -2.672 -0.358 -43.232 -7.508 -47.3 -8.54 -1.73 -0.438 -2.634 -1.678 -2.32 -3.33 1.512 -7.94 3.39 -23.526 6.142 -30.68 0.958 -2.488 0.266 -3.344 29.926 2.364 13.914 2.678 14.054 2.286 15.9 4.122 10.08 10.024 9.11 8.388 9.09 10.878Zm-1.658 -0.12c0.178 -0.798 -0.72 -0.922 -2.672 -2.958 -4.448 -4.638 -4.144 -4.7 -6.67 -6.772 -1.226 -1.006 -39.564 -6.934 -41.284 -7.35 -1.088 -0.264 -0.57 -1.562 -4.62 19.502 -2.354 12.242 -2.532 11.536 -1.744 11.648 9.676 1.362 26.944 4.678 40.1 7.434 7.94 1.662 8.09 1.15 11.536 1.996 0.59 0.144 -0.364 2.096 5.354 -23.5Z'
            strokeWidth='2'
          ></path>
        </g>
      </g>
    </svg>
  );
}